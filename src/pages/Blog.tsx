"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Blog = () => {
  const posts = [
    { id: "01", tag: "LEGAL", title: "Setting Up a UK Limited Company: The 2026 Founder's Guide", excerpt: "Everything you need to know about Companies House, VAT, and legalizing your Bristol-based startup.", link: "/blog/setup-uk-limited-company" },
    { id: "02", tag: "AI_AGENTS", title: "How to Deploy AI Agents for 24/7 Customer Support", excerpt: "Stop losing leads at 3 AM. Learn how to build and train agents that actually solve problems.", link: "/blog/deploy-ai-agents-support" },
    { id: "03", tag: "AUTOMATION", title: "10 Workflow Automations Every Founder Needs in 2026", excerpt: "Save 20+ hours a week by automating the repetitive tasks eating your time.", link: "/blog/essential-workflow-automations" },
    { id: "04", tag: "CRM", title: "HubSpot vs. GoHighLevel: Choosing the Right CRM for Scale", excerpt: "A technical comparison of the two most powerful sales systems for growing businesses.", link: "/blog/hubspot-vs-gohighlevel" },
    { id: "05", tag: "SEO", title: "Technical SEO for Startups: Getting Found in the AI Search Era", excerpt: "How to optimize your site for both Google and AI-powered search engines like Perplexity.", link: "/blog/technical-seo-startups" },
    { id: "06", tag: "BRANDING", title: "Building a Brand Identity That Converts: More Than Just a Logo", excerpt: "The psychology of design and how to build a visual system that builds trust instantly.", link: "/blog/brand-identity-conversion" },
    { id: "07", tag: "FINANCE", title: "Automating Your Payroll and Accounting: Zero-Touch Finance", excerpt: "How to integrate Xero, Quickbooks, and payroll tools into one seamless ecosystem.", link: "/blog/automate-payroll-accounting" },
    { id: "08", tag: "STRATEGY", title: "The AI Strategy Roadmap: Where to Start and What to Ignore", excerpt: "Don't get distracted by hype. Focus on the AI implementations that drive actual ROI.", link: "/blog/ai-strategy-roadmap" },
    { id: "09", tag: "SALES", title: "Lead Qualification with AI: Doubling Your Sales Team's Efficiency", excerpt: "How to use AI to score leads and book meetings before a human even touches the deal.", link: "/blog/ai-lead-qualification" },
    { id: "10", tag: "TECH_STACK", title: "The 'Golden Stack' for 2026: The Tools We Use to Launch Businesses", excerpt: "A full breakdown of the integrated tools we use to build 7-figure infrastructures.", link: "/blog/golden-stack-2026" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6">
        <div className="container-custom">
          <SectionLabel>The Intelligence Hub</SectionLabel>
          <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-24">Insights.</h1>
          
          <div className="space-y-px bg-white/10 border border-white/10">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={post.link}
                className="group bg-black p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#064e3b]/10 transition-all"
              >
                <div className="max-w-[600px]">
                  <div className="mono text-[#064e3b] text-xs font-bold mb-4 tracking-widest">
                    [{post.id}] // {post.tag}
                  </div>
                  <h3 className="text-3xl md:text-4xl group-hover:text-[#064e3b] transition-colors">{post.title}</h3>
                  <p className="text-white/40 mono mt-4">{post.excerpt}</p>
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight />
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