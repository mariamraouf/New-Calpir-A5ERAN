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

/**
 * The bundle discount, mirrored for display only.
 *
 * api/checkout.ts owns these numbers and applies them itself; this copy only
 * draws the running total. If the two ever disagree the server wins, and the
 * buyer sees the server's figure on Stripe's page.
 */
export const BUNDLE_TIERS = [
  { min: 5, percent: 30 },
  { min: 3, percent: 20 },
] as const;

export const bundleDiscount = (count: number): number =>
  BUNDLE_TIERS.find((t) => count >= t.min)?.percent ?? 0;

/** How many more are needed for the next tier, or null at the top. */
export const nextTier = (count: number): { needed: number; percent: number } | null => {
  const better = [...BUNDLE_TIERS].reverse().find((t) => t.min > count);
  return better ? { needed: better.min - count, percent: better.percent } : null;
};

export const startCheckout = async (
  planId: string | string[],
  currency: Currency,
): Promise<CheckoutResult> => {
  const payload = Array.isArray(planId)
    ? { planIds: planId, currency }
    : { planId, currency };

  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
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
