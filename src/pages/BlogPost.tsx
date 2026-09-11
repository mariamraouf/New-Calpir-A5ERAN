"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import postsData from '@/content/posts.json';
import articleBlocks from '@/content/articleBlocks.json';
import ArticleRenderer, { Block } from '@/content/ArticleRenderer';

const BlogPost = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const blocks = ((articleBlocks as Record<string, Block[]>)[post.slug] || []) as Block[];
  const canonicalUrl = `https://www.calpir.com/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `https://www.calpir.com${post.image}`;

  const faqBlock = blocks.find((b) => b.t === 'faq');

  // metaTitle is written to stay under Google's ~60 character display limit.
  // The full headline is still the H1 and the schema headline.
  const metaTitle = (post as { metaTitle?: string }).metaTitle || `${post.title} | Calpir`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': 'https://www.calpir.com/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  const faqSchema = faqBlock
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (faqBlock.items as { q: string; a: string }[]).map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  // Next and previous, so every article links to a sibling.
  const idx = postsData.findIndex((p) => p.slug === post.slug);
  const next = postsData[(idx + 1) % postsData.length];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        {faqSchema ? (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        ) : null}
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-16 px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Link
                to="/blog"
                className="w-12 h-12 border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 text-zinc-900 transition-all shadow-sm"
                aria-label="Back to the blog"
              >
                <ArrowLeft size={20} />
              </Link>
              <SectionLabel>FOUNDER GUIDE</SectionLabel>
            </div>

            <h1 className="article-title text-3xl md:text-5xl font-bold mb-8 leading-[1.1] text-zinc-950 max-w-[20ch] md:max-w-[24ch]">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 py-6 border-y border-zinc-200 mono text-xs uppercase tracking-wider text-zinc-600 font-bold">
              <div className="flex items-center gap-2">
                <User size={14} className="text-emerald-700" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-700" /> {post.datePublished}
              </div>
              {post.readingTime ? (
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-emerald-700" /> {post.readingTime} read
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="px-6 pt-12">
        <div className="container-custom max-w-[850px]">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width={1200}
            height={630}
            className="w-full h-auto border border-zinc-200 shadow-sm"
            loading="eager"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container-custom max-w-[850px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <ArticleRenderer blocks={blocks} />
          </motion.div>

          {next && next.slug !== post.slug ? (
            <div className="mt-16 pt-8 border-t border-zinc-200">
              <p className="mono text-xs uppercase tracking-widest text-emerald-700 font-black mb-3">
                Read next
              </p>
              <Link
                to={`/blog/${next.slug}`}
                className="article-title text-xl md:text-2xl font-bold text-zinc-950 hover:text-emerald-700 transition-colors"
              >
                {next.title}
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-zinc-200 bg-emerald-50/60">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl mb-8 font-black uppercase tracking-tight text-zinc-950">
            Ready to Deploy Your <br /> Complete Business Engine?
          </h2>
          <p className="text-lg text-zinc-700 mb-12 max-w-[600px] mx-auto leading-relaxed">
            Book a free 30 minute consultation with the Calpir team to map out your full company
            setup.
          </p>
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight btn-hover"
          >
            <Link to="/contact">
              Book Free Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
