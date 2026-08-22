"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  CheckCircle2, Zap, Database, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, any> = {
    'how-to-setup-new-business-2026': {
      tag: "FOUNDER_GUIDE",
      title: "How to Set Up a New Business in 2026: The Ultimate Founder's Blueprint",
      author: "Calpir Experts",
      date: "March 28, 2026",
      readTime: "22 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
          <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
            The definitive 2026 playbook for taking an idea from raw concept to an integrated, revenue-generating automated business.
          </p>

          <p>
            Launching a business in 2026 looks fundamentally different than it did even three years ago. The days of spending six months hiring separate web developers, brand designers, lawyers, and CRM specialists are officially over. Today, competitive advantage is defined by <strong className="text-zinc-950">speed of execution, seamless tool integration, and AI-native operations</strong>.
          </p>

          <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
            Phase 1: Legal Entity & Corporate Foundation
          </h2>
          <p>
            Before you build a landing page or run an ad, you need a legitimate legal structure that protects your personal assets and prepares you for scale or future capital investment.
          </p>

          <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">
            1. Jurisdiction Selection (UK Ltd vs. US LLC vs. Local Entity)
          </h3>
          <p>
            Depending on your primary target market, select your incorporation jurisdiction wisely:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
            <li><strong className="text-zinc-950">UK Limited Company:</strong> Ideal if serving European or UK clients. Rapid incorporation via Companies House (under £50) with low ongoing admin.</li>
            <li><strong className="text-zinc-950">US LLC (Wyoming or Delaware):</strong> Perfect for international founders who want access to US banking (Mercury/Relay), USD client invoicing, and Stripe payments.</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">
            2. Tax & Compliance Registration
          </h3>
          <p>
            Ensure you obtain your tax identifiers immediately upon formation:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
            <li><strong className="text-zinc-950">UK:</strong> Corporation Tax registration with HMRC within 3 months, voluntary VAT registration if claiming back setup expenses.</li>
            <li><strong className="text-zinc-950">US:</strong> Obtain an EIN (Employer Identification Number) from the IRS via Form SS-4.</li>
          </ul>

          <div className="my-8 p-8 border border-emerald-300 bg-emerald-50 space-y-4 shadow-sm">
            <h4 className="text-lg font-black text-zinc-950 uppercase">Calpir Expert Tip: Virtual Registered Address</h4>
            <p className="text-sm text-zinc-700">
              Never register a commercial business directly to your personal home address. Public registries can expose personal location data. Use a premium virtual business address in a tech hub like Bristol or Wilmington for professional credibility.
            </p>
          </div>

          <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
            Phase 2: High-Conversion Digital Infrastructure
          </h2>
          <p>
            Your website is not a brochure—it is your primary 24/7 sales engine. Avoid heavy, slow, legacy builders like WordPress or Wix that accumulate plugin bloat.
          </p>

          <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">
            1. Web Architecture Stack
          </h3>
          <p>
            In 2026, modern web standards demand a sub-1.5 second load time. Build with modern JavaScript frameworks like Next.js or React deployed on Vercel or Cloudflare Edge networks. This guarantees 100/100 Core Web Vitals and peak Google SEO performance.
          </p>

          <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">
            2. Messaging & Conversion Principles
          </h3>
          <p>
            Structure your homepage using the proven 5-step conversion framework:
          </p>
          <ol className="list-decimal pl-8 space-y-2 text-sm text-zinc-700">
            <li><strong className="text-zinc-950">Hero Section:</strong> Bold outcome statement + clear call to action (e.g., "Launch in 7 Days").</li>
            <li><strong className="text-zinc-950">Social Proof / Metrics:</strong> Logos, client stats, or verified reviews above the fold.</li>
            <li><strong className="text-zinc-950">Problem & Solution Grid:</strong> Explicit contrast between the old painful way and your new system.</li>
            <li><strong className="text-zinc-950">Interactive ROI / Calculator Component:</strong> Let prospects self-qualify their potential impact.</li>
            <li><strong className="text-zinc-950">Single Lead Capture Action:</strong> One direct booking link or high-value assessment.</li>
          </ol>

          <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
            Phase 3: The Unified Revenue Engine (CRM & Automations)
          </h2>
          <p>
            A website without a connected CRM is an expensive bucket with a hole in the bottom. Every inquiry must instantly flow into a structured sales system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-zinc-200 bg-zinc-50 shadow-sm">
              <Database className="text-emerald-700 mb-4" size={28} />
              <h4 className="text-lg font-black text-zinc-950 mb-2 uppercase">CRM & Lead Capture</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Deploy HubSpot or GoHighLevel with custom lead scoring, pipeline stages, and automatic contact categorization.</p>
            </div>
            <div className="p-6 border border-zinc-200 bg-zinc-50 shadow-sm">
              <Zap className="text-emerald-700 mb-4" size={28} />
              <h4 className="text-lg font-black text-zinc-950 mb-2 uppercase">Instant Follow-Up Scenarios</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Configure Make.com or Zapier to send an instant SMS and email confirmation within 60 seconds of form submission.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
            Phase 4: Autonomous AI Layer Deployment
          </h2>
          <p>
            The final tier of modern setup is baking AI into your daily operations. Instead of hiring three virtual assistants, deploy specialized AI Agents trained on your specific SOPs to qualify leads, schedule meetings, and resolve customer questions automatically.
          </p>

          <div className="p-8 border border-zinc-200 bg-zinc-50 space-y-4 shadow-sm">
            <h3 className="text-xl font-black text-zinc-950 uppercase">Checklist: Your 2026 Pre-Launch Stack</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs uppercase tracking-wider text-zinc-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> Registered Entity & EIN/VAT</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> Custom Domain & Google Workspace</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> Sub-1.5s React/Next.js Web Site</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> Configured CRM & Pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> Automated Booking & Calendar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16} /> RAG AI Agent for 24/7 Support</li>
            </ul>
          </div>

          <p>
            At Calpir, we deploy this exact integrated ecosystem in 7 to 28 days through our turn-key launch packages.
          </p>
        </div>
      )
    }
  };

  const post = posts[slug || ''];

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Link to="/blog" className="w-12 h-12 border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 text-zinc-900 transition-all shadow-sm">
                <ArrowLeft size={20} />
              </Link>
              <SectionLabel>{post.tag}</SectionLabel>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-[0.9] text-zinc-950">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-zinc-200 mono text-xs uppercase tracking-wider text-zinc-600 font-bold">
              <div className="flex items-center gap-2">
                <User size={14} className="text-emerald-700" /> AUTHOR: <span className="text-zinc-950">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-700" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-emerald-700" /> {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container-custom max-w-[850px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {post.content}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-zinc-200 bg-emerald-50/60">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-8 font-black uppercase tracking-tight text-zinc-950">Ready to Deploy Your <br /> Business Infrastructure?</h2>
          <p className="text-xl mono text-zinc-700 mb-12 max-w-[600px] mx-auto">
            Book a free 30-minute consultation with Calpir technical directors to map out your custom stack.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight btn-hover">
            <Link to="/contact">Book Strategy Consultation <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;