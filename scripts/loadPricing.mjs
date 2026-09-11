/**
 * Load src/data/servicePricing.ts inside a plain Node script by stripping the
 * TypeScript. Same approach as loadServices.mjs, and for the same reason: the
 * prerendered pages should read the real prices rather than a second copy that
 * drifts.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

export async function loadPricing() {
  const tsPath = path.join(ROOT, 'src/data/servicePricing.ts');
  let src = fs.readFileSync(tsPath, 'utf8');
  src = src.replace(/export type Currency[^;]*;/, '');
  src = src.replace(/export interface ServicePricing[\s\S]*?\n\}/, '');
  src = src.replace(/:\s*\{ code: Currency; symbol: string; label: string \}\[\]\s*=/, ' =');
  src = src.replace(/:\s*Record<string, ServicePricing>\s*=/, ' =');
  src = src.replace(/export const formatPrice[\s\S]*$/, '');
  const dir = path.join(ROOT, 'node_modules', '.cache');
  fs.mkdirSync(dir, { recursive: true });
  const tmp = path.join(dir, `calpir-pricing-${Date.now()}.mjs`);
  fs.writeFileSync(tmp, src, 'utf8');
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return mod.servicePricing || {};
  } finally {
    try {
      fs.rmSync(tmp, { force: true });
    } catch {
      /* ignore */
    }
  }
}
