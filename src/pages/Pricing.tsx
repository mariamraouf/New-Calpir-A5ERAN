"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
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

      <section className="pt-36 md:pt-44 pb-16 px-6 border-b border-zinc-200">
        <div className="container-custom text-center max-w-[820px] mx-auto">
          <p className="text-emerald-700 font-semibold mb-5 tracking-wide">
            Monthly plans
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-[1.05]">
            Pick what you want run, <br className="hidden md:block" />
            and what it costs.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            Four parts of a business, each on its own monthly plan. Buy one, buy
            two, or take all four together and pay less than the sum. Cancel any
            month.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <MonthlyPlans currency={currency} onCurrencyChange={setCurrency} />
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-zinc-200 bg-zinc-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                h: 'You pay for what you see',
                p: 'The number on the card is the number. If your scope genuinely needs more, you are told the new figure before anything starts, not on the invoice afterwards.',
              },
              {
                h: 'Cancel any month',
                p: 'No minimum term and no notice period. A retainer you cannot leave is not a service, it is a trap.',
              },
              {
                h: 'Three currencies, set not converted',
                p: 'Dollars, pounds and euros each have their own figure, so a price does not move because an exchange rate did.',
              },
            ].map((item) => (
              <div key={item.h}>
                <h3 className="text-lg font-bold text-zinc-950 mb-3">{item.h}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.p}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-zinc-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                Need it built first?
              </h3>
              <p className="text-zinc-600 leading-relaxed max-w-[540px]">
                The one time packages take a business from nothing to running,
                in 7 to 28 days. A monthly plan afterwards is optional.
              </p>
            </div>
            <Button
              asChild
              className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-6 rounded-none font-semibold text-base shrink-0"
            >
              <Link to="/packages">
                See packages <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
