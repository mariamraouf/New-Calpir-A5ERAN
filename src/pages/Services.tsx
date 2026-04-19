"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Database, Bot, Workflow, 
  CheckCircle2, ArrowRight, Shield, 
  Cpu, Layers, Code2, Terminal,
  Search, BarChart, Zap, Brain
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
      title: "High-Conversion Web Architecture",
      icon: <Globe className="text-[#064e3b]" size={40} />,
      desc: "We don't build 'sites'. We build high-performance digital storefronts engineered for speed and conversion. Every line of code is optimized for SEO and user retention. Our architecture is built on the latest React frameworks, ensuring your business is ready for the future of the web.",
      longDesc: "Our web development process is rooted in technical excellence. We prioritize Core Web Vitals, ensuring your site loads in under 1.5 seconds globally. By using server-side rendering (SSR) and static site generation (SSG), we provide a lightning-fast experience that search engines love. We don't use bloated templates; every component is custom-coded for your specific business needs.",
      features: [
        "Custom React & Next.js Development",
        "Edge-Network Content Delivery (Vercel/Cloudflare)",
        "Technical SEO & Schema Markup Implementation",
        "Conversion Rate Optimization (CRO) Design",
        "Mobile-First, Responsive Architecture",
        "Accessibility (A11y) Compliance"
      ],
      slug: "website-development"
    },
    {
      id: "02",
      title: "Integrated CRM & Sales Systems",
      icon: <Database className="text-[#064e3b]" size={40} />,
      desc: "Your website should be your best salesperson. We integrate your site directly with industry-leading CRMs to ensure every lead is captured, scored, and tracked automatically. We eliminate data silos and ensure your sales team has the information they need to close deals.",
      longDesc: "A CRM is only as good as its implementation. We go beyond basic setup, creating custom objects, automated pipelines, and deep data enrichment. Whether it's HubSpot or GoHighLevel, we ensure your CRM is the 'single source of truth' for your entire organization. We automate the boring stuff so your team can focus on building relationships.",
      features: [
        "CRM Setup & Custom Object Configuration",
        "Automated Lead Scoring & Intelligent Routing",
        "Sales Pipeline Visualization & Forecasting",
        "Real-time Data Synchronization across tools",
        "Custom Dashboard & Reporting Setup",
        "Team Training & Adoption Support"
      ],
      slug: "crm-sales"
    },
    {
      id: "03",
      title: "Autonomous AI Agents",
      icon: <Bot className="text-[#064e3b]" size={40} />,
      desc: "Deploy 24/7 intelligent agents that handle customer support, qualify leads, and book meetings. Our AI agents learn your business and interact with customers in natural language, providing a human-like experience at scale.",
      longDesc: "We build agents using Retrieval-Augmented Generation (RAG), connecting them to your specific business documentation. This ensures they provide accurate, brand-aligned answers. Our agents don't just talk; they take action—booking meetings, updating CRM records, and escalating complex issues to your human team when necessary.",
      features: [
        "Custom LLM Training on Your Business Data",
        "Multi-channel Support (Web, WhatsApp, Email)",
        "Automated Meeting Scheduling & Calendar Sync",
        "Instant Lead Qualification & Scoring",
        "Natural Language Processing (NLP) Optimization",
        "Continuous Learning & Retraining Cycles"
      ],
      slug: "ai-agents"
    },
    {
      id: "04",
      title: "End-to-End Workflow Automation",
      icon: <Workflow className="text-[#064e3b]" size={40} />,
      desc: "Eliminate manual busywork. We map your business processes and automate the repetitive tasks, saving your team 20+ hours every single week. Our automations connect your entire tech stack into one seamless engine.",
      longDesc: "Automation is the secret to scaling without increasing overhead. We use tools like Make.com and Zapier to build complex, multi-step workflows that handle everything from invoicing to social media distribution. We audit your current processes, identify bottlenecks, and build resilient automations that grow with your business.",
      features: [
        "Automated Email & SMS Nurture Sequences",
        "Invoice & Payment Processing Automation",
        "Internal Task Routing & Slack Notifications",
        "Cross-Platform Data Integrations (API-first)",
        "Social Media Content Repurposing & Scheduling",
        "Automated KPI Reporting & Data Visualization"
      ],
      slug: "ai-automation"
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
              We provide the technical foundation for modern businesses. From initial architecture to autonomous operations, we build the systems that drive growth. Our Bristol-based team of engineers and strategists are dedicated to your success.
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

      {/* Technical Philosophy */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <SectionLabel>Technical Philosophy</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">Engineered for <br /> Resilience.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Modular Architecture", icon: <Layers />, desc: "We build in modules. This means you can swap, upgrade, or expand any part of your system without breaking the rest. Our code is clean, documented, and built to last." },
              { title: "Security First", icon: <Shield />, desc: "From SSL to encrypted data pipelines, we ensure your business and customer data is protected by enterprise-grade security. We follow best practices for data privacy and compliance." },
              { title: "Performance Obsessed", icon: <Cpu />, desc: "Every millisecond counts. We optimize for speed at every layer, from server response times to front-end rendering. Fast systems lead to better user experiences and higher conversions." }
            ].map((p, i) => (
              <div key={i} className="space-y-6 border border-white/10 p-12 bg-black">
                <div className="text-[#064e3b]">{React.cloneElement(p.icon as React.ReactElement<any>, { size: 32 })}</div>
                <h3 className="text-2xl">{p.title}</h3>
                <p className="text-white/40 mono text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionLabel>The Deployment Process</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">How We Build.</h2>
          <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
            {[
              { step: "01", title: "Discovery & Audit", desc: "We analyze your current tools, identify bottlenecks, and map out your ideal technical state. We listen to your goals and challenges.", icon: <Terminal size={24} /> },
              { step: "02", title: "System Design", desc: "We create a blueprint of your integrated ecosystem, ensuring every tool talks to every other tool. We design for scalability and efficiency.", icon: <Code2 size={24} /> },
              { step: "03", title: "Rapid Deployment", desc: "Our engineers build and configure your entire stack, from website to AI agents, in record time. We maintain high standards of quality throughout.", icon: <Zap size={24} /> },
              { step: "04", title: "Optimization", desc: "We monitor performance, retrain AI models, and fine-tune workflows for maximum efficiency. We provide ongoing support to ensure your success.", icon: <Cpu size={24} /> }
            ].map((s, i) => (
              <div key={i} className="bg-black p-12 flex flex-col md:flex-row md:items-center gap-12 group hover:bg-[#064e3b]/5 transition-all">
                <div className="text-4xl font-black text-[#064e3b] mono">{s.step}</div>
                <div className="flex-grow">
                  <h3 className="text-2xl mb-2 flex items-center gap-4">
                    {s.title} <span className="text-white/10 group-hover:text-[#064e3b]/20 transition-colors">{s.icon}</span>
                  </h3>
                  <p className="text-white/40 mono text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#064e3b] text-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-7xl mb-12 font-black uppercase tracking-tighter">Ready to Upgrade <br /> Your Infrastructure?</h2>
          <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-12 py-6 text-xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all inline-block">
            Book a Technical Audit
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;