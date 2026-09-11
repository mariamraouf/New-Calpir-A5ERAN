"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import NotFound from './NotFound';
import SectionLabel from '@/components/ui/SectionLabel';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { servicePricing, formatPrice, CURRENCIES, Currency } from '@/data/servicePricing';
import { useBookingModal } from '@/components/booking/BookingModalProvider';


const ServiceDetail = () => {
  const { slug } = useParams();
  const data = allServicesCatalog.find(s => s.slug === slug);
  const [currency, setCurrency] = React.useState<Currency>('usd');
  const { openBooking } = useBookingModal();
  const pricing = data ? servicePricing[data.slug] : undefined;

  if (!data) return <NotFound />;

  const Icon = serviceIconMap[data.iconName] || FallbackIcon;

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title={`${data.title} | Calpir`}
        description={data.shortDesc}
        path={`/services/${slug}`}
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
              <Icon size={40} />
            </div>
            <div>
              <SectionLabel>{data.category}</SectionLabel>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight mb-3 text-zinc-950">{data.title}</h1>
              <p className="text-base md:text-xl mono text-zinc-600">{data.tagline}</p>
            </div>
          </div>

          {/* Price, in the visitor's currency, next to the promise that it is
              the whole number rather than an opening one. */}
          {pricing && (
            <div className="mt-10 border border-zinc-200 bg-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-6 justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="mono text-[11px] uppercase tracking-widest text-zinc-500 font-bold">From</span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-700">
                    {formatPrice(data.slug, currency)}
                  </span>
                  <div className="flex border border-zinc-300">
                    {CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => setCurrency(c.code)}
                        aria-pressed={currency === c.code}
                        className={
                          'px-2.5 py-1 mono text-[10px] font-bold uppercase transition-colors ' +
                          (currency === c.code
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white text-zinc-600 hover:text-emerald-700')
                        }
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mono text-xs text-zinc-600 mt-2">
                  {pricing.turnaround} · You pay for what you see. Anything outside this scope is
                  priced and agreed before it starts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button
                  type="button"
                  onClick={() => openBooking()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-tight px-7 py-6 rounded-none"
                >
                  Book this service
                </Button>
                <Button asChild variant="outline" className="border-zinc-300 text-zinc-900 hover:bg-zinc-100 font-black uppercase tracking-tight px-7 py-6 rounded-none">
                  <Link to="/solo-services">All services and prices</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Overview & Deliverables */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 space-y-12 md:space-y-16">
              {/* Executive Summary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-zinc-950">System Overview</h2>
                <p className="mono text-base md:text-lg text-zinc-800 leading-relaxed bg-zinc-50 p-6 md:p-8 border border-zinc-200 shadow-sm">
                  {data.longDesc}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8 text-zinc-950">Module Specifications & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((item: string, i: number) => (
                    <div key={i} className="flex gap-4 p-4 border border-zinc-200 bg-zinc-50 items-start shadow-sm">
                      <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
                      <span className="mono text-xs uppercase tracking-wider text-zinc-800 leading-relaxed font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who & What You Get */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-zinc-200 p-6 md:p-8 bg-zinc-50 shadow-sm">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-800 mb-3 font-bold">Ideal Deployment Candidate</div>
                  <h3 className="text-lg md:text-xl font-black uppercase mb-4 text-zinc-950">Who This Is For</h3>
                  <p className="mono text-sm text-zinc-600 leading-relaxed">{data.who}</p>
                </div>
                <div className="border border-zinc-200 p-6 md:p-8 bg-zinc-50 shadow-sm">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-800 mb-3 font-bold">Final Assets Handover</div>
                  <h3 className="text-lg md:text-xl font-black uppercase mb-4 text-zinc-950">What You Receive</h3>
                  <p className="mono text-sm text-zinc-600 leading-relaxed">{data.get}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky */}
            <div className="lg:sticky lg:top-28">
              <div className="border border-zinc-200 p-6 md:p-8 bg-white shadow-xl flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-black uppercase mb-2 text-zinc-950 tracking-tight">Ecosystem Placement</h3>
                <p className="mono text-xs text-zinc-500 mb-4">
                  Visual relationship inside your unified Calpir nervous system
                </p>

                {/* Compact Ecosystem Node Widget */}
                <div className="w-full flex justify-center py-4">
                  <ConnectedEcosystem compact={true} highlightedNode={data.id} />
                </div>

                <p className="mono text-xs text-zinc-600 my-4 leading-relaxed max-w-xs font-semibold">
                  This module connects directly with your broader business infrastructure to eliminate data silos.
                </p>

                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-7 rounded-none font-black text-base uppercase tracking-tight btn-hover">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Book Deployment Call <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;