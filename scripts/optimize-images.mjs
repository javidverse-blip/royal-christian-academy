import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const STATS = { png: 0, jpg: 0, savedBytesPng: 0, savedBytesJpg: 0 };
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 80;

async function optimizePng(filePath) {
  const webpPath = filePath.replace(/\.png$/i, '.webp');
  const inputStats = fs.statSync(filePath);
  const inputSize = inputStats.size;

  await sharp(filePath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);

  const outputStats = fs.statSync(webpPath);
  const saved = inputSize - outputStats.size;

  fs.unlinkSync(filePath);

  STATS.png++;
  STATS.savedBytesPng += saved;
  console.log(`  PNG -> WebP: ${path.basename(filePath)} (${(inputSize / 1024 / 1024).toFixed(1)}MB → ${(outputStats.size / 1024 / 1024).toFixed(1)}MB, saved ${(saved / 1024 / 1024).toFixed(1)}MB)`);
}

async function optimizeJpg(filePath) {
  const inputStats = fs.statSync(filePath);
  const inputSize = inputStats.size;

  const tempPath = filePath + '.tmp';
  await sharp(filePath)
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(tempPath);

  fs.unlinkSync(filePath);
  fs.renameSync(tempPath, filePath);

  const outputStats = fs.statSync(filePath);
  const saved = inputSize - outputStats.size;

  STATS.jpg++;
  STATS.savedBytesJpg += saved;
  console.log(`  JPG: ${path.basename(filePath)} (${(inputSize / 1024 / 1024).toFixed(1)}MB → ${(outputStats.size / 1024 / 1024).toFixed(1)}MB, saved ${(saved / 1024 / 1024).toFixed(1)}MB)`);
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (/\.png$/i.test(entry.name)) {
      await optimizePng(fullPath);
    } else if (/\.jpe?g$/i.test(entry.name)) {
      await optimizeJpg(fullPath);
    }
  }
}

async function main() {
  console.log('Optimizing images...\n');
  await walkDir(imagesDir);
  console.log('\n--- Summary ---');
  const totalSaved = STATS.savedBytesPng + STATS.savedBytesJpg;
  console.log(`PNGs converted to WebP: ${STATS.png}`);
  console.log(`JPGs compressed: ${STATS.jpg}`);
  console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);
  console.log('Done!');
}

main().catch(err => { console.error(err); process.exit(1); });
