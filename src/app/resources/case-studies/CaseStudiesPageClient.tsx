"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, Search, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { staticCaseStudies, CaseStudy } from "@/lib/staticCaseStudies";

export default function CaseStudiesPageClient({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // Popup form state
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Display only the clean static case studies combined with database ones
  const allCaseStudies = [...staticCaseStudies];
  if (caseStudies && Array.isArray(caseStudies)) {
    caseStudies.forEach((dbCs) => {
      if (!allCaseStudies.some((scs) => scs.slug === dbCs.slug)) {
        allCaseStudies.push({
          id: dbCs.id,
          title: dbCs.title,
          slug: dbCs.slug,
          thumbnailUrl: dbCs.thumbnailUrl,
          pdfUrl: dbCs.pdfUrl,
          description: dbCs.description,
          category: dbCs.category,
          sortOrder: dbCs.sortOrder
        });
      }
    });
  }

  // Dynamically extract categories from all records
  const dynamicCategories = Array.from(new Set(allCaseStudies.map(cs => cs.category).filter(Boolean))) as string[];
  const categories = ["All", ...dynamicCategories];

  // Filter case studies
  const filteredStudies = allCaseStudies.filter(study => {
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (study.description && study.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeTab === "All" || study.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (e: React.MouseEvent, study: CaseStudy) => {
    e.preventDefault();
    setSelectedStudy(study);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudy) return;

    // Simulate API submission
    console.log("Saving user details for case study download:", formData);

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = selectedStudy.pdfUrl;
    link.download = selectedStudy.pdfUrl.split("/").pop() || `${selectedStudy.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message briefly before closing
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedStudy(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: ""
      });
      setIsSubmitted(false);
    }, 1000);
  };

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
            placeholder="Search case studies..."
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
              <div
                className="w-full group flex flex-col bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full justify-between"
              >
                {/* Visual Header Grid Card / Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  {study.thumbnailUrl ? (
                    <Image
                      src={study.thumbnailUrl}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-slate-900 to-teal-900/40 flex flex-col items-center justify-center p-8 text-center">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                      <FileText className="w-10 h-10 text-primary/80 mb-3" />
                      <h3 className="text-xl font-bold text-white/95 leading-tight font-heading px-4">
                        {study.title}
                      </h3>
                    </div>
                  )}

                  {/* High-End Download/Read Overlay */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-sm p-6 gap-3 z-20">
                    <Link
                      href={`/resources/case-studies/${study.slug}`}
                      className="w-44 bg-white hover:bg-teal-50 text-slate-950 py-2.5 rounded-full font-bold text-xs text-center flex items-center justify-center gap-2 uppercase tracking-widest transition-all shadow-lg"
                    >
                      <FileText className="w-4 h-4" />
                      Read Online
                    </Link>
                    <button
                      onClick={(e) => handleCardClick(e, study)}
                      className="w-44 bg-primary hover:bg-teal-500 text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>

                  {/* Left Bottom Category Badge */}
                  {study.category && (
                    <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold text-white tracking-widest uppercase border border-primary/20 z-10">
                      {study.category}
                    </div>
                  )}
                </div>

                {/* Case Study Details */}
                <div className="p-8 pb-10 flex-grow flex flex-col justify-between">
                  <div>
                    <Link href={`/resources/case-studies/${study.slug}`}>
                      <h2 className="text-2xl font-black text-white font-heading mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight cursor-pointer">
                        {study.title}
                      </h2>
                    </Link>
                    {study.description && (
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {study.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Engineering Case Study</span>
                    <Link 
                      href={`/resources/case-studies/${study.slug}`}
                      className="text-primary font-bold hover:underline"
                    >
                      READ ONLINE →
                    </Link>
                  </div>
                </div>
              </div>
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

      {/* Glassmorphic Download Popup Form Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedStudy(null)}
            ></motion.div>

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 max-w-md w-full shadow-2xl z-10 overflow-hidden text-slate-200"
            >
              {/* Decorative radial light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedStudy(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 shadow-lg shadow-teal-500/10">
                    <Download className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400 text-sm">Your download should start automatically.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-2">Case Study Download</span>
                    <h3 className="text-xl font-bold text-white font-heading line-clamp-2 leading-tight">
                      {selectedStudy.title}
                    </h3>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Business Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Designation</label>
                      <input 
                        type="text" 
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="e.g. Technical Director"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm tracking-wider uppercase transition-colors shadow-lg shadow-teal-500/15 mt-6 flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Submit & Download
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
