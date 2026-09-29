"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { formatPrice, type Currency, type PlanPrice } from '@/data/plans';
import BuyButton from './BuyButton';

interface PlanCardProps {
  planId: string;
  name: string;
  tagline: string;
  price: PlanPrice;
  currency: Currency;
  /** 'month' prints a /month suffix. 'once' prints one time payment. */
  billing: 'month' | 'once';
  who: string;
  included: string[];
  iconName: string;
  featured?: boolean;
  /** Small line above the price, e.g. a launch timeline. */
  note?: string;
  buttonLabel?: string;
}

/**
 * One buyable thing, with a button that goes straight to Stripe.
 *
 * If Stripe is not switched on yet the endpoint answers 503, and rather than
 * showing a dead end we open the booking modal and say why. Nobody who wanted
 * to buy should leave with nowhere to go.
 */
const PlanCard: React.FC<PlanCardProps> = ({
  planId, name, tagline, price, currency, billing, who,
  included, iconName, featured, note, buttonLabel,
}) => {
  const Icon = serviceIconMap[iconName] || FallbackIcon;

  return (
    <div
      className={cn(
        'relative flex flex-col bg-white border p-8 transition-transform duration-200 hover:-translate-y-1',
        featured
          ? 'border-emerald-600 border-2 shadow-xl shadow-emerald-900/5'
          : 'border-zinc-200',
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-8 bg-emerald-600 text-white mono text-[10px] tracking-wide font-bold px-3 py-1">
          Most popular
        </div>
      )}

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 border border-emerald-200">
          <Icon size={18} className="text-emerald-700" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-950">{name}</h3>
      </div>

      <p className="text-zinc-600 mb-6 leading-relaxed md:min-h-[72px]">{tagline}</p>

      {note && (
        <p className="mono text-[11px] tracking-wide text-emerald-700 font-bold mb-2">
          {note}
        </p>
      )}

      <div className="flex items-baseline gap-2 mb-1">
        <span className="price-figure text-4xl font-bold text-zinc-950">{formatPrice(price, currency)}</span>
        <span className="text-zinc-500 font-bold">
          {billing === 'month' ? '/month' : 'one time'}
        </span>
      </div>
      <p className="mono text-[11px] tracking-wide text-zinc-400 mb-7">
        {billing === 'month' ? 'Cancel any month. No tie in.' : 'Single payment. Nothing recurring.'}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {included.map((item) => (
          <li key={item} className="flex gap-3 text-zinc-700 leading-relaxed">
            <Check size={17} className="text-emerald-600 shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-zinc-500 border-t border-zinc-100 pt-5 mb-6">
        <span className="font-bold text-zinc-700">Best for:</span> {who}
      </p>

      <BuyButton
        planId={planId}
        currency={currency}
        label={buttonLabel || (billing === 'month' ? 'Subscribe' : 'Buy this package')}
        variant={featured ? 'emerald' : 'dark'}
      />

    </div>
  );
};

export default PlanCard;
