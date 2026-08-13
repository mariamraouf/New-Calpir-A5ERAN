"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain, CheckCircle2, ArrowRight, Code, Shield, Layers, Cpu, Database
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';
import NotFound from './NotFound';
import SectionLabel from '@/components/ui/SectionLabel';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData: Record<string, any> = {
    'website-development': {
      id: 'website',
      title: "Website & Branding Architecture",
      tagline: "Your high-conversion digital foundation engineered for speed and scale",
      icon: <Globe size={48} />,
      overview: "A website shouldn't just be an online business card; it should be your highest-performing sales channel. We build custom, ultra-fast web architectures backed by solid brand identity systems that capture attention and drive revenue from day one.",
      included: [
        "Custom Next.js / React application development",
        "Sub-1.5 second global load times & Core Web Vitals optimization",
        "Professional logo & visual identity starter kit",
        "Conversion Rate Optimization (CRO) UX/UI design",
        "Contact forms & lead capture webhook integrations",
        "Technical SEO structure, Schema markup & OpenGraph setup",
        "Full analytics, Meta Pixel & Google Tag Manager tracking",
        "Mobile-first responsive layout & dark mode design",
        "SSL security certificate & edge network deployment",
        "Complete CMS integration for effortless content updates"
      ],
      who: "Pre-launch founders needing their first high-impact website | Existing businesses suffering from slow, outdated, or low-converting legacy sites.",
      get: "Full website repository & source code, Brand Guidelines PDF, Vector logo source files, Domain & DNS configuration, Analytics dashboard access."
    },
    'crm-sales': {
      id: 'crm',
      title: "CRM & Sales System Setup",
      tagline: "Never lose a lead again with automated pipelines and instant routing",
      icon: <BarChart3 size={48} />,
      overview: "Managing leads in spreadsheets or disjointed tools guarantees lost deals. We design, configure, and automate robust CRM environments in HubSpot or GoHighLevel that automatically route, score, and follow up with leads 24/7.",
      included: [
        "Complete CRM platform deployment & custom pipeline creation",
        "Custom property mapping for your specific industry metrics",
        "Automated lead scoring and activity tracking",
        "Instant SMS & email follow-up sequence setup",
        "Google Calendar & Calendly appointment booking integration",
        "Deal tracking, stage automation & revenue forecasting",
        "Customer data migration from spreadsheets or old tools",
        "Team role permissions, seat configuration & notification routing",
        "Native website form & live chat CRM sync",
        "Custom sales team dashboards & weekly automated reporting"
      ],
      who: "Startups buried in manual email chains and spreadsheets | Businesses with an existing CRM that was never properly configured.",
      get: "Fully configured CRM account, Visual sales pipeline blueprint, Automated sequence templates, Comprehensive team onboarding video."
    },
    'marketing-branding': {
      id: 'marketing',
      title: "Marketing & Social Systems",
      tagline: "Omnichannel presence and automated lead generation engines",
      icon: <Megaphone size={48} />,
      overview: "In 2026, consistent brand messaging across all touchpoints is mandatory. We set up your complete digital marketing infrastructure, from content distribution pipelines to automated email marketing flows that nurture prospects into buyers.",
      included: [
        "Omnichannel social media profile creation & verification",
        "Brand messaging playbook & tone of voice guidelines",
        "Automated email marketing platform setup (Klaviyo / ActiveCampaign)",
        "Welcome series, abandoned cart & lead magnet sequences",
        "Social media content template package (10+ customizable designs)",
        "Google Business Profile setup & local SEO optimization",
        "Lead magnet creation framework & landing page funnel",
        "Automated customer review generation workflows",
        "Ad account setup (Meta Ads Manager, Google Ads, LinkedIn Ads)",
        "Monthly performance attribution reporting template"
      ],
      who: "New businesses launching into competitive markets | Brands looking to turn passive visitors into repeat customers through automated marketing.",
      get: "Live marketing platforms, Email template suite, Social media design assets, 90-day content calendar blueprint."
    },
    'operations-hr': {
      id: 'ops',
      title: "Operations & HR Infrastructure",
      tagline: "Bulletproof internal systems that allow your company to scale without chaos",
      icon: <Settings size={48} />,
      overview: "Scaling a team without documented processes leads to bottlenecks and burnout. We build standard operating procedures (SOPs), payroll structures, contract management, and project tracking boards so your business operates like a well-oiled machine.",
      included: [
        "Centralized project management workspace setup (ClickUp / Notion / Linear)",
        "Custom board templates for client onboarding & internal workflows",
        "Standard Operating Procedure (SOP) library creation",
        "Payroll & contractor management tool setup (Deel / Gusto / Rippling)",
        "Digital contract & electronic signature integration (DocuSign / PandaDoc)",
        "Internal team communication channels & Slack workflow rules",
        "Employee onboarding & offboarding checklist templates",
        "Cloud storage folder architecture & permissions matrix",
        "Automated task creation based on deal stages",
        "Compliance & legal documentation repository setup"
      ],
      who: "Founders spending 20+ hours a week on administrative drag | Companies expanding their headcount and needing repeatable operational systems.",
      get: "Turnkey project workspace, Custom SOP documentation library, Configured payroll portal, Team permissions matrix."
    },
    'ai-agents': {
      id: 'ai-agents',
      title: "Autonomous AI Agent Development",
      tagline: "Intelligent digital employees that work 24/7/365 without rest",
      icon: <Bot size={48} />,
      overview: "Traditional chatbots rely on decision trees that frustrate users. We build custom AI Agents powered by Retrieval-Augmented Generation (RAG) that connect directly to your knowledge base, access your CRM, and execute complex business actions.",
      included: [
        "Custom LLM fine-tuning on your business documentation & SOPs",
        "Multi-channel deployment (Website, WhatsApp, Slack, Email)",
        "Autonomous lead qualification & direct calendar booking",
        "Live database retrieval for real-time order/service status updates",
        "Human-in-the-loop escalation rules & seamless staff handoff",
        "Sentiment analysis & conversation quality scoring",
        "Custom action triggers (Create CRM deal, send webhook, issue refund)",
        "Anti-hallucination guardrails & strict compliance boundaries",
        "Real-time conversation logs & analytics dashboard",
        "Monthly model retraining & knowledge base updates"
      ],
      who: "Businesses missing revenue opportunities after hours | Support teams overwhelmed by repetitive client inquiries.",
      get: "Deployed AI Agent fleet, Knowledge vector database, Custom action webhooks, Retraining management guide."
    },
    'ai-automation': {
      id: 'automation',
      title: "Workflow Automation Systems",
      tagline: "Connect every tool in your business and eliminate manual data entry",
      icon: <Zap size={48} />,
      overview: "Your team shouldn't be copying and pasting data between apps. We build custom automation pipelines using Make.com, Zapier, and Python scripts to unite your website, CRM, accounting, and communication tools into a single sync engine.",
      included: [
        "Complete tech stack audit & workflow mapping",
        "5 to 25+ custom automated scenarios (Make.com / Zapier)",
        "Cross-platform data synchronization (Websites, CRMs, Google Sheets, Slack)",
        "Automated invoice & receipt generation from closed deals",
        "Instant Slack/Teams notifications for key business milestones",
        "Error handling, fallback alerts & automatic retries",
        "Webhook endpoint creation & custom REST API integrations",
        "Automated report generation & PDF delivery",
        "Data transformation & cleansing logic",
        "Automation health monitoring & uptime tracking"
      ],
      who: "Teams wasting time on repetitive manual tasks | Companies with fragmented software tools that don't communicate.",
      get: "Live automated scenarios, Error handling suite, Visual workflow architecture map, System admin credentials."
    },
    'ai-consulting': {
      id: 'strategy',
      title: "AI Strategy & Executive Consulting",
      tagline: "Actionable AI roadmaps built for real ROI, not hype",
      icon: <Brain size={48} />,
      overview: "With thousands of AI tools flooding the market, deciding where to invest can feel overwhelming. We work directly with leadership teams to identify high-ROI opportunities, audit operations, and implement realistic AI transformation roadmaps.",
      included: [
        "Comprehensive operational audit & AI readiness assessment",
        "Custom 12-month AI Implementation Roadmap",
        "Tool selection & vendor evaluation matrix",
        "Data privacy, security & compliance framework design",
        "Executive leadership briefing & team training workshops",
        "ROI projection modeling for proposed AI initiatives",
        "Custom prompt engineering guidelines for internal staff",
        "AI governance & ethical use policy creation",
        "Quarterly technology reviews & roadmap adjustments",
        "Direct Slack access to Calpir senior technical advisors"
      ],
      who: "Executives wanting to leverage AI strategically | Established companies aiming to modernise legacy operations safely.",
      get: "12-Month AI Roadmap document, Security & compliance guide, Staff prompt library, Executive workshop recordings."
    },
    'custom-apps': {
      id: 'custom-apps',
      title: "Custom Apps & Bespoke Software",
      tagline: "Turn complex business logic into high-performance web software",
      icon: <Code size={48} />,
      overview: "When off-the-shelf software doesn't fit your business model, we build custom web applications, SaaS platforms, internal tools, and specialized AI agent fleets from scratch using modern, scalable full-stack technology.",
      included: [
        "Full-stack React / TypeScript application development",
        "Scalable database architecture (PostgreSQL, Supabase, Redis)",
        "User authentication, role-based access control (RBAC) & security",
        "Stripe payment gateway, subscription & billing portal setup",
        "Custom API development & third-party service integrations",
        "High-performance cloud hosting & automated deployment pipelines (CI/CD)",
        "Real-time data processing & WebSocket communication",
        "Custom administrative dashboards & data management tools",
        "Comprehensive automated testing & quality assurance",
        "Technical documentation & maintenance handover"
      ],
      who: "Founders launching bespoke SaaS platforms | Enterprise teams requiring custom internal portals or specialized client portals.",
      get: "Complete application codebase, Production cloud infrastructure, Admin credentials, Full technical documentation."
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
              <SectionLabel>Service Module Specification</SectionLabel>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">{data.title}</h1>
              <p className="text-xl md:text-2xl mono text-white/40">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Deliverables */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-20">
              {/* Executive Summary */}
              <div>
                <h2 className="text-3xl font-black uppercase mb-6 text-white">System Overview</h2>
                <p className="mono text-lg text-white/70 leading-relaxed bg-white/5 p-8 border border-white/10">
                  {data.overview}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-black uppercase mb-8 text-white">Module Specifications & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.included.map((item: string, i: number) => (
                    <div key={i} className="flex gap-4 p-4 border border-white/5 bg-white/5 items-start">
                      <CheckCircle2 className="text-[#064e3b] shrink-0 mt-1" size={20} />
                      <span className="mono text-xs uppercase tracking-wider text-white/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who & What You Get */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 p-8 bg-white/5">
                  <div className="mono text-xs uppercase tracking-widest text-[#064e3b] mb-4 font-bold">Ideal Deployment Candidate</div>
                  <h3 className="text-xl font-black uppercase mb-4">Who This Is For</h3>
                  <p className="mono text-sm text-white/50 leading-relaxed">{data.who}</p>
                </div>
                <div className="border border-white/10 p-8 bg-white/5">
                  <div className="mono text-xs uppercase tracking-widest text-[#064e3b] mb-4 font-bold">Final Assets Handover</div>
                  <h3 className="text-xl font-black uppercase mb-4">What You Receive</h3>
                  <p className="mono text-sm text-white/50 leading-relaxed">{data.get}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky */}
            <div className="space-y-8">
              <div className="border border-white/10 p-8 bg-black sticky top-32">
                <h3 className="text-2xl font-black uppercase mb-6">Ecosystem Placement</h3>
                <ConnectedEcosystem className="w-full h-[280px] mb-8" highlightedNode={data.id} />
                <p className="mono text-[0.7rem] text-white/40 mb-8">
                  This module connects directly with your broader business infrastructure to eliminate data silos.
                </p>
                <Button asChild className="w-full bg-[#064e3b] hover:bg-[#053e2f] text-white py-8 rounded-none font-black text-xl uppercase tracking-tighter btn-hover">
                  <Link to="/contact">Book Deployment Call <ArrowRight className="ml-2" size={18} /></Link>
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