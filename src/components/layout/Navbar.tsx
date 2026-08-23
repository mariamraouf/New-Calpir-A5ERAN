"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Sparkles, Layers, ArrowRight,
  Globe, BarChart3, Megaphone, Settings, Bot, Zap, Brain, Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  name: string;
  desc?: string;
  href: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const services: ServiceItem[] = [
    { 
      name: 'All Solo Services (À La Carte)', 
      desc: 'Pick single fixed-price setups',
      href: '/solo-services', 
      icon: Layers,
      highlight: true 
    },
    { 
      name: 'Website, Domain & SSL', 
      desc: 'Sub-second React & Next.js stores',
      href: '/services/website-development',
      icon: Globe
    },
    { 
      name: 'CRM & Sales Systems', 
      desc: 'Automated 60-second lead routing',
      href: '/services/crm-sales',
      icon: BarChart3
    },
    { 
      name: 'Autonomous AI Agents', 
      desc: '24/7 lead qualification & booking',
      href: '/services/ai-agents',
      icon: Bot
    },
    { 
      name: 'Workflow Automation', 
      desc: 'Make.com & Zapier integrations',
      href: '/services/ai-automation',
      icon: Zap
    },
    { 
      name: 'Marketing & Social Systems', 
      desc: 'Multi-channel acquisition funnels',
      href: '/services/marketing-branding',
      icon: Megaphone
    },
    { 
      name: 'Operations & HR Infrastructure', 
      desc: 'SOP wikis & payroll systems',
      href: '/services/operations-hr',
      icon: Settings
    },
    { 
      name: 'AI Strategy Consulting', 
      desc: '12-month executive AI roadmaps',
      href: '/services/ai-consulting',
      icon: Brain
    },
    { 
      name: 'Custom Apps & Fleets', 
      desc: 'Bespoke full-stack web software',
      href: '/services/custom-apps',
      icon: Code
    },
  ];

  const navLinks = [
    { name: 'Packages', href: '/packages' },
    { name: 'Solo Services', href: '/solo-services' },
    { name: 'Software Stack', href: '/software-stack' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'About', href: '/about' },
  ];

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-[100] shadow-sm">
      <div className="container-custom h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center group gap-2.5 sm:gap-3.5">
          <img 
            src="/logo-with-transparent-background.png"
            onError={(e) => {
              if (e.currentTarget.src !== '/logo.png') {
                e.currentTarget.src = '/logo.png';
              }
            }}
            alt="Calpir Logo" 
            className="h-8 sm:h-10 md:h-11 w-auto object-contain shrink-0 bg-transparent"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-zinc-950 group-hover:text-emerald-700 transition-colors">
              Calpir
            </span>
            <span className="mono text-[8px] sm:text-[9px] uppercase tracking-widest text-emerald-700 font-bold hidden sm:block">
              Your Systems Squad
            </span>
          </div>
        </Link>

        {/* Desktop Nav (Visible on lg and above) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Services Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center gap-1.5 mono text-xs uppercase tracking-wider font-bold transition-colors py-6 focus:outline-none",
                isServicesOpen ? "text-emerald-700" : "text-zinc-800 hover:text-emerald-700"
              )}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown 
                size={14} 
                className={cn("transition-transform duration-200 text-emerald-700", isServicesOpen && "rotate-180")} 
              />
            </button>
            
            {/* Dropdown Menu Container */}
            {isServicesOpen && (
              <div 
                className="absolute top-full -left-4 w-[380px] bg-white border border-zinc-200 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-2 border-b border-zinc-100 mb-1 flex items-center justify-between">
                  <span className="mono text-[10px] uppercase tracking-widest font-black text-emerald-800">
                    Capabilities & Modules
                  </span>
                  <Link 
                    to="/services" 
                    onClick={() => setIsServicesOpen(false)}
                    className="mono text-[10px] text-zinc-500 hover:text-emerald-700 font-bold uppercase underline"
                  >
                    View Overview →
                  </Link>
                </div>

                <div className="space-y-1 max-h-[460px] overflow-y-auto custom-scrollbar pr-1">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link 
                        key={s.name} 
                        to={s.href} 
                        onClick={() => setIsServicesOpen(false)}
                        className={cn(
                          "group flex items-start gap-3 p-2.5 transition-all rounded-none",
                          s.highlight
                            ? "bg-emerald-50 text-emerald-950 border border-emerald-300 font-black mb-2"
                            : "hover:bg-zinc-50 text-zinc-800 border-l-2 border-transparent hover:border-emerald-600"
                        )}
                      >
                        <div className={cn(
                          "p-2 shrink-0 transition-colors",
                          s.highlight ? "bg-emerald-600 text-white" : "bg-zinc-100 text-emerald-700 group-hover:bg-emerald-100"
                        )}>
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-black uppercase tracking-tight text-zinc-950 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                            <span>{s.name}</span>
                            {s.highlight && (
                              <span className="mono text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 uppercase font-bold">
                                Popular
                              </span>
                            )}
                          </div>
                          {s.desc && (
                            <div className="mono text-[10px] text-zinc-500 truncate mt-0.5">
                              {s.desc}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 mt-1 border-t border-zinc-100 px-3 py-2 bg-zinc-50 flex items-center justify-between">
                  <span className="mono text-[10px] text-zinc-600 font-bold">Need a complete turn-key build?</span>
                  <Link 
                    to="/packages" 
                    onClick={() => setIsServicesOpen(false)}
                    className="mono text-[10px] text-emerald-800 font-black uppercase hover:underline"
                  >
                    View Packages →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="mono text-xs uppercase tracking-wider font-bold text-zinc-800 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Action Button */}
          <Link 
            to="/contact" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-5 py-2.5 rounded-none mono text-xs uppercase tracking-wider btn-hover flex items-center gap-2 shadow-sm"
          >
            <Sparkles size={14} /> Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-zinc-900 p-2 border border-zinc-200 rounded-none bg-zinc-50 hover:bg-zinc-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} className="text-zinc-950" /> : <Menu size={22} className="text-zinc-950" />}
        </button>
      </div>

      {/* Mobile Drawer (Visible below lg) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white z-[99] overflow-y-auto border-b border-zinc-200 shadow-2xl flex flex-col justify-between">
          <div className="p-5 sm:p-6 space-y-4">
            {/* Top Action Button on Mobile */}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3.5 px-4 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={15} /> Book Free Consultation Call
            </Link>

            {/* Mobile Dropdown / Accordion */}
            <div className="border border-zinc-200 bg-zinc-50">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between p-3.5 mono text-xs uppercase font-black tracking-wider text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                <span className="flex items-center gap-2 text-emerald-800">
                  <Layers size={15} /> Services & Capabilities Dropdown
                </span>
                <ChevronDown 
                  size={16} 
                  className={cn("transition-transform duration-200 text-emerald-700", isMobileServicesOpen && "rotate-180")} 
                />
              </button>

              {isMobileServicesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-zinc-200">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.name}
                        to={s.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2.5 text-[11px] uppercase font-bold tracking-wider transition-colors",
                          s.highlight 
                            ? "bg-emerald-50 text-emerald-900 border-l-2 border-emerald-600 font-black" 
                            : "text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50"
                        )}
                      >
                        <Icon size={14} className="text-emerald-700 shrink-0" />
                        <span>{s.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <div className="space-y-1 pt-2">
              <div className="mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold px-1 pb-1">
                Navigation
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 text-sm font-black uppercase text-zinc-900 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors border-b border-zinc-100"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} className="text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer inside mobile menu */}
          <div className="p-5 border-t border-zinc-200 bg-zinc-50 mono text-[11px] text-zinc-600 space-y-1 text-center">
            <div className="font-bold text-zinc-950">Calpir Technologies • Bristol, UK</div>
            <div className="text-emerald-800 font-bold">+44 7346 875731 • info@calpir.com</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;