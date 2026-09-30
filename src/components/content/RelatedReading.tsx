"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import postsData from '@/content/posts.json';
import { tintAt } from '@/data/departmentTints';
import { cn } from '@/lib/utils';

/**
 * The reading that belongs beside a service or a department.
 *
 * Every service page ended at the buy button. Somebody who is not ready to
 * buy leaves with nothing, and the twenty articles we have written sit on a
 * blog nobody navigates to. Matching a page to two or three of them gives
 * that person a reason to stay and gives search a set of internal links
 * between pages that are genuinely about the same thing.
 *
 * Posts are chosen by explicit slug where we know the right ones, and
 * otherwise by matching words in the title, which is crude but never produces
 * something absurd.
 */

interface Post {
  slug: string;
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
}

const ALL = postsData as Post[];

/** Hand picked matches, because a keyword match cannot know these. */
export const READING_FOR: Record<string, string[]> = {
  'marketing-seo-monthly': ['how-to-setup-new-business-2026', 'what-to-start-with-launch-guide', 'best-crm-tools-comparison'],
  'ops-systems-monthly': ['essential-tech-stack-automations', 'n8n-vs-make-vs-zapier', 'sop-examples-small-business'],
  'sales-crm-monthly': ['best-crm-tools-comparison', 'crm-implementation-cost', 'gohighlevel-vs-hubspot'],
  'hr-admin-monthly': ['sop-examples-small-business', 'how-to-setup-new-business-2026', 'what-to-start-with-launch-guide'],
  'brand-content-monthly': ['what-to-start-with-launch-guide', 'how-to-setup-new-business-2026', 'ai-consulting-cost-small-business'],
  'compliance-filings-monthly': ['form-5472-foreign-owned-llc', 'setup-us-llc-foreign-founder', 'setup-uk-limited-company'],

  'formation-compliance': ['setup-us-llc-foreign-founder', 'ein-without-ssn', 'wyoming-vs-delaware-vs-new-mexico-llc'],
  'web-foundation': ['how-to-setup-new-business-2026', 'essential-tech-stack-automations', 'what-to-start-with-launch-guide'],
  'brand-creative': ['what-to-start-with-launch-guide', 'how-to-setup-new-business-2026', 'ai-consulting-cost-small-business'],
  'sales-marketing': ['best-crm-tools-comparison', 'gohighlevel-vs-hubspot', 'crm-implementation-cost'],
  'ai-automation': ['ai-agent-development-cost', 'deploy-ai-agents-support', 'ai-agents-replacing-saas'],
  'operations-growth': ['sop-examples-small-business', 'essential-tech-stack-automations', 'n8n-vs-make-vs-zapier'],
  'people-talent': ['sop-examples-small-business', 'how-to-setup-new-business-2026', 'setup-uk-limited-company'],
};

const STOP = new Set([
  'and', 'the', 'for', 'with', 'your', 'you', 'a', 'an', 'of', 'to', 'in', 'on',
  'setup', 'set', 'up', 'service', 'services', 'business', 'small',
]);

function byKeyword(seed: string, limit: number): Post[] {
  const words = seed.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3 && !STOP.has(w));
  if (words.length === 0) return ALL.slice(0, limit);
  const scored = ALL.map((post) => {
    const hay = `${post.title} ${post.description}`.toLowerCase();
    return { post, score: words.reduce((n, w) => n + (hay.includes(w) ? 1 : 0), 0) };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.post);
}

interface Props {
  /** A key in READING_FOR, when the page maps to a department or plan. */
  topic?: string;
  /** Free text to match on when there is no mapping, usually a page title. */
  seed?: string;
  /** Explicit slugs, when the page knows exactly what it wants. */
  slugs?: string[];
  limit?: number;
  heading?: string;
  intro?: string;
  className?: string;
}

const RelatedReading = ({
  topic, seed, slugs, limit = 3, heading, intro, className,
}: Props) => {
  const wanted = slugs || (topic ? READING_FOR[topic] : undefined);
  const posts = wanted
    ? wanted.map((sl) => ALL.find((p) => p.slug === sl)).filter(Boolean as unknown as (p: Post | undefined) => p is Post)
    : byKeyword(seed || '', limit);

  const chosen = posts.slice(0, limit);
  if (chosen.length === 0) return null;

  return (
    <section className={cn('py-12 sm:py-16 border-t border-slate-200 bg-slate-50/70', className)}>
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <p className="inline-flex items-center gap-2 text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-2">
              <BookOpen size={14} /> Worth reading first
            </p>
            <h2 className="text-navy text-[1.5rem] sm:text-[2rem] font-extrabold tracking-tight leading-snug">
              {heading || 'Before you spend anything.'}
            </h2>
            {intro && <p className="text-slate-600 text-[15.5px] mt-2 max-w-[560px]">{intro}</p>}
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
          >
            All {ALL.length} guides <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {chosen.map((post, i) => {
            const tint = tintAt(i);
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={cn(
                  'group rounded-2xl border p-6 flex flex-col transition-shadow hover:shadow-md',
                  tint.bg,
                  tint.border,
                )}
              >
                <span className={cn('text-[11.5px] font-bold tracking-wide uppercase mb-3', tint.ink)}>
                  Guide
                </span>
                <h3 className="text-navy text-[17px] font-extrabold leading-snug mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed mb-5 flex-grow line-clamp-3">
                  {post.description}
                </p>
                <span className={cn('inline-flex items-center gap-1.5 text-[14px] font-bold', tint.ink)}>
                  Read it <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedReading;
