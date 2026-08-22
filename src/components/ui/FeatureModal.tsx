"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { featureDetailsMap, FeatureDetail } from '@/data/featureDetails';

interface FeatureModalProps {
  featureKey: string | null;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ featureKey, onClose }) => {
  if (!featureKey) return null;
  const detail: FeatureDetail | undefined = featureDetailsMap[featureKey];

  if (!detail) return null;

  return (
    <Dialog open={!!featureKey} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#0f0f11] border border-emerald-500/30 text-white max-w-[620px] p-6 md:p-8 rounded-none shadow-2xl">
        <DialogHeader className="space-y-3 text-left">
          <div className="flex items-center gap-2 mono text-xs uppercase tracking-widest text-emerald-400 font-black">
            <Sparkles size={14} />
            <span>{detail.badge}</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
            {detail.title}
          </DialogTitle>
          <DialogDescription className="text-zinc-300 text-sm leading-relaxed">
            {detail.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4 border-t border-white/10 pt-4">
          <div>
            <div className="mono text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3">
              What Calpir Does Exactly For You:
            </div>
            <ul className="space-y-2.5">
              {detail.whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-200 mono leading-relaxed">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-emerald-950/30 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mono mb-1">
              <HelpCircle size={14} /> Why This Helps You Win
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mono">
              {detail.whyItMatters}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-wider text-xs py-5 rounded-none">
            <Link to="/contact" onClick={onClose}>
              Talk To Our Squad <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </Button>
          <Button variant="outline" onClick={onClose} className="border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase text-xs py-5 rounded-none">
            Got It
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureModal;