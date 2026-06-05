"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, FileText, Search } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface Brochure {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  pdfUrl: string;
  category: string | null;
  sortOrder: number;
}

export default function BrochuresPageClient({ brochures }: { brochures: Brochure[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // Dynamically extract categories from DB records
  const dynamicCategories = Array.from(new Set(brochures.map(b => b.category).filter(Boolean))) as string[];
  const categories = ["All", ...dynamicCategories];

  // Filter brochures
  const filteredBrochures = brochures.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "All" || doc.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full text-white">
      {/* Search and Filter System */}
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
            placeholder="Search brochures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.2)] transition-all"
          />
        </div>
      </div>

      {/* Grid of Brochures */}
      {filteredBrochures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBrochures.map((doc, idx) => (
            <SectionWrapper key={doc.id} delay={idx * 0.05}>
              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full justify-between"
              >
                {/* Document Thumbnail / Mockup */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  {doc.thumbnailUrl ? (
                    <Image
                      src={doc.thumbnailUrl}
                      alt={doc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-slate-900 to-primary/20 flex flex-col items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                      <FileText className="w-12 h-12 text-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-bold text-white/90 leading-snug font-heading px-4">
                        {doc.title}
                      </h3>
                    </div>
                  )}

                  {/* High-End Download Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-sm p-6">
                    <div className="bg-white text-primary p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-3">
                      <Download className="w-6 h-6 animate-bounce" />
                    </div>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Download PDF</span>
                  </div>
                </div>

                {/* Document Title / Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {doc.category && (
                      <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded w-fit block mb-3">
                        {doc.category}
                      </span>
                    )}
                    <h2 className="text-base font-bold text-white font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {doc.title}
                    </h2>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>PDF Document</span>
                    <span className="text-primary font-bold group-hover:underline">GET FILE →</span>
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
            <h3 className="text-2xl font-bold font-heading mb-2">No matching brochures</h3>
            <p className="text-gray-400">Try adjusting your search criteria or categories.</p>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
