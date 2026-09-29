"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SectionLabel from '@/components/ui/SectionLabel';
import MetaSEO from '@/components/seo/MetaSEO';
import MonthlyPlans from '@/components/plans/MonthlyPlans';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { allServicesCatalog } from '@/data/allServicesList';
import { servicePricing, CURRENCIES } from '@/data/servicePricing';
import type { Currency } from '@/data/plans';

/**
 * The marketing and search pillar.
 *
 * Calpir is read as a company that sets businesses up, which undersells half
 * of what it does. This page exists so the marketing and SEO side has
 * somewhere of its own to rank, and so a visitor who wants growth rather than
 * formation does not have to work out that we do it.
 */

const SEARCH_SERVICE_IDS = [
  'seo-content-strategy',
  'gbp-seo',
  'content-production',
  'analytics-tracking',
];

const DEMAND_SERVICE_IDS = [
  'paid-ads-setup',
  'email-marketing',
  'social-niche',
  'reviews-reputation',
];

const CONVERT_SERVICE_IDS = [
  'website-development',
  'crm-sales',
  'proposals-quotes',
  'site-speed-optimization',
];

const RELATED_READING = [
  { slug: 'how-to-setup-new-business-2026', title: 'How to set up a new business in 2026' },
  { slug: 'best-crm-tools-comparison', title: 'The CRM comparison, with the fees nobody advertises' },
  { slug: 'essential-tech-stack-automations', title: 'The tech stack a small business actually needs' },
  { slug: 'what-to-start-with-launch-guide', title: 'What to build first when everything feels urgent' },
];

const MarketingSeo = () => {
  const [currency, setCurrency] = useState<Currency>('usd');
  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? '$';

  const renderServiceGroup = (title: string, blurb: string, ids: string[]) => (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-navy mb-3">
        {title}
      </h3>
      <p className="text-slate-600 mb-8 max-w-[720px] leading-relaxed">{blurb}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ids.map((id) => {
          const service = allServicesCatalog.find((s) => s.id === id);
          if (!service) return null;
          const Icon = serviceIconMap[service.iconName] || FallbackIcon;
          const price = servicePricing[service.slug];
          return (
            <Link
              key={id}
              to={`/services/${service.slug}`}
              className="group surface surface-hover p-6 flex flex-col"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 border border-emerald-200 mb-4">
                <Icon size={18} className="text-emerald-700" />
              </div>
              <h4 className="font-bold text-navy mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                {service.shortDesc}
              </p>
              {price && (
                <div className="mono text-xs tracking-wide font-bold text-emerald-700">
                  From {symbol}{price[currency].toLocaleString('en-US')}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO
        title="Marketing & SEO Services for Small Businesses | Calpir"
        description="SEO, content, Google Business Profile, paid ads, email and outbound, run monthly from $899. Every price published. Built for US, UK and EU small businesses."
        path="/marketing-seo"
      />
      <Navbar />

      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <div className="max-w-[900px]">
            <SectionLabel>Marketing &amp; SEO</SectionLabel>
            <h1 className="text-5xl md:text-7xl leading-[0.95] mb-8 font-bold tracking-tight text-navy">
              Being good is not <br />
              <span className="text-emerald-700">being found.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed mb-8">
              Most small businesses lose to competitors who are worse at the job
              and better at being seen. We do the search work, the content, the
              ads and the outbound, monthly, and we show you what moved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-9 py-7 rounded-xl font-bold tracking-tight transition-transform hover:-translate-y-1"
              >
                <a href="#plan">
                  See the monthly plan <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-zinc-800 hover:bg-slate-50 px-9 py-7 rounded-xl font-bold tracking-tight"
              >
                <Link to="/services">Browse every service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The honest framing */}
      <section className="section-padding border-b border-slate-200">
        <div className="container-custom grid lg:grid-cols-[1fr,1.1fr] gap-14 items-start">
          <div>
            <SectionLabel>How we work</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              No dashboards <br /> full of nothing.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Impressions went up. Reach improved. Engagement is trending. None
              of that is money. We report on the searches that bring buyers, the
              enquiries that arrive, and what each one cost, and when something
              is not working we say so rather than reformatting the chart.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                h: 'We go to the source, every time',
                p: 'Fee schedules, government pages, platform docs. Half the advice in this industry is a number somebody copied in 2019 and nobody rechecked.',
              },
              {
                h: 'Search first, because it compounds',
                p: 'Ads stop the day you stop paying. A page that ranks keeps working. We build the ranking asset first and use ads to fill the gap while it matures.',
              },
              {
                h: 'Content written by people who checked',
                p: 'Four pieces a month, researched against primary sources, structured for the way Google reads a page, and actually submitted for indexing.',
              },
              {
                h: 'Everything is measured or it is not done',
                p: 'Conversion tracking, call tracking and attribution go in before the spending starts, so you can tell which half of the marketing worked.',
              },
            ].map((item) => (
              <div key={item.h} className="flex gap-4 border-b border-slate-100 pb-5">
                <Check size={20} className="text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{item.h}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The services under the pillar */}
      <section className="section-padding border-b border-slate-200 bg-slate-50/60">
        <div className="container-custom">
          <div className="mb-14">
            <SectionLabel>What sits under it</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-navy mb-5">
              Twelve services, <br /> three jobs.
            </h2>
            <p className="text-lg text-slate-600 max-w-[760px] leading-relaxed">
              Get found, create demand, turn it into revenue. Buy any of these on
              their own, or take the monthly plan and we run the lot.
            </p>
          </div>

          {renderServiceGroup(
            'Get found',
            'The work that makes you appear when somebody types what you sell into Google.',
            SEARCH_SERVICE_IDS,
          )}
          {renderServiceGroup(
            'Create demand',
            'Reaching people who are not searching yet, and staying in front of the ones who already found you.',
            DEMAND_SERVICE_IDS,
          )}
          {renderServiceGroup(
            'Turn it into revenue',
            'Traffic that does not convert is a cost. This is the layer that catches it.',
            CONVERT_SERVICE_IDS,
          )}
        </div>
      </section>

      {/* The plan */}
      <section id="plan" className="section-padding border-b border-slate-200">
        <div className="container-custom">
          <div className="text-center mb-4">
            <SectionLabel>Monthly</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-navy mb-5">
              Run it for <span className="text-emerald-700">me.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-[720px] mx-auto leading-relaxed">
              One price, every month, for the whole marketing and search function.
              Cancel any month. Or add the other three plans and we run the rest
              of the business too.
            </p>
          </div>

          <div className="max-w-[420px] mx-auto">
            <MonthlyPlans
              currency={currency}
              onCurrencyChange={setCurrency}
              only={['marketing-seo-monthly']}
              showBundle={false}
            />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="mono text-xs tracking-wide font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              See all four monthly plans and the bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Reading, for the internal links and because it is genuinely useful */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionLabel>Worth reading first</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-navy mb-10">
            Before you spend anything.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {RELATED_READING.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group surface surface-hover p-7 flex items-center justify-between gap-5"
              >
                <span className="font-bold text-navy group-hover:text-emerald-700 transition-colors leading-snug">
                  {post.title}
                </span>
                <ArrowRight size={18} className="text-emerald-600 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MarketingSeo;
