"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';

/**
 * What the work actually looks like.
 *
 * The site described everything and showed nothing, so a visitor had to take
 * "we build your operational system" on faith. These are pictures of the four
 * things we hand over, with a tab per department so the section stays one
 * screen rather than four.
 *
 * Every image is a worked example built for this page, not a screenshot of a
 * customer's account, and the caption says so. Showing somebody else's real
 * numbers would be a better advert and a worse thing to do.
 */

interface Item {
  id: string;
  tab: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  href: string;
  cta: string;
}

const ITEMS: Item[] = [
  {
    id: 'build',
    tab: 'The build',
    title: 'A business that is open, in your name',
    body:
      'Site, domain, brand, email, payments, CRM and the accounts underneath, set up as one connected thing and registered to you from day one. This is what a package hands over.',
    src: '/img/launch-stack.jpg',
    alt: 'A finished website beside a connected accounts checklist, a paid invoice and a brand kit',
    href: '/packages',
    cta: 'See the packages',
  },
  {
    id: 'crm',
    tab: 'The CRM',
    title: 'Every enquiry in one place, moving',
    body:
      'A pipeline built around how you actually sell, fed by your website, your inbox and the chatbot, with the follow up already written. Nothing sits untouched because somebody forgot.',
    src: '/img/crm-pipeline.jpg',
    alt: 'A sales pipeline board with deals in four stages and their values',
    href: '/pricing',
    cta: 'Sales & CRM plan',
  },
  {
    id: 'ops',
    tab: 'The systems',
    title: 'The work that should not need a person',
    body:
      'Enquiry to CRM record to reply to booked call to invoice, without anybody retyping anything. We map it, build it, write it down, and keep it working when a platform changes underneath it.',
    src: '/img/automation-flow.jpg',
    alt: 'An automation flow from website form and phone call through to quote and invoice',
    href: '/pricing',
    cta: 'Ops & Systems plan',
  },
  {
    id: 'email',
    tab: 'The email',
    title: 'Follow up that happens without you',
    body:
      'Sequences that answer the enquiry the same day, follow up when you are busy, and send something useful rather than a nudge. A reply stops the sequence and puts a human back in it.',
    src: '/img/email-sequences.jpg',
    alt: 'A four step email follow up sequence with timing and reply statistics',
    href: '/pricing',
    cta: 'Sales & CRM plan',
  },
];

const ShowcaseBand = () => {
  const [active, setActive] = useState(ITEMS[0].id);
  const item = ITEMS.find((i) => i.id === active)!;

  return (
    <section className="section-padding section-alt border-b border-slate-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <SectionLabel>What you get</SectionLabel>
            <h2 className="text-3xl sm:text-5xl text-navy leading-[1.05]">
              Not a deck. <br />
              <span className="text-emerald-700">The actual thing.</span>
            </h2>
          </div>
          <p className="lede max-w-md">
            Four of the things we hand over, drawn from real builds. Pick one to
            see what it looks like when it is finished.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-7">
          {ITEMS.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setActive(i.id)}
              aria-pressed={active === i.id}
              className={cn(
                'px-4 py-2.5 rounded-full text-[14.5px] font-semibold transition-colors border',
                active === i.id
                  ? 'bg-deep text-white border-deep'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-navy',
              )}
            >
              {i.tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-12 items-center">
          <figure className="m-0 order-2 lg:order-1">
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={1200}
              height={760}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-slate-200 shadow-xl"
            />
            <figcaption className="text-slate-500 text-[13px] mt-3">
              A worked example built for this page. Not a customer account, and
              no numbers here belong to anyone.
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl text-navy leading-snug mb-4">{item.title}</h3>
            <p className="text-slate-600 text-[17px] leading-relaxed mb-7">{item.body}</p>
            <Button
              asChild
              className="bg-deep hover:bg-deep-900 text-white px-7 py-6 rounded-xl font-semibold text-[15px]"
            >
              <Link to={item.href}>
                {item.cta} <ArrowRight size={17} className="ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBand;
