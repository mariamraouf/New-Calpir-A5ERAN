/**
 * GET /api/locale
 *
 * Says which country the request came from, so the pricing pages can open on
 * the currency the visitor actually spends in instead of always opening on
 * dollars.
 *
 * Response: { country: 'GB' } or { country: null }
 *
 * Vercel puts the country on every request as `x-vercel-ip-country`, worked
 * out at the edge from the IP. Nothing is stored, nothing is logged, and no
 * part of the address ever reaches this code or the browser. Other hosts set
 * the same idea under a different name, so a couple of those are read too.
 *
 * This only picks the default. The toggle still wins, and the price itself is
 * never converted: each currency is a figure we set in Stripe. A visitor in
 * Berlin opens on euros and pays the euro number printed on the card.
 */

const HEADERS = [
  'x-vercel-ip-country', // Vercel
  'cf-ipcountry', // Cloudflare
  'x-country-code', // a few proxies
];

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ country: null });
    return;
  }

  let country: string | null = null;

  for (const name of HEADERS) {
    const raw = req.headers?.[name];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (typeof value === 'string' && /^[A-Za-z]{2}$/.test(value.trim())) {
      country = value.trim().toUpperCase();
      break;
    }
  }

  // `private` on purpose. The answer differs per visitor, so it may sit in
  // that one browser for an hour but must never be held in a shared cache and
  // handed to the next person.
  res.setHeader('Cache-Control', 'private, max-age=3600');
  res.status(200).json({ country });
}
