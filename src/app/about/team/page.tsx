import { prisma } from "@/lib/prisma";
import Image from "next/image";
import SceneTrigger from "@/components/3d/SceneTrigger";
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
 <main className="min-h-screen pt-32 pb-24 px-6 relative">
 <SceneTrigger variant="wave" color="#0da08a" speed={1} />
 
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="mb-16 text-center">
 <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
 Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Experts</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
 Driven by a passionate team of engineers under the guidance of founders with over two decades of rich experience.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
 {team.map((member) => (
 <div 
 key={member.id} 
 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-primary/50 hover:shadow-xl shadow-2xl hover:bg-white/10 shadow-primary/10 transition-all duration-300"
 >
 <div className="relative aspect-square w-full rounded-2xl bg-slate-800 overflow-hidden mb-6">
 {member.photoUrl ? (
 <Image
 src={member.photoUrl}
 alt={member.name}
 fill
 className="object-cover group-hover:bg-slate-900 hover:text-white hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:border-primary/50 hover:shadow-xl grayscale-0 group-hover:opacity-100 filter"
 />
 ) : (
 <div className="w-full h-full flex items-center justify-center text-slate-300">
 <User className="w-20 h-20" />
 </div>
 )}
 
 {member.linkedinUrl && (
 <a 
 href={member.linkedinUrl} 
 target="_blank" 
 rel="noreferrer"
 className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-primary hover:border-primary/50 hover:shadow-xl bg-[#0da08a] text-white hover:bg-slate-900 hover:text-white scale-110 transition-all shadow-lg"
 >
 <Linkedin className="w-5 h-5 fill-current" />
 </a>
 )}
 </div>
 
 <div>
 <h3 className="text-xl font-black text-white font-heading group-hover:text-primary transition-colors">
 {member.name}
 </h3>
 <p className="text-primary font-bold text-sm tracking-wide uppercase mt-1 mb-3">
 {member.designation}
 </p>
 {member.department && (
 <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold mb-4">
 {member.department}
 </span>
 )}
 {member.bio && (
 <p className="text-slate-300 text-sm line-clamp-4 leading-relaxed">
 {member.bio}
 </p>
 )}
 </div>
 </div>
 ))}
 </div>

 {team.length === 0 && (
 <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
 <h3 className="text-2xl font-bold text-white font-heading mb-2">Our 300+ strong engineering team</h3>
 <p className="text-slate-300">Profiles will be updated soon.</p>
 </div>
 )}
 </div>
 </main>
 );
}
