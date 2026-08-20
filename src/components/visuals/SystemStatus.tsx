"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SystemStatus = () => {
  const [status, setStatus] = useState('OPERATIONAL');
  const [uptime, setUptime] = useState(99.98);
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
    <div className="border border-white/10 bg-black p-6 mono text-[0.6rem] uppercase tracking-widest">
      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#064e3b] rounded-full animate-pulse" />
          <span className="font-bold">SYSTEM_STATUS: {status}</span>
        </div>
        <div className="text-white/40">UPTIME: {uptime}%</div>
      </div>

      <div className="space-y-3 mb-6">
        {systems.map((s) => (
          <div key={s.name} className="flex justify-between items-center">
            <span className="text-white/40">{s.name}</span>
            <span className="text-[#064e3b] font-bold">{s.status}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/40">LATENCY</span>
          <span>{latency}MS</span>
        </div>
        <div className="w-full h-1 bg-white/5 overflow-hidden">
          <motion.div 
            className="h-full bg-[#064e3b]"
            animate={{ width: [`${latency}%`, `${latency + 10}%`, `${latency - 5}%`] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;