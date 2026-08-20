"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import ROICalculator from '@/components/home/ROICalculator';
import FAQ from '@/components/home/FAQ';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-28 px-6 border-b border-white/15 relative overflow-hidden">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-block border border-emerald-500/50 bg-emerald-950/40 px-5 py-2 mb-8 mono text-xs uppercase tracking-widest text-emerald-300 font-bold">
              Bristol Based AI Automation & Custom App Development
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
              Launch Your <br /> Business. <br /> <span className="text-emerald-400">In 7 Days.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 leading-relaxed max-w-[850px] mx-auto mb-12">
              Complete business infrastructure deployed in record time. Website, CRM, Operations, and AI Agents integrated into one powerful system.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover">
                <Link to="/contact">Book Strategy Call with Maria</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover">
                <Link to="/assessment">Take the Free Assessment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding border-b border-white/15">
        <div className="container-custom">
          <SectionLabel>The Modules</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website & Branding", icon: <Globe />, desc: "High conversion digital foundation built for speed, SEO, and massive scale.", link: "/services/website-development" },
              { title: "CRM & Sales Systems", icon: <BarChart3 />, desc: "Automated lead capture, instant pipeline routing, and closing workflows.", link: "/services/crm-sales" },
              { title: "AI Agent Development", icon: <Bot />, desc: "Autonomous intelligent agents that handle support, inquiries, and sales 24/7.", link: "/services/ai-agents" },
              { title: "Workflow Automation", icon: <Zap />, desc: "Eliminate repetitive manual tasks with seamless, self-running automations.", link: "/services/ai-automation" },
              { title: "Custom Apps & Agents", icon: <Code />, desc: "Turn your complex business logic into high-performance software applications.", link: "/services/custom-apps" },
              { title: "Operations & HR", icon: <Settings />, desc: "Documented processes, onboarding SOPs, and bulletproof infrastructure.", link: "/services/operations-hr" }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="border border-white/15 p-10 bg-white/[0.03] card-hover group block">
                <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center gap-2 text-emerald-400 mono text-xs uppercase tracking-wider font-bold">
                  Explore Module <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section id="ecosystem" className="section-padding border-b border-white/15 bg-[#080808]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>The Calpir System</SectionLabel>
              <h2 className="text-4xl md:text-6xl mb-6 text-white font-black">
                Everything Connected. <br /> Everything Working Together.
              </h2>
              <p className="text-lg text-zinc-200 leading-relaxed mb-8">
                Most businesses struggle with 6 to 8 disconnected tools. We build one integrated ecosystem where your website feeds your CRM, your CRM triggers automations, and your AI agents handle client communication 24/7.
              </p>
              <div className="mono text-sm text-emerald-400 font-bold uppercase tracking-wider border-l-2 border-emerald-400 pl-4">
                One system. Zero gaps. Every tool talks to every other tool.
              </div>
            </div>
            <div className="relative">
              <ConnectedEcosystem className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      <FAQ />

      {/* Contact CTA */}
      <section id="contact" className="section-padding border-t border-white/15">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-7xl mb-6 font-black uppercase tracking-tight text-white">
            Ready to <br /> Launch Smarter?
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Book a free 30 minute consultation with Maria. We'll map out exactly what your business needs to launch and scale.
          </p>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight transition-all btn-hover">
            <Link to="/contact">Book Your Free Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;