"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CalendarClock, Ban, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MONTHLY_TRIAL_DAYS } from '@/data/plans';

/**
 * The seven day trial, said once, plainly, where everybody sees it.
 *
 * It is the single strongest thing on the page and it was buried inside the
 * plan cards. A refund promise asks somebody to believe they will get money
 * back; this asks them to believe we will not take it in the first place,
 * which is easier, and it is true: Stripe does not raise the first invoice
 * until day eight.
 *
 * It applies to the monthly plans only. The one time packages are finished
 * and handed over by the time a week is up, so there is nothing to trial.
 */

const POINTS = [
  {
    icon: CalendarClock,
    title: `Seven days, free`,
    body: 'Start any monthly plan today and the work starts today. The first invoice is not raised until day eight.',
  },
  {
    icon: Ban,
    title: 'Did not work? Do not pay',
    body: 'Cancel inside the week and you are charged nothing at all. Not refunded later, charged nothing.',
  },
  {
    icon: ShieldCheck,
    title: 'And no tie in after it',
    body: 'Month to month from there. Cancel any month, and everything we built stays in your accounts.',
  },
];

const TrialBand = () => (
  <section className="section-padding bg-emerald-50/70 border-b border-emerald-100">
    <div className="container-custom">
      <div className="grid lg:grid-cols-[1fr,1.35fr] gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-gold text-white text-[12px] font-bold px-3 py-1.5 rounded-full mb-5">
            On every monthly plan
          </span>
          <h2 className="text-3xl sm:text-5xl text-navy leading-[1.05] mb-4">
            Try it for {MONTHLY_TRIAL_DAYS} days. <br />
            <span className="text-emerald-700">Pay on day eight.</span>
          </h2>
          <p className="lede mb-7 max-w-[460px]">
            Every recurring plan on this site starts with a free week. If it has
            not earned its place by the end of it, you cancel and nothing is
            charged.
          </p>
          <Button asChild className="bg-navy hover:bg-navy-800 text-white px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/pricing">
              See the monthly plans <ArrowRight size={17} className="ml-1.5" />
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
                <h3 className="text-navy text-[17px] font-extrabold mb-1.5">{p.title}</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
          <p className="sm:col-span-3 text-slate-500 text-[13.5px] leading-snug">
            One time packages are not trials: they are finished and handed over
            inside 7 to 28 days, so there is nothing left to try.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrialBand;
