import { prisma } from "@/lib/prisma";
import SceneTrigger from "@/components/3d/SceneTrigger";
import BrochuresPageClient from "./BrochuresPageClient";

export const metadata = {
  title: "Brochures & Technical Literature | Adaptive Engineering",
  description: "Download detailed corporate profiles, technical spec sheets, and solution brochures from Adaptive Engineering.",
};

export default async function BrochuresPage() {
  const brochures = await prisma.brochure.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-slate-950">
      <SceneTrigger variant="battery" color="#0da08a" speed={1.2} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Resources</span>
          <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Brochures</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Download our latest corporate profiles, sector-specific solution breakdowns, and technical specifications.
          </p>
        </div>

        <BrochuresPageClient brochures={brochures} />
      </div>
    </main>
  );
}
