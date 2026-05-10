"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Database, Bot, Workflow, 
  CheckCircle2, ArrowRight, Shield, 
  Cpu, Layers, Code2, Terminal,
  Search, BarChart, Zap, Brain, Code
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
      icon: <Globe className="text-[#064e3b]" size={40} />,
      desc: "We don't build sites. We build high performance digital storefronts engineered for speed and conversion. Every line of code is optimized for SEO and user retention.",
      longDesc: "Our web development process is rooted in technical excellence. We prioritize Core Web Vitals, ensuring your site loads in under 1.5 seconds globally. By using server side rendering (SSR) and static site generation (SSG), we provide a lightning fast experience.",
      features: [
        "Custom React & Next.js Development",
        "Edge Network Content Delivery",
        "Technical SEO & Schema Markup",
        "Conversion Rate Optimization Design",
        "Mobile First Responsive Architecture",
        "Accessibility Compliance"
      ],
      slug: "website-development"
    },
    {
      id: "02",
      title: "Integrated CRM & Sales Systems",
      icon: <Database className="text-[#064e3b]" size={40} />,
      desc: "Your website should be your best salesperson. We integrate your site directly with industry leading CRMs to ensure every lead is captured automatically.",
      longDesc: "A CRM is only as good as its implementation. We go beyond basic setup, creating custom objects, automated pipelines, and deep data enrichment. Whether it's HubSpot or GoHighLevel, we ensure your CRM is the single source of truth.",
      features: [
        "CRM Setup & Custom Object Configuration",
        "Automated Lead Scoring & Routing",
        "Sales Pipeline Visualization",
        "Real time Data Synchronization",
        "Custom Dashboard & Reporting",
        "Team Training & Adoption Support"
      ],
      slug: "crm-sales"
    },
    {
      id: "03",
      title: "Autonomous AI Agents",
      icon: <Bot className="text-[#064e3b]" size={40} />,
      desc: "Deploy 24/7 intelligent agents that handle customer support, qualify leads, and book meetings. Our AI agents learn your business and interact naturally.",
      longDesc: "We build agents using Retrieval Augmented Generation (RAG), connecting them to your specific business documentation. This ensures they provide accurate, brand aligned answers. Our agents don't just talk; they take action.",
      features: [
        "Custom LLM Training on Your Data",
        "Multi channel Support",
        "Automated Meeting Scheduling",
        "Instant Lead Qualification",
        "Natural Language Processing",
        "Continuous Learning Cycles"
      ],
      slug: "ai-agents"
    },
    {
      id: "04",
      title: "Custom Apps & Agents",
      icon: <Code className="text-[#064e3b]" size={40} />,
      desc: "We turn your complex business logic into high performance software. Custom SaaS, internal tools, or specialized AI agents built for your unique needs.",
      longDesc: "Our engineering team specializes in building bespoke applications that solve specific operational challenges. From complex data dashboards to autonomous agent fleets, we build robust, scalable software that drives actual business value.",
      features: [
        "Full Stack Web Application Development",
        "Bespoke SaaS Architecture",
        "Custom AI Agent Fleets",
        "Internal Tooling & Dashboards",
        "API First Development",
        "Scalable Cloud Infrastructure"
      ],
      slug: "custom-apps"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Capabilities</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-12 font-black uppercase tracking-tighter">
              Our <br /> <span className="text-[#064e3b]">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-[800px] mono leading-relaxed">
              We provide the technical foundation for modern businesses. From initial architecture to autonomous operations, we build the systems that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="space-y-48">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={service.id}
                {...reveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-sm font-bold mb-6 tracking-widest">
                    [{service.id}] // MODULE_SPEC
                  </div>
                  <div className="mb-8">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl mb-8 font-black uppercase tracking-tighter">{service.title}</h2>
                  <p className="text-white/50 mono text-lg leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <p className="text-white/30 mono text-sm leading-relaxed mb-10">
                    {service.longDesc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 mono text-[0.7rem] text-white/70 uppercase tracking-widest">
                        <CheckCircle2 size={14} className="text-[#064e3b]" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="border-white/10 text-white px-8 py-6 rounded-none font-black uppercase tracking-tighter hover:bg-white hover:text-black">
                    <Link to={`/services/${service.slug}`}>Explore Module <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
                </div>
                <div className={`aspect-square bg-white/5 border border-white/10 relative overflow-hidden group ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b]/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    <div className="mono text-[0.6rem] text-white/10 whitespace-pre font-bold mb-8">
                      {`// INITIALIZING_${service.title.toUpperCase().replace(/ /g, '_')}\n// LOADING_RESOURCES...\n// OPTIMIZING_PERFORMANCE...\n// STATUS: READY`}
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full opacity-20 group-hover:opacity-40 transition-opacity">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="aspect-square border border-white/20 flex items-center justify-center">
                          <div className="w-1 h-1 bg-[#064e3b] rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
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