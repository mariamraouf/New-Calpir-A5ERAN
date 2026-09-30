"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700 text-emerald-50/80 pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6">
      {/* A little light in the top left so a tall column of green does not
          read as a flat block. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_5%_0%,rgba(16,185,129,0.25),transparent_60%)]" />
      <div className="relative container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
        {/* Column 1: Info */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-2">
          <Link to="/" className="flex items-center group gap-3">
            <img 
              src="/logo-with-transparent-background.png"
              onError={(e) => {
                if (e.currentTarget.src !== '/logo.png') {
                  e.currentTarget.src = '/logo.png';
                }
              }}
              alt="Calpir Logo" 
              className="h-9 sm:h-11 w-auto object-contain shrink-0 bg-transparent"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">Calpir</span>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-emerald-50/70 max-w-[380px]">
            We genuinely love building businesses and watching founders succeed. We are your technical squad setting up your entire digital engine so you can focus on building something meaningful.
          </p>
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2.5 text-xs mono text-emerald-50/70">
              <Mail size={14} className="text-emerald-300 shrink-0" />
              <a href="mailto:info@calpir.com" className="text-white hover:text-emerald-300 transition-colors font-bold">
                info@calpir.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Packages & Solo */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-white font-bold text-xs tracking-wide mono border-b border-white/15 pb-2">Solutions</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/packages" className="text-emerald-700 hover:text-emerald-800 font-bold transition-colors">Monthly Plans &amp; Packages</Link></li>
            <li><Link to="/marketing-seo" className="text-emerald-50/70 hover:text-white transition-colors">Marketing &amp; SEO</Link></li>
            <li><Link to="/solo-services" className="text-emerald-50/70 hover:text-white transition-colors">All Solo Services</Link></li>
            <li><Link to="/software-stack" className="text-emerald-50/70 hover:text-white transition-colors">Our Software Stack</Link></li>
            <li><Link to="/assessment" className="text-emerald-50/70 hover:text-white transition-colors">Free Growth Assessment</Link></li>
            <li><Link to="/case-studies" className="text-emerald-50/70 hover:text-white transition-colors">Client Case Studies</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-white font-bold text-xs tracking-wide mono border-b border-white/15 pb-2">Modules</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/services/website-development" className="text-emerald-50/70 hover:text-white transition-colors">Website, Domain & SSL</Link></li>
            <li><Link to="/services/crm-sales" className="text-emerald-50/70 hover:text-white transition-colors">CRM & Sales Pipelines</Link></li>
            <li><Link to="/services/ai-agents" className="text-emerald-50/70 hover:text-white transition-colors">Autonomous AI Agents</Link></li>
            <li><Link to="/services/ai-automation" className="text-emerald-50/70 hover:text-white transition-colors">Workflow Automation</Link></li>
            <li><Link to="/services/custom-apps" className="text-emerald-50/70 hover:text-white transition-colors">Custom Web Apps</Link></li>
            <li><Link to="/services/operations-hr" className="text-emerald-50/70 hover:text-white transition-colors">Operations & HR</Link></li>
          </ul>
        </div>

        {/* Column 4: Company & Social */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-white font-bold text-xs tracking-wide mono border-b border-white/15 pb-2">Connect</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/about" className="text-emerald-50/70 hover:text-white transition-colors">Our Story & Mission</Link></li>
            <li><Link to="/blog" className="text-emerald-50/70 hover:text-white transition-colors">Intelligence Hub / Blog</Link></li>
            <li><Link to="/contact" className="text-emerald-50/70 hover:text-white transition-colors">Book Strategy Call</Link></li>
            
            {/* Social Links */}
            <li className="pt-2 flex flex-col gap-2">
              <a 
                href="https://www.instagram.com/calpir_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-50/70 hover:text-white transition-colors text-xs sm:text-sm font-bold"
              >
                <Instagram size={15} className="text-emerald-300" /> <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/people/Calpir/61593821930684/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-50/70 hover:text-white transition-colors text-xs sm:text-sm font-bold"
              >
                <Facebook size={15} className="text-emerald-300" /> <span>Facebook</span>
              </a>
              <a 
                href="https://linkedin.com/company/calpir" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-50/70 hover:text-white transition-colors text-xs sm:text-sm font-bold"
              >
                <Linkedin size={15} className="text-emerald-300" /> <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative container-custom pt-6 sm:pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-emerald-50/60 mono text-center sm:text-left">
        <p>© 2026 Calpir Technologies Ltd.</p>
        <p className="flex items-center gap-1.5 justify-center">
          Crafted with <Heart size={12} className="text-rose-600 fill-rose-600" /> for ambitious founders
        </p>
      </div>
    </footer>
  );
};

export default Footer;