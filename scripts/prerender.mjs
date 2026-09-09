/**
 * Prerender every route to static HTML after `vite build`.
 *
 * Why this exists: calpir.com is a client side React app. Before this script,
 * every URL served the same index.html, with the homepage <title>, no <h1> and
 * 55 characters of body text. Google crawls raw HTML on its first pass, saw 26
 * identical empty pages, collapsed them into one, and indexed only the homepage.
 *
 * This writes a real HTML file per route containing that route's own title,
 * description, canonical, Open Graph tags, JSON LD and readable body content.
 * React still takes over on load: main.tsx uses createRoot, which replaces the
 * container's children, so there is no hydration mismatch to worry about.
 *
 * Vercel checks the filesystem before applying the SPA rewrite in vercel.json,
 * so these files are served in preference to the fallback.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadServices } from './loadServices.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BASE = 'https://www.calpir.com';
const OG_FALLBACK = `${BASE}/logo-with-transparent-background.png`;

/* ------------------------------------------------------------------ */
/* Load data                                                           */
/* ------------------------------------------------------------------ */

const posts = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/posts.json'), 'utf8'));
const blocksBySlug = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'src/content/articleBlocks.json'), 'utf8')
);

/* ------------------------------------------------------------------ */
/* HTML helpers                                                        */
/* ------------------------------------------------------------------ */

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const attr = (s = '') => esc(s).replace(/\n/g, ' ');

/** Render an inline token array to HTML. */
const inline = (toks = []) =>
  toks
    .map((t) => {
      const text = esc(t.s);
      if (t.h) {
        const ext = !t.h.startsWith('/');
        return `<a href="${attr(t.h)}"${ext ? ' rel="noopener noreferrer"' : ''}>${text}</a>`;
      }
      if (t.b) return `<strong>${text}</strong>`;
      return text;
    })
    .join('');

/** Render the article block model to semantic HTML for crawlers. */
function blocksToHtml(blocks) {
  const out = [];
  for (const b of blocks) {
    switch (b.t) {
      case 'lead':
      case 'p':
        out.push(`<p>${inline(b.x)}</p>`);
        break;
      case 'note':
        out.push(`<p><small>${inline(b.x)}</small></p>`);
        break;
      case 'h2':
        out.push(`<h2>${inline(b.x)}</h2>`);
        break;
      case 'h3':
        out.push(`<h3>${inline(b.x)}</h3>`);
        break;
      case 'ul':
        out.push(`<ul>${b.items.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`);
        break;
      case 'ol':
        out.push(`<ol>${b.items.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`);
        break;
      case 'table': {
        const head = `<tr>${(b.head || []).map((h) => `<th>${esc(h)}</th>`).join('')}</tr>`;
        const rows = (b.rows || [])
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
          .join('');
        out.push(`<table><thead>${head}</thead><tbody>${rows}</tbody></table>`);
        break;
      }
      case 'faq':
        out.push('<h2>Frequently asked questions</h2>');
        for (const f of b.items) {
          out.push(`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`);
        }
        break;
      case 'sources':
        out.push('<h2>Sources</h2><ul>');
        for (const s of b.items) {
          out.push(
            s.url
              ? `<li><a href="${attr(s.url)}" rel="noopener noreferrer">${esc(s.label)}</a>${
                  s.note ? `, ${esc(s.note)}` : ''
                }</li>`
              : `<li>${esc(s.label)}</li>`
          );
        }
        out.push('</ul>');
        break;
      default:
        break;
    }
  }
  return out.join('\n');
}

/* ------------------------------------------------------------------ */
/* Route table                                                         */
/* ------------------------------------------------------------------ */

const nav = `
<nav aria-label="Primary">
  <a href="/">Home</a>
  <a href="/packages">Packages</a>
  <a href="/services">Services</a>
  <a href="/solo-services">Solo services</a>
  <a href="/software-stack">Software stack</a>
  <a href="/case-studies">Case studies</a>
  <a href="/assessment">Assessment</a>
  <a href="/blog">Blog</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`;

function page({ path: p, title, description, h1, body, image, jsonld = [], isPost = false }) {
  return { path: p, title, description, h1, body, image, jsonld, isPost };
}

