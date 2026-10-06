/**
 * Keeps api/_service-prices.ts honest.
 *
 * The checkout function needs the solo service prices, but a Vercel function
 * cannot reliably import across the repository into src/. Attempting it stopped
 * the entire checkout endpoint from loading, which took the plans and packages
 * down with it. So the data is mirrored into a sibling file inside api/, and
 * this script makes sure the mirror never drifts from the source.
 *
 *   node scripts/check-service-prices.mjs          check, exit 1 on drift
 *   node scripts/check-service-prices.mjs --write  regenerate the mirror
 *
 * The check runs as part of prebuild, so a price changed in
 * src/data/servicePricing.ts and not mirrored fails the build rather than
 * quietly charging the old amount.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = join(root, 'api/_service-prices.ts');

/** Read the two source files as text. They are TypeScript, so parse rather than import. */
const pricingSrc = readFileSync(join(root, 'src/data/servicePricing.ts'), 'utf8');
const catalogSrc = readFileSync(join(root, 'src/data/allServicesList.ts'), 'utf8');

const prices = {};
const body = pricingSrc.split('export const servicePricing')[1] || '';
const priceRe =
  /"([a-z0-9-]+)":\s*\{\s*usd:\s*(\d+),\s*gbp:\s*(\d+),\s*eur:\s*(\d+),\s*turnaround:\s*"([^"]*)"/g;
for (const m of body.matchAll(priceRe)) {
  prices[m[1]] = { usd: +m[2], gbp: +m[3], eur: +m[4], turnaround: m[5] };
}

const names = {};
const nameRe = /slug:\s*"([a-z0-9-]+)"[\s\S]{0,400}?title:\s*"((?:[^"\\]|\\.)*)"/g;
for (const m of catalogSrc.matchAll(nameRe)) {
  if (!(m[1] in names)) names[m[1]] = m[2].replace(/\\"/g, '"');
}

if (Object.keys(prices).length === 0) {
  console.error('check-service-prices: parsed zero services. The shape of servicePricing.ts changed.');
  process.exit(1);
}

const rows = Object.entries(prices)
  .map(([slug, p]) => {
    const name = names[slug] || slug;
    return (
      '  ' + JSON.stringify(slug) + ': { usd: ' + p.usd + ', gbp: ' + p.gbp +
      ', eur: ' + p.eur + ', turnaround: ' + JSON.stringify(p.turnaround) +
      ', name: ' + JSON.stringify(name) + ' },'
    );
  })
  .join('\n');

const header = [
  '/**',
  ' * Solo service prices, for the server.',
  ' *',
  ' * GENERATED. Do not edit by hand. The source of truth is',
  ' * src/data/servicePricing.ts and src/data/allServicesList.ts, and',
  ' * scripts/check-service-prices.mjs fails the build if this file drifts from',
  ' * them, so the page and the charge cannot disagree.',
  ' *',
  ' * It exists because a Vercel function cannot reliably import across the',
  ' * repository into src/. Trying to do so stopped the whole checkout endpoint',
  ' * from loading, which took every plan and package down with it, and the',
  ' * symptom was a generic "we could not open the payment page" rather than',
  ' * anything naming the real cause. A sibling file inside api/ always bundles.',
  ' *',
  ' * Regenerate with: node scripts/check-service-prices.mjs --write',
  ' */',
  '',
  'export interface ServicePrice {',
  '  usd: number;',
  '  gbp: number;',
  '  eur: number;',
  '  turnaround: string;',
  '  name: string;',
  '}',
  '',
  'export const SERVICE_PRICES: Record<string, ServicePrice> = {',
  '',
].join('\n');

const wanted = header + rows + '\n};\n';

if (process.argv.includes('--write')) {
  writeFileSync(TARGET, wanted);
  console.log(`check-service-prices: wrote ${Object.keys(prices).length} services to api/_service-prices.ts`);
  process.exit(0);
}

let current = '';
try {
  current = readFileSync(TARGET, 'utf8');
} catch {
  console.error('check-service-prices: api/_service-prices.ts is missing. Run with --write.');
  process.exit(1);
}

if (current !== wanted) {
  console.error(
    'check-service-prices: api/_service-prices.ts does not match src/data/servicePricing.ts.\n' +
      'The page would print one price and Stripe would charge another.\n' +
      'Run: node scripts/check-service-prices.mjs --write',
  );
  process.exit(1);
}

console.log(`check-service-prices: ${Object.keys(prices).length} services in step.`);
