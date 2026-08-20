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
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            The definitive 2026 playbook for taking an idea from raw concept to an integrated, revenue-generating automated business.
          </p>

          <p>
            Launching a business in 2026 looks fundamentally different than it did even three years ago. The days of spending six months hiring separate web developers, brand designers, lawyers, and CRM specialists are officially over. Today, competitive advantage is defined by <strong className="text-white">speed of execution, seamless tool integration, and AI-native operations</strong>.
          </p>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Phase 1: Legal Entity & Corporate Foundation
          </h2>
          <p>
            Before you build a landing page or run an ad, you need a legitimate legal structure that protects your personal assets and prepares you for scale or future capital investment.
          </p>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            1. Jurisdiction Selection (UK Ltd vs. US LLC vs. Local Entity)
          </h3>
          <p>
            Depending on your primary target market, select your incorporation jurisdiction wisely:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">UK Limited Company:</strong> Ideal if serving European or UK clients. Rapid incorporation via Companies House (under £50) with low ongoing admin.</li>
            <li><strong className="text-white">US LLC (Wyoming or Delaware):</strong> Perfect for international founders who want access to US banking (Mercury/Relay), USD client invoicing, and Stripe payments.</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            2. Tax & Compliance Registration
          </h3>
          <p>
            Ensure you obtain your tax identifiers immediately upon formation:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">UK:</strong> Corporation Tax registration with HMRC within 3 months, voluntary VAT registration if claiming back setup expenses.</li>
            <li><strong className="text-white">US:</strong> Obtain an EIN (Employer Identification Number) from the IRS via Form SS-4.</li>
          </ul>

          <div className="my-8 p-8 border border-emerald-500/40 bg-emerald-950/30 space-y-4">
            <h4 className="text-lg font-black text-white uppercase">Calpir Expert Tip: Virtual Registered Address</h4>
            <p className="text-sm text-zinc-300">
              Never register a commercial business directly to your personal home address. Public registries can expose personal location data. Use a premium virtual business address in a tech hub like Bristol or Wilmington for professional credibility.
            </p>
          </div>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Phase 2: High-Conversion Digital Infrastructure
          </h2>
          <p>
            Your website is not a brochure—it is your primary 24/7 sales engine. Avoid heavy, slow, legacy builders like WordPress or Wix that accumulate plugin bloat.
          </p>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            1. Web Architecture Stack
          </h3>
          <p>
            In 2026, modern web standards demand a sub-1.5 second load time. Build with modern JavaScript frameworks like Next.js or React deployed on Vercel or Cloudflare Edge networks. This guarantees 100/100 Core Web Vitals and peak Google SEO performance.
          </p>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            2. Messaging & Conversion Principles
          </h3>
          <p>
            Structure your homepage using the proven 5-step conversion framework:
          </p>
          <ol className="list-decimal pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">Hero Section:</strong> Bold outcome statement + clear call to action (e.g., "Launch in 7 Days").</li>
            <li><strong className="text-white">Social Proof / Metrics:</strong> Logos, client stats, or verified reviews above the fold.</li>
            <li><strong className="text-white">Problem & Solution Grid:</strong> Explicit contrast between the old painful way and your new system.</li>
            <li><strong className="text-white">Interactive ROI / Calculator Component:</strong> Let prospects self-qualify their potential impact.</li>
            <li><strong className="text-white">Single Lead Capture Action:</strong> One direct booking link or high-value assessment.</li>
          </ol>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Phase 3: The Unified Revenue Engine (CRM & Automations)
          </h2>
          <p>
            A website without a connected CRM is an expensive bucket with a hole in the bottom. Every inquiry must instantly flow into a structured sales system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <Database className="text-emerald-400 mb-4" size={28} />
              <h4 className="text-lg font-black text-white mb-2 uppercase">CRM & Lead Capture</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Deploy HubSpot or GoHighLevel with custom lead scoring, pipeline stages, and automatic contact categorization.</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <Zap className="text-emerald-400 mb-4" size={28} />
              <h4 className="text-lg font-black text-white mb-2 uppercase">Instant Follow-Up Scenarios</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Configure Make.com or Zapier to send an instant SMS and email confirmation within 60 seconds of form submission.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Phase 4: Autonomous AI Layer Deployment
          </h2>
          <p>
            The final tier of modern setup is baking AI into your daily operations. Instead of hiring three virtual assistants, deploy specialized AI Agents trained on your specific SOPs to qualify leads, schedule meetings, and resolve customer questions automatically.
          </p>

          <div className="p-8 border border-white/15 bg-white/[0.03] space-y-4">
            <h3 className="text-xl font-black text-white uppercase">Checklist: Your 2026 Pre-Launch Stack</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs uppercase tracking-wider text-zinc-200">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> Registered Entity & EIN/VAT</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> Custom Domain & Google Workspace</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> Sub-1.5s React/Next.js Web Site</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> Configured CRM & Pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> Automated Booking & Calendar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={16} /> RAG AI Agent for 24/7 Support</li>
            </ul>
          </div>

          <p>
            At Calpir, we deploy this exact integrated ecosystem in 7 to 28 days through our turn-key launch packages.
          </p>
        </div>
      )
    },
    'what-to-start-with-launch-guide': {
      tag: "STRATEGY",
      title: "Where to Begin? The Essential First 30 Days of Launching Your Business",
      author: "Calpir Experts",
      date: "March 26, 2026",
      readTime: "18 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            The prioritized 30-day tactical roadmap to avoid analysis paralysis and reach cash flow positive faster.
          </p>

          <p>
            The single biggest killer of new startups isn't competition—it's <strong className="text-white">misallocated founder energy</strong>. Spending three weeks debating a brand color hex code while having zero client acquisition channels is how promising businesses run out of capital before making their first sale.
          </p>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Week 1: Core Offer & Value Proposition Engineering
          </h2>
          <p>
            Before writing code or building funnel pages, lock down your irresistible offer.
          </p>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            1. The Grand Slam Offer Equation
          </h3>
          <p>
            Your offer must solve a specific high-value pain point with speed and high certainty. Define:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">Dream Outcome:</strong> What is the exact transformation you deliver?</li>
            <li><strong className="text-white">Perceived Likelihood of Achievement:</strong> How do you prove you can actually deliver?</li>
            <li><strong className="text-white">Time Delay:</strong> How quickly does the customer see tangible results?</li>
            <li><strong className="text-white">Effort & Sacrifice:</strong> How much work is removed from the client's shoulders?</li>
          </ul>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Week 2: Minimum Viable Infrastructure (MVI)
          </h2>
          <p>
            Do not over-engineer. Build only the baseline tools required to collect money and deliver value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <h4 className="text-base font-black text-white mb-2 uppercase">1. Landing Web Page</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">A single-page, high-converting layout explaining the offer, pricing, and booking calendar.</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <h4 className="text-base font-black text-white mb-2 uppercase">2. Merchant Processing</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Stripe or Wise setup ready to accept credit cards or wire transfers immediately.</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <h4 className="text-base font-black text-white mb-2 uppercase">3. Centralized CRM</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">A structured pipeline board to log every single conversation and track lead status.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Week 3: The Initial Demand Generation Engine
          </h2>
          <p>
            Turn on outreach channels to get your offer in front of real prospect eyes. Choose one primary outbound channel and one organic channel:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">Direct Outreach (B2B):</strong> Targeted LinkedIn outreach + personalized email campaigns offering free assessments.</li>
            <li><strong className="text-white">Paid Acquisition (B2C/SaaS):</strong> Low-budget Meta or Search campaign driving traffic directly to a high-converting assessment tool.</li>
          </ul>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            Week 4: Feedback Loops & Systems Automation
          </h2>
          <p>
            Once client inquiries start coming in, observe where you spend repetitive manual time. Wire up basic automations using Make.com or Zapier to handle document generation, calendar booking, and CRM updates.
          </p>

          <div className="p-8 border border-emerald-500/40 bg-emerald-950/30">
            <h3 className="text-xl font-black text-white uppercase mb-2">Rule of 30: What to OMIT in Month 1</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Do NOT register trademarks, spend $5,000 on brand video production, or build complex custom internal software in your first 30 days. Focus 80% of your energy exclusively on distribution, client conversations, and refining your core delivery.
            </p>
          </div>
        </div>
      )
    },
    'best-crm-tools-comparison': {
      tag: "CRM_COMPARISON",
      title: "The Definitive 2026 CRM Comparison: HubSpot vs GoHighLevel vs Salesforce vs Zoho",
      author: "Calpir Experts",
      date: "March 25, 2026",
      readTime: "20 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            A technical, no-fluff comparison of top sales systems to help you choose the right pipeline architecture.
          </p>

          <p>
            Choosing the wrong CRM is one of the most expensive technical mistakes a business can make. Migrating thousands of contacts, custom deals, and active workflows mid-flight burns months of development time. Below is our objective breakdown of the four dominant platforms in 2026.
          </p>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            1. HubSpot: The Gold Standard for B2B & Inbound Scaling
          </h2>
          <p>
            HubSpot remains the premier ecosystem for mid-market and scaling B2B companies that prioritize clean UI, inbound lead capture, and robust reporting.
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">Pros:</strong> World-class UI/UX, seamless marketing-to-sales data sync, powerful REST APIs, native integrations with almost every major tool.</li>
            <li><strong className="text-white">Cons:</strong> Pricing scales aggressively as contacts and seats grow. Professional tier can quickly cost $800+/month.</li>
            <li><strong className="text-white">Best For:</strong> B2B companies, agencies, and venture-backed startups with high contract values.</li>
          </ul>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            2. GoHighLevel (GHL): The Ultimate All-in-One Engine
          </h2>
          <p>
            GoHighLevel has revolutionized the SMB and agency space by consolidating CRM, SMS marketing, email funnels, call tracking, and booking into a single flat-rate package.
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-300">
            <li><strong className="text-white">Pros:</strong> Unbeatable value, built-in two-way SMS/WhatsApp messaging, native booking engine, flat pricing regardless of contact count.</li>
            <li><strong className="text-white">Cons:</strong> Steeper learning curve, UI can feel cluttered compared to HubSpot.</li>
            <li><strong className="text-white">Best For:</strong> Agencies, local services, high-volume lead operations, and bootstrapped startups.</li>
          </ul>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            3. Salesforce & Zoho: Enterprise vs. Budget
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <h4 className="text-lg font-black text-white mb-2 uppercase">Salesforce Sales Cloud</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Unrivaled customizability for enterprise corporations, but requires dedicated administrators and heavy engineering budgets to maintain.</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/[0.03]">
              <h4 className="text-lg font-black text-white mb-2 uppercase">Zoho CRM</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Extremely budget-friendly with a massive suite of add-on applications, but user interface and third-party integrations can feel clunky.</p>
            </div>
          </div>
        </div>
      )
    },
    'ai-agents-replacing-saas': {
      tag: "AI_AGENTS",
      title: "How Autonomous AI Agents Are Replacing Traditional SaaS Tools",
      author: "Calpir Experts",
      date: "March 24, 2026",
      readTime: "16 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            Why paying per-seat subscriptions for rigid SaaS software is dying and how custom agentic AI cuts operational overhead.
          </p>

          <p>
            For the past fifteen years, the software playbook was simple: buy a SaaS app for HR, another for customer support, another for scheduling, and another for lead scoring. By 2026, companies are drowning in <strong className="text-white">"SaaS sprawl"</strong>—paying thousands of dollars monthly for disconnected tools that require humans to manually push data between them.
          </p>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            The Shift from Software-as-a-Service to Service-as-a-Software
          </h2>
          <p>
            Traditional SaaS gives you a tool; you still have to supply the human labor to operate it. <strong className="text-white">Autonomous AI Agents</strong> flip this paradigm. An AI Agent doesn't just display data—it performs the actual labor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-rose-900/40 bg-rose-950/20">
              <h4 className="text-base font-black text-rose-400 mb-2 uppercase">The Old SaaS Way</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Pay $50/seat/month for Zendesk. Hire 3 support reps to manually read tickets, search database PDFs, and write manual email responses.</p>
            </div>
            <div className="p-6 border border-emerald-500/40 bg-emerald-950/30">
              <h4 className="text-base font-black text-emerald-400 mb-2 uppercase">The Modern AI Agent Way</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Deploy a custom RAG AI Agent connected to your vector database. The agent answers 75% of tickets instantly in under 3 seconds at zero marginal cost.</p>
            </div>
          </div>
        </div>
      )
    },
    'essential-tech-stack-automations': {
      tag: "AUTOMATION",
      title: "The Golden Tech Stack: Essential Automations Every Modern Business Needs",
      author: "Calpir Experts",
      date: "March 23, 2026",
      readTime: "19 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            The exact technical architecture connecting web, CRM, invoicing, and operations into a self-running engine.
          </p>

          <p>
            High-performing companies aren't run by larger teams; they are run by <strong className="text-white">superior automation architecture</strong>. Below is the battle-tested "Golden Stack" we deploy for startups and scaling businesses at Calpir.
          </p>

          <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-6 border-t border-white/10">
            The 5 Core Automations You Must Deploy
          </h2>

          <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-wider">
            1. The Lead Speed-to-Contact Pipeline
          </h3>
          <p>
            Studies show that contacting a prospect within 5 minutes increases conversion rates by 391%.
          </p>
          <div className="p-4 border border-white/15 bg-white/[0.03] text-xs text-zinc-200 space-y-1.5">
            <p><strong className="text-white">Trigger:</strong> New Form Submission on Website (Next.js Webhook)</p>
            <p><strong className="text-white">Action 1:</strong> Create Contact & Opportunity in CRM (HubSpot/GHL)</p>
            <p><strong className="text-white">Action 2:</strong> Send Instant Personalized SMS & Confirmation Email</p>
            <p><strong className="text-white">Action 3:</strong> Post Alert to Team Slack `#leads` Channel with One-Click Dial Link</p>
          </div>
        </div>
      )
    },
    'setup-uk-limited-company': {
      tag: "LEGAL",
      title: "Setting Up a UK Limited Company: The Complete Founder's Guide",
      author: "Calpir Experts",
      date: "March 22, 2026",
      readTime: "15 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            The complete guide to UK incorporation, Companies House, VAT thresholds, and Bristol business infrastructure.
          </p>
          <p>
            In 2026, the UK remains a top global destination for technology startups and digital agencies. Setting up a UK Ltd entity gives you global credibility, access to modern banking, and a straightforward tax structure.
          </p>
        </div>
      )
    },
    'setup-us-llc-foreign-founder': {
      tag: "LEGAL",
      title: "Launching a US LLC as a Foreign Founder: Step-by-Step Guide",
      author: "Calpir Experts",
      date: "March 20, 2026",
      readTime: "14 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            How non-US residents can form a Wyoming or Delaware LLC, obtain an EIN without an SSN, and access Stripe & Mercury.
          </p>
          <p>
            Forming a US LLC allows global founders to invoice in USD, connect to Stripe, and build a presence in the world's largest market without requiring a US visa.
          </p>
        </div>
      )
    },
    'deploy-ai-agents-support': {
      tag: "AI_AGENTS",
      title: "How to Deploy AI Agents for 24/7 Customer Support & Sales",
      author: "Calpir Experts",
      date: "March 18, 2026",
      readTime: "17 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-zinc-200">
          <p className="text-2xl text-white font-black uppercase tracking-tight border-l-4 border-emerald-400 pl-6 py-2">
            A deep technical dive into RAG vector databases, prompt guardrails, and human-in-the-loop escalation workflows.
          </p>
          <p>
            Learn how to build, train, and deploy AI Agents that resolve real customer support inquiries, access order databases via API, and book sales calls directly on your team's calendar.
          </p>
        </div>
      )
    }
  };

  const post = posts[slug || ''];

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/15">
        <div className="container-custom max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Link to="/blog" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowLeft size={20} />
              </Link>
              <SectionLabel>{post.tag}</SectionLabel>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-[0.9] text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-white/15 mono text-xs uppercase tracking-wider text-zinc-400 font-bold">
              <div className="flex items-center gap-2">
                <User size={14} className="text-emerald-400" /> AUTHOR: <span className="text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-400" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-emerald-400" /> {post.readTime}
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
      <section className="section-padding border-t border-white/15 bg-white/[0.02]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-8 font-black uppercase tracking-tight text-white">Ready to Deploy Your <br /> Business Infrastructure?</h2>
          <p className="text-xl mono text-zinc-300 mb-12 max-w-[600px] mx-auto">
            Book a free 30-minute consultation with Calpir technical directors to map out your custom stack.
          </p>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight btn-hover">
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