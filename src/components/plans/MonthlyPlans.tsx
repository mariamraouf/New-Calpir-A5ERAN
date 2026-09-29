"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import PlanCard from './PlanCard';
import BuyButton from './BuyButton';
import {
  MONTHLY_PLANS, CURRENCIES, formatPrice,
  separateMonthlyTotal, monthlyBundleSaving,
  type Currency,
} from '@/data/plans';

interface MonthlyPlansProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  /** Show only these plan ids. Leave out for all of them. */
  only?: string[];
  showBundle?: boolean;
}

/**
 * The four retainers and the bundle.
 *
 * Each is sold on its own, which is the point: a business that only wants the
 * search work should not have to buy the HR work to get it.
 */
const MonthlyPlans: React.FC<MonthlyPlansProps> = ({
  currency, onCurrencyChange, only, showBundle = true,
}) => {
  const singles = MONTHLY_PLANS.filter((p) => !p.bundles)
    .filter((p) => (only ? only.includes(p.id) : true));
  const bundle = MONTHLY_PLANS.find((p) => p.bundles);
  const saving = monthlyBundleSaving(currency);
  const separate = separateMonthlyTotal(currency);
  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? '$';

  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="inline-flex border border-zinc-200">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onCurrencyChange(c.code)}
              aria-pressed={currency === c.code}
              className={cn(
                'px-5 py-2 mono text-xs uppercase tracking-widest font-bold transition-colors',
                currency === c.code
                  ? 'bg-zinc-950 text-white'
                  : 'bg-white text-zinc-500 hover:text-zinc-900',
              )}
            >
              {c.symbol} {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {singles.map((plan) => (
          <PlanCard
            key={plan.id}
            planId={plan.id}
            name={plan.name}
            tagline={plan.tagline}
            price={plan.price}
            currency={currency}
            billing="month"
            who={plan.who}
            included={plan.included}
            iconName={plan.iconName}
            featured={plan.featured}
          />
        ))}
      </div>

      {showBundle && bundle && (
        <div className="bg-zinc-950 text-white p-8 md:p-12">
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white mono text-[10px] uppercase tracking-widest font-bold mb-5">
                Best value
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {bundle.name}
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">{bundle.tagline}</p>
              <ul className="space-y-2 text-zinc-300">
                {bundle.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-emerald-400 shrink-0">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white text-zinc-950 p-8">
              <p className="mono text-[11px] uppercase tracking-widest text-zinc-400 mb-2">
                All four bought separately
              </p>
              <p className="price-figure text-2xl font-bold text-zinc-400 line-through mb-5">
                {symbol}{separate.toLocaleString('en-US')} a month
              </p>
              <p className="mono text-[11px] uppercase tracking-widest text-emerald-700 font-bold mb-2">
                Together
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="price-figure text-5xl font-bold">{formatPrice(bundle.price, currency)}</span>
                <span className="text-zinc-500 font-bold">/month</span>
              </div>
              <p className="text-emerald-700 font-bold mb-8">
                You keep {symbol}{saving.toLocaleString('en-US')} every month.
              </p>

              <BuyButton
                planId={bundle.id}
                currency={currency}
                label="Subscribe to everything"
                footnote="Cancel any month. No tie in."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthlyPlans;
