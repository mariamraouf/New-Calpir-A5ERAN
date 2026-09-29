"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Settings, PhoneOutgoing, Users } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { MONTHLY_PLANS, formatPrice } from '@/data/plans';

/**
 * The homepage block that says Calpir is not only a setup company.
 *
 * Two halves: marketing and search as a thing we sell, then the four monthly
 * plans so a visitor sees there is an ongoing relationship on offer and what
 * it costs, without having to open the pricing page to find out.
 */

const PLAN_ICONS: Record<string, React.ElementType> = {
  'marketing-seo-monthly': Search,
  'ops-systems-monthly': Settings,
  'sales-outreach-monthly': PhoneOutgoing,
  'hr-admin-monthly': Users,
};

const GrowthAndPlans = () => {
  const singles = MONTHLY_PLANS.filter((p) => !p.bundles);

  return (
    <>
      {/* Marketing and SEO, given its own weight */}
      <section className="section-padding bg-zinc-950 text-white">
        <div className="container-custom grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white mono text-[10px] tracking-wide font-bold mb-5">
              Marketing &amp; SEO
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-7">
              Built is half <br /> the job. <br />
              <span className="text-emerald-400">Found is the other.</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              A business nobody can find is a hobby with overheads. We do the
              search work, the content, the ads, the email and the outbound, and
              we report on enquiries rather than impressions.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-9">
              Ranking is not a one off. It is maintained, monthly, which is why
              it sits in a plan rather than a project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 rounded-none font-bold tracking-tight transition-transform hover:-translate-y-1"
              >
                <Link to="/marketing-seo">
                  Marketing &amp; SEO <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 px-8 py-7 rounded-none font-bold tracking-tight"
              >
                <Link to="/packages">See the plans</Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { h: 'Technical SEO', p: 'Maintained every month, not audited once.' },
              { h: 'Four pieces of content', p: 'Researched, written, indexed.' },
              { h: 'Google Business Profile', p: 'Posts, photos, review responses.' },
              { h: 'Paid ads', p: 'Run and adjusted, if you run them.' },
              { h: 'Email campaigns', p: 'One to your list, every month.' },
              { h: 'A real report', p: 'What moved, and what did not.' },
            ].map((item) => (
              <div key={item.h} className="border border-zinc-800 p-6 bg-zinc-900/40">
                <h3 className="font-bold tracking-tight mb-2 text-sm">{item.h}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The four monthly plans */}
      <section className="section-padding border-b border-zinc-200">
        <div className="container-custom">
          <div className="text-center mb-14">
            <SectionLabel>Monthly plans</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-5">
              Or let us <span className="text-emerald-700">run it.</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-[720px] mx-auto leading-relaxed">
              Four parts of a business, each on its own monthly plan. Take one,
              take all four for less than the sum, cancel any month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {singles.map((plan) => {
              const Icon = PLAN_ICONS[plan.id] || Search;
              return (
                <Link
                  key={plan.id}
                  to="/packages"
                  className="group border border-zinc-200 p-7 bg-white hover:border-emerald-600 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 border border-emerald-200 mb-5">
                    <Icon size={18} className="text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-zinc-950 text-lg mb-2 group-hover:text-emerald-700 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="price-figure text-3xl font-bold text-zinc-950">
                      {formatPrice(plan.price, 'usd')}
                    </span>
                    <span className="text-zinc-500 font-bold text-sm">/month</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-zinc-950 hover:bg-zinc-800 text-white px-10 py-7 rounded-none font-bold tracking-tight transition-transform hover:-translate-y-1"
            >
              <Link to="/packages">
                All plans, prices and one time packages <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="mono text-[11px] tracking-wide text-zinc-400 mt-4">
              Prices shown in USD. Pounds and euros on the packages page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthAndPlans;
