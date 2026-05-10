"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain, CheckCircle2, ArrowRight, Code 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import NotFound from './NotFound';
import SectionLabel from '@/components/ui/SectionLabel';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData: any = {
    'website-development': {
      id: 'website',
      title: "Website & Branding",
      tagline: "Your digital foundation, designed to convert",
      icon: <Globe size={48} />,
      included: [
        "Custom website design",
        "Up to 5 pages or 10 pages",
        "Professional logo design",
        "Brand identity kit",
        "UI/UX design",
        "Contact forms integration",
        "Speed optimization",
        "SSL certificate setup",
        "Analytics tracking",
        "SEO foundation"
      ],
      who: "Pre launch founders needing their first website | Existing businesses with outdated sites",
      get: "Full website source code, Brand guidelines PDF, Logo source files, Analytics access"
    },
    'crm-sales': {
      id: 'crm',
      title: "CRM & Sales System Setup",
      tagline: "Never lose a lead again",
      icon: <BarChart3 size={48} />,
      included: [
        "CRM platform setup",
        "Sales pipeline configuration",
        "Contact management",
        "Lead scoring rules",
        "Automated follow up sequences",
        "Meeting scheduling integration",
        "Deal tracking dashboards",
        "Customer data migration",
        "Team permissions setup",
        "Integration with website forms"
      ],
      who: "Startups managing leads in spreadsheets | Businesses with a CRM they never properly set up",
      get: "Configured CRM account, Sales pipeline map, Automated sequence templates, Team training"
    },
    'ai-agents': {
      id: 'ai-agents',
      title: "AI Agent Development",
      tagline: "Your 24/7 team members that never sleep",
      icon: <Bot size={48} />,
      included: [
        "Custom AI customer support chatbot",
        "Lead qualification agent",
        "Appointment scheduling bot",
        "Internal knowledge base assistant",
        "Multi channel deployment",
        "AI agent training",
        "Escalation rules",
        "Conversation analytics dashboard",
        "Monthly optimization",
        "Integration with your CRM"
      ],
      who: "Businesses losing leads because they can't respond fast enough | Support teams overwhelmed",
      get: "Deployed AI agents, Training data set, Analytics dashboard, Retraining schedule"
    },
    'custom-apps': {
      id: 'custom-apps',
      title: "Custom Apps & Agents",
      tagline: "Bespoke software for complex business logic",
      icon: <Code size={48} />,
      included: [
        "Full stack web application development",
        "Custom SaaS architecture design",
        "Bespoke AI agent fleets",
        "Internal operational dashboards",
        "API first development and integration",
        "Scalable cloud infrastructure setup",
        "Custom database architecture",
        "Real time data processing",
        "User authentication and security",
        "Ongoing technical maintenance"
      ],
      who: "Founders building unique SaaS products | Businesses needing custom internal tooling | Companies scaling complex operations",
      get: "Full application source code, Technical documentation, Infrastructure access, Deployment guide"
    }
  };

  const data = servicesData[slug || ''];

  if (!data) return <NotFound />;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-white/5 border border-[#064e3b] text-[#064e3b] flex items-center justify-center shrink-0">
              {data.icon}
            </div>
            <div>
              <SectionLabel>Service Module</SectionLabel>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">{data.title}</h1>
              <p className="text-2xl mono text-white/40">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-24">
              <div>
                <h2 className="text-4xl mb-12">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.included.map((item: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-[#064e3b] shrink-0" size={20} />
                      <span className="mono text-sm text-white/60 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border border-white/10 p-12 bg-white/5">
                  <h3 className="text-2xl mb-6">Who This Is For</h3>
                  <p className="mono text-sm text-white/40 leading-relaxed">{data.who}</p>
                </div>
                <div className="border border-white/10 p-12 bg-white/5">
                  <h3 className="text-2xl mb-6">What You Get</h3>
                  <p className="mono text-sm text-white/40 leading-relaxed">{data.get}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-white/10 p-12 bg-black sticky top-32">
                <h3 className="text-2xl mb-8">Ecosystem Connection</h3>
                <ConnectedEcosystem className="w-full h-[300px] mb-8" highlightedNode={data.id} />
                <p className="mono text-[0.7rem] text-white/40 mb-12">See how {data.title} integrates with the rest of your business stack.</p>
                <Button asChild className="w-full bg-[#064e3b] hover:bg-[#053e2f] text-white py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;