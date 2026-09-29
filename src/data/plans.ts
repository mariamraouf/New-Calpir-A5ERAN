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
  included: string[];
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
      'Technical SEO maintained every month, not audited once and forgotten',
      'Four published pieces of content, researched, written and indexed',
      'Google Business Profile kept current, with posts and review responses',
      'Keyword tracking against the searches that actually convert',
      'Social posting across your chosen channels, three times a week',
      'Email campaign or newsletter sent to your list each month',
      'Paid ads managed and adjusted if you run them',
      'One report a month that says what moved and what did not',
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
      'Website hosting, updates, backups and uptime monitoring',
      'Existing automations watched, and fixed when a platform changes under them',
      'Two new automated workflows built each month',
      'Your integrations kept in sync as tools update their APIs',
      'Dashboards and reporting kept accurate',
      'Software subscription review, so you stop paying for what nobody opens',
      'Same day response on anything broken, weekdays',
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
      'A fresh, verified lead list built and enriched every month',
      'Cold email sequences written, sent and replied to',
      'Cold calling hours worked against that list',
      'LinkedIn outreach and connection follow up',
      'Your CRM pipeline kept current, so nothing sits untouched',
      'Sales scripts and objection handling refined on what you hear back',
      'Monthly numbers: sent, opened, replied, booked',
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
      'Employee and contractor records kept current in one system',
      'Contracts and offer letters drafted as you hire',
      'Onboarding and offboarding run to a checklist, not from memory',
      'Payroll and contractor payment admin handled each cycle',
      'Policies and handbook updated when the rules change',
      'A compliance calendar with owners, so filings do not get missed',
      'Right to work and renewal dates tracked before they expire',
    ],
  },
  {
    id: 'everything-monthly',
    name: 'Everything',
    tagline: 'All four, for less than three of them.',
    price: { usd: 2499, gbp: 1999, eur: 2329 },
    iconName: 'Layers',
    who: 'Businesses that would rather have one invoice and one team than four.',
    bundles: [
      'marketing-seo-monthly',
      'ops-systems-monthly',
      'sales-outreach-monthly',
      'hr-admin-monthly',
    ],
    relatedServices: [],
    included: [
      'Everything in Marketing & SEO',
      'Everything in Ops & Systems',
      'Everything in Sales & Outreach',
      'Everything in HR & Admin',
      'One team across all of it, so the marketing knows what sales is sending',
      'One monthly report covering the whole business, not four',
      'Priority response ahead of single plan customers',
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
