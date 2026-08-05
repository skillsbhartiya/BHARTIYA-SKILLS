import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const distDirectory = 'dist';
const sourceIndex = join(distDirectory, 'index.html');

const routes = [
  {
    path: 'about',
    title: 'About Bhartiya Skills LLP | Turnkey Laboratory Solutions',
    description:
      'Learn about Bhartiya Skills LLP, a provider of turnkey laboratory setups, technical training equipment and skill-development infrastructure across India.',
  },
  {
    path: 'projects',
    title: 'Turnkey Laboratory Projects | Bhartiya Skills LLP',
    description:
      'Explore turnkey laboratory, technical education and skill-development projects executed by Bhartiya Skills LLP across India.',
  },
  {
    path: 'contact',
    title: 'Contact Bhartiya Skills LLP | Request a Laboratory Quotation',
    description:
      'Contact Bhartiya Skills LLP for turnkey laboratory setup, technical equipment, installation, commissioning and project enquiries.',
  },
  {
    path: 'solutions',
    title: 'Laboratory Setup Solutions in India | Bhartiya Skills LLP',
    description:
      'Explore complete medical, automotive, electrical, computer, agriculture and vocational laboratory setup solutions across India.',
  },
  {
    path: 'specialized',
    title: 'Nursing, ATL and ITI Lab Setup | Bhartiya Skills LLP',
    description:
      'Complete Nursing, Atal Tinkering Lab and ITI laboratory setup solutions, equipment, furniture and installation services.',
  },
  {
    path: 'industries',
    title: 'Industries We Serve | Bhartiya Skills LLP',
    description:
      'Laboratory and vocational infrastructure solutions for government departments, ITIs, colleges, universities and training centres.',
  },
  {
    path: 'enquiry',
    title: 'Project Enquiry | Bhartiya Skills LLP',
    description:
      'Submit your BOQ, tender document or laboratory setup requirement to Bhartiya Skills LLP for a customised proposal.',
  },
];

const originalHtml = await readFile(sourceIndex, 'utf8');

function replaceOrInsertMeta(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `  ${replacement}\n</head>`);
}

for (const route of routes) {
  const routeDirectory = join(distDirectory, route.path);
  const routeIndex = join(routeDirectory, 'index.html');
  const canonicalUrl = `https://engineeringinstrument.com/${route.path}`;

  await mkdir(dirname(routeIndex), { recursive: true });

  let routeHtml = originalHtml;

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${route.title}</title>`,
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${route.description}">`,
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}">`,
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<meta\s+name=["']robots["'][^>]*>/i,
    '<meta name="robots" content="index, follow">',
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonicalUrl}">`,
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${route.title}">`,
  );

  routeHtml = replaceOrInsertMeta(
    routeHtml,
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${route.description}">`,
  );

  await writeFile(routeIndex, routeHtml, 'utf8');
  console.log(`Generated: dist/${route.path}/index.html`);
}

// Ensure the custom domain remains available in the final build.
await writeFile(
  join(distDirectory, 'CNAME'),
  'engineeringinstrument.com\n',
  'utf8',
);

console.log('Static route generation completed.');
