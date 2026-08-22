"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { featureDetailsMap } from '@/data/featureDetails';

interface FeatureModalProps {
  featureKey: string | null;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ featureKey, onClose }) => {
  if (!featureKey) return null;
  const detail = featureDetailsMap[featureKey];
  if (!detail) return null;

  return (
    <Dialog open={!!featureKey} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white border border-zinc-200 text-zinc-950 max-w-2xl p-6 md:p-8 rounded-none shadow-2xl">
        <DialogHeader className="text-left space-y-2 border-b border-zinc-200 pb-4">
          <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 border border-emerald-200 inline-block w-fit">
            {detail.badge}
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">
            {detail.title}
          </DialogTitle>
          <DialogDescription className="mono text-xs md:text-sm text-zinc-600 leading-relaxed pt-1">
            {detail.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4">
          <div>
            <h4 className="mono text-xs uppercase tracking-wider text-zinc-700 font-bold mb-3">
              What Our Squad Actually Delivers:
            </h4>
            <div className="space-y-2.5">
              {detail.whatWeDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm mono text-zinc-800">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border border-emerald-200 bg-emerald-50 space-y-1.5">
            <div className="mono text-[11px] uppercase tracking-wider text-emerald-900 font-bold">
              Why This Matters For Your Business:
            </div>
            <p className="text-xs md:text-sm text-zinc-700 mono leading-relaxed">
              {detail.whyItMatters}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-zinc-200">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            className="border-zinc-300 text-zinc-900 hover:bg-zinc-100 rounded-none mono text-xs uppercase font-bold"
          >
            Close Window
          </Button>
          <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-none mono text-xs uppercase font-black btn-hover">
            <Link to="/contact" onClick={onClose}>
              Discuss This With Our Team <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureModal;