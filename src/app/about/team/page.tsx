import { prisma } from "@/lib/prisma";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import TeamPageClient from "./TeamPageClient";

export const metadata = {
    title: "Our Team | Adaptive Engineering",
    description: "Meet the passionate team behind Adaptive Engineering.",
};

export default async function TeamPage() {
    const team = await prisma.teamMember.findMany({
        orderBy: { sortOrder: "asc" },
    });

    return (
        <main className="min-h-screen pb-24 relative overflow-hidden">
            <SceneTrigger variant="wave" color="#0da08a" speed={1} />

            {/* HERO BANNER */}
            <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80" 
                        alt="Team Hero Banner" 
                        className="w-full h-full object-cover object-top" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 z-10"></div>
                </div>
                <div className="z-10 max-w-5xl relative">
                    <SectionWrapper>
                        <div className="inline-block px-4 py-2 bg-primary/35 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/40 shadow-lg">
                            Our Team
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Meet the <span className="gradient-heading">Experts</span>
                        </h1>
                        <p className="text-gray-100 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
                            Driven by a passionate team of engineers under the guidance of founders with over three decades of rich experience.
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* Team Grid Section */}
            <section className="py-24 bg-slate-50 rounded-t-[40px] relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <TeamPageClient team={team} />

                    {team.length === 0 && (
                        <SectionWrapper>
                            <div className="text-center py-24 bg-white border border-slate-100 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Our 300+ strong engineering team</h3>
                                <p className="text-slate-500 font-medium">Profiles will be updated soon.</p>
                            </div>
                        </SectionWrapper>
                    )}
                </div>
            </section>
        </main>
    );
}
