"use client";

import React, { useState, useEffect } from 'react';
import { SoftwareItem } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

interface SoftwareLogoProps {
  tool: SoftwareItem;
  className?: string;
}

/**
 * One colour, always.
 *
 * This used to try four sources in order: a Simple Icons silhouette, then
 * unavatar, then a Google favicon, then a monogram. The first is a flat
 * silhouette that a CSS mask paints exactly emerald. The middle two are full
 * colour brand favicons pushed through an approximate hue rotate filter, which
 * came out a slightly different colour for every tool and made the grid look
 * like a bag of mismatched stickers.
 *
 * So there are now two states: the masked silhouette, or an emerald monogram.
 * Both are exactly #047857. That also drops two third party image hosts from
 * the page, which is two fewer things to be slow or unavailable.
 */
const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ tool, className }) => {
  const [failed, setFailed] = useState(false);
  const source = `https://cdn.simpleicons.org/${tool.slug}/047857`;

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = source;
    img.onerror = () => {
      if (!cancelled) setFailed(true);
    };
    return () => {
      cancelled = true;
    };
  }, [source]);

  const initials =
    tool.name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || tool.name.slice(0, 2).toUpperCase();

  if (failed) {
    return (
      <div
        className={cn(
          'w-10 h-10 bg-emerald-50 border border-emerald-200 group-hover:border-emerald-600 text-emerald-700 font-black text-xs flex items-center justify-center mono shrink-0 transition-all',
          className
        )}
        title={tool.name}
        aria-label={tool.name}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-10 h-10 bg-emerald-50/60 border border-emerald-200 group-hover:border-emerald-600 flex items-center justify-center p-2 transition-all shrink-0',
        className
      )}
      title={tool.name}
      aria-label={tool.name}
    >
      {/* A mask fills the silhouette with one exact colour, so every logo in the
          grid matches regardless of the brand's own palette. */}
      <div
        className="w-6 h-6 bg-emerald-700 group-hover:bg-emerald-600 transition-colors duration-200"
        style={{
          WebkitMaskImage: `url("${source}")`,
          maskImage: `url("${source}")`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    </div>
  );
};

export default SoftwareLogo;
