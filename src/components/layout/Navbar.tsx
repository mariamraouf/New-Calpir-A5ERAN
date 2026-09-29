"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { allServicesCatalog } from '@/data/allServicesList';
import { serviceIconMap, FallbackIcon } from '@/lib/serviceIcons';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { useBookingModal } from '@/components/booking/BookingModalProvider';

interface ServiceItem {
  name: string;
  desc?: string;
  href: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const CATEGORY_ORDER = SERVICE_CATEGORIES.map((c) => c.name);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORY_ORDER[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { openBooking } = useBookingModal();

  // Built from the catalog rather than hand listed, so the menu can never point
  // at a service that no longer exists. A stale /services/marketing-branding
  // entry used to live here and led to the 404 page.
  const soloEntry: ServiceItem = {
    name: 'All Solo Services',
    desc: 'Pick single fixed price setups',
    href: '/solo-services',
    icon: Layers,
    highlight: true,
  };

  const serviceGroups = CATEGORY_ORDER.map((category) => ({
    category,
    items: allServicesCatalog
      .filter((s) => s.category === category)
      .map<ServiceItem>((s) => ({
        name: s.title,
        desc: s.tagline,
        href: `/services/${s.slug}`,
        icon: serviceIconMap[s.iconName] || FallbackIcon,
      })),
  })).filter((g) => g.items.length > 0);

  // Four items and one dropdown. Eight top level links meant a visitor had to
  // read the whole bar before working out where anything was.
  const navLinksBefore = [{ name: 'Pricing', href: '/pricing' }];
  const navLinks = [
    { name: 'Packages', href: '/packages' },
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
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-[100] shadow-sm">
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
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy group-hover:text-emerald-700 transition-colors">
              Calpir
            </span>
            <span className="mono text-[8px] sm:text-[9px] tracking-wide text-emerald-700 font-bold hidden sm:block">
              Your Systems Squad
            </span>
          </div>
        </Link>

        {/* Desktop Nav (Visible on lg and above) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinksBefore.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}

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
                "flex items-center gap-1.5 text-[15px] font-semibold transition-colors py-6 focus:outline-none",
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
            
            {/* Two panel menu. 65 services in a single scrolling list is not
                navigable, so categories sit on the left and the chosen
                category's services fill the right. */}
            {isServicesOpen && (
              <div className="absolute top-full -left-4 w-[760px] bg-white border border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-emerald-800">
                    {allServicesCatalog.length} services across {serviceGroups.length} categories
                  </span>
                  <Link
                    to="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="text-[13px] text-slate-500 hover:text-emerald-700 font-semibold underline"
                  >
                    View all services →
                  </Link>
                </div>

                <div className="flex">
                  {/* Categories */}
                  <div className="w-[250px] shrink-0 border-r border-slate-200 bg-slate-50/70 p-2">
                    <Link
                      to={soloEntry.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-2.5 p-2.5 mb-2 bg-emerald-50 border border-emerald-300 text-emerald-950"
                    >
                      <div className="p-1.5 bg-emerald-600 text-white shrink-0">
                        <soloEntry.icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold tracking-tight">
                          {soloEntry.name}
                        </div>
                        <div className="mono text-[9px] text-emerald-800 truncate">
                          {soloEntry.desc}
                        </div>
                      </div>
                    </Link>

                    {serviceGroups.map((group) => (
                      <button
                        key={group.category}
                        type="button"
                        onMouseEnter={() => setActiveCategory(group.category)}
                        onFocus={() => setActiveCategory(group.category)}
                        onClick={() => setActiveCategory(group.category)}
                        className={cn(
                          'w-full text-left flex items-center justify-between gap-2 px-2.5 py-2 transition-colors border-l-2',
                          activeCategory === group.category
                            ? 'bg-white border-emerald-600 text-emerald-800'
                            : 'border-transparent text-slate-600 hover:bg-white hover:text-emerald-700'
                        )}
                      >
                        <span className="text-[11px] font-bold tracking-tight">
                          {group.category}
                        </span>
                        <span className="mono text-[9px] text-slate-400">
                          {group.items.length}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Services in the active category */}
                  <div className="flex-1 p-2 max-h-[62vh] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-2 gap-0.5">
                      {(serviceGroups.find((g) => g.category === activeCategory)?.items || []).map(
                        (item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="group flex items-start gap-2.5 p-2.5 hover:bg-slate-50 border-l-2 border-transparent hover:border-emerald-600 transition-all"
                            >
                              <div className="p-1.5 shrink-0 bg-slate-100 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                                <Icon size={14} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[11px] font-bold tracking-tight text-navy group-hover:text-emerald-700 transition-colors leading-snug">
                                  {item.name}
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 px-4 py-2.5 bg-slate-50 flex items-center justify-between">
                  <span className="text-[13px] text-slate-600">
                    Marketing &amp; SEO, solo services, software stack and case studies
                  </span>
                  <Link
                    to="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="text-[13px] text-emerald-800 font-semibold hover:underline"
                  >
                    Browse everything →
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
              className="text-[15px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Action Button */}
          <button
            type="button"
            onClick={() => openBooking()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl text-[15px] btn-hover flex items-center gap-2 shadow-sm"
          >
            Book a free call
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-navy p-2 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} className="text-navy" /> : <Menu size={22} className="text-navy" />}
        </button>
      </div>

      {/* Mobile Drawer (Visible below lg) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white z-[99] overflow-y-auto border-b border-slate-200 shadow-2xl flex flex-col justify-between">
          <div className="p-5 sm:p-6 space-y-4">
            {/* Top Action Button on Mobile */}
            <button
              type="button"
              onClick={() => { setIsOpen(false); openBooking(); }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3.5 px-4 font-bold tracking-wider text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={15} /> Book Free Consultation Call
            </button>

            {/* Mobile Dropdown / Accordion */}
            <div className="border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between p-3.5 mono text-xs font-bold tracking-wider text-navy hover:bg-slate-100 transition-colors"
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
                <div className="p-2 space-y-1 bg-white border-t border-slate-200">
                  {[soloEntry].map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.name}
                        to={s.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2.5 text-[11px] font-bold tracking-wider transition-colors",
                          s.highlight 
                            ? "bg-emerald-50 text-emerald-900 border-l-2 border-emerald-600 font-bold" 
                            : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
                        )}
                      >
                        <Icon size={14} className="text-emerald-700 shrink-0" />
                        <span>{s.name}</span>
                      </Link>
                    );
                  })}

                  {serviceGroups.map((group) => (
                    <div key={group.category} className="pt-2">
                      <div className="px-3 pb-1 mono text-[9px] tracking-wide font-bold text-slate-400">
                        {group.category}
                      </div>
                      {group.items.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            to={s.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2.5 text-[11px] font-bold tracking-wider text-slate-600 hover:text-emerald-700 hover:bg-slate-50 transition-colors"
                          >
                            <Icon size={14} className="text-emerald-700 shrink-0" />
                            <span>{s.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <div className="space-y-1 pt-2">
              <div className="text-xs tracking-wide text-slate-400 font-semibold px-1 pb-1">
                Navigation
              </div>
              {[...navLinksBefore, ...navLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 text-sm font-bold text-navy hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors border-b border-slate-100"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer inside mobile menu */}
          <div className="p-5 border-t border-slate-200 bg-slate-50 mono text-[11px] text-slate-600 space-y-1 text-center">
            <div className="font-bold text-navy">Calpir Technologies • Bristol, UK</div>
            <div className="text-emerald-800 font-bold">+44 7346 875731 • info@calpir.com</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;