"use client";

import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const ROICalculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);
  const [efficiency, setEfficiency] = useState(65);

  const hoursSaved = (hours * (efficiency / 100)).toFixed(1);
  const monthlySavings = Math.round(Number(hoursSaved) * 4 * rate);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="section-padding border-b border-white/10">
      <div className="container-custom">
        <SectionLabel>Efficiency Logic</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl mb-8">Calculate <br /> Your ROI.</h2>
            <p className="text-white/40 mono text-lg leading-relaxed">
              Our systems are designed to eliminate manual overhead. Input your current metrics to see the projected impact of our automation engine.
            </p>
          </div>
          
          <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm">
            <div className="space-y-12">
              <div>
                <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40 block mb-4">Weekly Manual Hours</label>
                <Input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="bg-black border-white/10 rounded-none h-16 text-2xl font-black focus:border-[#064e3b]"
                />
              </div>
              
              <div>
                <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40 block mb-4">Hourly Rate ($)</label>
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="bg-black border-white/10 rounded-none h-16 text-2xl font-black focus:border-[#064e3b]"
                />
              </div>

              <div className="pt-12 border-t border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">Monthly Savings</div>
                    <div className="text-4xl font-black text-[#064e3b]">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">Annual Savings</div>
                    <div className="text-4xl font-black text-[#064e3b]">${annualSavings.toLocaleString()}</div>
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