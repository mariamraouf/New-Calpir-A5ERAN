/**
 * What each service costs, in the three currencies we sell in.
 *
 * These are starting prices for a defined scope, not estimates. The promise on
 * the site is that you pay for what you see, so anything outside a listed scope
 * is quoted and agreed before it starts rather than appearing on an invoice
 * afterwards.
 *
 * GBP and EUR are set as their own clean numbers rather than converted from USD
 * at whatever today's rate is, so a price does not move because a currency did.
 *
 * `fixed` marks the ten services that were already published at these USD
 * prices before the rest of the catalogue was priced.
 */
export type Currency = 'usd' | 'gbp' | 'eur';

export const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: 'usd', symbol: '$', label: 'USD' },
  { code: 'gbp', symbol: '\u00A3', label: 'GBP' },
  { code: 'eur', symbol: '\u20AC', label: 'EUR' },
];

export interface ServicePricing {
  usd: number;
  gbp: number;
  eur: number;
  turnaround: string;
  fixed?: boolean;
  deliverables?: string[];
}

export const servicePricing: Record<string, ServicePricing> = {
  "website-development": {
    usd: 799, gbp: 639, eur: 739,
    turnaround: "4 to 6 days",
    fixed: true,
    deliverables: [
      "Sub-1.5s load speed",
      "Contact form & webhook hooks",
      "Clean mobile responsiveness",
      "Source code repository",
    ],
  },
  "domain-ssl": {
    usd: 149, gbp: 119, eur: 139,
    turnaround: "24 to 48 hours",
    fixed: true,
    deliverables: [
      "Domain purchasing assistance",
      "DNS records (A, CNAME, TXT)",
      "Auto-renewing SSL certificate",
      "Email anti-spam SPF/DKIM config",
    ],
  },
  "gbp-seo": {
    usd: 199, gbp: 159, eur: 185,
    turnaround: "2 to 3 days",
    fixed: true,
    deliverables: [
      "Verified Google Business Profile",
      "Google Search Console indexing",
      "Sitemap submission",
      "GA4 conversion tag setup",
    ],
  },
  "brand-palette": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "3 to 5 days",
    fixed: true,
    deliverables: [
      "Vector SVG/PNG logo suite",
      "Aesthetic 5-color palette",
      "Web typography pairings",
      "Digital Brand Guidelines PDF",
    ],
  },
  "crm-sales": {
    usd: 599, gbp: 479, eur: 549,
    turnaround: "4 to 7 days",
    fixed: true,
    deliverables: [
      "Configured sales pipelines",
      "Automated lead follow-up sequence",
      "Calendar booking integration",
      "Team video walkthrough",
    ],
  },
  "social-niche": {
    usd: 189, gbp: 149, eur: 175,
    turnaround: "2 to 3 days",
    fixed: true,
    deliverables: [
      "Niche channel selection audit",
      "Custom 4K banner designs",
      "Keyword-rich bio & booking link",
      "Starter post templates",
    ],
  },
  "video-creative": {
    usd: 299, gbp: 239, eur: 275,
    turnaround: "3 to 4 days",
    fixed: true,
    deliverables: [
      "5 ready-to-post vertical videos",
      "Dynamic kinetic captions",
      "Royalty-free music & sound design",
      "Thumbnail covers included",
    ],
  },
  "ai-agents": {
    usd: 699, gbp: 559, eur: 645,
    turnaround: "5 to 7 days",
    fixed: true,
    deliverables: [
      "Company knowledge vector base",
      "Website chat widget embed",
      "Zero-hallucination guardrails",
      "Lead capture CRM sync",
    ],
  },
  "ai-automation": {
    usd: 349, gbp: 279, eur: 325,
    turnaround: "3 to 5 days",
    fixed: true,
    deliverables: [
      "3 automated end-to-end scenarios",
      "Data validation & error handling",
      "Slack / Email alert hooks",
      "Testing & documentation",
    ],
  },
  "ai-consulting": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "operations-hr": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "custom-apps": {
    usd: 2499, gbp: 1999, eur: 2299,
    turnaround: "3 to 4 weeks",
  },
  "business-email-setup": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "voip-phone-systems": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "analytics-tracking": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "payments-checkout": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "accounting-invoicing": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "project-management-setup": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "sop-documentation": {
    usd: 599, gbp: 479, eur: 549,
    turnaround: "5 to 8 days",
  },
  "recruiting": {
    usd: 1499, gbp: 1199, eur: 1379,
    turnaround: "2 to 3 weeks",
  },
  "hr-systems": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "payroll-setup": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "team-training": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "launch-support": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "website-maintenance": {
    usd: 149, gbp: 119, eur: 139,
    turnaround: "2 to 3 days",
  },
  "site-speed-optimization": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "ecommerce-store-setup": {
    usd: 1499, gbp: 1199, eur: 1379,
    turnaround: "2 to 3 weeks",
  },
  "booking-scheduling": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "design-system": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "2 to 3 days",
    fixed: true,
    deliverables: [
      "10 branded graphic templates",
      "Figma source files",
      "Exported PNG/JPG formats",
      "Social media sizing presets",
    ],
  },
  "content-production": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "email-marketing": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "seo-content-strategy": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "paid-ads-setup": {
    usd: 599, gbp: 479, eur: 549,
    turnaround: "5 to 8 days",
  },
  "proposals-quotes": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "reviews-reputation": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "ai-voice-agents": {
    usd: 1499, gbp: 1199, eur: 1379,
    turnaround: "2 to 3 weeks",
  },
  "document-processing": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "ai-knowledge-base": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "data-integration": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "reporting-automation": {
    usd: 599, gbp: 479, eur: 549,
    turnaround: "5 to 8 days",
  },
  "esignature-contracts": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "cloud-storage-architecture": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "client-onboarding-system": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "software-audit": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "contractor-compliance": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "performance-reviews": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "company-formation": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "ein-registered-agent": {
    usd: 149, gbp: 119, eur: 139,
    turnaround: "2 to 3 days",
  },
  "business-banking-setup": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "compliance-calendar": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "accounts-access-security": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "cold-outreach": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "cold-calling": {
    usd: 899, gbp: 719, eur: 829,
    turnaround: "1 to 2 weeks",
  },
  "lead-list-building": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
  "linkedin-outreach": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "sales-playbook": {
    usd: 599, gbp: 479, eur: 549,
    turnaround: "5 to 8 days",
  },
  "helpdesk-setup": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "help-center": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "job-descriptions": {
    usd: 149, gbp: 119, eur: 139,
    turnaround: "2 to 3 days",
  },
  "interview-process": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "employment-contracts": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "hr-policies": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "employee-onboarding": {
    usd: 399, gbp: 319, eur: 369,
    turnaround: "4 to 6 days",
  },
  "offboarding-process": {
    usd: 149, gbp: 119, eur: 139,
    turnaround: "2 to 3 days",
  },
  "benefits-timeoff": {
    usd: 249, gbp: 199, eur: 229,
    turnaround: "3 to 5 days",
  },
};

export const formatPrice = (slug: string, currency: Currency): string | null => {
  const p = servicePricing[slug];
  if (!p) return null;
  const meta = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];
  return `${meta.symbol}${p[currency].toLocaleString('en-US')}`;
};
