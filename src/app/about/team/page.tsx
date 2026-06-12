import { prisma } from "@/lib/prisma";
import Image from "next/image";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import { Linkedin, User } from "lucide-react";

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
            <section className="section-hero relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden mb-16">
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
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <SectionWrapper key={member.id}>
                            <div className="group bg-white border border-slate-100 rounded-3xl p-6 hover:border-primary/50 hover:shadow-2xl shadow-xl transition-all duration-300">
                                <div className="relative aspect-square w-full rounded-2xl bg-slate-100 overflow-hidden mb-6">
                                    {member.photoUrl ? (
                                        <Image
                                            src={member.photoUrl}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-50">
                                            <User className="w-20 h-20" />
                                        </div>
                                    )}

                                    {member.linkedinUrl && (
                                        <a
                                            href={member.linkedinUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-full text-primary hover:bg-[#0da08a] hover:text-white scale-110 transition-all shadow-lg"
                                        >
                                            <Linkedin className="w-5 h-5 fill-current" />
                                        </a>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors font-heading">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-bold text-sm tracking-wide uppercase mt-1 mb-3">
                                        {member.designation}
                                    </p>
                                    {member.department && (
                                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold mb-4 border border-slate-200/50">
                                            {member.department}
                                        </span>
                                    )}
                                    {member.bio && (
                                        <p className="text-slate-600 text-sm line-clamp-4 leading-relaxed font-medium">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </SectionWrapper>
                    ))}
                </div>

                {team.length === 0 && (
                    <SectionWrapper>
                        <div className="text-center py-24 bg-white border border-slate-100 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Our 300+ strong engineering team</h3>
                            <p className="text-slate-500 font-medium">Profiles will be updated soon.</p>
                        </div>
                    </SectionWrapper>
                )}
            </div>
        </main>
    );
}
