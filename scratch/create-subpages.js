const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'src/app/about/profile/page.tsx', title: 'Company Profile', mainTag: 'About Us' },
  { path: 'src/app/history/page.tsx', title: 'Our Journey', mainTag: 'History' },
  { path: 'src/app/renewable/unified/page.tsx', title: 'Unified Renewable Solution', mainTag: 'Renewable Energy' },
  { path: 'src/app/renewable/panels/page.tsx', title: 'Electrical Panels', mainTag: 'Renewable Energy' },
  { path: 'src/app/renewable/turnkey/page.tsx', title: 'Turnkey E&I', mainTag: 'Renewable Energy' },
  { path: 'src/app/ppc/page.tsx', title: 'Power Plant Control', mainTag: 'Renewable Energy' },
  { path: 'src/app/pm-kusum/iot-scada/page.tsx', title: 'IoT SCADA', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/reportwiz/page.tsx', title: 'ReportWiz', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/cms/page.tsx', title: 'Central Monitoring System (CMS)', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/ams/page.tsx', title: 'Asset Management System (AMS)', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/ht-panel/page.tsx', title: 'HT Panel', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/acdb-panels/page.tsx', title: 'ACDB Panels', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/wms/page.tsx', title: 'Weather Monitoring System (WMS)', mainTag: 'PM-KUSUM' },
  { path: 'src/app/pm-kusum/telemetry/page.tsx', title: 'Telemetry System', mainTag: 'PM-KUSUM' },
];

const template = (title, mainTag) => `import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "${title} | Adaptive Engineering",
  description: "Learn more about ${title} offered by Adaptive Engineering.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
            alt="${title} Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              ${mainTag}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              ${title}
            </h1>

            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Comprehensive and specialized details for ${title}. Content mapping from old website is in progress.
            </p>
          </SectionWrapper>
        </div>
      </section>

      <section className="py-24 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionWrapper>
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">${title} Overview</h2>
              <p>
                This space is reserved for the detailed content addressing ${title}. Our teams are currently migrating data from the previous CMS structure. 
                Adaptive Engineering consistently aims to deliver flawless Turnkey and RMS solutions seamlessly integrated for our clients globally.
              </p>
              
              <div className="mt-12">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-colors">
                    Request Info <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
`;

pages.forEach(page => {
  const fullPath = path.join(__dirname, '..', page.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Optional: Only create if doesn't exist to prevent overwriting PPC if it is already there
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, template(page.title, page.mainTag));
    console.log("Created:", page.path);
  } else {
    console.log("Skipped (already exists):", page.path);
  }
});
