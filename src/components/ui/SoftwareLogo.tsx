"use client";

import React, { useState } from 'react';
import { SoftwareItem } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

interface SoftwareLogoProps {
  tool: SoftwareItem;
  className?: string;
}

const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ tool, className }) => {
  const [stage, setStage] = useState<number>(0);

  // Stage 0: SimpleIcons official CDN with classic emerald tint
  // Stage 1: Unavatar domain icon
  // Stage 2: Google S2 high-res favicon
  // Stage 3: Monogram brand badge fallback

  const primaryUrl = `https://cdn.simpleicons.org/${tool.slug}/059669`;
  const unavatarUrl = tool.domain ? `https://unavatar.io/${tool.domain}` : `https://unavatar.io/${tool.slug}`;
  const googleFaviconUrl = tool.domain ? `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128` : '';

  const getSource = () => {
    if (stage === 0) return primaryUrl;
    if (stage === 1) return unavatarUrl;
    if (stage === 2 && googleFaviconUrl) return googleFaviconUrl;
    return null;
  };

  const currentSource = getSource();

  const handleImageError = () => {
    setStage((prev) => prev + 1);
  };

  if (!currentSource || stage >= 3) {
    // Generate initials (e.g., "GH" for GoHighLevel, "AP" for Activepieces)
    const initials = tool.name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <div 
        className={cn(
          "w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-800 font-black text-xs flex items-center justify-center mono shrink-0 shadow-sm",
          className
        )}
        title={tool.name}
      >
        {initials || tool.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={cn("w-10 h-10 bg-zinc-50 border border-zinc-200 flex items-center justify-center p-2 group-hover:border-emerald-600 transition-colors shrink-0", className)}>
      <img
        src={currentSource}
        alt={`${tool.name} Logo`}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default SoftwareLogo;