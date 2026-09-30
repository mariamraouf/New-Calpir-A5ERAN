/**
 * What Calpir sells, in the two shapes people buy it.
 *
 * MONTHLY PLANS are retainers. The work repeats every month and the money
 * repeats with it. Each one can be bought on its own, and the Everything plan
 * buys all six together for less than the sum of them. Every monthly plan
 * starts with a seven day trial: nothing is charged until day eight, so a
 * month that does not work costs nothing.
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
  /** Days before the first charge. Zero means billed immediately. */
  trialDays?: number;
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
    price: { usd: 799, gbp: 639, eur: 749 },
    iconName: 'Search',
    trialDays: 7,
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
      { text: "Paid ads managed, if you run them", brief: "Campaign structure, keywords, negatives, bids and creative, reviewed and adjusted. We do not take a cut of your ad spend, so there is no incentive for us to tell you to spend more." },
      { text: "Landing pages built when a campaign needs one", brief: "Sending paid traffic at your homepage wastes most of it. When a campaign needs its own page we build it, connect it to your CRM and measure it separately." },
      { text: "One honest report a month", brief: "What moved, what did not, and what we are changing because of it. If something is not working you will read that it is not working." },
    ],
  },
  {
    id: 'ops-systems-monthly',
    name: 'Ops & Systems',
    tagline: 'We build the whole operational system, then we keep it running.',
    price: { usd: 899, gbp: 719, eur: 839 },
    iconName: 'Settings',
    trialDays: 7,
    who: 'Anyone whose business runs on systems nobody in the building can fix.',
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
      { text: "The whole system built from scratch", brief: "This is not a maintenance contract on something you already have. We map how work moves through your business, choose what each piece of software is for, and build the thing end to end, so a job can travel from enquiry to delivery to invoice without anybody retyping it. If you have nothing, we start from nothing." },
      { text: "Every process written down as an SOP", brief: "The steps, the owner, the tool and the exception, documented as we build so the system survives the person who knows it. A business that only runs because one person remembers how is not a system, it is a risk." },
      { text: "Two new workflows built every month", brief: "After the build, it keeps growing. Anything repetitive you describe to us gets automated, two a month, which compounds into a business that runs a lot of itself by the end of a year." },
      { text: "Hosting, updates, backups, monitoring", brief: "Your site stays up, stays patched and stays backed up, and somebody is told before you are if it goes down." },
      { text: "Automations watched and repaired", brief: "Every platform changes its API eventually and silently breaks a workflow built against the old one. We notice and fix it, usually before you find out." },
      { text: "Integrations kept in sync", brief: "Your CRM, your accounting, your forms and your calendar continuing to talk to each other as each of them updates independently." },
      { text: "Dashboards kept accurate", brief: "Reporting that still reflects reality months later, rather than a dashboard nobody trusts because the numbers stopped matching." },
      { text: "A software subscription review", brief: "We go through what you pay for and tell you what nobody opens. This regularly pays for a chunk of the plan by itself." },
      { text: "Same day response on anything broken", brief: "Weekdays, on anything that has stopped working. Not a ticket number and a four day wait." },
    ],
  },
  {
    id: 'sales-crm-monthly',
    name: 'Sales & CRM',
    tagline: 'A CRM built properly, and the email and agents that feed it.',
    price: { usd: 999, gbp: 799, eur: 929 },
    iconName: 'PhoneOutgoing',
    trialDays: 7,
    who: 'Businesses losing enquiries between the website, the inbox and the follow up.',
    relatedServices: [
      'crm-sales',
      'email-marketing',
      'ai-chatbot',
      'sales-playbook',
      'proposals-quotes',
      'data-integration',
      'reporting-automation',
    ],
    included: [
      { text: "Your CRM built, not just switched on", brief: "Pipeline stages that match how you really sell, fields you will actually fill in, automations behind each stage, and permissions set. Most CRMs fail because somebody installed one and left the default pipeline in place." },
      { text: "The CRM integrated with everything else", brief: "Website forms, inbox, calendar, phone, quotes and accounting all writing into the same record, so one customer is one row rather than four half stories in four places." },
      { text: "The CRM maintained every month", brief: "Duplicates merged, dead records archived, stages adjusted as the business changes, and new automations added. A CRM decays faster than any other system you own." },
      { text: "A chatbot on your website", brief: "Built on your own services, prices and answers, not a generic bot. It answers out of hours, qualifies the visitor and drops a real record into the CRM instead of an email you read on Monday." },
      { text: "AI agents built around your sales process", brief: "Agents that draft the quote, chase the unanswered proposal, summarise a call into the record and flag the deal that has gone quiet. Built against your process, with a human approving anything that leaves the building." },
      { text: "Email marketing, sent every month", brief: "Campaigns and newsletters to your own list, written, designed and sent. Your list is the only audience you own outright, and it decays if you never speak to it." },
      { text: "Email designed, not just written", brief: "Templates built to your brand that render properly in Outlook as well as on a phone, so your campaign does not arrive looking like a fax." },
      { text: "Email sequences that run themselves", brief: "Follow up, nurture, re engagement and post sale sequences, written once and triggered by what the contact does. This is the work that quietly closes the deals a busy week would have dropped. To your own contacts, never to a bought list." },
      { text: "Scripts and messaging refined monthly", brief: "The objections and questions you actually get, written back into the templates, the sequences and the chatbot, so month two works better than month one." },
      { text: "Optional: a named person on your side", brief: "For teams that want a human rather than a system, we can put a dedicated Calpir person on your account to work the pipeline and answer the replies. Priced separately, added or removed any month." },
      { text: "The numbers, monthly", brief: "Enquiries in, replies, meetings booked and deals closed. Four figures that tell you whether this is working, without interpretation." },
    ],
  },
  {
    id: 'hr-admin-monthly',
    name: 'HR & Admin',
    tagline: 'Payroll, policies and one new hire a month.',
    price: { usd: 549, gbp: 439, eur: 509 },
    iconName: 'Users',
    trialDays: 7,
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
      { text: "Payroll run every cycle", brief: "The monthly run prepared and submitted, contractors paid, deductions and filings handled, payslips out on time. You approve the numbers, we do the rest." },
      { text: "A recruiter, one role a month, included", brief: "Not a job board subscription. A real recruiter on your account: the role written, the advert placed, applicants screened, a shortlist put in front of you and the interviews booked. One full hire every month at no extra cost." },
      { text: "Policies written and kept current", brief: "Handbook, leave, conduct, remote working, data handling and the rest, written to the country each person is actually in and revised when the rules move. A handbook written once and never revisited is worse than none, because people rely on it." },
      { text: "Onboarding and offboarding to a checklist", brief: "Contract out, accounts created, equipment tracked, first week planned. And on the way out, accounts closed. The leaver who still has access is the risk nobody tracks." },
      { text: "Employee and contractor records in one system", brief: "Names, contracts, start dates, right to work, renewals. One place instead of a folder, a spreadsheet and somebody's memory." },
      { text: "Contracts and offer letters drafted", brief: "Written as you hire, to the country the person is actually in, rather than a template found online for a different jurisdiction." },
      { text: "A compliance calendar with owners", brief: "Every filing and renewal with a date and a name against it. Missed deadlines are almost always missed because nobody owned them." },
      { text: "Renewal dates tracked before they expire", brief: "Right to work, visas, certifications and insurance, flagged in advance rather than on the day." },
    ],
  },
  {
    id: 'brand-content-monthly',
    name: 'Brand & Content',
    tagline: 'Material to put out every month that looks like one company made it.',
    price: { usd: 699, gbp: 559, eur: 649 },
    iconName: 'Palette',
    trialDays: 7,
    who: 'Businesses that keep starting content and stopping.',
    relatedServices: ['content-production', 'design-system', 'video-creative', 'brand-palette', 'social-niche'],
    included: [
      { text: "A content calendar you can see a month ahead", brief: "Planned and approved before the month starts, so nobody is deciding what to post on the morning it goes out. That decision, made daily, is how consistency actually dies." },
      { text: "Twelve designed graphics a month", brief: "Designed to your brand and sized correctly for each channel, so a post built for one place does not arrive cropped somewhere else. Made from your templates rather than a blank canvas every time." },
      { text: "Four short form videos, edited", brief: "Captions, sound, pacing and a first second built for how people actually watch on a phone, cut from footage you send or stock we source and licence." },
      { text: "The words as well as the picture", brief: "Every graphic and video comes with its caption and hook written. A beautiful graphic with a weak first line is a wasted post, and that is the half most people skip." },
      { text: "Your brand kit kept in one place", brief: "Logo in every format, colour values, type, spacing rules and the do and do not examples, in a document your team and any freelancer can be handed on day one." },
      { text: "Templates your team can actually use", brief: "Canva and Figma templates for posts, stories, decks, proposals and documents, locked where they should be locked, so somebody in your team can produce on brand material without a designer." },
      { text: "One longer piece every month", brief: "A case study, guide or announcement you can point people at for longer than a day, written properly and built so search can find it." },
      { text: "A quarterly look at what is working", brief: "Which formats, topics and hooks earned attention, and what we are dropping because they did not. Content without this is just output." },
    ],
  },
  {
    id: 'compliance-filings-monthly',
    name: 'Compliance & Filings',
    tagline: 'The deadlines that carry penalties, owned by somebody who is not you.',
    price: { usd: 249, gbp: 199, eur: 229 },
    iconName: 'Landmark',
    trialDays: 7,
    who: 'Anyone with a registered company and nobody watching the calendar.',
    relatedServices: ['compliance-calendar', 'company-formation', 'ein-registered-agent', 'business-banking-setup'],
    included: [
      { text: "Every deadline tracked, with a name against it", brief: "Annual returns, confirmation statements, franchise tax, registered agent renewals, licence renewals. Each one dated and owned, because missed filings are almost always missed for want of an owner rather than for want of money." },
      { text: "Filings prepared and submitted for you", brief: "We prepare the paperwork, you approve it, we file it, and you get the confirmation for your records. You are never the one working out which form it was." },
      { text: "Registered agent kept current", brief: "The address on public record stays valid and the mail that arrives there reaches you, rather than sitting at an address you stopped using two years ago." },
      { text: "Company records kept in order", brief: "Registers, officers, shareholdings and addresses updated as things change, so the public record matches reality on the day an investor, a bank or a buyer checks it." },
      { text: "Warnings weeks ahead, not on the day", brief: "Flagged early enough to act. A late filing penalty is the cheapest avoidable cost in business and the most commonly paid." },
      { text: "Multi country handled as one calendar", brief: "A US entity and a UK company have different deadlines and different consequences. Both sit on one calendar rather than in two people's heads." },
      { text: "One annual summary you can hand over", brief: "A single document a year showing everything filed, everything due and what changes next year. Useful the day your accountant, your bank or a buyer asks for it." },
    ],
  },
  {
    id: 'everything-monthly',
    name: 'Everything',
    tagline: 'All six departments, for a good deal less than the six of them.',
    price: { usd: 3299, gbp: 2639, eur: 3069 },
    iconName: 'Layers',
    trialDays: 7,
    who: 'Businesses that would rather have one invoice and one team than six.',
    bundles: [
      'marketing-seo-monthly',
      'ops-systems-monthly',
      'sales-crm-monthly',
      'hr-admin-monthly',
      'brand-content-monthly',
      'compliance-filings-monthly',
    ],
    relatedServices: [],
    included: [
      { text: "Everything in Marketing & SEO", brief: "Search, content, social, ads and the monthly report." },
      { text: "Everything in Ops & Systems", brief: "The operational system built from scratch, documented, maintained and extended two workflows a month." },
      { text: "Everything in Sales & CRM", brief: "CRM built and maintained, website chatbot, AI agents, email marketing, design and sequences." },
      { text: "Everything in HR & Admin", brief: "Payroll, policies, records, contracts and a recruiter filling one role every month." },
      { text: "Everything in Brand & Content", brief: "Calendar, twelve graphics, four videos, templates and a longer piece each month." },
      { text: "Everything in Compliance & Filings", brief: "Deadlines owned, filings prepared and submitted, records kept in order." },
      { text: "One team across all of it", brief: "The people writing your marketing know what your CRM is sending and who you just hired. Six separate agencies never do." },
      { text: "One report, not six", brief: "The whole business in a single monthly read, rather than six documents you have to reconcile yourself." },
      { text: "Priority response on everything", brief: "Ahead of single plan customers on anything urgent, across every department." },
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

/** What the six plans cost separately, so the bundle can show the saving. */
export const separateMonthlyTotal = (currency: Currency): number =>
  MONTHLY_PLANS.filter((p) => !p.bundles).reduce((sum, p) => sum + p.price[currency], 0);

export const monthlyBundleSaving = (currency: Currency): number => {
  const bundle = MONTHLY_PLANS.find((p) => p.bundles);
  if (!bundle) return 0;
  return separateMonthlyTotal(currency) - bundle.price[currency];
};

/**
 * Every recurring plan starts free for a week.
 *
 * The first invoice is raised on day eight. If it has not worked by then you
 * cancel and you are not charged, which is a different promise from a refund
 * and a much easier one to believe. One time packages are not trials, because
 * we have already built the thing by the time they end.
 */
export const MONTHLY_TRIAL_DAYS = 7;
