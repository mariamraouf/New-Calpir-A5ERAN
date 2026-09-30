"use client";

import React, { useState } from 'react';
import { ChevronDown, Rocket, BarChart3, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice, type Currency, type OneTimePackage } from '@/data/plans';
import { PACKAGE_HIGHLIGHTS } from '@/data/packageHighlights';

/**
 * One build package.
 *
 * Deliberately a different animal from the monthly plan card. A plan is a
 * light, quiet, repeating thing you can leave any month, so it is a plain
 * white card. A package is a single decision with a date on it, so it gets a
 * filled header block, the price in white on green, and the delivery date
 * stated in the header rather than buried in the body. Standing the two side
 * by side, nobody should have to read a word to know which is which.
 *
 * Each line opens in place. A phrase like "five automated workflows" means
 * nothing on its own, and sending somebody to a comparison table to find out
 * is a click most people do not make.
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
  const [open, setOpen] = useState<string[]>([]);
  const Icon = ICONS[pkg.id] || Rocket;
  const featured = !!pkg.featured;
  const lines = PACKAGE_HIGHLIGHTS[pkg.id] || [];

  const toggle = (text: string) =>
    setOpen((prev) => (prev.includes(text) ? prev.filter((t) => t !== text) : [...prev, text]));

  return (
    <div
      className={cn(
        'relative flex flex-col h-full overflow-hidden rounded-2xl border bg-white transition-shadow',
        featured
          ? 'border-emerald-600 shadow-xl ring-1 ring-emerald-600'
          : 'border-slate-200 shadow-sm hover:shadow-md',
      )}
    >
      {/* Filled header. This is the whole visual difference from a plan card. */}
      <div
        className={cn(
          'relative px-7 pt-7 pb-6 text-white',
          featured
            ? 'bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-700'
            : 'bg-gradient-to-br from-deep via-deep-800 to-deep',
        )}
      >
        {featured && (
          <span className="absolute top-5 right-5 bg-gold-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            Most popular
          </span>
        )}

        <div className="flex items-center gap-2.5 mb-5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 text-white">
            <Icon size={17} />
          </span>
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/60">
            Build {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-white text-[28px] font-extrabold tracking-tight leading-none mb-2">
          {pkg.name}
        </h3>
        <p className="text-white/70 text-[14.5px] leading-snug mb-6 min-h-[2.6em]">
          {pkg.tagline}
        </p>

        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="price-figure text-[2.6rem] font-extrabold leading-none text-white">
              {formatPrice(pkg.price, currency)}
            </div>
            <div className="text-white/60 text-[13px] font-semibold mt-1.5">
              Paid once, in full
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 text-[12.5px] font-bold text-white">
            {pkg.timeline}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow px-7 pt-6 pb-7">
        <div className="divide-y divide-slate-100 border-b border-slate-100 mb-6 flex-grow">
          {lines.map((line) => {
            const isOpen = open.includes(line.text);
            return (
              <div key={line.text}>
                <button
                  type="button"
                  onClick={() => toggle(line.text)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-2.5 py-3 text-left group"
                >
                  <ChevronDown
                    size={16}
                    className={cn(
                      'text-gold-600 shrink-0 mt-[3px] transition-transform duration-200',
                      isOpen ? 'rotate-0' : '-rotate-90',
                    )}
                  />
                  <span className="text-[15px] leading-snug text-slate-700 font-medium group-hover:text-navy transition-colors">
                    {line.text}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-[14px] leading-relaxed text-slate-500 pl-[26px] pb-4 -mt-0.5">
                    {line.brief}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {action}

        <p className="text-slate-400 text-[12.5px] leading-snug mt-3 text-center">
          A single payment. Nothing recurring, nothing to cancel.
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
