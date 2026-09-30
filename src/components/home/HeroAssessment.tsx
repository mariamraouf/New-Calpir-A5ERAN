"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Search, Settings, Rocket, Palette, Landmark, PhoneOutgoing,
  ChevronRight, ArrowRight, ArrowLeft, RotateCcw, Gauge, Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TINTS, type Tint } from '@/data/departmentTints';
import { Button } from '@/components/ui/button';
import {
  MONTHLY_PLANS, ONE_TIME_PACKAGES, formatPrice, MONTHLY_TRIAL_DAYS,
  type Currency,
} from '@/data/plans';

/**
 * The free growth assessment, in the hero.
 *
 * It has to answer the question a visitor actually arrives with: what do I
 * need, and what does it cost. So it covers everything the company sells
 * rather than a slice of it. The first question is the six departments plus
 * the build, and it takes more than one answer, because a business with a
 * broken CRM and no payroll has two problems and deserves to be told both and
 * given one number.
 *
 * The arithmetic is real. One department quotes that plan. Two quote both and
 * add them up. Three or more quote the Everything plan, because at that point
 * it is genuinely cheaper than the sum and saying otherwise would be selling
 * somebody the worse of two options we own.
 */

type Need = 'scratch' | 'found' | 'customers' | 'systems' | 'people' | 'brand' | 'paperwork';

const CURRENCY: Currency = 'usd';

const NEEDS: { id: Need; label: string; icon: React.ElementType; planId?: string; tint: Tint }[] = [
  { id: 'scratch', label: 'I am starting from scratch', icon: Rocket, tint: TINTS.emerald },
  { id: 'found', label: 'Nobody can find us on Google', icon: Search, planId: 'marketing-seo-monthly', tint: TINTS.emerald },
  { id: 'customers', label: 'Enquiries are getting dropped', icon: PhoneOutgoing, planId: 'sales-crm-monthly', tint: TINTS.violet },
  { id: 'systems', label: 'Our systems are a mess', icon: Settings, planId: 'ops-systems-monthly', tint: TINTS.teal },
  { id: 'people', label: 'Hiring, payroll and HR', icon: Users, planId: 'hr-admin-monthly', tint: TINTS.rose },
  { id: 'brand', label: 'We never post anything', icon: Palette, planId: 'brand-content-monthly', tint: TINTS.sky },
  { id: 'paperwork', label: 'Filings and deadlines', icon: Landmark, planId: 'compliance-filings-monthly', tint: TINTS.lime },
];

const OWNERS = [
  { id: 'nobody', label: 'Nobody, honestly', note: 'It is on a list and it keeps moving to next week.' },
  { id: 'me', label: 'Me, between everything else', note: 'It gets done when nothing is on fire, so it mostly does not.' },
  { id: 'someone', label: 'Someone here, part time', note: 'One person doing it alongside their actual job.' },
  { id: 'agency', label: 'An agency, and I am not happy', note: 'Paying for it already and not seeing the work.' },
] as const;

const WHENS = [
  { id: 'now', label: 'Straight away', note: 'This is the thing blocking the next step.' },
  { id: 'month', label: 'Within the month', note: 'Soon, but I want to get it right.' },
  { id: 'quarter', label: 'This quarter', note: 'Planning ahead rather than reacting.' },
  { id: 'looking', label: 'Just working out the cost', note: 'No timeline yet.' },
] as const;

type Owner = (typeof OWNERS)[number]['id'];
type When = (typeof WHENS)[number]['id'];

const STEPS = 4;

