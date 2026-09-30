"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Repeat, ArrowRight, ChevronRight } from 'lucide-react';
import { MONTHLY_PLANS, formatPrice, type Currency } from '@/data/plans';
import { CATEGORY_PLANS } from '@/data/categoryPlans';

/**
 * The "or hand the whole department over" offer.
 *
 * Every category can be bought a service at a time, which suits somebody who
 * needs one thing. It does not suit somebody who needs the department run, and
 * until now that person had to work out for themselves that a monthly plan
 * existed. This sits under each category and says it plainly.
 */
interface RecurringOptionProps {
  categoryId: string;
  currency?: Currency;
}

const RecurringOption: React.FC<RecurringOptionProps> = ({ categoryId, currency = 'usd' }) => {
  const planIds = CATEGORY_PLANS[categoryId];
  if (!planIds?.length) return null;

  const plans = planIds
    .map((id) => MONTHLY_PLANS.find((p) => p.id === id))
    .filter(Boolean) as typeof MONTHLY_PLANS;
  if (!plans.length) return null;

  return (
    <div className="rounded-2xl border border-gold/35 bg-gold-50/50 p-6 sm:p-7">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="lg:flex-1">
          <div className="inline-flex items-center gap-2 text-gold-700 font-bold text-[12.5px] mb-2.5">
            <Repeat size={14} /> Or make it recurring
          </div>
          <h4 className="text-xl font-extrabold text-navy mb-2 leading-snug">
            Rather than buying these one at a time, hand the department over.
          </h4>
          <p className="text-slate-600 leading-relaxed">
            {plans.length > 1
              ? 'Two monthly plans cover this department. One price, every month, and the work happens whether or not you remember to ask.'
              : 'One price, every month, and the work happens whether or not you remember to ask. Cancel any month.'}
          </p>
        </div>

        <div className="lg:w-[340px] shrink-0 space-y-2.5">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              to="/pricing"
              className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 hover:border-gold transition-colors"
            >
              <div className="min-w-0 flex-grow">
                <p className="font-semibold text-navy text-[15px] leading-tight">{plan.name}</p>
                <p className="text-slate-500 text-[13px] leading-tight mt-0.5">
                  {formatPrice(plan.price, currency)} a month
                </p>
              </div>
              <ChevronRight size={17} className="text-slate-300 group-hover:text-gold-600 transition-colors shrink-0" />
            </Link>
          ))}

          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[14px] hover:underline pt-1"
          >
            Compare every monthly plan <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecurringOption;
