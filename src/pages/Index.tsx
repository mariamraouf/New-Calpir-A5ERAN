"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Megaphone, Settings, Bot, Zap, CheckCircle2, Star, Mail, Code } from 'lucide-react';
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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-block border border-[#064e3b] px-4 py-1 mb-8 mono text-[0.7rem] uppercase tracking-widest text-[#064e3b]">
              Bristol Based AI Automation & Custom App Development
            </div>
            <h1 className="text-6xl md:text-[9rem] leading-[0.8] mb-12 font-black uppercase tracking-tighter">
              Launch Your <br /> Business. <br /> <span className="text-[#064e3b]">In 7 Days.</span>
            </h1>
            <p className="text-xl md:text-2xl mono text-white/60 leading-tight max-w-[900px] mx-auto mb-16">
              Complete business infrastructure deployed in record time. Website, CRM, Operations, and AI Agents integrated into one powerful system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
                <Link to="/contact">Book Strategy Call with Maria</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black btn-hover">
                <Link to="/assessment">Take the Free Assessment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>The Modules</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website & Branding", icon: <Globe />, desc: "High conversion digital foundation built for speed and scale.", link: "/services/website-development" },
              { title: "CRM & Sales Systems", icon: <BarChart3 />, desc: "Automated lead capture and pipeline management.", link: "/services/crm-sales" },
              { title: "AI Agent Development", icon: <Bot />, desc: "Autonomous agents that handle support and sales 24/7.", link: "/services/ai-agents" },
              { title: "Workflow Automation", icon: <Zap />, desc: "Eliminate manual tasks with intelligent integrations.", link: "/services/ai-automation" },
              { title: "Custom Apps & Agents", icon: <Code />, desc: "We turn your complex logic into high performance software.", link: "/services/custom-apps" },
              { title: "Operations & HR", icon: <Settings />, desc: "Documented processes and systems for team growth.", link: "/services/operations-hr" }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="border border-white/10 p-12 bg-white/5 card-hover group">
                <div className="text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl mb-4">{s.title}</h3>
                <p className="text-white/40 mono text-xs leading-relaxed mb-8">{s.desc}</p>
                <div className="flex items-center gap-2 text-[#064e3b] mono text-[0.6rem] uppercase tracking-widest font-bold">
                  Explore Module <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section id="ecosystem" className="section-padding border-b border-white/10 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <SectionLabel>The Calpir System</SectionLabel>
              <h2 className="text-5xl md:text-7xl mb-8">Everything Connected. <br /> Everything Working Together.</h2>
              <p className="text-xl mono text-white/40 leading-relaxed mb-12">
                Most businesses use 6 8 disconnected tools. We build one integrated system where your website feeds your CRM, your CRM triggers automations, and your AI agents handle the rest.
              </p>
              <div className="mono text-sm text-[#064e3b] uppercase tracking-widest">
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
      <section id="contact" className="section-padding border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-8xl mb-8 font-black uppercase tracking-tighter">Ready to <br /> Launch Smarter?</h2>
          <p className="text-xl mono text-white/40 mb-16">Book a free 30 minute consultation with Maria. We'll map out exactly what your business needs.</p>
          <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all btn-hover">
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