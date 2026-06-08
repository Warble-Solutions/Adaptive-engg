import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Adaptive Blogs`,
    description: post.excerpt || "Read the latest insights from Adaptive Engineering.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 relative selection:bg-teal-500/30 bg-slate-950">
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      <SceneTrigger variant="wave" color="#0da08a" speed={0.4} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Sleek back button */}
        <div className="mb-8">
          <Link 
            href="/resources/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full text-slate-300 hover:text-white font-bold tracking-wide uppercase text-xs transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all insights
          </Link>
        </div>

        {/* Premium publication card wrapper */}
        <article className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-950/50">
          <header className="mb-10">
            {/* Categories/Tags at top */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-full">
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            
            {/* Metadata info border container */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium border-t border-b border-white/5 py-4 my-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-slate-300">By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={post.createdAt.toISOString()} className="text-slate-300">
                  {format(new Date(post.createdAt), "MMMM d, yyyy")}
                </time>
              </div>
            </div>
          </header>

          {/* Hero cover image */}
          {post.thumbnailUrl && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-slate-950/40">
              <Image
                src={post.thumbnailUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Clean, high-readability prose typography */}
          <div 
            className="prose prose-lg prose-invert prose-slate max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white font-heading
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-200 prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-4
            prose-a:text-primary prose-a:font-bold prose-a:underline hover:prose-a:text-teal-400 transition-colors
            prose-li:text-slate-200 prose-li:my-2
            prose-strong:font-bold prose-strong:text-white
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-300 prose-blockquote:italic prose-blockquote:font-medium"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Footer tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-full text-xs font-bold transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
