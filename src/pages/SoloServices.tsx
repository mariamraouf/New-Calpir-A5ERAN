"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeatureModal from '@/components/ui/FeatureModal';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';
import { soloPricing } from '@/data/soloPricing';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';

/**
 * Every service in the catalog can be bought on its own, so this page lists all
 * of them rather than a hand picked subset. Ten have a published fixed price in
 * src/data/soloPricing.ts. The rest are quoted per scope, and the card says so
 * instead of showing a made up number.
 */
const SoloServices = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const pricedCount = useMemo(
    () => allServicesCatalog.filter((s) => soloPricing[s.slug]).length,
    []
  );

  const visibleCategories = useMemo(
    () =>
      SERVICE_CATEGORIES.filter(
        (c) => filter === 'All' || c.name === filter
      ).map((c) => ({
        ...c,
        items: allServicesCatalog.filter((s) => s.category === c.name),
      })).filter((c) => c.items.length > 0),
    [filter]
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO
        title="Solo Services | Calpir"
        description="Every Calpir service available on its own, from domain setup and CRM to recruiting, payroll and AI agents. Fixed prices where we publish them."
        path="/solo-services"
      />
      <Navbar />

      <section className="pt-40 md:pt-48 pb-16 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>À La Carte Solutions</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">
            Solo <br /> <span className="text-emerald-700">Services.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-[850px] leading-relaxed">
            Every one of our {allServicesCatalog.length} services can be booked on its own, without a
            full package. {pricedCount} have a fixed published price. The rest are quoted against
            your scope, because the honest answer depends on what you already have.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-zinc-200 bg-white/95 backdrop-blur-md sticky top-16 sm:top-20 z-[90] shadow-sm">
        <div className="container-custom px-6">
          <div className="flex gap-x-4 lg:gap-x-5 overflow-x-auto py-4 no-scrollbar">
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
                    'flex items-baseline gap-1.5 whitespace-nowrap mono text-[11px] uppercase tracking-wider font-bold transition-colors ' +
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
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="mb-16 scroll-mt-36 pt-8 border-t border-zinc-200 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <SectionLabel>{category.name}</SectionLabel>
                <span className="mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  {category.items.length} services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => {
                  const priced = soloPricing[service.slug];
                  const Icon = serviceIconMap[service.iconName] || FallbackIcon;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35 }}
                      className="border border-zinc-200 p-7 bg-white flex flex-col hover:border-emerald-600 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-emerald-700">
                          <Icon size={26} />
                        </div>
                        {priced ? (
                          <span className="mono text-[10px] uppercase tracking-widest text-emerald-800 font-black bg-emerald-50 px-2 py-1 border border-emerald-200">
                            Fixed price
                          </span>
                        ) : (
                          <span className="mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold bg-zinc-50 px-2 py-1 border border-zinc-200">
                            Quoted
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-black uppercase text-zinc-950 mb-3 tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      {priced ? (
                        <>
                          <div className="text-3xl font-black text-emerald-700 mb-1">
                            {priced.price}
                          </div>
                          <div className="flex items-center gap-1.5 mono text-[11px] text-zinc-500 uppercase tracking-wider mb-4">
                            <Clock size={12} className="text-emerald-600" />
                            {priced.turnaround}
                          </div>
                        </>
                      ) : (
                        <div className="text-base font-bold text-zinc-500 mb-4">
                          Priced against your scope
                        </div>
                      )}

                      <p className="text-zinc-600 text-sm leading-relaxed mb-5 flex-1">
                        {service.shortDesc}
                      </p>

                      {priced && (
                        <div className="space-y-1.5 mb-6 pt-4 border-t border-zinc-100">
                          <div className="mono text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1.5">
                            Included
                          </div>
                          {priced.deliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-[11px] text-zinc-700 mono"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-emerald-600 shrink-0 mt-0.5"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col gap-2 pt-4 border-t border-zinc-100 mt-auto">
                        <Link
                          to={`/services/${service.slug}`}
                          className="mono text-[11px] uppercase tracking-wider font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5"
                        >
                          What this includes <ArrowRight size={12} />
                        </Link>
                        <div className="flex gap-2">
                          {priced?.modalKey && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setActiveModal(priced.modalKey || null)}
                              className="border-zinc-300 text-zinc-800 hover:bg-zinc-100 font-bold uppercase text-[11px] py-5 px-3 rounded-none flex items-center gap-1.5"
                            >
                              <HelpCircle size={12} className="text-emerald-600" /> Details
                            </Button>
                          )}
                          <Button
                            asChild
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-[11px] py-5 rounded-none btn-hover"
                          >
                            <Link to="/contact">
                              {priced ? 'Order this' : 'Get a quote'}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bundle Banner */}
          <div className="mt-8 border border-zinc-200 bg-zinc-50 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-2">
                Want three or more solo services?
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase text-zinc-950 tracking-tight mb-2">
                Our Full Launch Packages Save You 40% to 60%
              </h3>
              <p className="text-zinc-600 text-sm max-w-[650px] leading-relaxed">
                Instead of booking five individual services separately, the Starter, Growth and
                Ultimate packages bundle everything together.
              </p>
            </div>
            <Button
              asChild
              className="bg-emerald-600 text-white hover:bg-emerald-700 font-black uppercase px-8 py-6 rounded-none text-sm shrink-0"
            >
              <Link to="/packages">View All In One Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureModal featureKey={activeModal} onClose={() => setActiveModal(null)} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SoloServices;
