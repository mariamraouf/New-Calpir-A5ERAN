"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, label: 'Website & SEO', angle: 0 },
  { id: 'crm', icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />, label: 'CRM & Sales', angle: 51.4 },
  { id: 'marketing', icon: <Megaphone className="w-5 h-5 md:w-6 md:h-6" />, label: 'Marketing & Social', angle: 102.8 },
  { id: 'ops', icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />, label: 'Operations & HR', angle: 154.2 },
  { id: 'ai-agents', icon: <Bot className="w-5 h-5 md:w-6 md:h-6" />, label: 'AI Agents', angle: 205.6 },
  { id: 'automation', icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, label: 'Automation', angle: 257 },
  { id: 'strategy', icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, label: 'AI Strategy', angle: 308.4 },
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
  // Much larger default size (480px on desktop)
  const size = compact ? 280 : 500;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = compact ? 100 : 185;
  const nodeBoxSize = compact ? 42 : 64;
  const logoSize = compact ? 60 : 96;

  return (
    <div 
      className={cn("relative select-none flex items-center justify-center shrink-0 max-w-full", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Background Soft Pulsing Glow Aura */}
      <motion.div 
        className="absolute rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{
          width: `${size * 0.75}px`,
          height: `${size * 0.75}px`,
        }}
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.4, 0.7, 0.4],
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
          stroke="#d1fae5" 
          strokeWidth="1.5" 
          strokeDasharray="4 6" 
        />

        {/* Connecting Lines & Animated Flowing Data Packets */}
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
                strokeWidth={isHighlighted ? "2.5" : "1.8"}
                strokeOpacity={isHighlighted ? 1 : 0.65}
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

      {/* Center Calpir Logo with smooth breathing aura & pulse */}
      <motion.div 
        className="absolute z-20 flex items-center justify-center rounded-full bg-white shadow-[0_0_25px_rgba(5,150,105,0.22)] border-2 border-emerald-500/40 p-2 cursor-pointer"
        style={{
          left: `${centerX - logoSize / 2}px`,
          top: `${centerY - logoSize / 2}px`,
          width: `${logoSize}px`,
          height: `${logoSize}px`,
        }}
        animate={{ 
          scale: [1, 1.07, 1],
          boxShadow: [
            "0 0 20px rgba(5,150,105,0.18)",
            "0 0 35px rgba(5,150,105,0.38)",
            "0 0 20px rgba(5,150,105,0.18)"
          ]
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
          className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(5,150,105,0.3)]"
        />
      </motion.div>

      {/* Outer Orbit Nodes with Floating Motion */}
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
            whileHover={{ scale: 1.18, zIndex: 40 }}
            className={cn(
              "absolute flex flex-col items-center justify-center transition-colors border shadow-md cursor-pointer group/node bg-white",
              isActive 
                ? "bg-emerald-700 text-white border-emerald-800 ring-4 ring-emerald-500/30 z-30" 
                : "text-emerald-800 border-zinc-200 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-900 z-10"
            )}
            style={{ 
              width: `${nodeBoxSize}px`,
              height: `${nodeBoxSize}px`,
              left: `${x}px`, 
              top: `${y}px`, 
            }}
          >
            <div className="text-emerald-700 group-hover/node:text-emerald-900 transition-colors">
              {node.icon}
            </div>

            {!compact && (
              <span className="mono text-[8px] uppercase tracking-wider font-extrabold text-zinc-600 group-hover/node:text-emerald-800 mt-1 hidden md:block text-center leading-none px-1">
                {node.label.split(' ')[0]}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;