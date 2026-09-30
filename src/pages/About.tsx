"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import PhotoBand from '@/components/ui/PhotoBand';
import RelatedReading from '@/components/content/RelatedReading';
import { TINTS } from '@/data/departmentTints';
import { cn } from '@/lib/utils';
import { Tag, KeyRound, FileText, MessageSquare } from 'lucide-react';
import { PLAN_PHOTOS, TEAM_PHOTO, BUILD_PHOTO, OWNER_PHOTO } from '@/data/planPhotos';
import SectionLabel from '@/components/ui/SectionLabel';
import { Zap, Users, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SystemStatus from '@/components/visuals/SystemStatus';
import MetaSEO from '@/components/seo/MetaSEO';
import AnimatedStat from '@/components/ui/AnimatedStat';

const About = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="About Calpir | Calpir"
        description="Who we are, how we work, and why we build entire business systems instead of standalone websites."
        path="/about"
      />
      <Navbar />
      
      {/* Hero */}
      <PageHero
        eyebrow="About Calpir"
        title={<>Built by founders, <br />for founders.</>}
        body="We have been in your shoes. Calpir is the system we wished existed when we were starting out: one team that sets the whole business up and then keeps running the parts you did not start a company to do."
        image={TEAM_PHOTO.band}
        primary={{ label: 'See what we run', href: '/pricing' }}
        secondary={{ label: 'Read the case studies', href: '/case-studies' }}
      />

      {/* What we actually do, said in the order a stranger needs it. The page
          used to open with four animated counters and three walls of text.
          This is: the problem, the answer, how we work, and what it costs. */}

      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-3">
                The problem
              </p>
              <h2 className="text-navy text-[1.9rem] sm:text-[2.5rem] font-extrabold tracking-tight leading-[1.1] mb-5">
                Nobody starts a business <br className="hidden sm:block" />
                to pick software.
              </h2>
              <p className="text-slate-600 text-[17px] leading-relaxed mb-4">
                You start it because you are good at the thing. Then the first
                six months go on choosing a website builder, a CRM, a payment
                processor and an HR tool, wiring four of them together badly,
                and discovering in month seven that nobody can find you on
                Google.
              </p>
              <p className="text-slate-600 text-[17px] leading-relaxed">
                By then the money is gone and the business still runs on one
                person remembering how everything works. That is the normal
                outcome, not the unlucky one.
              </p>
            </div>

            <figure className="m-0">
              <img
                src={PLAN_PHOTOS['ops-systems-monthly'].band}
                alt={PLAN_PHOTOS['ops-systems-monthly'].alt}
                width={1500}
                height={752}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl border border-slate-200 shadow-xl"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt border-b border-slate-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr,1.05fr] gap-12 lg:gap-16 items-center">
            <figure className="m-0 order-2 lg:order-1">
              <img
                src={BUILD_PHOTO.band}
                alt={BUILD_PHOTO.alt}
                width={1500}
                height={752}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl border border-slate-200 shadow-xl"
              />
            </figure>

            <div className="order-1 lg:order-2">
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-3">
                What we built instead
              </p>
              <h2 className="text-navy text-[1.9rem] sm:text-[2.5rem] font-extrabold tracking-tight leading-[1.1] mb-5">
                One team that sets it up, <br className="hidden sm:block" />
                then keeps it running.
              </h2>
              <p className="text-slate-600 text-[17px] leading-relaxed mb-4">
                Calpir does the whole setup as one connected thing: company,
                brand, site, email, payments, CRM and the automation underneath,
                handed over in your name inside 7 to 28 days.
              </p>
              <p className="text-slate-600 text-[17px] leading-relaxed">
                Then the parts that never finish, marketing and search, the CRM,
                the operations, the payroll and the filings, carry on monthly
                for a published price, with a free week before anything is
                charged. Either half works without the other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work, as four promises with a colour each rather than four
          value statements that could belong to anybody. */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-[640px] mb-10">
            <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-3">
              How we work
            </p>
            <h2 className="text-navy text-[1.9rem] sm:text-[2.5rem] font-extrabold tracking-tight leading-[1.1]">
              Four things you can hold us to.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: '01',
                title: 'Every price is published',
                body: 'Every plan, package and single service has its number on this site. If you have to ask what something costs, we have failed at the easy part.',
                tint: TINTS.emerald,
                icon: Tag,
              },
              {
                n: '02',
                title: 'Everything is in your name',
                body: 'Domains, accounts, code, CRM data. Registered to you from day one, so leaving costs you nothing but our help.',
                tint: TINTS.teal,
                icon: KeyRound,
              },
              {
                n: '03',
                title: 'We write it down',
                body: 'Every process we build gets an SOP. A business that only runs because one person remembers how is not a system, it is a risk.',
                tint: TINTS.violet,
                icon: FileText,
              },
              {
                n: '04',
                title: 'We will tell you no',
                body: 'If a cheaper tool does the job, or you do not need the plan you asked about, you will be told. We publish what the rest of the market charges, including where it beats us.',
                tint: TINTS.rose,
                icon: MessageSquare,
              },
            ].map((v) => {
              const VIcon = v.icon;
              return (
                <div
                  key={v.n}
                  className={cn('rounded-2xl border p-6 sm:p-7 flex flex-col', v.tint.bg, v.tint.border)}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={cn('price-figure text-[1.5rem] font-extrabold leading-none', v.tint.ink)}>
                      {v.n}
                    </span>
                    <span className={cn('inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white', v.tint.ink)}>
                      <VIcon size={17} />
                    </span>
                  </div>
                  <h3 className="text-navy text-[17px] font-extrabold leading-snug mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PhotoBand
        photo={TEAM_PHOTO}
        compact
        eyebrow="Who you get"
        title={<>A squad, not a <br className="hidden sm:block" />ticket queue.</>}
        body="The people writing your marketing know what your CRM is sending and who you just hired. One team across every department, one invoice, one monthly read."
        cta={{ label: 'See what we run', href: '/pricing' }}
      />

      <RelatedReading
        slugs={['how-to-setup-new-business-2026', 'what-to-start-with-launch-guide', 'ai-consulting-cost-small-business']}
        heading="How we think, in writing."
        intro="We publish the research rather than keeping it for sales calls. These three are the ones people send to a co-founder."
      />

      <section className="relative overflow-hidden bg-deep">
        <img
          src={OWNER_PHOTO.band}
          alt=""
          aria-hidden
          width={1500}
          height={752}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/96 via-deep-900/88 to-deep-800/70" />
        <div className="relative container-custom py-16 sm:py-20">
          <div className="max-w-[620px]">
            <h2 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
              Tell us what is <br />
              <span className="text-emerald-300">in your way.</span>
            </h2>
            <p className="text-slate-200 text-[17px] leading-relaxed mb-7">
              Two minutes on the assessment gives you a named plan and a price.
              A call gives you a straight answer, including if the answer is
              that you do not need us yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-white hover:bg-emerald-50 text-deep px-7 py-6 rounded-xl font-bold text-[15px]">
                <Link to="/pricing">Get your free trial now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 py-6 rounded-xl font-semibold text-[15px]">
                <Link to="/contact">Book a call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;