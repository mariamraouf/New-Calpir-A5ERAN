"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nodes = [
  { id: 'website', icon: <Globe size={20} />, label: 'Website', angle: 0 },
  { id: 'crm', icon: <BarChart3 size={20} />, label: 'CRM', angle: 51.4 },
  { id: 'marketing', icon: <Megaphone size={20} />, label: 'Marketing', angle: 102.8 },
  { id: 'ops', icon: <Settings size={20} />, label: 'Operations', angle: 154.2 },
  { id: 'ai-agents', icon: <Bot size={20} />, label: 'AI Agents', angle: 205.6 },
  { id: 'automation', icon: <Zap size={20} />, label: 'Automation', angle: 257 },
  { id: 'strategy', icon: <Brain size={20} />, label: 'AI Strategy', angle: 308.4 },
];

const ConnectedEcosystem = ({ className, highlightedNode }: { className?: string, highlightedNode?: string }) => {
  const radius = 160;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className={cn("relative w-[400px] h-[400px] mx-auto", className)}>
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        {/* Connecting Lines from Center */}
        {nodes.map((node) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
          return (
            <motion.line
              key={`line-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#064e3b"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ 
                pathLength: 1, 
                opacity: highlightedNode === node.id ? 1 : 0.3,
                strokeWidth: highlightedNode === node.id ? 3 : 2
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Center Node */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <img 
          src="dyad-media://Calpir-fotor-bg-remover-20260419172055.png" 
          alt="Calpir Logo" 
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Outer Nodes */}
      {nodes.map((node) => {
        const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
        const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);
        const isActive = highlightedNode === node.id;

        return (
          <motion.div
            key={node.id}
            className={cn(
              "absolute w-14 h-14 flex items-center justify-center transition-all duration-500 border border-white/10",
              isActive ? "bg-[#064e3b] text-white scale-125 shadow-[0_0_20px_rgba(6,78,59,0.5)]" : "bg-black text-[#064e3b] hover:scale-110 hover:bg-white/10"
            )}
            style={{ 
              left: x, 
              top: y, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            {node.icon}
            <div className="absolute top-full mt-2 whitespace-nowrap text-[8px] font-bold uppercase tracking-widest text-white/40 opacity-0 hover:opacity-100 transition-opacity">
              {node.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConnectedEcosystem;