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
        <div className="inline-flex border border-slate-200 rounded-full p-1 bg-white">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onCurrencyChange(c.code)}
              aria-pressed={currency === c.code}
              className={cn(
                'px-5 py-2 text-sm font-semibold rounded-full transition-colors',
                currency === c.code
                  ? 'bg-deep text-white'
                  : 'bg-transparent text-slate-500 hover:text-navy',
              )}
            >
              {c.symbol} {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
        <div className="bg-deep text-white p-8 md:p-12 rounded-2xl">
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white mono text-[10px] tracking-wide font-bold mb-5">
                Best value
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {bundle.name}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">{bundle.tagline}</p>
              <ul className="space-y-2 text-slate-300">
                {bundle.included.map((item) => (
                  <li key={item.text} className="flex gap-3">
                    <span className="text-gold-400 shrink-0">&rsaquo;</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white text-navy p-8 rounded-xl">
              <p className="mono text-[11px] tracking-wide text-slate-400 mb-2">
                Bought separately
              </p>
              <p className="price-figure text-2xl font-bold text-slate-400 line-through mb-5">
                {symbol}{separate.toLocaleString('en-US')} a month
              </p>
              <p className="mono text-[11px] tracking-wide text-emerald-700 font-bold mb-2">
                Together
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="price-figure text-5xl font-bold">{formatPrice(bundle.price, currency)}</span>
                <span className="text-slate-500 font-bold">/month</span>
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
