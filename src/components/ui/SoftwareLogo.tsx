"use client";

import React, { useState, useEffect } from 'react';
import { SoftwareItem } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

interface SoftwareLogoProps {
  tool: SoftwareItem;
  className?: string;
}

/**
 * A tool's logo, in that tool's own colours.
 *
 * Every one of these used to be repainted Calpir green: the icon was fetched
 * with a colour baked into the URL, then drawn as a CSS mask filled with
 * emerald, and the fallback images carried a hue rotate filter on top. The
 * result was a hundred identical green silhouettes, which says nothing. Half
 * the point of showing the stack is that people recognise HubSpot orange,
 * Slack aubergine, Stripe indigo at a glance.
 *
 * Simple Icons serves each icon in its brand colour when no colour is asked
 * for, so the fix is mostly deletion. The tile behind it is neutral now,
 * because a green tile fights every logo that is not green.
 *
 * Four sources, in order, because no single one covers a hundred tools:
 * Simple Icons, then unavatar, then Google's favicon service, then initials.
 */
const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ tool, className }) => {
  const [stage, setStage] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  // No colour segment on the end: that is what gives the brand's own hex.
  const primaryUrl = `https://cdn.simpleicons.org/${tool.slug}`;
  const unavatarUrl = tool.domain
    ? `https://unavatar.io/${tool.domain}`
    : `https://unavatar.io/${tool.slug}`;
  const googleFaviconUrl = tool.domain
    ? `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`
    : '';

  const getSource = () => {
    if (stage === 0) return primaryUrl;
    if (stage === 1) return unavatarUrl;
    if (stage === 2 && googleFaviconUrl) return googleFaviconUrl;
    return null;
  };

  const currentSource = getSource();

  useEffect(() => {
    if (!currentSource || stage >= 3) {
      setHasError(true);
      return;
    }

    const img = new Image();
    img.src = currentSource;
    img.onload = () => setHasError(false);
    img.onerror = () => setStage((prev) => prev + 1);
  }, [stage, currentSource]);

  if (hasError || stage >= 3 || !currentSource) {
    const initials = tool.name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <div
        className={cn(
          'w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center mono shrink-0 transition-transform group-hover:scale-105',
          className,
        )}
        title={tool.name}
      >
        {initials || tool.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:border-slate-300 flex items-center justify-center p-1.5 transition-all shrink-0',
        className,
      )}
      title={tool.name}
    >
      <img
        src={currentSource}
        alt={`${tool.name} logo`}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
        loading="lazy"
      />
    </div>
  );
};

export default SoftwareLogo;
