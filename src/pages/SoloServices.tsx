"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, PencilRuler } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';
import { servicePricing, formatPrice, CURRENCIES, Currency } from '@/data/servicePricing';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { useBookingModal } from '@/components/booking/BookingModalProvider';

/**
 * Every service in the catalogue, priced, on one page.
 *
 * Prices are starting prices for a defined scope and are shown in the currency
 * the visitor picks, because we sell into the US, the UK and the EU and making
 * someone do the conversion in their head is a small tax on buying.
 */
const SoloServices = () => {
  const [filter, setFilter] = useState<string>('All');
  const [currency, setCurrency] = useState<Currency>('usd');
  const { openBooking } = useBookingModal();

  const visibleCategories = useMemo(
    () =>
      SERVICE_CATEGORIES.filter((c) => filter === 'All' || c.name === filter)
        .map((c) => ({ ...c, items: allServicesCatalog.filter((s) => s.category === c.name) }))
        .filter((c) => c.items.length > 0),
    [filter]
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO
        title="Solo Services and Prices | Calpir"
        description="Every Calpir service with its price in USD, GBP and EUR, from domain setup and CRM to recruiting, payroll and AI agents. You pay for what you see."
        path="/solo-services"
      />
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>Pick What You Need</SectionLabel>
          <h1 className="text-4xl sm:text-6xl md:text-7xl leading-[0.95] mb-5 font-black uppercase tracking-tight text-zinc-950">
            Solo <span className="text-emerald-700">Services.</span>
          </h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-[800px] leading-relaxed">
            All {allServicesCatalog.length} services, each with a price, each bookable on its own.
            Priced in USD, GBP and EUR because we work across the US, the UK and Europe.
          </p>
        </div>
      </section>

      {/* The promise, stated plainly rather than buried in terms. */}
      <section className="border-b border-zinc-200 bg-zinc-950 text-white">
        <div className="container-custom px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-black uppercase text-sm tracking-tight">You pay for what you see</div>
              <p className="text-zinc-400 text-xs leading-relaxed mt-1">
                The price on the card is the price. No setup fees, no per seat surprises, nothing
                added after the fact.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-black uppercase text-sm tracking-tight">Agreed before it starts</div>
              <p className="text-zinc-400 text-xs leading-relaxed mt-1">
                If your scope needs more than the listed one, we tell you the number before any
                work begins, not on the invoice.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <PencilRuler size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-black uppercase text-sm tracking-tight">Custom scopes welcome</div>
              <p className="text-zinc-400 text-xs leading-relaxed mt-1">
                Nothing here quite right? We build custom packages and bespoke services. Tell us the
                problem and we will price it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and currency */}
      <section className="border-b border-zinc-200 bg-white/95 backdrop-blur-md sticky top-16 sm:top-20 z-[90] shadow-sm">
        <div className="container-custom px-4 sm:px-6 py-3 space-y-2.5">
          <div className="flex gap-x-4 overflow-x-auto no-scrollbar">
            {['All', ...SERVICE_CATEGORIES.map((c) => c.name)].map((name) => {
              const count =
                name === 'All'
                  ? allServicesCatalog.length
                  : allServicesCatalog.filter((s) => s.category === name).length;
              const active = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  className={
                    'flex items-baseline gap-1.5 whitespace-nowrap mono text-[11px] uppercase tracking-wider font-bold transition-colors py-1 ' +
                    (active
                      ? 'text-emerald-700 underline underline-offset-8 decoration-2'
                      : 'text-zinc-600 hover:text-emerald-700')
                  }
                >
                  {name}
                  <span className="text-[10px] text-zinc-400">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="flex border border-zinc-300 w-fit">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setCurrency(c.code)}
                aria-pressed={currency === c.code}
                className={
                  'px-3 py-1.5 mono text-[11px] font-bold uppercase tracking-wider transition-colors ' +
                  (currency === c.code
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-zinc-600 hover:text-emerald-700')
                }
              >
                {c.symbol} {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="mb-16 scroll-mt-40 pt-8 border-t border-zinc-200 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <SectionLabel>{category.name}</SectionLabel>
                <span className="mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  {category.items.length} services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => {
                  const priced = servicePricing[service.slug];
                  const Icon = serviceIconMap[service.iconName] || FallbackIcon;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35 }}
                      className="border border-zinc-200 p-6 sm:p-7 bg-white flex flex-col hover:border-emerald-600 hover:shadow-lg transition-all"
                    >
                      <div className="text-emerald-700 mb-4">
                        <Icon size={26} />
                      </div>

                      <h2 className="text-lg font-black uppercase text-zinc-950 mb-3 tracking-tight leading-tight">
                        {service.title}
                      </h2>

                      {priced && (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span className="mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                              From
                            </span>
                            <span className="text-3xl font-black text-emerald-700">
                              {formatPrice(service.slug, currency)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mono text-[11px] text-zinc-500 uppercase tracking-wider mt-1 mb-4">
                            <Clock size={12} className="text-emerald-600" />
                            {priced.turnaround}
                          </div>
                        </>
                      )}

                      <p className="text-zinc-600 text-sm leading-relaxed mb-5 flex-1">
                        {service.shortDesc}
                      </p>

                      {priced?.deliverables && (
                        <div className="space-y-1.5 mb-5 pt-4 border-t border-zinc-100">
                          {priced.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-700 mono">
                              <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col gap-2.5 pt-4 border-t border-zinc-100 mt-auto">
                        <Link
                          to={`/services/${service.slug}`}
                          className="mono text-[11px] uppercase tracking-wider font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5"
                        >
                          What this includes <ArrowRight size={12} />
                        </Link>
                        <Button
                          type="button"
                          onClick={() => openBooking()}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-[11px] py-5 rounded-none btn-hover"
                        >
                          Book this
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Custom work and bundles */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-zinc-200 bg-zinc-50 p-8 md:p-10">
              <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-2">
                Three or more services?
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 tracking-tight mb-3">
                Packages save 40% to 60%
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Booking five services separately costs considerably more than the Starter, Growth or
                Ultimate package that already contains them.
              </p>
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700 font-black uppercase px-7 py-6 rounded-none text-sm">
                <Link to="/packages">Compare packages</Link>
              </Button>
            </div>

            <div className="border-2 border-emerald-600 bg-white p-8 md:p-10">
              <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-2">
                Not on the list?
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 tracking-tight mb-3">
                We build custom packages
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Most businesses need a combination nobody has bothered to package. Tell us what is
                actually breaking and we will scope it, price it, and say so if you do not need us.
              </p>
              <Button
                type="button"
                onClick={() => openBooking()}
                className="bg-zinc-950 text-white hover:bg-zinc-800 font-black uppercase px-7 py-6 rounded-none text-sm"
              >
                Tell us what you need
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SoloServices;
