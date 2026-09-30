"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

/**
 * The time and money an automated process gives back.
 *
 * It used to take a whole screen to ask two questions. It is a sanity check,
 * not a headline, so it is now one tinted strip: two inputs on the left, two
 * figures on the right, and a line saying plainly that these are your numbers
 * and not a claim we are making about ours.
 */
const ROICalculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);

  const EFFICIENCY = 0.65;
  const hoursSaved = hours * EFFICIENCY;
  const monthlySavings = Math.round(hoursSaved * 4 * rate);
  const annualSavings = monthlySavings * 12;

  const field = 'bg-white text-navy border-slate-200 rounded-lg h-12 text-[19px] font-bold focus:border-emerald-600';
  const label = 'text-[12px] font-bold tracking-wide uppercase text-slate-400 block mb-1.5';

  return (
    <section className="py-12 sm:py-14 border-b border-slate-200 bg-teal-50/60">
      <div className="container-custom">
        <div className="rounded-2xl bg-white border border-teal-100 shadow-sm p-6 sm:p-8">
          <div className="grid lg:grid-cols-[1.15fr,1fr] gap-8 items-center">
            <div>
              <p className="text-[12px] font-bold tracking-wide uppercase text-teal-700 mb-2">
                Quick sum
              </p>
              <h2 className="text-navy text-[1.5rem] sm:text-[1.9rem] font-extrabold tracking-tight leading-snug mb-2">
                What is the manual work costing you?
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5 max-w-[460px]">
                Put in your own two numbers. We assume about two thirds of
                repetitive admin can be automated, which is what we usually find
                and not a promise about your business.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-[400px]">
                <div>
                  <label className={label} htmlFor="roi-hours">Hours a week</label>
                  <Input
                    id="roi-hours"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="roi-rate">Hourly rate</label>
                  <Input
                    id="roi-rate"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                    className={field}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-teal-50 border border-teal-100 p-6">
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div>
                  <div className="text-[12px] font-bold tracking-wide uppercase text-teal-700 mb-1">
                    A month
                  </div>
                  <div className="price-figure text-[1.9rem] font-extrabold text-navy leading-none">
                    ${monthlySavings.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-wide uppercase text-teal-700 mb-1">
                    A year
                  </div>
                  <div className="price-figure text-[1.9rem] font-extrabold text-navy leading-none">
                    ${annualSavings.toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-[13.5px] leading-snug mb-4">
                About {hoursSaved.toFixed(1)} hours a week back, at the rate you put in.
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-teal-800 hover:text-teal-900"
              >
                See the plan that does this <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
