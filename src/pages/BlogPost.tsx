"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  Bot, Brain, Zap, CheckCircle2, 
  TrendingUp, Globe, Database, Workflow, Shield,
  Code, Terminal, Cpu, Layers, Search, Palette, CreditCard
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
      readTime: "25 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            The definitive blueprint for launching your Bristol based startup with a solid legal foundation.
          </p>
          <p>
            In 2026, the UK remains one of the most attractive jurisdictions for tech founders. Bristol, specifically, has evolved into a global hub for AI and deep tech innovation — often referred to as the heart of the "Silicon Gorge." However, the transition from a brilliant idea to a fully compliant legal entity is where many founders lose momentum. This isn't just about filling out a form; it's about setting the stage for future investment, liability protection, and operational scale.
          </p>
          
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Incorporation Myth</h2>
          <p>
            Many founders think incorporation is just a £12 fee and a 24 hour wait. While technically true, the way you incorporate matters. Are you setting up the right share structure for future VC rounds? Have you considered the implications of your SIC codes on your future banking options? In Bristol, we see many founders rushing this process only to spend thousands later on "cleaning up" their Cap Table.
          </p>
          
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">1. Companies House & The IN01 Form</h2>
          <p>
            The IN01 is your birth certificate. You'll need a unique name (check the Companies House availability tool first), a registered office address (we recommend a professional Bristol city center address over your home for privacy), and at least one director. But the real strategy lies in the **Articles of Association**. Don't just use the "Model Articles" if you plan on having multiple founders or investors. You need custom provisions for "Bad Leaver" clauses and "Drag Along" rights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-12 border border-white/10">
            <div>
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">MEMORANDUM</h3>
              <p className="text-sm">This is the historical snapshot of who agreed to form the company. It cannot be changed once filed.</p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">ARTICLES</h3>
              <p className="text-sm">The living constitution of your business. This dictates how decisions are made and how shares are transferred.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">2. HMRC & The 'Making Tax Digital' Era</h2>
          <p>
            By 2026, HMRC has fully embraced digital first compliance. Once you incorporate, you have a strict 3 month window to register for Corporation Tax. But the real headache for growing startups is **VAT**. If you're building a SaaS or a high ticket service, you'll likely hit the £90,000 threshold faster than you think. Voluntary registration is often a smart move — it allows you to reclaim VAT on your setup costs, software, and hardware, which can save a bootstrapped founder thousands in their first year.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">3. The Bristol Advantage</h2>
          <p>
            Why Bristol? Beyond the legal framework, Bristol offers a unique ecosystem. Between the University of Bristol's world class engineering talent and the collaborative spirit of the Engine Shed, you're not just starting a company; you're joining a movement. The city's focus on "Tech for Good" and AI means that a Bristol registered address carries a specific weight with modern investors who are tired of the London bubble.
          </p>
          
          <div className="p-12 border border-[#064e3b] bg-[#064e3b]/5">
            <h3 className="text-2xl font-black mb-6">FOUNDER INSIGHT: THE VIRTUAL OFFICE</h3>
            <p>Don't put your home address on the public record. For £20 30 a month, a virtual office in Bristol gives you a prestigious address, handles your mail, and keeps your personal life separate from your business. It's the first step in "acting like a big company" before you actually are one.</p>
          </div>

          <p>
            At Calpir, we handle this entire "Legal Stack" for you. We don't just file the papers; we set up your Xero, integrate your bank feeds, and ensure your Bristol based business is legally bulletproof from Day 1.
          </p>
        </div>
      )
    },
    'setup-us-llc-foreign-founder': {
      tag: "LEGAL",
      title: "Launching a US LLC as a Foreign Founder: The Complete Guide",
      author: "Abdullah Mustafa",
      date: "March 22, 2026",
      readTime: "28 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Access the US market, Stripe, and US banking from anywhere in the world.
          </p>
          <p>
            For founders outside the United States, a US LLC (Limited Liability Company) is the ultimate "Global Business Passport." It allows you to access the world's largest economy, use premium payment processors like Stripe, and hold funds in US Dollars — all without needing a US visa or physical presence.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">1. Choosing the Right State</h2>
          <p>
            For most foreign founders, **Wyoming** or **Delaware** are the top choices. Wyoming is often preferred for its low annual fees and strong privacy laws. Delaware is the standard if you plan to raise VC capital later. We typically recommend Wyoming for bootstrapped startups due to its simplicity and "business friendly" environment.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">2. The EIN: Your Business ID</h2>
          <p>
            The **Employer Identification Number (EIN)** is your company's social security number. Without it, you cannot open a bank account or use Stripe. As a foreign founder, you can get an EIN without an SSN or ITIN, but the process involves a specific fax/mail application to the IRS. We handle this entire process, ensuring your EIN is issued correctly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-12 border border-white/10">
            <div>
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">REGISTERED AGENT</h3>
              <p className="text-sm">You must have a physical address in your state of incorporation to receive legal documents. We provide this as part of our setup.</p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 text-[#064e3b]">OPERATING AGREEMENT</h3>
              <p className="text-sm">The internal document that proves you own the company. Essential for banking and legal protection.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">3. Banking & Payments</h2>
          <p>
            Once you have your LLC and EIN, we help you set up a US business bank account through platforms like **Mercury** or **Relay**. These are built for modern founders and allow for full remote management. From there, connecting to Stripe or PayPal is seamless, allowing you to accept payments from customers globally in USD.
          </p>

          <div className="p-12 border border-[#064e3b] bg-[#064e3b]/5">
            <h3 className="text-2xl font-black mb-6">TAX NOTE</h3>
            <p>A US LLC is a "pass through" entity. If you have no physical presence in the US and no US employees, you may not owe US federal income tax, but you must still file annual information returns (Form 5472). We ensure you stay compliant.</p>
          </div>

          <p>
            Calpir makes US incorporation effortless. We handle the filing, the EIN, the banking setup, and the initial compliance so you can start selling to the US market in weeks.
          </p>
        </div>
      )
    },
    'deploy-ai-agents-support': {
      tag: "AI_AGENTS",
      title: "How to Deploy AI Agents for 24/7 Customer Support",
      author: "Abdullah Mustafa",
      date: "March 20, 2026",
      readTime: "30 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            The death of the "Dumb Chatbot" and the rise of the Autonomous Digital Employee.
          </p>
          <p>
            We've all been there: trapped in a loop with a chatbot that doesn't understand basic English, repeatedly asking for your order number only to tell you to "wait for a human." In 2026, that's not just bad service — it's a business killer. Modern AI Agents are different. They don't just follow a script; they understand intent, access your data, and take real world actions.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">What is an 'Agent' Anyway?</h2>
          <p>
            Think of a chatbot as a vending machine: you press a button, you get a pre set response. An AI Agent is more like a concierge. It has a goal (e.g., "Resolve this customer's issue") and a set of tools (e.g., "Access the CRM," "Check the shipping API," "Issue a refund"). It decides which tools to use and in what order to achieve that goal.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">1. The RAG Revolution</h2>
          <p>
            The secret sauce is **Retrieval Augmented Generation (RAG)**. Instead of training a model on your data (which is slow and expensive), we give the AI a "library" of your documents. When a customer asks a question, the agent quickly scans the library, finds the relevant paragraph, and uses it to craft a perfect, brand aligned answer. This eliminates "hallucinations" and ensures the agent never makes up a refund policy on the fly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-white/5">
              <Database className="text-[#064e3b] mb-4" />
              <h4 className="font-black mb-2">KNOWLEDGE BASE</h4>
              <p className="text-xs">Your SOPs, PDFs, and website content converted into "vectors" for the AI to read.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5">
              <Search className="text-[#064e3b] mb-4" />
              <h4 className="font-black mb-2">SEMANTIC SEARCH</h4>
              <p className="text-xs">The agent understands the meaning of the question, not just the keywords.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5">
              <Terminal className="text-[#064e3b] mb-4" />
              <h4 className="font-black mb-2">ACTION ENGINE</h4>
              <p className="text-xs">The ability to trigger Zapier or Make workflows to actually do things.</p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">2. Integration: The Nervous System</h2>
          <p>
            An agent is useless if it's isolated. We connect our agents to your **HubSpot, Shopify, and Slack**. If a high value lead starts talking to the agent at 3 AM, the agent qualifies them, books a meeting on your calendar, and sends you a Slack notification so you wake up to a closed deal. This isn't "automation" — it's a 24/7 sales and support team that never asks for a raise.
          </p>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">3. The Human in the Loop</h2>
          <p>
            We don't believe in 100% automation. We believe in **Augmentation**. Our agents handle the 80% of repetitive "Where is my order?" or "How do I reset my password?" queries. When things get complex or emotional, the agent gracefully hands off the conversation to a human, providing a full summary of the interaction so the customer never has to repeat themselves.
          </p>
          
          <div className="p-12 border border-[#064e3b] bg-[#064e3b]/5">
            <h3 className="text-2xl font-black mb-6">THE 2026 BENCHMARK</h3>
            <p>A properly deployed AI agent should reduce your support ticket volume by 65% within the first 30 days, while maintaining a Customer Satisfaction (CSAT) score of 4.8/5 or higher.</p>
          </div>

          <p>
            At Calpir, we build these agents as part of your core infrastructure. We don't just "set up a bot"; we hire you a digital employee that lives in your website and grows with your business.
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