const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/resources/blogs/page.tsx',
  'src/app/resources/blogs/[slug]/page.tsx',
  'src/app/resources/case-studies/page.tsx',
  'src/app/resources/brochures/page.tsx',
  'src/app/resources/certifications/page.tsx',
  'src/app/about/team/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/careers/[slug]/page.tsx',
  'src/app/infrastructure/tunnel/page.tsx',
  'src/app/infrastructure/data-center/page.tsx',
  'src/app/infrastructure/automation/page.tsx',
];

targetFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');

  content = content.replace(/bg-indigo-100/g, 'bg-primary/20');
  content = content.replace(/bg-emerald-100/g, 'bg-primary/20');
  content = content.replace(/bg-violet-100/g, 'bg-primary/20');
  content = content.replace(/bg-fuchsia-100/g, 'bg-primary/20');
  content = content.replace(/bg-orange-100/g, 'bg-primary/20');
  
  content = content.replace(/text-indigo-700/g, 'text-primary-light');
  content = content.replace(/text-violet-700/g, 'text-primary-light');
  content = content.replace(/text-orange-700/g, 'text-primary-light');
  
  content = content.replace(/from-indigo-500\/20 to-blue-500\/20/g, 'from-primary/20 to-primary-light/20');
  content = content.replace(/from-violet-500\/20 to-fuchsia-500\/20/g, 'from-primary/20 to-primary-light/20');
  content = content.replace(/from-orange-500\/20 to-amber-500\/20/g, 'from-primary/20 to-primary-light/20');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Cleaned', file);
});
