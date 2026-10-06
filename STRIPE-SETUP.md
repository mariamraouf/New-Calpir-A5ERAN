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
- **Webhook** at `https://www.calpir.com/api/stripe-webhook` on
  `checkout.session.completed`, `customer.subscription.deleted`,
  `customer.subscription.updated`, `invoice.payment_failed`, `invoice.paid`.
  Both accounts point at that same one URL. See "One webhook, both accounts"
  below for why that is safe and why it is better than two.
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
| `STRIPE_SECRET_KEY` | the **live** `sk_live_...` key | Production only |
| `STRIPE_SECRET_KEY` | the sandbox `sk_test_...` key | Preview, Development |
| `STRIPE_WEBHOOK_SECRET` | `<live whsec_...>,<sandbox whsec_...>` | Production only |
| `SITE_URL` | `https://www.calpir.com` | Production only |

Three things about that table are deliberate and easy to get wrong.

**The secret key split is the whole point.** Production takes real money,
previews cannot, because a preview build only ever holds a test key.

**`STRIPE_WEBHOOK_SECRET` holds both secrets, comma separated, on Production.**
Not one per environment. Stripe sends every event to the live site whichever
mode it came from, so the live site is the one that has to recognise both. A
preview build never receives a webhook and does not need the variable at all.

**`SITE_URL` is Production only.** `api/checkout.ts` falls back to the host the
request arrived on, so a preview deploy returns the buyer to that preview
rather than bouncing them to the live site mid test. Set it on all three and
every preview checkout ends up on www.

Never prefix either secret with `VITE_`. Anything named `VITE_something` is
bundled into the JavaScript every visitor downloads.

The `sk_test` key that was pasted into a chat should be **rolled**. Never paste
an `sk_live_` key anywhere but Vercel.

### 2. Webhook signing secrets

Stripe → Developers → Webhooks → the `www.calpir.com/api/stripe-webhook`
endpoint → **Reveal** → copy. Do this twice, once signed into the live account
and once in the sandbox, then put **both** into the single Production
`STRIPE_WEBHOOK_SECRET`, separated by a comma:

```
whsec_theLiveOne,whsec_theSandboxOne
```

Order does not matter and spaces around the comma are ignored.

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

## Is the key the right one? /api/stripe-health

A Stripe key from the wrong account does not fail loudly. Stripe accepts it,
answers 200, and reports that no price matches the lookup key. The site then
tells the customer "that plan is not open for card payment yet", which reads
like a problem with the products rather than with which account is being asked.
Vercel cannot help either: once saved, a secret is write only, and the masked
hint it shows is not enough to identify an account.

So open **https://www.calpir.com/api/stripe-health** and it will tell you:

```json
{
  "ok": true,
  "account": { "id": "acct_...", "name": "Calpir", "country": "GB", "livemode": true },
  "plans": { "found": [ ...ten ids... ], "missing": [] },
  "verdict": "Healthy. This key belongs to Calpir and all 10 plans resolve."
}
```

`ok: true` and an empty `missing` means payments work. Anything else names the
problem: which account the key actually belongs to, which plans that account
cannot sell, or that Stripe rejected the key outright. The key itself is never
returned, logged or echoed, and account id and business name are not secrets:
the account id is already inside the publishable key every visitor downloads.

**Check it after any key change.** It answers 200 when healthy and 409 when not,
so it also works as an uptime check.

The same information now appears in the Vercel log when a checkout fails, naming
the account the key reached rather than only the missing lookup key.

## One webhook, both accounts

`api/stripe-webhook.ts` verifies a signature and sends an email. It never calls
the Stripe API, so it holds no secret key and does not care which account an
event came from. That is what makes a single endpoint safe for both.

`STRIPE_WEBHOOK_SECRET` is therefore a list. The handler tries each secret in
turn with a constant time comparison and accepts the event if any one matches.
An event signed with neither is still rejected with a 400, exactly as before.

Two things fall out of this:

- **One place to look.** A sandbox sale and a real one land in the same inbox.
- **Rotating a secret drops nothing.** Add the new secret beside the old one,
  deploy, confirm events still arrive, then remove the old one.

**A sandbox event is labelled.** Stripe sets `livemode` on the event itself and
the body is signed, so it cannot be forged. When it is false the subject line
becomes `[TEST] New Calpir subscriber` and the first line of the email reads
`THIS IS A SANDBOX EVENT`. A test can never be mistaken for a sale.

## Running a test checkout

Preview builds hold the sandbox key, so every checkout on one is fake money.

1. Push any branch other than `main`. Vercel builds it and gives you a preview
   URL.
2. Open `/pricing` on that URL and buy something.
3. Pay with `4242 4242 4242 4242`, any future expiry, any CVC, any postcode.
4. The `[TEST]` email should arrive at info@calpir.com within a few seconds.
   That is the only thing that proves the sandbox signing secret is right.

Other cards worth knowing:

| Number | What it does |
|---|---|
| `4242 4242 4242 4242` | succeeds |
| `4000 0025 0000 3155` | asks for 3D Secure |
| `4000 0000 0000 9995` | declines, insufficient funds |
| `4000 0000 0000 0341` | attaches fine, then fails on the charge |

What to look for: a monthly plan should say **nothing due today** and create a
subscription in `trialing`; a build package should charge in full immediately;
switching to GBP should charge the pound figure printed on the card rather than
a conversion of the dollar one.

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