async function buildRoutes() {
  const services = await loadServices();
  const routes = [];

  routes.push(
    page({
      path: '/',
      title: 'Calpir | Complete Turnkey Business Setup and AI Systems',
      description:
        'Calpir builds and launches your entire company infrastructure: legal foundation, brand, website, domain, email, phone, CRM, payments, payroll, SOPs, and AI systems.',
      h1: 'Complete turnkey business setup and AI systems',
      body: `<p>Calpir builds and launches your entire company infrastructure: legal foundation, brand, website, domain, email, phone, CRM, payments, payroll, SOPs and AI systems.</p>
<h2>What we build</h2>
<ul>${services
        .map((s) => `<li><a href="/services/${s.slug}">${esc(s.title)}</a>. ${esc(s.shortDesc)}</li>`)
        .join('')}</ul>
<h2>Recent writing</h2>
<ul>${posts
        .slice(0, 8)
        .map((pp) => `<li><a href="/blog/${pp.slug}">${esc(pp.title)}</a></li>`)
        .join('')}</ul>`,
    })
  );

  const statics = [
    ['/packages', 'Packages & Pricing | Calpir', 'Fixed scope launch packages that take a business from idea to running infrastructure in 7 to 28 days.', 'Packages and pricing'],
    ['/services', 'Services | Calpir', 'Everything Calpir builds: websites, CRM and sales systems, marketing, operations, AI agents and custom apps.', 'Services'],
    ['/solo-services', 'Solo Services | Calpir', 'Book individual services on their own, website, CRM, automation or AI agents, without a full package.', 'Solo services'],
    ['/software-stack', 'Software Stack | Calpir', 'The tools Calpir builds on and why: CRM, automation, hosting and AI infrastructure chosen to stay cheap to run.', 'Software stack'],
    ['/case-studies', 'Case Studies | Calpir', 'Real builds and real timelines: what we shipped for each client and what it changed for them.', 'Case studies'],
    ['/assessment', 'Free Business Assessment | Calpir', 'Answer a few questions and get a clear picture of which parts of your business are ready to automate.', 'Free business assessment'],
    ['/about', 'About Calpir | Calpir', 'Who we are, how we work, and why we build entire business systems instead of standalone websites.', 'About Calpir'],
    ['/contact', 'Contact Calpir | Book Free Strategy Call', 'Get in touch with the Calpir team or book a live 30 minute consultation.', 'Contact Calpir'],
  ];

  for (const [p, title, description, h1] of statics) {
    routes.push(
      page({
        path: p,
        title,
        description,
        h1,
        body: `<p>${esc(description)}</p>
<h2>Services</h2>
<ul>${services.map((s) => `<li><a href="/services/${s.slug}">${esc(s.title)}</a></li>`).join('')}</ul>`,
      })
    );
  }

  // Blog index
  routes.push(
    page({
      path: '/blog',
      title: 'Blog and Playbooks | Calpir',
      description:
        'Founder playbooks on complete business setup, legal structures, CRM pipeline design, automation, and AI systems.',
      h1: 'Insights',
      body: `<p>In depth playbooks, technical blueprints and operational guides from Calpir.</p>
<ul>${posts
        .map(
          (pp) =>
            `<li><a href="/blog/${pp.slug}">${esc(pp.title)}</a>. ${esc(pp.description)}</li>`
        )
        .join('')}</ul>`,
    })
  );

  // Service detail pages. All of them, including the five that were missing
  // from the sitemap.
  for (const s of services) {
    routes.push(
      page({
        path: `/services/${s.slug}`,
        title: `${s.title} | Calpir`,
        description: s.shortDesc,
        h1: s.title,
        body: `<p>${esc(s.tagline)}</p>
<p>${esc(s.shortDesc)}</p>
<p>${esc(s.longDesc)}</p>
<h2>What is included</h2>
<ul>${(s.features || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
<h2>What you receive</h2>
<ul>${(s.deliverables || []).map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
<h2>Who this is for</h2>
<p>${esc(s.who)}</p>
<h2>What you get</h2>
<p>${esc(s.get)}</p>`,
        jsonld: [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title,
            description: s.shortDesc,
            serviceType: s.category,
            url: `${BASE}/services/${s.slug}`,
            provider: { '@id': `${BASE}/#organization` },
            areaServed: 'US',
          },
        ],
      })
    );
  }

  // Blog posts
  for (const post of posts) {
    const blocks = blocksBySlug[post.slug] || [];
    const faqBlock = blocks.find((b) => b.t === 'faq');
    const imageUrl = post.image.startsWith('http') ? post.image : `${BASE}${post.image}`;
    const jsonld = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: imageUrl,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@id': `${BASE}/#organization` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
      },
    ];
    if (faqBlock) {
      jsonld.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }
    routes.push(
      page({
        path: `/blog/${post.slug}`,
        title: post.metaTitle || `${post.title} | Calpir`,
        description: post.description,
        h1: post.title,
        image: imageUrl,
        isPost: true,
        body: `<p><img src="${attr(post.image)}" alt="${attr(post.imageAlt)}" width="1200" height="630" /></p>
<p>By ${esc(post.author)}. Published ${esc(post.datePublished)}. ${esc(post.readingTime)} read.</p>
${blocksToHtml(blocks)}`,
        jsonld,
      })
    );
  }

  return routes;
}

