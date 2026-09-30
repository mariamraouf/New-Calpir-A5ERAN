/**
 * Does Stripe charge what the website says?
 *
 *   STRIPE_SECRET_KEY=sk_... node scripts/check-stripe-prices.mjs
 *
 * The site shows the numbers in src/data/plans.ts. Stripe charges the Price
 * whose lookup_key matches the plan id. Nothing keeps those two honest on its
 * own, so this does: it reads both and exits non zero if any plan, in any of
 * the three currencies, disagrees.
 *
 * Run it after changing a price, and against the live key before the first
 * real customer. It only reads.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PLANS = path.join(__dirname, '../src/data/plans.ts');

const secret = process.env.STRIPE_SECRET_KEY;
if (!secret) {
  console.error('STRIPE_SECRET_KEY is not set. Nothing to check against.');
  process.exit(2);
}

const mode = secret.startsWith('sk_live_') ? 'LIVE' : 'test';

/* ---------- what the website says ---------- */
const src = fs.readFileSync(PLANS, 'utf8');
const wanted = new Map();
const re = /id: '([a-z0-9-]+)',[\s\S]{0,500}?price: \{ usd: (\d+), gbp: (\d+), eur: (\d+) \}/g;
let m;
while ((m = re.exec(src)) !== null) {
  wanted.set(m[1], { usd: +m[2] * 100, gbp: +m[3] * 100, eur: +m[4] * 100 });
}

if (wanted.size === 0) {
  console.error('Could not read any prices out of src/data/plans.ts. Has its shape changed?');
  process.exit(2);
}

/* ---------- what Stripe says ---------- */
const params = new URLSearchParams({ active: 'true', limit: '100' });
params.append('expand[]', 'data.currency_options');
for (const id of wanted.keys()) params.append('lookup_keys[]', id);

const res = await fetch(`https://api.stripe.com/v1/prices?${params}`, {
  headers: { Authorization: `Bearer ${secret}` },
});
const body = await res.json();

if (!res.ok) {
  console.error('Stripe refused the request:', body?.error?.message || res.status);
  process.exit(2);
}

const found = new Map();
for (const price of body.data) {
  if (price.lookup_key) found.set(price.lookup_key, price);
}

/* ---------- compare ---------- */
let problems = 0;
const CURRENCIES = ['usd', 'gbp', 'eur'];

for (const [id, site] of wanted) {
  const price = found.get(id);

  if (!price) {
    console.error(`MISSING  ${id}: no active Stripe price with this lookup_key.`);
    problems += 1;
    continue;
  }

  const isMonthly = id.endsWith('-monthly');
  if (isMonthly && !price.recurring) {
    console.error(`WRONG    ${id}: the site sells this monthly, Stripe has it as one time.`);
    problems += 1;
  }
  if (!isMonthly && price.recurring) {
    console.error(`WRONG    ${id}: the site sells this once, Stripe has it recurring.`);
    problems += 1;
  }
  if (isMonthly && price.recurring && price.recurring.trial_period_days !== 7) {
    console.error(
      `WRONG    ${id}: the site promises a 7 day trial, Stripe has ` +
        `${price.recurring.trial_period_days ?? 'none'}.`,
    );
    problems += 1;
  }

  for (const cur of CURRENCIES) {
    const stripeAmount =
      cur === price.currency ? price.unit_amount : price.currency_options?.[cur]?.unit_amount;

    if (stripeAmount == null) {
      console.error(`MISSING  ${id} (${cur}): Stripe has no amount in this currency.`);
      problems += 1;
    } else if (stripeAmount !== site[cur]) {
      console.error(
        `DRIFT    ${id} (${cur}): site says ${site[cur] / 100}, Stripe charges ${stripeAmount / 100}.`,
      );
      problems += 1;
    }
  }
}

const extra = [...found.keys()].filter((k) => !wanted.has(k));
for (const id of extra) {
  console.warn(`EXTRA    ${id}: active in Stripe but not sold on the site.`);
}

if (problems === 0) {
  console.log(`All ${wanted.size} plans match, in all three currencies. (${mode} mode)`);
  process.exit(0);
}

console.error(`\n${problems} problem${problems === 1 ? '' : 's'} found. (${mode} mode)`);
process.exit(1);
