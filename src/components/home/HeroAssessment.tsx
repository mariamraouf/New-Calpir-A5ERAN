"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Search, Settings, Briefcase, Rocket,
  ChevronRight, ArrowRight, ArrowLeft, RotateCcw, Gauge, ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  MONTHLY_PLANS, ONE_TIME_PACKAGES, formatPrice, MONTHLY_TRIAL_DAYS,
} from '@/data/plans';

/**
 * The free growth assessment, sitting where the hero panel used to.
 *
 * Four questions, about two minutes, and it ends with a named thing and a
 * number rather than a call to book. A visitor's real question is "what do I
 * need and what does it cost", so answering it on the first screen is worth
 * more than any amount of copy about what we do.
 *
 * The longer form version at /assessment collects contact details and sends a
 * written report. This one answers on the spot and costs the visitor nothing,
 * which is why it is the thing in the hero.
 */

type Goal = 'customers' | 'found' | 'systems' | 'people' | 'scratch';
type Owner = 'nobody' | 'me' | 'someone' | 'agency';
type When = 'now' | 'month' | 'quarter' | 'looking';

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
    label: 'Enquiries are getting dropped',
    icon: Users,
    note: 'A real CRM, a chatbot that answers out of hours, and email that follows up for you.',
  },
  {
    id: 'systems',
    label: 'My systems are a mess',
    icon: Settings,
    note: 'The operational system built properly, written down, and kept working.',
  },
  {
    id: 'people',
    label: 'Hiring, payroll and HR paperwork',
    icon: Briefcase,
    note: 'Payroll run, contracts drafted, and one role recruited every month.',
  },
];

const PLAN_FOR: Record<Exclude<Goal, 'scratch'>, string> = {
  found: 'marketing-seo-monthly',
  customers: 'sales-crm-monthly',
  systems: 'ops-systems-monthly',
  people: 'hr-admin-monthly',
};

const OWNERS: { id: Owner; label: string; note: string }[] = [
  { id: 'nobody', label: 'Nobody, honestly', note: 'It is on a list and it keeps moving to next week.' },
  { id: 'me', label: 'Me, between everything else', note: 'It gets done when nothing is on fire, so it mostly does not.' },
  { id: 'someone', label: 'Someone here, part time', note: 'One person doing it alongside their actual job.' },
  { id: 'agency', label: 'An agency, and I am not happy', note: 'Paying for it already and not seeing the work.' },
];

const WHENS: { id: When; label: string; note: string }[] = [
  { id: 'now', label: 'Straight away', note: 'This is the thing blocking the next step.' },
  { id: 'month', label: 'Within the month', note: 'Soon, but I want to get it right.' },
  { id: 'quarter', label: 'This quarter', note: 'Planning ahead rather than reacting.' },
  { id: 'looking', label: 'Just looking for now', note: 'Working out what this would cost.' },
];

const STEPS = 4;

