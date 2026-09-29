/**
 * POST /api/stripe-webhook
 *
 * Stripe telling us what actually happened, which is the only reliable signal.
 * The success page is not one: a buyer who closes the tab still paid, and we
 * would never know. Everything that matters is confirmed here instead.
 *
 * Handles:
 *   checkout.session.completed    a new sale or subscription started
 *   customer.subscription.deleted somebody cancelled
 *   invoice.payment_failed        a renewal did not go through
 *   invoice.paid                  a renewal did (monthly cycles only)
 *
 * Needs STRIPE_WEBHOOK_SECRET, which Stripe gives you when you add the
 * endpoint. See STRIPE-SETUP.md.
 *
 * Notification goes through the same Formspree endpoint the contact form
 * already uses, so there is no second email provider to pay for or break.
 */
import { createHmac, timingSafeEqual } from 'crypto';

// Stripe signs the raw bytes. If Vercel parses the body into an object first,
// re-serialising it will not reproduce them and every signature fails.
export const config = { api: { bodyParser: false } };

const NOTIFY_ENDPOINT = process.env.NOTIFY_FORM_ENDPOINT || 'https://formspree.io/f/xlgalgka';

/** Five minutes, the window Stripe recommends for replay protection. */
const TOLERANCE_SECONDS = 300;

const readRawBody = (req: any): Promise<string> =>
  new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk: any) => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

/**
 * Verify the stripe-signature header ourselves rather than pulling in the SDK.
 * Header looks like: t=1699999999,v1=abc...,v1=def...
 */
const verifySignature = (payload: string, header: string, secret: string): boolean => {
  const parts = header.split(',').map((p) => p.trim());
  const timestamp = parts.find((p) => p.startsWith('t='))?.slice(2);
  const signatures = parts.filter((p) => p.startsWith('v1=')).map((p) => p.slice(3));

  if (!timestamp || signatures.length === 0) return false;

  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (!Number.isFinite(age) || Math.abs(age) > TOLERANCE_SECONDS) return false;

  const expected = createHmac('sha256', secret)
    .update(`${timestamp}.${payload}`, 'utf8')
    .digest('hex');
  const expectedBuf = Buffer.from(expected, 'utf8');

  // Compare against every v1 present: Stripe sends more than one while a
  // signing secret is being rotated.
  return signatures.some((sig) => {
    const sigBuf = Buffer.from(sig, 'utf8');
    return sigBuf.length === expectedBuf.length && timingSafeEqual(sigBuf, expectedBuf);
  });
};

const money = (amount: number | null | undefined, currency: string | null | undefined): string => {
  if (typeof amount !== 'number') return 'unknown amount';
  return `${(amount / 100).toFixed(2)} ${String(currency || '').toUpperCase()}`;
};

const notify = async (subject: string, lines: string[]) => {
  try {
    await fetch(NOTIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: subject,
        message: lines.join('\n'),
        source: 'stripe-webhook',
      }),
    });
  } catch (err: any) {
    // Never let a failed notification fail the webhook. Stripe retries on any
    // non-2xx, and retrying a charge notification forever helps nobody.
    console.error('notify failed:', err?.message || err);
  }
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('webhook not configured: STRIPE_WEBHOOK_SECRET is missing');
    res.status(503).json({ ok: false, error: 'Webhook not configured' });
    return;
  }

  const signature = req.headers['stripe-signature'];
  if (typeof signature !== 'string') {
    res.status(400).json({ ok: false, error: 'Missing signature' });
    return;
  }

  let raw: string;
  try {
    raw = await readRawBody(req);
  } catch {
    res.status(400).json({ ok: false, error: 'Could not read body' });
    return;
  }

  if (!verifySignature(raw, signature, secret)) {
    // Anyone can POST to this URL. Without this check they could invent sales.
    console.error('webhook signature did not verify');
    res.status(400).json({ ok: false, error: 'Signature verification failed' });
    return;
  }

  let event: any;
  try {
    event = JSON.parse(raw);
  } catch {
    res.status(400).json({ ok: false, error: 'Body was not JSON' });
    return;
  }

  const obj = event?.data?.object || {};

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const recurring = obj.mode === 'subscription';
        await notify(
          recurring ? 'New Calpir subscriber' : 'New Calpir package sold',
          [
            recurring ? 'Somebody started a monthly plan.' : 'Somebody bought a one time package.',
            '',
            `Plan:      ${obj.metadata?.plan_id || 'unknown'}`,
            `Amount:    ${money(obj.amount_total, obj.currency)}${recurring ? ' a month' : ''}`,
            `Email:     ${obj.customer_details?.email || 'not given'}`,
            `Name:      ${obj.customer_details?.name || 'not given'}`,
            `Country:   ${obj.customer_details?.address?.country || 'not given'}`,
            `Customer:  ${obj.customer || 'none'}`,
            `Session:   ${obj.id}`,
            '',
            'Next: send the questionnaire and the kickoff booking link.',
          ],
        );
        break;
      }

      case 'customer.subscription.deleted': {
        await notify('A Calpir plan was cancelled', [
          'A monthly plan has ended.',
          '',
          `Subscription: ${obj.id}`,
          `Customer:     ${obj.customer || 'unknown'}`,
          `Ended:        ${obj.ended_at ? new Date(obj.ended_at * 1000).toISOString() : 'now'}`,
          `Reason:       ${obj.cancellation_details?.reason || 'not given'}`,
          `Comment:      ${obj.cancellation_details?.comment || 'none'}`,
          '',
          'Worth one email asking what went wrong.',
        ]);
        break;
      }

      case 'invoice.payment_failed': {
        await notify('A Calpir renewal failed', [
          'A monthly payment did not go through. Stripe will retry on its own.',
          '',
          `Invoice:  ${obj.id}`,
          `Customer: ${obj.customer_email || obj.customer || 'unknown'}`,
          `Amount:   ${money(obj.amount_due, obj.currency)}`,
          `Attempt:  ${obj.attempt_count ?? 'unknown'}`,
          '',
          'Do not chase yet. Stripe retries and emails them first.',
        ]);
        break;
      }

      case 'invoice.paid': {
        // Only the renewals. The first payment already arrived as a completed
        // checkout session, and telling Mariam twice is how alerts get ignored.
        if (obj.billing_reason === 'subscription_cycle') {
          console.log('renewal paid:', obj.id, money(obj.amount_paid, obj.currency));
        }
        break;
      }

      default:
        // Everything else is acknowledged and ignored, which keeps Stripe from
        // retrying events we have not chosen to care about.
        break;
    }
  } catch (err: any) {
    console.error('handler error for', event.type, err?.message || err);
  }

  // Always 200 once the signature checked out, so Stripe stops retrying.
  res.status(200).json({ received: true });
}
