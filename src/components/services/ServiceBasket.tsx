"use client";

import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { ArrowRight, Check, Loader2, Tag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { servicePricing, CURRENCIES, type Currency } from '@/data/servicePricing';
import { startCheckout, bundleDiscount, nextTier } from '@/lib/checkout';
import { useBookingModal } from '@/components/booking/BookingModalProvider';

/**
 * Picking several services and buying them in one go.
 *
 * Sixty five services priced one at a time meant sixty five separate
 * checkouts, and no reason to take more than one. Ticking boxes turns the
 * catalogue into a basket, and the basket earns a discount: three services
 * takes 20 percent off, five takes 30.
 *
 * The percentages shown here are for the running total only. api/checkout.ts
 * holds the same thresholds and applies the discount itself, from the list of
 * slugs the browser sends, so a visitor editing this page changes what they
 * see and nothing about what they are charged.
 */

interface BasketValue {
  picked: string[];
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  clear: () => void;
}

const BasketContext = createContext<BasketValue | null>(null);

export const useBasket = (): BasketValue => {
  const ctx = useContext(BasketContext);
  if (!ctx) return { picked: [], has: () => false, toggle: () => {}, clear: () => {} };
  return ctx;
};

export const ServiceBasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = useCallback((slug: string) => {
    setPicked((cur) =>
      cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug],
    );
  }, []);

  const clear = useCallback(() => setPicked([]), []);
  const has = useCallback((slug: string) => picked.includes(slug), [picked]);

  const value = useMemo(() => ({ picked, has, toggle, clear }), [picked, has, toggle, clear]);

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
};

/** The tick box that sits on each service card. */
export const PickToggle: React.FC<{ slug: string; className?: string }> = ({ slug, className }) => {
  const { has, toggle } = useBasket();
  const on = has(slug);

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={on}
      onClick={() => toggle(slug)}
      className={cn(
        'w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 mono text-[11px] tracking-wider font-bold transition-colors',
        on
          ? 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700'
          : 'bg-white border-slate-300 text-slate-600 hover:border-emerald-600 hover:text-emerald-700',
        className,
      )}
    >
      <span
        className={cn(
          'w-4 h-4 rounded flex items-center justify-center border',
          on ? 'bg-white border-white' : 'border-slate-400',
        )}
        aria-hidden="true"
      >
        {on && <Check size={11} className="text-emerald-600" strokeWidth={4} />}
      </span>
      {on ? 'Added' : 'Add to bundle'}
    </button>
  );
};

const money = (amount: number, currency: Currency) => {
  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? '$';
  return `${symbol}${amount.toLocaleString('en-US')}`;
};

/**
 * The bar across the bottom, once something is ticked.
 *
 * It states the count, the full price, what the discount takes off and what is
 * actually due, because a percentage on its own is not an amount and people
 * buy amounts.
 */
export const BasketBar: React.FC<{ currency: Currency }> = ({ currency }) => {
  const { picked, clear } = useBasket();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { openBooking } = useBookingModal();

  const count = picked.length;
  const full = picked.reduce((sum, slug) => sum + (servicePricing[slug]?.[currency] ?? 0), 0);
  const percent = bundleDiscount(count);
  const saved = Math.round((full * percent) / 100);
  const due = full - saved;
  const next = nextTier(count);

  if (count === 0) return null;

  const buy = async () => {
    setBusy(true);
    setError(null);
    const result = await startCheckout(picked, currency);
    if (!result.ok) {
      setError(result.error || 'Checkout is not available right now.');
      setBusy(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[95] px-3 pb-3 sm:px-5 sm:pb-5 pointer-events-none">
      <div className="container-custom pointer-events-auto">
        <div className="bg-deep-900 text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {error && (
            <div className="bg-rose-900/60 px-5 py-2.5 text-[13px] flex items-center justify-between gap-3">
              <span>{error}</span>
              <button type="button" onClick={() => openBooking()} className="underline font-bold shrink-0">
                Book a call instead
              </button>
            </div>
          )}

          <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-lg">
                {count}
              </div>
              <div className="min-w-0">
                <div className="font-bold tracking-tight leading-snug">
                  {count === 1 ? '1 service selected' : `${count} services selected`}
                </div>
                {next ? (
                  <div className="mono text-[11px] tracking-wider text-gold-300 mt-0.5">
                    Add {next.needed} more for {next.percent}% off
                  </div>
                ) : (
                  <div className="mono text-[11px] tracking-wider text-emerald-300 mt-0.5">
                    Biggest discount unlocked
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <div className="text-right">
                {percent > 0 && (
                  <div className="flex items-center justify-end gap-2 mb-0.5">
                    <span className="mono text-[11px] text-slate-400 line-through">
                      {money(full, currency)}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gold-600 text-white mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded">
                      <Tag size={10} /> {percent}% off
                    </span>
                  </div>
                )}
                <div className="text-2xl font-bold leading-none price-figure">
                  {money(due, currency)}
                </div>
                {percent > 0 && (
                  <div className="mono text-[10px] tracking-wider text-emerald-300 mt-1">
                    You save {money(saved, currency)}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={buy}
                  disabled={busy}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-tight px-6 sm:px-8 py-6 rounded-xl"
                >
                  {busy ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" /> Opening
                    </>
                  ) : (
                    <>
                      Buy together <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>
                <button
                  type="button"
                  onClick={clear}
                  aria-label="Clear the bundle"
                  className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/50 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBasketProvider;
