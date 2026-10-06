/**
 * Every relative import inside api/ must end in .js, and must not leave api/.
 *
 * This exists because both rules were broken in production at once and neither
 * was visible until a customer clicked buy.
 *
 * package.json says "type": "module", and Vercel compiles each file in api/ to
 * plain .js without bundling it. So Node's own ESM loader resolves these
 * imports at runtime, and it demands an explicit extension and does not ship
 * anything outside api/. A bundler resolves both happily, which is exactly why
 * this survives every local build and every typecheck and only fails on the
 * deployed function, as a 500 with no message the customer can act on.
 *
 * What it caught the first time it was run:
 *   api/checkout.ts     imported ../src/data/servicePricing   -> all payment dead
 *   api/availability.ts imported ./_google                    -> booking dead
 *   api/book.ts         imported ./_google                    -> booking dead
 *
 * Runs in prebuild, so the build fails here rather than the site failing live.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const apiDir = join(root, 'api');

const IMPORT_RE = /\bfrom\s+['"](\.[^'"]*)['"]/g;

const problems = [];

for (const file of readdirSync(apiDir).filter((f) => f.endsWith('.ts'))) {
  const src = readFileSync(join(apiDir, file), 'utf8');
  const lines = src.split('\n');

  lines.forEach((line, i) => {
    for (const m of line.matchAll(IMPORT_RE)) {
      const spec = m[1];
      const where = `api/${file}:${i + 1}`;

      if (spec.startsWith('../')) {
        problems.push(
          `${where}  imports "${spec}", which is outside api/.\n` +
            '    Vercel does not ship it with the function. Copy what you need into\n' +
            '    a sibling file in api/ instead, with a check that keeps it in step.',
        );
      } else if (!spec.endsWith('.js')) {
        problems.push(
          `${where}  imports "${spec}" with no .js extension.\n` +
            `    Node's ESM loader will not resolve it at runtime. Write "${spec}.js".`,
        );
      }
    }
  });
}

if (problems.length) {
  console.error('\ncheck-api-imports: these would 500 on Vercel and build fine locally.\n');
  for (const p of problems) console.error('  ' + p + '\n');
  process.exit(1);
}

console.log('check-api-imports: every relative import in api/ is runtime safe.');
