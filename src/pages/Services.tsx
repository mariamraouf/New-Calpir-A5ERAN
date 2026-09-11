"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { ArchitectureFlow } from '@/components/visuals/ArchitectureFlow';
import { SERVICE_CATEGORIES as CATEGORIES } from '@/data/serviceCategories';


const Services = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.45, ease: 'easeOut' },
  } as const;

  const byCategory = (name: string) =>
    allServicesCatalog.filter((s) => s.category === name);

  return (
    <div className="min-h-screen bg-white relative">
      <MetaSEO
        title="Services | Calpir"
        description="Every service Calpir offers, grouped by category: websites, branding, CRM and marketing, AI automation, operations, recruiting, HR and payroll."
        path="/services"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Capabilities</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">
              Our <br /> <span className="text-emerald-700">Services.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 max-w-[800px] leading-relaxed">
              {allServicesCatalog.length} services across {CATEGORIES.length} categories. Take the
              whole stack as a package, or any single piece on its own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category index. Anchors so a visitor can jump straight to what they came for. */}
      {/* Sticks directly beneath the navbar, which is itself sticky at top-0 with
          z-[100]. Matching the navbar's own top-16 sm:top-20 measurement keeps the
          two bars from overlapping. */}
      <section className="border-b border-zinc-200 bg-white/95 backdrop-blur-md sticky top-16 sm:top-20 z-[90] shadow-sm">
        <div className="container-custom px-6">
          <nav
            aria-label="Service categories"
            className="flex gap-x-4 lg:gap-x-5 overflow-x-auto py-4 no-scrollbar"
          >
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group flex items-baseline gap-1.5 whitespace-nowrap mono text-[11px] uppercase tracking-wider font-bold text-zinc-600 hover:text-emerald-700 transition-colors"
              >
                {c.name}
                <span className="text-[10px] text-zinc-400 group-hover:text-emerald-600">
                  {byCategory(c.name).length}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Interactive Flow Visual */}
      <section className="section-padding border-b border-zinc-200 bg-zinc-50/70">
        <div className="container-custom">
          <ArchitectureFlow />
        </div>
      </section>

      {/* Services by category */}
      <section className="section-padding">
        <div className="container-custom">
          {CATEGORIES.map((category) => {
            const services = byCategory(category.name);
            if (services.length === 0) return null;

            return (
              <div
                key={category.id}
                id={category.id}
                className="mb-20 scroll-mt-36 pt-8 border-t border-zinc-200 first:border-t-0 first:pt-0"
              >
                <motion.div {...reveal} className="mb-8 max-w-[760px]">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <SectionLabel>{category.name}</SectionLabel>
                    <span className="mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                      {services.length} services
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                    {category.blurb}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => {
                    const Icon = serviceIconMap[service.iconName] || FallbackIcon;
                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="border border-zinc-200 p-8 bg-white hover:border-emerald-600 hover:shadow-lg transition-all group block flex flex-col"
                      >
                        <div className="text-emerald-700 mb-5 group-hover:scale-110 transition-transform origin-left">
                          <Icon size={32} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-zinc-950 mb-2.5 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">
                          {service.shortDesc}
                        </p>
                        <div className="flex items-center gap-2 text-emerald-700 mono text-xs uppercase tracking-wider font-bold">
                          Explore Module <ArrowRight size={14} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
