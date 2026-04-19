"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MousePointer2, BarChart3, MessageSquare, Zap, 
  CheckCircle2, ArrowRight, Globe, Database, 
  Bot, Workflow 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';

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
      desc: "We don't build 'sites'. We build high-performance digital storefronts engineered for speed and conversion. Every line of code is optimized for SEO and user retention.",
      features: [
        "Custom React & Next.js Development",
        "Edge-Network Content Delivery",
        "Technical SEO & Core Web Vitals Optimization",
        "Conversion Rate Optimization (CRO) Design"
      ]
    },
    {
      id: "02",
      title: "Integrated CRM & Sales Systems",
      icon: <Database className="text-[#064e3b]" size={40} />,
      desc: "Your website should be your best salesperson. We integrate your site directly with industry-leading CRMs to ensure every lead is captured, scored, and tracked automatically.",
      features: [
        "CRM Setup & Custom Configuration",
        "Automated Lead Scoring & Routing",
        "Sales Pipeline Visualization",
        "Real-time Data Synchronization"
      ]
    },
    {
      id: "03",
      title: "Autonomous AI Agents",
      icon: <Bot className="text-[#064e3b]" size={40} />,
      desc: "Deploy 24/7 intelligent agents that handle customer support, qualify leads, and book meetings. Our AI agents learn your business and interact with customers in natural language.",
      features: [
        "Custom LLM Training on Your Data",
        "Multi-channel Support (Web, WhatsApp, Email)",
        "Automated Meeting Scheduling",
        "Instant Lead Qualification"
      ]
    },
    {
      id: "04",
      title: "End-to-End Workflow Automation",
      icon: <Workflow className="text-[#064e3b]" size={40} />,
      desc: "Eliminate manual busywork. We map your business processes and automate the repetitive tasks, saving your team 20+ hours every single week.",
      features: [
        "Automated Email & SMS Sequences",
        "Invoice & Payment Automation",
        "Internal Task Routing & Notifications",
        "Cross-Platform Data Integrations"
      ]
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
      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={service.id}
                {...reveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-sm font-bold mb-6 tracking-widest">
                    [{service.id}] // MODULE_SPEC
                  </div>
                  <div className="mb-8">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl mb-8 font-black uppercase tracking-tighter">{service.title}</h2>
                  <p className="text-white/50 mono text-lg leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 mono text-sm text-white/70 uppercase tracking-widest">
                        <CheckCircle2 size={18} className="text-[#064e3b]" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-video bg-white/5 border border-white/10 relative overflow-hidden group ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b]/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mono text-[0.6rem] text-white/10 p-8 whitespace-pre font-bold">
                      {`// INITIALIZING_${service.title.toUpperCase().replace(/ /g, '_')}\n// LOADING_RESOURCES...\n// OPTIMIZING_PERFORMANCE...\n// STATUS: READY`}
                    </div>
                  </div>
                </div>
              </motion.div>
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