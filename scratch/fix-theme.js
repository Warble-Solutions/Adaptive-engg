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
  'src/app/privacy-policy/page.tsx',
  'src/app/terms/page.tsx',
  'src/components/forms/ApplicationForm.tsx'
];

targetFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');

  // Fix Hero Titles and Text
  content = content.replace(/text-slate-900/g, 'text-white font-heading');
  content = content.replace(/text-slate-600/g, 'text-slate-300');
  content = content.replace(/text-slate-500/g, 'text-slate-400');
  content = content.replace(/text-slate-700/g, 'text-white');

  // Fix Glass Cards inside lists/grids
  content = content.replace(/bg-white\/80/g, 'bg-white/5');
  content = content.replace(/bg-white\/50/g, 'bg-white/5');
  content = content.replace(/border-white\/50/g, 'border-white/10');
  content = content.replace(/bg-slate-100/g, 'bg-slate-800');
  content = content.replace(/bg-slate-50/g, 'bg-slate-800');
  content = content.replace(/border-slate-200/g, 'border-slate-700');

  // Fix Colored Gradients and Accents to use Primary
  // For standard colors
  content = content.replace(/from-blue-600 to-cyan-500/g, 'from-primary to-primary-light');
  content = content.replace(/from-emerald-500 to-teal-400/g, 'from-primary to-primary-light');
  content = content.replace(/from-amber-500 to-orange-500/g, 'from-primary to-primary-light');
  content = content.replace(/from-rose-500 to-orange-400/g, 'from-primary to-primary-light');
  content = content.replace(/from-indigo-600 to-blue-500/g, 'from-primary to-primary-light');
  content = content.replace(/from-violet-600 to-fuchsia-500/g, 'from-primary to-primary-light');
  content = content.replace(/from-orange-500 to-amber-500/g, 'from-primary to-primary-light');

  // Text colors
  content = content.replace(/text-blue-600/g, 'text-primary');
  content = content.replace(/text-emerald-600/g, 'text-primary');
  content = content.replace(/text-emerald-500/g, 'text-primary');
  content = content.replace(/text-amber-500/g, 'text-primary');
  content = content.replace(/text-amber-600/g, 'text-primary');
  content = content.replace(/text-rose-500/g, 'text-primary');
  content = content.replace(/text-indigo-600/g, 'text-primary');
  content = content.replace(/text-violet-600/g, 'text-primary');
  content = content.replace(/text-orange-600/g, 'text-primary');
  content = content.replace(/text-transparent bg-clip-text/g, 'text-transparent bg-clip-text');

  // Background/Hover Accents
  content = content.replace(/bg-blue-600/g, 'bg-primary');
  content = content.replace(/bg-emerald-500/g, 'bg-primary');
  content = content.replace(/bg-amber-500/g, 'bg-primary');
  content = content.replace(/bg-amber-100/g, 'bg-primary/20');
  content = content.replace(/bg-blue-100/g, 'bg-primary/20');
  content = content.replace(/hover:bg-amber-500/g, 'hover:bg-primary');
  content = content.replace(/hover:bg-amber-600/g, 'hover:bg-primary-light');
  
  // Shadows
  content = content.replace(/shadow-blue-500/g, 'shadow-primary');
  content = content.replace(/shadow-emerald-500/g, 'shadow-primary');
  content = content.replace(/shadow-amber-500/g, 'shadow-primary');
  content = content.replace(/shadow-indigo-500/g, 'shadow-primary');
  content = content.replace(/shadow-violet-500/g, 'shadow-primary');
  content = content.replace(/shadow-orange-500/g, 'shadow-primary');
  content = content.replace(/shadow-rose-500/g, 'shadow-primary');

  // Prose inversions
  content = content.replace(/prose-slate/g, 'prose-invert prose-slate');
  
  // Custom Prose overwrites in blog/career details
  content = content.replace(/prose-headings:text-slate-900/g, 'prose-headings:text-white font-heading');
  content = content.replace(/prose-p:text-slate-700/g, 'prose-p:text-slate-300');
  content = content.replace(/prose-h2:text-white/g, 'prose-h2:text-primary');
  content = content.replace(/prose-a:text-blue-600/g, 'prose-a:text-primary');
  content = content.replace(/prose-li:text-slate-700/g, 'prose-li:text-slate-300');
  content = content.replace(/prose-strong:text-slate-900/g, 'prose-strong:text-white');
  content = content.replace(/text-slate-900/g, 'text-white font-heading');
  
  // SceneTrigger standard colors
  content = content.replace(/color="#[A-Fa-f0-9]+"/g, 'color="#049A89"');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Fixed', file);
});
