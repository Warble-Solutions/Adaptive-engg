import { prisma } from "@/lib/prisma";
import Link from "next/link";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { format } from "date-fns";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
 title: "Blogs | Adaptive Engineering",
 description: "Insights, updates, and news on Renewable Energy, Infrastructure, and Industrial Automation.",
};

export default async function BlogsPage() {
 const posts = await prisma.blogPost.findMany({
 where: { isPublished: true },
 orderBy: { createdAt: "desc" },
 });

 return (
 <main className="min-h-screen pt-32 pb-24 px-6 relative">
 <SceneTrigger variant="wave" color="#0da08a" speed={0.8} />
 
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="mb-16">
 <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
 Insights & <span className="gradient-heading-light">Updates</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
 Stay up to date with the latest developments in Renewable Energy, Industrial Automation, and Infrastructure Engineering from the experts at Adaptive.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {posts.map((post) => (
 <Link key={post.id} href={`/resources/blogs/${post.slug}`}>
 <article className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl shadow-2xl hover:bg-white/10 shadow-primary/10 transition-all duration-300">
 <div className="relative h-60 w-full overflow-hidden bg-slate-800">
 {post.thumbnailUrl ? (
 <Image
 src={post.thumbnailUrl}
 alt={post.title}
 fill
 className="object-cover group-hover:bg-slate-900 hover:text-white hover:scale-105 transition-transform duration-500"
 />
 ) : (
 <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-500/20 flex items-center justify-center">
 <span className="text-primary font-bold tracking-widest uppercase opacity-50">Adaptive</span>
 </div>
 )}
 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
 <Calendar className="w-3 h-3" />
 {format(new Date(post.createdAt), "MMM d, yyyy")}
 </div>
 </div>
 
 <div className="p-8">
 <h2 className="text-xl font-bold text-white font-heading mb-4 line-clamp-2 group-hover:text-primary transition-colors">
 {post.title}
 </h2>
 <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
 {post.excerpt || post.content.replace(/<[^>]+>/g, "").substring(0, 120) + "..."}
 </p>
 <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
 Read Article <ArrowRight className="w-4 h-4 ml-2" />
 </div>
 </div>
 </article>
 </Link>
 ))}
 </div>

 {posts.length === 0 && (
 <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
 <h3 className="text-2xl font-bold text-white font-heading mb-2">No posts available</h3>
 <p className="text-slate-300">Check back later for new insights and updates.</p>
 </div>
 )}
 </div>
 </main>
 );
}
