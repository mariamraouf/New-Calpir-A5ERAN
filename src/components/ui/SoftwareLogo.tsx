"use client";

import React, { useState, useEffect } from 'react';
import { SoftwareItem } from '@/data/softwareCatalog';
import { cn } from '@/lib/utils';

interface SoftwareLogoProps {
  tool: SoftwareItem;
  className?: string;
}

const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ tool, className }) => {
  const [stage, setStage] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Stage 0: SimpleIcons pure SVG silhouette
  // Stage 1: Unavatar domain icon
  // Stage 2: Google S2 domain icon
  // Stage 3: Monogram brand fallback
  const primaryUrl = `https://cdn.simpleicons.org/${tool.slug}/047857`;
  const unavatarUrl = tool.domain ? `https://unavatar.io/${tool.domain}` : `https://unavatar.io/${tool.slug}`;
  const googleFaviconUrl = tool.domain ? `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128` : '';

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
    img.onload = () => {
      setImageLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      setImageLoaded(false);
      setStage((prev) => prev + 1);
    };
  }, [stage, currentSource]);

  // Fallback monogram if image cannot be loaded
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
          "w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-800 font-black text-xs flex items-center justify-center mono shrink-0 shadow-sm transition-transform group-hover:scale-105",
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
        "w-10 h-10 bg-emerald-50/60 border border-emerald-200 group-hover:border-emerald-600 flex items-center justify-center p-2 transition-all shrink-0 shadow-sm", 
        className
      )}
      title={tool.name}
    >
      {stage === 0 ? (
        /* CSS mask guarantees 100% exact identical emerald green fill (#047857) matching the Anthropic/Claude logo */
        <div
          className="w-6 h-6 bg-emerald-700 group-hover:bg-emerald-600 transition-all duration-200 group-hover:scale-110"
          style={{
            WebkitMaskImage: `url("${currentSource}")`,
            maskImage: `url("${currentSource}")`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        />
      ) : (
        /* Fallback source with exact emerald hue tint */
        <img
          src={currentSource}
          alt={`${tool.name} Logo`}
          style={{
            filter: "invert(35%) sepia(85%) saturate(800%) hue-rotate(130deg) brightness(85%) contrast(100%)"
          }}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default SoftwareLogo;