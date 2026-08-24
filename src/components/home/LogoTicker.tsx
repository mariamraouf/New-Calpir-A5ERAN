"use client";

import React from 'react';
import { allSoftwareStack } from '@/data/softwareCatalog';
import SoftwareLogo from '@/components/ui/SoftwareLogo';

const TickerContent = () => (
  <div className="flex items-center gap-12 animate-scroll group-hover:pause">
    {allSoftwareStack.slice(0, 40).map((tool) => (
      <div key={tool.name} className="flex flex-col items-center gap-2 shrink-0">
        <SoftwareLogo tool={tool} className="w-12 h-12" />
        <span className="mono text-[10px] font-bold text-zinc-500">{tool.name}</span>
      </div>
    ))}
  </div>
);

const LogoTicker = () => {
  return (
    <div className="w-full overflow-hidden group py-10 bg-zinc-50/50 border-y border-zinc-200">
      <div 
        className="flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
};

export default LogoTicker;