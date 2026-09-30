/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session and returns the URL to send the buyer to.
 * Monthly plans open in subscription mode with a seven day trial and recur
 * until cancelled. One time
 * packages open in payment mode and charge once.
 *
 * Body: { planId: string, currency?: 'usd' | 'gbp' | 'eur' }
 * Response: { ok: true, url } or { ok: false, error }
 *
 * The prices below are the ones Stripe charges. They are deliberately kept
 * here rather than read from the request, because anything the browser sends
 * can be edited on the way. src/data/plans.ts holds the same numbers for
 * display; if you change one, change both.
 *
 * Needs STRIPE_SECRET_KEY set in the Vercel project. Without it this endpoint
 * answers 503 and the site falls back to the booking popup, which is the
 * behaviour you want while the key is still missing.
 */

type Currency = 'usd' | 'gbp' | 'eur';

interface CatalogEntry {
  name: string;
  description: string;
  /** Amounts in major units. Converted to the smallest unit below. */
  price: Record<Currency, number>;
  mode: 'subscription' | 'payment';
  /** Free days before the first charge. Subscriptions only. */
  trialDays?: number;
}

const CATALOG: Record<string, CatalogEntry> = {
  'marketing-seo-monthly': {
    name: 'Marketing & SEO plan',
    description: 'Monthly SEO, content, social, ads, landing pages and reporting.',
    price: { usd: 799, gbp: 639, eur: 749 },
    mode: 'subscription',
    trialDays: 7,
  },
  'ops-systems-monthly': {
    name: 'Ops & Systems plan',
    description: 'The operational system built from scratch, documented and maintained.',
    price: { usd: 899, gbp: 719, eur: 839 },
    mode: 'subscription',
    trialDays: 7,
  },
  'sales-crm-monthly': {
    name: 'Sales & CRM plan',
    description: 'CRM built and maintained, chatbot, AI agents, email marketing and sequences.',
    price: { usd: 999, gbp: 799, eur: 929 },
    mode: 'subscription',
    trialDays: 7,
  },
  'hr-admin-monthly': {
    name: 'HR & Admin plan',
    description: 'Payroll, policies, records, contracts and one role recruited a month.',
    price: { usd: 549, gbp: 439, eur: 509 },
    mode: 'subscription',
    trialDays: 7,
  },
  'brand-content-monthly': {
    name: 'Brand & Content plan',
    description: 'Content calendar, twelve graphics, four videos, templates and a long piece.',
    price: { usd: 699, gbp: 559, eur: 649 },
    mode: 'subscription',
    trialDays: 7,
  },
  'compliance-filings-monthly': {
    name: 'Compliance & Filings plan',
    description: 'Filing deadlines owned, filings submitted, registered agent and records.',
    price: { usd: 249, gbp: 199, eur: 229 },
    mode: 'subscription',
    trialDays: 7,
  },
  'everything-monthly': {
    name: 'Everything plan',
    description: 'All six monthly plans together, on one invoice.',
    price: { usd: 3299, gbp: 2639, eur: 3069 },
    mode: 'subscription',
    trialDays: 7,
  },
  'starter-build': {
    name: 'Starter package',
    description: 'One time build. Live in 7 days.',
    price: { usd: 1499, gbp: 1199, eur: 1389 },
    mode: 'payment',
  },
  'growth-build': {
    name: 'Growth package',
    description: 'One time build. Live in 14 days.',
    price: { usd: 3499, gbp: 2799, eur: 3249 },
    mode: 'payment',
  },
  'ultimate-build': {
    name: 'Ultimate package',
    description: 'One time build. Live in 28 days.',
    price: { usd: 6999, gbp: 5599, eur: 6499 },
    mode: 'payment',
  },
};

const CURRENCIES: Currency[] = ['usd', 'gbp', 'eur'];

/** Stripe wants the smallest unit. All three of ours have 100 to the unit. */
const toMinorUnits = (amount: number) => Math.round(amount * 100);

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

  const entry = CATALOG[planId];
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

  const origin = siteOrigin(req);

  // Stripe's REST API takes form encoded bodies with bracketed keys. Calling it
  // directly keeps the function dependency free and cold starts short.
  const form = new URLSearchParams();
  form.set('mode', entry.mode);
  form.set('success_url', `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set('cancel_url', `${origin}/packages?checkout=cancelled`);
  form.set('billing_address_collection', 'required');
  form.set('allow_promotion_codes', 'true');
  form.set('line_items[0][quantity]', '1');
  form.set('line_items[0][price_data][currency]', currency);
  form.set('line_items[0][price_data][unit_amount]', String(toMinorUnits(entry.price[currency])));
  form.set('line_items[0][price_data][product_data][name]', entry.name);
  form.set('line_items[0][price_data][product_data][description]', entry.description);
  form.set('metadata[plan_id]', planId);
  if (entry.mode === 'subscription') {
    form.set('line_items[0][price_data][recurring][interval]', 'month');
    // Seven free days. Stripe collects the card at checkout and raises the
    // first invoice on day eight, so a customer who cancels inside the week
    // is never charged. The site promises this, so the API has to honour it
    // rather than leaving it as marketing copy.
    if (entry.trialDays) {
      form.set('subscription_data[trial_period_days]', String(entry.trialDays));
      form.set('subscription_data[trial_settings][end_behavior][missing_payment_method]', 'cancel');
    }
  }

  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
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
