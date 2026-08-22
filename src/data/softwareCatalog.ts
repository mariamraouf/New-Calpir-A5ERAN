export interface SoftwareItem {
  name: string;
  category: string;
  slug: string; // SimpleIcons slug
  domain?: string; // Official domain for fallback
  useCase: string;
  tag: string;
}

export const softwareCategoriesList = [
  "All",
  "CRM & Sales",
  "Web & Frontend",
  "Automation & APIs",
  "AI & Machine Learning",
  "Operations & PM",
  "Payment & Commerce",
  "Marketing & Social",
  "Communication & Support",
  "Cloud & Databases"
];

export const allSoftwareStack: SoftwareItem[] = [
  // CRM & Sales
  { name: "HubSpot", category: "CRM & Sales", slug: "hubspot", domain: "hubspot.com", useCase: "B2B sales pipelines, contact tracking and automated deal routing", tag: "Certified Partner" },
  { name: "GoHighLevel", category: "CRM & Sales", slug: "gohighlevel", domain: "gohighlevel.com", useCase: "All in one lead capture, SMS conversations and booking", tag: "Squad Pick" },
  { name: "Salesforce", category: "CRM & Sales", slug: "salesforce", domain: "salesforce.com", useCase: "Enterprise data models, custom objects and enterprise sync", tag: "Advanced" },
  { name: "Zoho CRM", category: "CRM & Sales", slug: "zoho", domain: "zoho.com", useCase: "Lean startup contact management and email synchronization", tag: "Proficient" },
  { name: "Pipedrive", category: "CRM & Sales", slug: "pipedrive", domain: "pipedrive.com", useCase: "Visual activity based sales pipelines and stage alerts", tag: "Expert" },
  { name: "Close", category: "CRM & Sales", slug: "close", domain: "close.com", useCase: "High velocity outbound calling and multi touch email sequences", tag: "Pro" },
  { name: "Copper", category: "CRM & Sales", slug: "copper", domain: "copper.com", useCase: "Google Workspace native pipeline management", tag: "Supported" },
  { name: "Attio", category: "CRM & Sales", slug: "attio", domain: "attio.com", useCase: "Next gen real time collaborative CRM for tech companies", tag: "Modern Pick" },
  { name: "Folk", category: "CRM & Sales", slug: "folk", domain: "folk.app", useCase: "Lightweight contact relationship manager", tag: "Lean" },
  { name: "Capsule CRM", category: "CRM & Sales", slug: "capsule", domain: "capsulecrm.com", useCase: "Simple straightforward sales tracking for small teams", tag: "Supported" },

  // Web & Frontend
  { name: "React", category: "Web & Frontend", slug: "react", domain: "react.dev", useCase: "Interactive user interfaces and high performance web apps", tag: "Core Stack" },
  { name: "Next.js", category: "Web & Frontend", slug: "nextdotjs", domain: "nextjs.org", useCase: "Sub second global load speed and edge server rendering", tag: "Core Stack" },
  { name: "TypeScript", category: "Web & Frontend", slug: "typescript", domain: "typescriptlang.org", useCase: "Type safe robust codebase with zero runtime surprises", tag: "Core Stack" },
  { name: "Tailwind CSS", category: "Web & Frontend", slug: "tailwindcss", domain: "tailwindcss.com", useCase: "Responsive bespoke design and modern styling", tag: "Core Stack" },
  { name: "Shopify", category: "Web & Frontend", slug: "shopify", domain: "shopify.com", useCase: "High volume online store setup and checkout flows", tag: "Expert" },
  { name: "Webflow", category: "Web & Frontend", slug: "webflow", domain: "webflow.com", useCase: "Visual custom websites with clean exportable code", tag: "Expert" },
  { name: "Framer", category: "Web & Frontend", slug: "framer", domain: "framer.com", useCase: "High converting animated landing pages", tag: "Squad Pick" },
  { name: "WordPress", category: "Web & Frontend", slug: "wordpress", domain: "wordpress.org", useCase: "Content heavy websites and custom headless setups", tag: "Mastery" },
  { name: "WooCommerce", category: "Web & Frontend", slug: "woocommerce", domain: "woocommerce.com", useCase: "Flexible open ecommerce setups and payment gateways", tag: "Expert" },
  { name: "Vite", category: "Web & Frontend", slug: "vite", domain: "vitejs.dev", useCase: "Ultra fast modern build tooling and live development", tag: "Core Stack" },
  { name: "Astro", category: "Web & Frontend", slug: "astro", domain: "astro.build", useCase: "Ultra lightweight content focused static websites", tag: "Advanced" },
  { name: "Gatsby", category: "Web & Frontend", slug: "gatsby", domain: "gatsbyjs.com", useCase: "Static site generation and CMS integrations", tag: "Supported" },
  { name: "Vue.js", category: "Web & Frontend", slug: "vuedotjs", domain: "vuejs.org", useCase: "Lightweight reactive frontend components", tag: "Proficient" },
  { name: "Nuxt", category: "Web & Frontend", slug: "nuxtdotjs", domain: "nuxt.com", useCase: "Universal Vue framework for scalable digital products", tag: "Advanced" },
  { name: "Svelte", category: "Web & Frontend", slug: "svelte", domain: "svelte.dev", useCase: "Blazing fast cybernetically enhanced web apps", tag: "Modern" },

  // Automation & APIs
  { name: "Make", category: "Automation & APIs", slug: "make", domain: "make.com", useCase: "Complex multi branch scenarios, routers and instant webhooks", tag: "Squad Favorite" },
  { name: "Zapier", category: "Automation & APIs", slug: "zapier", domain: "zapier.com", useCase: "Quick app triggers and instant cross platform connections", tag: "Expert" },
  { name: "n8n", category: "Automation & APIs", slug: "n8n", domain: "n8n.io", useCase: "Self hosted privacy first workflow automations", tag: "Advanced" },
  { name: "Postman", category: "Automation & APIs", slug: "postman", domain: "postman.com", useCase: "API endpoint testing, mocking and webhook debugging", tag: "Pro" },
  { name: "Swagger", category: "Automation & APIs", slug: "swagger", domain: "swagger.io", useCase: "Standardized API schema documentation", tag: "Standard" },
  { name: "GraphQL", category: "Automation & APIs", slug: "graphql", domain: "graphql.org", useCase: "Precise data querying for custom dashboards", tag: "Expert" },
  { name: "Python", category: "Automation & APIs", slug: "python", domain: "python.org", useCase: "Custom scraping, backend scripts and data cleaners", tag: "Core Stack" },
  { name: "Node.js", category: "Automation & APIs", slug: "nodedotjs", domain: "nodejs.org", useCase: "High speed event driven backend services", tag: "Core Stack" },
  { name: "Activepieces", category: "Automation & APIs", slug: "activepieces", domain: "activepieces.com", useCase: "Open source automation builder for internal workflows", tag: "Supported" },
  { name: "Pipedream", category: "Automation & APIs", slug: "pipedream", domain: "pipedream.com", useCase: "Serverless code and workflow pipelines for developers", tag: "Advanced" },

  // AI & Machine Learning
  { name: "OpenAI", category: "AI & Machine Learning", slug: "openai", domain: "openai.com", useCase: "GPT4o models, function calling and smart cognitive tasks", tag: "Core Stack" },
  { name: "Anthropic Claude", category: "AI & Machine Learning", slug: "anthropic", domain: "anthropic.com", useCase: "Deep reasoning, long context analysis and brand voice", tag: "Core Stack" },
  { name: "Pinecone", category: "AI & Machine Learning", slug: "pinecone", domain: "pinecone.io", useCase: "High speed vector database for zero hallucination RAG", tag: "Expert" },
  { name: "LangChain", category: "AI & Machine Learning", slug: "langchain", domain: "langchain.com", useCase: "Chained reasoning agents and tool orchestration", tag: "Advanced" },
  { name: "Hugging Face", category: "AI & Machine Learning", slug: "huggingface", domain: "huggingface.co", useCase: "Open source LLM embeddings and specialized models", tag: "Pro" },
  { name: "Ollama", category: "AI & Machine Learning", slug: "ollama", domain: "ollama.com", useCase: "Private local LLM deployments with complete data security", tag: "Advanced" },
  { name: "Mistral AI", category: "AI & Machine Learning", slug: "mistral", domain: "mistral.ai", useCase: "Efficient multilingual open weights models", tag: "Supported" },
  { name: "ElevenLabs", category: "AI & Machine Learning", slug: "elevenlabs", domain: "elevenlabs.io", useCase: "Hyper realistic AI voice synthesis for videos and phone bots", tag: "Squad Pick" },
  { name: "Midjourney", category: "AI & Machine Learning", slug: "midjourney", domain: "midjourney.com", useCase: "Visual creative generation and realistic brand graphics", tag: "Creative" },
  { name: "Runway", category: "AI & Machine Learning", slug: "runway", domain: "runwayml.com", useCase: "Generative video effects and animated product previews", tag: "Creative" },
  { name: "Perplexity", category: "AI & Machine Learning", slug: "perplexity", domain: "perplexity.ai", useCase: "Real time AI research and source backed data gathering", tag: "Pro" },
  { name: "Replicate", category: "AI & Machine Learning", slug: "replicate", domain: "replicate.com", useCase: "Cloud deployment of custom open source AI models", tag: "Developer" },

  // Operations & PM
  { name: "ClickUp", category: "Operations & PM", slug: "clickup", domain: "clickup.com", useCase: "Team task boards, client onboarding pipelines and tracking", tag: "Squad Mastery" },
  { name: "Notion", category: "Operations & PM", slug: "notion", domain: "notion.so", useCase: "Internal company wikis, SOP libraries and resource vaults", tag: "Squad Mastery" },
  { name: "Linear", category: "Operations & PM", slug: "linear", domain: "linear.app", useCase: "Lightning fast software development and sprint planning", tag: "Pro" },
  { name: "Airtable", category: "Operations & PM", slug: "airtable", domain: "airtable.com", useCase: "Relational cloud bases, automated views and intake forms", tag: "Expert" },
  { name: "Asana", category: "Operations & PM", slug: "asana", domain: "asana.com", useCase: "Project timelines and multi team workflow coordination", tag: "Supported" },
  { name: "Monday.com", category: "Operations & PM", slug: "mondaydotcom", domain: "monday.com", useCase: "Visual team collaboration and resource management", tag: "Supported" },
  { name: "Trello", category: "Operations & PM", slug: "trello", domain: "trello.com", useCase: "Simple Kanban boards for lean team workflows", tag: "Supported" },
  { name: "Jira", category: "Operations & PM", slug: "jira", domain: "atlassian.com", useCase: "Enterprise ticket tracking and cross team governance", tag: "Enterprise" },
  { name: "Basecamp", category: "Operations & PM", slug: "basecamp", domain: "basecamp.com", useCase: "All in one asynchronous client communication and boards", tag: "Supported" },
  { name: "Coda", category: "Operations & PM", slug: "coda", domain: "coda.io", useCase: "Interactive team documents that act like mini apps", tag: "Advanced" },
  { name: "DocuSign", category: "Operations & PM", slug: "docusign", domain: "docusign.com", useCase: "Legally binding automated client contract signatures", tag: "Standard" },
  { name: "PandaDoc", category: "Operations & PM", slug: "pandadoc", domain: "pandadoc.com", useCase: "Interactive proposals, contract templates and quote signing", tag: "Pro" },
  { name: "Deel", category: "Operations & PM", slug: "deel", domain: "deel.com", useCase: "Global contractor onboarding and international payroll", tag: "Squad Pick" },
  { name: "Gusto", category: "Operations & PM", slug: "gusto", domain: "gusto.com", useCase: "Automated payroll, tax filing and benefits administration", tag: "Standard" },
  { name: "Rippling", category: "Operations & PM", slug: "rippling", domain: "rippling.com", useCase: "Unified IT, HR and payroll infrastructure", tag: "Advanced" },

  // Payment & Commerce
  { name: "Stripe", category: "Payment & Commerce", slug: "stripe", domain: "stripe.com", useCase: "Global credit card processing, billing and subscriptions", tag: "Core Stack" },
  { name: "Wise", category: "Payment & Commerce", slug: "wise", domain: "wise.com", useCase: "Low fee multi currency business accounts and bank wires", tag: "Squad Pick" },
  { name: "PayPal", category: "Payment & Commerce", slug: "paypal", domain: "paypal.com", useCase: "Universal consumer payment gateway backup", tag: "Standard" },
  { name: "QuickBooks", category: "Payment & Commerce", slug: "quickbooks", domain: "quickbooks.intuit.com", useCase: "Accounting sync, tax tracking and automated ledger updates", tag: "Standard" },
  { name: "Xero", category: "Payment & Commerce", slug: "xero", domain: "xero.com", useCase: "Cloud accounting and real time bank reconciliation", tag: "Standard" },
  { name: "Klarna", category: "Payment & Commerce", slug: "klarna", domain: "klarna.com", useCase: "Buy now pay later consumer checkout options", tag: "Ecommerce" },
  { name: "Square", category: "Payment & Commerce", slug: "square", domain: "squareup.com", useCase: "Point of sale and physical hardware payment processing", tag: "Supported" },
  { name: "Paddle", category: "Payment & Commerce", slug: "paddle", domain: "paddle.com", useCase: "Merchant of record for SaaS global tax compliance", tag: "SaaS Pro" },
  { name: "Lemon Squeezy", category: "Payment & Commerce", slug: "lemonsqueezy", domain: "lemonsqueezy.com", useCase: "Effortless digital product sales and license key billing", tag: "Squad Pick" },
  { name: "Revolut", category: "Payment & Commerce", slug: "revolut", domain: "revolut.com", useCase: "Modern business banking and virtual corporate cards", tag: "Squad Pick" },

  // Marketing & Social
  { name: "Google Analytics", category: "Marketing & Social", slug: "googleanalytics", domain: "analytics.google.com", useCase: "GA4 conversion event tracking and visitor journey funnels", tag: "Standard" },
  { name: "Google Search Console", category: "Marketing & Social", slug: "google", domain: "search.google.com", useCase: "Instant page indexing, sitemap logs and organic keywords", tag: "Core Stack" },
  { name: "Google Ads", category: "Marketing & Social", slug: "googleads", domain: "ads.google.com", useCase: "High intent search ads and retargeting campaigns", tag: "Expert" },
  { name: "Meta", category: "Marketing & Social", slug: "meta", domain: "meta.com", useCase: "Facebook and Instagram advertising and pixel configuration", tag: "Expert" },
  { name: "LinkedIn", category: "Marketing & Social", slug: "linkedin", domain: "linkedin.com", useCase: "B2B executive presence and targeted inbound lead generation", tag: "Squad Pick" },
  { name: "TikTok", category: "Marketing & Social", slug: "tiktok", domain: "tiktok.com", useCase: "Organic viral video distribution and TikTok Shop setup", tag: "Creative" },
  { name: "YouTube", category: "Marketing & Social", slug: "youtube", domain: "youtube.com", useCase: "Long form authority video channels and video SEO", tag: "Creative" },
  { name: "X (Twitter)", category: "Marketing & Social", slug: "x", domain: "x.com", useCase: "Tech founder branding and direct networking", tag: "Pro" },
  { name: "Klaviyo", category: "Marketing & Social", slug: "klaviyo", domain: "klaviyo.com", useCase: "Ecommerce email flows and smart abandoned cart triggers", tag: "Mastery" },
  { name: "ActiveCampaign", category: "Marketing & Social", slug: "activecampaign", domain: "activecampaign.com", useCase: "Advanced behavioral email automations and scoring", tag: "Expert" },
  { name: "Mailchimp", category: "Marketing & Social", slug: "mailchimp", domain: "mailchimp.com", useCase: "Simple newsletter broadcasts and subscriber lists", tag: "Standard" },
  { name: "Brevo (Sendinblue)", category: "Marketing & Social", slug: "brevo", domain: "brevo.com", useCase: "Transactional email delivery and budget friendly SMS", tag: "Pro" },
  { name: "Buffer", category: "Marketing & Social", slug: "buffer", domain: "buffer.com", useCase: "Scheduled multi channel social publishing", tag: "Supported" },
  { name: "Hootsuite", category: "Marketing & Social", slug: "hootsuite", domain: "hootsuite.com", useCase: "Social listening and enterprise profile management", tag: "Enterprise" },
  { name: "Ahrefs", category: "Marketing & Social", slug: "ahrefs", domain: "ahrefs.com", useCase: "Competitor backlink research and SEO keyword audits", tag: "Pro" },
  { name: "Semrush", category: "Marketing & Social", slug: "semrush", domain: "semrush.com", useCase: "Domain authority tracking and search visibility metrics", tag: "Pro" },
  { name: "Canva", category: "Marketing & Social", slug: "canva", domain: "canva.com", useCase: "Fast social media templates and marketing collateral", tag: "Standard" },
  { name: "Figma", category: "Marketing & Social", slug: "figma", domain: "figma.com", useCase: "High fidelity UI design, brand identities and vector kits", tag: "Core Stack" },
  { name: "Adobe Premiere", category: "Marketing & Social", slug: "adobepremierepro", domain: "adobe.com", useCase: "High retention 4K video editing and cinematic trailers", tag: "Creative" },
  { name: "CapCut", category: "Marketing & Social", slug: "capcut", domain: "capcut.com", useCase: "Viral vertical reels with kinetic subtitles and sound design", tag: "Squad Pick" },

  // Communication & Support
  { name: "Slack", category: "Communication & Support", slug: "slack", domain: "slack.com", useCase: "Internal team channels and automated real time alert hooks", tag: "Squad Standard" },
  { name: "Discord", category: "Communication & Support", slug: "discord", domain: "discord.com", useCase: "Community hubs and customer VIP member channels", tag: "Community" },
  { name: "WhatsApp", category: "Communication & Support", slug: "whatsapp", domain: "whatsapp.com", useCase: "Two way client messaging and AI auto responder routing", tag: "Global Standard" },
  { name: "Telegram", category: "Communication & Support", slug: "telegram", domain: "telegram.org", useCase: "Instant group chats and automated broadcast bots", tag: "Supported" },
  { name: "Google Workspace", category: "Communication & Support", slug: "google", domain: "workspace.google.com", useCase: "Enterprise business email and Drive cloud storage", tag: "Core Stack" },
  { name: "Microsoft 365", category: "Communication & Support", slug: "microsoft", domain: "microsoft.com", useCase: "Corporate email setup, Teams and Office suite", tag: "Enterprise" },
  { name: "Intercom", category: "Communication & Support", slug: "intercom", domain: "intercom.com", useCase: "Modern website live chat, AI support and onboarding tours", tag: "Pro" },
  { name: "Zendesk", category: "Communication & Support", slug: "zendesk", domain: "zendesk.com", useCase: "Multi department ticketing system and SLA tracking", tag: "Enterprise" },
  { name: "Crisp", category: "Communication & Support", slug: "crisp", domain: "crisp.chat", useCase: "Lightweight live chat and visitor tracking widget", tag: "Squad Pick" },
  { name: "Calendly", category: "Communication & Support", slug: "calendly", domain: "calendly.com", useCase: "Frictionless calendar booking and automatic reminders", tag: "Squad Standard" },
  { name: "Cal.com", category: "Communication & Support", slug: "calcom", domain: "cal.com", useCase: "Custom open source scheduling with enterprise routing", tag: "Pro" },
  { name: "Zoom", category: "Communication & Support", slug: "zoom", domain: "zoom.us", useCase: "HD video calls, webinars and automated recording links", tag: "Standard" },
  { name: "Google Meet", category: "Communication & Support", slug: "googlemeet", domain: "meet.google.com", useCase: "Instant browser based strategy sessions", tag: "Squad Standard" },
  { name: "Loom", category: "Communication & Support", slug: "loom", domain: "loom.com", useCase: "Async video walkthroughs and personalized client demos", tag: "Squad Standard" },
  { name: "Twilio", category: "Communication & Support", slug: "twilio", domain: "twilio.com", useCase: "Programmable SMS gateways and automated phone routing", tag: "Developer" },

  // Cloud & Databases
  { name: "Supabase", category: "Cloud & Databases", slug: "supabase", domain: "supabase.com", useCase: "Instant PostgreSQL database, auth and real time listeners", tag: "Squad Pick" },
  { name: "PostgreSQL", category: "Cloud & Databases", slug: "postgresql", domain: "postgresql.org", useCase: "Battle tested relational database architecture", tag: "Core Stack" },
  { name: "Vercel", category: "Cloud & Databases", slug: "vercel", domain: "vercel.com", useCase: "Global edge CDN hosting and automatic GitHub deployments", tag: "Core Stack" },
  { name: "Cloudflare", category: "Cloud & Databases", slug: "cloudflare", domain: "cloudflare.com", useCase: "High speed DNS routing, DDoS protection and SSL certificates", tag: "Core Stack" },
  { name: "AWS", category: "Cloud & Databases", slug: "amazonwebservices", domain: "aws.amazon.com", useCase: "Scalable cloud servers, S3 storage and infrastructure", tag: "Enterprise" },
  { name: "Google Cloud", category: "Cloud & Databases", slug: "googlecloud", domain: "cloud.google.com", useCase: "BigQuery analytics and cloud hosting services", tag: "Enterprise" },
  { name: "DigitalOcean", category: "Cloud & Databases", slug: "digitalocean", domain: "digitalocean.com", useCase: "Simple cost effective cloud droplets and managed databases", tag: "Pro" },
  { name: "Redis", category: "Cloud & Databases", slug: "redis", domain: "redis.io", useCase: "In memory caching for lightning fast data retrieval", tag: "Core Stack" },
  { name: "MongoDB", category: "Cloud & Databases", slug: "mongodb", domain: "mongodb.com", useCase: "Flexible NoSQL document database for rapid prototypes", tag: "Supported" },
  { name: "Firebase", category: "Cloud & Databases", slug: "firebase", domain: "firebase.google.com", useCase: "Real time mobile and web backend services", tag: "Supported" },
  { name: "GitHub", category: "Cloud & Databases", slug: "github", domain: "github.com", useCase: "Source code repository ownership and CI/CD pipelines", tag: "Core Stack" },
  { name: "Docker", category: "Cloud & Databases", slug: "docker", domain: "docker.com", useCase: "Containerized environments for consistent deployments", tag: "Pro" }
];