const HeroAssessment = () => {
  const [needs, setNeeds] = useState<Need[]>([]);
  const [locked, setLocked] = useState(false);
  const [trading, setTrading] = useState<boolean | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [when, setWhen] = useState<When | null>(null);

  const reset = () => {
    setNeeds([]); setLocked(false); setTrading(null); setOwner(null); setWhen(null);
  };
  const back = () => {
    if (when) return setWhen(null);
    if (owner) return setOwner(null);
    if (trading !== null) return setTrading(null);
    setLocked(false);
  };

  const step = when ? 5 : owner ? 4 : trading !== null ? 3 : locked ? 2 : 1;

  const toggleNeed = (id: Need) =>
    setNeeds((prev) => (prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]));

  /* ---------------- the recommendation ---------------- */
  const result = (() => {
    if (!locked || trading === null || !owner || !when) return null;

    const bundle = MONTHLY_PLANS.find((p) => p.bundles)!;
    const chosenPlans = needs
      .map((n) => NEEDS.find((x) => x.id === n)?.planId)
      .filter(Boolean)
      .map((id) => MONTHLY_PLANS.find((p) => p.id === id)!)
      .filter(Boolean);

    const sum = chosenPlans.reduce((t, p) => t + p.price[CURRENCY], 0);
    const symbol = formatPrice({ usd: 0, gbp: 0, eur: 0 }, CURRENCY).replace('0', '');
    const money = (n: number) => `${symbol}${n.toLocaleString('en-US')}`;

    const pressure =
      owner === 'agency'
        ? 'You are already paying somebody for this. Take the free week and compare the two reports at the end of it.'
        : owner === 'nobody'
          ? 'Nothing is being done here today, so a free week costs you nothing to find out.'
          : 'One team on it full time, instead of it being somebody’s third priority.';

    // Not trading yet: the build comes first, whatever else is wrong.
    if (!trading) {
      const wantsALot = chosenPlans.length >= 3 || needs.includes('scratch');
      const pkg = ONE_TIME_PACKAGES.find((p) => p.id === (wantsALot ? 'growth-build' : 'starter-build'))!;
      return {
        kind: 'Start here',
        name: `${pkg.name} package`,
        price: `${formatPrice(pkg.price, CURRENCY)} once`,
        sub: `${pkg.timeline}. Paid once, nothing recurring.`,
        blurb:
          'There is nothing to market or manage yet, so the build comes first: company, brand, site, email, payments and CRM, set up as one thing and registered to you.',
        lines: chosenPlans.length
          ? [`Then add ${chosenPlans.map((p) => p.name).join(' and ')} once you are live, from ${money(sum)} a month.`]
          : ['Add a monthly plan afterwards only if you want it kept running.'],
        trial: false,
        note: pressure,
        href: '/packages',
        cta: 'See what is in the build',
      };
    }

    // Trading, but nothing but "from scratch" ticked: they mean a rebuild.
    if (chosenPlans.length === 0) {
      const pkg = ONE_TIME_PACKAGES.find((p) => p.id === 'growth-build')!;
      return {
        kind: 'Start here',
        name: `${pkg.name} package`,
        price: `${formatPrice(pkg.price, CURRENCY)} once`,
        sub: `${pkg.timeline}. Paid once, nothing recurring.`,
        blurb:
          'You are trading, so this is a rebuild rather than a launch: a proper site, a real CRM, the automations and the systems underneath.',
        lines: ['Add any monthly department afterwards if you want it kept running.'],
        trial: false,
        note: pressure,
        href: '/packages',
        cta: 'See what is in the build',
      };
    }

    // Only recommend the bundle when it is actually cheaper than what they
    // picked. Three departments can still come to less than all six, and
    // pushing somebody onto the dearer of two things we own would be a lie
    // told by arithmetic.
    if (sum >= bundle.price[CURRENCY]) {
      return {
        kind: 'Your plan',
        name: 'Everything',
        price: `${formatPrice(bundle.price, CURRENCY)} a month`,
        sub: `Free for ${MONTHLY_TRIAL_DAYS} days. Cancel any month.`,
        blurb:
          'The departments you picked cost more bought separately than all six cost together, so this is us pointing you at the cheaper one.',
        lines: [
          `The ${chosenPlans.length} you picked come to ${money(sum)} a month on their own.`,
          `All six together are ${formatPrice(bundle.price, CURRENCY)}, so you save ${money(sum - bundle.price[CURRENCY])} a month and get the other ${6 - chosenPlans.length} as well.`,
          'One team, one invoice, one report.',
        ],
        trial: true,
        note: pressure,
        href: '/pricing',
        cta: 'See everything included',
      };
    }

    // Otherwise quote exactly what they picked, and say what the whole thing
    // would cost so they can do the sum themselves.
    const names =
      chosenPlans.length === 1
        ? chosenPlans[0].name
        : chosenPlans.slice(0, -1).map((p) => p.name).join(', ') + ' and ' + chosenPlans[chosenPlans.length - 1].name;

    return {
      kind: chosenPlans.length === 1 ? 'Your plan' : `Your ${chosenPlans.length} plans`,
      name: names,
      price: `${money(sum)} a month`,
      sub: `Free for ${MONTHLY_TRIAL_DAYS} days. Cancel any month.`,
      blurb: chosenPlans.map((p) => p.tagline).join(' '),
      lines: [
        chosenPlans.length === 1
          ? `${chosenPlans[0].included.length} things happen every month, all of them listed before you pay a penny.`
          : chosenPlans.map((p) => `${p.name}, ${formatPrice(p.price, CURRENCY)}`).join('. ') + '.',
        `All six departments together are ${formatPrice(bundle.price, CURRENCY)}, if the list grows.`,
      ],
      trial: true,
      note: pressure,
      href: '/pricing',
      cta: 'See everything included',
    };
  })();

  /* ---------------- shared bits ---------------- */
  const Option = ({ label, note, onClick }: { label: string; note?: string; onClick: () => void }) => (
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
      <div className="bg-gradient-to-r from-deep-900 via-deep-800 to-deep-700 px-6 sm:px-7 py-4 text-white">
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
              className={'h-1.5 flex-1 rounded-full transition-colors ' + (i < step - 1 ? 'bg-emerald-400' : 'bg-white/20')}
            />
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        {/* step 1: everything we do, and you can tick more than one */}
        {!locked && (
          <>
            <Header
              title="What is in your way right now?"
              sub="Tick everything that applies. Most businesses tick more than one."
            />

            <div className="space-y-2">
              {NEEDS.map((n) => {
                const Icon = n.icon;
                const on = needs.includes(n.id);
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => toggleNeed(n.id)}
                    aria-pressed={on}
                    className={cn(
                      'w-full flex items-center gap-3 border rounded-xl px-3.5 py-3 text-left transition-all',
                      on
                        ? cn(n.tint.bg, n.tint.border, 'shadow-sm')
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50',
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors',
                        on ? cn('bg-white', n.tint.ink) : 'bg-slate-100 text-slate-400',
                      )}
                    >
                      <Icon size={16} />
                    </span>
                    <span className={cn('font-semibold text-[15px] flex-grow leading-snug', on ? 'text-navy' : 'text-slate-600')}>
                      {n.label}
                    </span>
                    <span
                      className={cn(
                        'w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors',
                        on ? cn(n.tint.solid, 'border-transparent text-white') : 'border-slate-300',
                      )}
                    >
                      {on && <Check size={13} strokeWidth={3.5} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <Button
              type="button"
              disabled={needs.length === 0}
              onClick={() => setLocked(true)}
              className="w-full mt-5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 text-white py-6 rounded-xl font-bold text-[15px] transition-colors"
            >
              {needs.length === 0
                ? 'Pick at least one'
                : `Continue with ${needs.length} ${needs.length === 1 ? 'thing' : 'things'}`}
              <ArrowRight size={17} className="ml-1.5" />
            </Button>

            <p className="text-center text-slate-400 text-[13px] mt-4">
              Four questions. You get a name and a price, not a call.
            </p>
          </>
        )}

        {/* step 2 */}
        {locked && trading === null && (
          <>
            <BackLink />
            <Header
              title="Are you already trading?"
              sub="It decides whether you need a build first or a plan straight away."
            />
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
        {locked && trading !== null && !owner && (
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
        {locked && trading !== null && owner && !when && (
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

            <p className="text-[12px] font-bold text-gold-700 tracking-wide mb-2">{result.kind}</p>
            <h2 className="text-2xl font-extrabold text-navy leading-snug mb-2">{result.name}</h2>

            <div className="price-figure text-3xl font-extrabold text-navy mb-1">{result.price}</div>
            <p className="text-emerald-700 font-semibold text-[14px] mb-5">{result.sub}</p>

            <p className="text-slate-600 leading-relaxed mb-4">{result.blurb}</p>

            <ul className="border-l-2 border-gold bg-gold-50 pl-4 py-3 mb-4 rounded-r-lg space-y-1.5">
              {result.lines.map((l) => (
                <li key={l} className="text-slate-600 text-[14.5px] leading-snug">{l}</li>
              ))}
            </ul>

            <p className="text-slate-500 text-[14px] leading-snug mb-6">{result.note}</p>

            <Button asChild className="w-full bg-deep hover:bg-deep-900 text-white py-6 rounded-xl font-semibold text-[15px]">
              <Link to={result.href}>
                {result.cta} <ArrowRight size={17} className="ml-1.5" />
              </Link>
            </Button>

            <p className="text-center text-slate-400 text-[13px] mt-4">
              Want it in writing?{' '}
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
