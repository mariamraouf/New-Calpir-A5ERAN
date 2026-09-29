"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Layers, Sparkles, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';
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
import EmailCaptureCTA from '@/components/home/EmailCaptureCTA';
import { useBookingModal } from '@/components/booking/BookingModalProvider';
import LogoTicker from '@/components/home/LogoTicker';
import LaunchTimeline from '@/components/home/LaunchTimeline';
import HeroPanel from '@/components/home/HeroPanel';
import GrowthAndPlans from '@/components/home/GrowthAndPlans';

const Index = () => {
  const { openBooking } = useBookingModal();
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const pillars = [
    {
      pillar: "01",
      tag: "Foundation & Brand",
      icon: ShieldCheck,
      title: "Foundation & Brand",
      desc: "Entity guidance, domain, SSL, vector logo kit, typography, and curated color systems."
    },
    {
      pillar: "02",
      tag: "Storefront",
      icon: Globe,
      title: "Digital Storefront",
      desc: "High-conversion React/Next.js architecture with sub-second speed and day-one Google indexing."
    },
    {
      pillar: "03",
      tag: "Revenue Engine",
      icon: BarChart3,
      title: "Sales & Finance",
      desc: "CRM pipelines, 60-second lead routing, Google Workspace, VOIP, Stripe, and automated invoicing."
    },
    {
      pillar: "04",
      tag: "Autonomous Ops",
      icon: Bot,
      title: "Ops & AI Fleet",
      desc: "SOP knowledge bases, contractor payroll, task boards, Zapier workflows, and 24/7 AI agents."
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <MetaSEO 
        title="Calpir | Business Setup, Marketing & SEO, Run Monthly"
        description="Calpir builds your entire company infrastructure, then runs the marketing, SEO, operations, sales and HR on a monthly plan. One time packages from $1,499, monthly plans from $449. Every price published."
        path="/"
      />
      <Navbar />
      
      {/* Hero Section */}
      {/* Two columns, because a centred block of text on white left a screen
          and a half of empty space above the fold. The panel on the right is
          drawn rather than photographed: it shows what Calpir actually builds. */}
      <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-gradient-to-b from-emerald-50/50 via-white to-white">
        <div className="container-custom">
          <motion.div {...reveal} className="grid lg:grid-cols-[1.05fr,1fr] gap-10 lg:gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 mb-5 text-[13px] text-emerald-800 font-semibold rounded-full">
                <Sparkles size={13} className="text-emerald-600 shrink-0" /> Set it up, then get it found
              </div>

              <h1 className="text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02] mb-5 text-navy">
                Set up in 7 days. <br />
                <span className="text-emerald-700">Found every month after.</span>
              </h1>

              <p className="lede mb-7 max-w-[560px]">
                Entity, brand, website, CRM, payments and AI systems, built as one
                connected setup. Then marketing, SEO, outbound and operations run
                monthly, so the business you launched keeps getting found.
              </p>

              {/* Four things we do, in a grid, so the eye has something to land
                  on other than a paragraph. */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 max-w-[560px]">
                {[
                  'Complete business setup',
                  'Marketing and SEO run monthly',
                  'Every price published up front',
                  '100% code and account ownership',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0" />
                    <span className="text-[15px] text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <EmailCaptureCTA />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => openBooking()}
                  className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 px-6 py-5 rounded-xl font-semibold text-[15px]"
                >
                  Pick a time instead
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-navy hover:bg-slate-100 px-6 py-5 rounded-xl font-semibold text-[15px]">
                  <Link to="/pricing">See plans and prices</Link>
                </Button>
              </div>
            </div>

            <HeroPanel />
          </motion.div>
        </div>
      </section>

      {/* Full Setup Pillars Section */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="surface surface-hover p-5 md:p-6 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="num-badge">{item.pillar}</span>
                      <span className="icon-circle group-hover:border-emerald-300 group-hover:text-emerald-700 transition-colors">
                        <IconComponent size={17} />
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-navy tracking-tight mb-2 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-[14px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[12px] text-slate-400 font-semibold">
                    <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                    <span>Included in Launch</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scrolling Logo Ticker */}
      <LogoTicker />

      {/* Sectors We Launch */}
      <SectorsSection />

      {/* Launch Timeline */}
      <LaunchTimeline />

      {/* Services Grid */}
      <section className="section-padding border-b border-slate-200 section-alt">
        <div className="container-custom">
          <SectionLabel>The complete business modules</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold text-navy tracking-tight">
              Every Department <br /> <span className="text-emerald-700">Ready To Generate Cash</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base max-w-md">
              We eliminate every technical, operational, and administrative bottleneck so your company operates as an integrated commercial machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Brand, domain and SSL", icon: <ShieldCheck />, desc: "Visual identity, domain registration, certificates, and Google Search Console indexing.", link: "/services/website-development", outcomes: ["A brand you can hand to anyone", "Domain and certificate in your name", "Indexed by Google from day one"] },
              { title: "High speed storefront", icon: <Globe />, desc: "React architecture built for instant global loading and for turning visitors into enquiries.", link: "/services/website-development", outcomes: ["Loads in under 1.5 seconds", "Built to convert, not just to look good", "Works properly on a phone"] },
              { title: "CRM and sales pipelines", icon: <BarChart3 />, desc: "Automated lead intake, deal stages, two way calendar sync and instant routing.", link: "/services/crm-sales", outcomes: ["No lead sits untouched", "Deals visible at a glance", "Follow up happens without you"] },
              { title: "Finance, billing and invoicing", icon: <CreditCard />, desc: "Stripe checkouts, recurring billing, automated quotes and accounting sync.", link: "/services/operations-hr", outcomes: ["Customers can pay you online", "Recurring billing that runs itself", "Your accounts stay in sync"] },
              { title: "Operations, SOPs and payroll", icon: <Settings />, desc: "ClickUp or Notion boards, contractor onboarding, contracts, and Deel or Gusto payroll.", link: "/services/operations-hr", outcomes: ["Work lives in one place", "Processes written down, not remembered", "Contractors paid on time"] },
              { title: "AI agents and automation", icon: <Bot />, desc: "Agents trained on your business for qualification and booking, plus Make or Zapier workflows.", link: "/services/ai-agents", outcomes: ["Answers at 2am without you", "Qualifies and books real calls", "Built with guardrails, not hype"] }
            ].map((s, i) => (
              <Link key={i} to={s.link} className="surface surface-hover p-6 sm:p-7 group flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="num-badge">{String(i + 1).padStart(2, '0')}</span>
                  <span className="icon-circle group-hover:border-emerald-300 group-hover:text-emerald-700 transition-colors">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 18 })}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-2.5 leading-snug">{s.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-5">{s.desc}</p>
                <div className="border-t border-slate-100 pt-4 mb-5 flex-grow">
                  <p className="outcome-label mb-2.5">What you get</p>
                  <ul className="space-y-1.5">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-[14px] text-slate-600">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="card-cta mt-auto">
                  Explore this module <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button asChild variant="outline" className="w-full sm:w-auto border-emerald-600 text-emerald-800 hover:bg-emerald-50 mono text-[11px] sm:text-xs font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-xl">
              <Link to="/software-stack">Browse Our 100+ Integrated Software Stack <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-slate-300 text-zinc-800 hover:bg-slate-100 mono text-[11px] sm:text-xs font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-xl">
              <Link to="/solo-services">Browse Individual Solo Services <Layers size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section id="ecosystem" className="section-padding border-b border-slate-200 bg-gradient-to-b from-zinc-50 via-emerald-50/20 to-zinc-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <SectionLabel>The Calpir Complete Business Engine</SectionLabel>
              <h2 className="text-2xl sm:text-5xl md:text-6xl text-navy font-bold leading-tight tracking-tight">
                Everything connected. <br />
                <span className="text-emerald-700">Everything Running Together.</span>
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed">
                Most founders spend months stitching together 8 disconnected software accounts. We deploy one seamless business engine where website traffic converts into CRM leads, leads trigger automated billing, contracts are signed automatically, and AI agents handle 24/7 customer conversations.
              </p>
              
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <div className="flex items-center gap-2.5 mono text-[11px] sm:text-xs tracking-wider font-bold text-zinc-800">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  Real Time Data Flow Across Legal, Ops, CRM, Finance, and AI
                </div>
                <div className="mono text-[11px] sm:text-xs text-emerald-800 font-bold tracking-wider border-l-2 border-emerald-600 pl-3 sm:pl-4 py-1.5 bg-emerald-50/60">
                  One complete operational foundation. Zero gaps. Everything ready on day one.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center items-center py-2 px-2 overflow-visible">
              <ConnectedEcosystem />
            </div>
          </div>
        </div>
      </section>

      <GrowthAndPlans />

      <ROICalculator />

      <FAQ />

      {/* Contact CTA */}
      <section id="contact" className="section-padding border-t border-slate-200 bg-emerald-50/60">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 font-bold tracking-tight text-navy">
            Ready to <br /> Launch Your Full Business?
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30 minute consultation with Maria. We will map out your complete company setup from legal and brand to website, CRM, and AI operations.
          </p>
          <div className="max-w-md mx-auto">
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-10 py-5 sm:py-7 rounded-xl font-bold text-xs sm:text-lg tracking-tight transition-all btn-hover shadow-md text-center whitespace-normal leading-tight">
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