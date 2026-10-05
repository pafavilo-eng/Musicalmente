const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceImg = path.resolve(__dirname, '../src/assets/images/fermata_app_icon_1790687948948.jpg');
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generate() {
  console.log('Generating PWA icons from:', sourceImg);

  // 1. icon-192.png
  await sharp(sourceImg)
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  // 2. icon-512.png
  await sharp(sourceImg)
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  // 3. icon-512-maskable.png (with 15% padding so Android safe-zone doesn't clip content)
  // Inner image size = 512 * 0.75 = 384x384
  const innerIcon = await sharp(sourceImg)
    .resize(384, 384, { fit: 'cover' })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 251, g: 191, b: 36, alpha: 1 }, // #fbbf24 joyful amber
    },
  })
    .composite([{ input: innerIcon, top: 64, left: 64 }])
    .png()
    .toFile(path.join(publicDir, 'icon-512-maskable.png'));
  console.log('Created icon-512-maskable.png');

  // 4. apple-touch-icon.png (180x180)
  await sharp(sourceImg)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // 5. favicon.png (64x64) & favicon.ico
  await sharp(sourceImg)
    .resize(64, 64, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created favicon.png');

  // Copy favicon.png as favicon.ico or generate 32x32 ico
  await sharp(sourceImg)
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created favicon.ico');

  // 6. SVG Icon for desktop browser tab
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="26" fill="url(#grad)" />
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <text x="50" y="66" font-size="52" text-anchor="middle" font-family="sans-serif">🎵</text>
</svg>`;
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf-8');
  console.log('Created icon.svg');
}

generate().catch(console.error);
