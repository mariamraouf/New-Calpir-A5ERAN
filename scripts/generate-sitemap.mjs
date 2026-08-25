import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  { url: '/services/website-development', priority: '0.8' },
  { url: '/services/crm-sales', priority: '0.8' },
  { url: '/services/marketing-branding', priority: '0.8' },
  { url: '/services/operations-hr', priority: '0.8' },
  { url: '/services/ai-agents', priority: '0.8' },
  { url: '/services/ai-automation', priority: '0.8' },
  { url: '/services/ai-consulting', priority: '0.8' },
  { url: '/services/custom-apps', priority: '0.8' }
];

const postsFilePath = path.join(__dirname, '../src/content/posts.json');
let posts = [];
try {
  const postsRaw = fs.readFileSync(postsFilePath, 'utf8');
  posts = JSON.parse(postsRaw);
} catch (err) {
  console.error('Error reading posts.json for sitemap generation:', err);
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

staticRoutes.forEach((route) => {
  xml += `  <url>\n    <loc>${baseUrl}${route.url}</loc>\n    <priority>${route.priority}</priority>\n  </url>\n`;
});

posts.forEach((post) => {
  xml += `  <url>\n    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
  if (post.dateModified) {
    xml += `    <lastmod>${post.dateModified}</lastmod>\n`;
  }
  xml += `    <priority>0.8</priority>\n  </url>\n`;
});

xml += '</urlset>\n';

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${staticRoutes.length} static routes and ${posts.length} blog posts.`);