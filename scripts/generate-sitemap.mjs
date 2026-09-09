import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadServices } from './loadServices.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://www.calpir.com';

const staticRoutes = [
  { url: '/', priority: '1.0' },
  { url: '/packages', priority: '0.9' },
  { url: '/services', priority: '0.9' },
  { url: '/solo-services', priority: '0.8' },
  { url: '/case-studies', priority: '0.8' },
  { url: '/assessment', priority: '0.8' },
  { url: '/software-stack', priority: '0.7' },
  { url: '/about', priority: '0.7' },
  { url: '/contact', priority: '0.7' },
  { url: '/blog', priority: '0.7' },
];

// Service routes are derived from the catalog rather than hand listed, so the
// sitemap can never contain a slug the router does not serve. A stale
// /services/marketing-branding entry used to sit here and returned the 404 page.
const services = await loadServices();
const serviceRoutes = services.map((s) => ({ url: `/services/${s.slug}`, priority: '0.8' }));

const postsFilePath = path.join(__dirname, '../src/content/posts.json');
let posts = [];
try {
  posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));
} catch (err) {
  console.error('Error reading posts.json for sitemap generation:', err);
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

[...staticRoutes, ...serviceRoutes].forEach((route) => {
  xml += `  <url>\n    <loc>${baseUrl}${route.url}</loc>\n    <priority>${route.priority}</priority>\n  </url>\n`;
});

posts.forEach((post) => {
  xml += `  <url>\n    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
  if (post.dateModified) xml += `    <lastmod>${post.dateModified}</lastmod>\n`;
  xml += `    <priority>0.8</priority>\n  </url>\n`;
});

xml += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log(
  `Generated public/sitemap.xml: ${staticRoutes.length} static, ${serviceRoutes.length} services, ${posts.length} posts.`
);
