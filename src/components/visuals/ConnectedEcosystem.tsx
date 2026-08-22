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
  const radius = compact ? 92 : 122;
  const nodeBoxSize = compact ? 38 : 46;
  const logoSize = compact ? 52 : 64;

  return (
    <div 
      className={cn("relative select-none my-2 flex items-center justify-center shrink-0", className)}
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
              stroke={isHighlighted ? "#059669" : "#a7f3d0"}
              strokeWidth={isHighlighted ? "2.5" : "1.5"}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHighlighted ? 1 : 0.8,
                strokeWidth: isHighlighted ? 2.5 : 1.5
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Center Logo - Exact pixel center without transform conflict */}
      <div 
        className="absolute z-20 pointer-events-none flex items-center justify-center"
        style={{
          left: `${centerX - logoSize / 2}px`,
          top: `${centerY - logoSize / 2}px`,
          width: `${logoSize}px`,
          height: `${logoSize}px`,
        }}
      >
        <motion.img 
          src="/logo-with-transparent-background.png" 
          onError={(e) => {
            if (e.currentTarget.src !== '/logo.png') {
              e.currentTarget.src = '/logo.png';
            }
          }}
          alt="Calpir Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(5,150,105,0.3)]"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Outer Orbit Nodes */}
      {nodes.map((node) => {
        const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180) - (nodeBoxSize / 2);
        const isActive = highlightedNode === node.id;

        return (
          <div
            key={node.id}
            className={cn(
              "absolute flex items-center justify-center transition-all duration-300 border shadow-sm",
              isActive 
                ? "bg-emerald-600 text-white border-emerald-700 scale-110 shadow-lg z-30" 
                : "bg-white text-emerald-700 border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 hover:scale-105 z-10"
            )}
            style={{ 
              width: `${nodeBoxSize}px`,
              height: `${nodeBoxSize}px`,
              left: `${x}px`, 
              top: `${y}px`, 
            }}
            title={node.label}
          >
            {node.icon}
          </div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;