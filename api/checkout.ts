/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session and returns the URL to send the buyer to.
 * Monthly plans open in subscription mode with a seven day trial and recur
 * until cancelled. One time packages open in payment mode and charge once.
 *
 * Body: { planId: string, currency?: 'usd' | 'gbp' | 'eur' }
 * Response: { ok: true, url } or { ok: false, error }
 *
 * WHERE THE PRICES LIVE
 *
 * In Stripe, and nowhere else. Every plan has a Price object carrying all
 * three currencies, found here by its `lookup_key`, which is the same string
 * as the plan id on the site. This file used to carry a second copy of every
 * amount, which meant a price could be right on the page, right in this file
 * and still wrong somewhere, and it meant changing a price needed a deploy.
 * Now the page shows what src/data/plans.ts says and Stripe charges what
 * Stripe says, and the check below shouts if those two ever disagree.
 *
 * Lookup keys rather than price ids on purpose: the same code then works
 * against the test account and the live one without an environment variable
 * per price. Create the live prices with the same lookup keys and it just
 * works.
 *
 * Needs STRIPE_SECRET_KEY set in the Vercel project. Without it this endpoint
 * answers 503 and the site falls back to the booking popup, which is the
 * behaviour you want while the key is still missing.
 */

import { SERVICE_PRICES } from './_service-prices.js';

type Currency = 'usd' | 'gbp' | 'eur';

const CURRENCIES: Currency[] = ['usd', 'gbp', 'eur'];

/**
 * What the browser is allowed to ask for.
 *
 * The request only ever names a plan, never an amount, so nothing a customer
 * can edit reaches Stripe. This list exists so a made up lookup key cannot be
 * sent either.
 */
const SELLABLE: Record<string, { mode: 'subscription' | 'payment'; trialDays?: number }> = {
  'marketing-seo-monthly': { mode: 'subscription', trialDays: 7 },
  'ops-systems-monthly': { mode: 'subscription', trialDays: 7 },
  'sales-crm-monthly': { mode: 'subscription', trialDays: 7 },
  'hr-admin-monthly': { mode: 'subscription', trialDays: 7 },
  'brand-content-monthly': { mode: 'subscription', trialDays: 7 },
  'compliance-filings-monthly': { mode: 'subscription', trialDays: 7 },
  'everything-monthly': { mode: 'subscription', trialDays: 7 },
  'starter-build': { mode: 'payment' },
  'growth-build': { mode: 'payment' },
  'ultimate-build': { mode: 'payment' },
};

/**
 * The 65 solo services, which are sold one at a time.
 *
 * These have no Stripe Price of their own, and deliberately so. The six plans
 * and three packages are a short, slow moving list worth keeping in Stripe;
 * sixty five single jobs would mean sixty five products in two accounts, kept
 * in step with the page by hand forever. So the amount is built into the
 * Checkout Session at request time from ./_service-prices.ts.
 *
 * That file is generated from src/data/servicePricing.ts, the same file the
 * page prints from, and scripts/check-service-prices.mjs fails the build if
 * the two ever drift, so the page and the charge cannot disagree. It is a
 * sibling rather than a direct import of src/ because a Vercel function
 * cannot reliably import across the repository: doing so stopped this whole
 * endpoint from loading and took the plans down with it.
 *
 * The browser still never sends an amount. It sends a slug, and anything not
 * in this map is refused before Stripe is contacted.
 */
const sellableService = (slug: string, currency: Currency) => {
  const price = SERVICE_PRICES[slug];
  if (!price) return null;

  const amount = price[currency];
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) {
    console.error(`service "${slug}" has no usable ${currency} price`);
    return null;
  }

  return {
    name: price.name,
    // Stripe wants the smallest unit. Every currency we sell in has 100 of
    // them, and the figures are whole, but round anyway rather than trust
    // floating point to hand us an integer.
    unitAmount: Math.round(amount * 100),
    turnaround: price.turnaround,
  };
};

/**
 * Buying several services at once.
 *
 * Three or more together takes 20 percent off, five or more takes 30. The
 * thresholds live here and nowhere else: the page reads them from the same
 * export so the banner, the running total and the actual charge cannot drift
 * apart, and the browser never sends a percentage, only a list of slugs.
 *
 * Applied as a Stripe coupon rather than by quietly shrinking each line, so
 * the buyer sees Subtotal, Discount and Total spelled out on Stripe's page
 * instead of having to trust that the numbers already moved.
 */
export const BUNDLE_TIERS = [
  { min: 5, percent: 30 },
  { min: 3, percent: 20 },
] as const;

export const bundleDiscount = (count: number): number =>
  BUNDLE_TIERS.find((t) => count >= t.min)?.percent ?? 0;

/** Nobody is buying more than the catalogue, and it caps the work per request. */
const MAX_ITEMS = 12;

const STRIPE = 'https://api.stripe.com/v1';

