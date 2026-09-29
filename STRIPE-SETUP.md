# Turning on card payments

Until you do this, every Subscribe and Buy button still works, it just answers
"Card payment is not switched on yet" and offers the booking calendar instead.
Nothing on the site breaks while the key is missing.

## What you need to do

1. Sign in to your Stripe dashboard and go to **Developers → API keys**.
2. Copy the **Secret key**. It starts with `sk_live_` for real money, or
   `sk_test_` if you want to try it first without charging anyone.
3. Go to your Vercel project → **Settings → Environment Variables**.
4. Add one variable:

   | Name | Value |
   | --- | --- |
   | `STRIPE_SECRET_KEY` | the key you copied |

   Set it for Production, Preview and Development.
5. Redeploy. Vercel will not pick up a new variable until the next deploy.

That is the whole setup. There is nothing to create in Stripe first: no
products, no price objects. The site sends Stripe the name and the amount at
the moment somebody clicks.

**Never paste that key into a file in this repository.** It belongs only in the
Vercel dashboard. Anyone holding it can charge your account.

## Optional

| Name | What it does |
| --- | --- |
| `SITE_URL` | Forces the return address after payment, e.g. `https://www.calpir.com`. Without it the site works this out from the incoming request, which is correct in almost every case. |

## Where the prices live

Two files, deliberately:

- `src/data/plans.ts` is what the visitor sees on screen.
- `api/checkout.ts` is what Stripe actually charges.

They hold the same numbers. The second copy exists because anything the browser
sends can be edited before it arrives, so the amount is never taken from the
page. **If you change a price, change it in both files**, or the card will be
charged the old number.

## What each plan does at checkout

| Plan | Mode | Billing |
| --- | --- | --- |
| Marketing & SEO, Ops & Systems, Sales & Outreach, HR & Admin, Everything | subscription | Charged monthly until cancelled |
| Starter, Growth, Ultimate | payment | Charged once |

Buyers land on `/checkout/success` afterwards, which tells them what happens
next. That page is set to noindex, so it will not turn up in Google.

## Two things worth doing in Stripe once it is live

1. **Customer portal.** Settings → Billing → Customer portal, switch it on.
   That gives subscribers a link to update their card or cancel themselves,
   instead of emailing you.
2. **A test run.** Use a `sk_test_` key and Stripe's test card `4242 4242 4242
   4242` with any future expiry, and buy your own Marketing plan. Confirm the
   subscription appears in Stripe and that you land on the success page. Then
   swap in the live key.
