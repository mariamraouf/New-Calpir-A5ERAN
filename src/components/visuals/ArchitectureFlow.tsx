"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Database, Bot, Zap, ArrowRight, CheckCircle2, 
  ShieldCheck, Server, Sparkles, RefreshCw, Send, Mail
} from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  time: string;
  description: string;
  outputs: string[];
}

const stages: Stage[] = [
  {
    id: "capture",
    name: "1. Traffic & High-Speed Ingestion",
    badge: "SUB-1.5S SPEED",
    icon: Globe,
    time: "< 1.5s",
    description: "Visitor lands on edge-rendered React/Next.js store with 256-bit SSL and instant Google Search indexed schema.",
    outputs: ["Global Edge CDN", "DNS & 256-Bit SSL", "GA4 Conversion Event", "Device Fingerprint"]
  },
  {
    id: "qualify",
    name: "2. Autonomous AI Qualification",
    badge: "24/7 AGENT FLEET",
    icon: Bot,
    time: "Real-Time",
    description: "RAG AI Agent answers questions using private vector knowledge base, checks calendar availability, and qualifies deal size.",
    outputs: ["Zero Hallucinations", "Lead Intent Score", "Calendar Auto-Booking", "WhatsApp & Web Chat"]
  },
  {
    id: "sync",
    name: "3. CRM & Pipeline Routing",
    badge: "60-SEC RESPONSE",
    icon: Database,
    time: "< 30s",
    description: "HubSpot / GoHighLevel receives enriched contact, creates deal stage, and fires instant SMS & Slack notification to team.",
    outputs: ["Custom Stage Mapping", "Instant SMS Ping", "Lead Source Tracking", "Team Slack Dispatch"]
  },
  {
    id: "automate",
    name: "4. Zero-Manual Workflows",
    badge: "MAKE & ZAPIER",
    icon: Zap,
    time: "Automated",
    description: "Make.com scenario triggers automated invoice generation in Stripe/QuickBooks, registers project in ClickUp/Notion, and sends branded onboarding kit.",
    outputs: ["Stripe / QuickBooks Invoice", "ClickUp Board Setup", "DocuSign Contract", "Welcome Email Series"]
  }
];

export const ArchitectureFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <div className="border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
        <div>
          <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold flex items-center gap-1.5">
            <Sparkles size={14} className="text-emerald-600" /> Interactive Execution Pipeline
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-950 mt-1">
            How Data Flows Through Your Calpir System
          </h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="border border-zinc-300 hover:border-emerald-600 px-3 py-1.5 mono text-[11px] uppercase font-bold text-zinc-700 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw size={12} className={isPlaying ? "animate-spin text-emerald-600" : ""} />
            {isPlaying ? "Live Auto-Cycle" : "Paused"}
          </button>
        </div>
      </div>

      {/* Stage Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-6">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isCurrent = activeStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => {
                setActiveStage(idx);
                setIsPlaying(false);
              }}
              className={`p-3 text-left border transition-all flex flex-col justify-between ${
                isCurrent 
                  ? "border-emerald-600 bg-emerald-50 shadow-sm" 
                  : "border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={18} className={isCurrent ? "text-emerald-700" : "text-zinc-500"} />
                <span className={`mono text-[9px] uppercase font-bold px-1.5 py-0.5 border ${
                  isCurrent ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-zinc-600 border-zinc-200"
                }`}>
                  {stage.badge}
                </span>
              </div>
              <div className="mono text-xs uppercase font-black tracking-tight text-zinc-950">
                {stage.name.split('.')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Visual Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="border border-emerald-200 bg-emerald-50/40 p-6 space-y-5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-200/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-600 text-white shadow-sm">
                <CurrentIcon size={22} />
              </div>
              <div>
                <span className="mono text-[10px] uppercase tracking-widest text-emerald-800 font-bold">
                  Active Execution Layer // Phase {activeStage + 1}
                </span>
                <h4 className="text-lg md:text-xl font-black uppercase text-zinc-950 tracking-tight">
                  {current.name}
                </h4>
              </div>
            </div>
            <div className="mono text-xs text-zinc-700 bg-white border border-emerald-300 px-3 py-1 self-start md:self-auto font-bold">
              Latency: <span className="text-emerald-700 font-black">{current.time}</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-zinc-700 leading-relaxed mono">
            {current.description}
          </p>

          <div>
            <div className="mono text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-2.5">
              Live System Outputs & Sync Handshakes:
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {current.outputs.map((out, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-white border border-zinc-200 shadow-sm text-xs mono text-zinc-800 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate">{out}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 mono text-[11px] text-zinc-500 border-t border-zinc-100">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Encrypted 256-bit AES data transport</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Server size={14} className="text-emerald-600" />
          <span>Zero manual intervention required</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureFlow;