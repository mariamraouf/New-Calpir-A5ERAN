"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Sparkles, Rocket, BarChart3, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import PackageCard from '@/components/packages/PackageCard';
import PhotoBand from '@/components/ui/PhotoBand';
import { BUILD_PHOTO } from '@/data/planPhotos';
import SectionLabel from '@/components/ui/SectionLabel';
import { Link, useLocation } from 'react-router-dom';
import FeatureModal from '@/components/ui/FeatureModal';
import MetaSEO from '@/components/seo/MetaSEO';
import BuyButton from '@/components/plans/BuyButton';
import { ONE_TIME_PACKAGES, formatPrice, type Currency } from '@/data/plans';

const Packages = () => {
  const location = useLocation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  /* The homepage cards link straight at a package, e.g. /packages#growth-build.
     React Router does not scroll to a hash on its own. */
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
      return true;
    };
    if (!scroll()) {
      const t = window.setTimeout(scroll, 250);
      return () => window.clearTimeout(t);
    }
  }, [location.hash, location.key]);

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold mono text-xs tracking-wider rounded-sm shadow-sm">
            <CheckCircle2 size={15} className="shrink-0 text-emerald-600" /> Included
          </span>
        );
      }
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-300 text-rose-700 font-bold mono text-xs tracking-wider rounded-sm">
          <XCircle size={15} className="shrink-0 text-rose-600" /> Not Included
        </span>
      );
    }
    return <span className="mono text-xs font-bold text-navy">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Packages | Complete Business Setup from $1,499 | Calpir"
        description="Three fixed scope packages that take a business from idea to running in 7 to 28 days. One payment, every price published, pay online."
        path="/packages"
      />
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom text-center">
          <p className="text-emerald-700 font-semibold mb-5 tracking-wide">Packages</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] mb-6 font-extrabold tracking-tight text-navy">
            One payment. <br />
            <span className="text-emerald-700">A business that runs.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-[760px] mx-auto leading-relaxed">
            Three fixed scope builds that take you from nothing to open, in 7 to
            28 days. Click any feature to see exactly what gets built. A monthly
            plan afterwards is optional.
          </p>
        </div>
      </section>

      <PhotoBand
        photo={BUILD_PHOTO}
        compact
        eyebrow="One payment"
        title={<>Built once, handed over, <br className="hidden sm:block" />and yours.</>}
        body="Every account, domain and login is registered in your name from the first day. Walk away whenever you like and you keep all of it."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* One time build packages */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex border border-slate-200 rounded-full p-1 bg-white">
              {(['usd', 'gbp', 'eur'] as Currency[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency === c}
                  className={cn(
                    'px-5 py-2 text-sm font-semibold rounded-full transition-colors',
                    currency === c ? 'bg-navy text-white' : 'bg-transparent text-slate-500 hover:text-navy',
                  )}
                >
                  {c === 'usd' ? '$ USD' : c === 'gbp' ? '\u00A3 GBP' : '\u20AC EUR'}
                </button>
              ))}
            </div>
          </div>


          {/* The same card the homepage uses, so this page confirms what that
              one said rather than restating it in a different shape. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-24 items-stretch">
            {ONE_TIME_PACKAGES.map((b, i) => (
              <div key={b.id} id={b.id} className="scroll-mt-28">
                <PackageCard
                  pkg={b}
                  index={i}
                  currency={currency}
                  action={
                    <BuyButton
                      planId={b.id}
                      currency={currency}
                      label={`Buy ${b.name}`}
                      variant={b.featured ? 'emerald' : 'dark'}
                      footnote={b.timeline}
                    />
                  }
                />
              </div>
            ))}
          </div>

          {/* Detailed Color-Coded Comparison Table */}
          <div className="mb-24">
            <SectionLabel>In-Depth Breakdown</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">
                  Detailed Feature <br /> <span className="text-emerald-700">Comparison.</span>
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-[500px]">
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

            <div className="border border-slate-200 bg-white overflow-x-auto shadow-md">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-5 mono text-xs tracking-wider text-emerald-800 font-bold w-2/5">
                      System Module & Capability
                    </th>
                    <th className="p-5 mono text-xs tracking-wider text-navy font-bold w-1/5">
                      Starter ($1,499)
                    </th>
                    <th className="p-5 mono text-xs tracking-wider text-emerald-800 font-bold w-1/5 bg-emerald-50/50">
                      Growth ($3,499)
                    </th>
                    <th className="p-5 mono text-xs tracking-wider text-navy font-bold w-1/5">
                      Ultimate ($6,999)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-5 font-bold text-navy text-xs mono">
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
              <h2 className="text-3xl md:text-5xl font-bold text-navy">Need something specific?</h2>
              <Button asChild variant="outline" className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-xs font-bold">
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
                <div key={i} className="surface surface-hover p-6 flex flex-col justify-between">
                  <div>
                    <div className="mono text-xs tracking-wider text-slate-600 font-bold mb-2">{add.name}</div>
                    <div className="text-3xl font-bold text-emerald-700 mb-2">{add.price}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{add.desc}</p>
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setActiveModal(add.key)}
                    className="w-full border-slate-300 text-zinc-800 hover:bg-white hover:border-emerald-600 mono text-[10px] font-bold py-3"
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