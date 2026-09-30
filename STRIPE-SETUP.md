# Stripe

Two accounts are set up identically:

| | Account | Mode |
|---|---|---|
| Live | `acct_1UL416C0VMEUT0zu` "Calpir" | real money |
| Sandbox | `acct_1UL41HC6yRyaZyeM` "Calpir sandbox" | test |

Both carry the same ten products, the same ten lookup keys and the same
webhook and portal setup, so **the code does not change between them**. Which
one you are talking to is decided entirely by which secret key is in the
environment.

## What is already done, in both

- **10 products, 10 prices.** One per plan and package. Each price carries usd,
  gbp and eur as `currency_options`, so a pound buyer is charged the pound
  figure rather than a converted dollar one.
- **Lookup keys.** Every price's `lookup_key` is the plan id used on the site,
  e.g. `marketing-seo-monthly`. `api/checkout.ts` resolves prices by that key,
  never by a `price_...` id, which is why one deploy serves both accounts.
- **Seven day trial** on all seven recurring prices, and set again on the
  Checkout Session, so the promise is enforced in Stripe and visible in the
  code that makes it.
- **Adaptive Pricing off.** It is on by default and converts into the buyer's
  local currency at Stripe's rate, which contradicts the pricing page. Off on
  every session.
- **Tax behaviour: exclusive** on every price. Change this before enabling
  Stripe Tax if your prices are meant to include tax.
- **Webhook** at `https://calpir.com/api/stripe-webhook` on
  `checkout.session.completed`, `customer.subscription.deleted`,
  `customer.subscription.updated`, `invoice.payment_failed`, `invoice.paid`.
- **Customer portal**, default configuration: invoice history, card updates,
  switching between the seven monthly plans, promotion codes, cancel at period
  end with a reason collected, shareable login page on.

A note on how live was built: the products and prices already existed in live
when the account was connected, copied from the sandbox, but **the copy
dropped every non dollar amount**. All ten live prices were USD only. GBP and
EUR were added back by hand and verified. If you ever copy a sandbox into live
again, check `currency_options` before trusting it.

## What still needs a human

### 1. Keys, in Vercel

Vercel → project → Settings → Environment Variables:

| Name | Value | Environment |
|---|---|---|
| `STRIPE_SECRET_KEY` | the **live** `sk_live_...` key | Production |
| `STRIPE_SECRET_KEY` | the **test** `sk_test_...` key | Preview, Development |
| `STRIPE_WEBHOOK_SECRET` | the live `whsec_...` (see below) | Production |
| `STRIPE_WEBHOOK_SECRET` | the test `whsec_...` | Preview, Development |
| `SITE_URL` | `https://calpir.com` | all |

That split is the whole point: production takes real money, previews cannot.

The `sk_test` key that was pasted into a chat should be **rolled**. Never paste
an `sk_live_` key anywhere but Vercel.

### 2. Webhook signing secrets

Stripe → Developers → Webhooks → the `calpir.com/api/stripe-webhook` endpoint →
**Reveal** → copy into Vercel. Do this once in live mode and once in test mode;
they are different secrets.

Without it the handler rejects every event, which is correct: an unverified
webhook is an open door.

### 3. Check the account is activated

Live charges need your business details and a bank account on file. Stripe →
Settings → Business. Until that is complete, the catalogue exists but nothing
can actually be paid.

### 4. Three dashboard switches worth turning on, in live

- **Revenue recovery** (Billing → Revenue recovery): retries failed payments
  and emails the customer. Without it, one declined card silently ends a
  subscription.
- **Customer emails** (Settings → Customer emails): receipts and failed payment
  notices.
- **Stripe Tax** (Tax → Settings): if you enable it, set your origin address
  and re-check `tax_behavior` on the prices first.

## Checking the prices have not drifted

The site shows `src/data/plans.ts`. Stripe charges the Price with the matching
lookup key. This checks they agree:

```bash
# test
STRIPE_SECRET_KEY=sk_test_... node scripts/check-stripe-prices.mjs
# live
STRIPE_SECRET_KEY=sk_live_... node scripts/check-stripe-prices.mjs
```

It reports every plan in every currency, flags anything active in Stripe the
site does not sell, and exits non zero on a mismatch. Run it after changing any
price, and against live before the first real customer.

Last verified: all 10 plans, all 3 currencies, both accounts, zero mismatches.

## Changing a price once customers exist

Prices in Stripe are close to immutable. `unit_amount` cannot be edited, so a
price change means creating a new Price and moving the lookup key onto it with
`transfer_lookup_key: true`. Existing subscriptions keep the old price until
you migrate them; new checkouts pick up the new one automatically because the
code resolves by lookup key. Update `src/data/plans.ts` in the same change, or
the site and Stripe will disagree.

## How a purchase actually flows

1. The browser posts `{ planId, currency }` to `/api/checkout`. **No amount is
   ever sent from the browser.**
2. `api/checkout.ts` checks the plan id against its own allowlist, resolves the
   Stripe price by lookup key, and opens a Checkout Session: subscription mode
   with a seven day trial for a plan, payment mode with an invoice and a
   customer record for a package.
3. Stripe collects the card. For a monthly plan it charges nothing until day
   eight.
4. Stripe calls the webhook. `api/stripe-webhook.ts` verifies the signature and
   posts a notification to Formspree, so a new customer, a converting trial, a
   cancellation or a failed payment lands in the inbox.
5. The customer manages everything else themselves in the portal.

## If payments are not switched on

With no `STRIPE_SECRET_KEY`, `/api/checkout` answers 503 with a friendly
message and the site falls back to the booking popup. A missing key should cost
you a call, not a customer.
