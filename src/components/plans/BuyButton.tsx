"use client";

import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { startCheckout } from '@/lib/checkout';
import { useBookingModal } from '@/components/booking/BookingModalProvider';
import type { Currency } from '@/data/plans';

interface BuyButtonProps {
  planId: string;
  currency: Currency;
  label: string;
  /** Printed under the button, e.g. the cancellation terms. */
  footnote?: string;
  variant?: 'emerald' | 'dark';
  className?: string;
}

/**
 * The one button that takes money.
 *
 * It sends only the plan id and currency; the server decides the amount. If
 * Stripe is not configured the endpoint says so and we offer the booking
 * calendar rather than leaving a buyer staring at an error.
 */
const BuyButton: React.FC<BuyButtonProps> = ({
  planId, currency, label, footnote, variant = 'emerald', className,
}) => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { openBooking } = useBookingModal();

  const handleBuy = async () => {
    setBusy(true);
    setError(null);
    const result = await startCheckout(planId, currency);
    if (!result.ok) {
      setError(result.error || 'Payment is not available right now.');
      setBusy(false);
    }
    // On success the browser is already on its way to Stripe.
  };

  return (
    <div className={className}>
      <Button
        onClick={handleBuy}
        disabled={busy}
        className={cn(
          'w-full py-7 rounded-xl font-bold tracking-tight text-base transition-transform hover:-translate-y-0.5',
          variant === 'emerald'
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
            : 'bg-navy hover:bg-navy-800 text-white',
        )}
      >
        {busy ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" /> Opening checkout
          </>
        ) : (
          <>
            {label}
            <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </Button>

      {footnote && !error && (
        <p className="mono text-[11px] tracking-wide text-slate-400 mt-3 text-center">
          {footnote}
        </p>
      )}

      {error && (
        <div className="mt-4 text-sm text-center">
          <p className="text-rose-700 mb-2">{error}</p>
          <button type="button" onClick={() => openBooking()} className="text-emerald-700 font-bold underline">
            Book a call instead
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyButton;
