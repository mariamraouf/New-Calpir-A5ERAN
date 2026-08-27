export interface ServiceDefinition {
  id: string;
  slug: string;
  category: "Web & Foundation" | "Sales & Marketing" | "AI & Automation" | "Operations & Growth";
  title: string;
  shortDesc: string;
  longDesc: string;
  tagline: string;
  badge: string;
  iconName: string;
  packagesIncluded: ("Starter" | "Growth" | "Ultimate" | "Solo")[];
  features: string[];
  deliverables: string[];
  who: string;
  get: string;
}

export const allServicesCatalog: ServiceDefinition[] = [
  {
    id: "website-development",
    slug: "website-development",
    category: "Web & Foundation",
    title: "High-Conversion Web Architecture",
    tagline: "Sub-second React & Next.js stores engineered for conversion and Core Web Vitals",
    shortDesc: "Custom web development built with React and Next.js, loading globally in under 1.5 seconds with mobile-first responsiveness and conversion optimization.",
    longDesc: "We don't build generic template sites. We engineer blazing-fast digital storefronts with modern JavaScript frameworks, edge caching, structured JSON-LD SEO, and interactive calculators designed to turn casual visitors into paying customers.",
    badge: "CORE ENGINE",
    iconName: "Globe",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Custom React & Next.js Application Architecture",
      "Sub-1.5 Second Global Load Speed (100 Core Web Vitals)",
      "Technical SEO Structure & Schema.org JSON-LD Markup",
      "Mobile-First Responsive Layout & Dark Mode Polish",
      "Contact Forms & Instant Webhook Routing",
      "100% Clean Code Repository Handover (Zero Lock-in)"
    ],
    deliverables: [
      "Full GitHub Source Code Repository",
      "Production Edge Hosting Setup on Vercel / Cloudflare",
      "Automated Formspree / Webhook Lead Hooks",
      "Custom Component Design Library"
    ],
    who: "Pre-launch founders needing their first high-impact website or established companies suffering from slow, outdated legacy sites.",
    get: "Complete website codebase, live deployment credentials, DNS setup, and full admin documentation."
  },
  {
    id: "domain-ssl",
    slug: "domain-ssl",
    category: "Web & Foundation",
    title: "Domain Acquisition, DNS & SSL Setup",
    tagline: "High-authority domain configuration, DNS routing, and bulletproof SSL certificates",
    shortDesc: "We assist with acquiring the ideal domain, configure high-speed DNS records, and issue 256-bit auto-renewing SSL certificates with email security.",
    longDesc: "A secure domain with properly configured DNS and email authentication records (SPF, DKIM, DMARC) ensures high brand trust and guarantees your transactional emails never land in customer spam folders.",
    badge: "SECURITY",
    iconName: "ShieldCheck",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Domain Name Acquisition & Strategy Consulting",
      "High-Speed Global DNS Configuration (A, CNAME, TXT, MX)",
      "256-Bit SSL HTTPS Certificate with Auto-Renewal",
      "Email Deliverability Authentication (SPF, DKIM, DMARC)",
      "Subdomain Routing for Portals and Booking Funnels",
      "DDoS & Web Application Firewall Integration"
    ],
    deliverables: [
      "Secured & Verified Domain Account",
      "DNS Record Architecture Cheat Sheet",
      "Active 256-Bit SSL Certificate",
      "100% Passing Email Spam Test Verification"
    ],
    who: "Any business launching a new brand or experiencing email deliverability and browser security warning issues.",
    get: "Full domain ownership, DNS credentials, active SSL certificate, and authenticated mail records."
  },
  {
    id: "gbp-seo",
    slug: "gbp-seo",
    category: "Web & Foundation",
    title: "Google Business Profile & Search Console Indexing",
    tagline: "Immediate Google Search Console indexing, XML sitemaps, and optimized Google Maps profile",
    shortDesc: "We don't wait months for Google to notice your site. We manually verify Google Search Console, submit your sitemaps, and optimize your Google Business Profile for immediate ranking.",
    longDesc: "Turn organic local and international Google searchers into inbound inquiries. We claim and configure your official Google Business Profile, implement structured Rich Snippet schema, and submit force-indexing requests directly to Google.",
    badge: "DISCOVERABILITY",
    iconName: "Search",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Official Google Business Profile Verification & Setup",
      "Google Search Console Indexing & XML Sitemap Submission",
      "Google Analytics 4 (GA4) Conversion Event Tagging",
      "Schema.org LocalBusiness & Organization JSON-LD Code",
      "Google Maps Category & Keyword Optimization",
      "Review Generation Engine Setup"
    ],
    deliverables: [
      "Verified Google Search Console Account",
      "Published Google Business Profile with 4K Photos",
      "GA4 Real-Time Analytics Dashboard",
      "Direct Google Review Link Generator"
    ],
    who: "Startups and local businesses that need immediate search presence on Google and Google Maps.",
    get: "Indexed URL confirmation, verified Google Business Profile, and analytics tracking dashboard."
  },
  {
    id: "brand-palette",
    slug: "brand-palette",
    category: "Web & Foundation",
    title: "Brand Identity, Custom Color Palettes & Fonts",
    tagline: "Distinctive modern visual identity engineered for your target market psychology",
    shortDesc: "Full visual identity suite: custom typography pairings, aesthetic 5-color palettes, vector logo packages, and complete brand guidelines.",
    longDesc: "First impressions take 0.05 seconds. We craft clean, memorable visual identities that make your company look like an established market leader from day one, complete with vector SVG logos, social presets, and font hierarchy.",
    badge: "DESIGN",
    iconName: "Palette",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Custom 5-Color Aesthetic Palette Tailored to Your Industry",
      "Modern Web Typography Pairings & License Selection",
      "Vector SVG Logos, Transparent PNGs & Favicon Assets",
      "Digital Brand Guidelines PDF Cheat Sheet",
      "Dark Mode & High-Contrast Color Variants",
      "Figma Source File Access"
    ],
    deliverables: [
      "Master Brand Guidelines PDF",
      "Exported Logo Pack (SVG, PNG, ICO, WebP)",
      "Typography Configuration Files",
      "Figma Brand Kit File"
    ],
    who: "Founders launching a new venture or brands requiring a modern visual overhaul.",
    get: "Full vector design assets, color hex codes, font links, and brand style guide."
  },
  {
    id: "crm-sales",
    slug: "crm-sales",
    category: "Sales & Marketing",
    title: "CRM & Sales Pipeline Setup",
    tagline: "Custom deal stages, automated contact capture, and 60-second follow-up routing",
    shortDesc: "Deploy HubSpot or GoHighLevel with custom deal stages, automated contact scoring, two-way calendar sync, and instant SMS/email lead alerts.",
    longDesc: "Managing leads in spreadsheets guarantees lost revenue. We deploy and customize high-performing CRM systems that automatically route leads, score buyer intent, trigger instant follow-ups, and visualize revenue in flight.",
    badge: "REVENUE ENGINE",
    iconName: "Database",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "HubSpot / GoHighLevel Complete Account Architecture",
      "Custom Multi-Stage Sales Pipeline Mapping",
      "Instant 60-Second SMS & Email Lead Notifications",
      "Automated Lead Scoring & Contact Categorization",
      "Two-Way Calendar Sync (Google Calendar / Calendly)",
      "Revenue Forecasting & Custom Executive Dashboards"
    ],
    deliverables: [
      "Fully Configured CRM Account & Pipelines",
      "Automated Follow-Up Workflow Scenarios",
      "Integrated Website Lead Capture Webhooks",
      "Team Video Training Walkthrough"
    ],
    who: "Teams losing track of leads in email inboxes or seeking an automated, professional sales pipeline.",
    get: "Turnkey CRM workspace, pipeline documentation, automated notifications, and staff onboarding guide."
  },
  {
    id: "social-niche",
    slug: "social-niche",
    category: "Sales & Marketing",
    title: "Niche-Targeted Social Channels & Outreach",
    tagline: "Audited high-converting profile setup across LinkedIn, Instagram, X, or YouTube",
    shortDesc: "Our strategists identify the #1 most profitable social channel for your niche and build out branded 4K banners, keyword-optimized bios, and direct booking links.",
    longDesc: "Instead of spreading you thin across dead accounts, we focus energy on the single highest converting social channel for your market—designing crisp branded creative, high-converting bio copy, and booking funnels.",
    badge: "DISTRIBUTION",
    iconName: "Share2",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Niche Channel Profitability Audit",
      "4K Branded Header Banners & Profile Avatars",
      "Keyword-Rich Bio Copy & Direct Booking Funnel Links",
      "Multi-Platform Fleet Expansion (Growth / Ultimate Tiers)",
      "Custom Content Template Package in Canva/Figma",
      "Direct Outreach Messaging Framework"
    ],
    deliverables: [
      "Live Verified Social Profiles",
      "High-Resolution Banner & Avatar Assets",
      "Bio Copy & Link-in-Bio Setup",
      "10x Branded Social Template Pack"
    ],
    who: "Founders needing a polished executive presence on social media to generate qualified inbound conversations.",
    get: "Configured social profiles, vector graphics, and content scheduling templates."
  },
  {
    id: "video-creative",
    slug: "video-creative",
    category: "Sales & Marketing",
    title: "Video Editing & Content Creative Suite",
    tagline: "Kinetic short-form reels, explainer trailers, and viral content for TikTok, IG & LinkedIn",
    shortDesc: "High-retention video editing with animated kinetic subtitles, sound design, zooms, and custom color grading for viral social reach.",
    longDesc: "Visual motion stops the scroll. We turn raw smartphone footage or screen recordings into high-production vertical reels and horizontal explainers equipped with kinetic subtitles, sound effects, and motion graphics.",
    badge: "CREATIVE SUITE",
    iconName: "Video",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Short-Form Video Editing (TikTok, Reels, Shorts)",
      "Kinetic Subtitle Animation & Sound Design",
      "Branded Social Carousel Templates (Figma/Canva)",
      "Pitch Deck & Sales Presentation Graphics",
      "High-Resolution Product Mockups & App Demos",
      "4K Export Optimization for All Platforms"
    ],
    deliverables: [
      "Ready-to-Post Vertical Video Files",
      "Figma/Canva Source Templates",
      "Custom Motion Graphics Assets",
      "Royalty-Free Music & Sound Effect Licenses"
    ],
    who: "Brands looking to scale content production or founders needing high-impact creative for ad campaigns.",
    get: "A full suite of video and graphic assets ready for immediate deployment."
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    category: "AI & Automation",
    title: "Autonomous AI Agent Development",
    tagline: "Intelligent digital employees that work 24/7/365 without rest",
    shortDesc: "Custom intelligent agents trained on your business documentation that answer inquiries, qualify leads, and book calls 24 hours a day without hallucinations.",
    longDesc: "Traditional chatbots frustrate users. We build custom AI Agents powered by Retrieval-Augmented Generation (RAG) that connect directly to your knowledge base, access your CRM, and execute complex business actions.",
    badge: "AI FLEET",
    iconName: "Bot",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Custom LLM Fine-Tuning on Your Business Documentation",
      "Multi-Channel Deployment (Website, WhatsApp, Slack, Email)",
      "Autonomous Lead Qualification & Direct Calendar Booking",
      "Live Database Retrieval for Real-Time Order/Service Status",
      "Human-in-the-Loop Escalation & Seamless Staff Handoff",
      "Anti-Hallucination Guardrails & Strict Compliance Boundaries"
    ],
    deliverables: [
      "Deployed AI Agent Fleet",
      "Knowledge Vector Database",
      "Custom Action Webhooks",
      "Retraining Management Guide"
    ],
    who: "Businesses missing revenue opportunities after hours or support teams overwhelmed by repetitive client inquiries.",
    get: "Live AI agents, knowledge base, and performance analytics dashboard."
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    category: "AI & Automation",
    title: "Workflow Automation Systems",
    tagline: "Connect every tool in your business and eliminate manual data entry",
    shortDesc: "We build custom automation pipelines using Make.com, Zapier, and Python scripts to unite your website, CRM, accounting, and communication tools into a single sync engine.",
    longDesc: "Your team shouldn't be copying and pasting data between apps. We build custom automation pipelines using Make.com, Zapier, and Python scripts to unite your website, CRM, accounting, and communication tools into a single sync engine.",
    badge: "ZERO MANUAL WORK",
    iconName: "Zap",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Complete Tech Stack Audit & Workflow Mapping",
      "5 to 25+ Custom Automated Scenarios (Make.com / Zapier)",
      "Cross-Platform Data Synchronization",
      "Automated Invoice & Receipt Generation",
      "Instant Slack/Teams Notifications for Key Milestones",
      "Error Handling, Fallback Alerts & Automatic Retries"
    ],
    deliverables: [
      "Live Automated Scenarios",
      "Error Handling Suite",
      "Visual Workflow Architecture Map",
      "System Admin Credentials"
    ],
    who: "Teams wasting time on repetitive manual tasks or companies with fragmented software tools that don't communicate.",
    get: "A fully automated business nervous system."
  },
  {
    id: "ai-consulting",
    slug: "ai-consulting",
    category: "AI & Automation",
    title: "AI Strategy & Executive Consulting",
    tagline: "Actionable AI roadmaps built for real ROI, not hype",
    shortDesc: "We work directly with leadership teams to identify high-ROI opportunities, audit operations, and implement realistic AI transformation roadmaps.",
    longDesc: "With thousands of AI tools flooding the market, deciding where to invest can feel overwhelming. We work directly with leadership teams to identify high-ROI opportunities, audit operations, and implement realistic AI transformation roadmaps.",
    badge: "STRATEGY",
    iconName: "Brain",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Comprehensive Operational Audit & AI Readiness Assessment",
      "Custom 12-Month AI Implementation Roadmap",
      "Tool Selection & Vendor Evaluation Matrix",
      "Data Privacy, Security & Compliance Framework Design",
      "Executive Leadership Briefing & Team Training Workshops",
      "ROI Projection Modeling for Proposed AI Initiatives"
    ],
    deliverables: [
      "12-Month AI Roadmap Document",
      "Security & Compliance Guide",
      "Staff Prompt Library",
      "Executive Workshop Recordings"
    ],
    who: "Executives wanting to leverage AI strategically or established companies aiming to modernise legacy operations safely.",
    get: "A clear, actionable plan for AI integration."
  },
  {
    id: "operations-hr",
    slug: "operations-hr",
    category: "Operations & Growth",
    title: "Operations & HR Infrastructure",
    tagline: "Bulletproof internal systems that allow your company to scale without chaos",
    shortDesc: "We build standard operating procedures (SOPs), payroll structures, contract management, and project tracking boards so your business operates like a well-oiled machine.",
    longDesc: "Scaling a team without documented processes leads to bottlenecks and burnout. We build standard operating procedures (SOPs), payroll structures, contract management, and project tracking boards so your business operates like a well-oiled machine.",
    badge: "SCALABILITY",
    iconName: "Settings",
    packagesIncluded: ["Starter", "Growth", "Ultimate"],
    features: [
      "Centralized Project Management Workspace (ClickUp / Notion)",
      "Standard Operating Procedure (SOP) Library Creation",
      "Payroll & Contractor Management Tool Setup (Deel / Gusto)",
      "Digital Contract & Electronic Signature Integration",
      "Internal Team Communication Channels & Slack Rules",
      "Cloud Storage Folder Architecture & Permissions"
    ],
    deliverables: [
      "Turnkey Project Workspace",
      "Custom SOP Documentation Library",
      "Configured Payroll Portal",
      "Team Permissions Matrix"
    ],
    who: "Founders spending 20+ hours a week on administrative drag or companies expanding their headcount.",
    get: "Repeatable operational systems for smooth scaling."
  },
  {
    id: "custom-apps",
    slug: "custom-apps",
    category: "Operations & Growth",
    title: "Custom Apps & Bespoke Software",
    tagline: "Turn complex business logic into high-performance web software",
    shortDesc: "We build custom web applications, SaaS platforms, internal tools, and specialized AI agent fleets from scratch using modern, scalable full-stack technology.",
    longDesc: "When off-the-shelf software doesn't fit your business model, we build custom web applications, SaaS platforms, internal tools, and specialized AI agent fleets from scratch using modern, scalable full-stack technology.",
    badge: "BESPOKE",
    iconName: "Code",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Full-Stack React / TypeScript Application Development",
      "Scalable Database Architecture (PostgreSQL, Supabase)",
      "User Authentication & Role-Based Access Control (RBAC)",
      "Stripe Payment Gateway & Subscription Billing",
      "Custom API Development & Third-Party Integrations",
      "High-Performance Cloud Hosting & CI/CD Pipelines"
    ],
    deliverables: [
      "Complete Application Codebase",
      "Production Cloud Infrastructure",
      "Admin Credentials",
      "Full Technical Documentation"
    ],
    who: "Founders launching bespoke SaaS platforms or enterprise teams requiring custom internal portals.",
    get: "A high-performance, custom-built software application."
  }
];