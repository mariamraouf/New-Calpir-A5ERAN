"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layers, Zap, PartyPopper } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const timelineEvents = [
  {
    day: "Day 1",
    title: "Kickoff & Foundation",
    description: "We hold our strategy kickoff call, secure your domain, set up DNS, issue SSL certificates, and deploy your core brand identity.",
    icon: Rocket,
  },
  {
    day: "Day 3",
    title: "Systems Integration",
    description: "Your high-speed website is live on a staging link. We build out your CRM pipelines, lead capture forms, and core automations.",
    icon: Layers,
  },
  {
    day: "Day 5",
    title: "AI & Automation",
    description: "We train and deploy your custom AI agents, connect your payment gateways, and run end-to-end tests on all automated workflows.",
    icon: Zap,
  },
  {
    day: "Day 7",
    title: "Launch & Handover",
    description: "Your entire system goes live. We transfer 100% ownership of all accounts and assets and begin our post-launch support period.",
    icon: PartyPopper,
  },
];

const LaunchTimeline = () => {
  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>The 7-Day Launch Blueprint</SectionLabel>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight">
            From Idea to Fully <br /> Automated Business <br /> <span className="text-emerald-700">In One Week.</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 w-0.5 bg-emerald-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={lineVariants}
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4 sm:gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                >
                  <div className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full ring-8 ring-white z-10">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 pl-12 sm:pl-0 sm:w-1/2 sm:pr-8 sm:text-right">
                    <div className="mono text-sm font-black text-emerald-700">{event.day}</div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-950 mt-1">{event.title}</h3>
                  </div>
                  <div className="flex-1 sm:w-1/2 sm:pl-8">
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchTimeline;