/**
 * Script to generate favicon.ico and apple-touch-icon.png from favicon.svg
 * 
 * Usage:
 *   npm install sharp png-to-ico --save-dev
 *   node scripts/generate-favicon.mjs
 */

import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');
const svgPath = resolve(publicDir, 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

async function generate() {
  // Generate multiple PNG sizes for ICO
  const sizes = [16, 32, 48, 64, 128, 256];
  const pngBuffers = await Promise.all(
    sizes.map(size =>
      sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Generate favicon.ico (multi-size)
  const icoBuffer = await pngToIco(pngBuffers);
  writeFileSync(resolve(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ favicon.ico generated');

  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(resolve(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png generated');

  // Generate favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(resolve(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png generated');

  // Generate favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(resolve(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png generated');

  // Generate android-chrome icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(resolve(publicDir, 'android-chrome-192x192.png'));
  console.log('✓ android-chrome-192x192.png generated');

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(resolve(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ android-chrome-512x512.png generated');

  console.log('\nAll favicon assets generated successfully!');
}

generate().catch(console.error);
