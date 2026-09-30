"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import PackageCard from '@/components/packages/PackageCard';
import { ONE_TIME_PACKAGES } from '@/data/plans';

/**
 * The three build packages, on the homepage.
 *
 * They were two clicks away, which is two clicks too many for the thing most
 * visitors arrive wanting to know. Same card as the packages page, so the
 * second page confirms what this one said rather than restating it in a
 * different shape. Prices in USD here; the packages page carries the currency
 * switch.
 */

const PackagesPreview = () => {
  return (
    <section className="section-padding border-b border-slate-200 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <SectionLabel>Packages</SectionLabel>
            <h2 className="text-3xl sm:text-5xl text-navy mb-3">
              One payment. <br />
              <span className="text-emerald-700">A business that runs.</span>
            </h2>
          </div>
          <p className="lede max-w-md">
            Three fixed scope builds that take you from nothing to open, in 7 to
            28 days. Open any line to see what it means. Every price published,
            nothing quoted on a call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {ONE_TIME_PACKAGES.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={i}
              action={
                <Button
                  asChild
                  className={
                    'w-full py-6 rounded-xl font-semibold text-[15px] ' +
                    (pkg.featured
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-navy hover:bg-navy-800 text-white')
                  }
                >
                  <Link to={`/packages#${pkg.id}`}>
                    See what is included <ArrowRight size={17} className="ml-1.5" />
                  </Link>
                </Button>
              }
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="outline" className="border-slate-300 text-navy hover:bg-slate-100 px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/packages">Compare all three in detail</Link>
          </Button>
          <Button asChild variant="outline" className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 px-7 py-6 rounded-xl font-semibold text-[15px]">
            <Link to="/pricing">Or see the monthly plans <ArrowRight size={16} className="ml-1.5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
