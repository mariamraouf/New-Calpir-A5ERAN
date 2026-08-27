"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import postsData from '@/content/posts.json';
import articlesContent from '@/content/articles';

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
    "author": { "@type": "Organization", "name": post.author },
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
            Book a free 30 minute consultation with the Calpir team to map out your full company setup.
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