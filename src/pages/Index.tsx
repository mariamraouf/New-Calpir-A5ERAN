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
              We Turn Your <br /> Steak Into <br /> <span className="text-[#064e3b]">Pancakes.</span>
            </h1>
            <p className="text-xl md:text-2xl mono text-white/60 leading-tight max-w-[900px] mx-auto mb-16">
              We build custom applications and autonomous AI agents that transform complex operations into simple, automated workflows. Live in 7 28 days.
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

      {/* Custom App Section */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>Custom Engineering</SectionLabel>
              <h2 className="text-5xl md:text-7xl mb-8">Any App. <br /> Any Agent. <br /> Any Workflow.</h2>
              <p className="text-xl mono text-white/40 leading-relaxed mb-12">
                Our team specializes in turning complex business logic into high performance software. Whether you need a custom SaaS platform, a internal tool, or a fleet of AI agents, we build it fast and we build it right.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Code className="text-[#064e3b]" size={32} />
                  <h4 className="text-xl font-black uppercase">Custom Apps</h4>
                  <p className="mono text-xs text-white/40">Full stack web applications built with React and Next.js.</p>
                </div>
                <div className="space-y-4">
                  <Bot className="text-[#064e3b]" size={32} />
                  <h4 className="text-xl font-black uppercase">AI Agents</h4>
                  <p className="mono text-xs text-white/40">Autonomous agents that handle support, sales, and ops.</p>
                </div>
              </div>
            </div>
            <div className="border border-white/10 p-12 bg-black">
              <div className="mono text-[0.6rem] text-[#064e3b] mb-8 uppercase tracking-widest font-bold">System Architecture // Custom_Build</div>
              <div className="space-y-6">
                {[
                  "Initializing Custom Logic Engine...",
                  "Mapping Operational Workflows...",
                  "Deploying AI Agent Ecosystem...",
                  "Optimizing Data Pipelines...",
                  "Status: Operational"
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#064e3b] rounded-full animate-pulse" />
                    <span className="mono text-sm text-white/60">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Projects Launched", val: "1,000+" },
              { label: "Fastest Setup", val: "7 Days" },
              { label: "Cost Savings vs. DIY", val: "40 60%" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-6xl font-black text-[#064e3b] mb-2">{s.val}</div>
                <div className="mono text-[0.7rem] uppercase tracking-widest text-white/40">{s.label}</div>
              </div>
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