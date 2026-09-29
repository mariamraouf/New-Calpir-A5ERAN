/**
 * What Calpir sells, in the two shapes people buy it.
 *
 * MONTHLY PLANS are retainers. The work repeats every month and the money
 * repeats with it. Each one can be bought on its own, and the Everything plan
 * buys all four together for less than the sum of them.
 *
 * ONE TIME PACKAGES are builds. You pay once, we hand over a finished thing.
 *
 * Prices are the real numbers a customer pays, not a starting point. GBP and
 * EUR are set as their own clean figures rather than converted at whatever
 * today's rate is, so a price does not move because a currency did.
 *
 * The same numbers exist again, server side, in api/checkout.ts. That copy is
 * the one Stripe charges against, because anything the browser sends can be
 * edited before it arrives. If you change a price here, change it there too.
 */

export type Currency = 'usd' | 'gbp' | 'eur';

export interface PlanPrice {
  usd: number;
  gbp: number;
  eur: number;
}

/** One line in a plan, with the explanation shown when somebody taps it. */
export interface PlanItem {
  text: string;
  brief: string;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  tagline: string;
  /** Charged every month until cancelled. */
  price: PlanPrice;
  /** The service ids in allServicesCatalog this plan draws on. */
  relatedServices: string[];
  who: string;
  /** What actually lands in the customer's inbox each month. */
  included: PlanItem[];
  featured?: boolean;
  /** Set on the bundle so the page can show what it replaces. */
  bundles?: string[];
  iconName: string;
}

