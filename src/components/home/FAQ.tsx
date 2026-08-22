"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionLabel from '../ui/SectionLabel';

const faqs = [
  {
    question: "How can you launch a whole business in 7 days?",
    answer: "We do not start from scratch. We have built a proprietary Base Stack of pre-integrated tools (Website, CRM, Ops, AI). When you sign on, we deploy this battle-tested infrastructure and then customize the branding, content, and specific workflows for your business. It is the difference between building a car from raw steel vs. customizing a high-performance chassis."
  },
  {
    question: "Do I own the code and the accounts?",
    answer: "100%. Everything we build is yours. We set up the accounts in your name, and you have full ownership of the website source code, the CRM data, and the AI agent configurations. We are your implementation partners, not your landlords."
  },
  {
    question: "What happens after the launch?",
    answer: "Every package includes a post-launch support period (2 to 12 weeks depending on the tier). During this time, we monitor your systems, fix any issues, and provide training for your team. After that, you can choose to manage it yourself or sign up for one of our ongoing optimization retainers."
  },
  {
    question: "Can I use my existing tools like Slack or Shopify?",
    answer: "Yes. While we have a recommended Golden Stack that works seamlessly together, our automation engine is platform agnostic. We can integrate almost any modern tool with an API into your new ecosystem."
  },
  {
    question: "Is the AI actually useful or just a chatbot?",
    answer: "We build Agents, not just Chatbots. Our agents are trained on your specific business data, can access your CRM to qualify leads, and can even trigger workflows like booking meetings or sending invoices. They are designed to replace manual labor, not just answer FAQs."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding border-b border-zinc-200 bg-zinc-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <SectionLabel>Inquiry</SectionLabel>
            <h2 className="text-4xl md:text-6xl mb-6 text-zinc-950 font-black">
              Common <br /> Questions.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Everything you need to know about the Calpir deployment process and our technical philosophy.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-zinc-200 px-6 md:px-8 bg-white shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-6 text-left text-zinc-950 hover:text-emerald-700 transition-colors">
                    <span className="text-lg md:text-xl font-bold uppercase tracking-tight">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;