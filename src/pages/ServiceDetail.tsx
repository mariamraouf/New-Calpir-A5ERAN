"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain, CheckCircle2, ArrowRight 
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
        "Custom website design (mobile-first, responsive)",
        "Up to 5 pages (Starter) or 10 pages (Ultimate)",
        "Professional logo design",
        "Brand identity kit (colors, fonts, guidelines)",
        "UI/UX design with conversion-optimized layouts",
        "Contact forms and lead capture integration",
        "Speed optimization and performance tuning",
        "SSL certificate and security setup",
        "Analytics tracking installation (GA4)",
        "SEO foundation (meta tags, sitemap, schema markup)"
      ],
      who: "Pre-launch founders needing their first website | Existing businesses with outdated or underperforming sites | Startups rebranding for a new market",
      get: "Full website source code, Brand guidelines PDF, Logo source files, Analytics access"
    },
    'crm-sales': {
      id: 'crm',
      title: "CRM & Sales System Setup",
      tagline: "Never lose a lead again",
      icon: <BarChart3 size={48} />,
      included: [
        "CRM platform setup (HubSpot, GoHighLevel, or best fit)",
        "Sales pipeline configuration with custom stages",
        "Contact management and segmentation",
        "Lead scoring and qualification rules",
        "Automated follow-up email sequences",
        "Meeting/appointment scheduling integration",
        "Deal tracking and forecasting dashboards",
        "Customer data migration from existing tools",
        "Team permissions and workflow setup",
        "Integration with website forms and chatbots"
      ],
      who: "Startups managing leads in spreadsheets | Businesses with a CRM they never properly set up | Sales teams drowning in manual follow-ups",
      get: "Configured CRM account, Sales pipeline map, Automated sequence templates, Team training"
    },
    'marketing-branding': {
      id: 'marketing',
      title: "Marketing & Social Media",
      tagline: "Get found. Get noticed. Get customers.",
      icon: <Megaphone size={48} />,
      included: [
        "SEO optimization and technical setup",
        "Social media profile setup and optimization",
        "Social media content creation (5-15 posts/month)",
        "Email marketing system setup",
        "Content marketing strategy and editorial calendar",
        "Google Business Profile setup",
        "Brand voice and messaging guidelines",
        "Marketing automation workflows",
        "Analytics and reporting dashboards"
      ],
      who: "Businesses invisible online | Founders who know they need to post but never do | Companies with no email list or nurture sequences",
      get: "Marketing strategy doc, Content calendar, SEO report, Analytics dashboard"
    },
    'operations-hr': {
      id: 'ops',
      title: "Operations & HR Systems",
      tagline: "Run your business like a real company from day one",
      icon: <Settings size={48} />,
      included: [
        "Project management tool setup and configuration",
        "Standard Operating Procedures (SOP) creation",
        "Workflow optimization and documentation",
        "Payroll system setup",
        "Accounting system setup and integration",
        "HR onboarding system for new hires",
        "Employee handbook template",
        "Compliance checklist for your industry",
        "Internal communication tools setup",
        "Performance review framework"
      ],
      who: "Founders doing everything manually | Startups hiring their first employees | Businesses with no documented processes",
      get: "SOP library, PM tool configuration, HR handbook, Payroll setup"
    },
    'ai-agents': {
      id: 'ai-agents',
      title: "AI Agent Development",
      tagline: "Your 24/7 team members that never sleep",
      icon: <Bot size={48} />,
      included: [
        "Custom AI customer support chatbot (trained on YOUR business data)",
        "Lead qualification agent (asks questions, scores leads, books meetings)",
        "Appointment scheduling bot connected to your calendar",
        "Internal knowledge base assistant for your team",
        "Multi-channel deployment (website, WhatsApp, Instagram, email)",
        "AI agent training on your FAQs, product info, and processes",
        "Escalation rules — AI handles 70-80%, routes complex issues to humans",
        "Conversation analytics dashboard",
        "Monthly optimization and retraining",
        "Integration with your CRM (leads flow directly into pipeline)"
      ],
      who: "Businesses losing leads because they can't respond fast enough | Support teams overwhelmed with repetitive questions | Companies that want to serve customers 24/7 without hiring night shifts",
      get: "Deployed AI agents, Training data set, Analytics dashboard, Retraining schedule"
    },
    'ai-automation': {
      id: 'automation',
      title: "Workflow Automation & AI Integration",
      tagline: "Eliminate the work that's keeping you from growing",
      icon: <Zap size={48} />,
      included: [
        "Automation audit (identify highest-impact opportunities)",
        "CRM workflow automation (lead routing, follow-ups, deal progression)",
        "Email sequence automation (welcome, nurture, re-engagement, abandoned cart)",
        "Invoice and payment processing automation",
        "Data sync between all your tools (CRM ↔ website ↔ email ↔ analytics)",
        "Social media scheduling automation",
        "Reporting automation (weekly/monthly reports generated and sent automatically)",
        "Custom Zapier/Make/n8n workflow builds",
        "Cross-platform integrations (connect any tools you use)",
        "Documentation of all automations for your team"
      ],
      who: "Business owners spending 15+ hours/week on repetitive tasks | Teams copying data between tools manually | Anyone who's said 'there has to be a better way to do this'",
      get: "Active automated workflows, Integration map, Documentation, Maintenance guide"
    },
    'ai-consulting': {
      id: 'strategy',
      title: "AI Strategy Consulting",
      tagline: "Know exactly where AI will — and won't — help your business",
      icon: <Brain size={48} />,
      included: [
        "Full AI readiness assessment of your current operations",
        "Process-by-process evaluation (what to automate, what to keep human)",
        "ROI projections for each recommended AI implementation",
        "Tool selection and vendor evaluation (we're platform-agnostic)",
        "Custom AI roadmap with phased implementation plan",
        "Team training sessions (make your team comfortable with AI)",
        "Change management guidance",
        "Ongoing optimization recommendations",
        "Quarterly AI strategy reviews",
        "Access to our AI tool recommendations database"
      ],
      who: "Business owners who know AI is important but don't know where to start | Companies that tried AI tools and got overwhelmed | Leaders who want ROI projections before investing",
      get: "AI Roadmap document, ROI analysis, Tool database access, Training materials"
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