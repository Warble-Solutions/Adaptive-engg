"use client";

import { useState } from "react";
import { ArrowUpRight, Search, FileText } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  pdfUrl: string;
  description: string | null;
  category: string | null;
  sortOrder: number;
}

export default function CaseStudiesPageClient({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // Dynamically extract categories
  const dynamicCategories = Array.from(new Set(caseStudies.map(cs => cs.category).filter(Boolean))) as string[];
  const categories = ["All", ...dynamicCategories];

  // Filter case studies
  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (study.description && study.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeTab === "All" || study.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full text-white">
      {/* Search and Filters */}
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

        {/* Search Input */}
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.2)] transition-all"
          />
        </div>
      </div>

      {/* Grid of Case Studies */}
      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, idx) => (
            <SectionWrapper key={study.id} delay={idx * 0.05}>
              <a
                href={study.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full justify-between"
              >
                {/* Visual Header Grid Card */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-slate-900 to-teal-900/40 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    <FileText className="w-10 h-10 text-primary/80 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white/95 leading-tight font-heading group-hover:text-primary transition-colors line-clamp-2 px-4">
                      {study.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  {/* Top Right Arrow Link Icon */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white transform translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>

                  {/* Left Bottom Category Badge */}
                  {study.category && (
                    <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold text-white tracking-widest uppercase border border-primary/20">
                      {study.category}
                    </div>
                  )}
                </div>

                {/* Case Study Details */}
                <div className="p-8 pb-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-white font-heading mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {study.title}
                    </h2>
                    {study.description && (
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {study.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Engineering Case Study</span>
                    <span className="text-primary font-bold group-hover:underline">VIEW PROJECT →</span>
                  </div>
                </div>
              </a>
            </SectionWrapper>
          ))}
        </div>
      ) : (
        <SectionWrapper>
          <div className="text-center py-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading mb-2">No matching case studies</h3>
            <p className="text-gray-400">Try adjusting your search criteria or categories.</p>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
