"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'All Solo Services (À La Carte)', href: '/solo-services' },
    { name: 'Website, Domain & Branding', href: '/services/website-development' },
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
    <nav className="bg-[#080808]/95 backdrop-blur-md border-b border-white/15 sticky top-0 z-[100]">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group gap-3.5">
          <img 
            src="/logo-with-transparent-background.png"
            onError={(e) => {
              if (e.currentTarget.src !== '/logo.png') {
                e.currentTarget.src = '/logo.png';
              }
            }}
            alt="Calpir Logo" 
            className="h-10 md:h-12 w-auto object-contain shrink-0 bg-transparent"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight uppercase text-white group-hover:text-emerald-400 transition-colors">
              Calpir
            </span>
            <span className="mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold -mt-1 hidden sm:block">
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
            <button className="flex items-center gap-1.5 mono text-xs uppercase tracking-wider font-bold text-zinc-300 hover:text-emerald-400 transition-colors py-8">
              Services <ChevronDown size={14} className={cn("transition-transform text-emerald-400", isServicesOpen && "rotate-180")} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-80 bg-[#111111] border border-white/20 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">
                {services.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.href} 
                    className={cn(
                      "block px-4 py-3 text-xs uppercase font-bold tracking-wider transition-all border-l-2",
                      s.href === '/solo-services'
                        ? "text-emerald-400 bg-emerald-950/40 border-emerald-400 font-black mb-1"
                        : "text-zinc-300 hover:text-white hover:bg-emerald-600/20 border-transparent hover:border-emerald-400"
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
              className="mono text-xs uppercase tracking-wider font-bold text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-black font-black px-6 py-3 rounded-none mono text-xs uppercase tracking-wider btn-hover flex items-center gap-2">
            <Sparkles size={14} /> Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "xl:hidden absolute top-full left-0 right-0 bg-[#0f0f0f] border-b border-white/20 transition-all duration-300 overflow-hidden shadow-2xl",
        isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-6 gap-3">
          <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Services & Solo Offerings</div>
          <Link to="/solo-services" onClick={() => setIsOpen(false)} className="text-base font-bold uppercase text-emerald-300 bg-emerald-950/40 p-3 border border-emerald-500/30">
            ⚡ Browse All Solo Services (À La Carte)
          </Link>
          {services.slice(1).map((s) => (
            <Link key={s.name} to={s.href} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase text-zinc-300 hover:text-emerald-400 transition-colors py-1">
              {s.name}
            </Link>
          ))}
          <div className="h-px bg-white/15 my-2" />
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-base font-bold uppercase text-zinc-200 hover:text-emerald-400 transition-colors py-1">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-emerald-500 hover:bg-emerald-400 text-black text-center py-4 font-black uppercase tracking-wider mt-4">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;