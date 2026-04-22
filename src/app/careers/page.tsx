import { prisma } from "@/lib/prisma";
import Link from "next/link";
import SceneTrigger from "@/components/3d/SceneTrigger";
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
 <main className="min-h-screen pt-32 pb-24 px-6 relative">
 <SceneTrigger variant="solar" color="#0da08a" speed={0.8} />
 
 <div className="max-w-5xl mx-auto relative z-10">
 <div className="mb-16">
 <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
 Join Our <span className="gradient-heading-light">Team</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
 Build the future of renewable energy and critical infrastructure with India's leading turnkey E&I solutions provider.
 </p>
 </div>

 <div className="flex flex-col gap-6">
 {jobs.map((job) => (
 <Link key={job.id} href={`/careers/${job.slug}`}>
 <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl shadow-2xl hover:border-primary/50 hover:shadow-xl shadow-primary/10 transition-all duration-300 transform hover:bg-white/10 -translate-y-1">
 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
 
 <div className="flex-1">
 <h2 className="text-2xl font-bold text-white font-heading group-hover:text-primary transition-colors mb-4">
 {job.title}
 </h2>
 
 <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
 <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg text-white">
 <MapPin className="w-4 h-4 text-primary" />
 {job.location}
 </div>
 <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg text-white">
 <Building className="w-4 h-4 text-primary" />
 {job.department}
 </div>
 <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg text-white">
 <Briefcase className="w-4 h-4 text-teal-500" />
 {job.type}
 </div>
 </div>
 </div>

 <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary group-hover:border-primary/50 hover:shadow-xl group-hover:text-white transition-colors flex-shrink-0">
 <ArrowRight className="w-6 h-6" />
 </div>
 
 </div>
 </div>
 </Link>
 ))}
 </div>

 {jobs.length === 0 && (
 <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
 <h3 className="text-2xl font-bold text-white font-heading mb-2">No open positions</h3>
 <p className="text-slate-300">We are not actively hiring right now, but feel free to check back later.</p>
 </div>
 )}
 </div>
 </main>
 );
}
