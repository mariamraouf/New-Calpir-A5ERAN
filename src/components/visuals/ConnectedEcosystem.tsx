"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: <Globe size={18} />, label: 'Website', angle: 0 },
  { id: 'crm', icon: <BarChart3 size={18} />, label: 'CRM', angle: 51.4 },
  { id: 'marketing', icon: <Megaphone size={18} />, label: 'Marketing', angle: 102.8 },
  { id: 'ops', icon: <Settings size={18} />, label: 'Operations', angle: 154.2 },
  { id: 'ai-agents', icon: <Bot size={18} />, label: 'AI Agents', angle: 205.6 },
  { id: 'automation', icon: <Zap size={18} />, label: 'Automation', angle: 257 },
  { id: 'strategy', icon: <Brain size={18} />, label: 'AI Strategy', angle: 308.4 },
];

interface ConnectedEcosystemProps {
  className?: string;
  highlightedNode?: string;
  compact?: boolean;
}

const ConnectedEcosystem: React.FC<ConnectedEcosystemProps> = ({ 
  className, 
  highlightedNode, 
  compact = false 
}) => {
  const size = compact ? 260 : 340;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = compact ? 95 : 125;
  const nodeBoxSize = compact ? 38 : 46;

  return (
    <div 
      className={cn("relative mx-auto select-none my-4", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Connecting Lines from Center */}
        {nodes.map((node) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
          const isHighlighted = highlightedNode === node.id;

          return (
            <motion.line
              key={`line-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={isHighlighted ? "#10b981" : "#064e3b"}
              strokeWidth={isHighlighted ? "2.5" : "1.5"}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHighlighted ? 1 : 0.35,
                strokeWidth: isHighlighted ? 2.5 : 1.5
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Center Logo Node */}
      <motion.div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/50 bg-black flex items-center justify-center p-2 overflow-hidden z-10 shadow-[0_0_25px_rgba(16,185,129,0.3)]",
          compact ? "w-14 h-14" : "w-18 h-18"
        )}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="/logo-with-transparent-background.png" 
          onError={(e) => {
            if (e.currentTarget.src !== '/logo.png') {
              e.currentTarget.src = '/logo.png';
            }
          }}
          alt="Calpir Logo" 
          className="w-full h-full object-contain bg-transparent"
        />
      </motion.div>

      {/* Outer Orbit Nodes */}
      {nodes.map((node) => {
        const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
        const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
        const isActive = highlightedNode === node.id;

        return (
          <motion.div
            key={node.id}
            className={cn(
              "absolute flex items-center justify-center transition-all duration-300 border",
              isActive 
                ? "bg-emerald-500 text-black border-emerald-300 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.6)] z-20" 
                : "bg-[#0f0f12] text-emerald-400 border-white/15 hover:border-emerald-500/50 hover:bg-emerald-950/30 hover:scale-105 z-10"
            )}
            style={{ 
              width: `${nodeBoxSize}px`,
              height: `${nodeBoxSize}px`,
              left: `${x}px`, 
              top: `${y}px`, 
              transform: 'translate(-50%, -50%)' 
            }}
            title={node.label}
          >
            {node.icon}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;