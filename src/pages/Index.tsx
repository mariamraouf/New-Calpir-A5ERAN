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
import MetaSEO from '@/components/seo/MetaSEO';
import LogoTicker from '@/components/home/LogoTicker';
import LaunchTimeline from '@/components/home/LaunchTimeline';
import VideoBackground from '@/components/ui/VideoBackground';

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
        title="Calpir | All-in-One Business Launch & AI Automation"
        description="Calpir deploys your entire business infrastructure — website, CRM, operations and AI agents — in 7-28 days."
        path="/"
      />
      <Navbar />
      
      {/* Hero Section */}
      <VideoBackground 
        src="https://videos.pexels.com/video-files/4782135/4782135-hd_1920_1080_25fps.mp4"
        overlayClassName="bg-white/80 backdrop-blur-sm"
      >
        <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative">
          <div className="container-custom text-center">
            <motion.div {...reveal}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-emerald-300 bg-emerald-50 px-3 sm:px-4 py-1.5 mb-5 sm:mb-7 mono text-[10px] sm:text-xs uppercase tracking-widest text-emerald-800 font-bold shadow-sm rounded-none">
                <Sparkles size={13} className="text-emerald-600 shrink-0" /> Bristol Based Business Infrastructure & AI Squad
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] sm:leading-[0.96] mb-5 sm:mb-8 font-black uppercase tracking-tight text-zinc-950 max-w-5xl mx-auto">
                Launch Your Business <br className="hidden sm:inline" />
                <span className="text-emerald-700">In 7 Days</span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
                We genuinely love building businesses and watching founders succeed. We set up your entire digital nervous system: Website, Domain and SSL, CRM, Google Indexing, and Autonomous AI Agents deployed in days.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xl mx-auto px-2">
                <Button asChild className="w-full sm:w-auto btn-attention px-6 sm:px-9 py-5 sm:py-7 rounded-none font-black text-xs sm:text-base uppercase tracking-tight btn-hover shadow-lg">
                  <Link to="/contact">Book Free Consultation Call</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-900 hover:bg-zinc-100 px-6 sm:px-9 py-5 sm:py-7 rounded-none font-black text-xs sm:text-base uppercase tracking-tight btn-hover">
                  <Link to="/packages">Explore All Packages (7 to 28 Days)</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 mt-8 sm:mt-12 pt-5 sm:pt-8 border-t border-zinc-200 mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-700 font-bold">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> 100% Code and Asset Ownership
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Sub 1.5s Global Load Speed
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Dedicated Post-Launch Squad
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </VideoBackground>

      <LogoTicker />
      <SectorsSection />
      <LaunchTimeline />

      <section className="section-padding border-b border-zinc-200 bg-white">
        <div className="container-custom">
          <SectionLabel>The Core Modules</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight">
              Systems Built <br /> <span className="text-emerald-700">To Generate Revenue</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-base max-w-md">
              Every module is designed to eliminate manual bottlenecks and help your business scale effortlessly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Website, Domain and SSL", icon: <Globe />, desc: "Sub-second digital storefront with custom domain acquisition, SSL encryption, and Google Search indexing.", link: "/services/website-development" },
              { title: "CRM and Sales Systems", icon: <BarChart3 />, desc: "Automated lead capture, instant SMS routing, and 60-second response pipelines.", link: "/services/crm-sales" },
              { title: "AI Agent Development", icon: <Bot />, desc: "Autonomous intelligent agents that answer inquiries, qualify leads, and book calls 24/7.", link: "/services/ai-agents" },
              { title: "Workflow Automation", icon: <Zap />, desc: "Eliminate repetitive manual tasks with Make.com and Zapier pipelines that run automatically.", link: "/services/ai-automation" },
              { title: "Custom Apps and Fleets", icon: <Code />, desc: "Turn complex business logic into high-performance web software and AI agent fleets.", link: "/services/custom-apps" },
              { title: "Operations and HR", icon: <Settings />, desc: "Documented SOP wikis, payroll setups, and bulletproof team onboarding systems.", link: "/services/operations-hr" }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="border border-zinc-200 p-6 sm:p-8 bg-zinc-50/50 hover:bg-white hover:border-emerald-600 hover:shadow-lg transition-all group block">
                <div className="text-emerald-700 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 mb-2">{s.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-emerald-700 mono text-xs uppercase tracking-wider font-bold">
                  Explore Module <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button asChild variant="outline" className="w-full sm:w-auto border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-[11px] sm:text-xs uppercase font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-none">
              <Link to="/software-stack">Browse Our 100+ Software Stack <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-800 hover:bg-zinc-100 mono text-[11px] sm:text-xs uppercase font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-none">
              <Link to="/solo-services">Browse À La Carte Solo Services <Layers size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section-padding border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-emerald-50/20 to-zinc-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <SectionLabel>The Calpir Unified Stack</SectionLabel>
              <h2 className="text-2xl sm:text-5xl md:text-6xl text-zinc-950 font-black leading-tight tracking-tight">
                Everything Connected. <br />
                <span className="text-emerald-700">Everything Moving Together.</span>
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Most businesses struggle with 6 to 8 disconnected tools. We build one integrated ecosystem where your website feeds your CRM, your CRM triggers automations, and your AI agents handle client communication 24/7.
              </p>
              
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <div className="flex items-center gap-2.5 mono text-[11px] sm:text-xs uppercase tracking-wider font-bold text-zinc-800">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  Continuous Real-Time Data Flow Between Modules
                </div>
                <div className="mono text-[11px] sm:text-xs text-emerald-800 font-bold uppercase tracking-wider border-l-2 border-emerald-600 pl-3 sm:pl-4 py-1.5 bg-emerald-50/60">
                  One unified nervous system. Zero gaps. Every tool talks to every other tool.
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

      <section id="contact" className="section-padding border-t border-zinc-200 bg-red-50/60">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 font-black uppercase tracking-tight text-zinc-950">
            Ready to <br /> <span className="text-red-600">Launch Smarter?</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-600 mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30 minute consultation with Maria. We will map out exactly what your business needs to launch and scale.
          </p>
          <div className="max-w-md mx-auto">
            <Button asChild className="w-full btn-attention px-6 sm:px-10 py-5 sm:py-7 rounded-none font-black text-xs sm:text-lg uppercase tracking-tight transition-all btn-hover shadow-lg">
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