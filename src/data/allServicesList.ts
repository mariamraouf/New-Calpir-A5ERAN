export interface ServiceDefinition {
  id: string;
  slug: string;
  category:
    | "Web & Foundation"
    | "Sales & Marketing"
    | "AI & Automation"
    | "Operations & Growth"
    | "Brand & Creative"
    | "People & Talent";
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
    category: "Sales & Marketing",
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
    category: "Brand & Creative",
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
    category: "Brand & Creative",
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
    category: "Brand & Creative",
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
  },
  {
    id: "business-email-setup",
    slug: "business-email-setup",
    category: "Web & Foundation",
    title: "Business Email Setup and Deliverability",
    tagline: "A branded inbox that reaches the inbox instead of the spam folder",
    shortDesc: "We set up business email on your own domain, configure SPF, DKIM and DMARC so your messages actually get delivered, and migrate your existing mail across without losing anything.",
    longDesc: "Sending from a free consumer address costs you credibility on every single email. Sending from a badly configured custom domain costs you deliverability, which is worse, because you never find out the message was never read. We provision Google Workspace or Microsoft 365 on your domain, set the authentication records that mail providers now require, build your aliases and shared inboxes, and move your existing mail and calendar over.",
    badge: "FOUNDATION",
    iconName: "Mail",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Google Workspace or Microsoft 365 provisioning on your domain",
      "SPF, DKIM and DMARC records configured for deliverability",
      "Shared inboxes, aliases and distribution groups",
      "Mailbox, contact and calendar migration from your old provider",
      "Email signature templates applied across the team",
      "Two factor authentication and recovery setup for every account"
    ],
    deliverables: [
      "Live branded mailboxes for every team member",
      "Verified authentication records on your DNS",
      "Migrated mail, contacts and calendars",
      "Admin console handover with your own ownership"
    ],
    who: "Founders still running the business from a personal address, or teams whose email keeps landing in spam.",
    get: "A professional inbox on your own domain that reliably gets delivered."
  },
  {
    id: "voip-phone-systems",
    slug: "voip-phone-systems",
    category: "Web & Foundation",
    title: "Business Phone System and Call Routing",
    tagline: "One business number that follows your team instead of one founder's mobile",
    shortDesc: "We set up a VOIP business number with call menus, routing rules, voicemail to email and business hours handling, so calls reach the right person and nothing is missed after hours.",
    longDesc: "Handing out a personal mobile number works right up until the moment you want to hire, take a holiday, or stop answering at ten at night. We provision a proper business number, build the call menu and routing rules, connect voicemail to email, set business hours with an out of hours path, and link the whole thing to your CRM so calls are logged against the right contact.",
    badge: "FOUNDATION",
    iconName: "PhoneCall",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Business VOIP number provisioning and porting of an existing number",
      "Call menu, extensions and department routing",
      "Business hours rules with an out of hours path",
      "Voicemail to email transcription",
      "Call logging into your CRM against the right contact",
      "Mobile and desktop apps configured for the whole team"
    ],
    deliverables: [
      "A live business number with configured routing",
      "Call menu recorded and deployed",
      "CRM call logging integration",
      "Team apps installed and tested"
    ],
    who: "Businesses taking enquiries by phone that are still routing everything through one personal mobile.",
    get: "A phone system that behaves like a company rather than a person."
  },
  {
    id: "analytics-tracking",
    slug: "analytics-tracking",
    category: "Sales & Marketing",
    title: "Analytics and Conversion Tracking Setup",
    tagline: "Know which pages make money instead of guessing",
    shortDesc: "We install Google Analytics 4, define the conversion events that matter to your business, connect Search Console, and build a dashboard that answers questions rather than producing numbers.",
    longDesc: "Most analytics installs record pageviews and nothing else, which tells you traffic went up without telling you whether anything happened. We install GA4 properly, define the events that represent real outcomes for your business such as a form submitted, a call started or a checkout completed, connect Search Console so you can see the queries bringing people in, and build a single dashboard you will actually open.",
    badge: "MEASUREMENT",
    iconName: "BarChart3",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Google Analytics 4 installation and configuration",
      "Conversion events defined around real business outcomes",
      "Google Search Console connected and sitemap submitted",
      "Google Tag Manager container with documented tags",
      "Consent handling appropriate to your audience",
      "A single reporting dashboard covering traffic, queries and conversions"
    ],
    deliverables: [
      "Configured GA4 property you own",
      "Documented event and conversion map",
      "Search Console verified with sitemap submitted",
      "One dashboard covering the numbers that matter"
    ],
    who: "Anyone spending money or effort on marketing without being able to say which part of it worked.",
    get: "Measurement you can make decisions from."
  },
  {
    id: "payments-checkout",
    slug: "payments-checkout",
    category: "Sales & Marketing",
    title: "Payment and Checkout Setup",
    tagline: "Take money on day one, not in week six",
    shortDesc: "We connect Stripe or your chosen processor, build the checkout or payment link flow, set up subscriptions or deposits if you need them, and make sure receipts, refunds and failed payments are handled.",
    longDesc: "Getting paid is the part founders postpone because it touches compliance, and then postpone again because the first attempt broke. We connect your processor, build the checkout or payment links your model actually needs, configure subscriptions, deposits or instalments where relevant, and set up the unglamorous parts: receipts, refunds, failed payment retries and the reconciliation path into your accounting system.",
    badge: "REVENUE",
    iconName: "CreditCard",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Stripe or alternative processor account configuration",
      "Checkout, payment link or embedded payment flow build",
      "Subscriptions, deposits and instalment plans where needed",
      "Automated receipts and branded confirmation emails",
      "Failed payment retry and dunning rules",
      "Reconciliation path into your accounting system"
    ],
    deliverables: [
      "A live tested payment flow",
      "Configured products, prices and plans",
      "Receipt and dunning email templates",
      "Documentation for issuing refunds and handling disputes"
    ],
    who: "Businesses that need to charge customers online and want it working properly the first time.",
    get: "A payment path from customer to bank account that you understand."
  },
  {
    id: "accounting-invoicing",
    slug: "accounting-invoicing",
    category: "Operations & Growth",
    title: "Accounting and Invoicing System Setup",
    tagline: "Invoices that go out on time and books that are ready for your accountant",
    shortDesc: "We set up your accounting platform, build branded invoice and quote templates, automate payment reminders, and connect your bank feed so reconciliation stops being a monthly ordeal.",
    longDesc: "Late invoices are not a discipline problem, they are a systems problem. We set up your accounting platform, build branded invoice and quote templates, connect the bank feed, wire your payment processor in so paid invoices reconcile themselves, and automate the reminder sequence so chasing happens whether or not you remember. Your accountant gets books in a state they can work with.",
    badge: "CASH FLOW",
    iconName: "Receipt",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Accounting platform setup with your chart of accounts",
      "Branded invoice, quote and credit note templates",
      "Automated payment reminder sequences",
      "Bank feed connection and reconciliation rules",
      "Payment processor sync so paid invoices clear themselves",
      "Recurring invoices and retainer billing where relevant"
    ],
    deliverables: [
      "Configured accounting platform you own",
      "Branded document templates",
      "Live automated reminder sequence",
      "A short written process for month end"
    ],
    who: "Founders invoicing from a document template and chasing payment by memory.",
    get: "Money going out and coming in on a schedule that runs itself."
  },
  {
    id: "project-management-setup",
    slug: "project-management-setup",
    category: "Operations & Growth",
    title: "Project Management Workspace Setup",
    tagline: "One place the work lives, instead of six chat threads and a memory",
    shortDesc: "We build your workspace in ClickUp or Notion with the boards, templates, custom fields and automations your actual process needs, then train the team so it gets used after week two.",
    longDesc: "Most project tools are abandoned because someone installed a template that did not match how the business works. We map your real process first, then build the workspace around it: the boards, the statuses, the custom fields, the recurring task templates and the automations that move work along without a human nudging it. Then we train the team, because a workspace nobody opens is worse than no workspace.",
    badge: "COORDINATION",
    iconName: "KanbanSquare",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Workspace build in ClickUp or Notion mapped to your process",
      "Boards, statuses and custom fields matched to real stages",
      "Recurring task and project templates",
      "Automations for handoffs, due dates and status changes",
      "Permissions, spaces and client facing views",
      "Team training session and a written quick start guide"
    ],
    deliverables: [
      "A configured workspace with live projects in it",
      "Reusable project and task templates",
      "Automation rules documented",
      "Quick start guide for new team members"
    ],
    who: "Teams past the point where work can be tracked in messages, and anyone who has abandoned a project tool before.",
    get: "A single place where the state of the work is obvious."
  },
  {
    id: "sop-documentation",
    slug: "sop-documentation",
    category: "Operations & Growth",
    title: "SOP Writing and Process Documentation",
    tagline: "Write the process down once so it survives you being unavailable",
    shortDesc: "We interview the people doing the work, write standard operating procedures that are actually followed, and build them into a searchable library with owners, triggers and a definition of done.",
    longDesc: "A useful SOP is not a long document. It is a trigger, an owner, numbered steps, a definition of done and an escalation path. We sit with whoever currently does the work, capture what really happens rather than what the org chart says should happen, write it in plain language, and put it somewhere searchable. This is also the prerequisite for automation, because you cannot automate a process nobody has written down.",
    badge: "CONTINUITY",
    iconName: "FileCheck",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Process discovery interviews with the people doing the work",
      "SOPs written with trigger, owner, steps, definition of done and escalation",
      "Searchable library structured by function",
      "Onboarding, delivery, finance and client facing procedures",
      "Review dates and named owners so documents stay current",
      "Identification of which steps are worth automating next"
    ],
    deliverables: [
      "A written SOP library covering your core processes",
      "Templates so your team can add new procedures",
      "An owner and review date on every document",
      "A shortlist of automation candidates"
    ],
    who: "Founders who are the single point of failure, and teams about to hire or hand work over.",
    get: "A business that keeps running when a specific person does not."
  },
  {
    id: "recruiting",
    slug: "recruiting",
    category: "People & Talent",
    title: "Recruiting and Candidate Vetting",
    tagline: "We vet people like they are going to work somewhere that cannot afford a mistake",
    shortDesc: "We write the role, source candidates, run structured screening and skills assessments, and hand you a shortlist with evidence attached rather than a stack of confident CVs.",
    longDesc: "Hiring badly is one of the most expensive things a small business can do, and most small business hiring is done on instinct after two friendly conversations. We define the role against what the work actually requires, source candidates, run a structured screen so every applicant is measured the same way, set a practical assessment relevant to the job, and check references properly. You get a shortlist with reasoning attached, and you make the decision.",
    badge: "TALENT",
    iconName: "UserPlus",
    packagesIncluded: ["Solo"],
    features: [
      "Role definition built from the work rather than a generic job title",
      "Job description and advert written for the channels that fit the role",
      "Candidate sourcing and pipeline management",
      "Structured screening so every candidate is scored the same way",
      "Practical skills assessment relevant to the actual job",
      "Reference checks and a shortlist with written reasoning"
    ],
    deliverables: [
      "A written role specification and scorecard",
      "A managed candidate pipeline",
      "Assessment results for every shortlisted candidate",
      "A ranked shortlist with the reasoning behind it"
    ],
    who: "Founders making their first hires, and teams that have been burned by a hire who interviewed better than they worked.",
    get: "A shortlist you can defend, and a repeatable way to hire the next one."
  },
  {
    id: "hr-systems",
    slug: "hr-systems",
    category: "People & Talent",
    title: "HR Systems, Contracts and Employee Onboarding",
    tagline: "The paperwork and the first week, handled properly",
    shortDesc: "We build your onboarding process, contract and policy templates, employee records system and offboarding checklist, so bringing someone on is a process rather than a scramble.",
    longDesc: "The first week sets whether a new person becomes productive or spends a month guessing. We build the onboarding sequence, the accounts and access checklist, the contract and policy templates appropriate to how you engage people, and the record keeping system that holds it together. We also build the offboarding checklist, which is the one everybody skips until the day they urgently need it.",
    badge: "PEOPLE OPS",
    iconName: "Users",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Employment and contractor agreement templates",
      "Onboarding sequence covering accounts, access, tools and training",
      "Employee handbook and core policy templates",
      "HR records system with document storage and renewal reminders",
      "Time off, absence and review tracking",
      "Offboarding checklist covering access revocation and handover"
    ],
    deliverables: [
      "Contract and policy template set",
      "A documented onboarding checklist",
      "Configured HR records system",
      "Offboarding checklist and access matrix"
    ],
    who: "Businesses taking on their first employees or contractors, and teams whose HR lives in a folder of loose documents.",
    get: "A consistent, documented way to bring people in and let them go."
  },
  {
    id: "payroll-setup",
    slug: "payroll-setup",
    category: "People & Talent",
    title: "Payroll and International Contractor Payments",
    tagline: "Everyone paid correctly, on time, in the right currency",
    shortDesc: "We set up your payroll platform, onboard your team, configure tax and filing settings, and build the process for paying international contractors without a monthly improvisation.",
    longDesc: "Payroll is the one system where a mistake is immediately personal to everyone it touches. We set up your payroll platform, onboard employees and contractors with the right classification and paperwork, configure filings and payment schedules, and build the process for paying people in other countries. We are not your accountant or your employment lawyer and we will tell you when you need one, particularly on worker classification.",
    badge: "PAYROLL",
    iconName: "Banknote",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Payroll platform setup such as Gusto, Deel or a local equivalent",
      "Employee and contractor onboarding with correct documentation",
      "Pay schedules, tax settings and filing configuration",
      "International contractor payment process",
      "Benefits and deductions configuration where applicable",
      "Reconciliation path into your accounting system"
    ],
    deliverables: [
      "A configured payroll platform you own",
      "Every team member onboarded and verified",
      "A documented monthly payroll process",
      "Accounting reconciliation set up"
    ],
    who: "Businesses making their first hires, or teams paying contractors across borders by manual transfer.",
    get: "Payroll that runs on a schedule instead of on your attention."
  },
  {
    id: "team-training",
    slug: "team-training",
    category: "People & Talent",
    title: "Team Training and Systems Handover",
    tagline: "Your team can run the systems without calling us",
    shortDesc: "Live training sessions and written documentation covering every system we build, so your team owns the stack rather than depending on whoever set it up.",
    longDesc: "A system nobody understands is a liability dressed as an asset. We run live sessions with the people who will actually use each tool, record them, and leave written documentation covering the ordinary tasks and the things that go wrong. The measure of success is that you stop needing us, which is a strange thing for an agency to optimise for and exactly the point.",
    badge: "HANDOVER",
    iconName: "GraduationCap",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Live training sessions scoped to each system and each role",
      "Session recordings kept for future hires",
      "Written documentation for routine tasks and common failures",
      "Admin and ownership transfer for every account",
      "A named internal owner for each system",
      "A follow up session once the team has used it in anger"
    ],
    deliverables: [
      "Recorded training sessions",
      "Written system documentation",
      "Full admin credentials and ownership",
      "An owner assigned to every tool"
    ],
    who: "Teams inheriting a new stack, and founders who do not want a permanent dependency on an outside agency.",
    get: "Ownership of your own systems, with the knowledge to run them."
  },
  {
    id: "launch-support",
    slug: "launch-support",
    category: "Operations & Growth",
    title: "Post Launch Support and Technical Advisory",
    tagline: "The weeks after go live, when the real problems show up",
    shortDesc: "A dedicated support window after launch covering fixes, tuning and questions, plus ongoing technical advisory for teams that want a second opinion before they buy or build something.",
    longDesc: "Launch day is not the hard part. The hard part is week three, when a form starts failing on one browser, an automation misfires on an edge case nobody imagined, and you need someone who already knows how the system was built. Every package includes a support window. Beyond that we offer ongoing advisory, which is mostly us talking people out of buying things they do not need.",
    badge: "SUPPORT",
    iconName: "LifeBuoy",
    packagesIncluded: ["Starter", "Growth", "Ultimate"],
    features: [
      "A dedicated support window after launch, by package tier",
      "Bug fixes and configuration changes during that window",
      "Automation and workflow tuning once real data flows through",
      "A direct channel to the people who built your systems",
      "Ongoing technical advisory available after the window closes",
      "Honest guidance on whether a new tool or build is worth it"
    ],
    deliverables: [
      "A named point of contact",
      "Fixes and tuning delivered inside the support window",
      "A written log of every change made",
      "A recommendation on what to do next, including doing nothing"
    ],
    who: "Every client immediately after launch, and teams who want technical judgement on call without hiring for it.",
    get: "Someone who knows your system when something breaks."
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance",
    category: "Web & Foundation",
    title: "Website Maintenance, Hosting and Backups",
    tagline: "Someone watching the site so you find out before your customers do",
    shortDesc: "Managed hosting, updates, monitoring, off site backups and a tested restore path, so your website stays up and a bad day stays a small one.",
    longDesc: "Most websites are fine until the afternoon they are not, and the difference between an hour of downtime and a week of it is whether anyone had a backup they had actually tested. We manage hosting, apply updates, run uptime and SSL monitoring, keep off site backups, and rehearse the restore so it works when it matters.",
    badge: "UPTIME",
    iconName: "Wrench",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Managed hosting on Vercel, Cloudflare or your preferred platform",
      "Uptime, SSL and domain expiry monitoring with alerts",
      "Scheduled off site backups with a tested restore procedure",
      "Platform, plugin and dependency updates",
      "Security headers, firewall rules and spam protection",
      "A monthly note on what changed and what needs attention"
    ],
    deliverables: [
      "Configured hosting and monitoring",
      "A backup schedule with a verified restore",
      "Documented recovery procedure",
      "Monthly maintenance summary"
    ],
    who: "Anyone whose website matters to revenue and who has nobody currently responsible for it.",
    get: "A site that stays up, and a way back when something breaks."
  },
  {
    id: "site-speed-optimization",
    slug: "site-speed-optimization",
    category: "Web & Foundation",
    title: "Site Speed and Core Web Vitals Optimization",
    tagline: "Measured against Google's actual thresholds, not a vanity score",
    shortDesc: "We audit and fix what makes your site slow, targeting Google's published Core Web Vitals thresholds at the percentile Google actually measures, and show you the before and after.",
    longDesc: "Speed work goes wrong when someone optimises for a tool score instead of the metrics Google publishes. We measure Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift at the 75th percentile, which is the level Google says to target, then fix the real causes: oversized images, render blocking scripts, unbounded third party tags and layout that jumps while loading.",
    badge: "PERFORMANCE",
    iconName: "Gauge",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Audit against current Core Web Vitals thresholds and field data",
      "Image format, sizing and lazy loading corrections",
      "Render blocking script and font loading fixes",
      "Third party tag audit, because analytics and chat widgets are usually the culprit",
      "Layout shift elimination on the templates that matter",
      "Before and after measurement you can verify yourself"
    ],
    deliverables: [
      "A written audit with prioritised fixes",
      "Implemented performance work",
      "Before and after field measurements",
      "A short guide for keeping it fast"
    ],
    who: "Sites that feel slow on mobile, and anyone failing Core Web Vitals in Search Console.",
    get: "A measurably faster site, measured the way Google measures it."
  },
  {
    id: "ecommerce-store-setup",
    slug: "ecommerce-store-setup",
    category: "Web & Foundation",
    title: "Ecommerce Store Build and Setup",
    tagline: "Products, payments, tax, shipping and the emails after the sale",
    shortDesc: "We build your store on Shopify, Webflow or WooCommerce, load the catalogue, configure payments, tax and shipping, and set up the post purchase emails most stores forget.",
    longDesc: "Building the storefront is the visible half. The half that decides whether the store works is the configuration underneath: tax rules, shipping zones and rates, inventory behaviour when stock runs out, abandoned checkout recovery, and the transactional emails a customer actually reads. We set up both halves and hand you a store you can run.",
    badge: "COMMERCE",
    iconName: "ShoppingCart",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Store build on Shopify, Webflow Ecommerce or WooCommerce",
      "Product catalogue, variants and collection structure",
      "Payment, tax and shipping zone configuration",
      "Inventory rules and out of stock behaviour",
      "Abandoned checkout recovery and post purchase email flow",
      "Analytics and ecommerce conversion tracking"
    ],
    deliverables: [
      "A live store with a tested checkout",
      "Loaded catalogue and configured shipping",
      "Transactional and recovery email flows",
      "Admin training and documentation"
    ],
    who: "Businesses selling physical or digital products who want the whole thing configured, not just designed.",
    get: "A store that takes orders and handles what happens after them."
  },
  {
    id: "booking-scheduling",
    slug: "booking-scheduling",
    category: "Web & Foundation",
    title: "Booking and Scheduling System Setup",
    tagline: "Let people book you without the six message scheduling conversation",
    shortDesc: "We set up booking on Calendly, Cal.com or your CRM's native scheduler, with the right availability rules, buffers, reminders, intake questions and calendar sync.",
    longDesc: "Scheduling back and forth is one of the quietest ways a business loses deals, because the enquiry that needed three messages to book often needed only two to go cold. We set up booking properly: availability that reflects real working patterns, buffers so you are not back to back, intake questions that arrive before the call, reminders that cut no shows, and payment collection where the appointment warrants it.",
    badge: "CONVERSION",
    iconName: "CalendarCheck",
    packagesIncluded: ["Starter", "Growth", "Ultimate", "Solo"],
    features: [
      "Booking platform setup with your real availability and buffers",
      "Multiple appointment types with different durations and rules",
      "Intake questions routed into your CRM against the contact",
      "Automatic reminders by email and SMS to cut no shows",
      "Two way calendar sync across the team",
      "Deposit or payment collection at booking where relevant"
    ],
    deliverables: [
      "Live booking links and embedded booking on your site",
      "Configured appointment types and availability",
      "Reminder sequences",
      "CRM integration so bookings create records"
    ],
    who: "Any business that sells through calls, consultations or appointments.",
    get: "Bookings that land in your calendar with the context already attached."
  },
  {
    id: "design-system",
    slug: "design-system",
    category: "Brand & Creative",
    title: "Design System and Marketing Asset Templates",
    tagline: "Templates so everything you make looks like it came from the same company",
    shortDesc: "We turn your brand into working Canva and Figma templates for social posts, decks, proposals and documents, so anyone on the team can produce on brand material without a designer.",
    longDesc: "A brand guideline document is a PDF nobody opens. A template is something a person uses at four in the afternoon because it is faster than starting blank. We build the actual templates: social formats, presentation decks, proposal and document layouts, email headers, with the type, colour and spacing rules already baked in so they cannot easily be broken.",
    badge: "CONSISTENCY",
    iconName: "Layers",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Canva and Figma template sets built from your brand",
      "Social post formats for each platform you actually use",
      "Presentation and pitch deck templates",
      "Proposal, quote and document layouts",
      "Email header and signature assets",
      "A short usage guide covering what to change and what to leave alone"
    ],
    deliverables: [
      "Editable template library in Canva or Figma",
      "Exported logo, colour and type assets",
      "Social format set sized per platform",
      "Usage guide for the team"
    ],
    who: "Teams producing their own marketing material who want it to stop looking improvised.",
    get: "Anyone on the team can make something that looks right."
  },
  {
    id: "content-production",
    slug: "content-production",
    category: "Brand & Creative",
    title: "Content Production and Publishing Workflow",
    tagline: "A repeatable pipeline instead of a scramble every Monday",
    shortDesc: "We build the workflow that takes content from idea to published: a calendar, briefs, a review step, scheduling, and repurposing so one piece of work becomes several.",
    longDesc: "Content usually stops not because people run out of ideas but because there is no pipeline, so every post is a fresh act of will. We build the calendar, the brief template, the review and approval step, the scheduling setup, and the repurposing path that turns one longer piece into the shorter ones. Then we document it so it survives the person who set it up leaving.",
    badge: "PIPELINE",
    iconName: "PenTool",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Content calendar built in your existing workspace",
      "Brief and outline templates for each format",
      "Review and approval workflow with named owners",
      "Scheduling setup in Buffer, Hootsuite or native platform tools",
      "Repurposing path from long form to short form",
      "A written publishing SOP so it runs without you"
    ],
    deliverables: [
      "A live content calendar with the first weeks planned",
      "Brief and format templates",
      "Configured scheduling",
      "A documented publishing process"
    ],
    who: "Businesses that keep starting content and stopping, and teams where publishing depends on one person's memory.",
    get: "A pipeline that keeps producing when motivation dips."
  },
  {
    id: "email-marketing",
    slug: "email-marketing",
    category: "Sales & Marketing",
    title: "Email Marketing and Newsletter Setup",
    tagline: "The channel you own, set up so it reaches the inbox",
    shortDesc: "We set up Klaviyo, ActiveCampaign, Mailchimp or Brevo, build your signup path, write the welcome sequence structure, configure segments, and get your sending domain authenticated.",
    longDesc: "Email is the only audience you own outright, and it is also the one most likely to be quietly broken. We connect your platform, authenticate your sending domain so messages get delivered, build the signup and preference path, structure the welcome and nurture sequences, and set up the segments that let you send relevant things rather than one message to everybody.",
    badge: "OWNED AUDIENCE",
    iconName: "Send",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Platform setup on Klaviyo, ActiveCampaign, Mailchimp or Brevo",
      "Sending domain authentication for deliverability",
      "Signup forms, lead magnets and preference centre",
      "Welcome and nurture sequence structure",
      "Segmentation based on behaviour and lifecycle stage",
      "Templates matched to your brand, and reporting that shows what worked"
    ],
    deliverables: [
      "A configured email platform you own",
      "Live signup path and authenticated domain",
      "Built welcome and nurture sequences",
      "Branded templates and a reporting view"
    ],
    who: "Businesses collecting email addresses and doing nothing with them, or sending and not being read.",
    get: "A list you own, reaching inboxes, with sequences that run themselves."
  },
  {
    id: "seo-content-strategy",
    slug: "seo-content-strategy",
    category: "Sales & Marketing",
    title: "SEO and Content Strategy",
    tagline: "Target what you can actually win, not the terms everyone wants",
    shortDesc: "Technical SEO, keyword research grounded in who currently ranks, and a content plan built around queries a site like yours can realistically reach.",
    longDesc: "Most SEO plans fail at the first step by targeting head terms owned by publishers with twenty years of authority. We look at who actually holds page one for each candidate query and tell you honestly which ones are reachable and which are not. Then we fix the technical side, because a site search engines cannot read properly will not rank whatever you publish, and build a content plan around the queries with real commercial intent that are genuinely winnable.",
    badge: "SEARCH",
    iconName: "TrendingUp",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Technical audit covering crawling, indexing, canonicals and structured data",
      "Keyword research assessed against who currently ranks",
      "An honest difficulty verdict on every target, including the ones to skip",
      "Content plan mapped to commercial intent, not just search volume",
      "Internal linking structure so pages support each other",
      "Search Console setup and ongoing tracking"
    ],
    deliverables: [
      "A written technical audit with prioritised fixes",
      "A keyword map with difficulty assessments",
      "A content plan with briefs",
      "Tracking so you can see what moves"
    ],
    who: "Businesses publishing content that nobody finds, and sites that have never been audited technically.",
    get: "A realistic plan, and the technical foundation for it to work."
  },
  {
    id: "paid-ads-setup",
    slug: "paid-ads-setup",
    category: "Sales & Marketing",
    title: "Paid Ads Setup and Conversion Tracking",
    tagline: "Tracking configured before the spending starts",
    shortDesc: "We set up your ad accounts, conversion tracking and audiences properly, build the landing pages, and make sure you can tell which spend produced which customer.",
    longDesc: "The expensive mistake in paid advertising is not a bad campaign, it is running any campaign without working conversion tracking, because then you cannot tell what worked and you optimise on guesswork. We set up the accounts, install and verify conversion tracking, build the audiences, connect the landing pages, and set up reporting that ties spend to outcomes before a budget goes live.",
    badge: "PAID",
    iconName: "Target",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Ad account structure on Google, Meta, LinkedIn or TikTok",
      "Conversion tracking installed and verified end to end",
      "Audience and remarketing setup",
      "Landing page build matched to the ad promise",
      "Budget structure and naming conventions that stay readable",
      "Reporting that ties spend to pipeline rather than clicks"
    ],
    deliverables: [
      "Configured ad accounts you own",
      "Verified conversion tracking",
      "Built landing pages",
      "A reporting view connecting spend to results"
    ],
    who: "Businesses about to spend on ads, and anyone already spending who cannot say what it produced.",
    get: "Spend you can measure, on pages built to convert it."
  },
  {
    id: "proposals-quotes",
    slug: "proposals-quotes",
    category: "Sales & Marketing",
    title: "Proposal, Quote and Contract Flow",
    tagline: "From yes to signed without a week of formatting",
    shortDesc: "Branded proposal and quote templates in PandaDoc or your CRM, with pricing tables, electronic signature, and automatic follow up when a proposal goes unread.",
    longDesc: "Deals stall in the gap between a good call and a signed document, usually because building each proposal takes an evening. We build reusable templates with your pricing structure, wire in electronic signature so the client can sign on a phone, connect it to your CRM so the deal stage updates itself, and set the follow up sequence for proposals that sit unopened.",
    badge: "CLOSING",
    iconName: "FileSignature",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Branded proposal and quote templates",
      "Reusable pricing tables and optional line items",
      "Electronic signature built into the document",
      "CRM integration so deal stages update on send and sign",
      "Automatic follow up when a proposal is not opened or not signed",
      "A view showing what was sent, opened and signed"
    ],
    deliverables: [
      "Proposal and quote template library",
      "Configured signature flow",
      "CRM automation on send and sign",
      "Follow up sequences"
    ],
    who: "Service businesses writing every proposal from scratch, and teams losing deals to silence after sending one.",
    get: "Proposals out in minutes, signed without printing anything."
  },
  {
    id: "reviews-reputation",
    slug: "reviews-reputation",
    category: "Sales & Marketing",
    title: "Reviews and Reputation System",
    tagline: "Ask every happy customer, rather than the ones you remember",
    shortDesc: "An automated request flow that asks for a review at the right moment, routes people to the platforms that matter for your business, and alerts you when something needs a response.",
    longDesc: "Google's own guidance says review activity contributes to local prominence and that there is no way to pay for a better local ranking, which makes a systematic review habit one of the few honest levers available. We build the request into your delivery process so it fires at the moment a customer is most satisfied, route requests to the platforms that matter for your category, and alert you to new reviews so responses are timely.",
    badge: "TRUST",
    iconName: "Star",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Automated review request triggered by a real delivery milestone",
      "Requests routed to Google, industry platforms or both",
      "Alerts for new reviews so nothing sits unanswered",
      "Response templates for good reviews and difficult ones",
      "Display of genuine reviews on your website",
      "Reporting on request volume and response rate"
    ],
    deliverables: [
      "A live automated request flow",
      "Configured alerts and response templates",
      "Review display on your site",
      "A simple reporting view"
    ],
    who: "Local and service businesses whose category is decided partly on review count.",
    get: "A steady flow of genuine reviews without anyone remembering to ask."
  },
  {
    id: "ai-voice-agents",
    slug: "ai-voice-agents",
    category: "AI & Automation",
    title: "AI Voice Agent and Phone Answering",
    tagline: "Calls answered and qualified, with a human path that always works",
    shortDesc: "A voice agent that answers, qualifies and books, built with explicit limits, a fast handover to a person, and transcripts logged to your CRM.",
    longDesc: "A voice agent is the highest risk place to deploy AI, because the caller cannot see what went wrong and cannot scroll back. So we build these narrowly: a defined scope, a clear handover to a human whenever the call leaves that scope, transcripts logged against the contact, and monitored performance for the first weeks. Published evaluations show agents are least reliable under repetition and pressure, which is exactly what phone calls are, so the guardrails are the product.",
    badge: "VOICE",
    iconName: "Mic",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Voice agent scoped to defined call types rather than everything",
      "Qualification questions and booking handled in the call",
      "Immediate handover to a person when the call leaves scope",
      "Transcripts and recordings logged to the CRM contact",
      "Out of hours and overflow handling",
      "Monitored performance review in the first weeks after launch"
    ],
    deliverables: [
      "A live voice agent on your business number",
      "A documented scope and escalation path",
      "CRM logging of calls and outcomes",
      "A review after real call volume"
    ],
    who: "Businesses missing calls out of hours or at peak, where a missed call is a lost customer.",
    get: "Calls answered, with a human path that always works."
  },
  {
    id: "document-processing",
    slug: "document-processing",
    category: "AI & Automation",
    title: "Document Processing and Data Extraction",
    tagline: "Stop retyping numbers from PDFs into spreadsheets",
    shortDesc: "Automated extraction from invoices, receipts, forms and contracts into your systems, with a review step wherever a wrong value would be expensive.",
    longDesc: "Extracting structured data from documents is one of the things current AI genuinely does well, because the task is bounded and the output is checkable. We build the pipeline from wherever documents arrive, extract the fields you need, validate them against rules you set, and route anything uncertain to a person. The review step is deliberate: automation you cannot audit is not a saving.",
    badge: "DATA ENTRY",
    iconName: "ScanText",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Intake from email, upload, shared drive or scanner",
      "Field extraction from invoices, receipts, forms and contracts",
      "Validation rules that catch implausible values",
      "Human review queue for anything below a confidence threshold",
      "Output written into your accounting, CRM or database",
      "An audit trail showing what was extracted and by what"
    ],
    deliverables: [
      "A working extraction pipeline",
      "Validation rules and a review queue",
      "Integration into your existing systems",
      "Accuracy measurement on a real sample"
    ],
    who: "Anyone with a person spending hours a week copying values out of documents.",
    get: "Document data in your systems, with the uncertain cases flagged."
  },
  {
    id: "ai-knowledge-base",
    slug: "ai-knowledge-base",
    category: "AI & Automation",
    title: "Internal AI Knowledge Base",
    tagline: "Answers from your own documents, with the source attached",
    shortDesc: "A searchable assistant over your SOPs, contracts and internal documents that answers questions and shows which document it came from, so answers can be checked.",
    longDesc: "The value of an internal knowledge assistant is not that it sounds confident, it is that it points at the source. We index your real documents, build retrieval that returns the passage alongside the answer, set permissions so people only see what they should, and keep the index current as documents change. If it cannot find an answer it says so, which is the behaviour that makes it trustworthy.",
    badge: "INTERNAL",
    iconName: "BookOpen",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Indexing of SOPs, contracts, handbooks and internal documentation",
      "Answers returned with the source document and passage",
      "Permission rules so people only retrieve what they should see",
      "An explicit no answer response rather than a guess",
      "Automatic reindexing as documents change",
      "Slack or workspace integration where your team already asks questions"
    ],
    deliverables: [
      "A live internal assistant over your documents",
      "Permission configuration",
      "Reindexing automation",
      "Usage guidance for the team"
    ],
    who: "Teams where the same questions get asked repeatedly and the answer lives in a document nobody can find.",
    get: "Fast answers you can verify against the source."
  },
  {
    id: "data-integration",
    slug: "data-integration",
    category: "AI & Automation",
    title: "Data Integration and System Sync",
    tagline: "One version of the customer, not five disagreeing copies",
    shortDesc: "We connect your CRM, website, accounting, support and marketing tools so records stay consistent, with clear rules about which system wins when they disagree.",
    longDesc: "Every business past a certain size has the same customer recorded in several tools, slightly differently, and no agreement on which one is right. We map where each piece of data should originate, build the syncs, and define what happens on conflict, because a sync without conflict rules quietly overwrites good data with stale data. Errors surface as alerts rather than silence.",
    badge: "INTEGRATION",
    iconName: "Workflow",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "A map of which system owns which field",
      "Two way syncs between CRM, site, accounting, support and marketing",
      "Conflict rules so the right record wins",
      "Deduplication and normalisation of existing records",
      "Error alerting rather than silent failure",
      "Documentation of every connection and what it moves"
    ],
    deliverables: [
      "Live syncs between your systems",
      "A written data ownership map",
      "Deduplicated existing records",
      "Monitoring and alerting"
    ],
    who: "Teams maintaining the same information in several tools by hand.",
    get: "Systems that agree with each other without anyone reconciling them."
  },
  {
    id: "reporting-automation",
    slug: "reporting-automation",
    category: "AI & Automation",
    title: "Automated Reporting and Dashboards",
    tagline: "The numbers arrive, instead of someone building them again",
    shortDesc: "We pull your data into one dashboard and schedule the reports, so the weekly numbers appear without anyone rebuilding a spreadsheet every Monday morning.",
    longDesc: "Reporting is usually automated last and it is often the fastest saving available, because somebody is manually rebuilding the same view every week. We connect the sources, agree the handful of numbers that actually drive decisions, build one dashboard rather than five, and schedule delivery so the report arrives whether or not anybody remembers.",
    badge: "VISIBILITY",
    iconName: "PieChart",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Data pulled from CRM, ads, accounting, site analytics and support",
      "An agreed short list of metrics that drive decisions",
      "One dashboard rather than a tool per source",
      "Scheduled delivery by email or into Slack",
      "Alerting when a number moves beyond a threshold you set",
      "Documentation of how each number is calculated"
    ],
    deliverables: [
      "A live dashboard",
      "Scheduled recurring reports",
      "Threshold alerts",
      "A written definition of every metric"
    ],
    who: "Founders rebuilding the same report weekly, and teams arguing about whose number is correct.",
    get: "One agreed set of numbers, delivered on a schedule."
  },
  {
    id: "esignature-contracts",
    slug: "esignature-contracts",
    category: "Operations & Growth",
    title: "Contract and Electronic Signature Setup",
    tagline: "Documents signed on a phone, filed automatically",
    shortDesc: "We set up DocuSign or PandaDoc, build your contract templates with the right fields, automate reminders, and file signed copies where they belong.",
    longDesc: "Contracts get delayed by friction rather than disagreement: printing, scanning, finding the right version. We set up electronic signature, build templates for the agreements you send regularly, add the fields and validation so documents come back complete, automate the chase, and route signed copies into the right folder and the right CRM record automatically.",
    badge: "PAPERWORK",
    iconName: "PenLine",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "DocuSign or PandaDoc setup on your account",
      "Templates for the agreements you send repeatedly",
      "Required fields and validation so documents return complete",
      "Automated reminders for unsigned documents",
      "Signed copies filed to cloud storage and attached to the CRM record",
      "An audit trail of who signed what and when"
    ],
    deliverables: [
      "A configured signature platform",
      "Your contract template library",
      "Automated reminders and filing",
      "A searchable archive of executed documents"
    ],
    who: "Businesses still emailing documents to be printed, signed and scanned back.",
    get: "Agreements signed quickly and filed without anyone touching them."
  },
  {
    id: "cloud-storage-architecture",
    slug: "cloud-storage-architecture",
    category: "Operations & Growth",
    title: "Cloud Storage and File Architecture",
    tagline: "A folder structure that still makes sense in two years",
    shortDesc: "We design your file structure, naming conventions and permission model, migrate what exists, and set retention rules so storage stops being an archaeological dig.",
    longDesc: "File chaos is expensive in a way nobody measures, because the cost is spread across everybody looking for things. We design a structure that matches how the business works rather than how it grew, set naming conventions, build a permission model that survives people joining and leaving, migrate what already exists, and set retention rules so old material is archived rather than accumulating forever.",
    badge: "ORDER",
    iconName: "FolderTree",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Folder architecture designed around your actual workflows",
      "Naming conventions that stay sortable and searchable",
      "Permission model by role, not by individual",
      "Migration and reorganisation of existing files",
      "External sharing rules and link expiry",
      "Retention and archive policy"
    ],
    deliverables: [
      "A migrated, organised file structure",
      "A written naming and filing convention",
      "A role based permissions matrix",
      "Retention rules in place"
    ],
    who: "Teams where finding a document means asking somebody, and businesses onboarding new people into a mess.",
    get: "Files where you would expect them, visible to the right people."
  },
  {
    id: "client-onboarding-system",
    slug: "client-onboarding-system",
    category: "Operations & Growth",
    title: "Client Onboarding System",
    tagline: "The first two weeks decide the whole relationship",
    shortDesc: "An automated onboarding sequence covering the welcome, contract, payment, kickoff, information gathering and access requests, so every client gets the same start.",
    longDesc: "Onboarding is where clients decide privately whether they made a good decision, and it is usually improvised. We build the sequence: welcome and expectations, contract and deposit, a kickoff booking, the intake form that collects what you need before work begins, access requests, and internal task creation so your team knows what to do. Same experience every time, without anyone remembering the steps.",
    badge: "RETENTION",
    iconName: "UserCheck",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Automated welcome sequence setting expectations and timelines",
      "Contract and deposit collection built into the flow",
      "Kickoff booking with intake questions answered in advance",
      "Access and credential request checklist",
      "Internal project and task creation triggered on signature",
      "A check in at the point where clients usually go quiet"
    ],
    deliverables: [
      "A live onboarding automation",
      "Client facing templates and forms",
      "Internal task templates",
      "A written onboarding SOP"
    ],
    who: "Service businesses where onboarding quality depends on who is handling it that week.",
    get: "Every client gets the good version of your onboarding."
  },
  {
    id: "software-audit",
    slug: "software-audit",
    category: "Operations & Growth",
    title: "Software Stack Audit and Subscription Cleanup",
    tagline: "Usually the only service here that pays for itself immediately",
    shortDesc: "We inventory every tool you pay for, find the duplicates, the unused seats and the forgotten renewals, and tell you honestly what to cancel and what to keep.",
    longDesc: "Most businesses past a few years are paying for tools that overlap, seats belonging to people who left, and annual renewals nobody remembers agreeing to. We inventory everything, map what each tool is actually used for, identify overlap and unused capacity, and give you a written recommendation. Sometimes the recommendation is that your stack is fine, which we will also say.",
    badge: "COST",
    iconName: "ListChecks",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Full inventory of subscriptions, owners, renewal dates and costs",
      "Overlap analysis where several tools do the same job",
      "Unused seat and dormant account identification",
      "Renewal calendar so nothing auto renews unnoticed",
      "Consolidation recommendations with the migration effort stated honestly",
      "Ownership assigned so every tool has a responsible person"
    ],
    deliverables: [
      "A written stack inventory with costs",
      "A cancellation and consolidation recommendation",
      "A renewal calendar",
      "An owner assigned to every tool"
    ],
    who: "Any business more than two years old that has never counted what it pays for.",
    get: "A clear picture of your software spend and what to do about it."
  },
  {
    id: "contractor-compliance",
    slug: "contractor-compliance",
    category: "People & Talent",
    title: "Contractor Onboarding and Classification Support",
    tagline: "Get the paperwork right before it becomes a tax problem",
    shortDesc: "We build your contractor onboarding, agreement templates and record keeping, and flag classification risk clearly, because misclassification penalties are assessed per worker.",
    longDesc: "Worker classification is one of the few admin mistakes that compounds quietly and then arrives as a bill. There is no single federal test: the IRS uses a common law test for tax and the Department of Labor uses an economic reality test for wage and hour, and states apply their own. We build the onboarding, agreements and records, and we flag where your arrangement looks risky. We are not employment lawyers and we will tell you when you need one.",
    badge: "COMPLIANCE",
    iconName: "Scale",
    packagesIncluded: ["Growth", "Ultimate", "Solo"],
    features: [
      "Contractor agreement templates with scope and deliverable structure",
      "Onboarding checklist covering documentation and tax forms",
      "Records system with renewal and expiry reminders",
      "A plain explanation of the different classification tests that apply",
      "Risk flags where an arrangement looks more like employment",
      "Payment and invoicing process for contractors"
    ],
    deliverables: [
      "Contractor agreement and onboarding templates",
      "A configured records system",
      "A written summary of where your arrangements sit",
      "A clear list of what to take to a professional"
    ],
    who: "Businesses growing through contractors, and anyone treating long term contractors like staff.",
    get: "Clean paperwork, and an honest view of where the risk sits."
  },
  {
    id: "performance-reviews",
    slug: "performance-reviews",
    category: "People & Talent",
    title: "Performance Review and Goal Tracking System",
    tagline: "Feedback on a schedule rather than at breaking point",
    shortDesc: "We build a lightweight review cycle with clear expectations per role, goal tracking, and templates for one to ones, so feedback happens before a problem becomes a resignation.",
    longDesc: "Small companies usually skip reviews until someone is either leaving or being let go, which is the worst possible timing for a first honest conversation. We build something light enough to survive: written expectations for each role, a goal format people can actually track, a short review cycle, and one to one templates that give the conversation a shape. Small and regular beats thorough and annual.",
    badge: "DEVELOPMENT",
    iconName: "ClipboardCheck",
    packagesIncluded: ["Ultimate", "Solo"],
    features: [
      "Written expectations and a scorecard for each role",
      "A goal format the team can track without a new tool",
      "A review cycle scaled to your team size",
      "One to one templates so the conversation has structure",
      "Self assessment and manager assessment forms",
      "Records kept with your HR documentation"
    ],
    deliverables: [
      "Role scorecards and expectations",
      "A goal tracking setup",
      "Review and one to one templates",
      "A documented review calendar"
    ],
    who: "Teams past their first few hires where nobody has told anyone how they are doing.",
    get: "A cycle that surfaces problems while they are still small."
  },
];