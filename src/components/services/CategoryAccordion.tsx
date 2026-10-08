"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { servicePricing, formatPrice, type Currency } from '@/data/servicePricing';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { PickToggle } from '@/components/services/ServiceBasket';
import type { ServiceDefinition } from '@/data/allServicesList';
import type { ServiceCategory } from '@/data/serviceCategories';

/**
 * One department, folded shut until somebody wants it.
 *
 * Sixty five cards in a single wall is not a catalogue, it is a wall. Folded
 * into seven departments the whole range fits on one screen and a visitor
 * chooses where to look before being shown anything.
 *
 * The first section opens by default so the page never looks like an empty
 * list of headings, and opening one does not shut the others: people compare.
 */

interface CategoryAccordionProps {
  category: ServiceCategory;
  services: ServiceDefinition[];
  currency: Currency;
  tint: { bg: string; ink: string; border: string; solid: string };
  defaultOpen?: boolean;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({
  category, services, currency, tint, defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const prices = services
    .map((s) => servicePricing[s.slug]?.[currency])
    .filter((n): n is number => typeof n === 'number');
  const cheapest = prices.length ? Math.min(...prices) : null;
  const cheapestSlug = cheapest
    ? services.find((s) => servicePricing[s.slug]?.[currency] === cheapest)?.slug
    : null;

  const panelId = `cat-panel-${category.id}`;

  return (
    <section id={category.id} className="scroll-mt-32 border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            'w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex items-center gap-4 sm:gap-6 transition-colors',
            open ? tint.bg : 'bg-white hover:bg-slate-50',
          )}
        >
          <span
            className={cn(
              'shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm',
              tint.solid,
            )}
            aria-hidden="true"
          >
            {services.length}
          </span>

          <span className="flex-1 min-w-0">
            <span className="block text-navy text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
              {category.name}
            </span>
            <span className="block text-slate-600 text-[13px] sm:text-sm leading-relaxed mt-1 pr-2">
              {category.blurb}
            </span>
          </span>

          <span className="hidden md:block shrink-0 text-right">
            {cheapestSlug && (
              <>
                <span className={cn('block mono text-[10px] tracking-wider font-bold', tint.ink)}>
                  From
                </span>
                <span className="block text-navy font-bold text-lg price-figure">
                  {formatPrice(cheapestSlug, currency)}
                </span>
              </>
            )}
          </span>

          <ChevronDown
            size={22}
            className={cn(
              'shrink-0 text-slate-500 transition-transform duration-200',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </h2>

      {open && (
        <div id={panelId} className="border-t border-slate-200 p-4 sm:p-6 bg-slate-50/60">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service) => {
              const priced = servicePricing[service.slug];
              const Icon = serviceIconMap[service.iconName] || FallbackIcon;

              return (
                <div
                  key={service.slug}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col hover:border-emerald-400 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className={cn('shrink-0 w-9 h-9 rounded-lg flex items-center justify-center', tint.bg)}>
                      <Icon size={17} className={tint.ink} />
                    </span>
                    <h3 className="text-navy font-bold text-[15px] leading-snug tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {priced && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-emerald-700 price-figure">
                        {formatPrice(service.slug, currency)}
                      </span>
                      <span className="mono text-[10px] tracking-wide text-slate-500 font-bold">
                        fixed
                      </span>
                    </div>
                  )}

                  {priced && (
                    <div className="flex items-center gap-1.5 mono text-[11px] text-slate-500 tracking-wider mb-3">
                      <Clock size={11} className="text-emerald-600" />
                      {priced.turnaround}
                    </div>
                  )}

                  <p className="text-slate-600 text-[13px] leading-relaxed mb-4 flex-1">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mt-auto">
                    {priced && <PickToggle slug={service.slug} />}
                    <Link
                      to={`/services/${service.slug}`}
                      className="mono text-[10px] tracking-wider font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5"
                    >
                      What this includes <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryAccordion;
