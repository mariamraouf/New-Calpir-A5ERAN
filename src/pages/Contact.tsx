"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Loader2, CheckCircle2, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import BookingSystem from '@/components/booking/BookingSystem';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { HumanCaptcha } from '@/components/ui/HumanCaptcha';
import PhoneInput from '@/components/ui/PhoneInput';
import { showSuccess, showError } from '@/utils/toast';
import MetaSEO from '@/components/seo/MetaSEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Starter Launch Package ($1,499)',
    message: ''
  });
  const [isHuman, setIsHuman] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      showError("Please check the human verification box before submitting.");
      return;
    }

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
          phone: formData.phone || 'Not provided',
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
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Contact Calpir | Book Free Strategy Call"
        description="Get in touch with Calpir technical directors or book a live 30-minute consultation with Maria."
        path="/contact"
      />
      <Navbar />
      
      <section className="pt-36 md:pt-44 pb-16 px-4 md:px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <dyad-write path="src/pages/Contact.tsx" description="Complete and fully formatted Contact page">
"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Loader2, CheckCircle2, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import BookingSystem from '@/components/booking/BookingSystem';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { HumanCaptcha } from '@/components/ui/HumanCaptcha';
import PhoneInput from '@/components/ui/PhoneInput';
import { showSuccess, showError } from '@/utils/toast';
import MetaSEO from '@/components/seo/MetaSEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Starter Launch Package ($1,499)',
    message: ''
  });
  const [isHuman, setIsHuman] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      showError("Please check the human verification box before submitting.");
      return;
    }

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
          phone: formData.phone || 'Not provided',
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
    <div className="min-h-screen bg-white">
      <MetaSEO 
        title="Contact Calpir | Book Free Strategy Call"
        description="Get in touch with Calpir technical directors or book a live 30-minute consultation with Maria."
        path="/contact"
      />
      <Navbar />
      
      <section className="pt-36 md:pt-44 pb-16 px-4 md:px-6 border-b border-zinc-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>Direct Transmission</SectionLabel>
          <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] mb-6 font-black uppercase tracking-tight text-zinc-950">
            Get in <br /> <span className="text-emerald-700">Touch.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-3xl leading-relaxed">
            We genuinely love setting up businesses and seeing you succeed. Tell us what you want to build or book a live strategy session with Maria below.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-zinc-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Squad Contact Details */}
            <div className="space-y-8">
              <SectionLabel>Direct Channels</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-zinc-950 tracking-tight">
                Let's Build Something Meaningful Together.
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                Whether you need a full 7 day launch package, custom AI agents, or specific à la carte setup, we respond fast with zero corporate fluff.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 border border-zinc-200 bg-zinc-50 shadow-sm">
                  <div className="text-emerald-700 p-3 bg-emerald-100/70 border border-emerald-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-500 font-bold">Email Our Team</div>
                    <a href="mailto:info@calpir.com" className="text-base md:text-lg font-black text-zinc-950 hover:text-emerald-700 transition-colors">
                      info@calpir.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-zinc-200 bg-zinc-50 shadow-sm">
                  <div className="text-emerald-700 p-3 bg-emerald-100/70 border border-emerald-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-500 font-bold">Direct Phone / WhatsApp</div>
                    <a href="tel:+447346875731" className="text-base md:text-lg font-black text-zinc-950 hover:text-emerald-700 transition-colors">
                      +44 7346 875731
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-zinc-200 bg-zinc-50 shadow-sm">
                  <div className="text-emerald-700 p-3 bg-emerald-100/70 border border-emerald-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-wider text-zinc-500 font-bold">HQ Location</div>
                    <div className="text-base md:text-lg font-black uppercase text-zinc-950">Bristol, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-emerald-200 bg-emerald-50 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 mono text-xs uppercase font-bold">
                  <Sparkles size={14} className="text-emerald-600" /> Squad Response Guarantee
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed mono">
                  We reply within 4 business hours. You talk directly with senior technical leads who build systems every day.
                </p>
              </div>
            </div>

            {/* Formspree Contact Form */}
            <div className="border border-zinc-200 bg-white p-6 md:p-10 shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold">
                    Project Request Form
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 tracking-tight">
                    Send Us Your Requirements
                  </h3>

                  <div className="space-y-1.5">
                    <label className="mono text-xs uppercase text-zinc-700 font-bold block">
                      Your Full Name *
                    </label>
                    <Input
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-sm focus:border-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="mono text-xs uppercase text-zinc-700 font-bold block">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        name="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-sm focus:border-emerald-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="mono text-xs uppercase text-zinc-700 font-bold block">
                        Phone / WhatsApp
                      </label>
                      <PhoneInput
                        value={formData.phone}
                        onChange={(val) => setFormData({ ...formData, phone: val })}
                        placeholder="7346 875731"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="mono text-xs uppercase text-zinc-700 font-bold block">
                      Interested Package or Solo Service
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full bg-white text-zinc-950 border border-zinc-300 rounded-none h-12 px-3 mono text-xs uppercase focus:border-emerald-600 cursor-pointer"
                    >
                      <option value="Starter Launch Package ($1,499)">Starter Launch Package ($1,499)</option>
                      <option value="Growth Launch Package ($3,499)">Growth Launch Package ($3,499)</option>
                      <option value="Ultimate Launch Package ($6,999)">Ultimate Launch Package ($6,999)</option>
                      <option value="Solo: Domain & SSL Setup ($149)">Solo: Domain & SSL Setup ($149)</option>
                      <option value="Solo: Google GBP & Indexing ($199)">Solo: Google GBP & Indexing ($199)</option>
                      <option value="Solo: Branding & Palettes ($399)">Solo: Branding, Fonts & Palettes ($399)</option>
                      <option value="Solo: CRM Pipeline Setup ($599)">Solo: Custom CRM Pipeline ($599)</option>
                      <option value="Solo: AI Customer Support Agent ($699)">Solo: Custom AI Agent ($699)</option>
                      <option value="Solo: Video Editing Pack ($299)">Solo: Video Editing Suite ($299)</option>
                      <option value="Custom App or Web Software">Custom App or Web Software</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="mono text-xs uppercase text-zinc-700 font-bold block">
                      Project Details & Goals *
                    </label>
                    <Textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business, current bottlenecks, and when you want to launch..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white text-zinc-950 border-zinc-300 rounded-none mono text-sm focus:border-emerald-600 resize-none"
                    />
                  </div>

                  {/* Human Verification */}
                  <HumanCaptcha isVerified={isHuman} onVerified={setIsHuman} />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-7 rounded-none font-black text-base md:text-lg uppercase tracking-tight btn-hover flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Send Message to Our Squad
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 tracking-tight">Transmission Received</h3>
                  <p className="text-zinc-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you {formData.name}. We are reviewing your requirements and will reply to <span className="text-zinc-950 font-bold">{formData.email}</span> shortly.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsHuman(false);
                      setFormData({ name: '', email: '', phone: '', package: 'Starter Launch Package ($1,499)', message: '' });
                    }}
                    className="border-zinc-300 text-zinc-900 rounded-none mono text-xs uppercase font-bold hover:bg-zinc-100"
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
      <section className="section-padding bg-zinc-50/60">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Live Consultation</SectionLabel>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-950 mb-3">
                Book with Maria.
              </h2>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">
                Select a time for your 30 minute strategy session. Times are automatically adjusted to your local timezone.
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