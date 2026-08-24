"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette, Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';
import { ArchitectureFlow } from '@/components/visuals/ArchitectureFlow';

const iconMap: { [key: string]: React.ElementType } = {
  Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette, Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck, Sparkles
};

const Services = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const categories = [
    "Web & Foundation",
    "Sales & Marketing",
    "AI & Automation",
    "Operations & Growth"
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <MetaSEO 
        title="Services | Calpir"
        description="Everything Calpir builds: websites, CRM and sales systems, marketing, operations, AI agents and custom apps."
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
              We provide the technical foundation for modern businesses. From initial architecture to autonomous operations, we build the systems that drive real growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Flow Visual */}
      <section className="section-padding border-b border-zinc-200 bg-zinc-50/70">
        <div className="container-custom">
          <ArchitectureFlow />
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="section-padding">
        <div className="container-custom">
          {categories.map(category => (
            <div key={category} className="mb-16">
              <SectionLabel>{category}</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allServicesCatalog
                  .filter(s => s.category === category)
                  .map(service => {
                    const Icon = iconMap[service.iconName] || Sparkles;
                    return (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.slug}`}
                        className="border border-zinc-200 p-8 bg-white hover:border-emerald-600 hover:shadow-lg transition-all group block"
                      >
                        <div className="text-emerald-700 mb-5 group-hover:scale-110 transition-transform">
                          <Icon size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-zinc-950 mb-2.5">{service.title}</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                        <div className="flex items-center gap-2 text-emerald-700 mono text-xs uppercase tracking-wider font-bold">
                          Explore Module <ArrowRight size={14} />
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;