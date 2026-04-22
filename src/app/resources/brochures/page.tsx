import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Download, FileText } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";

export const metadata = {
 title: "Brochures | Adaptive Engineering",
 description: "Download detailed corporate profiles and solution brochures from Adaptive Engineering.",
};

export default async function BrochuresPage() {
 const brochures = await prisma.brochure.findMany({
 orderBy: { sortOrder: "asc" },
 });

 return (
 <main className="min-h-screen pt-32 pb-24 px-6 relative">
 <SceneTrigger variant="battery" color="#0da08a" speed={1.2} />
 
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="mb-16">
 <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
 Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Brochures</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
 Download our latest corporate profiles, sector-specific solution breakdowns, and technical specifications.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
 {brochures.map((doc) => (
 <a 
 key={doc.id} 
 href={doc.pdfUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl shadow-2xl hover:bg-white/10 shadow-primary/20 transition-all duration-300"
 >
 <div className="relative aspect-[3/4] w-full overflow-hidden">
 {doc.thumbnailUrl ? (
 <Image
 src={doc.thumbnailUrl}
 alt={doc.title}
 fill
 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
 className="object-cover group-hover:scale-105 transition-transform duration-500"
 />
 ) : (
 <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-slate-800 to-primary/40 flex items-center justify-center p-6">
 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
 <h3 className="text-xl md:text-2xl font-black text-white/90 text-center leading-tight font-heading relative z-10 drop-shadow-md">
 {doc.title}
 </h3>
 </div>
 )}
 
 {/* Download Overlay */}
 <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
 <div className="bg-white text-primary p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
 <Download className="w-6 h-6" />
 </div>
 </div>
 </div>
 
 <div className="p-6 flex-grow flex flex-col">
 {doc.category && (
 <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2">
 {doc.category}
 </span>
 )}
 <h2 className="text-lg font-bold text-white font-heading group-hover:text-primary transition-colors line-clamp-2">
 {doc.title}
 </h2>
 </div>
 </a>
 ))}
 </div>

 {brochures.length === 0 && (
 <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
 <h3 className="text-2xl font-bold text-white font-heading mb-2">No brochures available</h3>
 <p className="text-slate-300">Check back later for technical documents and profiles.</p>
 </div>
 )}
 </div>
 </main>
 );
}
