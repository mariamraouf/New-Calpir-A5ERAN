/**
 * GET /api/stripe-health
 *
 * Answers one question: is the Stripe key in this environment the right one?
 *
 * There is no way to tell from Vercel. A secret key is write only once saved,
 * the masked hint it shows is not enough to identify an account, and a key
 * from the wrong Stripe account fails in the most misleading way possible:
 * Stripe accepts it, answers 200, and simply reports that no price exists.
 * The site then tells the customer the plan is not open for card payment,
 * which sounds like a configuration problem on this end rather than the key
 * pointing at somebody else's account.
 *
 * So this asks Stripe who the key belongs to and whether that account can
 * actually sell the ten things the site lists.
 *
 * Response:
 *   {
 *     ok: false,
 *     account: { id, name, country, livemode },
 *     plans: { found: [...], missing: [...] },
 *     verdict: "..."
 *   }
 *
 * The key is never returned, logged or echoed. Account id, business name and
 * country are not secrets: the account id is already embedded in the
 * publishable key that ships to every visitor.
 */

type Entry = { id: string; label: string };

/** Must match the SELLABLE allowlist in api/checkout.ts. */
const PLANS: Entry[] = [
  { id: 'marketing-seo-monthly', label: 'Marketing & SEO plan' },
  { id: 'ops-systems-monthly', label: 'Ops & Systems plan' },
  { id: 'sales-crm-monthly', label: 'Sales & CRM plan' },
  { id: 'hr-admin-monthly', label: 'HR & Admin plan' },
  { id: 'brand-content-monthly', label: 'Brand & Content plan' },
  { id: 'compliance-filings-monthly', label: 'Compliance & Filings plan' },
  { id: 'everything-monthly', label: 'Everything plan' },
  { id: 'starter-build', label: 'Starter build package' },
  { id: 'growth-build', label: 'Growth build package' },
  { id: 'ultimate-build', label: 'Ultimate build package' },
];

const STRIPE = 'https://api.stripe.com/v1';

/** One check per minute is plenty, and it stops this being a way to hammer Stripe. */
let cached: { at: number; body: any } | null = null;
const CACHE_MS = 60 * 1000;

const get = async (path: string, secret: string) => {
  const r = await fetch(`${STRIPE}${path}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  return { ok: r.ok, status: r.status, data: (await r.json()) as any };
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    res.status(503).json({
      ok: false,
      verdict:
        'No STRIPE_SECRET_KEY in this environment. Nothing can be bought. ' +
        'Add it in Vercel, then redeploy, because a new variable does not reach a build that already exists.',
    });
    return;
  }

  if (cached && Date.now() - cached.at < CACHE_MS) {
    res.status(cached.body.ok ? 200 : 409).json({ ...cached.body, cached: true });
    return;
  }

  // 1. Whose key is this?
  const account = await get('/account', secret);

  if (!account.ok) {
    const body = {
      ok: false,
      verdict:
        account.status === 401
          ? 'Stripe rejected this key. It is expired, revoked, or was pasted with something missing. Create a fresh one and paste it again.'
          : `Stripe answered ${account.status} when asked who this key belongs to.`,
      stripeError: account.data?.error?.message || null,
    };
    cached = { at: Date.now(), body };
    res.status(409).json(body);
    return;
  }

  const who = {
    id: account.data?.id || null,
    name: account.data?.settings?.dashboard?.display_name || account.data?.business_profile?.name || null,
    country: account.data?.country || null,
    livemode: !String(secret).startsWith('sk_test_'),
  };

  // 2. Can that account actually sell what the site lists?
  const found: string[] = [];
  const missing: string[] = [];

  for (const plan of PLANS) {
    const r = await get(
      `/prices?active=true&limit=1&lookup_keys[]=${encodeURIComponent(plan.id)}`,
      secret,
    );
    if (r.ok && Array.isArray(r.data?.data) && r.data.data.length > 0) found.push(plan.id);
    else missing.push(plan.id);
  }

  const allThere = missing.length === 0;

  const body = {
    ok: allThere,
    account: who,
    plans: { found, missing },
    verdict: allThere
      ? `Healthy. This key belongs to ${who.name || who.id} and all ${found.length} plans resolve.`
      : `This key belongs to ${who.name || who.id} (${who.id}), and that account has ` +
        `${missing.length} of the ${PLANS.length} plans missing. If that is not the Stripe ` +
        `account holding your products, the key is from the wrong account: everything will ` +
        `look fine until a customer clicks buy, and then they are told the plan is not for sale.`,
  };

  cached = { at: Date.now(), body };
  res.status(allThere ? 200 : 409).json(body);
}
