"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface Post {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string | null;
  content: string;
  excerpt: string | null;
  author: string;
  tags: string[];
  createdAt: Date;
}

export default function BlogsPageClient({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Renewables", "Water", "Automation", "Infrastructure", "Corporate"];

  // Category keyword sets — matched against title, excerpt, tags, and content
  const categoryKeywords: Record<string, string[]> = {
    Renewables: ["renewable", "solar", "wind", "bess", "ppc", "kusum", "photovoltaic", "hybrid power", "clean energy", "hydrogen", "biofuel", "energy transition", "green energy", "power plant"],
    Water: ["water", "wtp", "stp", "etp", "irrigation", "sewage", "effluent", "desalination", "hydro"],
    Automation: ["automation", "scada", "plc", "rtu", "iot", "iiot", "iec 61499", "edge ai", "digitalization", "digital twin", "industry 4", "sda", "software-defined", "machine", "predictive maintenance", "change management", "plant scada", "remote monitoring", "cms"],
    Infrastructure: ["infra", "tunnel", "highway", "data center", "datacenter", "electrical panel"],
    Corporate: ["corporate", "company", "news", "marketing department", "sales department", "procurement department", "project department", "collaboration"],
  };

  function matchesCategory(post: Post, category: string): boolean {
    const keywords = categoryKeywords[category];
    if (!keywords) return false;
    const searchText = `${post.title} ${post.excerpt || ""} ${post.tags.join(" ")}`.toLowerCase();
    return keywords.some(kw => searchText.includes(kw));
  }

  // Filter logic
  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (activeTab === "All") return true;

    return matchesCategory(post, activeTab);
  });

  // Featured post is the most recent matching the filter, or first overall if nothing matches
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="w-full text-white">
      {/* Search and Category Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-20">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                activeTab === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles & tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.2)] transition-all"
          />
        </div>
      </div>

      {/* Featured Blog Post */}
      {featuredPost && (
        <SectionWrapper delay={0.1}>
          <div className="mb-16">
            <Link href={`/resources/blogs/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_rgba(13,160,138,0.15)] transition-all duration-500">
                {/* Featured Thumbnail */}
                <div className="lg:col-span-7 relative h-72 lg:h-[420px] w-full overflow-hidden bg-slate-900">
                  {featuredPost.thumbnailUrl ? (
                    <Image
                      src={featuredPost.thumbnailUrl}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal-500/20 flex items-center justify-center">
                      <span className="text-primary font-black tracking-widest uppercase text-3xl opacity-30 font-heading">Adaptive</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-teal-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {format(new Date(featuredPost.createdAt), "MMMM d, yyyy")}
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-full">
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl font-black font-heading leading-tight group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {featuredPost.excerpt || featuredPost.content.replace(/<[^>]+>/g, "").substring(0, 180) + "..."}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>By {featuredPost.author}</span>
                    </div>
                    <div className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                      Read Featured <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SectionWrapper>
      )}

      {/* Grid of Remaining Posts */}
      {gridPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post, idx) => (
            <SectionWrapper key={post.id} delay={idx * 0.05}>
              <Link href={`/resources/blogs/${post.slug}`} className="group block h-full">
                <article className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full justify-between">
                  <div>
                    {/* Card Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      {post.thumbnailUrl ? (
                        <Image
                          src={post.thumbnailUrl}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-teal-500/10 flex items-center justify-center">
                          <span className="text-primary font-bold tracking-widest uppercase opacity-40 font-heading">Adaptive</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-teal-400 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(post.createdAt), "MMM d, yyyy")}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                        {post.excerpt || post.content.replace(/<[^>]+>/g, "").substring(0, 110) + "..."}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{post.author}</span>
                    </span>
                    <div className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </SectionWrapper>
          ))}
        </div>
      )}

      {/* Empty States */}
      {filteredPosts.length === 0 && (
        <SectionWrapper>
          <div className="text-center py-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading mb-2">No matching articles</h3>
            <p className="text-gray-400">Try adjusting your search criteria or categories.</p>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
