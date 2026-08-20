"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Zap, CheckCircle2, Globe } from 'lucide-react';
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
        "Complete bilingual Arabic and English high conversion website",
        "Integrated patient management CRM",
        "Automated appointment scheduling and reminders",
        "Full brand identity and digital assets",
        "Operational workflows for medical staff"
      ],
      timeline: "21 days",
      results: [
        { label: "Launch", value: "100%", icon: <Zap size={20} /> },
        { label: "Market Ready", value: "Day 1", icon: <Globe size={20} /> }
      ],
      quote: "Calpir built our entire company digital nervous system from scratch. We went from an idea to a fully operational startup in weeks.",
      author: "Founder, Amad Health",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "Create More Productions",
      industry: "Media Production // Michigan, USA",
      title: "The Production Powerhouse System",
      challenge: "A Michigan based production company struggling with fragmented tools and manual project tracking.",
      built: [
        "End to end business management system",
        "Automated client onboarding and contract signing",
        "Project management integration with real time tracking",
        "Financial automation for invoicing and payments",
        "Custom CRM for high ticket production leads"
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
      client: "7 Figure Enterprise",
      industry: "Professional Services // Canada",
      title: "Scaling a Canadian Giant",
      challenge: "A 7 figure plus company in Canada outgrowing their legacy systems and needing a modern, AI ready infrastructure.",
      built: [
        "Enterprise grade website architecture",
        "Advanced AI powered lead qualification system",
        "Custom workflow automations for high volume operations",
        "Integrated CRM with 7 figure pipeline management",
        "Automated reporting and data visualization"
      ],
      timeline: "28 days",
      results: [
        { label: "Revenue", value: "7 Figure+", icon: <TrendingUp size={20} /> },
        { label: "AI Deflection", value: "65%", icon: <Zap size={20} /> }
      ],
      quote: "Calpir did not just build a website; they built a scalable engine that supports our 7 figure growth.",
      author: "Managing Director, Canada",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-white/15">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
              Case <br /> <span className="text-emerald-400">Studies.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-32">
            {cases.map((c, i) => (
              <motion.div key={c.id} {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-emerald-400 text-xs font-bold mb-4 tracking-widest">
                    [{c.id}] // {c.industry}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">{c.title}</h2>
                  
                  <div className="space-y-8 mb-8">
                    <div>
                      <div className="mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">Challenge</div>
                      <p className="text-zinc-200 text-base leading-relaxed">{c.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3">What We Built</div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.built.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 mono text-xs text-zinc-200 uppercase tracking-wider font-semibold">
                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {c.results.map((res, idx) => (
                        <div key={idx} className="border border-white/15 p-6 bg-white/[0.03]">
                          <div className="text-4xl font-black text-emerald-400 mb-1">{res.value}</div>
                          <div className="mono text-xs uppercase tracking-wider font-bold text-zinc-300">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-l-4 border-emerald-400 pl-6 py-4 bg-emerald-950/20 border-white/10">
                      <p className="text-lg italic text-zinc-200 mb-3">"{c.quote}"</p>
                      <div className="font-black uppercase text-xs tracking-wider text-emerald-400">{c.author}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`aspect-video bg-white/5 border border-white/15 overflow-hidden relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Client</div>
                    <div className="text-2xl font-black uppercase text-white">{c.client}</div>
                    <div className="mono text-xs uppercase tracking-wider font-bold text-emerald-400 mt-1">Timeline: {c.timeline}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-emerald-500 text-black text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-7xl mb-8 font-black uppercase tracking-tight text-black">Ready for Your Own <br /> Success Story?</h2>
          <Button asChild className="bg-black text-white hover:bg-zinc-900 px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight transition-all">
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