export interface OneTimePackage {
  id: string;
  name: string;
  tagline: string;
  /** Charged once. */
  price: PlanPrice;
  timeline: string;
  who: string;
  featured?: boolean;
  iconName: string;
}

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    id: 'marketing-seo-monthly',
    name: 'Marketing & SEO',
    tagline: 'Getting found on Google, and getting the enquiry when you are.',
    price: { usd: 899, gbp: 719, eur: 839 },
    iconName: 'Search',
    featured: true,
    who: 'Businesses that have a website and want it to actually bring in work.',
    relatedServices: [
      'seo-content-strategy',
      'gbp-seo',
      'content-production',
      'email-marketing',
      'paid-ads-setup',
      'analytics-tracking',
      'reviews-reputation',
      'social-niche',
    ],
    included: [
      { text: "Technical SEO maintained every month", brief: "The plumbing Google reads before it reads your words: site speed, crawlability, structured data, broken links, index coverage. Most agencies audit it once at the start and never look again, so it quietly rots. We check it monthly and fix what has drifted." },
      { text: "Four published pieces of content", brief: "Four articles a month, researched against primary sources rather than rewritten from whatever ranks first, written for a search somebody actually performs, and submitted for indexing so Google sees them in days rather than months." },
      { text: "Google Business Profile kept current", brief: "Your Maps listing, with posts, photos, hours, categories and replies to every review. It is the cheapest local ranking factor there is and almost nobody maintains it past the week they claim it." },
      { text: "Keyword tracking that matters", brief: "We track the searches that bring buyers, not the ones that bring traffic. A ranking for a term nobody buys from is a number that makes a report look good and changes nothing." },
      { text: "Social posting, three times a week", brief: "Written and scheduled across the channels that suit your market, with the visuals made. Consistency beats brilliance here, and consistency is what stops when you get busy." },
      { text: "An email campaign every month", brief: "One campaign or newsletter to your list, written, built and sent. Your list is the only audience you own outright, and it decays if you never speak to it." },
      { text: "Paid ads managed, if you run them", brief: "Campaign structure, keywords, negatives, bids and creative, reviewed and adjusted. We do not take a cut of your ad spend, so there is no incentive for us to tell you to spend more." },
      { text: "One honest report a month", brief: "What moved, what did not, and what we are changing because of it. If something is not working you will read that it is not working." },
    ],
  },
  {
    id: 'ops-systems-monthly',
    name: 'Ops & Systems',
    tagline: 'The website, the CRM and the automations stay working.',
    price: { usd: 599, gbp: 479, eur: 559 },
    iconName: 'Settings',
    who: 'Anyone running on systems they cannot fix themselves at 9pm.',
    relatedServices: [
      'website-maintenance',
      'ai-automation',
      'data-integration',
      'reporting-automation',
      'site-speed-optimization',
      'software-audit',
      'accounts-access-security',
      'sop-documentation',
    ],
    included: [
      { text: "Hosting, updates, backups, monitoring", brief: "Your site stays up, stays patched and stays backed up, and somebody is told before you are if it goes down." },
      { text: "Automations watched and repaired", brief: "Every platform changes its API eventually and silently breaks a workflow built against the old one. We notice and fix it, usually before you find out." },
      { text: "Two new workflows built each month", brief: "Anything repetitive you describe to us, automated. Two a month compounds into a business that runs a lot of itself by the end of a year." },
      { text: "Integrations kept in sync", brief: "Your CRM, your accounting, your forms and your calendar continuing to talk to each other as each of them updates independently." },
      { text: "Dashboards kept accurate", brief: "Reporting that still reflects reality months later, rather than a dashboard nobody trusts because the numbers stopped matching." },
      { text: "A software subscription review", brief: "We go through what you pay for and tell you what nobody opens. This regularly pays for a chunk of the plan by itself." },
      { text: "Same day response on anything broken", brief: "Weekdays, on anything that has stopped working. Not a ticket number and a four day wait." },
    ],
  },
  {
    id: 'sales-outreach-monthly',
    name: 'Sales & Outreach',
    tagline: 'Somebody is doing the outbound. It may as well be us.',
    price: { usd: 999, gbp: 799, eur: 929 },
    iconName: 'PhoneOutgoing',
    who: 'Founders who know outbound works and keep not doing it.',
    relatedServices: [
      'cold-outreach',
      'cold-calling',
      'lead-list-building',
      'linkedin-outreach',
      'sales-playbook',
      'crm-sales',
      'proposals-quotes',
    ],
    included: [
      { text: "A fresh verified lead list monthly", brief: "Built to your actual criteria, then verified, so you are not paying to email addresses that bounce or people who left two years ago." },
      { text: "Cold email sequences, sent and answered", brief: "Written, warmed, sent from properly authenticated domains, and the replies handled rather than left in an inbox." },
      { text: "Cold calling hours worked", brief: "Real calls against that list by someone who has a script, handles the objection and books the meeting." },
      { text: "LinkedIn outreach and follow up", brief: "Connection requests, messages and the follow up that most people skip, which is where nearly all the replies actually come from." },
      { text: "Your CRM pipeline kept current", brief: "Every conversation logged and every deal moved to the right stage, so nothing sits untouched because somebody forgot." },
      { text: "Scripts refined on what you hear back", brief: "The objections you actually get, written into the playbook, so the second month works better than the first." },
      { text: "The numbers, monthly", brief: "Sent, opened, replied, booked. Four figures that tell you whether this is working, without interpretation." },
    ],
  },
  {
    id: 'hr-admin-monthly',
    name: 'HR & Admin',
    tagline: 'The paperwork that only becomes urgent once it is late.',
    price: { usd: 449, gbp: 359, eur: 419 },
    iconName: 'Users',
    who: 'Small teams with no HR person and a growing pile of obligations.',
    relatedServices: [
      'hr-systems',
      'employment-contracts',
      'hr-policies',
      'employee-onboarding',
      'payroll-setup',
      'contractor-compliance',
      'compliance-calendar',
      'performance-reviews',
    ],
    included: [
      { text: "Employee and contractor records in one system", brief: "Names, contracts, start dates, right to work, renewals. One place instead of a folder, a spreadsheet and somebody's memory." },
      { text: "Contracts and offer letters drafted", brief: "Written as you hire, to the country the person is actually in, rather than a template found online for a different jurisdiction." },
      { text: "Onboarding and offboarding to a checklist", brief: "Accounts created and, more importantly, accounts closed. The leaver who still has access is the risk nobody tracks." },
      { text: "Payroll and contractor admin each cycle", brief: "The monthly run handled, contractors paid, records kept. You approve, we do the rest." },
      { text: "Policies updated when rules change", brief: "Employment rules move. A handbook written once and never revisited is worse than none, because people rely on it." },
      { text: "A compliance calendar with owners", brief: "Every filing and renewal with a date and a name against it. Missed deadlines are almost always missed because nobody owned them." },
      { text: "Renewal dates tracked before they expire", brief: "Right to work, visas, certifications and insurance, flagged in advance rather than on the day." },
    ],
  },
  {
    id: 'compliance-filings-monthly',
    name: 'Compliance & Filings',
    tagline: 'The deadlines that carry penalties, owned by somebody.',
    price: { usd: 249, gbp: 199, eur: 229 },
    iconName: 'Landmark',
    who: 'Anyone with a registered company and no one watching the calendar.',
    relatedServices: ['compliance-calendar', 'company-formation', 'ein-registered-agent', 'business-banking-setup'],
    included: [
      { text: "Every filing deadline tracked and owned", brief: "Annual returns, confirmation statements, franchise tax, registered agent renewals. Each one with a date and a name against it, because missed filings are almost always missed for want of an owner rather than for want of money." },
      { text: "Registered agent kept current", brief: "The address on public record stays valid and the mail that arrives there reaches you, rather than sitting at an address you stopped using." },
      { text: "Filings prepared and submitted", brief: "We prepare the paperwork and file it. You approve, we submit, and you get the confirmation for your records." },
      { text: "Company records kept in order", brief: "Registers, officers, shareholdings and addresses updated as things change, so the public record matches reality when somebody checks." },
      { text: "Warnings well before the deadline", brief: "Flagged weeks ahead, not on the day. A late filing penalty is the cheapest avoidable cost in business and the most commonly paid." },
      { text: "A single annual summary", brief: "One document a year showing everything filed, everything due, and what changes next year. Useful the day your accountant or a buyer asks." },
    ],
  },
  {
    id: 'brand-content-monthly',
    name: 'Brand & Content',
    tagline: 'Material to put out, every month, that looks like you.',
    price: { usd: 699, gbp: 559, eur: 649 },
    iconName: 'Palette',
    who: 'Businesses that keep starting content and stopping.',
    relatedServices: ['content-production', 'design-system', 'video-creative', 'brand-palette', 'social-niche'],
    included: [
      { text: "A content calendar you can see", brief: "Planned a month ahead so nobody is deciding what to post on the morning it goes out, which is how consistency actually dies." },
      { text: "Eight social graphics a month", brief: "Designed to your brand, sized for each channel, using the templates rather than starting from a blank canvas every time." },
      { text: "Four short form videos", brief: "Edited with captions, sound and pacing built for how people actually watch on a phone, from footage you send or stock we source." },
      { text: "Brand templates kept current", brief: "Your Canva and Figma templates for posts, decks, proposals and documents, updated as the brand develops so the team never works off an old one." },
      { text: "Copy written, not just designed", brief: "The words as well as the picture. A beautiful graphic with a weak caption is a wasted post." },
      { text: "One longer piece a month", brief: "A case study, guide or announcement that you can point people at for longer than a day, and that search can find." },
    ],
  },
  {
    id: 'everything-monthly',
    name: 'Everything',
    tagline: 'Every department, for less than four of them.',
    price: { usd: 2899, gbp: 2319, eur: 2699 },
    iconName: 'Layers',
    who: 'Businesses that would rather have one invoice and one team than four.',
    bundles: [
      'marketing-seo-monthly',
      'ops-systems-monthly',
      'sales-outreach-monthly',
      'hr-admin-monthly',
      'compliance-filings-monthly',
      'brand-content-monthly',
    ],
    relatedServices: [],
    included: [
      { text: "Everything in Marketing & SEO", brief: "The full search, content, social, email and ads function, run monthly." },
      { text: "Everything in Ops & Systems", brief: "Your website, automations, integrations and reporting maintained and extended." },
      { text: "Everything in Sales & Outreach", brief: "Lead lists, cold email, calling, LinkedIn and pipeline management." },
      { text: "Everything in HR & Admin", brief: "Records, contracts, payroll admin, policies and hiring paperwork." },
      { text: "Everything in Compliance & Filings", brief: "Deadlines owned, filings prepared and submitted, records kept in order." },
      { text: "Everything in Brand & Content", brief: "Calendar, graphics, video, templates and a longer piece each month." },
      { text: "One team across all of it", brief: "The people writing your marketing know what your sales team is sending. Four separate agencies never do." },
      { text: "One report, not four", brief: "The whole business in a single monthly read, rather than four documents you have to reconcile yourself." },
      { text: "Priority response", brief: "Ahead of single plan customers on anything urgent." },
    ],
  },
];

