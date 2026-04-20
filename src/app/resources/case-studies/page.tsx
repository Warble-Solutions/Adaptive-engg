import { prisma } from "@/lib/prisma";
import { ArrowUpRight } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";

export const metadata = {
  title: "Case Studies | Adaptive Engineering",
  description: "Explore our successful projects in Renewable Energy, Water Treatment, and Infrastructure.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <SceneTrigger variant="network" color="#049A89" speed={0.8} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Discover how Adaptive Engineering delivers Turnkey E&I and Automation solutions across complex sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <a 
              key={study.id} 
              href={study.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-slate-800 to-emerald-900/40 flex items-center justify-center p-8">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <h3 className="text-2xl md:text-3xl font-black text-white/90 text-center leading-tight font-heading relative z-10 drop-shadow-lg">
                    {study.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transform translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {study.category && (
                  <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white tracking-wider uppercase">
                    {study.category}
                  </div>
                )}
              </div>
              
              <div className="p-8 pb-10 flex-grow flex flex-col">
                <h2 className="text-2xl font-black text-white font-heading mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {study.title}
                </h2>
                {study.description && (
                  <p className="text-slate-300 line-clamp-3 leading-relaxed">
                    {study.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white font-heading mb-2">No case studies available</h3>
            <p className="text-slate-300">Check back soon for new project highlights.</p>
          </div>
        )}
      </div>
    </main>
  );
}
