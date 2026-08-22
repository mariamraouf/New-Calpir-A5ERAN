"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Code, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import ROICalculator from '@/components/home/ROICalculator';
import FAQ from '@/components/home/FAQ';
import SectorsSection from '@/components/home/SectorsSection';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative bg-gradient-to-b from-emerald-50/40 via-white to-white">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-flex items-center gap-2 border border-emerald-300 bg-emerald-50 px-4 py-2 mb-8 mono text-xs uppercase tracking-widest text-emerald-800 font-bold shadow-sm">
              <Sparkles size={14} className="text-emerald-600" /> Bristol Based Business Infrastructure & AI Squad
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] mb-8 font-black uppercase tracking-tight text-zinc-950 max-w-6xl mx-auto">
              Launch Your <br /> Business <br /> <span className="text-emerald-700">In 7 Days</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              We genuinely love building businesses and watching founders succeed. We set up your entire digital nervous system: Website, Domain and SSL, CRM, Google Indexing, and Autonomous AI Agents deployed in days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 sm:px-10 py-7 rounded-none font-black text-base sm:text-lg uppercase tracking-tight btn-hover">
                <Link to="/contact">Book Free Consultation Call</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-900 hover:bg-zinc-100 px-8 sm:px-10 py-7 rounded-none font-black text-base sm:text-lg uppercase tracking-tight btn-hover">
                <Link to="/packages">Explore All Packages (7 to 28 Days)</Link>
              </Button>
            </div>

            {/* Reassurance points */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-zinc-200 mono text-xs uppercase tracking-wider text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" /> 100% Code and Asset Ownership
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" /> Sub 1.5s Global Load Speed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" /> Dedicated Post Launch Squad
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors We Launch */}
      <SectorsSection />

      {/* Services Grid */}
      <section className="section-padding border-b border-zinc-200 bg-white">
        <div className="container-custom">
          <SectionLabel>The Core Modules</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight">
              Systems Built <br /> <span className="text-emerald-700">To Generate Revenue</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-base max-w-md">
              Every module is designed to eliminate manual bottlenecks and help your business scale effortlessly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website, Domain and SSL", icon: <Globe />, desc: "Sub-second digital storefront with custom domain acquisition, SSL encryption, and Google Search indexing.", link: "/services/website-development" },
              { title: "CRM and Sales Systems", icon: <BarChart3 />, desc: "Automated lead capture, instant SMS routing, and 60-second response pipelines.", link: "/services/crm-sales" },
              { title: "AI Agent Development", icon: <Bot />, desc: "Autonomous intelligent agents that answer inquiries, qualify leads, and book calls 24/7.", link: "/services/ai-agents" },
              { title: "Workflow Automation", icon: <Zap />, desc: "Eliminate repetitive manual tasks with Make.com and Zapier pipelines that run automatically.", link: "/services/ai-automation" },
              { title: "Custom Apps and Fleets", icon: <Code />, desc: "Turn complex business logic into high-performance web software and AI agent fleets.", link: "/services/custom-apps" },
              { title: "Operations and HR", icon: <Settings />, desc: "Documented SOP wikis, payroll setups, and bulletproof team onboarding systems.", link: "/services/operations-hr" }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="border border-zinc-200 p-8 bg-zinc-50/50 hover:bg-white hover:border-emerald-600 hover:shadow-lg transition-all group block">
                <div className="text-emerald-700 mb-5 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black text-zinc-950 mb-2.5">{s.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center gap-2 text-emerald-700 mono text-xs uppercase tracking-wider font-bold">
                  Explore Module <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-xs uppercase font-bold py-6 px-8 rounded-none">
              <Link to="/software-stack">Browse Our 100+ Software Stack <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-zinc-300 text-zinc-800 hover:bg-zinc-100 mono text-xs uppercase font-bold py-6 px-8 rounded-none">
              <Link to="/solo-services">Browse À La Carte Solo Services <Layers size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Visual - Large & Dynamic */}
      <section id="ecosystem" className="section-padding border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-emerald-50/20 to-zinc-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel>The Calpir Unified Stack</SectionLabel>
              <h2 className="text-3xl sm:text-5xl md:text-6xl text-zinc-950 font-black leading-tight tracking-tight">
                Everything Connected. <br />
                <span className="text-emerald-700">Everything Moving Together.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                Most businesses struggle with 6 to 8 disconnected tools. We build one integrated ecosystem where your website feeds your CRM, your CRM triggers automations, and your AI agents handle client communication 24/7.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 mono text-xs uppercase tracking-wider font-bold text-zinc-800">
                  <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  Continuous Real-Time Data Flow Between Modules
                </div>
                <div className="mono text-xs text-emerald-800 font-bold uppercase tracking-wider border-l-2 border-emerald-600 pl-4 py-1.5 bg-emerald-50/60">
                  One unified nervous system. Zero gaps. Every tool talks to every other tool.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center items-center py-6">
              <ConnectedEcosystem className="scale-95 sm:scale-105 md:scale-110" />
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      <FAQ />

      {/* Contact CTA */}
      <section id="contact" className="section-padding border-t border-zinc-200 bg-emerald-50/60">
        <div className="container-custom text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl mb-6 font-black uppercase tracking-tight text-zinc-950">
            Ready to <br /> Launch Smarter?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30 minute consultation with Maria. We will map out exactly what your business needs to launch and scale.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 rounded-none font-black text-lg uppercase tracking-tight transition-all btn-hover">
            <Link to="/contact">Book Your Free Call with Maria</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;