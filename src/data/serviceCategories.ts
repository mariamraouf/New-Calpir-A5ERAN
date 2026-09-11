/**
 * The service categories, in the order they should read: become a company,
 * build the foundation, brand it, sell with it, automate it, run it, staff it.
 *
 * Single source of truth for the services page, the solo services page and the
 * navigation menu. They each used to keep their own copy, which is how a
 * category could appear in one place and not another.
 */
export interface ServiceCategory {
  name: string;
  id: string;
  blurb: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Formation & Compliance',
    id: 'formation-compliance',
    blurb:
      'Becoming a real company and staying one. Registration, tax identity, banking and the filing deadlines that carry penalties whether or not you traded.',
  },
  {
    name: 'Web & Foundation',
    id: 'web-foundation',
    blurb:
      'The layer everything else sits on. Your site, your domain, your email and phone, and keeping all of it fast and online.',
  },
  {
    name: 'Brand & Creative',
    id: 'brand-creative',
    blurb:
      'How the business looks and sounds, and the templates that let your team produce material without a designer every time.',
  },
  {
    name: 'Sales & Marketing',
    id: 'sales-marketing',
    blurb:
      'Getting found, getting enquiries, and turning them into paid work. Pipeline, outbound, search, email, ads and proposals.',
  },
  {
    name: 'AI & Automation',
    id: 'ai-automation',
    blurb:
      'The work that should not need a person. Agents, workflows, document handling and reporting, built with guardrails rather than hype.',
  },
  {
    name: 'Operations & Growth',
    id: 'operations-growth',
    blurb:
      'The internal machinery. Money in and out, documented processes, customer support, and the tools you run on.',
  },
  {
    name: 'People & Talent',
    id: 'people-talent',
    blurb:
      'Hiring, onboarding, paying and developing the people you bring in, with the paperwork done properly the first time.',
  },
];
