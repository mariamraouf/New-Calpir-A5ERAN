"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Rocket, BarChart3, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { ONE_TIME_PACKAGES, formatPrice } from '@/data/plans';

/**
 * The three build packages, on the homepage.
 *
 * They were two clicks away, which is two clicks too many for the thing most
 * visitors arrive wanting to know. Prices shown in USD here; the packages page
 * carries the currency switch.
 */

const ICONS: Record<string, React.ElementType> = {
  'starter-build': Rocket,
  'growth-build': BarChart3,
  'ultimate-build': Cpu,
};

const HIGHLIGHTS: Record<string, string[]> = {
  'starter-build': [
    'Website, domain, email and SSL',
    'Brand identity and one social channel',
    'Basic CRM and invoicing',
    'An AI chatbot on your site',
  ],
  'growth-build': [
    'Everything in Starter',
    'Six page site and three social channels',
    'Five automated workflows',
    'AI agent that qualifies and books',
  ],
  'ultimate-build': [
    'Everything in Growth',
    'Custom app or customer portal',
    'Unlimited automations',
    'Full HR and international payroll',
  ],
};

const PackagesPreview = () => {
  return (
    <section className="section-padding border-b border-slate-200 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <SectionLabel>Packages</SectionLabel>
            <h2 className="text-3xl sm:text-5xl text-navy mb-3">
              One payment. <br />
              <span className="text-emerald-700">A business that runs.</span>
            </h2>
          </div>
          <p className="lede max-w-md">
            Three fixed scope builds that take you from nothing to open, in 7 to
            28 days. Every price published, nothing quoted on a call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ONE_TIME_PACKAGES.map((pkg, i) => {
            const Icon = ICONS[pkg.id] || Rocket;
            return (
              <div
                key={pkg.id}
                className={cn(
                  'relative flex flex-col rounded-2xl p-7 border',
                  pkg.featured
                    ? 'bg-navy border-navy text-white shadow-xl'
                    : 'surface surface-hover',
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-7 bg-gold text-navy text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Most popular
                  </span>
                )}

                <div className="flex items-start justify-between mb-5">
                  <span className="num-badge">{String(i + 1).padStart(2, '0')}</span>
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-full border',
                      pkg.featured
                        ? 'border-white/20 bg-white/10 text-white'
                        : 'border-slate-200 bg-white text-navy',
                    )}
                  >
                    <Icon size={18} />
                  </span>
                </div>

                <h3 className={cn('text-2xl font-extrabold mb-1.5', pkg.featured && 'text-white')}>
                  {pkg.name}
                </h3>
                <p className={cn('text-[15px] mb-5', pkg.featured ? 'text-slate-300' : 'text-slate-600')}>
                  {pkg.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className={cn('price-figure text-4xl font-extrabold', pkg.featured ? 'text-white' : 'text-navy')}>
                    {formatPrice(pkg.price, 'usd')}
                  </span>
                  <span className={pkg.featured ? 'text-slate-400 font-semibold' : 'text-slate-500 font-semibold'}>
                    one time
                  </span>
                </div>
                <p className={cn('text-[13px] mb-6', pkg.featured ? 'text-gold-400' : 'text-emerald-700 font-semibold')}>
                  {pkg.timeline}
                </p>

                <ul className="space-y-2.5 mb-7 flex-grow">
                  {(HIGHLIGHTS[pkg.id] || []).map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="text-gold shrink-0 mt-[3px]" />
                      <span className={cn('text-[15px] leading-snug', pkg.featured ? 'text-slate-200' : 'text-slate-600')}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'w-full py-6 rounded-xl font-semibold text-[15px]',
                    pkg.featured
                      ? 'bg-gold hover:bg-gold-400 text-navy'
                      : 'bg-navy hover:bg-navy-800 text-white',
                  )}
                >
                  <Link to="/packages">
                    See what is included <ArrowRight size={17} className="ml-1.5" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="outline" className="border-slate-300 text-navy hover:bg-slate-100 px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/packages">Compare all three in detail</Link>
          </Button>
          <Button asChild variant="outline" className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/pricing">Or see the monthly plans <ArrowRight size={16} className="ml-1.5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
