"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * The hero every page wears.
 *
 * Ten pages had ten different opening sections: different top padding,
 * different type sizes, some centred, some not, some with a photograph and
 * some with nothing. A visitor moving between them could not tell they were
 * still on the same site.
 *
 * This is one shape: a photograph behind, a green wash over it, an eyebrow, a
 * headline, a sentence and up to two buttons, with an optional strip of
 * figures along the bottom. Pages differ by what they say, not by how they
 * are built.
 */

export interface HeroStat {
  value: string;
  label: string;
}

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  /** Photograph behind the wash. Falls back to a flat green if absent. */
  image?: string;
  imageAlt?: string;
  primary?: { label: string; href?: string; onClick?: () => void };
  secondary?: { label: string; href?: string; onClick?: () => void };
  stats?: HeroStat[];
  /** Shorter hero, for pages whose content starts immediately. */
  compact?: boolean;
  /** Anything extra under the buttons. */
  children?: React.ReactNode;
}

const PageHero = ({
  eyebrow, title, body, image, imageAlt, primary, secondary, stats, compact, children,
}: Props) => (
  <section className="relative overflow-hidden bg-deep">
    {image && (
      <img
        src={image}
        alt={imageAlt || ''}
        width={1500}
        height={752}
        loading="eager"
        decoding="async"
        aria-hidden={imageAlt ? undefined : true}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    )}

    {/* Two washes: one to darken for contrast, one to keep it green rather
        than letting the photograph's own colour take over the brand. */}
    <div className="absolute inset-0 bg-gradient-to-r from-deep-900/95 via-deep-900/80 to-deep-800/55" />
    <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_92%_12%,rgba(255,255,255,0.07),transparent_58%)]" />

    <div
      className={cn(
        'relative container-custom',
        compact ? 'pt-12 pb-12 sm:pt-16 sm:pb-14' : 'pt-14 pb-16 sm:pt-20 sm:pb-20',
      )}
    >
      <div className="max-w-[760px]">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-[12px] font-bold tracking-wide px-3.5 py-1.5 rounded-full mb-5 ring-1 ring-white/20">
            {eyebrow}
          </span>
        )}

        <h1
          className={cn(
            'text-white font-extrabold tracking-tight leading-[1.03] mb-4',
            compact
              ? 'text-[2rem] sm:text-[2.6rem]'
              : 'text-[2.3rem] sm:text-[3.1rem] lg:text-[3.5rem]',
          )}
        >
          {title}
        </h1>

        {body && (
          <p className="text-slate-200 text-[17px] sm:text-[18.5px] leading-relaxed max-w-[600px] mb-7">
            {body}
          </p>
        )}

        {(primary || secondary) && (
          <div className="flex flex-col sm:flex-row gap-3">
            {primary && (
              primary.href ? (
                <Button asChild className="bg-white hover:bg-emerald-50 text-deep px-7 py-6 rounded-xl font-bold text-[15px] shadow-lg shadow-black/10">
                  <Link to={primary.href}>
                    {primary.label} <ArrowRight size={17} className="ml-1.5" />
                  </Link>
                </Button>
              ) : (
                <Button type="button" onClick={primary.onClick} className="bg-white hover:bg-emerald-50 text-deep px-7 py-6 rounded-xl font-bold text-[15px] shadow-lg shadow-black/10">
                  {primary.label} <ArrowRight size={17} className="ml-1.5" />
                </Button>
              )
            )}
            {secondary && (
              secondary.href ? (
                <Button asChild variant="outline" className="border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 py-6 rounded-xl font-semibold text-[15px]">
                  <Link to={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : (
                <Button type="button" variant="outline" onClick={secondary.onClick} className="border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 py-6 rounded-xl font-semibold text-[15px]">
                  {secondary.label}
                </Button>
              )
            )}
          </div>
        )}

        {children}
      </div>

      {stats && stats.length > 0 && (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-deep-900/55 ring-1 ring-white/20 backdrop-blur px-4 py-3.5"
            >
              <div className="price-figure text-white text-[1.55rem] font-extrabold leading-none">
                {s.value}
              </div>
              <div className="text-slate-300 text-[12.5px] font-semibold mt-1.5 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
