"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionLabel from '@/components/ui/SectionLabel';

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      badge: "Launch in 7 days",
      desc: "Perfect for founders who need the essentials to get online and start selling.",
      features: [
        "Professional website (up to 3 pages)",
        "Basic CRM setup with contact management",
        "Accounting system setup",
        "HR basics (onboarding, compliance)",
        "Brand identity starter kit",
        "Google Analytics setup",
        "Social media profiles created",
        "Basic email marketing setup",
        "1 AI chatbot (FAQ support)",
        "2 weeks post-launch support"
      ]
    },
    {
      name: "Growth",
      price: "$3,499",
      badge: "Most Popular — 14 days",
      featured: true,
      desc: "The all-in-one package for ambitious startups scaling fast.",
      features: [
        "Everything in Starter, plus:",
        "Website up to 6 pages (advanced design)",
        "Advanced CRM (pipeline & lead scoring)",
        "Project management tools setup",
        "5 automated workflows",
        "SOP creation for core processes",
        "Full brand identity package",
        "Marketing automation setup",
        "AI agent (support + lead qual)",
        "30 days post-launch support"
      ]
    },
    {
      name: "Ultimate",
      price: "$6,999",
      badge: "Launch in 28 days",
      desc: "Complete business infrastructure with unlimited AI. Built to scale.",
      features: [
        "Everything in Growth, plus:",
        "Website up to 10 pages (custom functionality)",
        "Unlimited custom automations",
        "Payroll system setup",
        "Full HR system with handbook",
        "Full AI agent ecosystem",
        "AI strategy roadmap",
        "Team training sessions (2 hours)",
        "90 days optimization support",
        "Priority ongoing advisory"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-12 font-black uppercase tracking-tighter">
            Launch <br /> <span className="text-[#064e3b]">Packages.</span>
          </h1>
          <p className="text-xl md:text-2xl mono text-white/40 max-w-[900px] mx-auto">
            Complete business launch packages that save you 40-60% compared to hiring separate vendors. Start with what you need, upgrade when you're ready.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            {packages.map((p, i) => (
              <div key={i} className={cn(
                "bg-black p-12 border flex flex-col relative",
                p.featured ? "border-[#064e3b] shadow-[0_0_40px_rgba(6,78,59,0.2)] scale-105 z-10" : "border-white/10"
              )}>
                {p.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#064e3b] text-white px-4 py-1 mono text-[0.6rem] uppercase tracking-widest font-bold">Most Popular</div>}
                <div className="mono text-[0.6rem] uppercase tracking-widest text-[#064e3b] mb-4">{p.badge}</div>
                <h3 className="text-4xl mb-2">{p.name}</h3>
                <div className="text-6xl font-black mb-8">{p.price}</div>
                <p className="text-white/40 mono text-xs leading-relaxed mb-12">{p.desc}</p>
                <div className="space-y-4 mb-16 flex-grow">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex gap-3">
                      <CheckCircle2 className="text-[#064e3b] shrink-0" size={16} />
                      <span className="mono text-[0.7rem] uppercase tracking-widest text-white/60">{f}</span>
                    </div>
                  ))}
                </div>
                <Button className={cn(
                  "w-full py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover",
                  p.featured ? "bg-[#064e3b] hover:bg-[#053e2f] text-white" : "bg-white text-black hover:bg-[#064e3b] hover:text-white"
                )}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-32">
            <SectionLabel>Add-Ons</SectionLabel>
            <h2 className="text-4xl mb-12">Need Something Specific?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "SEO Optimization", price: "$199" },
                { name: "Design & Branding", price: "$499" },
                { name: "Social Media (10 posts)", price: "$189" },
                { name: "Email System Setup", price: "$299" }
              ].map((add, i) => (
                <div key={i} className="border border-white/10 p-8 bg-white/5">
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">{add.name}</div>
                  <div className="text-3xl font-black text-[#064e3b]">{add.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border border-white/10 bg-white/5 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">Feature</th>
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">Starter</th>
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">Growth</th>
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">Ultimate</th>
                </tr>
              </thead>
              <tbody className="mono text-sm">
                {[
                  { f: "Website Pages", s: "3", g: "6", u: "10" },
                  { f: "CRM Setup", s: "Basic", g: "Advanced", u: "Custom" },
                  { f: "AI Agents", s: "1 FAQ Bot", g: "Support + Lead Qual", u: "Full Ecosystem" },
                  { f: "Automations", s: "—", g: "5 Workflows", u: "Unlimited" },
                  { f: "Payroll Setup", s: "—", g: "—", u: "✓" },
                  { f: "Support Period", s: "2 Weeks", g: "30 Days", u: "90 Days" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-8 font-bold uppercase">{row.f}</td>
                    <td className="p-8 text-white/40">{row.s}</td>
                    <td className="p-8 text-white/40">{row.g}</td>
                    <td className="p-8 text-white/40">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Packages;