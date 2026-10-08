"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MONTHLY_TRIAL_DAYS } from '@/data/plans';

/**
 * The free trial, on every page, in a different colour each time.
 *
 * It only appeared on the home page and inside the plan cards, which meant a
 * visitor who landed on a blog post or a service page never learned the
 * strongest thing we offer: the first week costs nothing, and not as a refund
 * afterwards, as a bill that is never raised.
 *
 * The colour changes per page on purpose. The same green band repeated nine
 * times reads as furniture and stops being seen by the third one; a strip
 * that is clay here and deep green there keeps catching the eye. The words
 * stay the same so the promise does not drift.
 *
 * It says "monthly plans" out loud. The trial has never applied to one off
 * builds or single services, and a banner that implied otherwise would be
 * the expensive kind of wrong.
 */

type Tone = 'emerald' | 'clay' | 'deep' | 'teal' | 'sky' | 'violet';

const TONES: Record<Tone, { wrap: string; eyebrow: string; head: string; body: string; btn: string; ghost: string }> = {
  emerald: {
    wrap: 'bg-emerald-600',
    eyebrow: 'bg-white/20 text-white',
    head: 'text-white',
    body: 'text-emerald-50',
    btn: 'bg-white text-emerald-700 hover:bg-emerald-50',
    ghost: 'text-white/90 hover:text-white border-white/40 hover:border-white',
  },
  clay: {
    wrap: 'bg-gold-600',
    eyebrow: 'bg-white/20 text-white',
    head: 'text-white',
    body: 'text-gold-50',
    btn: 'bg-white text-gold-800 hover:bg-gold-50',
    ghost: 'text-white/90 hover:text-white border-white/40 hover:border-white',
  },
  deep: {
    wrap: 'bg-deep-900',
    eyebrow: 'bg-emerald-600 text-white',
    head: 'text-white',
    body: 'text-slate-300',
    btn: 'bg-emerald-600 text-white hover:bg-emerald-500',
    ghost: 'text-slate-300 hover:text-white border-white/30 hover:border-white/70',
  },
  teal: {
    wrap: 'bg-tint-teal border-y border-emerald-200',
    eyebrow: 'bg-emerald-700 text-white',
    head: 'text-navy',
    body: 'text-slate-600',
    btn: 'bg-emerald-600 text-white hover:bg-emerald-700',
    ghost: 'text-emerald-800 hover:text-emerald-900 border-emerald-300 hover:border-emerald-600',
  },
  sky: {
    wrap: 'bg-tint-sky border-y border-slate-200',
    eyebrow: 'bg-deep-800 text-white',
    head: 'text-navy',
    body: 'text-slate-600',
    btn: 'bg-deep hover:bg-deep-900 text-white',
    ghost: 'text-deep-800 hover:text-deep-900 border-slate-300 hover:border-deep-800',
  },
  violet: {
    wrap: 'bg-tint-violet border-y border-slate-200',
    eyebrow: 'bg-gold-700 text-white',
    head: 'text-navy',
    body: 'text-slate-600',
    btn: 'bg-gold-700 hover:bg-gold-800 text-white',
    ghost: 'text-gold-800 hover:text-gold-900 border-gold-300 hover:border-gold-700',
  },
};

interface TrialStripProps {
  tone?: Tone;
  /** Overrides the headline where a page wants to speak to its own reader. */
  headline?: string;
  className?: string;
}

const TrialStrip: React.FC<TrialStripProps> = ({ tone = 'emerald', headline, className }) => {
  const t = TONES[tone];

  return (
    <section className={cn('py-10 sm:py-12', t.wrap, className)}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 mono text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-3',
                t.eyebrow,
              )}
            >
              <Sparkles size={12} /> {MONTHLY_TRIAL_DAYS} days free
            </span>
            <h2
              className={cn(
                'text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-2',
                t.head,
              )}
            >
              {headline || `Start a monthly plan free for ${MONTHLY_TRIAL_DAYS} days.`}
            </h2>
            <p className={cn('text-[15px] leading-relaxed max-w-2xl', t.body)}>
              We start the work this week and nothing is charged until day eight. Cancel
              inside the week and you pay nothing at all, not refunded later, never
              billed. Monthly plans only.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              asChild
              className={cn('font-bold tracking-tight px-7 py-6 rounded-xl', t.btn)}
            >
              <Link to="/pricing">
                Get your free trial now <ArrowRight size={17} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className={cn('bg-transparent font-bold tracking-tight px-6 py-6 rounded-xl', t.ghost)}
            >
              <Link to="/services">Browse services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialStrip;
