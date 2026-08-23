"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);

  const services = [
    { name: 'All Solo Services (À La Carte)', href: '/solo-services', highlight: true },
    { name: 'Website, Domain & SSL', href: '/services/website-development' },
    { name: 'CRM & Sales Systems', href: '/services/crm-sales' },
    { name: 'Marketing & Social', href: '/services/marketing-branding' },
    { name: 'Operations & HR', href: '/services/operations-hr' },
    { name: 'AI Agent Development', href: '/services/ai-agents' },
    { name: 'Workflow Automation', href: '/services/ai-automation' },
    { name: 'AI Strategy Consulting', href: '/services/ai-consulting' },
    { name: 'Custom Apps & Agents', href: '/services/custom-apps' },
  ];

  const navLinks = [
    { name: 'Packages', href: '/packages' },
    { name: 'Solo Services', href: '/solo-services' },
    { name: 'Software Stack', href: '/software-stack' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-[100] shadow-sm">
      <div className="container-custom h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-7">
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 mono text-xs uppercase tracking-wider font-bold text-zinc-800 hover:text-emerald-700 transition-colors py-8">
              Services <ChevronDown size={14} className={cn("transition-transform text-emerald-700", isServicesOpen && "rotate-180")} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-80 bg-white border border-zinc-200 shadow-xl p-2 animate-in fade-in slide-in-from-top-2">
                {services.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.href} 
                    className={cn(
                      "block px-4 py-3 text-xs uppercase font-bold tracking-wider transition-all border-l-2",
                      s.highlight
                        ? "text-emerald-800 bg-emerald-50 border-emerald-600 font-black mb-1"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 border-transparent hover:border-emerald-600"
                    )}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="mono text-xs uppercase tracking-wider font-bold text-zinc-800 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3 rounded-none mono text-xs uppercase tracking-wider btn-hover flex items-center gap-2">
            <Sparkles size={14} /> Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="xl:hidden text-zinc-900 p-2 border border-zinc-200 rounded-none bg-zinc-50 hover:bg-zinc-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} className="text-zinc-950" /> : <Menu size={22} className="text-zinc-950" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white z-[99] overflow-y-auto border-b border-zinc-200 shadow-2xl flex flex-col justify-between">
          <div className="p-5 sm:p-6 space-y-4">
            {/* CTA Button at top of mobile menu */}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3.5 px-4 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={15} /> Book Free Consultation Call
            </Link>

            {/* Services Accordion Header */}
            <div className="border border-zinc-200 bg-zinc-50">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between p-3.5 mono text-xs uppercase font-black tracking-wider text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                <span className="flex items-center gap-2 text-emerald-800">
                  <Layers size={15} /> Services & Capabilities
                </span>
                <ChevronDown size={16} className={cn("transition-transform duration-200 text-emerald-700", isMobileServicesOpen && "rotate-180")} />
              </button>

              {isMobileServicesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-zinc-200">
                  {services.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-[11px] uppercase font-bold tracking-wider transition-colors",
                        s.highlight 
                          ? "bg-emerald-50 text-emerald-900 border-l-2 border-emerald-600 font-black" 
                          : "text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50"
                      )}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
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

          {/* Bottom info on mobile menu */}
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