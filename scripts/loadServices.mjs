/**
 * Load the service catalog from src/data/allServicesList.ts inside a plain Node
 * script. The file is pure data with no imports, so stripping the TypeScript
 * annotations and importing it as ESM is safe, and it keeps the sitemap and the
 * prerendered pages in sync with the app instead of duplicating the list.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

export async function loadServices() {
  const tsPath = path.join(ROOT, 'src/data/allServicesList.ts');
  let src = fs.readFileSync(tsPath, 'utf8');
  src = src.replace(/export interface[\s\S]*?\n\}\n/, '');
  src = src.replace(/:\s*ServiceDefinition\[\]\s*=/, ' =');
  src = src.replace(/:\s*\("Starter"[^)]*\)\[\]/g, '');
  const dir = path.join(ROOT, 'node_modules', '.cache');
  fs.mkdirSync(dir, { recursive: true });
  const tmp = path.join(dir, `calpir-services-${Date.now()}.mjs`);
  fs.writeFileSync(tmp, src, 'utf8');
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return mod.allServicesCatalog || [];
  } finally {
    // Best effort cleanup. Some sandboxed and container filesystems refuse
    // unlink inside a mounted volume, and a failure to tidy a scratch file is
    // never a reason to fail the build.
    try {
      fs.rmSync(tmp, { force: true });
    } catch {
      /* ignore */
    }
  }
}
