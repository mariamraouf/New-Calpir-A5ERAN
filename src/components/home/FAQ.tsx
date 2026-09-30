"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * The questions people actually ask before buying.
 *
 * It took a full screen with a heading the size of the hero, which is a lot of
 * page for a list of answers. Two columns of compact rows instead, with the
 * answers rewritten to be short and specific. Anything that needed a
 * paragraph of metaphor to explain was the wrong answer.
 */

const faqs = [
  {
    q: 'Is the free week really free?',
    a: 'Yes. Start a monthly plan and the work starts the same week, but the first invoice is not raised until day eight. Cancel inside the week and you are charged nothing at all. That is different from a refund, and it is the version we mean.',
  },
  {
    q: 'How can a whole business be set up in 7 days?',
    a: 'Because we are not starting from raw parts. The website, CRM, payments, email and automation layer are already built and integrated. The week goes on your brand, your content, your pricing and the workflows that are specific to you.',
  },
  {
    q: 'Do I own the code and the accounts?',
    a: 'All of it. Every account is registered in your name from day one, the source code is handed over, and the CRM data is yours. Cancel and you keep everything, which is the opposite of how most of this industry works.',
  },
  {
    q: 'What if I already use Slack, Shopify or Xero?',
    a: 'We build around what you already pay for. There is a stack we recommend when you have no preference, but anything with a modern API can be integrated rather than replaced.',
  },
  {
    q: 'Is the AI a real agent or a chatbot?',
    a: 'Both, and they are different things. The chatbot answers from your own services and prices. The agents do work: draft the quote, chase the unanswered proposal, write the call into the record. Anything that leaves the building is approved by a person first.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'Nothing stops working. The accounts, the site, the CRM and the automations are yours and stay in your name. You lose us running them, not the things themselves.',
  },
];

const FAQ = () => (
  <section className="py-12 sm:py-16 border-b border-slate-200 bg-white">
    <div className="container-custom">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-2">
            Before you ask
          </p>
          <h2 className="text-navy text-[1.6rem] sm:text-[2.1rem] font-extrabold tracking-tight leading-snug">
            The six we get every week.
          </h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          Ask us a seventh <ArrowRight size={15} />
        </Link>
      </div>

      <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-6 gap-y-0">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`item-${i}`}
            className="border-b border-slate-150 border-slate-200"
          >
            <AccordionTrigger className="hover:no-underline py-4 text-left text-navy hover:text-emerald-700 transition-colors">
              <span className="text-[15.5px] font-bold tracking-tight pr-3">{faq.q}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-slate-600 text-[14.5px] leading-relaxed">{faq.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
