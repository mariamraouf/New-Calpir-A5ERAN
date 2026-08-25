"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import MetaSEO from '@/components/seo/MetaSEO';
import postsData from '@/content/posts.json';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Blog and Playbooks | Calpir"
        description="Founder playbooks on complete business setup, legal structures, CRM pipeline design, automation, and AI systems."
        path="/blog"
      />
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-24 px-6 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>The Intelligence Hub</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-zinc-950">Insights.</h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-[800px] mb-16 leading-relaxed">
            In depth playbooks, technical blueprints, and operational guides published by the engineering and launch team at Calpir.
          </p>
          
          <div className="space-y-px bg-zinc-200 border border-zinc-200 shadow-sm">
            {postsData.map((post, idx) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-emerald-50/60 transition-all block"
              >
                <div className="max-w-[800px]">
                  <div className="flex flex-wrap items-center gap-3 mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
                    <span className="text-emerald-800 font-bold">[{String(idx + 1).padStart(2, '0')}] // GUIDE</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User size={13} className="text-emerald-700" /> {post.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={13} className="text-emerald-700" /> {post.datePublished}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950 group-hover:text-emerald-700 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed">{post.description}</p>
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