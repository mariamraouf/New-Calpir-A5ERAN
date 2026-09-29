"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Search, Settings, Briefcase, Rocket,
  ChevronRight, ArrowRight, ArrowLeft, RotateCcw,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MONTHLY_PLANS, ONE_TIME_PACKAGES, formatPrice } from '@/data/plans';

/**
 * The hero panel, as a two question assessment.
 *
 * A visitor's real question is "what do I need and what does it cost", and the
 * honest answer depends on two things: what they want fixed, and whether they
 * are already trading. Two taps gets them a named thing with a number on it,
 * which is the whole promise of the site rather than another call to book.
 */

type Goal = 'customers' | 'found' | 'systems' | 'people' | 'scratch';

const GOALS: { id: Goal; label: string; icon: React.ElementType; note: string }[] = [
  {
    id: 'scratch',
    label: 'I am starting from scratch',
    icon: Rocket,
    note: 'Company, brand, website, email, payments and CRM, built as one setup.',
  },
  {
    id: 'found',
    label: 'I need to be found on Google',
    icon: Search,
    note: 'Search, content, Google Business Profile and the reporting that proves it.',
  },
  {
    id: 'customers',
    label: 'I need more customers',
    icon: Users,
    note: 'Lead lists, cold email, calling and a pipeline where nothing gets dropped.',
  },
  {
    id: 'systems',
    label: 'My systems are a mess',
    icon: Settings,
    note: 'The website, CRM and automations kept working, and new ones built monthly.',
  },
  {
    id: 'people',
    label: 'Hiring and HR paperwork',
    icon: Briefcase,
    note: 'Contracts, records, payroll admin and a compliance calendar with owners.',
  },
];

const PLAN_FOR: Record<Exclude<Goal, 'scratch'>, string> = {
  found: 'marketing-seo-monthly',
  customers: 'sales-outreach-monthly',
  systems: 'ops-systems-monthly',
  people: 'hr-admin-monthly',
};

