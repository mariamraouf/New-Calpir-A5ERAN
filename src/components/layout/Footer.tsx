"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-zinc-700 pt-20 pb-12 px-6 border-t border-zinc-200">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        {/* Column 1: Info */}
        <div className="space-y-4 lg:col-span-2">
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
            <span className="text-2xl font-black tracking-tight uppercase text-zinc-950">Calpir</span>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-600 max-w-[380px]">
            We genuinely love building businesses and watching founders succeed. We are your technical squad setting up your entire digital engine so you can focus on building something meaningful.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2.5 text-xs mono text-zinc-700">
              <Mail size={15} className="text-emerald-600 shrink-0" />
              <a href="mailto:info@calpir.com" className="hover:text-emerald-700 transition-colors font-bold">
                info@calpir.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs mono text-zinc-700">
              <Phone size={15} className="text-emerald-600 shrink-0" />
              <a href="tel:+447346875731" className="hover:text-emerald-700 transition-colors font-bold">
                +44 7346 875731
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs mono text-emerald-800 font-bold uppercase tracking-wider">
              <MapPin size={15} className="shrink-0" /> BRISTOL, UNITED KINGDOM
            </div>
          </div>
        </div>

        {/* Column 2: Packages & Solo */}
        <div className="space-y-4">
          <h4 className="text-zinc-950 font-black uppercase text-xs tracking-widest mono border-b border-zinc-200 pb-2">Solutions</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/packages" className="text-emerald-700 hover:text-emerald-800 font-bold transition-colors">Launch Packages (7 to 28 Days)</Link></li>
            <li><Link to="/solo-services" className="text-zinc-600 hover:text-emerald-700 transition-colors">All Solo Services</Link></li>
            <li><Link to="/software-stack" className="text-zinc-600 hover:text-emerald-700 transition-colors">Our Software Stack</Link></li>
            <li><Link to="/assessment" className="text-zinc-600 hover:text-emerald-700 transition-colors">Free Growth Assessment</Link></li>
            <li><Link to="/case-studies" className="text-zinc-600 hover:text-emerald-700 transition-colors">Client Case Studies</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-4">
          <h4 className="text-zinc-950 font-black uppercase text-xs tracking-widest mono border-b border-zinc-200 pb-2">Modules</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services/website-development" className="text-zinc-600 hover:text-emerald-700 transition-colors">Website, Domain & SSL</Link></li>
            <li><Link to="/services/crm-sales" className="text-zinc-600 hover:text-emerald-700 transition-colors">CRM & Sales Pipelines</Link></li>
            <li><Link to="/services/ai-agents" className="text-zinc-600 hover:text-emerald-700 transition-colors">Autonomous AI Agents</Link></li>
            <li><Link to="/services/ai-automation" className="text-zinc-600 hover:text-emerald-700 transition-colors">Workflow Automation</Link></li>
            <li><Link to="/services/custom-apps" className="text-zinc-600 hover:text-emerald-700 transition-colors">Custom Web Apps</Link></li>
            <li><Link to="/services/operations-hr" className="text-zinc-600 hover:text-emerald-700 transition-colors">Operations & HR</Link></li>
          </ul>
        </div>

        {/* Column 4: Company & Social */}
        <div className="space-y-4">
          <h4 className="text-zinc-950 font-black uppercase text-xs tracking-widest mono border-b border-zinc-200 pb-2">Connect</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-zinc-600 hover:text-emerald-700 transition-colors">Our Story & Mission</Link></li>
            <li><Link to="/blog" className="text-zinc-600 hover:text-emerald-700 transition-colors">Intelligence Hub / Blog</Link></li>
            <li><Link to="/contact" className="text-zinc-600 hover:text-emerald-700 transition-colors">Book Strategy Call</Link></li>
            
            {/* Social Links */}
            <li className="pt-2 flex flex-col gap-2">
              <a 
                href="https://www.instagram.com/calpir_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-zinc-700 hover:text-emerald-700 transition-colors text-sm font-bold"
              >
                <Instagram size={16} className="text-emerald-600" /> <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/people/Calpir/61593821930684/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-zinc-700 hover:text-emerald-700 transition-colors text-sm font-bold"
              >
                <Facebook size={16} className="text-emerald-600" /> <span>Facebook</span>
              </a>
              <a 
                href="https://linkedin.com/company/calpir" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-zinc-700 hover:text-emerald-700 transition-colors text-sm font-bold"
              >
                <Linkedin size={16} className="text-emerald-600" /> <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 mono text-center sm:text-left">
        <p>© 2026 Calpir Technologies Ltd. Built with passion in Bristol.</p>
        <p className="flex items-center gap-1.5 justify-center">
          Crafted with <Heart size={13} className="text-rose-600 fill-rose-600" /> for ambitious founders
        </p>
      </div>
    </footer>
  );
};

export default Footer;