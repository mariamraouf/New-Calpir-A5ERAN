"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: <Globe className="w-7 h-7 md:w-8 md:h-8" />, label: 'WEBSITE', angle: 0 },
  { id: 'crm', icon: <BarChart3 className="w-7 h-7 md:w-8 md:h-8" />, label: 'CRM', angle: 51.4 },
  { id: 'marketing', icon: <Megaphone className="w-7 h-7 md:w-8 md:h-8" />, label: 'MARKETING', angle: 102.8 },
  { id: 'ops', icon: <Settings className="w-7 h-7 md:w-8 md:h-8" />, label: 'OPERATIONS', angle: 154.2 },
  { id: 'ai-agents', icon: <Bot className="w-7 h-7 md:w-8 md:h-8" />, label: 'AI AGENTS', angle: 205.6 },
  { id: 'automation', icon: <Zap className="w-7 h-7 md:w-8 md:h-8" />, label: 'AUTOMATION', angle: 257 },
  { id: 'strategy', icon: <Brain className="w-7 h-7 md:w-8 md:h-8" />, label: 'AI STRATEGY', angle: 308.4 },
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
  const size = compact ? 300 : 520;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = compact ? 105 : 190;
  const nodeBoxSize = compact ? 50 : 80;
  const logoSize = compact ? 65 : 105;

  return (
    <div 
      className={cn("relative select-none flex items-center justify-center shrink-0 max-w-full", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Background Soft Pulsing Glow */}
      <motion.div 
        className="absolute rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{
          width: `${size * 0.75}px`,
          height: `${size * 0.75}px`,
        }}
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbit Track Dotted Ring */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={radius} 
          fill="none" 
          stroke="#a7f3d0" 
          strokeWidth="1.5" 
          strokeDasharray="4 6" 
        />

        {/* Connecting Lines & Animated Flowing Data Pulses */}
        {nodes.map((node, i) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
          const isHighlighted = highlightedNode === node.id;

          return (
            <g key={`line-group-${node.id}`}>
              {/* Base Line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={isHighlighted ? "#059669" : "#6ee7b7"}
                strokeWidth={isHighlighted ? "2.5" : "1.75"}
                strokeOpacity={isHighlighted ? 1 : 0.7}
              />

              {/* Little static node dot on the orbit line */}
              <circle
                cx={x}
                cy={y}
                r={3}
                fill={isHighlighted ? "#047857" : "#059669"}
              />

              {/* Animated Moving Data Pulse Circle along the line */}
              <motion.circle
                r={compact ? 2.5 : 3.5}
                fill="#047857"
                initial={{ cx: centerX, cy: centerY, opacity: 0 }}
                animate={{
                  cx: [centerX, x, centerX],
                  cy: [centerY, y, centerY],
                  opacity: [0, 1, 0.8, 0],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 2.8 + (i * 0.3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center Calpir Logo (No circle enclosing it, pure floating logo) */}
      <motion.div 
        className="absolute z-20 flex items-center justify-center cursor-pointer pointer-events-auto"
        style={{
          left: `${centerX - logoSize / 2}px`,
          top: `${centerY - logoSize / 2}px`,
          width: `${logoSize}px`,
          height: `${logoSize}px`,
        }}
        animate={{ 
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="/logo-with-transparent-background.png" 
          onError={(e) => {
            if (e.currentTarget.src !== '/logo.png') {
              e.currentTarget.src = '/logo.png';
            }
          }}
          alt="Calpir Core" 
          className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(5,150,105,0.35)]"
        />
      </motion.div>

      {/* Outer Orbit Nodes (Pure floating icons and text, NO boxes) */}
      {nodes.map((node, index) => {
        const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const isActive = highlightedNode === node.id;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, index % 2 === 0 ? -6 : 6, 0],
              x: [0, index % 2 === 0 ? 4 : -4, 0],
            }}
            transition={{
              y: {
                duration: 3 + (index * 0.4),
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 3.6 + (index * 0.4),
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.6 },
            }}
            whileHover={{ scale: 1.25, zIndex: 40 }}
            className={cn(
              "absolute flex flex-col items-center justify-center cursor-pointer group/node select-none transition-transform",
              isActive ? "z-30 scale-110" : "z-10"
            )}
            style={{ 
              width: `${nodeBoxSize}px`,
              height: `${nodeBoxSize}px`,
              left: `${x}px`, 
              top: `${y}px`, 
            }}
          >
            {/* Clean Floating Icon */}
            <div className={cn(
              "transition-all duration-200 p-1.5 rounded-full",
              isActive 
                ? "text-emerald-950 scale-115 drop-shadow-[0_0_12px_rgba(5,150,105,0.6)]" 
                : "text-emerald-700 group-hover/node:text-emerald-900 group-hover/node:scale-115 group-hover/node:drop-shadow-[0_0_10px_rgba(5,150,105,0.4)]"
            )}>
              {node.icon}
            </div>

            {/* Floating Label Below Icon */}
            <span className={cn(
              "mono uppercase tracking-wider font-black mt-1 text-center leading-none px-1 transition-colors",
              compact ? "text-[8px]" : "text-[10px] md:text-[11px]",
              isActive 
                ? "text-emerald-950 font-extrabold" 
                : "text-zinc-800 group-hover/node:text-emerald-800 font-bold"
            )}>
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;