"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import BookingSystem from '@/components/booking/BookingSystem';

const Contact = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Transmission</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
              Get in <br /> <span className="text-emerald-400">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <SectionLabel>Direct Inquiry</SectionLabel>
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed">
                Ready to deploy your infrastructure or build a custom application? Send us your requirements below or book a direct strategy call.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="text-emerald-400 p-3 bg-emerald-950/40 border border-emerald-500/30">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Live Chat</div>
                    <div className="text-lg font-black uppercase text-white">Mon - Fri // 9AM - 6PM GMT</div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-emerald-400 p-3 bg-emerald-950/40 border border-emerald-500/30">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Location</div>
                    <div className="text-lg font-black uppercase text-white">Bristol, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/15">
                <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold mb-4">Operational Status</div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="mono text-sm uppercase tracking-wider font-bold text-emerald-400">
                    Systems Online // Accepting New Projects
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-white/15 bg-white/[0.03] min-h-[600px] p-2">
              <iframe 
                className="clickup-embed clickup-dynamic-height" 
                src="https://forms.clickup.com/9015087055/f/8cnekyf-9075/KTKDU2NQ8W95RF5TJ1" 
                width="100%" 
                height="100%" 
                style={{ background: 'transparent', border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Consultation</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
                Book with Maria.
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Select a time for your 30 minute strategy session. All times are automatically converted to your local time zone.
              </p>
            </div>
            <BookingSystem />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;