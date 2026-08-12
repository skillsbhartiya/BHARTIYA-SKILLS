import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Primary static routes
const staticRoutes = [
  'about',
  'solutions',
  'specialized',
  'products',
  'industries',
  'projects',
  'gallery',
  'enquiry',
  'contact',
  'aboutus',
  'about-us',
  'contactus'
];

// Lab Solution IDs
const labSolutionIds = [
  'nursing-college-lab',
  'atl-lab-tools',
  'iti-tools-equipment',
  'medical',
  'healthcare',
  'automotive',
  'electrical',
  'electronics',
  'agriculture',
  'computer',
  'apparel',
  'beautician',
  'telecom',
  'solar',
  'food-processing',
  'plumbing',
  'media',
  'tourism',
  'retail'
];

labSolutionIds.forEach((id) => {
  staticRoutes.push(`solutions/${id}`);
});

let createdCount = 0;

for (const route of staticRoutes) {
  const targetDir = path.join(distDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
  createdCount++;
}

console.log(`Generated static index.html route files for ${createdCount} routes.`);
