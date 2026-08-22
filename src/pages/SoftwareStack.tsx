"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HeartHandshake, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SoftwareLogo from '@/components/ui/SoftwareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { allSoftwareStack, softwareCategoriesList } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

const SoftwareStack = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = useMemo(() => {
    return allSoftwareStack.filter((tool) => {
      const matchesCat = activeCategory === 'All' || tool.category === activeCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.useCase.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 px-4 md:px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>100+ Supported Tools & Platforms</SectionLabel>
          <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] mb-6 font-black uppercase tracking-tight text-zinc-950">
            Our Software <br /> <span className="text-emerald-700">Stack.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-3xl leading-relaxed">
            Here are the 100+ platforms, languages, and tools our team builds with every day.
          </p>

          {/* Warm Reassurance Box */}
          <div className="mt-8 p-6 md:p-8 border border-emerald-200 bg-emerald-50/70 flex flex-col md:flex-row gap-5 items-start">
            <div className="p-3 bg-emerald-600 text-white shrink-0 shadow-sm">
              <HeartHandshake size={28} />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl md:text-2xl font-black uppercase text-zinc-950 tracking-tight">
                Don't Stress: You Don't Need to Pick or Learn Any of This
              </h2>
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                You never have to waste 100 hours running trials or comparing 50 apps yourself. That is why we are here as your dedicated squad. We listen to what you want to achieve, handpick the exact right tools for your business, configure everything, and hand you a simple, self-running engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 border-b border-zinc-200 sticky top-20 bg-white/95 backdrop-blur-md z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Search by tool name, use case, or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-xs uppercase tracking-wider focus:border-emerald-600 w-full"
              />
            </div>

            {/* Total Count badge */}
            <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold hidden sm:block">
              Showing {filteredTools.length} of {allSoftwareStack.length} Tools
            </div>
          </div>

          {/* Categories Pills */}
          <div className="flex gap-2 overflow-x-auto pt-4 pb-1 custom-scrollbar">
            {softwareCategoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 mono text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all border",
                  activeCategory === cat
                    ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                    : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-emerald-600 hover:text-zinc-950"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of 100+ Softwares */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                  className="border border-zinc-200 p-5 bg-white flex flex-col justify-between hover:border-emerald-600 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Robust Multi-Tier Software Logo */}
                      <SoftwareLogo tool={tool} />

                      <span className="mono text-[9px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                        {tool.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black uppercase text-zinc-950 tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">
                      {tool.category}
                    </div>

                    <p className="text-zinc-600 text-xs leading-relaxed mono">
                      {tool.useCase}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] text-zinc-500 mono">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                    <span>Tested & Integrated</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20 border border-zinc-200 p-12 bg-zinc-50">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-2xl font-black uppercase text-zinc-950 mb-2">No tools found matching "{search}"</h3>
              <p className="text-zinc-600 text-sm mono mb-6">
                Have a niche or proprietary platform? If it has an API, webhook or database, we can wire it up for you.
              </p>
              <Button onClick={() => { setSearch(''); setActiveCategory('All'); }} variant="outline" className="border-zinc-300 text-zinc-900 rounded-none mono text-xs uppercase">
                Reset Search Filters
              </Button>
            </div>
          )}

          {/* Bottom Banner */}
          <div className="mt-16 border border-emerald-200 bg-emerald-50 p-8 md:p-12 text-center space-y-4 shadow-sm">
            <div className="inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-emerald-800 font-bold">
              <Sparkles size={14} /> Custom API & Webhook Integrations
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-zinc-950 tracking-tight">
              Using a tool not listed here?
            </h3>
            <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We connect custom internal databases, niche software, and bespoke webhooks every day. Tell us what you are currently using and we will connect it into your new ecosystem.
            </p>
            <div className="pt-2">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-none font-black text-sm uppercase tracking-wider btn-hover">
                <Link to="/contact">Book Free Consultation Call <ArrowRight size={16} className="ml-2" /></Link>
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

export default SoftwareStack;