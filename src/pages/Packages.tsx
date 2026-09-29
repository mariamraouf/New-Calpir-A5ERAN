"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Sparkles, Rocket, BarChart3, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionLabel from '@/components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import FeatureModal from '@/components/ui/FeatureModal';
import MetaSEO from '@/components/seo/MetaSEO';
import MonthlyPlans from '@/components/plans/MonthlyPlans';
import BuyButton from '@/components/plans/BuyButton';
import { ONE_TIME_PACKAGES, formatPrice, type Currency } from '@/data/plans';

const Packages = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Currency>('usd');

  // The one-time cards carry their own copy; price, id and timeline come from
  // src/data/plans.ts so the number on screen is the number Stripe charges.
  const buildFor = (name: string) => ONE_TIME_PACKAGES.find((b) => b.name === name);

  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      badge: "Launch in 7 days",
      icon: Rocket,
      bestFor: "Pre-launch founders & solo entrepreneurs.",
      desc: "Perfect for pre-launch founders who need high-converting infrastructure to go live, rank on Google, and start collecting cash immediately.",
      features: [
        { label: "High-speed website (up to 3 pages)", key: "website_architecture" },
        { label: "Custom Domain setup + SSL Security Certificate", key: "domain_ssl" },
        { label: "Google Search Console indexing & GBP profile", key: "gbp_seo" },
        { label: "Brand identity kit & custom color palettes", key: "brand_palette" },
        { label: "1 Niche-Targeted Social Profile (expert-picked)", key: "social_niche" },
        { label: "Basic CRM setup with contact capture", key: "crm_pipelines" },
        { label: "Business email system (Google Workspace / MS 365)", key: "email_phone_setup" },
        { label: "Accounting & invoicing system setup", key: "accounting_ops" },
        { label: "HR basics (onboarding checklist & contracts)", key: undefined },
        { label: "1 AI chatbot (FAQ support & lead capture)", key: "ai_agents" },
        { label: "2 weeks of post-launch squad support", key: "support_squad" }
      ]
    },
    {
      name: "Growth",
      price: "$3,499",
      badge: "Most Popular // Launch in 14 days",
      icon: BarChart3,
      bestFor: "Scaling businesses & ambitious startups.",
      featured: true,
      desc: "The all-in-one powerhouse package for ambitious startups and businesses scaling fast with automation and multi-channel reach.",
      features: [
        { label: "Everything in Starter, plus:", key: undefined },
        { label: "Website up to 6 pages (advanced CRO)", key: "website_architecture" },
        { label: "Multi-channel social media profiles (3 platforms)", key: "social_niche" },
        { label: "Advanced CRM (pipeline automation & lead scoring)", key: "crm_pipelines" },
        { label: "Email & VOIP phone system integration", key: "email_phone_setup" },
        { label: "Project management workspace (ClickUp / Notion)", key: undefined },
        { label: "5 custom automated workflows (Make.com / Zapier)", key: "workflow_automations" },
        { label: "Standard Operating Procedures (SOP) library", key: undefined },
        { label: "AI agent (24/7 lead qualification & booking)", key: "ai_agents" },
        { label: "30 days of post-launch squad support & tuning", key: "support_squad" }
      ]
    },
    {
      name: "Ultimate",
      price: "$6,999",
      badge: "Launch in 28 days",
      icon: Cpu,
      bestFor: "Enterprises & high-volume operations.",
      desc: "Complete enterprise-grade infrastructure with autonomous AI fleets, bespoke web software, and unlimited scaling pipelines.",
      features: [
        { label: "Everything in Growth, plus:", key: undefined },
        { label: "Website up to 10 pages (custom user portal / web app)", key: "website_architecture" },
        { label: "Full multi-channel social & video creative suite", key: "video_creative" },
        { label: "Unlimited custom automations & webhook pipelines", key: "workflow_automations" },
        { label: "Full HR & international payroll system (Deel / Gusto)", key: undefined },
        { label: "Autonomous AI agent ecosystem with live CRM sync", key: "ai_agents" },
        { label: "12-month technical AI strategy roadmap", key: undefined },
        { label: "Dedicated team training workshops (live sessions)", key: undefined },
        { label: "90 days priority technical squad advisory", key: "support_squad" }
      ]
    }
  ];

  const comparisonRows = [
    { feature: "Launch Timeline", starter: "7 Days", growth: "14 Days", ultimate: "28 Days" },
    { feature: "High-Speed Website Architecture", starter: "3 Pages", growth: "6 Pages", ultimate: "10 Pages + Custom App", modal: "website_architecture" },
    { feature: "Domain Purchasing Assistance & DNS", starter: true, growth: true, ultimate: true, modal: "domain_ssl" },
    { feature: "256-Bit SSL HTTPS Security Certificate", starter: true, growth: true, ultimate: true, modal: "domain_ssl" },
    { feature: "Google Search Console Indexing & XML Sitemaps", starter: true, growth: true, ultimate: true, modal: "gbp_seo" },
    { feature: "Google Business Profile (GBP) Optimization", starter: true, growth: true, ultimate: true, modal: "gbp_seo" },
    { feature: "Google Analytics 4 (GA4) Conversion Goals", starter: true, growth: true, ultimate: true, modal: "gbp_seo" },
    { feature: "Brand Identity, Custom Palettes & Typography", starter: true, growth: true, ultimate: true, modal: "brand_palette" },
    { feature: "Social Media Platform Setup", starter: "1 Niche Picked", growth: "3 Platforms", ultimate: "Full Fleet + Video", modal: "social_niche" },
    { feature: "CRM & Sales Pipeline Setup", starter: "Basic Contacts", growth: "Advanced Automation", ultimate: "Full Custom Multi-Stage", modal: "crm_pipelines" },
    { feature: "Automated Lead Routing & SMS Alerts", starter: true, growth: true, ultimate: true, modal: "crm_pipelines" },
    { feature: "Automated Workflows (Make / Zapier)", starter: "Baseline Sync", growth: "5 Workflows", ultimate: "Unlimited Workflows", modal: "workflow_automations" },
    { feature: "Autonomous AI Agent Support & Booking", starter: "1 FAQ Bot", growth: "Support & Lead Qual", ultimate: "Autonomous AI Fleet", modal: "ai_agents" },
    { feature: "Branded Business Email System", starter: true, growth: true, ultimate: true, modal: "email_phone_setup" },
    { feature: "VOIP Phone Routing & Call Menus", starter: false, growth: true, ultimate: true, modal: "email_phone_setup" },
    { feature: "Accounting & Invoicing System", starter: true, growth: true, ultimate: true, modal: "accounting_ops" },
    { feature: "Project Management Workspace (ClickUp/Notion)", starter: false, growth: true, ultimate: true },
    { feature: "Standard Operating Procedures (SOPs)", starter: "Basic Guidelines", growth: "Full SOP Library", ultimate: "Enterprise Wiki" },
    { feature: "International Payroll & HR System (Deel/Gusto)", starter: false, growth: false, ultimate: true },
    { feature: "Video Editing & Content Creative Suite", starter: false, growth: "Optional Add-on", ultimate: "Included Suite", modal: "video_creative" },
    { feature: "Post-Launch Dedicated Squad Support", starter: "2 Weeks", growth: "30 Days", ultimate: "90 Days Priority", modal: "support_squad" }
  ];

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold mono text-xs uppercase tracking-wider rounded-sm shadow-sm">
            <CheckCircle2 size={15} className="shrink-0 text-emerald-600" /> Included
          </span>
        );
      }
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-300 text-rose-700 font-bold mono text-xs uppercase tracking-wider rounded-sm">
          <XCircle size={15} className="shrink-0 text-rose-600" /> Not Included
        </span>
      );
    }
    return <span className="mono text-xs font-bold text-zinc-900 uppercase">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Packages & Monthly Plans | Calpir"
        description="Monthly marketing, SEO, operations, sales and HR plans from $449 a month, plus one-time build packages from $1,499. Every price published, pay online."
        path="/packages"
      />
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom text-center">
          <SectionLabel>Every price published</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-bold tracking-tight text-zinc-950">
            Pay monthly, <br /> or <span className="text-emerald-700">pay once.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-[850px] mx-auto leading-relaxed">
            Monthly plans for the work that repeats: marketing and search, your systems, outbound, and the HR paperwork. One time packages for the work that finishes. Buy either on this page, in your own currency.
          </p>
          <p className="mono text-xs text-emerald-800 font-bold mt-5 uppercase tracking-widest">
            You pay for what you see. The number on the card is the number.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-zinc-200">
        <div className="container-custom">
          <div className="text-center mb-4">
            <SectionLabel>Monthly plans</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-5">
              The work that <span className="text-emerald-700">repeats.</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-[760px] mx-auto leading-relaxed">
              Four plans. Buy one, buy two, or take all four together and pay less than the sum. Cancel any month, because a retainer you cannot leave is not a service, it is a trap.
            </p>
          </div>

          <MonthlyPlans currency={currency} onCurrencyChange={setCurrency} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* One time build packages */}
          <div className="text-center mb-14">
            <SectionLabel>One time packages</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-5">
              The work that <span className="text-emerald-700">finishes.</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-[760px] mx-auto leading-relaxed">
              A single payment, a finished thing handed over. Click any feature to see exactly what is built. Add a monthly plan afterwards if you want it kept running, or do not.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
            {packages.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className={cn(
                  "bg-white p-8 md:p-10 border flex flex-col relative transition-all duration-300 shadow-sm",
                  p.featured ? "border-emerald-600 shadow-xl scale-[1.02] z-10 bg-emerald-50/20 ring-2 ring-emerald-600" : "border-zinc-200 hover:border-emerald-600 hover:shadow-md"
                )}>
                  {p.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-md">
                      <Sparkles size={13} /> Most Popular Choice
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold">{p.badge}</div>
                    <div className="p-2.5 bg-emerald-100/70 border border-emerald-200 text-emerald-700">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-950 mb-2">{p.name}</h3>
                  <div className="price-figure text-5xl font-bold text-zinc-950 mb-1">
                    {(() => { const b = buildFor(p.name); return b ? formatPrice(b.price, currency) : p.price; })()}
                  </div>
                  <div className="mono text-[11px] uppercase tracking-widest text-zinc-400 font-bold mb-3">
                    One time payment. Nothing recurring.
                  </div>
                  <div className="mono text-xs uppercase font-bold text-zinc-600 mb-6">Best for: <span className="text-emerald-800">{p.bestFor}</span></div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">{p.desc}</p>
                  
                  <div className="space-y-3 mb-10 flex-grow border-t border-zinc-200 pt-6">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex gap-3 items-start group/item">
                        <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                        {f.key ? (
                          <button
                            type="button"
                            onClick={() => setActiveModal(f.key || null)}
                            className="mono text-xs uppercase tracking-wider text-zinc-800 text-left font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                          >
                            <span className="underline decoration-dotted decoration-emerald-600/60 underline-offset-4">{f.label}</span>
                            <HelpCircle size={13} className="text-emerald-600 shrink-0 opacity-70 group-item:opacity-100" />
                          </button>
                        ) : (
                          <span className="mono text-xs uppercase tracking-wider text-zinc-800 leading-snug font-semibold">{f.label}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {(() => {
                    const b = buildFor(p.name);
                    return b ? (
                      <BuyButton
                        planId={b.id}
                        currency={currency}
                        label={`Buy ${p.name}`}
                        variant={p.featured ? 'emerald' : 'dark'}
                        footnote={b.timeline}
                      />
                    ) : (
                      <Button asChild className="w-full py-7 rounded-none font-bold text-lg tracking-tight bg-zinc-900 text-white">
                        <Link to="/contact">Get started with {p.name}</Link>
                      </Button>
                    );
                  })()}
                </div>
              );
            })}
          </div>

          {/* Detailed Color-Coded Comparison Table */}
          <div className="mb-24">
            <SectionLabel>In-Depth Breakdown</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight">
                  Detailed Feature <br /> <span className="text-emerald-700">Comparison.</span>
                </h2>
                <p className="text-zinc-600 text-sm mt-2 max-w-[500px]">
                  Click on any feature name with an info icon to see our detailed execution methodology.
                </p>
              </div>
              <div className="flex items-center gap-4 mono text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full inline-block" />
                  <span className="text-emerald-800 font-bold">Included</span>
                </div>
                <div className="flex items-center gap-4 mono text-xs">
                  <span className="w-3 h-3 bg-rose-600 rounded-full inline-block" />
                  <span className="text-rose-700 font-bold">Not Included</span>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white overflow-x-auto shadow-md">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50">
                    <th className="p-5 mono text-xs uppercase tracking-wider text-emerald-800 font-bold w-2/5">
                      System Module & Capability
                    </th>
                    <th className="p-5 mono text-xs uppercase tracking-wider text-zinc-900 font-bold w-1/5">
                      Starter ($1,499)
                    </th>
                    <th className="p-5 mono text-xs uppercase tracking-wider text-emerald-800 font-bold w-1/5 bg-emerald-50/50">
                      Growth ($3,499)
                    </th>
                    <th className="p-5 mono text-xs uppercase tracking-wider text-zinc-900 font-bold w-1/5">
                      Ultimate ($6,999)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="p-5 font-bold uppercase text-zinc-950 text-xs mono">
                        {row.modal ? (
                          <button
                            type="button"
                            onClick={() => setActiveModal(row.modal || null)}
                            className="text-left hover:text-emerald-700 flex items-center gap-2 group/btn"
                          >
                            <span className="underline decoration-dotted decoration-emerald-600/60 underline-offset-4">{row.feature}</span>
                            <HelpCircle size={13} className="text-emerald-600 shrink-0 opacity-70 group-hover/btn:opacity-100" />
                          </button>
                        ) : (
                          <span>{row.feature}</span>
                        )}
                      </td>
                      <td className="p-5">{renderCell(row.starter)}</td>
                      <td className="p-5 bg-emerald-50/30">{renderCell(row.growth)}</td>
                      <td className="p-5">{renderCell(row.ultimate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add-ons Grid */}
          <div>
            <SectionLabel>À La Carte Add-Ons</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-950">Need something specific?</h2>
              <Button asChild variant="outline" className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-xs uppercase font-bold">
                <Link to="/solo-services">View All Solo Services <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Domain & SSL Setup", price: "$149", desc: "Acquisition, DNS, and auto-renewing 256-bit SSL certificates", key: "domain_ssl" },
                { name: "Google GBP & Indexing", price: "$199", desc: "Instant Search Console indexing & 5-star map optimization", key: "gbp_seo" },
                { name: "Brand Identity & Palettes", price: "$399", desc: "Full visual identity, SVG logo suite & color psychology", key: "brand_palette" },
                { name: "Short-Form Video Reels (5x)", price: "$299", desc: "Kinetic subtitles, sound design & viral editing for TikTok/IG", key: "video_creative" }
              ].map((add, i) => (
                <div key={i} className="border border-zinc-200 p-6 bg-zinc-50/50 flex flex-col justify-between hover:border-emerald-600 hover:shadow-md transition-all">
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-700 font-bold mb-2">{add.name}</div>
                    <div className="text-3xl font-bold text-emerald-700 mb-2">{add.price}</div>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">{add.desc}</p>
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setActiveModal(add.key)}
                    className="w-full border-zinc-300 text-zinc-800 hover:bg-white hover:border-emerald-600 mono text-[10px] uppercase font-bold py-3"
                  >
                    Inspect Add-on
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureModal featureKey={activeModal} onClose={() => setActiveModal(null)} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Packages;