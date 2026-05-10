"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Calendar } from 'lucide-react';
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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Transmission</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Get in <br /> <span className="text-[#064e3b]">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <SectionLabel>Direct Inquiry</SectionLabel>
              <p className="text-2xl mono text-white/60 leading-tight">
                Ready to deploy your infrastructure or build a custom application? Use our secure portal below.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="text-[#064e3b]"><Mail size={32} /></div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Email</div>
                    <div className="text-xl font-black uppercase">hello@calpir.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-[#064e3b]"><MessageSquare size={32} /></div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Live Chat</div>
                    <div className="text-xl font-black uppercase">Mon Fri // 9AM 6PM GMT</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-[#064e3b]"><MapPin size={32} /></div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Location</div>
                    <div className="text-xl font-black uppercase">Bristol, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10">
                <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-6">Operational Status</div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#064e3b] rounded-full animate-pulse" />
                  <span className="mono text-sm uppercase tracking-widest font-bold">Systems Online // Accepting New Projects</span>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 min-h-[600px]">
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
            <div className="text-center mb-16">
              <SectionLabel>Consultation</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Book with Maria.</h2>
              <p className="text-xl mono text-white/40">Select a time for your 30 minute strategy session. All times are converted to your local zone.</p>
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