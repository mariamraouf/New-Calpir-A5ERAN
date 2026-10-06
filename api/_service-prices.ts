/**
 * Solo service prices, for the server.
 *
 * GENERATED. Do not edit by hand. The source of truth is
 * src/data/servicePricing.ts and src/data/allServicesList.ts, and
 * scripts/check-service-prices.mjs fails the build if this file drifts from
 * them, so the page and the charge cannot disagree.
 *
 * It exists because a Vercel function cannot reliably import across the
 * repository into src/. Trying to do so stopped the whole checkout endpoint
 * from loading, which took every plan and package down with it, and the
 * symptom was a generic "we could not open the payment page" rather than
 * anything naming the real cause. A sibling file inside api/ always bundles.
 *
 * Regenerate with: node scripts/check-service-prices.mjs --write
 */

export interface ServicePrice {
  usd: number;
  gbp: number;
  eur: number;
  turnaround: string;
  name: string;
}

export const SERVICE_PRICES: Record<string, ServicePrice> = {
  "website-development": { usd: 799, gbp: 639, eur: 739, turnaround: "4 to 6 days", name: "High-Conversion Web Architecture" },
  "domain-ssl": { usd: 149, gbp: 119, eur: 139, turnaround: "24 to 48 hours", name: "Domain Acquisition, DNS & SSL Setup" },
  "gbp-seo": { usd: 199, gbp: 159, eur: 185, turnaround: "2 to 3 days", name: "Google Business Profile & Search Console Indexing" },
  "brand-palette": { usd: 399, gbp: 319, eur: 369, turnaround: "3 to 5 days", name: "Brand Identity, Custom Color Palettes & Fonts" },
  "crm-sales": { usd: 599, gbp: 479, eur: 549, turnaround: "4 to 7 days", name: "CRM & Sales Pipeline Setup" },
  "social-niche": { usd: 189, gbp: 149, eur: 175, turnaround: "2 to 3 days", name: "Niche-Targeted Social Channels & Outreach" },
  "video-creative": { usd: 299, gbp: 239, eur: 275, turnaround: "3 to 4 days", name: "Video Editing & Content Creative Suite" },
  "ai-agents": { usd: 699, gbp: 559, eur: 645, turnaround: "5 to 7 days", name: "Autonomous AI Agent Development" },
  "ai-automation": { usd: 349, gbp: 279, eur: 325, turnaround: "3 to 5 days", name: "Workflow Automation Systems" },
  "ai-consulting": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "AI Strategy & Executive Consulting" },
  "operations-hr": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Operations & HR Infrastructure" },
  "custom-apps": { usd: 2499, gbp: 1999, eur: 2299, turnaround: "3 to 4 weeks", name: "Custom Apps & Bespoke Software" },
  "business-email-setup": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Business Email Setup and Deliverability" },
  "voip-phone-systems": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Business Phone System and Call Routing" },
  "analytics-tracking": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Analytics and Conversion Tracking Setup" },
  "payments-checkout": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Payment and Checkout Setup" },
  "accounting-invoicing": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Accounting and Invoicing System Setup" },
  "project-management-setup": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Project Management Workspace Setup" },
  "sop-documentation": { usd: 599, gbp: 479, eur: 549, turnaround: "5 to 8 days", name: "SOP Writing and Process Documentation" },
  "recruiting": { usd: 1499, gbp: 1199, eur: 1379, turnaround: "2 to 3 weeks", name: "Recruiting and Candidate Vetting" },
  "hr-systems": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "HR Records and Employee Information System" },
  "payroll-setup": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Payroll and International Contractor Payments" },
  "team-training": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Team Training and Systems Handover" },
  "launch-support": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Post Launch Support and Technical Advisory" },
  "website-maintenance": { usd: 149, gbp: 119, eur: 139, turnaround: "2 to 3 days", name: "Website Maintenance, Hosting and Backups" },
  "site-speed-optimization": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Site Speed and Core Web Vitals Optimization" },
  "ecommerce-store-setup": { usd: 1499, gbp: 1199, eur: 1379, turnaround: "2 to 3 weeks", name: "Ecommerce Store Build and Setup" },
  "booking-scheduling": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Booking and Scheduling System Setup" },
  "design-system": { usd: 249, gbp: 199, eur: 229, turnaround: "2 to 3 days", name: "Design System and Marketing Asset Templates" },
  "content-production": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Content Production and Publishing Workflow" },
  "email-marketing": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Email Marketing and Newsletter Setup" },
  "seo-content-strategy": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "SEO and Content Strategy" },
  "paid-ads-setup": { usd: 599, gbp: 479, eur: 549, turnaround: "5 to 8 days", name: "Paid Ads Setup and Conversion Tracking" },
  "proposals-quotes": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Proposal, Quote and Contract Flow" },
  "reviews-reputation": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Reviews and Reputation System" },
  "ai-voice-agents": { usd: 1499, gbp: 1199, eur: 1379, turnaround: "2 to 3 weeks", name: "AI Voice Agent and Phone Answering" },
  "document-processing": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Document Processing and Data Extraction" },
  "ai-knowledge-base": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Internal AI Knowledge Base" },
  "data-integration": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Data Integration and System Sync" },
  "reporting-automation": { usd: 599, gbp: 479, eur: 549, turnaround: "5 to 8 days", name: "Automated Reporting and Dashboards" },
  "esignature-contracts": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Contract and Electronic Signature Setup" },
  "cloud-storage-architecture": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Cloud Storage and File Architecture" },
  "client-onboarding-system": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Client Onboarding System" },
  "software-audit": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Software Stack Audit and Subscription Cleanup" },
  "contractor-compliance": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Contractor Onboarding and Classification Support" },
  "performance-reviews": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Performance Review and Goal Tracking System" },
  "company-formation": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Company Formation and Registration" },
  "ein-registered-agent": { usd: 149, gbp: 119, eur: 139, turnaround: "2 to 3 days", name: "EIN, Tax Registration and Registered Agent" },
  "business-banking-setup": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Business Banking and Financial Account Setup" },
  "compliance-calendar": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Annual Compliance and Filing Calendar" },
  "accounts-access-security": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Accounts, Access and Security Setup" },
  "cold-outreach": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Cold Email Outreach and Lead Generation" },
  "cold-calling": { usd: 899, gbp: 719, eur: 829, turnaround: "1 to 2 weeks", name: "Cold Calling and Outbound Sales Desk" },
  "lead-list-building": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Lead List Building and Data Enrichment" },
  "linkedin-outreach": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "LinkedIn Outreach and Social Selling" },
  "sales-playbook": { usd: 599, gbp: 479, eur: 549, turnaround: "5 to 8 days", name: "Sales Playbook, Scripts and Objection Handling" },
  "helpdesk-setup": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Help Desk and Customer Support System Setup" },
  "help-center": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Customer Help Center and Self Service" },
  "job-descriptions": { usd: 149, gbp: 119, eur: 139, turnaround: "2 to 3 days", name: "Job Descriptions and Role Scorecards" },
  "interview-process": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Interview Process and Candidate Assessment Design" },
  "employment-contracts": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Employment Contracts and Offer Letters" },
  "hr-policies": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "HR Policies and Employee Handbook" },
  "employee-onboarding": { usd: 399, gbp: 319, eur: 369, turnaround: "4 to 6 days", name: "Employee Onboarding Programme" },
  "offboarding-process": { usd: 149, gbp: 119, eur: 139, turnaround: "2 to 3 days", name: "Offboarding and Exit Process" },
  "benefits-timeoff": { usd: 249, gbp: 199, eur: 229, turnaround: "3 to 5 days", name: "Benefits and Time Off Administration" },
};
