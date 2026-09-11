"use client";

import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HumanCaptchaProps {
  onVerified: (verified: boolean) => void;
  isVerified: boolean;
}

export const HumanCaptcha: React.FC<HumanCaptchaProps> = ({ onVerified, isVerified }) => {
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (isVerified) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onVerified(true);
    }, 450);
  };

  return (
    <div 
      onClick={handleVerify}
      className={cn(
        "border p-4 flex items-center justify-between cursor-pointer select-none transition-all",
        isVerified 
          ? "border-emerald-500 bg-emerald-950/40 text-emerald-300" 
          : "border-white/20 bg-black/60 hover:border-white/40 text-zinc-300"
      )}
    >
      <div className="flex items-center gap-3.5">
        <div className={cn(
          "w-6 h-6 border flex items-center justify-center transition-all",
          isVerified 
            ? "border-emerald-400 bg-emerald-500 text-black" 
            : "border-white/40 bg-white/5"
        )}>
          {loading ? (
            <div className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          ) : isVerified ? (
            <Check size={16} strokeWidth={3} />
          ) : null}
        </div>
        <div className="flex flex-col">
          <span className="mono text-xs uppercase tracking-wider font-bold text-white">
            {isVerified ? "Human Verified" : "I am a human founder"}
          </span>
          <span className="text-[10px] text-zinc-400 mono">Click to confirm real transmission</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-emerald-400 text-xs mono font-bold opacity-80">
        <ShieldCheck size={16} />
        <span className="hidden sm:inline">Calpir Security</span>
      </div>
    </div>
  );
};