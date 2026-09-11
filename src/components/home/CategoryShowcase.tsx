"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PencilRuler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionLabel from '@/components/ui/SectionLabel';
import { allServicesCatalog } from '@/data/allServicesList';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { useBookingModal } from '@/components/booking/BookingModalProvider';

/**
 * The homepage described the offer in a paragraph. This shows it instead: seven
 * categories, real counts, and the first few services in each, so the breadth is
 * visible rather than claimed. Everything is read from the catalogue, so it can
 * never disagree with the services page.
 */
const CategoryShowcase: React.FC = () => {
  const { openBooking } = useBookingModal();

  const groups = SERVICE_CATEGORIES.map((c) => {
    const items = allServicesCatalog.filter((s) => s.category === c.name);
    return { ...c, items };
  }).filter((g) => g.items.length > 0);

  return (
    <section className="section-padding border-b border-zinc-200">
      <div className="container-custom">
        <div className="max-w-[760px] mb-10">
          <SectionLabel>Everything We Build</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 mt-4 mb-4 leading-[1.05]">
            {allServicesCatalog.length} services.<br />
            <span className="text-emerald-700">Take one, or the lot.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Every service has a published price in USD, GBP and EUR. You pay for what you see,
            and anything outside a listed scope is agreed before it starts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, gi) => {
            const Lead = serviceIconMap[group.items[0]?.iconName] || FallbackIcon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: Math.min(gi * 0.05, 0.25) }}
                className="border border-zinc-200 bg-white p-6 flex flex-col hover:border-emerald-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                    <Lead size={22} />
                  </div>
                  <span className="mono text-[10px] uppercase tracking-widest font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    {group.items.length} services
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-950 mb-2 leading-tight">
                  {group.name}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-1">{group.blurb}</p>

                <ul className="space-y-1 mb-5">
                  {group.items.slice(0, 3).map((s) => (
                    <li key={s.slug} className="mono text-[11px] text-zinc-500 truncate">
                      {s.title}
                    </li>
                  ))}
                  {group.items.length > 3 && (
                    <li className="mono text-[11px] text-zinc-400">
                      and {group.items.length - 3} more
                    </li>
                  )}
                </ul>

                <Link
                  to={`/services#${group.id}`}
                  className="mono text-[11px] uppercase tracking-wider font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 mt-auto"
                >
                  See all {group.items.length} <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}

          {/* Custom work sits in the grid rather than below it, so it reads as a
              real option rather than a footnote. */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35 }}
            className="border-2 border-emerald-600 bg-emerald-50/50 p-6 flex flex-col"
          >
            <div className="p-2.5 bg-emerald-600 text-white w-fit mb-4">
              <PencilRuler size={22} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-zinc-950 mb-2 leading-tight">
              Custom packages and services
            </h3>
            <p className="text-zinc-700 text-sm leading-relaxed mb-5 flex-1">
              Most businesses need a combination nobody has bothered to package. Tell us what is
              actually breaking and we will scope it, price it up front, and tell you honestly if
              you do not need us.
            </p>
            <Button
              type="button"
              onClick={() => openBooking()}
              className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-black uppercase tracking-wider text-xs py-6 rounded-none mt-auto"
            >
              Tell us what you need
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
