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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Mission</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Built by <br /> <span className="text-[#064e3b]">Founders</span> <br /> for Founders.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <p className="text-2xl md:text-3xl mono text-white/60 leading-tight">
                We've been in your shoes. That's why we built the system we wished existed when we were starting out.
              </p>
              <div className="max-w-[400px] w-full ml-auto">
                <SystemStatus />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-[#064e3b] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Businesses Launched", val: "1,000+" },
              { label: "Fastest Launch", val: "7 Days" },
              { label: "Avg. Savings", val: "40-60%" },
              { label: "AI Systems Running", val: "24/7" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-6xl font-black mb-2">{s.val}</div>
                <div className="mono text-[0.6rem] uppercase tracking-widest opacity-60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding border-b border-white/10">
        <div className="container-custom max-w-[900px]">
          <div className="space-y-20">
            <div>
              <h2 className="text-4xl mb-8">The Problem We Solve</h2>
              <p className="text-xl mono text-white/40 leading-relaxed">
                Starting a business should be exciting. Instead, most founders spend their first months drowning in decisions: which website builder, which CRM, which payment processor, which HR tool. By the time everything is "set up," they've burned through months and thousands of dollars — and half their tools don't even talk to each other.
              </p>
              <p className="text-xl mono text-white/40 leading-relaxed mt-8">
                We built Calpir to fix that. One team, one package, one integrated system — launched in days, not months. We handle the website, CRM, operations, branding, marketing, and now AI automations and intelligent agents. Everything connected, everything working together from day one.
              </p>
            </div>

            <div>
              <h2 className="text-4xl mb-8">Why AI Changes Everything</h2>
              <p className="text-xl mono text-white/40 leading-relaxed">
                In 2026, launching a business without AI is like launching one without a website in 2010 — technically possible, but a massive disadvantage. AI agents can handle your customer support at 2 AM. Workflow automation can eliminate 20+ hours of manual work per week. AI-powered lead qualification can double your sales team's efficiency.
              </p>
              <p className="text-xl mono text-white/40 leading-relaxed mt-8">
                Most founders know they should be using AI, but they don't know where to start. That's where we come in. We don't just set up your business — we set it up with AI baked into every layer.
              </p>
            </div>

            <div>
              <h2 className="text-4xl mb-8">How We Work</h2>
              <p className="text-xl mono text-white/40 leading-relaxed">
                We speak plainly, set honest expectations, and deliver exactly what we promise. No inflated timelines, no surprise fees, no excuses. Every engagement starts with a free 30-minute consultation where we listen, ask the right questions, and map out what your business actually needs.
              </p>
              <p className="text-xl mono text-white/40 leading-relaxed mt-8">
                Once we start, you get a dedicated team: developers building your website, designers crafting your brand, automation specialists wiring up your AI agents and workflows. You stay in the loop with regular updates, but you don't have to manage a thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <SectionLabel>Our Values</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Speed Over Perfection", icon: <Zap />, desc: "In business, speed is the ultimate competitive advantage. We build fast so you can launch fast." },
              { title: "Integration Over Isolation", icon: <Users />, desc: "Disconnected tools are a liability. We build unified systems where everything talks to everything." },
              { title: "AI-First Thinking", icon: <Target />, desc: "We don't just add AI as an afterthought. We build systems with AI baked into the core architecture." },
              { title: "Radical Transparency", icon: <Shield />, desc: "No hidden fees, no technical jargon, no fluff. Just clear communication and results." }
            ].map((v, i) => (
              <div key={i} className="border border-white/10 p-12 bg-black card-hover">
                <div className="text-[#064e3b] mb-8">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl mb-6">{v.title}</h3>
                <p className="text-white/40 mono text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-8xl mb-12 font-black uppercase tracking-tighter">Let's Build <br /> Something Together.</h2>
          <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all btn-hover">
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