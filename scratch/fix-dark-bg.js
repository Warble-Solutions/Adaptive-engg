const fs = require('fs');
const path = require('path');

const root = 'd:/Work/code/adaptive engg';

// All page files with dark sections
const files = [
  'src/app/renewable/unified/scada/page.tsx',
  'src/app/renewable/unified/ems-bess/page.tsx',
  'src/app/renewable/unified/cms/page.tsx',
  'src/app/pm-kusum/page.tsx',
  'src/app/ppc/page.tsx',
  'src/app/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/about/profile/page.tsx',
];

files.forEach(f => {
  const full = path.join(root, f);
  if (!fs.existsSync(full)) { console.log('SKIP:', f); return; }
  
  let content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  let changed = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match section elements with bg-slate-900 that are layout sections (py-XX)
    // Skip: hover states, table rows, card backgrounds, buttons, links
    if (line.includes('bg-slate-900') && 
        line.includes('py-') && 
        line.includes('<section') &&
        !line.includes('hover:bg-slate-900')) {
      lines[i] = line.replace('bg-slate-900', 'bg-transparent');
      console.log(`  L${i+1}: replaced in section`);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(full, lines.join('\n'));
    console.log('UPDATED:', f);
  } else {
    console.log('NO CHANGE:', f);
  }
});
