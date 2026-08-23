"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeatureModal from '@/components/ui/FeatureModal';
import MetaSEO from '@/components/seo/MetaSEO';

interface SoloServiceItem {
  id: string;
  category: string;
  title: string;
  price: string;
  turnaround: string;
  desc: string;
  deliverables: string[];
  modalKey?: string;
}

const soloServices: SoloServiceItem[] = [
  {
    id: "domain_ssl",
    category: "Foundation & Security",
    title: "Domain Acquisition, DNS & SSL Setup",
    price: "$149",
    turnaround: "24-48 Hours",
    desc: "We find and secure the perfect domain, configure high-speed DNS, and activate bulletproof 256-bit SSL certificates.",
    deliverables: ["Domain purchasing assistance", "DNS records (A, CNAME, TXT)", "Auto-renewing SSL certificate", "Email anti-spam SPF/DKIM config"],
    modalKey: "domain_ssl"
  },
  {
    id: "gbp_indexing",
    category: "Search & Visibility",
    title: "Google Business Profile & Search Indexing",
    price: "$199",
    turnaround: "2-3 Days",
    desc: "Manual Google Search Console verification, XML sitemap indexing, and a complete optimized Google Maps profile.",
    deliverables: ["Verified Google Business Profile", "Google Search Console indexing", "Sitemap submission", "GA4 conversion tag setup"],
    modalKey: "gbp_seo"
  },
  {
    id: "branding_palette",
    category: "Design & Creative",
    title: "Brand Identity, Typography & Color Palette",
    price: "$399",
    turnaround: "3-5 Days",
    desc: "Full visual identity engineered for your target audience. Custom logo source files, 5-color aesthetic palettes, and font pairings.",
    deliverables: ["Vector SVG/PNG logo suite", "Aesthetic 5-color palette", "Web typography pairings", "Digital Brand Guidelines PDF"],
    modalKey: "brand_palette"
  },
  {
    id: "targeted_social",
    category: "Social Distribution",
    title: "Single Niche-Targeted Social Profile Setup",
    price: "$189",
    turnaround: "2-3 Days",
    desc: "Our strategist identifies the #1 highest-converting social channel for your niche and builds out your banners, bio, and lead links.",
    deliverables: ["Niche channel selection audit", "Custom 4K banner designs", "Keyword-rich bio & booking link", "Starter post templates"],
    modalKey: "social_niche"
  },
  {
    id: "video_editing",
    category: "Media & Production",
    title: "Short-Form Video Editing (Pack of 5 Reels)",
    price: "$299",
    turnaround: "3-4 Days",
    desc: "High-retention viral video editing with animated kinetic subtitles, sound effects, zooms, and color grading for TikTok, IG, and LinkedIn.",
    deliverables: ["5 ready-to-post vertical videos", "Dynamic kinetic captions", "Royalty-free music & sound design", "Thumbnail covers included"],
    modalKey: "video_creative"
  },
  {
    id: "crm_pipeline",
    category: "Sales Architecture",
    title: "Custom CRM Setup (HubSpot / GoHighLevel)",
    price: "$599",
    turnaround: "4-7 Days",
    desc: "Custom deal stages, automated contact scoring, two-way calendar sync, and instant SMS/email lead alerts.",
    deliverables: ["Configured sales pipelines", "Automated lead follow-up sequence", "Calendar booking integration", "Team video walkthrough"],
    modalKey: "crm_pipelines"
  },
  {
    id: "ai_support_bot",
    category: "AI & Agents",
    title: "Custom RAG AI Customer Support Agent",
    price: "$699",
    turnaround: "5-7 Days",
    desc: "Intelligent agent trained exclusively on your business docs, pricing, and FAQs to answer prospect questions 24/7 without hallucination.",
    deliverables: ["Company knowledge vector base", "Website chat widget embed", "Zero-hallucination guardrails", "Lead capture CRM sync"],
    modalKey: "ai_agents"
  },
  {
    id: "workflow_automations",
    category: "Automation Logic",
    title: "3 Custom Automated Workflows (Make / Zapier)",
    price: "$349",
    turnaround: "3-5 Days",
    desc: "Connect your apps and eradicate manual copy-pasting. Auto-generate invoices, notify Slack, and sync leads seamlessly.",
    deliverables: ["3 automated end-to-end scenarios", "Data validation & error handling", "Slack / Email alert hooks", "Testing & documentation"],
    modalKey: "workflow_automations"
  },
  {
    id: "landing_page",
    category: "Web Development",
    title: "High-Conversion Single Landing Page",
    price: "$799",
    turnaround: "4-6 Days",
    desc: "Sub-second React/Next.js landing page built to turn cold traffic into paying customers with mobile-first responsiveness.",
    deliverables: ["Sub-1.5s load speed", "Contact form & webhook hooks", "Clean mobile responsiveness", "Source code repository"]
  },
  {
    id: "image_editing_graphics",
    category: "Design & Creative",
    title: "Graphic Design & Social Asset Pack (10 Designs)",
    price: "$249",
    turnaround: "2-3 Days",
    desc: "High-resolution graphic assets, product mockups, carousel templates, and ad banners tailored to your branding.",
    deliverables: ["10 branded graphic templates", "Figma source files", "Exported PNG/JPG formats", "Social media sizing presets"]
  }
];

