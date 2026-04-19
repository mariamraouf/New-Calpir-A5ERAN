"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  Bot, Brain, Zap, CheckCircle2, 
  AlertTriangle, TrendingUp, Globe, Database, Workflow, Shield
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: any = {
    'setup-uk-limited-company': {
      tag: "LEGAL",
      title: "Setting Up a UK Limited Company: The 2026 Founder's Guide",
      author: "Abdullah Mustafa",
      date: "March 23, 2026",
      readTime: "12 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Launching in the UK? Don't let the paperwork slow you down.
          </p>
          <p>
            Setting up a Limited Company (LTD) in the UK is one of the most efficient ways to start a business globally. With a base in Bristol, you're part of a thriving tech ecosystem. But before you start trading, you need to get your legal foundation right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/10 p-8 bg-white/5">
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">COMPANIES HOUSE</h3>
              <p className="text-sm">The official registrar. You'll need to provide your company name, address, and details of directors and shareholders.</p>
            </div>
            <div className="border border-white/10 p-8 bg-white/5">
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">VAT REGISTRATION</h3>
              <p className="text-sm">If your turnover exceeds £90,000, you must register. However, voluntary registration can often save you money on business expenses.</p>
            </div>
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Checklist</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4"><CheckCircle2 className="text-[#064e3b]" /> Choose a unique company name</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-[#064e3b]" /> Appoint at least one director</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-[#064e3b]" /> Register for Corporation Tax</li>
            <li className="flex items-center gap-4"><CheckCircle2 className="text-[#064e3b]" /> Set up a business bank account</li>
          </ul>
          <p>
            At Calpir, we handle this entire process for our UK clients. We don't just file the papers; we set up the accounting and payroll systems that keep you compliant from day one.
          </p>
        </div>
      )
    },
    'deploy-ai-agents-support': {
      tag: "AI_AGENTS",
      title: "How to Deploy AI Agents for 24/7 Customer Support",
      author: "Abdullah Mustafa",
      date: "March 20, 2026",
      readTime: "15 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Your customers don't sleep. Your support shouldn't either.
          </p>
          <div className="border border-[#064e3b] p-12 bg-[#064e3b]/5 relative overflow-hidden">
            <Bot className="absolute top-0 right-0 opacity-10" size={120} />
            <h3 className="text-3xl font-black mb-6">The Agent Architecture</h3>
            <p className="mb-8">We build agents using a RAG (Retrieval-Augmented Generation) framework. This means your agent doesn't just guess; it looks up your actual business documentation before answering.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs uppercase tracking-widest font-bold">
              <div className="p-4 border border-white/10 bg-black">1. Knowledge Base</div>
              <div className="p-4 border border-white/10 bg-black">2. LLM Reasoning</div>
              <div className="p-4 border border-white/10 bg-black">3. Action Trigger</div>
            </div>
          </div>
          <p>
            The key to a successful AI agent is **nuance**. It needs to know when to solve the problem and when to escalate to a human. We train our agents on your brand voice so they sound like a member of your team, not a generic chatbot.
          </p>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">ROI Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10">
              <div className="text-5xl font-black text-[#064e3b] mb-2">70%</div>
              <div className="text-sm uppercase tracking-widest">Inquiry Deflection</div>
            </div>
            <div className="p-8 border border-white/10">
              <div className="text-5xl font-black text-[#064e3b] mb-2">< 2s</div>
              <div className="text-sm uppercase tracking-widest">Response Time</div>
            </div>
          </div>
        </div>
      )
    },
    'essential-workflow-automations': {
      tag: "AUTOMATION",
      title: "10 Workflow Automations Every Founder Needs",
      author: "Abdullah Mustafa",
      date: "March 18, 2026",
      readTime: "10 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            If you're doing it twice, automate it.
          </p>
          <div className="space-y-8">
            {[
              { t: "Lead Capture to CRM", d: "Instantly sync website leads to HubSpot/GHL and trigger a welcome email." },
              { t: "Automated Invoicing", d: "Generate and send invoices the moment a deal is marked 'Closed Won'." },
              { t: "Meeting Reminders", d: "Reduce no-shows by 40% with automated SMS and email reminders." },
              { t: "Social Media Cross-Posting", d: "Post once, distribute everywhere automatically." }
            ].map((a, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="text-4xl font-black text-[#064e3b]">{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">{a.t}</h3>
                  <p>{a.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            We use tools like Zapier, Make, and custom API integrations to build these bridges. The goal is to create a "Zero-Touch" business where you only focus on high-level strategy.
          </p>
        </div>
      )
    },
    'hubspot-vs-gohighlevel': {
      tag: "CRM",
      title: "HubSpot vs. GoHighLevel: The Technical Showdown",
      author: "Abdullah Mustafa",
      date: "March 15, 2026",
      readTime: "14 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Your CRM is the brain of your business. Choose wisely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="p-12 bg-black">
              <h3 className="text-3xl font-black mb-6 text-[#064e3b]">HUBSPOT</h3>
              <p className="text-sm mb-8">The gold standard for enterprise-grade marketing and sales. Best for teams that need deep analytics and complex reporting.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest">
                <li>✓ Best-in-class UI</li>
                <li>✓ Powerful Integrations</li>
                <li>✓ Advanced Reporting</li>
              </ul>
            </div>
            <div className="p-12 bg-black">
              <h3 className="text-3xl font-black mb-6 text-[#064e3b]">GOHIGHLEVEL</h3>
              <p className="text-sm mb-8">The ultimate all-in-one for agencies and small businesses. Best for those who want CRM, Funnels, and SMS in one place.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest">
                <li>✓ All-in-one features</li>
                <li>✓ Built-in SMS/Email</li>
                <li>✓ Cost-effective</li>
              </ul>
            </div>
          </div>
          <p>
            At Calpir, we don't have a favorite. We assess your specific needs and deploy the one that will scale with you.
          </p>
        </div>
      )
    },
    'technical-seo-startups': {
      tag: "SEO",
      title: "Technical SEO for Startups in the AI Era",
      author: "Abdullah Mustafa",
      date: "March 12, 2026",
      readTime: "11 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            SEO isn't just about keywords anymore. It's about data structure.
          </p>
          <p>
            With the rise of AI search engines like Perplexity and SearchGPT, your site needs to be readable by machines as much as humans. This means Schema Markup, clean HTML, and lightning-fast load times.
          </p>
          <div className="border border-white/10 p-12 bg-white/5">
            <h3 className="text-2xl font-black mb-6">The 3 Pillars of 2026 SEO</h3>
            <div className="space-y-6">
              <div>
                <div className="text-[#064e3b] font-bold uppercase mb-1">1. Semantic Search</div>
                <p className="text-sm">Optimizing for intent, not just exact match keywords.</p>
              </div>
              <div>
                <div className="text-[#064e3b] font-bold uppercase mb-1">2. Core Web Vitals</div>
                <p className="text-sm">Google's speed and stability metrics are now a primary ranking factor.</p>
              </div>
              <div>
                <div className="text-[#064e3b] font-bold uppercase mb-1">3. Entity Authority</div>
                <p className="text-sm">Building your brand as a recognized entity in your niche.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'brand-identity-conversion': {
      tag: "BRANDING",
      title: "Building a Brand Identity That Converts",
      author: "Abdullah Mustafa",
      date: "March 10, 2026",
      readTime: "9 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Design is how it works, not just how it looks.
          </p>
          <p>
            A great brand identity builds trust before a user even reads a word of your copy. We focus on "Conversion-First Design"—using color theory, typography, and layout to guide the user toward the 'Buy' button.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10">
              <h4 className="font-black uppercase mb-4">Visual Consistency</h4>
              <p className="text-sm">Using the same system across your website, social, and ads to build recognition.</p>
            </div>
            <div className="p-8 border border-white/10">
              <h4 className="font-black uppercase mb-4">Emotional Resonance</h4>
              <p className="text-sm">Choosing colors and fonts that align with your target audience's psychology.</p>
            </div>
          </div>
        </div>
      )
    },
    'automate-payroll-accounting': {
      tag: "FINANCE",
      title: "Zero-Touch Finance: Automating Payroll & Accounting",
      author: "Abdullah Mustafa",
      date: "March 8, 2026",
      readTime: "13 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Stop chasing receipts. Start scaling.
          </p>
          <p>
            For UK businesses, integrating Xero with your bank and payroll tools is essential. We build automated pipelines that categorize expenses, generate reports, and handle VAT returns with minimal human intervention.
          </p>
          <div className="border-l-4 border-[#064e3b] pl-8 py-6 bg-white/5">
            <p className="italic">"The best finance system is the one you never have to log into."</p>
          </div>
          <h3 className="text-2xl font-black text-white uppercase">The Integration Stack</h3>
          <ul className="space-y-2 text-sm">
            <li>• Xero / QuickBooks for Core Accounting</li>
            <li>• Gusto / BrightPay for Payroll</li>
            <li>• Dext for Receipt Capture</li>
            <li>• Stripe / GoCardless for Payments</li>
          </ul>
        </div>
      )
    },
    'ai-strategy-roadmap': {
      tag: "STRATEGY",
      title: "The AI Strategy Roadmap: Where to Start",
      author: "Abdullah Mustafa",
      date: "March 5, 2026",
      readTime: "16 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Don't buy the hype. Buy the ROI.
          </p>
          <p>
            Most businesses waste thousands on AI tools they don't need. Our roadmap focuses on the three areas where AI actually moves the needle: Customer Support, Lead Qualification, and Content Production.
          </p>
          <div className="p-12 border border-[#064e3b] bg-[#064e3b]/5">
            <h4 className="text-2xl font-black mb-6">Phase 1: The Foundation</h4>
            <p className="text-sm mb-8">Cleaning your data and setting up your CRM so AI has something to work with.</p>
            <h4 className="text-2xl font-black mb-6">Phase 2: Automation</h4>
            <p className="text-sm mb-8">Deploying agents and workflows to handle repetitive tasks.</p>
            <h4 className="text-2xl font-black mb-6">Phase 3: Intelligence</h4>
            <p className="text-sm">Using AI for predictive analytics and advanced personalization.</p>
          </div>
        </div>
      )
    },
    'ai-lead-qualification': {
      tag: "SALES",
      title: "Lead Qualification with AI: Doubling Efficiency",
      author: "Abdullah Mustafa",
      date: "March 2, 2026",
      readTime: "10 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Stop talking to people who aren't going to buy.
          </p>
          <p>
            AI agents can now qualify leads in real-time. They ask the right questions, check budgets, and only book meetings for your sales team when a lead meets your 'Ideal Customer Profile' (ICP).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10">
              <TrendingUp className="text-[#064e3b] mb-4" size={32} />
              <h4 className="font-black uppercase mb-2">Higher Close Rates</h4>
              <p className="text-sm">Your team only talks to high-intent prospects.</p>
            </div>
            <div className="p-8 border border-white/10">
              <Clock className="text-[#064e3b] mb-4" size={32} />
              <h4 className="font-black uppercase mb-2">Instant Response</h4>
              <p className="text-sm">Leads are qualified within seconds of landing on your site.</p>
            </div>
          </div>
        </div>
      )
    },
    'golden-stack-2026': {
      tag: "TECH_STACK",
      title: "The 'Golden Stack' for 2026: What We Use",
      author: "Abdullah Mustafa",
      date: "Feb 28, 2026",
      readTime: "18 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            The exact tools we use to launch 7-figure infrastructures.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <Globe className="text-[#064e3b] shrink-0" size={32} />
              <div>
                <h4 className="font-black uppercase">Web: Next.js + Tailwind + Vercel</h4>
                <p className="text-sm">The fastest, most scalable way to build modern web applications.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Database className="text-[#064e3b] shrink-0" size={32} />
              <div>
                <h4 className="font-black uppercase">CRM: HubSpot / GoHighLevel</h4>
                <p className="text-sm">The brain that manages every customer interaction.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Workflow className="text-[#064e3b] shrink-0" size={32} />
              <div>
                <h4 className="font-black uppercase">Automation: Make.com + Zapier</h4>
                <p className="text-sm">The glue that connects every tool in your stack.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Shield className="text-[#064e3b] shrink-0" size={32} />
              <div>
                <h4 className="font-black uppercase">Security: Cloudflare + Auth0</h4>
                <p className="text-sm">Protecting your infrastructure from the edge.</p>
              </div>
            </div>
          </div>
          <p>
            This stack isn't just powerful—it's integrated. When we deploy this for a client, we ensure every piece of data flows seamlessly from one tool to the next.
          </p>
        </div>
      )
    }
  };

  const post = posts[slug || ''];

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-24 px-6 border-b border-white/10">
        <div className="container-custom max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Link to="/blog" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowLeft size={20} />
              </Link>
              <SectionLabel>{post.tag}</SectionLabel>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-8 py-8 border-y border-white/10 mono text-[0.7rem] uppercase tracking-widest text-white/40">
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#064e3b]" /> WRITTEN BY: <span className="text-white font-bold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#064e3b]" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#064e3b]" /> {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="container-custom max-w-[800px]">
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
      <section className="section-padding border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-12 font-black uppercase tracking-tighter">Want More Insights?</h2>
          <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

const X = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const NotFound = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-9xl font-black text-[#064e3b] mb-4">404</h1>
      <p className="mono uppercase tracking-widest mb-8">Article not found</p>
      <Button asChild className="bg-white text-black px-8 py-4 rounded-none font-black uppercase">
        <Link to="/blog">Back to Blog</Link>
      </Button>
    </div>
  </div>
);

export default BlogPost;