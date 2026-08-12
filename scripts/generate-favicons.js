import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

// Vector SVG string for Bhartiya Skills LLP official logo favicon
const faviconSvgContent = `<svg viewBox="0 0 512 512" width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bslTopWing" x1="20" y1="20" x2="380" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2CC2A5" />
      <stop offset="40%" stop-color="#33C98C" />
      <stop offset="75%" stop-color="#9EDB45" />
      <stop offset="100%" stop-color="#F8D61D" />
    </linearGradient>

    <linearGradient id="bslBirdHead" x1="200" y1="80" x2="410" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#33C98C" />
      <stop offset="100%" stop-color="#2CC2A5" />
    </linearGradient>

    <linearGradient id="bslYellowCurve" x1="120" y1="140" x2="320" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#9EDB45" />
      <stop offset="60%" stop-color="#F8D61D" />
      <stop offset="100%" stop-color="#F8D61D" />
    </linearGradient>

    <linearGradient id="bslBottomLeaf" x1="10" y1="210" x2="300" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#33C98C" />
      <stop offset="60%" stop-color="#2CC2A5" />
      <stop offset="100%" stop-color="#33C98C" />
    </linearGradient>
  </defs>

  <g transform="translate(52, 93)">
    <!-- Top sweeping wing curve -->
    <path 
      d="M 12,18 C 30,105 105,175 220,185 C 290,190 325,160 348,110 C 315,145 265,160 195,148 C 140,138 85,95 12,18 Z" 
      fill="url(#bslTopWing)" 
    />

    <!-- Bird Head / Upper Beak Extension -->
    <path 
      d="M 298,118 C 312,110 330,110 355,112 C 400,115 410,135 365,188 C 345,212 335,180 300,172 C 285,168 280,140 298,118 Z" 
      fill="url(#bslBirdHead)" 
    />

    <!-- Inner Yellow Accent Feather/Curve -->
    <path 
      d="M 125,152 C 158,162 230,182 320,230 C 275,225 210,205 160,188 C 138,180 128,165 125,152 Z" 
      fill="url(#bslYellowCurve)" 
    />

    <!-- Bottom Sweeping Leaf Curve -->
    <path 
      d="M 2,308 C 55,270 120,230 280,225 C 295,225 305,240 290,270 C 255,300 160,305 75,295 C 45,292 20,305 2,308 Z" 
      fill="url(#bslBottomLeaf)" 
    />

    <!-- Inner Leaf Accent Layer -->
    <path 
      d="M 45,268 C 110,238 185,220 270,226 C 240,248 160,258 75,262 C 60,263 50,265 45,268 Z" 
      fill="#FFFFFF" 
      opacity="0.25"
    />
  </g>
</svg>`;

// Helper to render PNG of a given dimension
function renderPng(dimension) {
  const resvg = new Resvg(faviconSvgContent, {
    fitTo: { mode: 'width', value: dimension }
  });
  return resvg.render().asPng();
}

// Helper to construct ICO buffer from array of PNG buffers
function buildIcoBuffer(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entryBuffers = [];

  for (let i = 0; i < count; i++) {
    const png = pngBuffers[i];
    const size = sizes[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // offset
    entryBuffers.push(entry);
    offset += png.length;
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // number of images

  return Buffer.concat([header, ...entryBuffers, ...pngBuffers]);
}

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Save favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvgContent);
console.log('✓ Created public/favicon.svg');

// 2. Render individual PNG sizes
const sizesToGenerate = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

const renderedPngs = {};
sizesToGenerate.forEach(({ size, name }) => {
  const pngBuffer = renderPng(size);
  fs.writeFileSync(path.join(publicDir, name), pngBuffer);
  renderedPngs[size] = pngBuffer;
  console.log(`✓ Created public/${name} (${size}x${size})`);
});

// 3. Generate favicon.ico containing 16x16, 32x32, 48x48
const icoSizes = [16, 32, 48];
const icoPngBuffers = icoSizes.map(s => renderedPngs[s]);
const icoBuffer = buildIcoBuffer(icoPngBuffers, icoSizes);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
console.log('✓ Created public/favicon.ico containing 16x16, 32x32, 48x48');

// 4. Create site.webmanifest and manifest.json
const manifestContent = JSON.stringify({
  name: "Bhartiya Skills LLP",
  short_name: "Bhartiya Skills",
  description: "Turnkey Laboratory & Skill Development Solutions Across India",
  icons: [
    {
      src: "/android-chrome-192x192.png?v=2",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png?v=2",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#33C98C",
  background_color: "#FFFFFF",
  display: "standalone",
  start_url: "/"
}, null, 2);

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestContent);
fs.writeFileSync(path.join(publicDir, 'manifest.json'), manifestContent);
console.log('✓ Created public/site.webmanifest and public/manifest.json');
