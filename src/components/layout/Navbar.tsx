"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Website & Branding', href: '/services/website-development' },
    { name: 'CRM & Sales Systems', href: '/services/crm-sales' },
    { name: 'Marketing & Social', href: '/services/marketing-branding' },
    { name: 'Operations & HR', href: '/services/operations-hr' },
    { name: 'AI Agent Development', href: '/services/ai-agents' },
    { name: 'Workflow Automation', href: '/services/ai-automation' },
    { name: 'AI Strategy Consulting', href: '/services/ai-consulting' },
  ];

  const navLinks = [
    { name: 'Packages', href: '/packages' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-[100]">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-black flex items-center justify-center">
            <img 
              src="dyad-media://media/New%20Calpir/.dyad/media/d011c1c67d349a9d48292ce478d49712.png" 
              alt="Calpir Logo" 
              className="h-full w-full object-cover scale-110"
            />
          </div>
          <span className="ml-3 text-xl font-black tracking-tighter uppercase group-hover:text-[#064e3b] transition-colors">Calpir</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 mono text-[0.7rem] uppercase tracking-widest font-bold text-white/60 hover:text-[#064e3b] transition-colors py-8">
              Services <ChevronDown size={14} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-black border border-white/10 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">
                {services.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.href} 
                    className="block px-4 py-3 mono text-[0.6rem] uppercase tracking-widest font-bold text-white/40 hover:text-[#064e3b] hover:bg-white/5 transition-all"
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
              className="mono text-[0.7rem] uppercase tracking-widest font-bold text-white/60 hover:text-[#064e3b] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/contact" className="bg-[#064e3b] text-white px-8 py-3 rounded-none mono text-[0.7rem] uppercase tracking-widest font-black btn-hover">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 transition-all duration-300 overflow-hidden shadow-2xl",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-6">
          <div className="mono text-[0.6rem] uppercase tracking-widest text-white/20">Services</div>
          {services.map((s) => (
            <Link key={s.name} to={s.href} onClick={() => setIsOpen(false)} className="text-xl font-black uppercase text-white">
              {s.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-4" />
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-xl font-black uppercase text-white">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-[#064e3b] text-white text-center py-6 font-black uppercase tracking-tighter mt-4">
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;