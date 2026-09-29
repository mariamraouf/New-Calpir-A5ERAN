"use client";

import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { PlanItem } from '@/data/plans';

/**
 * The list of what a plan includes.
 *
 * Gold arrows rather than green ticks: a tick claims something is done, an
 * arrow just points at the next line, which reads calmer when there are eight
 * of them. Each line opens a short explanation, because "technical SEO
 * maintained" means nothing to somebody who is not in this industry, and a
 * buyer should not have to book a call to find out what they are paying for.
 */
const IncludedList: React.FC<{ items: PlanItem[] }> = ({ items }) => {
  const [open, setOpen] = useState<PlanItem | null>(null);

  return (
    <>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.text}>
            <button
              type="button"
              onClick={() => setOpen(item)}
              className="group w-full flex items-start gap-2.5 text-left rounded-lg -mx-1.5 px-1.5 py-1 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight
                size={16}
                className="text-gold shrink-0 mt-[3px] transition-transform group-hover:translate-x-0.5"
              />
              <span className="text-[15px] text-slate-600 leading-snug group-hover:text-navy transition-colors">
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="text-[12px] text-slate-400 mt-3">Tap any line to see what it means.</p>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="bg-white border border-slate-200 max-w-lg p-7 rounded-2xl">
          <DialogHeader className="text-left">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold mb-3">
              <ChevronRight size={14} /> What this means
            </div>
            <DialogTitle className="text-xl font-extrabold text-navy leading-snug mb-3">
              {open?.text}
            </DialogTitle>
          </DialogHeader>
          <p className="text-slate-600 leading-relaxed">{open?.brief}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IncludedList;
