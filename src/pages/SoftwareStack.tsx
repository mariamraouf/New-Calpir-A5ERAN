"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/<dyad-write path="src/pages/SoftwareStack.tsx" description="Brand new page detailing all platforms and software we master, with reassuring guidance">
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Zap, Layers, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ToolCategory {
  category: string;
  badge: string;
  desc: string;
  tools: {
    name: string;
    useCase: string;
    level: string;
  }[];
}

const softwareCategories: ToolCategory[] = [
  {
    category: "CRM & Sales Engines",
    badge: "REVENUE // PIPELINES",
    desc: "We configure, clean up, and automate your entire customer lifecycle.",
    tools: [
      { name: "HubSpot", useCase: "B2B sales pipelines, deal stages & marketing automation", level: "Certified Pro" },
      { name: "GoHighLevel (GHL)", useCase: "All-in-one SMS, call tracking, funnels & client booking", level: "Mastery" },
      { name: "Salesforce Sales Cloud", useCase: "Enterprise data models & custom object pipelines", level: "Advanced" },
      { name: "Zoho CRM & Bigin", useCase: "Lean startup contact management & email sync", level: "Proficient" },
      { name: "Pipedrive", useCase: "Visual activity-based sales routing & deal scoring", level: "Expert" }
    ]
  },
  {
    category: "Web & Frontend Architecture",
    badge: "PERFORMANCE // SPEED",
    desc: "Blazing sub-second websites engineered for high conversion and<dyad-write path="src/pages/SoftwareStack.tsx" description="Brand new page detailing all platforms and software we master, with reassuring guidance">
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Zap, Layers, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ToolCategory {
  category: string;
  badge: string;
  desc: string;
  tools: {
    name: string;
    useCase: string;
    level: string;
  }[];
}

const softwareCategories: ToolCategory[] = [
  {
    category: "CRM & Sales Engines",
    badge: "REVENUE // PIPELINES",
    desc: "We configure, clean up, and automate your entire customer lifecycle.",
    tools: [
      { name: "HubSpot", useCase: "B2B sales pipelines, deal stages & marketing automation", level: "Certified Pro" },
      { name: "GoHighLevel (GHL)", useCase: "All-in-one SMS, call tracking, funnels & client booking", level: "Mastery" },
      { name: "Salesforce Sales Cloud", useCase: "Enterprise data models & custom object pipelines", level: "Advanced" },
      { name: "Zoho CRM & Bigin", useCase: "Lean startup contact management & email sync", level: "Proficient" },
      { name: "Pipedrive", useCase: "Visual activity-based sales routing & deal scoring", level: "Expert" }
    ]
  },
  {
    category: "Web & Frontend Architecture",
    badge: "PERFORMANCE // SPEED",
    desc: "Blazing sub-second websites engineered for high conversion and Google rankings.",
    tools: [
      { name: "React & Next.js", useCase: "Ultra-fast custom web apps & edge deployment", level: "Core Stack" },
      { name: "Shopify / Shopify Plus", useCase: "High-volume e-commerce storefronts & checkout systems", level: "Expert" },
      { name: "Webflow", useCase: "Visual CMS builds with clean responsive code", level: "Expert" },
      { name: "WordPress & WooCommerce", useCase: "Legacy migrations, speed audits & custom theme builds", level: "Mastery" },
      { name: "Framer", useCase: "Interactive micro-animations & rapid landing pages", level: "Advanced" }
    ]
  },
  {
    category: "Automation & Integration Logic",
    badge: "WORKFLOWS // ZERO MANUAL WORK",
    desc: "The glue that connects all your tools into one cohesive machine.",
    tools: [
      { name: "Make.com (Integromat)", useCase: "Complex multi-step scenario logic, routers & webhooks", level: "Mastery" },
      { name: "Zapier", useCase: "Instant triggers, app zaps & rapid tool bridging", level: "Expert" },
      { name: "n8n", useCase: "Self-hosted privacy-focused workflow automation", level: "Advanced" },
      { name: "Custom Webhooks & REST APIs", useCase: "Direct database connections & custom endpoint pipelines", level: "Core Stack" }
    ]
  },
  {
    category: "AI & Agent Frameworks",
    badge: "INTELLIGENCE // 24/7 AGENTS",
    desc: "Autonomous bots that perform actual labor instead of just spitting out FAQs.",
    tools: [
      { name: "OpenAI GPT-4o / Claude 3.5 Sonnet", useCase: "LLM fine-tuning, system prompts & cognitive workflows", level: "Core Stack" },
      { name: "Pinecone & Supabase pgvector", useCase: "RAG vector databases for zero-hallucination answers", level: "Expert" },
      { name: "LangChain & Flowise", useCase: "Chained reasoning agents & automated tool-calling", level: "Advanced" },
      { name: "Voice AI (Vapi / Retell / Bland)", useCase: "Autonomous inbound & outbound phone calling agents", level: "Certified" }
    ]
  },
  {
    category: "Operations, PM & Cloud Databases",
    badge: "ORGANIZATION // INFRASTRUCTURE",
    desc: "Streamlined task management, client portals, and cloud data architecture.",
    tools: [
      { name: "ClickUp", useCase: "Client onboarding templates, task automation & team boards", level: "Mastery" },
      { name: "Notion & Linear", useCase: "Company wikis, technical roadmaps & internal SOP vaults", level: "Expert" },
      { name: "Airtable", useCase: "Relational cloud bases, forms & internal business tools", level: "Mastery" },
      { name: "Supabase & PostgreSQL", useCase: "Scalable authentication, secure tables & row-level security", level: "Core Stack" },
      { name: "Google Workspace & Office 365", useCase: "Enterprise email security, SPF/DKIM & cloud storage", level: "Mastery" }
    ]
  },
  {
    category: "Marketing, Media & Search Visibility",
    badge: "GROWTH // ASSETS",
    desc: "Everything required to get noticed, indexed, and convert organic attention.",
    tools: [
      { name: "Google Search Console & GA4", useCase: "Instant page indexing, sitemap submissions & conversion analytics", level: "Mastery" },
      { name: "Google Business Profile (GBP)", useCase: "Local search map dominance & automated review engines", level: "Mastery" },
      { name: "Klaviyo & ActiveCampaign", useCase: "Automated email sequences, segmenting & cart recovery", level: "Expert" },
      { name: "Adobe Premiere & CapCut Pro", useCase: "High-retention short-form video reels & kinetic subtitling", level: "Expert" },
      { name: "Figma", useCase: "Brand identity kits, vector palettes & UI/UX wireframes", level: "Core Stack" }
    ]
  }
];

const SoftwareStack = () => {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <SectionLabel>Tools & Ecosystem Mastery</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
            Our Software <br /> <span className="text-emerald-400">Stack.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 max-w-[850px] leading-relaxed">
            Here are the platforms, languages, and tools our team builds with every day.
          </p>

          {/* Reassurance Banner */}
          <div className="mt-12 p-8 border border-emerald-500/40 bg-emerald-950/30 flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 bg-emerald-500 text-black shrink-0">
              <HeartHandshake size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                Don't Stress: You Don't Need to Pick or Learn Any of This!
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                You never have to waste 100 hours running trials or comparing 50 different apps. That's literally why we exist! We listen to your goals, pick the exact right tools for your business size, configure everything, and hand you a simple, self-running engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {softwareCategories.map((cat, i) => (
              <div key={i} className="border border-white/15 p-8 md:p-12 bg-white/[0.02]">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
                  <div>
                    <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">
                      {cat.badge}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-sm max-w-[420px]">{cat.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.tools.map((t, j) => (
                    <div key={j} className="border border-white/10 p-6 bg-black/50 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-black uppercase text-white">{t.name}</h4>
                          <span className="mono text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/30">
                            {t.level}
                          </span>
                        </div>
                        <p className="text-zinc-300 text-xs leading-relaxed mono mb-4">{t.useCase}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 mono pt-2 border-t border-white/5">
                        <CheckCircle2 size={13} className="text-emerald-400" /> Fully Supported & Integrated
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 border border-emerald-500 bg-emerald-950/40 p-10 md:p-16 text-center space-y-6">
            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Have a tool not listed here?
            </h3>
            <p className="text-zinc-300 max-w-[650px] mx-auto text-base leading-relaxed">
              If it has an API or webhook, we can connect it into your ecosystem seamlessly. Let's look at your current stack on a quick call.
            </p>
            <div className="pt-2">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-black px-10 py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover">
                <Link to="/contact">Book Free Consultation <ArrowRight size={18} className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SoftwareStack;