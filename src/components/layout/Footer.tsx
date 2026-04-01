"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white/70 pt-24 pb-12 px-6 border-t border-white/10">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Column 1 */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center group">
            <div className="relative h-12 w-12 overflow-hidden">
              <img 
                src="dyad-media://media/hopping-hedgehog-flip/.dyad/media/aaf13a2acb2d6c1af5d5955db40d3525.png" 
                alt="Calpir Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="ml-3 text-2xl font-black tracking-tighter uppercase text-white">Calpir</span>
          </Link>
          <p className="text-[0.95rem] leading-relaxed mono text-white/40">
            All-in-one business launch with AI-powered systems. Built by founders, for founders.
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mono">Services</h4>
          <ul className="space-y-3 text-[0.9rem] mono">
            <li><Link to="/services/website-development" className="hover:text-[#064e3b] transition-colors">Website & Branding</Link></li>
            <li><Link to="/services/crm-sales" className="hover:text-[#064e3b] transition-colors">CRM & Sales</Link></li>
            <li><Link to="/services/marketing-branding" className="hover:text-[#064e3b] transition-colors">Marketing & Social</Link></li>
            <li><Link to="/services/operations-hr" className="hover:text-[#064e3b] transition-colors">Operations & HR</Link></li>
            <li><Link to="/services/ai-agents" className="hover:text-[#064e3b] transition-colors">AI Agents</Link></li>
            <li><Link to="/services/ai-automation" className="hover:text-[#064e3b] transition-colors">AI Automation</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mono">Company</h4>
          <ul className="space-y-3 text-[0.9rem] mono">
            <li><Link to="/about" className="hover:text-[#064e3b] transition-colors">About Us</Link></li>
            <li><Link to="/packages" className="hover:text-[#064e3b] transition-colors">Packages</Link></li>
            <li><Link to="/case-studies" className="hover:text-[#064e3b] transition-colors">Case Studies</Link></li>
            <li><Link to="/assessment" className="hover:text-[#064e3b] transition-colors">Assessment</Link></li>
            <li><Link to="/blog" className="hover:text-[#064e3b] transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#064e3b] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mono">Connect</h4>
          <div className="flex flex-col gap-4 mono">
            <a href="https://twitter.com/calpir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#064e3b] transition-colors">
              <Twitter size={18} /> <span>Twitter / X</span>
            </a>
            <a href="https://linkedin.com/company/calpir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#064e3b] transition-colors">
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a href="mailto:hello@calpir.com" className="flex items-center gap-3 hover:text-[#064e3b] transition-colors">
              <Mail size={18} /> <span>hello@calpir.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom pt-12 border-t border-white/10 text-center text-[0.85rem] text-white/40 mono">
        <p>© 2026 Calpir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;