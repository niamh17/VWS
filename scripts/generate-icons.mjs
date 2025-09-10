#!/usr/bin/env node
/**
 * Generates required PNG favicon derivatives from /public/favicon.png if missing.
 * Skips generation if target already exists. Requires sharp (added as dep).
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SIZES = [16,32,48,180,192,512];
const root = process.cwd();
const pub = path.join(root, 'public');
const source = path.join(pub, 'favicon.png');

if (!fs.existsSync(source)) {
  console.error('[generate-icons] Source favicon.png missing at public/');
  process.exit(0); // non-fatal
}

(async () => {
  const input = sharp(source);
  const meta = await input.metadata();
  const maxDim = Math.min(meta.width || 0, meta.height || 0);

  for (const size of SIZES) {
    const targetName = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
    const target = path.join(pub, targetName);
    if (fs.existsSync(target)) {
      continue; // do not overwrite
    }
    if (size > maxDim) {
      console.log(`[generate-icons] Skip ${size} (source smaller than target)`);
      continue;
    }
    try {
      await sharp(source).resize(size, size).png({ quality: 90, compressionLevel: 9 }).toFile(target);
      console.log(`[generate-icons] Created ${targetName}`);
    } catch (e) {
      console.error(`[generate-icons] Failed ${targetName}`, e);
    }
  }
})();
