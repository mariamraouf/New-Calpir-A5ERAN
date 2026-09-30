"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, Ban, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MONTHLY_TRIAL_DAYS } from '@/data/plans';

/**
 * The free trial, said once, plainly, where everybody sees it.
 *
 * It is the strongest thing on the page and it was buried inside the plan
 * cards. A refund promise asks somebody to believe they will get money back;
 * this asks them to believe we will not take it in the first place, which is
 * easier, and it is true: Stripe does not raise the first invoice until day
 * eight.
 *
 * It leads with the offer rather than with the caveat. The caveat is still
 * here, at the bottom, in a sentence a buyer can read before they decide,
 * because a trial that quietly did not apply to what somebody bought is the
 * kind of surprise that costs more than the sale was worth.
 */

const POINTS = [
  {
    icon: CalendarClock,
    title: 'The first week is free',
    body: 'Start today and the work starts today. Nothing is charged until day eight.',
  },
  {
    icon: Ban,
    title: 'Did not work? Do not pay',
    body: 'Cancel inside the week and you are charged nothing at all. Not refunded later. Charged nothing.',
  },
  {
    icon: ShieldCheck,
    title: 'And no tie in after it',
    body: 'Month to month from there. Cancel whenever, and everything we built stays in your accounts.',
  },
];

const TrialBand = () => (
  <section className="section-padding section-alt border-b border-slate-200">
    <div className="container-custom">
      <div className="grid lg:grid-cols-[1fr,1.35fr] gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-gold text-white text-[12px] font-bold px-3 py-1.5 rounded-full mb-5">
            Free trial
          </span>
          <h2 className="text-3xl sm:text-5xl text-navy leading-[1.05] mb-4">
            Try us for {MONTHLY_TRIAL_DAYS} days. <br />
            <span className="text-emerald-700">Decide after.</span>
          </h2>
          <p className="lede mb-7 max-w-[460px]">
            Pick a department, we start on it this week, and you pay nothing
            until the eighth day. If it has not earned its place by then, you
            cancel and it has cost you nothing but a week of our time.
          </p>
          <Button asChild className="bg-deep hover:bg-deep-900 text-white px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/pricing">
              Start a free week <ArrowRight size={17} className="ml-1.5" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="surface rounded-2xl p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mb-4">
                  <Icon size={18} />
                </span>
                <h3 className="text-navy text-[17px] font-extrabold mb-1.5 leading-snug">{p.title}</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
          <p className="sm:col-span-3 text-slate-500 text-[13.5px] leading-snug">
            The free week applies to the monthly plans. A build package and a
            single service are paid for once and delivered, so there is nothing
            to try and nothing to cancel.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrialBand;