export const ONE_TIME_PACKAGES: OneTimePackage[] = [
  {
    id: 'starter-build',
    name: 'Starter',
    tagline: 'Everything you need to be open for business.',
    price: { usd: 1499, gbp: 1199, eur: 1389 },
    timeline: 'Live in 7 days',
    who: 'Pre launch founders and solo operators.',
    iconName: 'Rocket',
  },
  {
    id: 'growth-build',
    name: 'Growth',
    tagline: 'The setup, plus the automation that keeps it running.',
    price: { usd: 3499, gbp: 2799, eur: 3249 },
    timeline: 'Live in 14 days',
    who: 'Scaling businesses and funded startups.',
    featured: true,
    iconName: 'BarChart3',
  },
  {
    id: 'ultimate-build',
    name: 'Ultimate',
    tagline: 'Custom software, AI agents and the whole back office.',
    price: { usd: 6999, gbp: 5599, eur: 6499 },
    timeline: 'Live in 28 days',
    who: 'Established companies and high volume operations.',
    iconName: 'Cpu',
  },
];

export const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: 'usd', symbol: '$', label: 'USD' },
  { code: 'gbp', symbol: '£', label: 'GBP' },
  { code: 'eur', symbol: '€', label: 'EUR' },
];

export const formatPrice = (price: PlanPrice, currency: Currency): string => {
  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? '$';
  return `${symbol}${price[currency].toLocaleString('en-US')}`;
};

/** What the four plans cost separately, so the bundle can show the saving. */
export const separateMonthlyTotal = (currency: Currency): number =>
  MONTHLY_PLANS.filter((p) => !p.bundles).reduce((sum, p) => sum + p.price[currency], 0);

export const monthlyBundleSaving = (currency: Currency): number => {
  const bundle = MONTHLY_PLANS.find((p) => p.bundles);
  if (!bundle) return 0;
  return separateMonthlyTotal(currency) - bundle.price[currency];
};
