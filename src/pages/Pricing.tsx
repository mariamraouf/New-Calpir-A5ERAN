"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RelatedReading from '@/components/content/RelatedReading';
import PageHero from '@/components/ui/PageHero';
import { TINTS } from '@/data/departmentTints';
import { cn } from '@/lib/utils';
import { PLAN_PHOTOS, TEAM_PHOTO, BUILD_PHOTO, OWNER_PHOTO } from '@/data/planPhotos';
import MetaSEO from '@/components/seo/MetaSEO';
import MonthlyPlans from '@/components/plans/MonthlyPlans';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Currency } from '@/data/plans';

/**
 * Monthly pricing, on its own page.
 *
 * This used to sit above the one time packages on /packages, which meant a
 * visitor had to work out halfway down whether the number they were reading
 * repeated every month or not. Recurring and one off are different decisions,
 * so they get different pages and each one says plainly which it is.
 */
const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('usd');

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO
        title="Pricing | Monthly Plans from $449 | Calpir"
        description="Marketing and SEO, operations, sales and HR, each on a monthly plan from $449. Take one or take all four for less than the sum. Cancel any month. Prices in dollars, pounds and euros."
        path="/pricing"
      />
      <Navbar />

      <PageHero
        eyebrow="Monthly plans"
        title={<>Pick what you want run, <br className="hidden md:block" />and what it costs.</>}
        body="Six departments, each on its own monthly plan. Buy one, buy two, or take the lot together and pay less than the sum. Every one starts with a free week."
        image={PLAN_PHOTOS['sales-crm-monthly'].band}
        primary={{ label: 'Start a free week', href: '#plans' }}
        secondary={{ label: 'One time builds instead', href: '/packages' }}
        stats={[
          { value: '7 days', label: 'Free before you pay' },
          { value: '6', label: 'Departments to choose from' },
          { value: '$249', label: 'The smallest plan' },
          { value: 'Any month', label: 'Cancel, no tie in' },
        ]}
      />

      <section id="plans" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-custom">
          <MonthlyPlans currency={currency} onCurrencyChange={setCurrency} />
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-slate-200 bg-slate-50">
        <div className="container-custom">
          {/* Three promises, as three boxes. They were three headings and
              three paragraphs on white, which reads as terms and conditions;
              these are the reasons somebody buys, so they get a colour, a
              number and a border each. */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                n: '01',
                h: 'Fixed, never "from"',
                p: 'The number on the card is the number you are charged. No starting at, no asterisk, no quote call. If a job genuinely falls outside the listed scope you get the new figure before anything starts, never on the invoice afterwards.',
                tint: TINTS.emerald,
              },
              {
                n: '02',
                h: 'Cancel any month',
                p: 'No minimum term and no notice period, and everything we built stays in your accounts when you go. A retainer you cannot leave is not a service, it is a trap.',
                tint: TINTS.rose,
              },
              {
                n: '03',
                h: 'Three currencies, set not converted',
                p: 'Dollars, pounds and euros each have their own figure, chosen and fixed. Your price does not move because an exchange rate did on a Tuesday.',
                tint: TINTS.teal,
              },
            ].map((item) => (
              <div
                key={item.h}
                className={cn('rounded-2xl border p-6 sm:p-7', item.tint.bg, item.tint.border)}
              >
                <div className={cn('price-figure text-[1.6rem] font-extrabold leading-none mb-4', item.tint.ink)}>
                  {item.n}
                </div>
                <h3 className="text-navy text-[1.15rem] font-extrabold mb-2.5 leading-snug">{item.h}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{item.p}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-2">
                Need it built first?
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-[540px]">
                The one time packages take a business from nothing to running,
                in 7 to 28 days. A monthly plan afterwards is optional.
              </p>
            </div>
            <Button
              asChild
              className="bg-deep hover:bg-deep-900 text-white px-8 py-6 rounded-xl font-semibold text-base shrink-0"
            >
              <Link to="/packages">
                See packages <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedReading
        slugs={['how-to-setup-new-business-2026', 'crm-implementation-cost', 'ai-consulting-cost-small-business']}
        heading="What this normally costs elsewhere."
        intro="We publish what the rest of the market charges, including where it is cheaper than us."
      />

      <Footer />
    </div>
  );
};

export default Pricing;
