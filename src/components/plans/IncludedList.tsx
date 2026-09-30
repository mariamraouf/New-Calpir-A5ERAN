"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { PlanItem } from '@/data/plans';

/**
 * The list of what a plan includes.
 *
 * Each line opens downwards in place. It used to open a dialog, which meant a
 * visitor comparing four plans had to open a box, read it, close it and find
 * their place again for every line they did not recognise. Opening in place
 * costs one click and loses nothing, and you can leave several open at once
 * while you compare.
 *
 * An arrow rather than a tick: a tick claims something is done, an arrow just
 * points at the next line, which reads calmer when there are nine of them.
 */
const IncludedList: React.FC<{ items: PlanItem[] }> = ({ items }) => {
  const [open, setOpen] = useState<string[]>([]);
  const toggle = (text: string) =>
    setOpen((prev) => (prev.includes(text) ? prev.filter((t) => t !== text) : [...prev, text]));

  return (
    <>
      <ul className="divide-y divide-slate-100 border-y border-slate-100">
        {items.map((item) => {
          const isOpen = open.includes(item.text);
          return (
            <li key={item.text}>
              <button
                type="button"
                onClick={() => toggle(item.text)}
                aria-expanded={isOpen}
                className="group w-full flex items-start gap-2.5 text-left py-2.5"
              >
                <ChevronDown
                  size={16}
                  className={
                    'text-gold-600 shrink-0 mt-[3px] transition-transform duration-200 ' +
                    (isOpen ? 'rotate-0' : '-rotate-90')
                  }
                />
                <span className="text-[15px] text-slate-600 leading-snug group-hover:text-navy transition-colors">
                  {item.text}
                </span>
              </button>

              {isOpen && (
                <p className="text-[14px] text-slate-500 leading-relaxed pl-[26px] pb-3.5 -mt-0.5">
                  {item.brief}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <p className="text-[12px] text-slate-400 mt-3">
        Open any line to see what it means.
      </p>
    </>
  );
};

export default IncludedList;
