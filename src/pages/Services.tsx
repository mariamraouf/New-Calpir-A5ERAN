"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Database, Bot, CheckCircle2, ArrowRight, Code
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const serviceDetails = [
    {
      id: "01",
      title: "High Conversion Web Architecture",
      icon: <Globe className="text-emerald-700" size={40} />,
      desc: "We don't build standard brochure sites. We build high-performance digital storefronts engineered for sub-second speed and maximum conversion. Every line of code is optimized for SEO and customer retention.",
      longDesc: "Our web development process is rooted in technical excellence. We prioritize Core Web Vitals, ensuring your site loads in under 1.5 seconds globally using modern React & Next.js architectures with edge network delivery.",
      features: [
        "Custom React & Next.js Development",
        "Edge Network Content Delivery",
        "Technical SEO & Schema Markup",
        "Conversion Rate Optimization Design",
        "Mobile-First Responsive Architecture",
        "Accessibility Compliance"
      ],
      slug: "website-development"
    },
    {
      id: "02",
      title: "Integrated CRM & Sales Systems",
      icon: <Database className="text-emerald-700" size={40} />,
      desc: "Your website should be your best salesperson. We integrate your site directly with industry-leading CRMs to ensure every lead is captured, routed, and followed up with automatically.",
      longDesc: "A CRM is only as good as its implementation. We go beyond basic setup, creating custom objects, automated pipelines, and deep data enrichment across HubSpot or GoHighLevel so your sales engine is fully synchronized.",
      features: [
        "CRM Setup & Custom Pipeline Configuration",
        "Automated Lead Scoring & Instant Routing",
        "Sales Pipeline Visualization & Tracking",
        "Real-Time Data Synchronization",
        "Custom Dashboard & Reporting",
        "Team Training & Onboarding"
      ],
      slug: "crm-sales"
    },
    {
      id: "03",
      title: "Autonomous AI Agents",
      icon: <Bot className="text-emerald-700" size={40} />,
      desc: "Deploy 24/7 intelligent agents that handle customer support, qualify leads, and book meetings. Our AI agents learn your business and interact naturally with zero hallucination.",
      longDesc: "We build agents using Retrieval-Augmented Generation (RAG), connecting them to your specific company documentation. This ensures they provide accurate, brand-aligned answers and trigger actual business workflows.",
      features: [
        "Custom LLM Training on Company Data",
        "Multi-Channel Support (Web, WhatsApp, Slack)",
        "Automated Meeting Scheduling",
        "Instant Lead Qualification",
        "Natural Language Processing",
        "Continuous Learning & Auditing"
      ],
      slug: "ai-agents"
    },
    {
      id: "04",
      title: "Custom Apps & Agents",
      icon: <Code className="text-emerald-700" size={40} />,
      desc: "We turn your complex business logic into high-performance software. Custom SaaS platforms, internal tools, or specialized AI agent fleets built specifically for your unique needs.",
      longDesc: "Our engineering team specializes in building bespoke applications that solve specific operational challenges. From complex client portals to autonomous agent fleets, we build robust software that drives real business value.",
      features: [
        "Full-Stack Web Application Development",
        "Bespoke SaaS Architecture",
        "Custom AI Agent Fleets",
        "Internal Tooling & Dashboards",
        "API-First Architecture",
        "Scalable Cloud Infrastructure"
      ],
      slug: "custom-apps"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Capabilities</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">
              Our <br /> <span className="text-emerald-700">Services.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 max-w-[800px] leading-relaxed">
              We provide the technical foundation for modern businesses. From initial architecture to autonomous operations, we build the systems that drive real growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-24 px-6 border-b border-zinc-200">
        <div className="container-custom">
          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={service.id}
                {...reveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-emerald-800 text-xs font-bold mb-4 tracking-widest">
                    [{service.id}] // MODULE_SPEC
                  </div>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-5xl mb-6 font-black uppercase tracking-tight text-zinc-950">{service.title}</h2>
                  <p className="text-zinc-800 text-lg leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                    {service.longDesc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 mono text-xs text-zinc-700 uppercase tracking-wider font-semibold">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="border-zinc-300 text-zinc-900 px-8 py-6 rounded-none font-bold uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                    <Link to={`/services/${service.slug}`}>Explore Module <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
                </div>
                <div className={`aspect-square bg-zinc-50 border border-zinc-200 relative overflow-hidden group shadow-sm ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    <div className="mono text-xs text-emerald-900 whitespace-pre font-bold mb-8 text-center leading-relaxed">
                      {`// INITIALIZING_${service.title.toUpperCase().replace(/ /g, '_')}\n// LOADING_RESOURCES...\n// OPTIMIZING_PERFORMANCE...\n// STATUS: READY`}
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full opacity-40 group-hover:opacity-80 transition-opacity">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="aspect-square border border-emerald-500/30 flex items-center justify-center bg-white">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;