"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette, Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck, Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import NotFound from './NotFound';
import SectionLabel from '@/components/ui/SectionLabel';
import MetaSEO from '@/components/seo/MetaSEO';
import { allServicesCatalog } from '@/data/allServicesList';

const iconMap: { [key: string]: React.ElementType } = {
  Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette, Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck, Sparkles
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = allServicesCatalog.find(s => s.slug === slug);

  if (!data) return <NotFound />;

  const Icon = iconMap[data.iconName] || Sparkles;

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