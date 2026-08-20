"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SystemStatus = () => {
  const [status] = useState('OPERATIONAL');
  const [uptime] = useState(99.98);
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (50 - 35 + 1)) + 35);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const systems = [
    { name: 'WEB_CORE', status: 'ONLINE' },
    { name: 'CRM_SYNC', status: 'ONLINE' },
    { name: 'AI_AGENT_01', status: 'ONLINE' },
    { name: 'AUTH_GATEWAY', status: 'ONLINE' },
    { name: 'DATA_PIPELINE', status: 'ONLINE' },
  ];

  return (
    <div className="border border-white/20 bg-[#0d0d0d] p-6 mono text-xs uppercase tracking-widest text-zinc-300">
      <div className="flex justify-between items-center mb-6 border-b border-white/15 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-bold text-white">SYSTEM_STATUS: {status}</span>
        </div>
        <div className="text-emerald-400 font-bold">UPTIME: {uptime}%</div>
      </div>

      <div className="space-y-3 mb-6">
        {systems.map((s) => (
          <div key={s.name} className="flex justify-between items-center">
            <span className="text-zinc-400 font-semibold">{s.name}</span>
            <span className="text-emerald-400 font-bold">{s.status}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/15">
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-400 font-bold">LATENCY</span>
          <span className="text-white font-bold">{latency}MS</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-400"
            animate={{ width: [`${latency}%`, `${latency + 10}%`, `${latency - 5}%`] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;