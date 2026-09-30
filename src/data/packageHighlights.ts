/**
 * What each one time package contains.
 *
 * Five lines made a $6,999 build look like a short list, which is the exact
 * opposite of the truth: these are the biggest things we sell and the most
 * work by a distance. Nine lines each, every one a real deliverable, and each
 * one opens to say what it actually means. Nobody should have to guess what
 * they are paying for, and nobody should think they are paying a lot for a
 * little.
 */

export interface PackageHighlight {
  text: string;
  brief: string;
}

export const PACKAGE_HIGHLIGHTS: Record<string, PackageHighlight[]> = {
  'starter-build': [
    {
      text: 'Company formation guided end to end',
      brief:
        'Entity type, jurisdiction, registration, tax identity and registered agent, walked through with you and filed. If you are a foreign founder setting up in the US, that path is the one we do most.',
    },
    {
      text: 'Website, domain, email and SSL',
      brief:
        'A real site rather than a template with your logo dropped in: your own domain, business email on it, a certificate so browsers trust it, and pages written for what you actually sell. Built to load fast, because a slow site is one Google demotes and visitors leave.',
    },
    {
      text: 'Brand identity, in every format',
      brief:
        'Logo as vector and raster, light and dark marks, favicon, a colour palette with real values, and a type system. Handed over as files you own, not as a Canva link that expires with a subscription.',
    },
    {
      text: 'One social channel set up properly',
      brief:
        'The profile that matters most for your market, with artwork, bio, links and the first posts scheduled. One channel done well beats four half filled in.',
    },
    {
      text: 'CRM and invoicing, connected',
      brief:
        'Enquiries land in a system rather than an inbox, and the quote and invoice come out of the same place. No spreadsheet, no chasing payment from memory.',
    },
    {
      text: 'Card payments taken from day one',
      brief:
        'Stripe set up in your name, on your domain, tested with a real transaction before handover, so the first customer who wants to pay you can.',
    },
    {
      text: 'An AI chatbot on your site',
      brief:
        'Trained on your own services and prices, answering out of hours and putting a qualified record into the CRM instead of leaving a visitor to fill in a form and hope.',
    },
    {
      text: 'Google indexing and analytics from launch',
      brief:
        'Search Console, sitemap, structured data and analytics configured on day one, so you are findable and measurable from the start rather than three months in.',
    },
    {
      text: 'Live in 7 days, every account in your name',
      brief:
        'One week from kickoff to open. Every domain, account and login is registered to you from the start, so if you fire us on day eight you keep all of it.',
    },
  ],

  'growth-build': [
    {
      text: 'Everything in Starter',
      brief:
        'The whole Starter build, unchanged: formation, site, domain, email, brand, CRM, invoicing, payments, chatbot and indexing. Growth adds to it rather than replacing it.',
    },
    {
      text: 'A six page site built to convert',
      brief:
        'Room for the services, the proof, the pricing and the detail a bigger buyer looks for, with each page written against a real search and a real objection.',
    },
    {
      text: 'Three social channels, built and filled',
      brief:
        'Profiles created, branded and populated, with the first month of content scheduled so nobody arrives at an empty page.',
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
      text: 'Your processes written down as SOPs',
      brief:
        'The steps, the owner, the tool and the exception, documented as we build, so the business survives the person who knows how it works.',
    },
    {
      text: 'Accounting and payroll connected',
      brief:
        'Invoices, payments and expenses flowing into your accounting software, and contractors or staff set up to be paid, rather than three systems nobody reconciles.',
    },
    {
      text: 'A reporting dashboard that stays true',
      brief:
        'Enquiries, pipeline, revenue and the marketing numbers in one view, built on live data so it still reflects reality in six months.',
    },
    {
      text: 'Live in 14 days, every account in your name',
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
        'Software built for the part of your business no off the shelf tool fits: a client portal, a booking system, an internal tool, a quoting engine. Yours, with the source code handed over.',
    },
    {
      text: 'Unlimited automations',
      brief:
        'Not five. We keep building workflows through the whole build until the operational system is finished, however many that turns out to be.',
    },
    {
      text: 'A fleet of AI agents, not one',
      brief:
        'Separate agents for qualifying, quoting, support and internal research, each scoped to its own job and its own data, with a person approving anything that leaves the building.',
    },
    {
      text: 'Full HR and international payroll',
      brief:
        'Contracts, records, onboarding and payroll set up across the countries your people are actually in, rather than a UK template used for somebody in Texas.',
    },
    {
      text: 'Multi entity and multi currency handled',
      brief:
        'More than one company, more than one currency, more than one tax regime, set up so the books, the invoices and the filings all line up instead of fighting.',
    },
    {
      text: 'Security and access properly set',
      brief:
        'Single sign on where it exists, a password manager, roles and permissions, and a documented list of who can reach what. The thing everybody skips until the week somebody leaves.',
    },
    {
      text: 'Team training and a handover document',
      brief:
        'Live sessions with your people plus a written handover covering every system, every login route and every process, so the build does not live only in our heads.',
    },
    {
      text: 'Live in 28 days, every account in your name',
      brief:
        'Four weeks, a named team, and a handover at the end of it. Everything registered to you.',
    },
  ],
};
