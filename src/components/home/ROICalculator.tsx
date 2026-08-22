"use client";

import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { Input } from '@/components/ui/input';

const ROICalculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);
  const [efficiency, setEfficiency] = useState(65);

  const hoursSaved = (hours * (efficiency / 100)).toFixed(1);
  const monthlySavings = Math.round(Number(hoursSaved) * 4 * rate);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="section-padding border-b border-zinc-200 bg-white">
      <div className="container-custom">
        <SectionLabel>Efficiency Logic</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-6 text-zinc-950 font-black">
              Calculate <br /> Your ROI.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our systems are designed to eliminate manual overhead. Input your current metrics to see the projected financial impact of our automation engine.
            </p>
          </div>
          
          <div className="border border-zinc-200 p-8 md:p-12 bg-zinc-50 shadow-sm">
            <div className="space-y-8">
              <div>
                <label className="mono text-xs uppercase tracking-wider font-bold text-zinc-700 block mb-3">
                  Weekly Manual Hours
                </label>
                <Input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="bg-white text-zinc-950 border-zinc-300 rounded-none h-14 text-2xl font-black focus:border-emerald-600"
                />
              </div>
              
              <div>
                <label className="mono text-xs uppercase tracking-wider font-bold text-zinc-700 block mb-3">
                  Hourly Rate ($)
                </label>
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="bg-white text-zinc-950 border-zinc-300 rounded-none h-14 text-2xl font-black focus:border-emerald-600"
                />
              </div>

              <div className="pt-8 border-t border-zinc-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-600 font-bold mb-2">Monthly Savings</div>
                    <div className="text-3xl md:text-4xl font-black text-emerald-700">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-600 font-bold mb-2">Annual Savings</div>
                    <div className="text-3xl md:text-4xl font-black text-emerald-700">${annualSavings.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;