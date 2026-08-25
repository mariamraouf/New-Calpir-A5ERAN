"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Code, Layers, Sparkles, CheckCircle2, Building2, CreditCard, ShieldCheck, Mail } from 'lucide-react';
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
import MetaSEO from '@/components/seo/MetaSEO';
import LogoTicker from '@/components/home/LogoTicker';
import LaunchTimeline from '@/components/home/LaunchTimeline';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <MetaSEO 
        title="Calpir | Complete Turnkey Business Setup and AI Systems"
        description="Calpir builds and launches your entire company infrastructure: legal foundation, brand, website, domain, email, phone, CRM, payments, payroll, SOPs, and AI systems."
        path="/"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative bg-gradient-to-b from-emerald-50/40 via-white to-white">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-emerald-300 bg-emerald-50 px-3 sm:px-4 py-1.5 mb-5 sm:mb-7 mono text-[10px] sm:text-xs uppercase tracking-widest text-emerald-800 font-bold shadow-sm rounded-none">
              <Sparkles size={13} className="text-emerald-600 shrink-0" /> Complete Turnkey Business Setup Squad
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.2rem] leading-[1.05] sm:leading-[0.96] mb-5 sm:mb-8 font-black uppercase tracking-tight text-zinc-950 max-w-5xl mx-auto">
              Your Entire Business <br className="hidden sm:inline" />
              <span className="text-emerald-700">Set Up In 7 Days</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
              We do not just build websites or configure chatbots. We launch your entire company from scratch: brand identity, legal entity foundations, domain, high speed web store, Google indexing, business email, VOIP phone, CRM sales pipelines, Stripe invoicing, HR contracts, team workspaces, and autonomous AI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xl mx-auto px-2">
              <Button asChild className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-9 py-5 sm:py-7 rounded-none font-black text-xs sm:text-base uppercase tracking-tight btn-hover shadow-md">
                <Link to="/contact">Book Free Consultation Call</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-900 hover:bg-zinc-100 px-6 sm:px-9 py-5 sm:py-7 rounded-none font-black text-xs sm:text-base uppercase tracking-tight btn-hover">
                <Link to="/packages">Explore Full Launch Packages (7 to 28 Days)</Link>
              </Button>
            </div>

            {/* Reassurance points */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 mt-8 sm:mt-12 pt-5 sm:pt-8 border-t border-zinc-200 mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-700 font-bold">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Full Business Setup Included
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> 100% Code and Account Ownership
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Subsecond Global Speed
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Dedicated Post Launch Squad
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Setup Pillars Banner */}
      <section className="py-10 bg-zinc-900 text-white border-b border-zinc-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-4 border-l-2 border-emerald-500">
              <div className="mono text-[10px] uppercase text-emerald-400 font-bold">Pillar 1</div>
              <div className="text-base font-black uppercase text-white mt-1">Foundation and Brand</div>
              <p className="text-xs text-zinc-400 mt-1">Entity guidance, domain, SSL, logo kit, typography, and color systems.</p>
            </div>
            <div className="p-4 border-l-2 border-emerald-500">
              <div className="mono text-[10px] uppercase text-emerald-400 font-bold">Pillar 2</div>
              <div className="text-base font-black uppercase text-white mt-1">Digital Storefront</div>
              <p className="text-xs text-zinc-400 mt-1">High conversion React web architecture and day one Google verification.</p>
            </div>
            <div className="p-4 border-l-2 border-emerald-500">
              <div className="mono text-[10px] uppercase text-emerald-400 font-bold">Pillar 3</div>
              <div className="text-base font-black uppercase text-white mt-1">Sales and Finance</div>
              <p className="text-xs text-zinc-400 mt-1">CRM pipelines, 60 second lead alerts, email, VOIP, Stripe, and invoicing.</p>
            </div>
            <div className="p-4 border-l-2 border-emerald-500">
              <div className="mono text-[10px] uppercase text-emerald-400 font-bold">Pillar 4</div>
              <div className="text-base font-black uppercase text-white mt-1">Ops and AI Fleet</div>
              <p className="text-xs text-zinc-400 mt-1">SOP wikis, payroll, task boards, Zapier workflows, and 24/7 AI agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Logo Ticker */}
      <LogoTicker />

      {/* Sectors We Launch */}
      <SectorsSection />

      {/* Launch Timeline */}
      <LaunchTimeline />

      {/* Services Grid */}
      <section className="section-padding border-b border-zinc-200 bg-white">
        <div className="container-custom">
          <SectionLabel>The Complete Business Modules</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight">
              Every Department <br /> <span className="text-emerald-700">Ready To Generate Cash</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-base max-w-md">
              We eliminate every technical, operational, and administrative bottleneck so your company operates as an integrated commercial machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Brand, Domain, and SSL", icon: <ShieldCheck />, desc: "Complete visual identity, domain registration, SSL certificates, and Google Search Console indexing.", link: "/services/website-development" },
              { title: "High Speed Digital Storefront", icon: <Globe />, desc: "React and Next.js digital architecture built for instant global loading and maximum visitor conversion.", link: "/services/website-development" },
              { title: "CRM and 60 Second Sales Pipelines", icon: <BarChart3 />, desc: "Automated lead intake, deal stages, two way calendar sync, and instant SMS routing.", link: "/services/crm-sales" },
              { title: "Finance, Billing, and Invoicing", icon: <CreditCard />, desc: "Stripe payment checkouts, recurring billing, automated quotes, and accounting sync.", link: "/services/operations-hr" },
              { title: "Operations, SOPs, and Payroll", icon: <Settings />, desc: "Centralized ClickUp or Notion boards, contractor onboarding, contracts, and Deel or Gusto payroll.", link: "/services/operations-hr" },
              { title: "Autonomous AI Agents and Automation", icon: <Bot />, desc: "Trained 24/7 AI agents for lead qualification, customer inquiries, and Make or Zapier workflows.", link: "/services/ai-agents" }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="border border-zinc-200 p-6 sm:p-8 bg-zinc-50/50 hover:bg-white hover:border-emerald-600 hover:shadow-lg transition-all group block">
                <div className="text-emerald-700 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 mb-2">{s.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-emerald-700 mono text-xs uppercase tracking-wider font-bold">
                  Explore Full Module <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button asChild variant="outline" className="w-full sm:w-auto border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-[11px] sm:text-xs uppercase font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-none">
              <Link to="/software-stack">Browse Our 100+ Integrated Software Stack <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-800 hover:bg-zinc-100 mono text-[11px] sm:text-xs uppercase font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-none">
              <Link to="/solo-services">Browse Individual Solo Services <Layers size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section id="ecosystem" className="section-padding border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-emerald-50/20 to-zinc-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <SectionLabel>The Calpir Complete Business Engine</SectionLabel>
              <h2 className="text-2xl sm:text-5xl md:text-6xl text-zinc-950 font-black leading-tight tracking-tight">
                Everything Connected. <br />
                <span className="text-emerald-700">Everything Running Together.</span>
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Most founders spend months stitching together 8 disconnected software accounts. We deploy one seamless business engine where website traffic converts into CRM leads, leads trigger automated billing, contracts are signed automatically, and AI agents handle 24/7 customer conversations.
              </p>
              
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <div className="flex items-center gap-2.5 mono text-[11px] sm:text-xs uppercase tracking-wider font-bold text-zinc-800">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  Real Time Data Flow Across Legal, Ops, CRM, Finance, and AI
                </div>
                <div className="mono text-[11px] sm:text-xs text-emerald-800 font-bold uppercase tracking-wider border-l-2 border-emerald-600 pl-3 sm:pl-4 py-1.5 bg-emerald-50/60">
                  One complete operational foundation. Zero gaps. Everything ready on day one.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center items-center py-2 px-2 overflow-visible">
              <ConnectedEcosystem />
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      <FAQ />

      {/* Contact CTA */}
      <section id="contact" className="section-padding border-t border-zinc-200 bg-emerald-50/60">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 font-black uppercase tracking-tight text-zinc-950">
            Ready to <br /> Launch Your Full Business?
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-600 mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30 minute consultation with Maria. We will map out your complete company setup from legal and brand to website, CRM, and AI operations.
          </p>
          <div className="max-w-md mx-auto">
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-10 py-5 sm:py-7 rounded-none font-black text-xs sm:text-lg uppercase tracking-tight transition-all btn-hover shadow-md text-center whitespace-normal leading-tight">
              <Link to="/contact">Book Your Free Call with Maria</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;