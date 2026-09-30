"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Settings, PhoneOutgoing, Users, Palette, Landmark } from 'lucide-react';
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
  'sales-crm-monthly': PhoneOutgoing,
  'hr-admin-monthly': Users,
  'brand-content-monthly': Palette,
  'compliance-filings-monthly': Landmark,
};

const GrowthAndPlans = () => {
  const singles = MONTHLY_PLANS.filter((p) => !p.bundles);

  return (
    <>
      {/* Marketing and SEO, given its own weight */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.02fr,1.15fr] gap-12 lg:gap-16 items-center mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white text-[11px] tracking-wide font-bold rounded-full mb-5">
                Marketing &amp; SEO
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-7">
                Built is half <br /> the job. <br />
                <span className="text-emerald-400">Found is the other.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                A business nobody can find is a hobby with overheads. We do the
                search work, the content, the ads and the email, and we report on
                enquiries rather than impressions.
              </p>
              <p className="text-slate-400 leading-relaxed mb-9">
                Ranking is not a one off. It is maintained, monthly, which is why
                it sits in a plan rather than a project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-7 rounded-xl font-bold tracking-tight transition-transform hover:-translate-y-1"
                >
                  <Link to="/marketing-seo">
                    Marketing &amp; SEO <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/25 bg-transparent text-white hover:bg-white/10 px-8 py-7 rounded-xl font-bold tracking-tight"
                >
                  <Link to="/pricing">See the plans</Link>
                </Button>
              </div>
            </div>

            {/* A picture of the thing, rather than another paragraph about it. */}
            <figure className="m-0">
              <img
                src="/img/marketing-seo.jpg"
                alt="A search result ranking first, with tracked keywords and an average position climbing over seven months"
                width={1200}
                height={760}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
              <figcaption className="text-slate-400 text-[13px] mt-3">
                What the work looks like from your side. Example view, not a client account.
              </figcaption>
            </figure>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { h: 'Technical SEO', p: 'Maintained every month, not audited once.' },
              { h: 'Four pieces of content', p: 'Researched, written, indexed.' },
              { h: 'Google Business Profile', p: 'Posts, photos, review responses.' },
              { h: 'Paid ads', p: 'Run and adjusted, if you run them.' },
              { h: 'Brand templates', p: 'Kept current so nobody starts blank.' },
              { h: 'A real report', p: 'What moved, and what did not.' },
            ].map((item) => (
              <div
                key={item.h}
                className="rounded-xl border border-white/12 bg-white/[0.06] p-6 transition-colors hover:border-emerald-400/50 hover:bg-white/[0.1]"
              >
                <h3 className="text-white font-extrabold tracking-tight mb-2 text-[15px]">
                  {item.h}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The four monthly plans */}
      <section className="section-padding border-b border-slate-200">
        <div className="container-custom">
          <div className="text-center mb-14">
            <SectionLabel>Monthly plans</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-navy mb-5">
              Or let us <span className="text-emerald-700">run it.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-[720px] mx-auto leading-relaxed">
              Six departments, each on its own monthly plan. Start free for seven days.
              Take one, take the lot for a good deal less than the sum, cancel any
              month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {singles.map((plan) => {
              const Icon = PLAN_ICONS[plan.id] || Search;
              return (
                <Link
                  key={plan.id}
                  to="/packages"
                  className="group surface surface-hover p-7 flex flex-col"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 border border-emerald-200 mb-5">
                    <Icon size={18} className="text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-emerald-700 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="price-figure text-3xl font-bold text-navy">
                      {formatPrice(plan.price, 'usd')}
                    </span>
                    <span className="text-slate-500 font-bold text-sm">/month</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-navy hover:bg-navy-800 text-white px-10 py-7 rounded-xl font-bold tracking-tight transition-transform hover:-translate-y-1"
            >
              <Link to="/packages">
                All plans, prices and one time packages <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="mono text-[11px] tracking-wide text-slate-400 mt-4">
              Prices shown in USD. Pounds and euros on the packages page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthAndPlans;
