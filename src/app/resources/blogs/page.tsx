import { prisma } from "@/lib/prisma";
import SceneTrigger from "@/components/3d/SceneTrigger";
import BlogsPageClient from "./BlogsPageClient";

export const metadata = {
  title: "Blogs & Technical Insights | Adaptive Engineering",
  description: "Insights, engineering updates, and news on Renewable Energy, Infrastructure, and Industrial Automation.",
};

export default async function BlogsPage() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-slate-950">
      <SceneTrigger variant="wave" color="#0da08a" speed={0.8} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Resources</span>
          <h1 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-6">
            Insights & <span className="gradient-heading-light">Updates</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Stay up to date with the latest developments in Renewable Energy, Industrial Automation, and Infrastructure Engineering from the experts at Adaptive.
          </p>
        </div>

        <BlogsPageClient posts={posts} />
      </div>
    </main>
  );
}
