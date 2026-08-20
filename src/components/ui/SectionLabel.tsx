"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children, className }) => {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 mono text-xs font-bold uppercase tracking-widest", className)}>
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </div>
  );
};

export default SectionLabel;