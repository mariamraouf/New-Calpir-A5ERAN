"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, suffix = "", label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-6xl font-black mb-1 text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mono text-xs uppercase tracking-widest font-bold text-emerald-100">{label}</div>
    </div>
  );
};

export default AnimatedStat;