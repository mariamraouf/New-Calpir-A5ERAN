"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Zap, CheckCircle2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const cases = [
    {
      id: "01",
      client: "Amad Health",
      industry: "HealthTech Startup // Saudi Arabia",
      title: "From Zero to Full Infrastructure",
      challenge: "A startup in Saudi Arabia with nothing but a vision. No digital presence, no systems, and no technical foundation.",
      built: [
        "Complete bilingual (Arabic/English) high-conversion website",
        "Integrated patient management CRM",
        "Automated appointment scheduling & reminders",
        "Full brand identity and digital assets",
        "Operational workflows for medical staff"
      ],
      timeline: "21 days",
      results: [
        { label: "Launch", value: "100%", icon: <Zap size={20} /> },
        { label: "Market Ready", value: "Day 1", icon: <Globe size={20} /> }
      ],
      quote: "Calpir built our entire company's digital nervous system from scratch. We went from an idea to a fully operational startup in weeks.",
      author: "Founder, Amad Health",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "Create More Productions",
      industry: "Media Production // Michigan, USA",
      title: "The Production Powerhouse System",
      challenge: "A Michigan-based production company struggling with fragmented tools and manual project tracking.",
      built: [
        "End-to-end business management system",
        "Automated client onboarding and contract signing",
        "Project management integration with real-time tracking",
        "Financial automation for invoicing and payments",
        "Custom CRM for high-ticket production leads"
      ],
      timeline: "14 days",
      results: [
        { label: "Efficiency", value: "+85%", icon: <TrendingUp size={20} /> },
        { label: "Admin Saved", value: "30h/wk", icon: <Clock size={20} /> }
      ],
      quote: "Our entire business now runs on a single, unified system. No more chasing emails or lost files.",
      author: "CEO, Create More Productions",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      client: "7-Figure Enterprise",
      industry: "Professional Services // Canada",
      title: "Scaling a Canadian Giant",
      challenge: "A 7+ figure company in Canada outgrowing their legacy systems and needing a modern, AI-ready infrastructure.",
      built: [
        "Enterprise-grade website architecture",
        "Advanced AI-powered lead qualification system",
        "Custom workflow automations for high-volume operations",
        "Integrated CRM with 7-figure pipeline management",
        "Automated reporting and data visualization"
      ],
      timeline: "28 days",
      results: [
        { label: "Revenue", value: "7-Figure+", icon: <TrendingUp size={20} /> },
        { label: "AI Deflection", value: "65%", icon: <Zap size={20} /> }
      ],
      quote: "Calpir didn't just build a website; they built a scalable engine that supports our 7-figure growth.",
      author: "Managing Director, Canada",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Case <br /> <span className="text-[#064e3b]">Studies.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-48">
            {cases.map((c, i) => (
              <motion.div key={c.id} {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-xs font-bold mb-6 tracking-widest">
                    [{c.id}] // {c.industry}
                  </div>
                  <h2 className="text-4xl md:text-6xl mb-8">{c.title}</h2>
                  
                  <div className="space-y-12 mb-12">
                    <div>
                      <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-4">Challenge</div>
                      <p className="text-white/60 mono text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-4">What We Built</div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {c.built.map((item) => (
                          <li key={item} className="flex items-center gap-3 mono text-[0.6rem] uppercase tracking-widest text-white/40">
                            <CheckCircle2 size={14} className="text-[#064e3b]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      {c.results.map((res, idx) => (
                        <div key={idx} className="border border-white/10 p-8 bg-white/5">
                          <div className="text-4xl font-black text-[#064e3b] mb-1">{res.value}</div>
                          <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-l-4 border-[#064e3b] pl-8 py-4 bg-white/5">
                      <p className="text-xl mono italic mb-4">"{c.quote}"</p>
                      <div className="font-black uppercase text-sm">{c.author}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`aspect-video bg-white/5 border border-white/10 overflow-hidden relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-1">Client</div>
                    <div className="text-2xl font-black uppercase">{c.client}</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-[#064e3b] mt-2">Timeline: {c.timeline}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#064e3b] text-white text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-8xl mb-12 font-black uppercase tracking-tighter">Ready for Your Own <br /> Success Story?</h2>
          <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;