/**
 * What each one time package contains, in the few lines worth putting on a
 * card, with the explanation shown when somebody opens the arrow.
 *
 * The full comparison lives on the packages page. These are the four or five
 * lines that decide which column a visitor is reading, so each one gets a
 * brief rather than being left as a phrase they have to interpret.
 */

export interface PackageHighlight {
  text: string;
  brief: string;
}

export const PACKAGE_HIGHLIGHTS: Record<string, PackageHighlight[]> = {
  'starter-build': [
    {
      text: 'Website, domain, email and SSL',
      brief:
        'A real site rather than a template with your logo dropped in: your own domain, business email on it, a certificate so browsers trust it, and the pages written for what you actually sell. Built to load fast, because a slow site is a site Google demotes and visitors leave.',
    },
    {
      text: 'Brand identity and one social channel',
      brief:
        'Logo in every format you will ever be asked for, a colour palette and type system, and one social profile set up properly with the artwork, the bio and the links. One channel done well beats four half filled in.',
    },
    {
      text: 'CRM and invoicing, connected',
      brief:
        'Enquiries land in a system rather than an inbox, and the quote and invoice come out of the same place. No spreadsheet, no chasing payment from memory.',
    },
    {
      text: 'An AI chatbot on your site',
      brief:
        'Trained on your own services and prices, answering out of hours and putting a qualified record into the CRM instead of leaving a visitor to fill in a form and hope.',
    },
    {
      text: 'Live in 7 days, in your name',
      brief:
        'Every account, domain and login is registered to you from the start. If you fire us on day eight you keep all of it, which is a promise most agencies do not make.',
    },
  ],
  'growth-build': [
    {
      text: 'Everything in Starter',
      brief:
        'The whole Starter build, unchanged: site, domain, email, brand, CRM, invoicing and the chatbot. Growth adds to it rather than replacing it.',
    },
    {
      text: 'A six page site and three channels',
      brief:
        'Room for the services, the proof and the detail a bigger buyer looks for, and three social profiles built and populated rather than one.',
    },
    {
      text: 'Five automated workflows',
      brief:
        'The five things you currently do by hand, automated: enquiry routing, follow up, quoting, onboarding, reporting, or whichever five are costing you the most time. We pick them with you.',
    },
    {
      text: 'An AI agent that qualifies and books',
      brief:
        'Beyond answering questions: it asks the qualifying ones, checks your calendar and books the call, so a good lead at 11pm is a meeting on Tuesday rather than an email you read on Monday.',
    },
    {
      text: 'Live in 14 days, in your name',
      brief:
        'Two weeks from the kickoff call to a business that is open, findable and running its own follow up. Everything registered to you.',
    },
  ],
  'ultimate-build': [
    {
      text: 'Everything in Growth',
      brief:
        'The full Growth build, plus the pieces below. Nothing is traded away to make room.',
    },
    {
      text: 'A custom app or customer portal',
      brief:
        'Software built for the part of your business no off the shelf tool fits: a client portal, a booking system, an internal tool, a quoting engine. Yours, with the code handed over.',
    },
    {
      text: 'Unlimited automations',
      brief:
        'Not five. We keep building workflows through the whole build until the operational system is done, however many that turns out to be.',
    },
    {
      text: 'Full HR and international payroll',
      brief:
        'Contracts, records, onboarding and payroll set up across the countries your people are actually in, rather than a UK template used for someone in Texas.',
    },
    {
      text: 'Live in 28 days, in your name',
      brief:
        'Four weeks, a named team, and a handover document at the end of it. Everything registered to you.',
    },
  ],
};
