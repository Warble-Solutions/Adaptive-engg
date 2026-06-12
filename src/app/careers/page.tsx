import { prisma } from "@/lib/prisma";
import Link from "next/link";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import { Briefcase, MapPin, Building, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Careers | Adaptive Engineering",
  description: "Join Adaptive Engineering - Open positions in Renewable Energy, Automation, and Infrastructure.",
};

export default async function CareersPage() {
  const jobs = await prisma.job.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="solar" color="#0da08a" speed={0.8} />

      {/* HERO BANNER */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/imgs/careers_banner.png" 
            alt="Careers Hero Banner" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>
        </div>
        <div className="z-10 max-w-5xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/35 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/40 shadow-lg">
              Careers
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Join Our <span className="gradient-heading">Team</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Build the future of renewable energy and critical infrastructure with India&apos;s leading turnkey E&amp;I solutions provider.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Current Opportunities</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                Explore our open positions and take the next step in your career journey.
              </p>
            </SectionWrapper>
          </div>

          <div className="flex flex-col gap-6">
            {jobs.map((job) => (
              <SectionWrapper key={job.id}>
                <Link href={`/careers/${job.slug}`}>
                  <div className="group bg-slate-50 border border-slate-100 hover:border-primary/50 hover:shadow-xl shadow-md rounded-2xl p-8 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-4 font-heading">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
                          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                            <MapPin className="w-4 h-4 text-primary" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                            <Building className="w-4 h-4 text-primary" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                            <Briefcase className="w-4 h-4 text-[#0da08a]" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>

          {jobs.length === 0 && (
            <SectionWrapper>
              <div className="text-center py-24 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">No open positions</h3>
                <p className="text-slate-500 font-medium">We are not actively hiring right now, but feel free to check back later.</p>
              </div>
            </SectionWrapper>
          )}
        </div>
      </section>
    </div>
  );
}
