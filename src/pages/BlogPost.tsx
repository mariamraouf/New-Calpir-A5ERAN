"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  Bot, Brain, Zap, CheckCircle2, 
  AlertTriangle, TrendingUp 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: any = {
    'openclaw-vs-claude-cowork': {
      tag: "AI_TOOLS",
      title: "OpenClaw vs. Claude Cowork: Which AI Partner Wins?",
      author: "Abdullah Mustafa",
      date: "March 23, 2026",
      readTime: "8 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            If you're a founder in 2026 and you're still doing your own admin, you're already losing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="border border-[#064e3b] p-8 bg-[#064e3b]/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Bot size={80} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-[#064e3b]">OPENCLAW</h3>
              <p className="text-sm mb-6">The "Brute Force" Agent. Built for high-volume data processing and complex technical workflows.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> 1M+ Token Context</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Native Python Execution</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Real-time Web Access</li>
              </ul>
            </div>
            <div className="border border-white/10 p-8 bg-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Brain size={80} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">CLAUDE COWORK</h3>
              <p className="text-sm mb-6">The "Creative Strategist". Unmatched in nuance, brand voice, and complex decision-making.</p>
              <ul className="space-y-2 text-xs uppercase tracking-widest">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Human-like Reasoning</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Advanced Artifacts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Multi-modal Vision</li>
              </ul>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Verdict?</h2>
          <p>
            Stop looking for a "better" tool. Start looking for the right tool for the job. 
            <span className="text-[#064e3b] font-bold"> OpenClaw</span> is your technical co-founder. 
            <span className="text-[#064e3b] font-bold"> Claude Cowork</span> is your Chief of Staff.
          </p>

          <div className="border-l-4 border-[#064e3b] pl-8 py-6 bg-white/5 italic">
            "The most successful founders I work with don't choose one. They build a system where both agents talk to each other."
          </div>

          <p>
            At Calpir, we don't just give you access to these tools. We build the bridge between them. 
            Imagine OpenClaw scraping your competitors' data while Claude analyzes the strategy and drafts your response. 
            That's not the future—that's what we're deploying for our clients today.
          </p>
        </div>
      )
    },
    'setup-my-llc': {
      tag: "LEGAL",
      title: "The Founder's Guide to Setting Up Your LLC",
      author: "Abdullah Mustafa",
      date: "March 20, 2026",
      readTime: "6 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Stop overpaying lawyers $5,000 for a $200 filing.
          </p>
          
          <div className="bg-red-900/10 border border-red-900/30 p-8 flex gap-6 items-start">
            <AlertTriangle className="text-red-900 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-red-900 uppercase mb-2">The #1 Mistake</h4>
              <p className="text-sm">Waiting until you have "revenue" to legalize. If you're building, you're liable. Protect your personal assets from day one.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="text-4xl font-black text-[#064e3b]">01</div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Pick Your State</h3>
                <p>Delaware is the standard for VC-backed startups. Wyoming is the king of privacy and low fees for bootstrapped founders.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="text-4xl font-black text-[#064e3b]">02</div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Get Your EIN</h3>
                <p>Your business's social security number. It's free from the IRS. Don't let "filing services" charge you $150 for this.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="text-4xl font-black text-[#064e3b]">03</div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Operating Agreement</h3>
                <p>The most important document you'll never read—until you have a partner dispute. Get it right the first time.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#064e3b] p-12 text-center">
            <h3 className="text-3xl font-black mb-6">Need a Legal Infrastructure?</h3>
            <p className="mb-8 opacity-80">We handle the full setup as part of our Starter package. No headaches, just a ready-to-run business.</p>
            <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-8 py-6 rounded-none font-black uppercase tracking-tighter">
              <Link to="/packages">View Starter Package</Link>
            </Button>
          </div>
        </div>
      )
    },
    'clickup-setup': {
      tag: "OPERATIONS",
      title: "ClickUp Setup: Stop Drowning in Tasks",
      author: "Abdullah Mustafa",
      date: "March 15, 2026",
      readTime: "10 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            Most ClickUp workspaces are where productivity goes to die.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-6 bg-white/5 text-center">
              <Zap className="mx-auto mb-4 text-[#064e3b]" size={32} />
              <h4 className="font-black uppercase mb-2">Automate</h4>
              <p className="text-xs">Status changes should trigger notifications, not manual Slack messages.</p>
            </div>
            <div className="border border-white/10 p-6 bg-white/5 text-center">
              <TrendingUp className="mx-auto mb-4 text-[#064e3b]" size={32} />
              <h4 className="font-black uppercase mb-2">Visualize</h4>
              <p className="text-xs">If it's not on a dashboard, it's not happening. Use custom views.</p>
            </div>
            <div className="border border-white/10 p-6 bg-white/5 text-center">
              <CheckCircle2 className="mx-auto mb-4 text-[#064e3b]" size={32} />
              <h4 className="font-black uppercase mb-2">Standardize</h4>
              <p className="text-xs">Use templates for everything. Consistency is the only way to scale.</p>
            </div>
          </div>

          <p>
            The secret to a 7-figure workspace isn't the features—it's the hierarchy. 
            We build our clients' workspaces with a strict **Space > Folder > List** structure that mirrors their actual business departments. 
            Marketing doesn't see Engineering's mess. Operations sees everything.
          </p>
        </div>
      )
    },
    'how-to-not-waste-money': {
      tag: "STRATEGY",
      title: "Startup Burn: How to Not Waste Your First $50k",
      author: "Abdullah Mustafa",
      date: "March 10, 2026",
      readTime: "12 min read",
      content: (
        <div className="space-y-12 mono text-lg leading-relaxed text-white/70">
          <p className="text-2xl text-white font-black uppercase tracking-tighter">
            I've seen founders burn $50,000 on a "custom app" before they even had a single customer.
          </p>
          
          <div className="border border-red-900/30 p-12 bg-red-900/5">
            <h3 className="text-3xl font-black text-red-900 uppercase mb-8">The Burn List (Avoid These)</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/50"><X className="text-red-900" size={20} /> $10k+ Custom Branding (before PMF)</li>
              <li className="flex items-center gap-4 text-white/50"><X className="text-red-900" size={20} /> Full-time hires for part-time tasks</li>
              <li className="flex items-center gap-4 text-white/50"><X className="text-red-900" size={20} /> Expensive office space</li>
              <li className="flex items-center gap-4 text-white/50"><X className="text-red-900" size={20} /> "Stealth mode" marketing</li>
            </ul>
          </div>

          <p>
            The goal of your first $50k is to find **Product-Market Fit**, not to look like a Fortune 500 company. 
            Invest in systems that save you time and capture leads. 
            A $1,500 infrastructure that automates your sales is worth 10x more than a $15,000 logo.
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