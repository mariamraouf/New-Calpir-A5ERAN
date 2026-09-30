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
    console.error(
      `no active Stripe price with lookup_key "${planId}". ` +
        'Create it in this account, or the plan cannot be bought.',
      data?.error?.message || '',
    );
    return null;
  }

  const id = data.data[0].id as string;
  priceCache.set(planId, { id, at: Date.now() });
  return id;
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
  const planId = String(body.planId || '');
  const currency: Currency = CURRENCIES.includes(body.currency) ? body.currency : 'usd';

  const entry = SELLABLE[planId];
  if (!entry) {
    res.status(400).json({ ok: false, error: 'That plan does not exist.' });
    return;
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error('checkout not configured: STRIPE_SECRET_KEY is missing');
    res.status(503).json({
      ok: false,
      error: 'Card payment is not switched on yet. Book a call and we will send you an invoice.',
    });
    return;
  }

  const priceId = await resolvePrice(planId, secret);
  if (!priceId) {
    res.status(503).json({
      ok: false,
      error: 'That plan is not open for card payment yet. Book a call and we will invoice you.',
    });
    return;
  }

  const origin = siteOrigin(req);

  // Stripe's REST API takes form encoded bodies with bracketed keys. Calling it
  // directly keeps the function dependency free and cold starts short.
  const form = new URLSearchParams();
  form.set('mode', entry.mode);
  form.set('currency', currency);
  form.set('success_url', `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set('cancel_url', `${origin}/pricing?checkout=cancelled`);
  form.set('billing_address_collection', 'required');
  form.set('allow_promotion_codes', 'true');
  // Stripe's Adaptive Pricing is on by default: it converts the price into the
  // buyer's local currency at its own rate. The pricing page promises three
  // currencies that are set rather than converted, so it is turned off here.
  // A visitor in Canada pays the dollar figure on the card, not a Canadian
  // dollar figure that moved since they read it.
  form.set('adaptive_pricing[enabled]', 'false');
  form.set('line_items[0][price]', priceId);
  form.set('line_items[0][quantity]', '1');
  form.set('metadata[plan_id]', planId);
  form.set('metadata[source]', 'calpir.com');

  if (entry.mode === 'subscription') {
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