const HeroAssessment = () => {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [trading, setTrading] = useState<boolean | null>(null);

  const reset = () => { setGoal(null); setTrading(null); };

  /* ---------------- result ---------------- */
  const result = (() => {
    if (!goal || trading === null) return null;

    // Not trading yet: they need the build first, whatever the goal.
    if (!trading) {
      const pkg = ONE_TIME_PACKAGES.find(
        (p) => p.id === (goal === 'scratch' ? 'starter-build' : 'growth-build'),
      )!;
      const plan = goal === 'scratch' ? null : MONTHLY_PLANS.find((m) => m.id === PLAN_FOR[goal])!;
      return {
        kind: 'Start here',
        name: `${pkg.name} package`,
        price: `${formatPrice(pkg.price, 'usd')} once`,
        sub: pkg.timeline,
        blurb: goal === 'scratch'
          ? 'You need the business built before anything can be marketed. This is the whole setup: company, brand, site, email, payments and CRM, handed over in your name.'
          : 'There is nothing to point traffic at yet. Build first, then run the marketing against something that converts.',
        then: plan
          ? `Then ${plan.name} at ${formatPrice(plan.price, 'usd')} a month, once you are live.`
          : 'Add a monthly plan afterwards only if you want it kept running.',
        href: '/packages',
        cta: 'See what is included',
      };
    }

    // Already trading and starting from scratch is a contradiction, so treat it
    // as wanting the rebuild.
    if (goal === 'scratch') {
      const pkg = ONE_TIME_PACKAGES.find((p) => p.id === 'growth-build')!;
      return {
        kind: 'Start here',
        name: `${pkg.name} package`,
        price: `${formatPrice(pkg.price, 'usd')} once`,
        sub: pkg.timeline,
        blurb: 'You are trading, so this is a rebuild rather than a launch: a proper site, CRM, automations and the systems underneath.',
        then: 'Add a monthly plan afterwards if you want it kept running.',
        href: '/packages',
        cta: 'See what is included',
      };
    }

    const plan = MONTHLY_PLANS.find((m) => m.id === PLAN_FOR[goal])!;
    return {
      kind: 'Your plan',
      name: plan.name,
      price: `${formatPrice(plan.price, 'usd')} a month`,
      sub: 'Cancel any month. No tie in.',
      blurb: plan.tagline,
      then: 'Need more than one of these? All four together are $2,499 a month, less than the sum.',
      href: '/pricing',
      cta: 'See everything included',
    };
  })();

  /* ---------------- render ---------------- */
  return (
    <div className="surface rounded-2xl p-6 sm:p-7">
      {/* step 1 */}
      {!goal && (
        <>
          <h2 className="text-2xl font-extrabold text-navy leading-snug mb-1.5">
            What would move your business forward?
          </h2>
          <p className="text-slate-500 mb-6">Start with your biggest priority.</p>

          <div className="space-y-2.5">
            {GOALS.map((g) => {
              const Icon = g.icon;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGoal(g.id)}
                  className="group w-full flex items-center gap-3.5 border border-slate-200 rounded-xl px-4 py-3.5 text-left hover:border-gold hover:bg-gold-50/40 transition-colors"
                >
                  <Icon size={19} className="text-navy shrink-0" />
                  <span className="font-semibold text-navy text-[15px] flex-grow">{g.label}</span>
                  <ChevronRight size={17} className="text-slate-300 group-hover:text-gold transition-colors shrink-0" />
                </button>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-[13px] mt-5 pt-5 border-t border-slate-100">
            Two questions. You get a name and a price, not a call.
          </p>
        </>
      )}

      {/* step 2 */}
      {goal && trading === null && (
        <>
          <button type="button" onClick={reset} className="flex items-center gap-1.5 text-slate-400 hover:text-navy text-[13px] font-semibold mb-5 transition-colors">
            <ArrowLeft size={14} /> Back
          </button>

          <h2 className="text-2xl font-extrabold text-navy leading-snug mb-1.5">
            Are you already trading?
          </h2>
          <p className="text-slate-500 mb-6">
            {GOALS.find((g) => g.id === goal)?.note}
          </p>

          <div className="space-y-2.5">
            {[
              { v: true, label: 'Yes, we are up and running', note: 'Company registered, website live, customers already coming in.' },
              { v: false, label: 'Not yet, or barely', note: 'Nothing set up, or a site and systems that are not doing their job.' },
            ].map((opt) => (
              <button
                key={String(opt.v)}
                type="button"
                onClick={() => setTrading(opt.v)}
                className="group w-full border border-slate-200 rounded-xl px-4 py-4 text-left hover:border-gold hover:bg-gold-50/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-navy text-[15px] flex-grow">{opt.label}</span>
                  <ChevronRight size={17} className="text-slate-300 group-hover:text-gold transition-colors shrink-0" />
                </div>
                <p className="text-slate-500 text-[13.5px] mt-1 leading-snug">{opt.note}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {/* result */}
      {result && (
        <>
          <button type="button" onClick={reset} className="flex items-center gap-1.5 text-slate-400 hover:text-navy text-[13px] font-semibold mb-5 transition-colors">
            <RotateCcw size={13} /> Start again
          </button>

          <p className="text-[12px] font-bold text-gold tracking-wide mb-2">{result.kind}</p>
          <h2 className="text-2xl font-extrabold text-navy leading-snug mb-2">{result.name}</h2>

          <div className="flex items-baseline gap-2 mb-1">
            <span className="price-figure text-3xl font-extrabold text-navy">{result.price}</span>
          </div>
          <p className="text-emerald-700 font-semibold text-[14px] mb-5">{result.sub}</p>

          <p className="text-slate-600 leading-relaxed mb-4">{result.blurb}</p>

          <div className="border-l-2 border-gold bg-gold-50/50 pl-4 py-2.5 mb-6 rounded-r-lg">
            <p className="text-slate-600 text-[14.5px] leading-snug">{result.then}</p>
          </div>

          <Button asChild className="w-full bg-navy hover:bg-navy-800 text-white py-6 rounded-xl font-semibold text-[15px]">
            <Link to={result.href}>
              {result.cta} <ArrowRight size={17} className="ml-1.5" />
            </Link>
          </Button>

          <p className="text-center text-slate-400 text-[13px] mt-4">
            Not sure this is right? <Link to="/services" className="text-emerald-700 font-semibold underline">Browse all 65 services</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default HeroAssessment;
