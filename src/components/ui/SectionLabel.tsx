"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <div className="w-2 h-2 bg-[#064e3b]" />
      <span className="mono text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/50">
        {children}
      </span>
      <div className="h-px bg-white/10 flex-grow" />
    </div>
  );
};

export default SectionLabel;