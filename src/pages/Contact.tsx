"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare, Mail, Phone, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import BookingSystem from '@/components/booking/BookingSystem';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Starter ($1,499)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xlgalgka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interestedPackage: formData.package,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        showSuccess("Message received! Our founders will respond within 4 hours.");
      } else {
        showError("There was an issue sending your message. Please email info@calpir.com directly.");
      }
    } catch (err) {
      showError("Submission error. Please email us at info@calpir.com or call +44 7346 875731.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <SectionLabel>Direct Transmission</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
            Get in <br /> <span className="text-emerald-400">Touch.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 max-w-[850px] leading-relaxed">
            We are genuinely excited to learn about your vision. Tell us what you want to build or book a direct strategy session with Maria below.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Squad Contact Details */}
            <div className="space-y-10">
              <SectionLabel>Direct Channels</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                Let's Build Something Meaningful Together.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Whether you need a full 7-day launch package, custom AI agents, or specific à la carte setup, we respond fast with zero corporate fluff.
              </p>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Email Our Team</div>
                    <a href="mailto:info@calpir.com" className="text-lg font-black text-white hover:text-emerald-400 transition-colors">
                      info@calpir.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Direct Phone / WhatsApp</div>
                    <a href="tel:+447346875731" className="text-lg font-black text-white hover:text-emerald-400 transition-colors">
                      +44 7346 875731
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">HQ Location</div>
                    <div className="text-lg font-black uppercase text-white">Bristol, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-emerald-500/30 bg-emerald-950/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 mono text-xs uppercase font-bold">
                  <Sparkles size={14} /> Squad Response Guarantee
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mono">
                  We reply within 4 business hours. No gatekeepers, no junior reps—you talk directly with senior technical architects.
                </p>
              </div>
            </div>

            {/* Formspree Contact Form */}
            <div className="border border-white/15 bg-white/[0.03] p-8 md:p-12 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
                    Project Request Form
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                    Send Us Your Requirements
                  </h3>

                  <div className="space-y-2">
                    <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                      Your Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black text-white border-white/20 rounded-none h-13 mono text-sm focus:border-emerald-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                        Work Email *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black text-white border-white/20 rounded-none h-13 mono text-sm focus:border-emerald-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                        Phone / WhatsApp
                      </label>
                      <Input
                        placeholder="+44 7000 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-black text-white border-white/20 rounded-none h-13 mono text-sm focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                      Interested Package or Solo Service
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full bg-<dyad-write path="src/pages/Contact.tsx" description="Contact page using Formspree endpoint https://formspree.io/f/xlgalgka and clear contact details">
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Sparkles, Loader2, CheckCircle2, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import BookingSystem from '@/components/booking/BookingSystem';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Starter ($1,499)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xlgalgka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interestedPackage: formData.package,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        showSuccess("Message received! Our team will respond within 4 hours.");
      } else {
        showError("There was an issue sending your message. Please email info@calpir.com directly.");
      }
    } catch (err) {
      showError("Submission error. Please email us at info@calpir.com or call +44 7346 875731.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <SectionLabel>Direct Transmission</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-black uppercase tracking-tight text-white">
            Get in <br /> <span className="text-emerald-400">Touch.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 max-w-[850px] leading-relaxed">
            We are genuinely excited to learn about your vision. Tell us what you want to build or book a direct strategy session with Maria below.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/15">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Squad Contact Details */}
            <div className="space-y-10">
              <SectionLabel>Direct Channels</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                Let's Build Something Meaningful Together.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Whether you need a full 7-day launch package, custom AI agents, or specific à la carte setup, we respond fast with zero corporate fluff.
              </p>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Email Our Team</div>
                    <a href="mailto:info@calpir.com" className="text-lg font-black text-white hover:text-emerald-400 transition-colors">
                      info@calpir.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">Direct Phone / WhatsApp</div>
                    <a href="tel:+447346875731" className="text-lg font-black text-white hover:text-emerald-400 transition-colors">
                      +44 7346 875731
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 border border-white/10 bg-white/[0.02]">
                  <div className="text-emerald-400 p-3 bg-emerald-950/60 border border-emerald-500/30">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-400 font-bold">HQ Location</div>
                    <div className="text-lg font-black uppercase text-white">Bristol, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-emerald-500/30 bg-emerald-950/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 mono text-xs uppercase font-bold">
                  <Sparkles size={14} /> Squad Response Guarantee
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mono">
                  We reply within 4 business hours. No gatekeepers, no junior reps, you talk directly with senior technical architects.
                </p>
              </div>
            </div>

            {/* Formspree Contact Form */}
            <div className="border border-white/15 bg-white/[0.03] p-8 md:p-12 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
                    Project Request Form
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                    Send Us Your Requirements
                  </h3>

                  <div className="space-y-2">
                    <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                      Your Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black text-white border-white/20 rounded-none h-12 mono text-sm focus:border-emerald-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                        Work Email *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black text-white border-white/20 rounded-none h-12 mono text-sm focus:border-emerald-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                        Phone / WhatsApp
                      </label>
                      <Input
                        placeholder="+44 7000 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-black text-white border-white/20 rounded-none h-12 mono text-sm focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                      Interested Package or Solo Service
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full bg-black text-white border border-white/20 rounded-none h-12 px-3 mono text-xs uppercase focus:border-emerald-400"
                    >
                      <option value="Starter ($1,499)">Starter Launch Package ($1,499)</option>
                      <option value="Growth ($3,499)">Growth Launch Package ($3,499)</option>
                      <option value="Ultimate ($6,999)">Ultimate Launch Package ($6,999)</option>
                      <option value="Domain & SSL Setup ($149)">Solo: Domain & SSL Setup ($149)</option>
                      <option value="Google Business Profile & Indexing ($199)">Solo: Google GBP & Indexing ($199)</option>
                      <option value="Branding & Palettes ($399)">Solo: Branding, Fonts & Palettes ($399)</option>
                      <option value="CRM Pipeline Setup ($599)">Solo: Custom CRM Pipeline ($599)</option>
                      <option value="AI Customer Support Agent ($699)">Solo: Custom AI Agent ($699)</option>
                      <option value="Video Editing Pack ($299)">Solo: Video Editing Suite ($299)</option>
                      <option value="Other Custom Software">Other / Bespoke Custom Software</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="mono text-xs uppercase text-zinc-300 font-bold block">
                      Project Details & Requirements *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Tell us about your business, current bottlenecks, and target launch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-black text-white border-white/20 rounded-none mono text-sm focus:border-emerald-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Submit Project Transmission
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-black">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-3xl font-black uppercase text-white tracking-tight">Transmission Received</h3>
                  <p className="text-zinc-300 text-sm max-w-[420px] mx-auto leading-relaxed">
                    Thank you {formData.name}. We're reviewing your requirements and will get back to <span className="text-white font-bold">{formData.email}</span> shortly.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', package: 'Starter ($1,499)', message: '' });
                    }}
                    className="border-white/20 text-white rounded-none mono text-xs uppercase font-bold"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Live Consultation</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
                Book with Maria.
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Select a time for your 30 minute strategy session. All times are automatically converted to your local time zone and sent directly to our calendar.
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