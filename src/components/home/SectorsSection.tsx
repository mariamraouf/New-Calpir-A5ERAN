"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Cpu, HeartPulse, Building2, Wrench, Video, ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { Link } from 'react-router-dom';

const sectors = [
  {
    icon: <ShoppingBag className="text-emerald-700" size={32} />,
    title: "E-Commerce & Brands",
    desc: "Lightning fast storefronts, Stripe checkout flows, automated abandoned cart recovery, and warehouse inventory sync.",
    tools: "Shopify // Next.js // Klaviyo // Stripe"
  },
  {
    icon: <Cpu className="text-emerald-700" size={32} />,
    title: "B2B SaaS & Tech Startups",
    desc: "Modern landing pages, user onboarding funnels, automated trial-to-paid pipelines, and custom support AI bots.",
    tools: "React // Supabase // HubSpot // OpenAI"
  },
  {
    icon: <HeartPulse className="text-emerald-700" size={32} />,
    title: "Clinics & Health Services",
    desc: "Bilingual booking calendars, HIPAA-conscious intake systems, SMS reminder automations, and local Google Map dominance.",
    tools: "GoHighLevel // Google Business // WhatsApp"
  },
  {
    icon: <Building2 className="text-emerald-700" size={32} />,
    title: "Real Estate & High-Ticket",
    desc: "Interactive property showcases, automated lead qualification scoring, instant CRM routing, and instant buyer SMS alerts.",
    tools: "Airtable // Make.com // DocuSign // Meta Ads"
  },
  {
    icon: <Wrench className="text-emerald-700" size={32} />,
    title: "Local Services & Trades",
    desc: "5-star Google review generation engines, click-to-call mobile sites, instant automated quotes, and invoice delivery.",
    tools: "Google Search Console // Stripe // Zapier"
  },
  {
    icon: <Video className="text-emerald-700" size={32} />,
    title: "Creator Agencies & Studios",
    desc: "Client onboarding portals, dynamic short-form video pipelines, contract e-signatures, and auto client billing.",
    tools: "ClickUp // Frame.io // PandaDoc // Notion"
  }
];

const SectorsSection = () => {
  return (
    <section className="section-padding border-b border-zinc-200 bg-zinc-50/60">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel>Tailored Industry Blueprints</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight">
              Sectors We <br /> <span className="text-emerald-700">Launch & Scale.</span>
            </h2>
          </div>
          <p className="text-zinc-600 text-base md:text-lg max-w-[460px] leading-relaxed">
            We don't do cookie-cutter templates. Every industry has unique bottlenecks, so we configure the exact tech stack proven to make your specific sector crush it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border border-zinc-200 p-8 bg-white hover:border-emerald-600 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 inline-block">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 tracking-tight">
                  {sector.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {sector.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <div className="mono text-[11px] uppercase tracking-wider text-emerald-800 font-bold">
                  {sector.tools}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-zinc-800 hover:text-emerald-700 font-black border-b border-emerald-600/40 pb-1 hover:border-emerald-700 transition-colors"
          >
            Don't see your specific niche? We build custom setups too <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;