"use client";

import React, { useState } from 'react';
import { SoftwareItem } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

interface SoftwareLogoProps {
  tool: SoftwareItem;
  className?: string;
}

// Emerald green filter that tints any icon or image into #059669
const EMERALD_FILTER = "invert(42%) sepia(85%) saturate(720%) hue-rotate(128deg) brightness(92%) contrast(97%)";

const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ tool, className }) => {
  const [stage, setStage] = useState<number>(0);

  // Stage 0: SimpleIcons official CDN with #059669 emerald color
  // Stage 1: Unavatar domain icon with emerald filter
  // Stage 2: Google S2 high-res favicon with emerald filter
  // Stage 3: Branded emerald monogram badge

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
    // Generate initials (e.g. "GH" for GoHighLevel, "AP" for Activepieces)
    const initials = tool.name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <div 
        className={cn(
          "w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-700 font-black text-xs flex items-center justify-center mono shrink-0 shadow-sm transition-transform group-hover:scale-105",
          className
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
        "w-10 h-10 bg-emerald-50/50 border border-emerald-100 group-hover:border-emerald-500 flex items-center justify-center p-2 transition-all shrink-0 shadow-sm", 
        className
      )}
    >
      <img
        src={currentSource}
        alt={`${tool.name} Logo`}
        style={stage > 0 ? { filter: EMERALD_FILTER } : undefined}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default SoftwareLogo;