"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Photo } from '@/data/planPhotos';

/**
 * A full width photograph with a line over it.
 *
 * Used to break up long pages. The image is darkened with a gradient rather
 * than a flat overlay so the faces stay readable while the text still has
 * enough contrast at the bottom left, where the eye lands.
 */

interface Props {
  photo: Photo;
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  cta?: { label: string; href: string };
  /** Shorter band, for pages where it is a divider rather than a statement. */
  compact?: boolean;
}

const PhotoBand = ({ photo, eyebrow, title, body, cta, compact }: Props) => (
  <section className="relative border-b border-slate-200">
    <div className={compact ? 'relative h-[280px] sm:h-[340px]' : 'relative h-[380px] sm:h-[460px]'}>
      <img
        src={photo.band}
        alt={photo.alt}
        width={1500}
        height={752}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-900/95 via-deep-900/75 to-deep-800/35" />

      <div className="relative h-full container-custom flex items-end pb-9 sm:pb-12">
        <div className="max-w-[620px] text-white">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-white text-[1.9rem] sm:text-[2.6rem] font-extrabold tracking-tight leading-[1.05] mb-3">
            {title}
          </h2>
          {body && <p className="text-slate-200 text-[16.5px] leading-relaxed mb-6 max-w-[520px]">{body}</p>}
          {cta && (
            <Button
              asChild
              className="bg-white hover:bg-slate-100 text-navy px-6 py-5 rounded-xl font-semibold text-[15px]"
            >
              <Link to={cta.href}>
                {cta.label} <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default PhotoBand;
