import { prisma } from "@/lib/prisma";
import SceneTrigger from "@/components/3d/SceneTrigger";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata = {
  title: "Project Case Studies | Adaptive Engineering",
  description: "Explore our successful projects in Renewable Energy, Water Treatment, and Infrastructure.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-slate-950">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.8} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Resources</span>
          <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
            Project <span className="gradient-heading-light">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Discover how Adaptive Engineering delivers Turnkey E&I and Automation solutions across complex sectors.
          </p>
        </div>

        <CaseStudiesPageClient caseStudies={caseStudies} />
      </div>
    </main>
  );
}
