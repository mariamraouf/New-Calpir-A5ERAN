"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import MetaSEO from '@/components/seo/MetaSEO';

const Blog = () => {
  const posts = [
    { 
      id: "01", 
      tag: "FOUNDER_GUIDE", 
      title: "How to Set Up a New Business in 2026: The Ultimate Founder's Blueprint", 
      excerpt: "A comprehensive 2,000-word step-by-step roadmap covering incorporation, legal structures, tech stack setup, and revenue engines.", 
      author: "Calpir Experts",
      date: "March 28, 2026",
      readTime: "22 min read",
      link: "/blog/how-to-setup-new-business-2026" 
    },
    { 
      id: "02", 
      tag: "STRATEGY", 
      title: "Where to Begin? The Essential First 30 Days of Launching Your Business", 
      excerpt: "What to prioritize and what to ignore in your first month. Learn how to launch fast without burning capital.", 
      author: "Calpir Experts",
      date: "March 26, 2026",
      readTime: "18 min read",
      link: "/blog/what-to-start-with-launch-guide" 
    },
    { 
      id: "03", 
      tag: "CRM_COMPARISON", 
      title: "The Definitive 2026 CRM Comparison: HubSpot vs GoHighLevel vs Salesforce vs Zoho", 
      excerpt: "An in-depth technical analysis of top CRM platforms to help you pick the exact sales system for your stage.", 
      author: "Calpir Experts",
      date: "March 25, 2026",
      readTime: "20 min read",
      link: "/blog/best-crm-tools-comparison" 
    },
    { 
      id: "04", 
      tag: "AI_AGENTS", 
      title: "How Autonomous AI Agents Are Replacing Traditional SaaS Tools", 
      excerpt: "Why paying $50/user/month for legacy SaaS is dying and how custom AI agents cut software operational costs by 70%.", 
      author: "Calpir Experts",
      date: "March 24, 2026",
      readTime: "16 min read",
      link: "/blog/ai-agents-replacing-saas" 
    },
    { 
      id: "05", 
      tag: "AUTOMATION", 
      title: "The Golden Tech Stack: Essential Automations Every Modern Business Needs", 
      excerpt: "Detailed architectural guide to connecting your website, CRM, invoicing, and support into a self-running system.", 
      author: "Calpir Experts",
      date: "March 23, 2026",
      readTime: "19 min read",
      link: "/blog/essential-tech-stack-automations" 
    },
    { 
      id: "06", 
      tag: "LEGAL", 
      title: "Setting Up a UK Limited Company: The Complete Founder's Guide", 
      excerpt: "Everything you need to know about Companies House, VAT, virtual offices, and legalizing your Bristol startup.", 
      author: "Calpir Experts",
      date: "March 22, 2026",
      readTime: "15 min read",
      link: "/blog/setup-uk-limited-company" 
    },
    { 
      id: "07", 
      tag: "LEGAL", 
      title: "Launching a US LLC as a Foreign Founder: Step-by-Step Guide", 
      excerpt: "How to set up your US entity, get an EIN without an SSN, and open US bank accounts remotely from anywhere.", 
      author: "Calpir Experts",
      date: "March 20, 2026",
      readTime: "14 min read",
      link: "/blog/setup-us-llc-foreign-founder" 
    },
    { 
      id: "08", 
      tag: "AI_AGENTS", 
      title: "How to Deploy AI Agents for 24/7 Customer Support & Sales", 
      excerpt: "Stop losing leads at 3 AM. Build RAG-powered agents that access your CRM and schedule qualified meetings.", 
      author: "Calpir Experts",
      date: "March 18, 2026",
      readTime: "17 min read",
      link: "/blog/deploy-ai-agents-support" 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Blog | Calpir"
        description="Notes on AI automation, CRM design and launching a business faster."
        path="/blog"
      />
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>The Intelligence Hub</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">Insights.</h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-[800px] mb-16 leading-relaxed">
            In-depth guides, technical comparisons, and operational blueprints published by the engineering team at Calpir.
          </p>
          
          <div className="space-y-px bg-zinc-200 border border-zinc-200 shadow-sm">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={post.link}
                className="group bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-emerald-50/60 transition-all block"
              >
                <div className="max-w-[800px]">
                  <div className="flex flex-wrap items-center gap-3 mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
                    <span className="text-emerald-800 font-bold">[{post.id}] // {post.tag}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User size={13} className="text-emerald-700" /> {post.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={13} className="text-emerald-700" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950 group-hover:text-emerald-700 transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-6 md:mt-0 shrink-0">
                  <div className="w-14 h-14 border border-zinc-300 flex items-center justify-center text-zinc-900 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;