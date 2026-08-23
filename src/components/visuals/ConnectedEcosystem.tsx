"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: Globe, label: 'WEBSITE', angle: 0, tag: '0.8s EDGE' },
  { id: 'crm', icon: BarChart3, label: 'CRM', angle: 51.4, tag: 'LIVE SYNC' },
  { id: 'marketing', icon: Megaphone, label: 'MARKETING', angle: 102.8, tag: 'MULTI-CH' },
  { id: 'ops', icon: Settings, label: 'OPERATIONS', angle: 154.2, tag: 'AUTO-SOP' },
  { id: 'ai-agents', icon: Bot, label: 'AI AGENTS', angle: 205.6, tag: '24/7 FLEET' },
  { id: 'automation', icon: Zap, label: 'AUTOMATION', angle: 257, tag: 'WEBHOOKS' },
  { id: 'strategy', icon: Brain, label: 'AI STRATEGY', angle: 308.4, tag: 'ROADMAP' },
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

  // SVG coordinate space
  const viewBoxSize = 500;
  const center = viewBoxSize / 2;
  const radius = compact ? 135 : 155;

  const currentActive = hoveredNode || highlightedNode;

  return (
    <div 
      className={cn(
        "relative select-none flex items-center justify-center mx-auto aspect-square w-full p-2 sm:p-4",
        compact ? "max-w-[270px] sm:max-w-[310px]" : "max-w-[320px] sm:max-w-[420px] md:max-w-[480px]",
        className
      )}
    >
      {/* Background Multi-Layer Ambient Glow */}
      <motion.div 
        className="absolute rounded-full bg-emerald-500/10 blur-xl sm:blur-3xl pointer-events-none"
        style={{
          width: '60%',
          height: '60%',
        }}
        animate={{
          scale: [0.92, 1.08, 0.92],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG Vector Connection Rays */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <defs>
          <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Core Ambient Ring */}
        <circle 
          cx={center} 
          cy={center} 
          r={compact ? 45 : 60} 
          fill="url(#coreAura)"
        />

        {nodes.map((node, index) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);
          const isSelected = currentActive === node.id;
          const isAnyHovered = currentActive !== null;

          return (
            <g key={`ray-group-${node.id}`}>
              {/* Base Connection Ray Line */}
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={isSelected ? "#059669" : "#a7f3d0"}
                strokeWidth={isSelected ? 2.5 : 1.5}
                strokeOpacity={isSelected ? 0.95 : isAnyHovered ? 0.25 : 0.6}
                className="transition-all duration-300"
              />

              {/* Animated Data Stream */}
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={isSelected ? "#10b981" : "#059669"}
                strokeWidth={isSelected ? 2.6 : 1.8}
                strokeDasharray="5, 20"
                strokeOpacity={isSelected ? 1 : 0.75}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={index % 2 === 0 ? "25" : "-25"}
                  to="0"
                  dur={isSelected ? "1s" : `${2 + (index * 0.2)}s`}
                  repeatCount="indefinite"
                />
              </line>

              {/* Pulse head */}
              {isSelected && (
                <circle r="3.5" fill="#047857">
                  <animateMotion
                    path={`M ${center} ${center} L ${x} ${y}`}
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Center Calpir Core Logo - nested wrapper to prevent translate override */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
        <motion.div 
          className="flex items-center justify-center cursor-pointer"
          style={{
            width: compact ? '48px' : '56px',
            height: compact ? '48px' : '56px',
          }}
          whileHover={{ scale: 1.08 }}
          animate={{ scale: [1, 1.05, 1] }}
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
            className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(5,150,105,0.3)] transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Orbiting Interactive System Nodes */}
      {nodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const radiusRatio = compact ? 28 : 31; // Percentage offset from center
        const leftPercent = 50 + radiusRatio * Math.cos(rad);
        const topPercent = 50 + radiusRatio * Math.sin(rad);

        const isSelected = currentActive === node.id;
        const isDimmed = currentActive !== null && !isSelected;
        const IconComponent = node.icon;

        return (
          <div
            key={node.id}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 transition-all",
              isSelected ? "z-40" : "z-10"
            )}
            style={{ 
              left: `${leftPercent}%`, 
              top: `${topPercent}%`, 
            }}
          >
            <motion.div
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isDimmed ? 0.45 : 1, 
                scale: isSelected ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center cursor-pointer group/node select-none"
            >
              {/* Floating Icon */}
              <div className={cn(
                "transition-all duration-300 rounded-full border shadow-sm flex items-center justify-center",
                compact ? "p-1.5" : "p-2 sm:p-2.5",
                isSelected 
                  ? "text-emerald-950 bg-emerald-100 border-emerald-400 shadow-[0_0_12px_rgba(5,150,105,0.4)]" 
                  : "text-emerald-700 bg-white border-zinc-200 group-hover/node:border-emerald-500 group-hover/node:bg-emerald-50"
              )}>
                <IconComponent className={cn(compact ? "w-3.5 h-3.5" : "w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5")} />
              </div>

              {/* Label */}
              <span className={cn(
                "mono uppercase tracking-wider font-black mt-1 text-center leading-none px-0.5 whitespace-nowrap transition-colors",
                compact ? "text-[7.5px]" : "text-[8px] sm:text-[9px] md:text-[10px]",
                isSelected 
                  ? "text-emerald-950 font-extrabold" 
                  : "text-zinc-700 group-hover/node:text-emerald-800"
              )}>
                {node.label}
              </span>

              {/* Smart Micro-Badge */}
              {!compact && isSelected && (
                <motion.span 
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-0.5 mono text-[7px] sm:text-[8px] uppercase tracking-wider font-black text-emerald-800 bg-emerald-50 px-1 py-0.5 border border-emerald-300 shadow-sm whitespace-nowrap hidden sm:inline-block"
                >
                  {node.tag}
                </motion.span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;