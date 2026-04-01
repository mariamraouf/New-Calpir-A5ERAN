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
    {
      id: "01",
      tag: "AI_TOOLS",
      title: "OpenClaw vs. Claude Cowork: Which AI Partner Wins?",
      excerpt: "A deep dive into the two most powerful AI agents for founders in 2026.",
      link: "/blog/openclaw-vs-claude-cowork"
    },
    {
      id: "02",
      tag: "LEGAL",
      title: "The Founder's Guide to Setting Up Your LLC (Without the Headache)",
      excerpt: "Stop overpaying lawyers. Here is the exact path to legalizing your startup.",
      link: "/blog/setup-my-llc"
    },
    {
      id: "03",
      tag: "OPERATIONS",
      title: "ClickUp Setup: Stop Drowning in Tasks",
      excerpt: "The exact hierarchy and automation rules we use to manage 7-figure companies.",
      link: "/blog/clickup-setup"
    },
    {
      id: "04",
      tag: "STRATEGY",
      title: "Startup Burn: How to Not Waste Your First $50k",
      excerpt: "Most founders burn their first check on the wrong things. Don't be one of them.",
      link: "/blog/how-to-not-waste-money"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6">
        <div className="container-custom">
          <SectionLabel>The Changelog</SectionLabel>
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