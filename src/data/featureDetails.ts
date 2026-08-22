export interface FeatureDetail {
  title: string;
  badge: string;
  summary: string;
  whatWeDo: string[];
  whyItMatters: string;
}

export const featureDetailsMap: Record<string, FeatureDetail> = {
  domain_ssl: {
    title: "Domain Purchasing, DNS & SSL Certificate Setup",
    badge: "FOUNDATION // SECURITY",
    summary: "We help you select and purchase the ideal domain name, configure high-speed DNS routing, and lock it down with encrypted 256-bit SSL HTTPS certificates.",
    whatWeDo: [
      "Help brainstorm and purchase the highest authority .com, .co.uk, or .io domain for your brand",
      "Configure fast DNS records (A, CNAME, TXT, MX) with global CDN routing",
      "Issue 256-bit SSL security certificates with automatic renewals (no 'Not Secure' browser warnings)",
      "Set up SPF, DKIM, and DMARC records so your business emails never land in spam"
    ],
    whyItMatters: "Visitors bounce in seconds if they see browser security warnings. A verified domain and SSL gives your brand instant trust and authority."
  },
  gbp_seo: {
    title: "Google Business Profile & Search Console Indexing",
    badge: "DISCOVERABILITY // SEARCH",
    summary: "We don't wait months for Google to notice your new business. We manually verify Google Search Console, submit your sitemaps, and optimize your Google Business Profile.",
    whatWeDo: [
      "Claim and verify your official Google Business Profile (GBP) with categories, operating hours, and photos",
      "Set up Google Search Console and force-index your URLs and XML sitemaps directly with Google",
      "Install Google Analytics 4 (GA4) with custom conversion goals to track every lead",
      "Embed Schema.org structured data markup so Google displays your rich business snippets"
    ],
    whyItMatters: "Your potential customers are searching Google every single day. Instant indexing gets your company ranking in organic search and Google Maps from day one."
  },
  brand_palette: {
    title: "Brand Identity, Custom Color Palettes & Fonts",
    badge: "DESIGN // AESTHETIC",
    summary: "A distinctive modern visual identity engineered for your target market. Custom typography pairings, curated color palettes, and production-ready logo files.",
    whatWeDo: [
      "Curate custom 5-color aesthetic palettes tailored to your industry psychology",
      "Select modern typography pairings for punchy headers and crystal-clear body copy",
      "Deliver SVG vector logos, transparent PNGs, and favicon assets for all device formats",
      "Provide a clean Brand Guidelines PDF cheat sheet for all your future marketing"
    ],
    whyItMatters: "First impressions take 0.05 seconds. A cohesive, high-end visual palette immediately makes you look like an established market leader."
  },
  social_niche: {
    title: "Expert Niche-Targeted Social Channel Setup",
    badge: "DISTRIBUTION // SOCIAL",
    summary: "Instead of spreading you thin across 10 dead profiles, our expert identifies the #1 highest-converting channel for your niche (e.g. LinkedIn for B2B, Instagram/TikTok for D2C) and builds it out flawlessly.",
    whatWeDo: [
      "Audit your niche to select your single most profitable channel (LinkedIn, Instagram, X, or YouTube)",
      "Design crisp 4K branded header banners, profile avatars, and keyword-optimized bio copy",
      "Link your direct booking funnel and website lead capture magnets",
      "Starter tier includes your primary powerhouse channel; Growth & Ultimate expand across multi-platform fleets"
    ],
    whyItMatters: "One active, well-optimized social channel generating real qualified conversations beats five ghost-town accounts every single time."
  },
  crm_pipelines: {
    title: "CRM & Automated Sales Pipelines",
    badge: "REVENUE // CONVERSION",
    summary: "Stop losing leads in messy notes or spreadsheets. We deploy HubSpot or GoHighLevel with custom deal stages, automatic lead scoring, and instant follow-up alerts.",
    whatWeDo: [
      "Build custom deal stages mapped directly to your client acquisition funnel",
      "Trigger instant 60-second SMS and email notifications when someone submits your form",
      "Integrate two-way calendar sync for effortless appointment bookings without email back-and-forth",
      "Create custom pipeline dashboards so you always know exactly how much revenue is in flight"
    ],
    whyItMatters: "Leads contacted within 5 minutes convert at 9x the rate of leads contacted after an hour. Automated CRM systems ensure no prospect slips through the cracks."
  },
  ai_agents: {
    title: "Autonomous RAG AI Agents",
    badge: "AI // 24/7 SUPPORT",
    summary: "Custom intelligent agents trained on your specific business documentation that answer inquiries, qualify leads, and book calls 24 hours a day without hallucinations.",
    whatWeDo: [
      "Train LLM models directly on your FAQs, pricing sheets, and service details",
      "Connect agents to your CRM to log conversations and schedule meetings automatically",
      "Embed live web widgets and WhatsApp channels with seamless human handoff",
      "Implement safety guardrails to ensure 100% brand accuracy"
    ],
    whyItMatters: "You cannot be awake at 3 AM answering international prospect questions. Your AI agent handles objections and locks in meetings while you rest."
  },
  workflow_automations: {
    title: "Zero-Manual-Work Automations",
    badge: "EFFICIENCY // MAKE & ZAPIER",
    summary: "We connect your website, CRM, invoicing, Slack, and Google Drive so customer data flows effortlessly with zero manual copy-pasting.",
    whatWeDo: [
      "Auto-generate invoices and contracts when deals move to 'Closed-Won'",
      "Post real-time sale and lead alerts to your team's Slack or Discord channel",
      "Sync customer contacts to email marketing lists with smart segmentation tags",
      "Build error-handling and retry logic so your data never gets dropped"
    ],
    whyItMatters: "Founders waste an average of 18 hours weekly on clerical copy-paste work. Automating workflows gives you that time back to grow revenue."
  },
  video_creative: {
    title: "Video Editing & Content Graphics Suite",
    badge: "CONTENT // CREATIVE",
    summary: "High-impact short-form video reels, product launch explainers, and polished graphics tailored for conversion across TikTok, Instagram, and LinkedIn.",
    whatWeDo: [
      "Edit dynamic short-form videos with kinetic subtitles, sound design, and b-roll",
      "Design branded social carousel templates and pitch deck graphics",
      "Create high-res product mockups and app demo videos",
      "Optimize exports for vertical mobile feeds and 4K desktop previews"
    ],
    whyItMatters: "Visual content stops the scroll. Professional creative cuts customer acquisition costs in half."
  },
  website_architecture: {
    title: "Sub-Second High-Conversion Web Architecture",
    badge: "WEB // PERFORMANCE",
    summary: "We build ultra-fast web architectures engineered with React and Next.js, loading in under 1.5 seconds globally to maximize Google SEO and visitor conversion.",
    whatWeDo: [
      "Develop custom responsive layouts optimized for mobile and desktop screens",
      "Deploy onto edge networks with sub-1.5 second global page load speeds",
      "Integrate interactive ROI calculators, booking calendars, and lead capture forms",
      "Hand over 100% clean source code repository with zero monthly vendor lock-in"
    ],
    whyItMatters: "Every 100ms of latency drops conversion by 7%. A fast, sleek website turns cold traffic into paying customers."
  },
  email_phone_setup: {
    title: "Business Email & VOIP Phone Routing",
    badge: "COMMUNICATIONS // SETUP",
    summary: "Professional branded email accounts (you@yourdomain.com) configured via Google Workspace or Microsoft 365, plus smart call routing.",
    whatWeDo: [
      "Create branded team mailboxes with enterprise spam filtering and calendar sync",
      "Configure cloud VOIP phone routing and custom interactive voice menus",
      "Synchronize mailboxes directly with your CRM so all client emails are logged automatically",
      "Set up mobile app access for on-the-go communications"
    ],
    whyItMatters: "Sending business quotes from a generic @gmail.com address hurts credibility. Branded communication elevates your brand immediately."
  },
  accounting_ops: {
    title: "Accounting & Invoicing Automation",
    badge: "FINANCE // OPERATIONS",
    summary: "Automated merchant billing, Stripe payment gateways, and recurring invoice systems so you get paid on time every time.",
    whatWeDo: [
      "Connect Stripe and bank accounts to generate automated branded invoices",
      "Set up automatic payment reminders for unpaid client balances",
      "Sync income and expense transactions directly to QuickBooks, Xero, or Stripe Billing",
      "Generate monthly revenue reports and financial health dashboards"
    ],
    whyItMatters: "Cash flow is the lifeblood of your startup. Automated invoicing ensures you get paid promptly without awkward payment chasing."
  },
  support_squad: {
    title: "Dedicated Post-Launch Squad Support",
    badge: "TEAM // LONG-TERM PARTNERSHIP",
    summary: "We don't build your systems and disappear. Our technical squad stays by your side post-launch to monitor performance, tweak workflows, and train your team.",
    whatWeDo: [
      "Monitor system uptime, webhook pipelines, and email deliverability daily",
      "Make live text, design, and workflow adjustments based on early user feedback",
      "Provide live video screen-share training sessions for you and your staff",
      "Direct Slack/WhatsApp access to Calpir technical directors"
    ],
    whyItMatters: "Launching is just day one. Having an expert technical team in your corner gives you the confidence to scale fearlessly."
  }
};