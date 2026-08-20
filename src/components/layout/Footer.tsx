"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-zinc-300 pt-20 pb-12 px-6 border-t border-white/15">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center group gap-3">
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
            <span className="text-2xl font-black tracking-tight uppercase text-white">Calpir</span>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-300">
            All-in-one business launch with AI-powered systems. Built by founders, for founders.
          </p>
          <div className="flex items-center gap-2 text-xs mono text-emerald-400 font-bold uppercase tracking-wider">
            <MapPin size={14} /> BRISTOL, UNITED KINGDOM
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase text-xs tracking-widest mono border-b border-white/10 pb-2">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services/website-development" className="text-zinc-300 hover:text-emerald-400 transition-colors">Website & Branding</Link></li>
            <li><Link to="/services/crm-sales" className="text-zinc-300 hover:text-emerald-400 transition-colors">CRM & Sales</Link></li>
            <li><Link to="/services/marketing-branding" className="text-zinc-300 hover:text-emerald-400 transition-colors">Marketing & Social</Link></li>
            <li><Link to="/services/operations-hr" className="text-zinc-300 hover:text-emerald-400 transition-colors">Operations & HR</Link></li>
            <li><Link to="/services/ai-agents" className="text-zinc-300 hover:text-emerald-400 transition-colors">AI Agents</Link></li>
            <li><Link to="/services/ai-automation" className="text-zinc-300 hover:text-emerald-400 transition-colors">AI Automation</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase text-xs tracking-widest mono border-b border-white/10 pb-2">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-zinc-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link to="/packages" className="text-zinc-300 hover:text-emerald-400 transition-colors">Packages</Link></li>
            <li><Link to="/case-studies" className="text-zinc-300 hover:text-emerald-400 transition-colors">Case Studies</Link></li>
            <li><Link to="/assessment" className="text-zinc-300 hover:text-emerald-400 transition-colors">Assessment</Link></li>
            <li><Link to="/blog" className="text-zinc-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-zinc-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase text-xs tracking-widest mono border-b border-white/10 pb-2">Connect</h4>
          <div className="flex flex-col gap-3">
            <a href="https://linkedin.com/company/calpir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors text-sm">
              <Linkedin size={18} className="text-emerald-400" /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-white/10 text-center text-xs text-zinc-400 mono">
        <p>© 2026 Calpir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;