/* ------------------------------------------------------------------ */
/* Emit                                                                */
/* ------------------------------------------------------------------ */

function render(template, r) {
  const canonical = `${BASE}${r.path === '/' ? '/' : r.path}`;
  const image = r.image || OG_FALLBACK;
  let html = template;

  // title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);

  // description: replace if present, otherwise insert after the title
  if (/<meta\s+name="description"[^>]*>/.test(html)) {
    html = html.replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${attr(r.description)}" />`
    );
  } else {
    html = html.replace(
      '</title>',
      `</title>\n    <meta name="description" content="${attr(r.description)}" />`
    );
  }

  const swap = (re, replacement) => {
    if (re.test(html)) html = html.replace(re, replacement);
    else html = html.replace('</head>', `    ${replacement}\n  </head>`);
  };

  swap(/<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${attr(r.title)}" />`);
  swap(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${attr(r.description)}" />`
  );
  swap(/<meta\s+property="og:image"[^>]*>/, `<meta property="og:image" content="${attr(image)}" />`);
  swap(/<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${attr(r.title)}" />`);
  swap(
    /<meta\s+name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${attr(r.description)}" />`
  );
  swap(/<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${attr(image)}" />`);

  // canonical and og:url are absent from the template, so always insert
  html = html.replace(
    '</head>',
    `    <link rel="canonical" href="${attr(canonical)}" />\n` +
      `    <meta property="og:url" content="${attr(canonical)}" />\n` +
      (r.jsonld || [])
        .map(
          (j) =>
            `    <script type="application/ld+json">${JSON.stringify(j).replace(
              /</g,
              '\\u003c'
            )}</script>\n`
        )
        .join('') +
      '  </head>'
  );

  // Mark the head tags that react-helmet-async re-renders on mount. main.tsx
  // removes every [data-prerendered] tag from the head before createRoot, so a
  // browser ends up with exactly one of each and a crawler that runs no
  // JavaScript still sees them in the raw HTML.
  //
  // Deliberately NOT marked: og:site_name and og:image:alt, which Helmet never
  // emits, and the Organization, WebSite and Service JSON LD, which Helmet does
  // not manage. Marking those would delete them client side.
  html = html.replace(
    /<(meta|link)\s+(?=[^>]*(?:name="description"|rel="canonical"|property="og:(?:title|description|image|url|type)"|name="twitter:(?:card|title|description|image)"))/g,
    '<$1 data-prerendered="1" '
  );
  if (r.isPost) {
    html = html.replace(
      /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"(?:BlogPosting|FAQPage)")/g,
      '<script data-prerendered="1" type="application/ld+json">$1'
    );
  }

  // body content for crawlers. React replaces this on mount.
  const content = `<div id="root"><main><h1>${esc(r.h1)}</h1>\n${r.body}\n${nav}</main></div>`;
  html = html.replace(/<div id="root"><\/div>/, content);

  return html;
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('prerender: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const routes = await buildRoutes();

  const seenTitles = new Map();
  for (const r of routes) {
    const html = render(template, r);
    const outDir = r.path === '/' ? DIST : path.join(DIST, r.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    if (seenTitles.has(r.title)) {
      console.warn(`prerender: WARNING duplicate title "${r.title}" on ${r.path} and ${seenTitles.get(r.title)}`);
    }
    seenTitles.set(r.title, r.path);
  }

  console.log(`prerender: wrote ${routes.length} static HTML files with unique titles and canonicals.`);
}

main().catch((err) => {
  console.error('prerender failed:', err);
  process.exit(1);
});