const HeroAssessment = () => {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [trading, setTrading] = useState<boolean | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [when, setWhen] = useState<When | null>(null);

  const reset = () => { setGoal(null); setTrading(null); setOwner(null); setWhen(null); };
  const back = () => {
    if (when) return setWhen(null);
    if (owner) return setOwner(null);
    if (trading !== null) return setTrading(null);
    setGoal(null);
  };

  const step = when ? 5 : owner ? 4 : trading !== null ? 3 : goal ? 2 : 1;

  /* ---------------- result ---------------- */
  const result = (() => {
    if (!goal || trading === null || !owner || !when) return null;

    const bundle = MONTHLY_PLANS.find((p) => p.bundles)!;
    const urgent = when === 'now' || when === 'month';

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
          ? `Then ${plan.name} at ${formatPrice(plan.price, 'usd')} a month once you are live, free for the first ${MONTHLY_TRIAL_DAYS} days.`
          : `Add a monthly plan afterwards only if you want it kept running. Every one of them is free for ${MONTHLY_TRIAL_DAYS} days.`,
        note: urgent
          ? 'You said soon, so this is the fast route: one price, one team, a date you can hold us to.'
          : 'Nothing to decide today. The price on the page is the price whenever you come back.',
        trial: false,
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
        then: `Add a monthly plan afterwards if you want it kept running, free for the first ${MONTHLY_TRIAL_DAYS} days.`,
        note: 'One time package. You pay once and own everything at the end of it.',
        trial: false,
        href: '/packages',
        cta: 'See what is included',
      };
    }

    const plan = MONTHLY_PLANS.find((m) => m.id === PLAN_FOR[goal])!;
    return {
      kind: 'Your plan',
      name: plan.name,
      price: `${formatPrice(plan.price, 'usd')} a month`,
      sub: `Free for ${MONTHLY_TRIAL_DAYS} days. Cancel any month.`,
      blurb: plan.tagline,
      then: `Need more than one department? All four together are ${formatPrice(bundle.price, 'usd')} a month, less than the sum of them.`,
      note: owner === 'agency'
        ? 'You are already paying somebody for this. Take the week free and compare the two reports at the end of it.'
        : owner === 'nobody'
          ? 'Nothing is being done here today, so the week free costs you nothing to find out.'
          : 'One team on it full time instead of it being somebody’s third priority.',
      trial: true,
      href: '/pricing',
      cta: 'See everything included',
    };
  })();

  /* ---------------- shared bits ---------------- */
  const Option = ({
    label, note, onClick,
  }: { label: string; note?: string; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className="group w-full border border-slate-200 rounded-xl px-4 py-3.5 text-left hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="font-semibold text-navy text-[15px] flex-grow">{label}</span>
        <ChevronRight size={17} className="text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" />
      </div>
      {note && <p className="text-slate-500 text-[13.5px] mt-1 leading-snug">{note}</p>}
    </button>
  );

  const Header = ({ title, sub }: { title: string; sub: string }) => (
    <>
      <h2 className="text-[1.45rem] font-extrabold text-navy leading-snug mb-1.5">{title}</h2>
      <p className="text-slate-500 mb-5">{sub}</p>
    </>
  );

  const BackLink = () => (
    <button
      type="button"
      onClick={back}
      className="flex items-center gap-1.5 text-slate-400 hover:text-navy text-[13px] font-semibold mb-4 transition-colors"
    >
      <ArrowLeft size={14} /> Back
    </button>
  );

  /* ---------------- render ---------------- */
  return (
    <div className="surface rounded-2xl overflow-hidden">
      {/* The header stays put through every step, so it always reads as one
          thing being filled in rather than four separate screens. */}
      <div className="bg-navy px-6 sm:px-7 py-4 text-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Gauge size={17} className="text-emerald-400 shrink-0" />
            <span className="font-extrabold tracking-tight text-[15px]">Free growth assessment</span>
          </div>
          <span className="text-[12px] font-semibold text-slate-300 shrink-0">Takes 2 minutes</span>
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          {Array.from({ length: STEPS }).map((_, i) => (
            <span
              key={i}
              className={
                'h-1.5 flex-1 rounded-full transition-colors ' +
                (i < step - 1 ? 'bg-emerald-400' : 'bg-white/20')
              }
            />
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        {/* step 1 */}
        {!goal && (
          <>
            <Header
              title="What would move your business forward?"
              sub="Start with your biggest priority."
            />
            <div className="space-y-2.5">
              {GOALS.map((g) => {
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className="group w-full flex items-center gap-3.5 border border-slate-200 rounded-xl px-4 py-3.5 text-left hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors"
                  >
                    <Icon size={19} className="text-emerald-700 shrink-0" />
                    <span className="font-semibold text-navy text-[15px] flex-grow">{g.label}</span>
                    <ChevronRight size={17} className="text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                  </button>
                );
              })}
            </div>
            <p className="text-center text-slate-400 text-[13px] mt-5 pt-5 border-t border-slate-100">
              Four questions. You get a name and a price, not a call.
            </p>
          </>
        )}

        {/* step 2 */}
        {goal && trading === null && (
          <>
            <BackLink />
            <Header title="Are you already trading?" sub={GOALS.find((g) => g.id === goal)!.note} />
            <div className="space-y-2.5">
              <Option
                label="Yes, we are up and running"
                note="Company registered, website live, customers already coming in."
                onClick={() => setTrading(true)}
              />
              <Option
                label="Not yet, or barely"
                note="Nothing set up, or a site and systems that are not doing their job."
                onClick={() => setTrading(false)}
              />
            </div>
          </>
        )}

        {/* step 3 */}
        {goal && trading !== null && !owner && (
          <>
            <BackLink />
            <Header title="Who is doing this work today?" sub="Be honest, it changes the answer." />
            <div className="space-y-2.5">
              {OWNERS.map((o) => (
                <Option key={o.id} label={o.label} note={o.note} onClick={() => setOwner(o.id)} />
              ))}
            </div>
          </>
        )}

        {/* step 4 */}
        {goal && trading !== null && owner && !when && (
          <>
            <BackLink />
            <Header title="When do you want this handled?" sub="Last one." />
            <div className="space-y-2.5">
              {WHENS.map((w) => (
                <Option key={w.id} label={w.label} note={w.note} onClick={() => setWhen(w.id)} />
              ))}
            </div>
          </>
        )}

        {/* result */}
        {result && (
          <>
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-1.5 text-slate-400 hover:text-navy text-[13px] font-semibold mb-4 transition-colors"
            >
              <RotateCcw size={13} /> Start again
            </button>

            <p className="text-[12px] font-bold text-gold tracking-wide mb-2">{result.kind}</p>
            <h2 className="text-2xl font-extrabold text-navy leading-snug mb-2">{result.name}</h2>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="price-figure text-3xl font-extrabold text-navy">{result.price}</span>
            </div>
            <p className="text-emerald-700 font-semibold text-[14px] mb-5">{result.sub}</p>

            <p className="text-slate-600 leading-relaxed mb-4">{result.blurb}</p>

            {result.trial && (
              <div className="flex items-start gap-2.5 border border-emerald-200 bg-emerald-50 rounded-xl px-4 py-3 mb-4">
                <ShieldCheck size={17} className="text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-emerald-900 text-[14px] leading-snug">
                  <b>{MONTHLY_TRIAL_DAYS} days free.</b> Nothing is charged until day eight, so if
                  it has not worked you cancel and you pay nothing.
                </p>
              </div>
            )}

            <div className="border-l-2 border-gold bg-gold-50/60 pl-4 py-2.5 mb-4 rounded-r-lg">
              <p className="text-slate-600 text-[14.5px] leading-snug">{result.then}</p>
            </div>

            <p className="text-slate-500 text-[14px] leading-snug mb-6">{result.note}</p>

            <Button asChild className="w-full bg-navy hover:bg-navy-800 text-white py-6 rounded-xl font-semibold text-[15px]">
              <Link to={result.href}>
                {result.cta} <ArrowRight size={17} className="ml-1.5" />
              </Link>
            </Button>

            <p className="text-center text-slate-400 text-[13px] mt-4">
              Want the written version?{' '}
              <Link to="/assessment" className="text-emerald-700 font-semibold underline">
                Full growth assessment
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroAssessment;
