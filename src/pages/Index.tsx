"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Layers, Sparkles, CheckCircle2, CreditCard, ShieldCheck, Rocket, TrendingUp, Tag, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import ROICalculator from '@/components/home/ROICalculator';
import FAQ from '@/components/home/FAQ';
import MetaSEO from '@/components/seo/MetaSEO';
import { useBookingModal } from '@/components/booking/BookingModalProvider';
import LogoTicker from '@/components/home/LogoTicker';
import LaunchTimeline from '@/components/home/LaunchTimeline';
import HeroAssessment from '@/components/home/HeroAssessment';
import GrowthAndPlans from '@/components/home/GrowthAndPlans';
import PackagesPreview from '@/components/home/PackagesPreview';
import ShowcaseBand from '@/components/home/ShowcaseBand';
import TrialBand from '@/components/home/TrialBand';
import PhotoBand from '@/components/ui/PhotoBand';
import { OWNER_PHOTO, TEAM_PHOTO } from '@/data/planPhotos';
import { tintAt } from '@/data/departmentTints';
import { cn } from '@/lib/utils';

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
      {/* A photograph behind a green wash, the same treatment every other page
          wears, so the site reads as one thing. The four promises are tiles
          rather than a bullet list, because a row of ticks beside plain text is
          what a template looks like. The assessment stays white on top of it
          all, which is where the eye should land. */}
      <section className="relative overflow-hidden bg-deep">
        <img
          src={OWNER_PHOTO.band}
          alt=""
          aria-hidden
          width={1500}
          height={752}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/96 via-deep-900/86 to-deep-800/62" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_85%_at_95%_8%,rgba(255,255,255,0.07),transparent_58%)]" />

        <div className="relative container-custom pt-12 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="grid lg:grid-cols-[1.05fr,1fr] gap-10 lg:gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 ring-1 ring-white/25 backdrop-blur px-3.5 py-1.5 mb-5 text-[13px] text-white font-semibold rounded-full">
                <Sparkles size={13} className="text-emerald-300 shrink-0" /> Set it up, then get it found
              </div>

              <h1 className="text-white text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02] mb-5">
                Set up in 7 days. <br />
                <span className="text-emerald-300">Found every month after.</span>
              </h1>

              <p className="text-slate-200 text-[17px] sm:text-[18.5px] leading-relaxed mb-8 max-w-[560px]">
                Entity, brand, website, CRM, payments and AI systems, built as one
                connected setup. Then marketing, SEO, your CRM and operations run
                monthly, so the business you launched keeps getting found.
              </p>

              {/* The four promises, as tiles. Each one is a claim we can be held
                  to, so each one gets its own box rather than a tick in a list. */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-[560px]">
                {[
                  { icon: Rocket, big: '7 days', small: 'Whole business set up' },
                  { icon: TrendingUp, big: 'Monthly', small: 'Marketing and SEO run for you' },
                  { icon: Tag, big: 'Published', small: 'Every price, before you ask' },
                  { icon: KeyRound, big: '100%', small: 'Code and accounts in your name' },
                ].map((t) => {
                  const TileIcon = t.icon;
                  return (
                    <div
                      key={t.big}
                      className="rounded-xl bg-deep-900/55 ring-1 ring-white/20 backdrop-blur px-4 py-3.5"
                    >
                      <TileIcon size={17} className="text-emerald-300 mb-2.5" />
                      <div className="text-white font-extrabold text-[1.15rem] leading-none tracking-tight">
                        {t.big}
                      </div>
                      <div className="text-slate-300 text-[12.5px] font-medium mt-1.5 leading-snug">
                        {t.small}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  asChild
                  className="bg-white hover:bg-emerald-50 text-deep px-7 py-6 rounded-xl font-bold text-[15px] shadow-lg shadow-black/10"
                >
                  <Link to="/pricing">
                    Get your free trial now <ArrowRight size={17} className="ml-1.5" />
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => openBooking()}
                  className="border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 py-6 rounded-xl font-semibold text-[15px]"
                >
                  Book a call instead
                </Button>
              </div>

              <p className="text-slate-400 text-[13px] mt-4">
                Seven days free on every monthly plan. Nothing is charged until day eight.
              </p>
            </div>

            <HeroAssessment />
          </motion.div>
        </div>
      </section>

      {/* Full Setup Pillars Section */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    'rounded-2xl border p-5 md:p-6 group flex flex-col justify-between transition-shadow hover:shadow-md',
                    tintAt(idx).bg,
                    tintAt(idx).border,
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn('price-figure text-[1.45rem] font-extrabold leading-none', tintAt(idx).ink)}>
                        {item.pillar}
                      </span>
                      <span className={cn('inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm', tintAt(idx).ink)}>
                        <IconComponent size={18} />
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-navy tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className={cn('pt-3 mt-4 border-t flex items-center gap-1.5 text-[12px] font-bold', tintAt(idx).border, tintAt(idx).ink)}>
                    <CheckCircle2 size={12} className="shrink-0" />
                    <span>In every build</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scrolling Logo Ticker */}
      <LogoTicker />

      {/* Launch Timeline */}
      <LaunchTimeline />

      <PhotoBand
        photo={OWNER_PHOTO}
        eyebrow="Who this is for"
        title={<>People who are good at the job, <br className="hidden sm:block" />and busy doing it.</>}
        body="You did not start a business to learn six pieces of software and a filing calendar. We take the parts that are not why you started, and run them."
        cta={{ label: 'See what we run', href: '/pricing' }}
      />

      <ShowcaseBand />

      <PackagesPreview />

      <GrowthAndPlans />

      <PhotoBand
        photo={TEAM_PHOTO}
        compact
        eyebrow="One team"
        title={<>Six departments. <br className="hidden sm:block" />One team behind them.</>}
        body="The people writing your marketing know what your CRM is sending and who you just hired. Six separate agencies never do."
        cta={{ label: 'Meet the squad', href: '/about' }}
      />

      <TrialBand />

      <ROICalculator />

      <FAQ />

      {/* The last thing on the page. It was a heading and a button on a pale
          green wash, which is what every site ends with. This one puts the two
          real choices side by side and prices both, because the reason
          somebody scrolled this far is that they are deciding. */}
      <section id="contact" className="relative overflow-hidden bg-deep">
        <img
          src={TEAM_PHOTO.band}
          alt=""
          aria-hidden
          width={1500}
          height={752}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/96 via-deep-900/90 to-deep-800/80" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_85%_10%,rgba(255,255,255,0.07),transparent_60%)]" />

        <div className="relative container-custom py-16 sm:py-20 px-4">
          <div className="max-w-[640px] mb-10">
            <span className="inline-flex items-center gap-2 bg-white/15 ring-1 ring-white/25 backdrop-blur text-white text-[12px] font-bold px-3.5 py-1.5 rounded-full mb-5">
              Two ways in
            </span>
            <h2 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
              Build it once, <br />
              <span className="text-emerald-300">or hand it over monthly.</span>
            </h2>
            <p className="text-slate-200 text-[17px] leading-relaxed">
              Both prices are on this site. Neither needs a call first, and the
              monthly one does not charge you for a week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-xl">
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-3">
                Start free
              </p>
              <h3 className="text-navy text-2xl font-extrabold mb-2">A monthly department</h3>
              <p className="text-slate-600 text-[15.5px] leading-relaxed mb-5">
                Pick the department that is in your way. We start this week and
                nothing is charged until day eight. Cancel any month.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="price-figure text-3xl font-extrabold text-navy">$249</span>
                <span className="text-slate-500 font-semibold">a month, at the smallest</span>
              </div>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-6 rounded-xl font-bold text-[15px]">
                <Link to="/pricing">
                  Get your free trial now <ArrowRight size={17} className="ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl bg-deep-900/70 ring-1 ring-white/20 backdrop-blur p-7 sm:p-8">
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-300 mb-3">
                Or build first
              </p>
              <h3 className="text-white text-2xl font-extrabold mb-2">A one time package</h3>
              <p className="text-slate-300 text-[15.5px] leading-relaxed mb-5">
                Company, brand, site, email, payments and CRM, built as one thing
                and handed over in your name. Paid once.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="price-figure text-3xl font-extrabold text-white">$1,499</span>
                <span className="text-slate-400 font-semibold">once, at the smallest</span>
              </div>
              <Button asChild variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white py-6 rounded-xl font-semibold text-[15px]">
                <Link to="/packages">See the three builds</Link>
              </Button>
            </div>
          </div>

          <p className="text-slate-400 text-[13.5px] mt-7">
            Would rather talk it through first?{' '}
            <button type="button" onClick={() => openBooking()} className="text-white font-semibold underline underline-offset-4">
              Book a free call
            </button>
            {' '}and we will tell you if you do not need us.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;