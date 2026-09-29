/**
 * Sending someone to Stripe.
 *
 * The browser never says what a plan costs. It sends the plan id and the
 * currency, and api/checkout.ts looks the price up on its own side before
 * asking Stripe for a session. That way a edited request cannot buy the
 * Everything plan for a dollar.
 */
import type { Currency } from '@/data/plans';

export interface CheckoutResult {
  ok: boolean;
  /** Set when Stripe is not configured or refused, ready to show the buyer. */
  error?: string;
}

export const startCheckout = async (
  planId: string,
  currency: Currency,
): Promise<CheckoutResult> => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, currency }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.ok && typeof data.url === 'string') {
      window.location.href = data.url;
      return { ok: true };
    }

    return {
      ok: false,
      error:
        data?.error ||
        'We could not open the payment page. Please try again, or book a call and we will invoice you.',
    };
  } catch {
    return {
      ok: false,
      error: 'Something went wrong reaching the payment page. Please try again in a moment.',
    };
  }
};
