import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
    <main className="min-h-screen pt-32 pb-24 relative selection:bg-blue-500/30">
      <SceneTrigger variant="wave" color="#049A89" speed={0.4} />

      <article className="max-w-4xl mx-auto px-6 relative z-10">
        <Link 
          href="/resources/blogs"
          className="inline-flex items-center text-slate-400 hover:text-primary font-bold tracking-wide uppercase text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all insights
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <User className="w-5 h-5" />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime={post.createdAt.toISOString()}>
                {format(new Date(post.createdAt), "MMMM d, yyyy")}
              </time>
            </div>
          </div>
        </header>

        {post.thumbnailUrl && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200">
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 
          Using prose for beautifully formatted typography from TipTap/WP HTML.
          Customizing the max-width and typography to feel structural and premium. 
        */}
        <div 
          className="prose prose-lg prose-invert prose-slate max-w-none 
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white font-heading
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
          prose-h3:text-2xl 
          prose-p:text-white prose-p:leading-relaxed prose-p:mb-8
          prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
          prose-li:text-white prose-li:my-2
          prose-strong:font-bold prose-strong:text-white font-heading
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {post.tags && post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-700 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-bold tracking-wide uppercase">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
