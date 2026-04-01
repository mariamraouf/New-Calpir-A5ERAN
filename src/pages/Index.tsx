"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Megaphone, Settings, Bot, Zap, Brain, CheckCircle2, Star, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import ROICalculator from '@/components/home/ROICalculator';
import FAQ from '@/components/home/FAQ';
import { Input } from '@/components/ui/input';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 left-[10%] w-4 h-4 bg-[#064e3b]/20 blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 right-[15%] w-6 h-6 bg-[#064e3b]/10 blur-md"
        />

        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <div className="inline-block border border-[#064e3b] px-4 py-1 mb-8 mono text-[0.7rem] uppercase tracking-widest text-[#064e3b]">
              Now with AI Automation & Agent Setup
            </div>
            <h1 className="text-6xl md:text-[9rem] leading-[0.8] mb-12 font-black uppercase tracking-tighter">
              All-in-One <br /> Business Launch, <br /> <span className="text-[#064e3b]">Done Right.</span>
            </h1>
            <p className="text-xl md:text-2xl mono text-white/60 leading-tight max-w-[900px] mx-auto mb-16">
              We deploy your entire business infrastructure — website, CRM, operations, branding, marketing, and AI automations — all integrated and working together. Live in 7-28 days, not 3-6 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black btn-hover">
                <Link to="/assessment">Take the Free Assessment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Projects Launched", val: "1,000+" },
              { label: "Fastest Setup", val: "7 Days" },
              { label: "Cost Savings vs. DIY", val: "40-60%" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-6xl font-black text-[#064e3b] mb-2">{s.val}</div>
                <div className="mono text-[0.7rem] uppercase tracking-widest text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>Who We Help</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">Built for Founders <br /> at Every Stage.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Pre-Launch Founders", 
                desc: "You have the idea but haven't launched yet. You need the full stack — website, brand, CRM, marketing — set up correctly from day one so you can focus on building your product and getting customers.",
                pkg: "Starter"
              },
              { 
                title: "Early-Stage Startups", 
                desc: "You're up and running but your systems are a mess. Scattered tools, manual processes, leads falling through cracks. You need everything connected and automated.",
                pkg: "Growth"
              },
              { 
                title: "Businesses Ready for AI", 
                desc: "Your business works, but you know AI could make it work 10x better. You want AI agents handling support, qualifying leads, and automating the repetitive work eating your time.",
                pkg: "Ultimate"
              }
            ].map((card, i) => (
              <div key={i} className="border border-white/10 p-12 bg-white/5 card-hover">
                <h3 className="text-3xl mb-6">{card.title}</h3>
                <p className="text-white/40 mono text-sm leading-relaxed mb-8">{card.desc}</p>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="mono text-[0.6rem] uppercase tracking-widest text-[#064e3b]">Best Package: {card.pkg}</span>
                  <ArrowRight size={20} className="text-[#064e3b]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visual */}
      <section id="ecosystem" className="section-padding border-b border-white/10 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <SectionLabel>The Calpir System</SectionLabel>
              <h2 className="text-5xl md:text-7xl mb-8">Everything Connected. <br /> Everything Working Together.</h2>
              <p className="text-xl mono text-white/40 leading-relaxed mb-12">
                Most businesses use 6-8 disconnected tools. We build one integrated system where your website feeds your CRM, your CRM triggers automations, and your AI agents handle the rest.
              </p>
              <div className="mono text-sm text-[#064e3b] uppercase tracking-widest">
                One system. Zero gaps. Every tool talks to every other tool.
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#064e3b]/10 blur-[120px] rounded-full" />
              <ConnectedEcosystem className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-8">Everything Your <br /> Business Needs.</h2>
          <p className="text-xl mono text-white/40 mb-20">Complete business launch packages or specific individual services tailored to your needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website & Branding", icon: <Globe />, desc: "Custom, conversion-optimized websites and professional branding. From single landing pages to full multi-page sites, plus complete brand identity.", features: ["Custom design & dev", "Mobile-first build", "Logo & identity", "UI/UX design"], slug: "website-development" },
              { title: "CRM & Sales Systems", icon: <BarChart3 />, desc: "Battle-tested CRM implementation and sales automation. Never lose a lead, automate follow-ups, and scale your sales pipeline.", features: ["HubSpot & GHL setup", "Pipeline config", "Contact management", "Automated follow-ups"], slug: "crm-sales" },
              { title: "Marketing & Social Media", icon: <Megaphone />, desc: "Build your digital presence with SEO, social media content, email marketing, and growth strategies that actually drive results.", features: ["SEO optimization", "Social content", "Email system setup", "Content framework"], slug: "marketing-branding" },
              { title: "Operations & HR", icon: <Settings />, desc: "Streamline your operations with integrated tools, SOP creation, payroll setup, and HR systems that grow with your team.", features: ["Workflow optimization", "PM tools", "Payroll & accounting", "HR onboarding"], slug: "operations-hr" },
              { title: "AI Agent Development", icon: <Bot />, desc: "Custom AI agents that handle customer support, qualify leads, book appointments, and answer questions — working 24/7 without adding headcount.", features: ["Support chatbots", "Lead qualification", "Appointment bots", "Knowledge assistants"], slug: "ai-agents" },
              { title: "Workflow Automation", icon: <Zap />, desc: "Eliminate manual, repetitive work with intelligent automations that connect all your tools and trigger the right actions automatically.", features: ["CRM automation", "Email sequences", "Invoice automation", "Cross-platform sync"], slug: "ai-automation" }
            ].map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="border border-white/10 p-12 bg-black card-hover group">
                <div className="text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h3 className="text-2xl mb-6">{s.title}</h3>
                <p className="text-white/40 mono text-xs leading-relaxed mb-8">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 mono text-[0.6rem] uppercase tracking-widest text-white/60">
                      <CheckCircle2 size={14} className="text-[#064e3b]" /> {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>Why Calpir</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">Stop Juggling <br /> 6 Different Vendors.</h2>
          
          <div className="border border-white/10 bg-white/5 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">What You Need</th>
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-white/40">DIY Approach</th>
                  <th className="p-8 mono text-[0.7rem] uppercase tracking-widest text-[#064e3b]">With Calpir</th>
                </tr>
              </thead>
              <tbody className="mono text-sm">
                {[
                  { need: "Website & Branding", diy: "Freelance designer ($2-5K) + builder ($15-45/mo)", cal: "✓ Included" },
                  { need: "CRM & Sales", diy: "HubSpot/GHL ($97-297/mo) + setup consultant", cal: "✓ Included & configured" },
                  { need: "Marketing & SEO", diy: "Agency retainer ($2-5K/mo)", cal: "✓ Included" },
                  { need: "Operations & HR", diy: "Multiple tools ($50-200/mo) + learning curve", cal: "✓ Included" },
                  { need: "AI Agents", diy: "AI platforms ($20-200/mo) + dev time", cal: "✓ Built & deployed" },
                  { need: "Automations", diy: "Zapier/Make ($20-99/mo) + figuring it out", cal: "✓ Connected & running" },
                  { need: "Timeline", diy: "3-6 months", cal: "7-28 days" },
                  { need: "Total Year 1 Cost", diy: "$15,000-30,000+", cal: "Starting at $1,499" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-8 font-bold uppercase">{row.need}</td>
                    <td className="p-8 text-white/40">{row.diy}</td>
                    <td className="p-8 text-[#064e3b] font-black">{row.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 mono text-[0.6rem] uppercase tracking-widest text-white/40 text-center">
            All systems integrated out of the box. No vendor management, no compatibility headaches.
          </p>
        </div>
      </section>

      {/* ROI Calculator Integration */}
      <ROICalculator />

      {/* Process Section */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">From Idea to <br /> Launch in 4 Steps.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -z-10" />
            
            {[
              { step: "01", title: "Free Consultation", desc: "30-minute call. We listen, understand your goals, assess your current tools, and map out exactly what you need." },
              { step: "02", title: "Strategy & Blueprint", desc: "1-hour deep dive. We build a custom implementation plan with clear deliverables, timeline, and pricing." },
              { step: "03", title: "Build & Integrate", desc: "Our team builds your website, configures CRM, sets up automations, deploys AI agents — all connected as one system." },
              { step: "04", title: "Launch & Optimize", desc: "Go live. We provide full training, documentation, and post-launch support to keep everything running smoothly." }
            ].map((s, i) => (
              <div key={i} className="space-y-6 bg-black p-8 border border-white/10">
                <div className="text-4xl font-black text-[#064e3b]">{s.step}</div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="text-white/40 mono text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>Results</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-20">What Our <br /> Clients Say.</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { quote: "Calpir had our entire business infrastructure — website, CRM, automations, everything — live in 10 days. What would have taken us 3 months happened in a week and a half.", author: "Sarah K.", role: "Founder, NovaBright" },
              { quote: "The AI chatbot they set up handles 75% of our customer inquiries now. Our support costs dropped by half and response time went from hours to seconds.", author: "Marcus T.", role: "CEO, UrbanStack" },
              { quote: "We went from idea to taking our first paying customers in under two weeks. The automation setup alone saves us 20+ hours a week.", author: "Lena M.", role: "Co-founder, GreenLoop" }
            ].map((t, i) => (
              <div key={i} className="border border-white/10 p-12 bg-white/5 relative">
                <div className="absolute top-8 right-8 text-[#064e3b]/20"><Star size={40} fill="currentColor" /></div>
                <p className="text-xl mono leading-relaxed mb-12 italic">"{t.quote}"</p>
                <div className="pt-8 border-t border-white/10">
                  <div className="font-black uppercase">{t.author}</div>
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="section-padding border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <div className="max-w-[800px] mx-auto text-center">
            <SectionLabel>Intelligence</SectionLabel>
            <h2 className="text-4xl md:text-6xl mb-8">Get the Founder's <br /> Stack Newsletter.</h2>
            <p className="text-xl mono text-white/40 mb-12">Weekly insights on AI agents, workflow automation, and scaling your business infrastructure.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="bg-black border-white/10 rounded-none h-16 text-xl mono focus:border-[#064e3b] flex-grow"
              />
              <Button className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter">
                Subscribe <Mail className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="section-padding bg-[#064e3b] text-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-8xl mb-8 font-black uppercase tracking-tighter">Not Sure <br /> What You Need?</h2>
          <p className="text-xl md:text-2xl mono mb-16 max-w-[800px] mx-auto opacity-80">
            Take our free 2-minute assessment. Find out what stage your business is at, what's costing you the most, and exactly what systems would accelerate your growth.
          </p>
          <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
            <Link to="/assessment">Take the Free Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-8xl mb-8 font-black uppercase tracking-tighter">Ready to <br /> Launch Smarter?</h2>
          <p className="text-xl mono text-white/40 mb-16">Book a free 30-minute consultation. We'll map out exactly what your business needs and how to get there fastest.</p>
          <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all btn-hover">
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer">Book Your Free Call</a>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;