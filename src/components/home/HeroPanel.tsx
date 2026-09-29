"use client";

import React from 'react';
import { TrendingUp, Search, Bot, CheckCircle2, Zap } from 'lucide-react';

/**
 * The visual half of the hero.
 *
 * The reference site puts a product shot on the right with floating status
 * cards over it. We have no product shot and a stock photo of a meeting room
 * says nothing, so this draws the thing itself: the systems Calpir builds,
 * reporting live. Every figure here is illustrative and labelled as an
 * example, because inventing a client result would be worse than having none.
 */
const HeroPanel = () => {
  return (
    <div className="relative">
      {/* The main panel */}
      <div className="surface rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold text-[15px]">Your Calpir systems</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full">
            All running
          </span>
        </div>

        <div className="p-5 space-y-3">
          {[
            { icon: Search, name: 'Search & content', note: 'Four pieces published this month', tone: 'emerald' },
            { icon: Bot, name: 'AI agent', note: 'Answering and booking, 24 hours', tone: 'navy' },
            { icon: TrendingUp, name: 'Sales pipeline', note: 'Every lead routed, nothing dropped', tone: 'gold' },
            { icon: Zap, name: 'Automations', note: 'Running without anyone watching', tone: 'emerald' },
          ].map((row) => {
            const Icon = row.icon;
            const ring =
              row.tone === 'gold'
                ? 'bg-gold-50 text-gold border-gold/30'
                : row.tone === 'navy'
                ? 'bg-navy-50 text-navy border-navy/15'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200';
            return (
              <div
                key={row.name}
                className="flex items-center gap-3.5 border border-slate-200 rounded-xl p-3.5 bg-white"
              >
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${ring}`}>
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-navy text-[15px] leading-tight">{row.name}</p>
                  <p className="text-slate-500 text-[13px] leading-snug">{row.note}</p>
                </div>
                <CheckCircle2 size={18} className="text-emerald-500 ml-auto shrink-0" />
              </div>
            );
          })}
        </div>

        <div className="border-t border-slate-200 grid grid-cols-3 divide-x divide-slate-200">
          {[
            { k: '7 days', v: 'To launch' },
            { k: '65', v: 'Services priced' },
            { k: '100%', v: 'Yours to keep' },
          ].map((stat) => (
            <div key={stat.k} className="px-4 py-4 text-center">
              <p className="text-xl font-extrabold text-navy leading-none mb-1">{stat.k}</p>
              <p className="text-[12px] text-slate-500">{stat.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards, the detail that stops the panel reading as a plain box */}
      <div className="hidden lg:flex absolute -left-7 -bottom-6 items-center gap-2.5 bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold-50 text-gold">
          <TrendingUp size={15} />
        </span>
        <div>
          <p className="text-[12px] font-semibold text-navy leading-tight">Found on Google</p>
          <p className="text-[11px] text-slate-500 leading-tight">Maintained monthly</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute -right-6 -top-6 items-center gap-2.5 bg-navy rounded-xl shadow-xl px-3.5 py-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
        <div>
          <p className="text-[12px] font-semibold text-white leading-tight">Every price published</p>
          <p className="text-[11px] text-slate-300 leading-tight">No quote call needed</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
