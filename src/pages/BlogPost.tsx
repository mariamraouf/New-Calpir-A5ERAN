"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, CheckCircle2, Zap, Database, ArrowRight
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import postsData from '@/content/posts.json';

interface PostContentMap {
  [slug: string]: React.ReactNode;
}

const articlesContent: PostContentMap = {
  'how-to-setup-new-business-2026': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        The definitive 2026 playbook for taking an idea from raw concept to an integrated, revenue generating automated business.
      </p>
      <p>
        Launching a business in 2026 looks fundamentally different than it did even three years ago. The days of spending six months hiring separate web developers, brand designers, lawyers, and CRM specialists are officially over. Today, competitive advantage is defined by <strong className="text-zinc-950">speed of execution, seamless tool integration, and AI native operations</strong>.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Phase 1: Legal Entity and Corporate Foundation
      </h2>
      <p>
        Before you build a landing page or run ads, you need a legitimate legal structure that protects your personal assets and prepares you for scale or future capital investment.
      </p>
      <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">
        1. Jurisdiction Selection (UK Ltd vs. US LLC vs. Local Entity)
      </h3>
      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li><strong className="text-zinc-950">UK Limited Company:</strong> Ideal if serving European or UK clients. Rapid incorporation via Companies House with low ongoing administration.</li>
        <li><strong className="text-zinc-950">US LLC (Wyoming or Delaware):</strong> Perfect for international founders who want access to US banking, USD client invoicing, and Stripe payments.</li>
      </ul>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Phase 2: High Conversion Digital Storefront
      </h2>
      <p>
        In 2026, modern web standards demand sub 1.5 second load times. Build with modern JavaScript frameworks like Next.js or React deployed on Vercel edge networks to guarantee 100 Core Web Vitals and peak Google SEO performance.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Phase 3: The Unified Revenue Engine (CRM and Automations)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-zinc-200 bg-zinc-50 shadow-sm">
          <Database className="text-emerald-700 mb-4" size={28} />
          <h4 className="text-lg font-black text-zinc-950 mb-2 uppercase">CRM and Lead Capture</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">Deploy HubSpot or GoHighLevel with custom lead scoring, pipeline stages, and automatic contact categorization.</p>
        </div>
        <div className="p-6 border border-zinc-200 bg-zinc-50 shadow-sm">
          <Zap className="text-emerald-700 mb-4" size={28} />
          <h4 className="text-lg font-black text-zinc-950 mb-2 uppercase">Instant Follow Up Scenarios</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">Configure Make.com or Zapier to send an instant SMS and email confirmation within 60 seconds of inquiry.</p>
        </div>
      </div>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Phase 4: Autonomous AI Layer Deployment
      </h2>
      <p>
        The final tier of modern setup is baking AI into your daily operations. Deploy specialized AI Agents trained on your specific documentation to qualify leads, schedule meetings, and resolve customer questions 24/7.
      </p>
    </div>
  ),
  'what-to-start-with-launch-guide': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        The first 30 days dictate whether a business thrives or stalls in decision paralysis. Here is the exact order of execution.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Week 1: Legal Registration, Domain, and Brand Identity
      </h2>
      <p>
        Do not spend 3 weeks debating logos. Pick a clean 5 color palette, secure your official domain name, setup branded Google Workspace email, and file your corporate registration.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Week 2: Digital Storefront and Google Indexing
      </h2>
      <p>
        Launch a high speed conversion focused storefront. Claim your Google Business Profile and submit your XML sitemap directly to Google Search Console for day one indexing.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Week 3: Sales Pipelines and Payment Collection
      </h2>
      <p>
        Connect Stripe, create custom deal stages in your CRM, and configure automated lead alerts to your phone and team Slack channel.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Week 4: AI Support and Operations Handover
      </h2>
      <p>
        Deploy your 24/7 customer support AI agent, document internal standard operating procedures, and start driving traffic through your single best social channel.
      </p>
    </div>
  ),
  'best-crm-tools-comparison': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        Comparing HubSpot, GoHighLevel, Salesforce, and Zoho for modern startups and high velocity service businesses.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        HubSpot: The Clean B2B Standard
      </h2>
      <p>
        HubSpot remains the gold standard for B2B startups prioritizing clean user interface, seamless Gmail integration, and intuitive pipeline visibility. It offers generous free tiers for early stage founders.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        GoHighLevel: The All In One Powerhouse for Local and Agencies
      </h2>
      <p>
        If your business relies heavily on two way SMS conversations, automated booking calendars, and unified inbox messaging, GoHighLevel provides unmatched value without per user seat fees.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Salesforce vs. Zoho: Enterprise vs. Budget
      </h2>
      <p>
        Salesforce is built for 50+ person enterprise teams requiring complex governance. Zoho CRM offers a budget friendly alternative for bootstrapped operations with extensive custom fields.
      </p>
    </div>
  ),
  'ai-agents-replacing-saas': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        Why paying $50 per user per month for fragmented software seats is declining in favor of private AI agents.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        The Problem with SaaS Seat Bloat
      </h2>
      <p>
        Founders frequently find themselves paying monthly subscriptions for 10 separate tools. Autonomous AI agents run continuously on internal knowledge bases, reducing monthly recurring software overhead by up to 70 percent.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Retrieval Augmented Generation (RAG) Explained
      </h2>
      <p>
        By feeding your company documents, pricing structures, and past customer inquiries into vector databases, AI agents respond with zero hallucinations and exact company brand tone.
      </p>
    </div>
  ),
  'essential-tech-stack-automations': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        The five essential automated workflows that save founders 20+ hours of repetitive manual administration every week.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        1. Instant Inbound Lead Routing
      </h2>
      <p>
        Form submission triggers an instant SMS lead notification, logs the contact into the CRM, and sends a personalized email with your booking calendar link in under 60 seconds.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        2. Automated Deal Won Invoicing and Contracts
      </h2>
      <p>
        When a deal status changes to Closed Won, Make.com automatically generates a Stripe invoice, creates a project folder in Google Drive, and notifies the squad in Slack.
      </p>
    </div>
  ),
  'setup-uk-limited-company': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        A step by step guide to registering a UK Limited Company, setting up Corporation Tax with HMRC, and protecting your personal privacy.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Companies House Registration Basics
      </h2>
      <p>
        Registering a private company limited by shares is rapid and cost effective. Ensure you select the correct SIC industry code and establish clear share allocations from inception.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Virtual Registered Office Addresses
      </h2>
      <p>
        Never register your personal home address on public registries. Using a prestigious virtual office in Bristol or London preserves personal privacy while establishing professional authority.
      </p>
    </div>
  ),
  'setup-us-llc-foreign-founder': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        How international founders can incorporate a US LLC in Wyoming or Delaware, obtain an EIN without an SSN, and access US payment rails.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Choosing Wyoming vs. Delaware
      </h2>
      <p>
        Wyoming provides excellent privacy and low annual franchise fees for bootstrapped businesses. Delaware remains favored if you plan on raising institutional venture capital.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Obtaining an EIN and Business Banking
      </h2>
      <p>
        Non US residents can obtain an Employer Identification Number from the IRS by submitting Form SS 4. Once issued, platforms like Mercury or Relay allow opening USD business bank accounts remotely.
      </p>
    </div>
  ),
  'deploy-ai-agents-support': (
    <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">
      <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
        How to build and deploy intelligent customer support agents that integrate with your CRM and resolve customer issues around the clock.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Multi Channel Deployment
      </h2>
      <p>
        Deploy your agent fleet across your website live chat, WhatsApp, and email inboxes with centralized conversation logging into your CRM.
      </p>
      <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
        Human In The Loop Escalation
      </h2>
      <p>
        Configure confidence thresholds so that high value opportunities or complex edge cases transfer smoothly to a human team member with full conversation context.
      </p>
    </div>
  )
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const postContent = articlesContent[slug || ''] || articlesContent['how-to-setup-new-business-2026'];
  const canonicalUrl = `https://www.calpir.com/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `https://www.calpir.com${post.image}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": imageUrl,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "author": { "@type": "Person", "name": post.author },
    "publisher": { "@id": "https://www.calpir.com/#organization" },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${post.title} | Calpir`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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
              <SectionLabel>FOUNDER GUIDE</SectionLabel>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-[0.9] text-zinc-950">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-zinc-200 mono text-xs uppercase tracking-wider text-zinc-600 font-bold">
              <div className="flex items-center gap-2">
                <User size={14} className="text-emerald-700" /> AUTHOR: <span className="text-zinc-950">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-700" /> PUBLISHED: {post.datePublished}
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
            {postContent}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-zinc-200 bg-emerald-50/60">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-8 font-black uppercase tracking-tight text-zinc-950">
            Ready to Deploy Your <br /> Complete Business Engine?
          </h2>
          <p className="text-xl mono text-zinc-700 mb-12 max-w-[600px] mx-auto">
            Book a free 30 minute consultation with Maria to map out your full company setup.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight btn-hover">
            <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;