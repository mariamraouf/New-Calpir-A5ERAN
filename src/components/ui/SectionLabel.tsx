"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 mono text-xs uppercase tracking-widest font-bold mb-4",
      className
    )}>
      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
      {children}
    </div>
  );
};

export default SectionLabel;