const SoloServices = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Solo Services | Calpir"
        description="Book individual services on their own — website, CRM, automation or AI agents — without a full package."
        path="/solo-services"
      />
      <Navbar />

      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>À La Carte Solutions</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">
            Solo <br /> <span className="text-emerald-700">Services.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-[850px] leading-relaxed">
            Need one specific superpower instead of a full business package? Pick exactly what you need à la carte. Every service is delivered with surgical precision by our in-house squad.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soloServices.map((service) => (
              <div 
                key={service.id}
                className="border border-zinc-200 p-8 md:p-10 bg-white flex flex-col justify-between hover:border-emerald-600 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 border border-emerald-200">
                      {service.category}
                    </span>
                    <span className="mono text-xs text-zinc-600 border border-zinc-200 px-2.5 py-1 bg-zinc-50">
                      ⏱ {service.turnaround}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <div className="text-4xl font-black text-emerald-700 mb-4">{service.price}</div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.desc}</p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-zinc-100">
                    <div className="mono text-xs uppercase tracking-wider text-zinc-500 font-bold mb-2">Included Deliverables:</div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-800 mono font-semibold">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-100">
                  {service.modalKey && (
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setActiveModal(service.modalKey || null)}
                      className="border-zinc-300 text-zinc-800 hover:bg-zinc-100 font-bold uppercase text-xs py-6 rounded-none flex items-center justify-center gap-1.5"
                    >
                      <HelpCircle size={14} className="text-emerald-600" /> Inspect Details
                    </Button>
                  )}
                  <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-xs py-6 rounded-none btn-hover">
                    <Link to="/contact">Order This Service <ArrowRight size={14} className="ml-1" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Banner */}
          <div className="mt-16 border border-zinc-200 bg-zinc-50 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-2">Want 3 or more solo services?</div>
              <h3 className="text-2xl md:text-4xl font-black uppercase text-zinc-950 tracking-tight mb-2">
                Our Full Launch Packages Save You 40% to 60%
              </h3>
              <p className="text-zinc-600 text-sm max-w-[650px] leading-relaxed">
                Instead of booking 5 individual services separately, our all-in-one Starter, Growth, and Ultimate packages bundle everything together seamlessly.
              </p>
            </div>
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700 font-black uppercase px-8 py-6 rounded-none text-sm shrink-0">
              <Link to="/packages">View All-In-One Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureModal featureKey={activeModal} onClose={() => setActiveModal(null)} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SoloServices;