"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ArrowRight, Layers, Search, Mail,
  Landmark, Globe, Palette, Megaphone, Bot, Settings, Users,
  Linkedin, Instagram, Facebook,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allServicesCatalog } from '@/data/allServicesList';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { useBookingModal } from '@/components/booking/BookingModalProvider';

/**
 * The top bar.
 *
 * The services menu used to list all 65 services across two panels. Nobody
 * reads 65 links; they scan for the department their problem lives in. So the
 * menu is now the seven departments, each with a line saying what it covers,
 * and each one opens that department's section on the services page where the
 * individual services and the monthly plan both live.
 */

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'formation-compliance': Landmark,
  'web-foundation': Globe,
  'brand-creative': Palette,
  'sales-marketing': Megaphone,
  'ai-automation': Bot,
  'operations-growth': Settings,
  'people-talent': Users,
};

/** A one line version of each category blurb, short enough for a menu row. */
const CATEGORY_MENU_NOTE: Record<string, string> = {
  'formation-compliance': 'Registration, tax identity, banking and the filings that carry penalties.',
  'web-foundation': 'Your site, domain, email and phone, built fast and kept online.',
  'brand-creative': 'Logo, palette, templates and the material your team works from.',
  'sales-marketing': 'Getting found, getting the enquiry, and not dropping it.',
  'ai-automation': 'Agents, chatbots and workflows that do the work nobody should.',
  'operations-growth': 'Money in and out, documented processes, and the tools you run on.',
  'people-talent': 'Hiring, onboarding, payroll and the paperwork done properly.',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { openBooking } = useBookingModal();

  const countFor = (name: string) =>
    allServicesCatalog.filter((s) => s.category === name).length;

  const navLinksBefore = [{ name: 'Pricing', href: '/pricing' }];
  const navLinks = [
    { name: 'Packages', href: '/packages' },
    { name: 'Case studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const SOCIALS = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/calpir', Icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/calpir_/', Icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/people/Calpir/61593821930684/', Icon: Facebook },
  ];

  useEffect(() => {
    setIsServicesOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

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
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-[100] shadow-sm">
      {/* A thin utility strip. Email and the social accounts belong up here
          rather than only in the footer, where somebody who wants to check
          whether a company is real has to scroll the whole page to find them. */}
      <div className="hidden lg:block bg-gradient-to-r from-deep-900 via-deep-800 to-deep-700 text-emerald-50/85">
        <div className="container-custom h-9 flex items-center justify-between text-[13px]">
          <a
            href="mailto:info@calpir.com"
            className="inline-flex items-center gap-2 font-medium hover:text-white transition-colors"
          >
            <Mail size={13} className="text-emerald-300" /> info@calpir.com
          </a>

          <div className="flex items-center gap-1">
            <span className="mr-2 text-emerald-100/60">Follow the work</span>
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center justify-center w-7 h-7 rounded-md hover:bg-white/10 hover:text-white transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
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
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy group-hover:text-emerald-700 transition-colors">
              Calpir
            </span>
            <span className="mono text-[8px] sm:text-[9px] tracking-wide text-emerald-700 font-bold hidden sm:block">
              Your Systems Squad
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinksBefore.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services: seven departments, not sixty five services */}
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
                'flex items-center gap-1.5 text-[15px] font-semibold transition-colors py-6 focus:outline-none',
                isServicesOpen ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-700',
              )}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                className={cn('transition-transform duration-200 text-emerald-700', isServicesOpen && 'rotate-180')}
              />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full -left-4 w-[620px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
                <div className="p-2">
                  {SERVICE_CATEGORIES.map((category) => {
                    const Icon = CATEGORY_ICONS[category.id] || Layers;
                    return (
                      <Link
                        key={category.id}
                        to={`/services#${category.id}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/70 transition-colors"
                      >
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-emerald-700 group-hover:bg-emerald-100 transition-colors shrink-0">
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0 flex-grow">
                          <span className="flex items-center gap-2">
                            <span className="text-[14.5px] font-bold tracking-tight text-navy group-hover:text-emerald-700 transition-colors">
                              {category.name}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400">
                              {countFor(category.name)} services
                            </span>
                          </span>
                          <span className="block text-[13px] text-slate-500 leading-snug mt-0.5">
                            {CATEGORY_MENU_NOTE[category.id] || category.blurb}
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          className="text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 mt-2"
                        />
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between gap-4">
                  <Link
                    to="/marketing-seo"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center gap-2 text-[13.5px] font-semibold text-navy hover:text-emerald-700 transition-colors"
                  >
                    <Search size={14} className="text-emerald-700" /> Marketing &amp; SEO
                  </Link>
                  <Link
                    to="/solo-services"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center gap-2 text-[13.5px] font-semibold text-navy hover:text-emerald-700 transition-colors"
                  >
                    <Layers size={14} className="text-emerald-700" />
                    All {allServicesCatalog.length} services, one at a time
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => openBooking()}
              className="hidden xl:inline-flex text-[14.5px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors px-2"
            >
              Book a call
            </button>
            <Link
              to="/pricing"
              className="group bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-[14.5px] flex items-center gap-2 shadow-sm shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              Get your free trial now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-navy p-2 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} className="text-navy" /> : <Menu size={22} className="text-navy" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white z-[99] overflow-y-auto border-b border-slate-200 shadow-2xl flex flex-col justify-between">
          <div className="p-5 sm:p-6 space-y-4">
            <div className="space-y-2.5">
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3.5 px-4 font-bold rounded-xl text-[15px] flex items-center justify-center gap-2 shadow-md"
              >
                Get your free trial now <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => { setIsOpen(false); openBooking(); }}
                className="w-full border border-emerald-600 text-emerald-800 text-center py-3 px-4 font-semibold rounded-xl text-[15px]"
              >
                Book a call
              </button>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between p-3.5 font-semibold text-navy bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Layers size={16} className="text-emerald-700" /> Services
                </span>
                <ChevronDown
                  size={16}
                  className={cn('transition-transform duration-200 text-emerald-700', isMobileServicesOpen && 'rotate-180')}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="p-2 bg-white border-t border-slate-200">
                  {SERVICE_CATEGORIES.map((category) => {
                    const Icon = CATEGORY_ICONS[category.id] || Layers;
                    return (
                      <Link
                        key={category.id}
                        to={`/services#${category.id}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-[14.5px] font-semibold text-navy hover:bg-emerald-50 transition-colors"
                      >
                        <Icon size={16} className="text-emerald-700 shrink-0" />
                        <span className="flex-grow">{category.name}</span>
                        <ArrowRight size={14} className="text-slate-300" />
                      </Link>
                    );
                  })}
                  <Link
                    to="/solo-services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-[14.5px] font-semibold text-emerald-800 bg-emerald-50 mt-1"
                  >
                    <Layers size={16} className="shrink-0" />
                    <span className="flex-grow">All {allServicesCatalog.length} services</span>
                    <ArrowRight size={14} className="text-emerald-400" />
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1 pt-2">
              {[...navLinksBefore, ...navLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 text-[15px] font-semibold text-navy hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors border-b border-slate-100"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 border-t border-slate-200 bg-slate-50 text-[13px] text-slate-600 space-y-1 text-center">
            <div className="font-semibold text-navy">Calpir Technologies</div>
            <a href="mailto:info@calpir.com" className="text-emerald-800 font-semibold">info@calpir.com</a>
            <div className="flex items-center justify-center gap-2 pt-2">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 bg-white text-navy"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
