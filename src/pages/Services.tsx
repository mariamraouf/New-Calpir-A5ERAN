"use client";

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RelatedReading from '@/components/content/RelatedReading';
import PageHero from '@/components/ui/PageHero';
import MetaSEO from '@/components/seo/MetaSEO';
import { Button } from '@/components/ui/button';
import { PLAN_PHOTOS } from '@/data/planPhotos';
import { allServicesCatalog } from '@/data/allServicesList';
import { SERVICE_CATEGORIES as CATEGORIES } from '@/data/serviceCategories';
import { CURRENCIES } from '@/data/servicePricing';
import { useAutoCurrency } from '@/lib/currency';
import { tintAt } from '@/data/departmentTints';
import { BUNDLE_TIERS } from '@/lib/checkout';
import CategoryAccordion from '@/components/services/CategoryAccordion';
import ServiceBasketProvider, { BasketBar } from '@/components/services/ServiceBasket';
import RecurringOption from '@/components/plans/RecurringOption';
import TrialStrip from '@/components/plans/TrialStrip';

/**
 * Every service, on one page.
 *
 * There used to be two: /services to browse and /solo-services to buy, with
 * the same sixty five things on both and no way to tell which one you wanted.
 * /solo-services now redirects here.
 *
 * Folded into seven departments rather than laid out as sixty five cards, so
 * the whole range fits on a screen and the visitor picks where to look. Each
 * card has a tick box, because buying three at once is worth 20 percent and
 * five is worth 30, and an offer nobody can act on in one go is a poster
 * rather than a price.
 */
const Services = () => {
  const [currency, setCurrency] = useAutoCurrency();

  const byCategory = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        category,
        services: allServicesCatalog.filter((s) => s.category === category.name),
      })),
    [],
  );

  const tiers = [...BUNDLE_TIERS].sort((a, b) => a.min - b.min);

  return (
    <ServiceBasketProvider>
      <div className="min-h-screen bg-white relative">
        <MetaSEO
          title="Services | 65 Fixed Price Services | Calpir"
          description="Every service Calpir sells, in seven departments: formation, websites, brand, sales and marketing, AI automation, operations and people. Fixed prices. Take three together for 20% off, five for 30%."
          path="/services"
        />
        <Navbar />

        <PageHero
          eyebrow="Everything we do"
          title={<>Seven departments. <br />Sixty five services.</>}
          body="Buy any single piece at a fixed price, take three together and save 20 percent, or hand a whole department over on a monthly plan."
          image={PLAN_PHOTOS['ops-systems-monthly'].band}
          primary={{ label: 'See the departments', href: '#departments' }}
          secondary={{ label: 'Monthly plans instead', href: '/pricing' }}
        />

        {/* The offer, stated once and plainly, right where the browsing starts. */}
        <section className="py-8 sm:py-10 bg-gold-50 border-b border-gold-300">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              <span className="shrink-0 w-12 h-12 rounded-xl bg-gold-600 text-white flex items-center justify-center">
                <Tag size={22} />
              </span>
              <div className="flex-1">
                <h2 className="text-navy text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5">
                  Take more than one and the price drops.
                </h2>
                <p className="text-slate-700 text-[15px] leading-relaxed max-w-2xl">
                  Tick anything below. {tiers[0].min} services together takes{' '}
                  <strong className="text-gold-800">{tiers[0].percent}% off the lot</strong>, and{' '}
                  {tiers[1].min} or more takes{' '}
                  <strong className="text-gold-800">{tiers[1].percent}%</strong>. The discount is
                  applied at checkout, on everything in the basket.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                {tiers.map((t) => (
                  <div
                    key={t.min}
                    className="bg-white border border-gold-300 rounded-xl px-4 py-3 text-center min-w-[92px]"
                  >
                    <div className="text-2xl font-bold text-gold-700 leading-none price-figure">
                      {t.percent}%
                    </div>
                    <div className="mono text-[10px] tracking-wider text-slate-600 mt-1">
                      {t.min}+ services
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Currency, and a reminder that the figures are set rather than from. */}
        <section className="py-6 border-b border-slate-200 bg-white sticky top-16 sm:top-20 z-[90] backdrop-blur-md bg-white/95">
          <div className="container-custom flex flex-wrap items-center justify-between gap-4">
            <p className="mono text-[11px] tracking-wider text-slate-600">
              {allServicesCatalog.length} services · every price fixed, never from
            </p>
            <div className="flex border border-slate-300 rounded-lg overflow-hidden">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setCurrency(c.code)}
                  aria-pressed={currency === c.code}
                  className={
                    'px-3 py-1.5 mono text-[11px] font-bold tracking-wider transition-colors ' +
                    (currency === c.code
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-600 hover:text-emerald-700')
                  }
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="departments" className="section-padding scroll-mt-32">
          <div className="container-custom space-y-4">
            {byCategory.map(({ category, services }, i) => (
              <CategoryAccordion
                key={category.id}
                category={category}
                services={services}
                currency={currency}
                tint={tintAt(i)}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </section>

        {/* The other way to buy, for anyone who ticked half a department. */}
        <section className="section-padding border-t border-slate-200 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-2xl mb-8">
              <h2 className="text-navy text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Buying most of a department? Rent it instead.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A monthly plan covers the whole department, every month, for less than
                buying the pieces once. It starts with a free week and you can cancel
                any month.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {CATEGORIES.slice(0, 2).map((c) => (
                <RecurringOption key={c.id} categoryId={c.id} currency={currency} />
              ))}
            </div>
            <Button
              asChild
              className="mt-7 bg-deep hover:bg-deep-900 text-white font-bold tracking-tight px-8 py-6 rounded-xl"
            >
              <Link to="/pricing">
                Compare every monthly plan <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <RelatedReading
          slugs={[
            'how-to-setup-new-business-2026',
            'essential-tech-stack-automations',
            'best-crm-tools-comparison',
          ]}
          heading="Start here if you are not sure."
        />

        <TrialStrip tone="clay" />

      <Footer />

        {/* Sits above the footer once anything is ticked. */}
        <BasketBar currency={currency} />
      </div>
    </ServiceBasketProvider>
  );
};

export default Services;
