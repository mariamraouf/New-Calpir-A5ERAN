"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import { PLAN_PHOTOS, TEAM_PHOTO, BUILD_PHOTO, OWNER_PHOTO } from '@/data/planPhotos';
import SectionLabel from '@/components/ui/SectionLabel';
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
      
      <PageHero
        eyebrow="Written by the people who build it"
        title={<>Playbooks, prices <br />and plain answers.</>}
        body="In depth guides on setting a company up, what the software actually costs, and how the automation is built. Written by the team that does the work, researched against primary sources."
        image={PLAN_PHOTOS['brand-content-monthly'].band}
      />

      <section className="section-padding">
        <div className="container-custom">
          
          <div className="space-y-px bg-zinc-200 border border-slate-200 shadow-sm">
            {postsData.map((post, idx) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-emerald-50/60 transition-all block"
              >
                <div className="max-w-[800px]">
                  <div className="flex flex-wrap items-center gap-3 mono text-xs text-slate-500 tracking-wide mb-3">
                    <span className="text-emerald-800 font-bold">[{String(idx + 1).padStart(2, '0')}] // GUIDE</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User size={13} className="text-emerald-700" /> {post.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={13} className="text-emerald-700" /> {post.datePublished}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy group-hover:text-emerald-700 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{post.description}</p>
                </div>
                <div className="mt-6 md:mt-0 shrink-0">
                  <div className="w-14 h-14 border border-slate-300 flex items-center justify-center text-navy group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;