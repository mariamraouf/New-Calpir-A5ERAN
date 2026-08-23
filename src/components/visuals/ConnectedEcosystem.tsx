"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />, label: 'WEBSITE', angle: 0, tag: '0.8s EDGE' },
  { id: 'crm', icon: <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />, label: 'CRM', angle: 51.4, tag: 'LIVE SYNC' },
  { id: 'marketing', icon: <Megaphone className="w-6 h-6 md:w-7 md:h-7" />, label: 'MARKETING', angle: 102.8, tag: 'MULTI-CH' },
  { id: 'ops', icon: <Settings className="w-6 h-6 md:w-7 md:h-7" />, label: 'OPERATIONS', angle: 154.2, tag: 'AUTO-SOP' },
  { id: 'ai-agents', icon: <Bot className="w-6 h-6 md:w-7 md:h-7" />, label: 'AI AGENTS', angle: 205.6, tag: '24/7 FLEET' },
  { id: 'automation', icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />, label: 'AUTOMATION', angle: 257, tag: 'WEBHOOKS' },
  { id: 'strategy', icon: <Brain className="w-6 h-6 md:w-7 md:h-7" />, label: 'AI STRATEGY', angle: 308.4, tag: 'ROADMAP' },
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
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const size = compact ? 310 : 540;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = compact ? 110 : 205;
  const nodeBoxSize = compact ? 56 : 84;
  const logoSize = compact ? 70 : 110;

  const currentActive = hoveredNode || highlightedNode;

  return (
    <div 
      className={cn("relative select-none flex items-center justify-center shrink-0 max-w-full my-auto", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Background Multi-Layer Ambient Glow */}
      <motion.div 
        className="absolute rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{
          width: `${size * 0.7}px`,
          height: `${size * 0.7}px`,
        }}
        animate={{
          scale: [0.92, 1.12, 0.92],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG Vector Connection Rays & Smart Flowing Data Streams */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          {/* Radial Gradient for central core aura */}
          <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Core Ambient Ring */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={logoSize * 0.75} 
          fill="url(#coreAura)"
        />

        {nodes.map((node, index) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
          const isSelected = currentActive === node.id;
          const isAnyHovered = currentActive !== null;

          return (
            <g key={`ray-group-${node.id}`}>
              {/* Base Connection Ray Line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={isSelected ? "#059669" : "#a7f3d0"}
                strokeWidth={isSelected ? 2.5 : 1.5}
                strokeOpacity={isSelected ? 0.95 : isAnyHovered ? 0.3 : 0.6}
                strokeDasharray={isSelected ? "none" : "none"}
                className="transition-all duration-300"
              />

              {/* Smart Flowing Data Stream / Beam */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={isSelected ? "#10b981" : "#059669"}
                strokeWidth={isSelected ? 3 : 2}
                strokeDasharray={compact ? "6, 28" : "8, 38"}
                strokeOpacity={isSelected ? 1 : 0.8}
                className="transition-opacity"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={index % 2 === 0 ? "46" : "-46"}
                  to="0"
                  dur={isSelected ? "1.1s" : `${2 + (index * 0.25)}s`}
                  repeatCount="indefinite"
                />
              </line>

              {/* Glowing Pulse Head for Active Node */}
              {isSelected && (
                <circle r="3.5" fill="#047857">
                  <animateMotion
                    path={`M ${centerX} ${centerY} L ${x} ${y}`}
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Center Calpir Logo Core */}
      <motion.div 
        className="absolute z-20 flex items-center justify-center cursor-pointer pointer-events-auto group/core"
        style={{
          left: `${centerX - logoSize / 2}px`,
          top: `${centerY - logoSize / 2}px`,
          width: `${logoSize}px`,
          height: `${logoSize}px`,
        }}
        whileHover={{ scale: 1.08 }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="/logo-with-transparent-background.png" 
          onError={(e) => {
            if (e.currentTarget.src !== '/logo.png') {
              e.currentTarget.src = '/logo.png';
            }
          }}
          alt="Calpir Core" 
          className="w-full h-full object-contain drop-shadow-[0_6px_20px_rgba(5,150,105,0.3)] transition-transform duration-300"
        />
      </motion.div>

      {/* Orbiting Interactive System Nodes */}
      {nodes.map((node, index) => {
        const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const isSelected = currentActive === node.id;
        const isDimmed = currentActive !== null && !isSelected;

        return (
          <motion.div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isDimmed ? 0.45 : 1, 
              scale: isSelected ? 1.18 : 1,
              y: isSelected 
                ? 0 
                : [0, index % 2 === 0 ? -7 : 7, 0],
              x: isSelected 
                ? 0 
                : [0, index % 2 === 0 ? 5 : -5, 0],
            }}
            transition={{
              y: {
                duration: 3.2 + (index * 0.35),
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 3.8 + (index * 0.35),
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.2 },
              scale: { duration: 0.25 }
            }}
            className={cn(
              "absolute flex flex-col items-center justify-center cursor-pointer group/node select-none transition-all",
              isSelected ? "z-40" : "z-10"
            )}
            style={{ 
              width: `${nodeBoxSize}px`,
              height: `${nodeBoxSize}px`,
              left: `${x}px`, 
              top: `${y}px`, 
            }}
          >
            {/* Floating Icon with Active Glow */}
            <div className={cn(
              "transition-all duration-300 p-2 rounded-full",
              isSelected 
                ? "text-emerald-950 bg-emerald-100/90 scale-125 shadow-[0_0_18px_rgba(5,150,105,0.45)] ring-2 ring-emerald-600/40" 
                : "text-emerald-700 group-hover/node:text-emerald-900 group-hover/node:scale-120 group-hover/node:drop-shadow-[0_0_12px_rgba(5,150,105,0.4)]"
            )}>
              {node.icon}
            </div>

            {/* Main Label */}
            <span className={cn(
              "mono uppercase tracking-wider font-black mt-1 text-center leading-none px-1 transition-colors",
              compact ? "text-[8px]" : "text-[10px] md:text-[11px]",
              isSelected 
                ? "text-emerald-950 font-extrabold" 
                : "text-zinc-800 group-hover/node:text-emerald-800 font-bold"
            )}>
              {node.label}
            </span>

            {/* Smart Micro-Badge on Hover (Non-compact only) */}
            {!compact && isSelected && (
              <motion.span 
                initial={{ opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 mono text-[8px] uppercase tracking-widest font-black text-emerald-800 bg-emerald-50 px-1.5 py-0.5 border border-emerald-300 shadow-sm whitespace-nowrap"
              >
                {node.tag}
              </motion.span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;