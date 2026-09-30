# Stripe

## What is already done

Set up in the **Calpir sandbox** account (`acct_1UL41HC6yRyaZyeM`), test mode:

- **10 products, 10 prices.** One per plan and package, each price carrying all
  three currencies as `currency_options`, so a customer paying in pounds gets
  the pound figure rather than a converted dollar one.
- **Lookup keys.** Every price's `lookup_key` is the plan id used on the site,
  e.g. `marketing-seo-monthly`. The code finds prices by that key, never by a
  hardcoded `price_...` id, so the same deploy works against test and live.
- **Seven day trial**, set on all seven recurring prices *and* stated again in
  `api/checkout.ts`, so the promise on the site is enforced in two places.
- **Tax behaviour: exclusive** on every price. Change this before turning on
  Stripe Tax if your prices are meant to include tax.
- **Webhook endpoint** at `https://calpir.com/api/stripe-webhook`, listening for
  `checkout.session.completed`, `customer.subscription.deleted`,
  `customer.subscription.updated`, `invoice.payment_failed` and `invoice.paid`.
- **Customer portal**, with invoice history, payment method updates, plan
  switching between the seven monthly plans, promotion codes, and cancellation
  at period end with a reason collected. Shareable login page is on.

## What still needs a human

### 1. The secret key, in Vercel

Stripe → Developers → API keys → reveal the secret key.

In Vercel → your project → Settings → Environment Variables:

| Name | Value |
|---|---|
| `STRIPE_SECRET_KEY` | the `sk_test_...` key, for Preview and Development |
| `STRIPE_WEBHOOK_SECRET` | see below |
| `SITE_URL` | `https://calpir.com` |

The `sk_test` key that was pasted into a chat earlier should be **rolled**
before anything real depends on it. Roll it, then paste the fresh one into
Vercel. Never paste an `sk_live_` key anywhere but Vercel.

### 2. The webhook secret

Stripe → Developers → Webhooks → the `calpir.com/api/stripe-webhook` endpoint →
**Reveal** the signing secret (`whsec_...`) → copy it into Vercel as
`STRIPE_WEBHOOK_SECRET`.

Without it the webhook handler rejects every event, which is the correct
behaviour: an unverified webhook is an open door.

### 3. Repeat the catalogue in live mode

Everything above is in the sandbox. When you are ready to take real money,
connect the live account and the same setup can be repeated against it. Use
**the same lookup keys**; nothing in the code changes.

### 4. Three dashboard switches worth turning on

- **Revenue recovery** (Billing → Revenue recovery): retries failed payments on
  a schedule and emails the customer. Without it, one declined card silently
  ends a subscription.
- **Customer emails** (Settings → Customer emails): receipts and failed payment
  emails. Off by default in test mode.
- **Stripe Tax** (Tax → Settings): if you turn it on, set your origin address
  and check the `tax_behavior` on the prices first.

## Checking the prices have not drifted

The site shows `src/data/plans.ts`. Stripe charges the Price with the matching
lookup key. This checks they agree:

```bash
STRIPE_SECRET_KEY=sk_test_... node scripts/check-stripe-prices.mjs
```

It reports every plan and every currency, warns about anything active in Stripe
that the site does not sell, and exits non zero on a mismatch. Run it after
changing any price, and against the live key before the first real customer.

## How a purchase actually flows

1. The browser posts `{ planId, currency }` to `/api/checkout`. **No amount is
   ever sent from the browser.**
2. `api/checkout.ts` checks the plan id against its own allowlist, resolves the
   Stripe price by lookup key, and opens a Checkout Session: subscription mode
   with a seven day trial for a plan, payment mode with an invoice and a
   customer record for a package.
3. Stripe collects the card. For a monthly plan it charges nothing until day
   eight.
4. Stripe calls the webhook. `api/stripe-webhook.ts` verifies the signature,
   then posts a notification to the Formspree address so a new customer,
   cancellation or failed payment lands in the inbox.
5. The customer manages everything else themselves in the portal.

## If payments are not switched on

With no `STRIPE_SECRET_KEY`, `/api/checkout` answers 503 with a friendly message
and the site falls back to the booking popup. That is deliberate: a missing key
should cost you a call, not a customer.