/**
 * Warm invocations reuse the resolved price. A serverless function stays
 * alive between requests, so this saves a round trip on most checkouts
 * without ever holding a stale price for long.
 */
const priceCache = new Map<string, { id: string; at: number }>();
const CACHE_MS = 5 * 60 * 1000;

async function stripeGet(path: string, secret: string) {
  const r = await fetch(`${STRIPE}${path}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  return { ok: r.ok, status: r.status, data: (await r.json()) as any };
}

/** Find the Price whose lookup_key is this plan id. */
async function resolvePrice(planId: string, secret: string): Promise<string | null> {
  const hit = priceCache.get(planId);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.id;

  const { ok, data } = await stripeGet(
    `/prices?active=true&limit=1&lookup_keys[]=${encodeURIComponent(planId)}`,
    secret,
  );
  if (!ok || !Array.isArray(data?.data) || data.data.length === 0) {
    // Say WHICH account, because the usual cause is a key from the wrong one.
    // Stripe answers 200 with an empty list for a perfectly valid key on an
    // account that happens not to sell this, so without naming the account
    // this line reads like a missing product when it is a missing account.
    const whose = await stripeGet('/account', secret);
    const who = whose.ok
      ? `${whose.data?.settings?.dashboard?.display_name || 'unnamed'} (${whose.data?.id})`
      : `unknown, /account answered ${whose.status}`;

    console.error(
      `no active Stripe price with lookup_key "${planId}" in the account this ` +
        `key belongs to: ${who}. Either create the price there, or the key is ` +
        'from the wrong Stripe account. GET /api/stripe-health for the full picture.',
      data?.error?.message || '',
    );
    return null;
  }

  const id = data.data[0].id as string;
  priceCache.set(planId, { id, at: Date.now() });
  return id;
}

/**
 * Mint a single use coupon for this basket.
 *
 * Made per checkout rather than kept as two standing coupons, so there is
 * nothing to provision by hand in either Stripe account and nothing a
 * customer can discover and reuse: max_redemptions is 1 and it expires with
 * the session. Returns null if Stripe refuses, and the caller then charges
 * full price rather than failing the sale, because a missing discount is a
 * complaint and a broken checkout is a lost customer.
 */
async function bundleCoupon(
  percent: number,
  count: number,
  secret: string,
): Promise<string | null> {
  const form = new URLSearchParams();
  form.set('percent_off', String(percent));
  form.set('duration', 'once');
  form.set('max_redemptions', '1');
  form.set('name', `Bundle of ${count} services, ${percent}% off`);
  // An hour is longer than anyone takes to type a card, and short enough that
  // an abandoned one cannot be dug up later.
  form.set('redeem_by', String(Math.floor(Date.now() / 1000) + 60 * 60));
  form.set('metadata[source]', 'calpir.com bundle');

  try {
    const r = await fetch(`${STRIPE}/coupons`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    });
    const data: any = await r.json();
    if (!r.ok || !data?.id) {
      console.error('could not create the bundle coupon:', data?.error?.message || r.status);
      return null;
    }
    return data.id as string;
  } catch (err: any) {
    console.error('could not reach Stripe for the bundle coupon:', err?.message || err);
    return null;
  }
}

const siteOrigin = (req: any): string => {
  const envUrl = process.env.SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return host ? `${proto}://${host}` : 'https://www.calpir.com';
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const currency: Currency = CURRENCIES.includes(body.currency) ? body.currency : 'usd';

  // One id or a basket of them. Duplicates collapse, because ticking a box
  // twice is not an order for two.
  const requested: string[] = Array.isArray(body.planIds)
    ? body.planIds.map((x: unknown) => String(x || ''))
    : [String(body.planId || '')];

  const planIds = [...new Set(requested.filter(Boolean))];

  if (planIds.length === 0) {
    res.status(400).json({ ok: false, error: 'Nothing was selected.' });
    return;
  }
  if (planIds.length > MAX_ITEMS) {
    res.status(400).json({ ok: false, error: `That is more than ${MAX_ITEMS} things at once.` });
    return;
  }

  const planId = planIds[0];
  const entry = planIds.length === 1 ? SELLABLE[planId] : undefined;

  // A basket is services only. A plan renews and a service does not, and
  // Stripe cannot put both in one session, so this is refused rather than
  // half honoured.
  const services = entry ? [] : planIds.map((id) => sellableService(id, currency));

  if (!entry && services.some((x) => !x)) {
    const unknown = planIds.filter((_, i) => !services[i]);
    if (planIds.length > 1 && unknown.some((id) => SELLABLE[id])) {
      res.status(400).json({
        ok: false,
        error: 'A monthly plan cannot be bought in the same basket as one off services.',
      });
      return;
    }
    res.status(400).json({ ok: false, error: 'That is not something we sell.' });
    return;
  }

  const service = entry ? null : services[0];
  const percentOff = entry ? 0 : bundleDiscount(services.length);

  // A solo service is a single job, bought once. No trial, and the site says
  // so: the free week belongs to the monthly plans only.
  const mode: 'subscription' | 'payment' = entry ? entry.mode : 'payment';

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error('checkout not configured: STRIPE_SECRET_KEY is missing');
    res.status(503).json({
      ok: false,
      error: 'Card payment is not switched on yet. Book a call and we will send you an invoice.',
    });
    return;
  }

  let priceId: string | null = null;
  if (entry) {
    priceId = await resolvePrice(planId, secret);
    if (!priceId) {
      res.status(503).json({
        ok: false,
        error: 'That plan is not open for card payment yet. Book a call and we will invoice you.',
      });
      return;
    }
  }

  const origin = siteOrigin(req);

  // Stripe's REST API takes form encoded bodies with bracketed keys. Calling it
  // directly keeps the function dependency free and cold starts short.
  const form = new URLSearchParams();
  form.set('mode', mode);
  form.set('currency', currency);
  form.set('success_url', `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set(
    'cancel_url',
    `${origin}${service ? '/solo-services' : '/pricing'}?checkout=cancelled`,
  );
  form.set('billing_address_collection', 'required');
  // Stripe refuses a session that both carries a discount and invites a
  // promotion code, so the bundle discount wins when there is one.
  if (!percentOff) form.set('allow_promotion_codes', 'true');
  // Stripe's Adaptive Pricing is on by default: it converts the price into the
  // buyer's local currency at its own rate. The pricing page promises three
  // currencies that are set rather than converted, so it is turned off here.
  // A visitor in Canada pays the dollar figure on the card, not a Canadian
  // dollar figure that moved since they read it.
  form.set('adaptive_pricing[enabled]', 'false');
  if (priceId) {
    form.set('line_items[0][price]', priceId);
    form.set('line_items[0][quantity]', '1');
  } else {
    // Priced here rather than in Stripe. See the note above sellableService.
    // One line per service, so the buyer sees what they are paying for rather
    // than a single lump labelled "services".
    services.forEach((svc, i) => {
      if (!svc) return;
      form.set(`line_items[${i}][price_data][currency]`, currency);
      form.set(`line_items[${i}][price_data][unit_amount]`, String(svc.unitAmount));
      form.set(`line_items[${i}][price_data][tax_behavior]`, 'exclusive');
      form.set(`line_items[${i}][price_data][product_data][name]`, svc.name);
      form.set(
        `line_items[${i}][price_data][product_data][description]`,
        `One off. Delivered in ${svc.turnaround}.`,
      );
      form.set(`line_items[${i}][quantity]`, '1');
    });
  }

  form.set('metadata[plan_id]', planId);
  form.set('metadata[kind]', entry ? 'plan' : services.length > 1 ? 'service_bundle' : 'solo_service');
  if (!entry) {
    form.set('metadata[service_ids]', planIds.join(','));
    form.set('metadata[service_count]', String(services.length));
    if (percentOff) form.set('metadata[bundle_discount]', `${percentOff}%`);
  }
  form.set('metadata[source]', 'calpir.com');

  if (entry && entry.mode === 'subscription') {
    // Seven free days. Stripe collects the card at checkout and raises the
    // first invoice on day eight, so a customer who cancels inside the week
    // is never charged. The site promises this, so the API has to honour it
    // rather than leaving it as marketing copy. The Price carries the same
    // number; this states it again so the promise is visible in the code
    // that makes it.
    if (entry.trialDays) {
      form.set('subscription_data[trial_period_days]', String(entry.trialDays));
      form.set('subscription_data[trial_settings][end_behavior][missing_payment_method]', 'cancel');
    }
    form.set('subscription_data[metadata][plan_id]', planId);
  } else {
    // A one time buyer should still become a customer, so they get a receipt,
    // an invoice and access to the billing portal like everybody else.
    form.set('customer_creation', 'always');
    form.set('invoice_creation[enabled]', 'true');
  }

  if (percentOff > 0) {
    const coupon = await bundleCoupon(percentOff, services.length, secret);
    if (coupon) {
      form.set('discounts[0][coupon]', coupon);
    } else {
      // Charging full price beats refusing the sale. Put the promotion code
      // box back, since there is no longer a discount to clash with.
      form.set('allow_promotion_codes', 'true');
    }
  }

  try {
    const response = await fetch(`${STRIPE}/checkout/sessions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    });

    const data: any = await response.json();

    if (!response.ok || !data?.url) {
      console.error('stripe rejected the session:', data?.error?.message || response.status);
      res.status(502).json({
        ok: false,
        error: 'We could not open the payment page. Please try again, or book a call and we will invoice you.',
      });
      return;
    }

    res.status(200).json({ ok: true, url: data.url });
  } catch (err: any) {
    console.error('checkout failed:', err?.message || err);
    res.status(502).json({
      ok: false,
      error: 'We could not reach the payment provider. Please try again in a moment.',
    });
  }
}
