"use client";

import React, { useState } from 'react';
import { ChevronDown, Rocket, BarChart3, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice, type Currency, type OneTimePackage } from '@/data/plans';
import { PACKAGE_HIGHLIGHTS } from '@/data/packageHighlights';

/**
 * One package, in the one style used everywhere.
 *
 * The homepage and the packages page used to draw these differently, which
 * made the second page feel like a different site. This is the single card,
 * used by both.
 *
 * Each line opens. A phrase like "five automated workflows" means nothing on
 * its own, and sending somebody to a comparison table to find out is a click
 * most people do not make, so the answer sits under the arrow.
 */

const ICONS: Record<string, React.ElementType> = {
  'starter-build': Rocket,
  'growth-build': BarChart3,
  'ultimate-build': Cpu,
};

interface Props {
  pkg: OneTimePackage;
  index: number;
  currency?: Currency;
  /** The button. Rendered by the parent so the homepage can link and the packages page can charge. */
  action: React.ReactNode;
}

const PackageCard = ({ pkg, index, currency = 'usd', action }: Props) => {
  const [open, setOpen] = useState<string | null>(null);
  const Icon = ICONS[pkg.id] || Rocket;
  const featured = !!pkg.featured;
  const lines = PACKAGE_HIGHLIGHTS[pkg.id] || [];

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl p-7 border',
        featured
          ? 'bg-navy border-navy text-white shadow-xl'
          : 'surface surface-hover',
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-7 bg-gold text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
          Most popular
        </span>
      )}

      <div className="flex items-start justify-between mb-5">
        <span className={cn('num-badge', featured && 'text-gold-400')}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-full border',
            featured
              ? 'border-white/20 bg-white/10 text-white'
              : 'border-slate-200 bg-white text-navy',
          )}
        >
          <Icon size={18} />
        </span>
      </div>

      <h3 className={cn('text-2xl font-extrabold mb-1.5', featured && 'text-white')}>
        {pkg.name}
      </h3>
      <p className={cn('text-[15px] mb-5', featured ? 'text-slate-300' : 'text-slate-600')}>
        {pkg.tagline}
      </p>

      <div className="flex items-baseline gap-2 mb-1">
        <span className={cn('price-figure text-4xl font-extrabold', featured ? 'text-white' : 'text-navy')}>
          {formatPrice(pkg.price, currency)}
        </span>
        <span className={cn('font-semibold', featured ? 'text-slate-400' : 'text-slate-500')}>
          one time
        </span>
      </div>
      <p className={cn('text-[13px] font-semibold mb-1', featured ? 'text-gold-400' : 'text-emerald-700')}>
        {pkg.timeline}
      </p>
      <p className={cn('text-[13px] mb-6', featured ? 'text-slate-400' : 'text-slate-500')}>
        One payment. Nothing recurring, no trial period, because it is built by the end of it.
      </p>

      <div
        className={cn(
          'divide-y mb-7 flex-grow border-t border-b',
          featured ? 'divide-white/10 border-white/10' : 'divide-slate-100 border-slate-100',
        )}
      >
        {lines.map((line) => {
          const isOpen = open === line.text;
          return (
            <div key={line.text}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : line.text)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-2.5 py-3 text-left group"
              >
                <ChevronDown
                  size={16}
                  className={cn(
                    'shrink-0 mt-[3px] transition-transform duration-200',
                    isOpen ? 'rotate-0' : '-rotate-90',
                    featured ? 'text-gold-400' : 'text-gold',
                  )}
                />
                <span
                  className={cn(
                    'text-[15px] leading-snug font-medium transition-colors',
                    featured
                      ? 'text-slate-200 group-hover:text-white'
                      : 'text-slate-700 group-hover:text-navy',
                  )}
                >
                  {line.text}
                </span>
              </button>

              {isOpen && (
                <p
                  className={cn(
                    'text-[14px] leading-relaxed pl-[26px] pb-4 -mt-0.5',
                    featured ? 'text-slate-400' : 'text-slate-500',
                  )}
                >
                  {line.brief}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {action}
    </div>
  );
};

export default PackageCard;
