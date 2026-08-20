"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionLabel from '@/components/ui/SectionLabel';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      badge: "Launch in 7 days",
      desc: "Perfect for founders who need the essential infrastructure to get online, capture leads, and start selling immediately.",
      features: [
        "Professional website (up to 3 pages)",
        "Basic CRM setup with contact management",
        "Business email system setup",
        "Accounting system setup",
        "HR basics (onboarding & compliance)",
        "Brand identity starter kit",
        "Google Analytics setup",
        "Social media profiles created",
        "1 AI chatbot (FAQ support)",
        "2 weeks post-launch support"
      ]
    },
    {
      name: "Growth",
      price: "$3,499",
      badge: "Most Popular // Launch in 14 days",
      featured: true,
      desc: "The all-in-one package for ambitious startups and businesses scaling fast with automation.",
      features: [
        "Everything in Starter, plus:",
        "Website up to 6 pages (advanced design)",
        "Advanced CRM (pipeline and lead scoring)",
        "Email and phone system setup",
        "Project management tools setup",
        "5 custom automated workflows",
        "SOP creation for core processes",
        "Full brand identity package",
        "Marketing automation setup",
        "AI agent (support and lead qualification)",
        "30 days post-launch support"
      ]
    },
    {
      name: "Ultimate",
      price: "$6,999",
      badge: "Launch in 28 days",
      desc: "Complete enterprise business infrastructure with unlimited AI integrations. Built to scale without limits.",
      features: [
        "Everything in Growth, plus:",
        "Website up to 10 pages (custom functionality)",
        "Unlimited custom automations",
        "Payroll system setup",
        "Full HR system with employee handbook",
        "Full AI agent ecosystem",
        "12-month AI strategy roadmap",
        "Team training sessions (2 hours)",
        "90 days optimization support",
        "Priority ongoing technical advisory"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-white/15">
        <div className="container-custom text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
            Launch <br /> <span className="text-emerald-400">Packages.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 max-w-[850px] mx-auto leading-relaxed">
            Complete business launch packages that save you 40% to 60% compared to hiring separate agencies. Start with what you need, upgrade when you are ready.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
            {packages.map((p, i) => (
              <div key={i} className={cn(
                "bg-[#0d0d0d] p-8 md:p-10 border flex flex-col relative",
                p.featured ? "border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.2)] scale-[1.02] z-10" : "border-white/15"
              )}>
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 mono text-xs uppercase tracking-widest font-black">
                    Most Popular
                  </div>
                )}
                <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3">{p.badge}</div>
                <h3 className="text-3xl font-black text-white mb-2">{p.name}</h3>
                <div className="text-5xl font-black text-white mb-6">{p.price}</div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-8">{p.desc}</p>
                <div className="space-y-3 mb-10 flex-grow border-t border-white/10 pt-6">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                      <span className="mono text-xs uppercase tracking-wider text-zinc-200 leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className={cn(
                  "w-full py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover",
                  p.featured ? "bg-emerald-500 hover:bg-emerald-600 text-black" : "bg-white text-black hover:bg-emerald-500 hover:text-black"
                )}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-24">
            <SectionLabel>Add Ons</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">Need Something Specific?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "SEO Optimization", price: "$199", desc: "Comprehensive technical audit & keyword structure" },
                { name: "Design & Branding", price: "$499", desc: "Full visual identity, typography & brand guidelines" },
                { name: "Social Media (10 posts)", price: "$189", desc: "Ready-to-publish branded content templates" },
                { name: "Email & Phone Setup", price: "$299", desc: "Google Workspace & VOIP routing configured" }
              ].map((add, i) => (
                <div key={i} className="border border-white/15 p-6 bg-white/[0.03]">
                  <div className="mono text-xs uppercase tracking-wider text-zinc-300 font-bold mb-2">{add.name}</div>
                  <div className="text-3xl font-black text-emerald-400 mb-2">{add.price}</div>
                  <p className="text-xs text-zinc-400">{add.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border border-white/15 bg-white/[0.03] overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.05]">
                  <th className="p-6 mono text-xs uppercase tracking-wider text-emerald-400 font-bold">Feature</th>
                  <th className="p-6 mono text-xs uppercase tracking-wider text-zinc-200 font-bold">Starter</th>
                  <th className="p-6 mono text-xs uppercase tracking-wider text-emerald-400 font-bold">Growth</th>
                  <th className="p-6 mono text-xs uppercase tracking-wider text-zinc-200 font-bold">Ultimate</th>
                </tr>
              </thead>
              <tbody className="mono text-sm">
                {[
                  { f: "Website Pages", s: "3 Pages", g: "6 Pages", u: "10 Pages" },
                  { f: "CRM Setup", s: "Basic", g: "Advanced Pipeline", u: "Full Custom" },
                  { f: "Email & Phone Systems", s: "Email System", g: "Email & VOIP Phone", u: "Full Communications Suite" },
                  { f: "AI Agents", s: "1 FAQ Bot", g: "Support & Lead Qual", u: "Full Autonomous Fleet" },
                  { f: "Automations", s: "Baseline Sync", g: "5 Workflows", u: "Unlimited Scenarios" },
                  { f: "Payroll Setup", s: "Optional Add-on", g: "Optional Add-on", u: "Included" },
                  { f: "Support Period", s: "2 Weeks", g: "30 Days", u: "90 Days" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10 last:border-0 hover:bg-white/[0.02]">
                    <td className="p-6 font-bold uppercase text-white">{row.f}</td>
                    <td className="p-6 text-zinc-300">{row.s}</td>
                    <td className="p-6 text-emerald-300 font-bold">{row.g}</td>
                    <td className="p-6 text-zinc-300">{row.u}</td>
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