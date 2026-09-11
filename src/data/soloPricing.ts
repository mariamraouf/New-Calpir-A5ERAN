/**
 * Published fixed prices for services that can be bought on their own.
 *
 * Keyed by the catalog slug in src/data/allServicesList.ts, so the solo services
 * page can render the whole catalog and attach a price to the ones that have
 * one. Services absent from this map are quoted per scope, which the page says
 * plainly rather than showing an invented number.
 */
export interface SoloPricing {
  price: string;
  turnaround: string;
  scope: string;
  deliverables: string[];
  modalKey?: string;
}

export const soloPricing: Record<string, SoloPricing> = {
  "domain-ssl": {
    price: "$149",
    turnaround: "24-48 Hours",
    scope: "Domain Acquisition, DNS & SSL Setup",
    deliverables: [
      "Domain purchasing assistance",
      "DNS records (A, CNAME, TXT)",
      "Auto-renewing SSL certificate",
      "Email anti-spam SPF/DKIM config",
    ],
    modalKey: "domain_ssl",
  },
  "gbp-seo": {
    price: "$199",
    turnaround: "2-3 Days",
    scope: "Google Business Profile & Search Indexing",
    deliverables: [
      "Verified Google Business Profile",
      "Google Search Console indexing",
      "Sitemap submission",
      "GA4 conversion tag setup",
    ],
    modalKey: "gbp_seo",
  },
  "brand-palette": {
    price: "$399",
    turnaround: "3-5 Days",
    scope: "Brand Identity, Typography & Color Palette",
    deliverables: [
      "Vector SVG/PNG logo suite",
      "Aesthetic 5-color palette",
      "Web typography pairings",
      "Digital Brand Guidelines PDF",
    ],
    modalKey: "brand_palette",
  },
  "social-niche": {
    price: "$189",
    turnaround: "2-3 Days",
    scope: "Single Niche-Targeted Social Profile Setup",
    deliverables: [
      "Niche channel selection audit",
      "Custom 4K banner designs",
      "Keyword-rich bio & booking link",
      "Starter post templates",
    ],
    modalKey: "social_niche",
  },
  "video-creative": {
    price: "$299",
    turnaround: "3-4 Days",
    scope: "Short-Form Video Editing (Pack of 5 Reels)",
    deliverables: [
      "5 ready-to-post vertical videos",
      "Dynamic kinetic captions",
      "Royalty-free music & sound design",
      "Thumbnail covers included",
    ],
    modalKey: "video_creative",
  },
  "crm-sales": {
    price: "$599",
    turnaround: "4-7 Days",
    scope: "Custom CRM Setup (HubSpot / GoHighLevel)",
    deliverables: [
      "Configured sales pipelines",
      "Automated lead follow-up sequence",
      "Calendar booking integration",
      "Team video walkthrough",
    ],
    modalKey: "crm_pipelines",
  },
  "ai-agents": {
    price: "$699",
    turnaround: "5-7 Days",
    scope: "Custom RAG AI Customer Support Agent",
    deliverables: [
      "Company knowledge vector base",
      "Website chat widget embed",
      "Zero-hallucination guardrails",
      "Lead capture CRM sync",
    ],
    modalKey: "ai_agents",
  },
  "ai-automation": {
    price: "$349",
    turnaround: "3-5 Days",
    scope: "3 Custom Automated Workflows (Make / Zapier)",
    deliverables: [
      "3 automated end-to-end scenarios",
      "Data validation & error handling",
      "Slack / Email alert hooks",
      "Testing & documentation",
    ],
    modalKey: "workflow_automations",
  },
  "website-development": {
    price: "$799",
    turnaround: "4-6 Days",
    scope: "High-Conversion Single Landing Page",
    deliverables: [
      "Sub-1.5s load speed",
      "Contact form & webhook hooks",
      "Clean mobile responsiveness",
      "Source code repository",
    ],
  },
  "design-system": {
    price: "$249",
    turnaround: "2-3 Days",
    scope: "Graphic Design & Social Asset Pack (10 Designs)",
    deliverables: [
      "10 branded graphic templates",
      "Figma source files",
      "Exported PNG/JPG formats",
      "Social media sizing presets",
    ],
  },
};
