"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Zap, Users, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SystemStatus from '@/components/visuals/SystemStatus';

const About = () => {
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
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-white/15">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Mission</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-12 font-black uppercase tracking-tight text-white">
              Built by <br /> <span className="text-emerald-400">Founders</span> <br /> for Founders.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <p className="text-xl md:text-3xl text-zinc-200 leading-snug">
                We have been in your shoes. That is why we built the system we wished existed when we were starting out.
              </p>
              <div className="max-w-[420px] w-full ml-auto">
                <SystemStatus />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-emerald-500 text-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Businesses Launched", val: "1,000+" },
              { label: "Fastest Launch", val: "7 Days" },
              { label: "Avg. Savings", val: "40% to 60%" },
              { label: "AI Systems Running", val: "24/7" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-6xl font-black mb-1 text-black">{s.val}</div>
                <div className="mono text-xs uppercase tracking-widest font-black text-black/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding border-b border-white/15">
        <div className="container-custom max-w-[900px]">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">The Problem We Solve</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Starting a business should be exciting. Instead, most founders spend their first months drowning in decisions: which website builder, which CRM, which payment processor, which HR tool. By the time everything is set up, they have burned through months and thousands of dollars, and half their tools do not even talk to each other.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mt-4">
                We built Calpir to fix that. One team, one package, one integrated system launched in days, not months. We handle the website, CRM, operations, branding, marketing, and now AI automations and intelligent agents. Everything connected, everything working together from day one.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Why AI Changes Everything</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                In 2026, launching a business without AI is like launching one without a website in 2010: technically possible, but a massive disadvantage. AI agents can handle your customer support at 2 AM. Workflow automation can eliminate 20+ hours of manual work per week. AI powered lead qualification can double your sales team efficiency.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mt-4">
                Most founders know they should be using AI, but they do not know where to start. That is where we come in. We do not just set up your business: we set it up with AI baked into every layer.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">How We Work</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                We speak plainly, set honest expectations, and deliver exactly what we promise. No inflated timelines, no surprise fees, no excuses. Every engagement starts with a free 30 minute consultation where we listen, ask the right questions, and map out what your business actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-b border-white/15 bg-white/[0.02]">
        <div className="container-custom">
          <SectionLabel>Our Values</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Speed Over Perfection", icon: <Zap />, desc: "In business, speed is the ultimate competitive advantage. We build fast so you can launch fast." },
              { title: "Integration Over Isolation", icon: <Users />, desc: "Disconnected tools are a liability. We build unified systems where everything talks to everything." },
              { title: "AI First Thinking", icon: <Target />, desc: "We do not just add AI as an afterthought. We build systems with AI baked into the core architecture." },
              { title: "Radical Transparency", icon: <Shield />, desc: "No hidden fees, no technical jargon, no fluff. Just clear communication and results." }
            ].map((v, i) => (
              <div key={i} className="border border-white/15 p-8 bg-[#0e0e0e] card-hover">
                <div className="text-emerald-400 mb-6">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-xl font-black uppercase text-white mb-3">{v.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-7xl mb-8 font-black uppercase tracking-tight text-white">Let's Build <br /> Something Together.</h2>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight transition-all btn-hover">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;