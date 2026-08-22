export interface FeatureDetail {
  title: string;
  badge: string;
  summary: string;
  whatWeDo: string[];
  whyItMatters: string;
}

export const featureDetailsMap: Record<string, FeatureDetail> = {
  domain_ssl: {
    title: "Custom Domain, DNS & SSL Certificate Setup",
    badge: "FOUNDATION // SECURITY",
    summary: "We find the perfect clean name for your business, configure all DNS routing, and lock it down with encrypted HTTPS certificates so you never get browser security warnings.",
    whatWeDo: [
      "Brainstorm & acquire the highest authority .com, .co.uk, or .io domain for your niche",
      "Configure DNS records (A, CNAME, TXT, MX) for high-speed edge delivery",
      "Issue 256-bit SSL encryption certificates with automatic renewal",
      "Prevent spam spoofing with strict SPF, DKIM, and DMARC email records"
    ],
    whyItMatters: "Visitors bounce immediately when they see 'Not Secure' warnings. A pristine domain setup establishes instant credibility with Google and your first buyers."
  },
  gbp_seo: {
    title: "Google Business Profile & Search Console Indexing",
    badge: "DISCOVERABILITY // SEARCH",
    summary: "We don't wait months for Google to notice you. We manually verify and index your pages via Google Search Console and build a 5-star Google Business Profile.",
    whatWeDo: [
      "Claim and optimize your verified Google Business Profile (GBP) with categories and photos",
      "Set up Google Search Console and submit clean XML sitemaps for instant Google indexing",
      "Configure Google Analytics 4 (GA4) with custom conversion goals and lead tracking",
      "Add Schema markup so your business appears in local search maps and rich snippets"
    ],
    whyItMatters: "Your future customers are searching on Google right now. Instant indexing means you start ranking and gaining organic search impressions from day one."
  },
  brand_palette: {
    title: "Brand Identity & Custom Color Palettes",
    badge: "CREATIVE // IDENTITY",
    summary: "A distinctive modern visual identity designed for your specific demographic, including custom typography pairings, aesthetic palettes, and logo source files.",
    whatWeDo: [
      "Curate 5-color cohesive modern palettes tailored to your target audience psychology",
      "Define typography hierarchy (headers, subheads, monospaced tech accents)",
      "Deliver SVG vector logos, transparent PNGs, and social favicon assets",
      "Provide a digital Brand Guidelines cheat sheet for future team members"
    ],
    whyItMatters: "First impressions take 0.05 seconds. A crisp, cohesive visual system makes you look like an established market leader immediately."
  },
  social_niche: {
    title: "Targeted Niche Social Profile Curation",
    badge: "DISTRIBUTION // SOCIAL",
    summary: "Instead of spreading you thin across 10 dead accounts, our strategist identifies the single highest-converting social channel for your niche and builds it out flawlessly.",
    whatWeDo: [
      "Analyze your target audience to pick the #1 channel (e.g. LinkedIn for B2B, Instagram/TikTok for D2C)",
      "Design high-resolution custom banners, avatars, and keyword-rich bios",
      "Link your direct booking funnel and website lead magnets",
      "Starter tier includes full setup of your primary high-converting channel; Growth/Ultimate expands to multi-platform fleets"
    ],
    whyItMatters: "One active, well-optimized channel generating real leads beats five ghost-town social profiles every single day."
  },
  crm_pipelines: {
    title: "CRM & Automated Sales Pipelines",
    badge: "REVENUE // AUTOMATION",
    summary: "Turn scattered inquiries into closed deals. We set up HubSpot or GoHighLevel with custom deal stages, lead scoring, and instant follow-up alerts.",
    whatWeDo: [
      "Build custom deal stages matched to your exact customer journey",
      "Deploy instant 60-second SMS and email notifications when a lead fills out your form",
      "Integrate two-way calendar sync for effortless appointment bookings",
      "Provide custom dashboard filters so you always know your pipeline value"
    ],
    whyItMatters: "Leads contacted within 5 minutes convert at 9x the rate of leads contacted after an hour. Automated CRM systems never sleep."
  },
  ai_agents: {
    title: "Autonomous RAG AI Agents",
    badge: "AI // 24/7 SUPPORT",
    summary: "Custom intelligent agents trained on your specific business documentation that answer inquiries, qualify leads, and book calls 24 hours a day without hallucinations.",
    whatWeDo: [
      "Train LLM models on your internal FAQs, pricing docs, and product catalogs",
      "Connect agents directly to your CRM to update contact details and booking calendars",
      "Embed live web widgets and WhatsApp channels with seamless human handoff",
      "Implement safety guardrails to ensure 100% brand accuracy"
    ],
    whyItMatters: "You cannot be awake at 3 AM answering international prospect questions. Your AI agent handles objections and locks in meetings while you rest."
  },
  workflow_automations: {
    title: "Zero-Manual-Work Automations",
    badge: "EFFICIENCY // MAKE & ZAPIER",
    summary: "We connect your website, CRM, invoicing, Slack, and Google Drive so customer data flows effortlessly with zero copy-pasting.",
    whatWeDo: [
      "Auto-generate invoices and contracts when deals move to 'Closed-Won'",
      "Post real-time sale alerts to your team's Slack or Discord channel",
      "Sync customer contacts to email marketing lists with smart tagging",
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
  }
};