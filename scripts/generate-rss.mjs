import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.calpir.com';
const feedTitle = 'Calpir Blog';
const feedDescription =
  'Practical guides on launching a business, CRM and sales systems, AI agents and automation, from the Calpir team.';

const escapeXml = (unsafe = '') =>
  String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// RSS requires RFC-822 dates. posts.json stores plain YYYY-MM-DD.
const toRfc822 = (dateString) => {
  const d = new Date(`${dateString}T09:00:00Z`);
  return Number.isNaN(d.getTime()) ? new Date(0).toUTCString() : d.toUTCString();
};

const postsFilePath = path.join(__dirname, '../src/content/posts.json');
let posts = [];
try {
  posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));
} catch (err) {
  console.error('Error reading posts.json for RSS generation:', err);
}

// Newest first — feed readers and LinkedIn expect reverse-chronological order.
const sorted = [...posts].sort(
  (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
);

const lastBuild = sorted.length ? toRfc822(sorted[0].datePublished) : new Date().toUTCString();

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
xml += '  <channel>\n';
xml += `    <title>${escapeXml(feedTitle)}</title>\n`;
xml += `    <link>${baseUrl}/blog</link>\n`;
xml += `    <description>${escapeXml(feedDescription)}</description>\n`;
xml += '    <language>en</language>\n';
xml += `    <lastBuildDate>${lastBuild}</lastBuildDate>\n`;
xml += `    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />\n`;

sorted.forEach((post) => {
  const url = `${baseUrl}/blog/${post.slug}`;
  const image = post.image?.startsWith('http') ? post.image : `${baseUrl}${post.image || ''}`;
  xml += '    <item>\n';
  xml += `      <title>${escapeXml(post.title)}</title>\n`;
  xml += `      <link>${url}</link>\n`;
  xml += `      <guid isPermaLink="true">${url}</guid>\n`;
  xml += `      <description>${escapeXml(post.description)}</description>\n`;
  xml += `      <pubDate>${toRfc822(post.datePublished)}</pubDate>\n`;
  if (post.author) xml += `      <author>noreply@calpir.com (${escapeXml(post.author)})</author>\n`;
  if (post.image) xml += `      <enclosure url="${escapeXml(image)}" type="image/png" />\n`;
  xml += '    </item>\n';
});

xml += '  </channel>\n</rss>\n';

fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), xml, 'utf8');
console.log(`Generated public/rss.xml with ${sorted.length} blog posts.`);
