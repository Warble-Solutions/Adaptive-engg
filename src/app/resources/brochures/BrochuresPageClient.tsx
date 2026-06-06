"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, FileText, Search, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";

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

  // Popup form state
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the 3 new brochures to place at the top
  const staticBrochures: Brochure[] = [
    {
      id: "static-analytics",
      title: "Advanced Analytics Brochure",
      slug: "advanced-analytics-brochure",
      thumbnailUrl: "",
      pdfUrl: "/brochures/Advanced analytics_Brochure.pdf",
      category: "Unified Platform",
      sortOrder: -3
    },
    {
      id: "static-cms",
      title: "Central Monitoring System (CMS) Brochure",
      slug: "cms-brochure",
      thumbnailUrl: "",
      pdfUrl: "/brochures/CMS_Brochure.pdf",
      category: "Unified Platform",
      sortOrder: -2
    },
    {
      id: "static-scada",
      title: "SCADA Solutions Brochure",
      slug: "scada-brochure",
      thumbnailUrl: "",
      pdfUrl: "/brochures/SCADA_Brochure.pdf",
      category: "SCADA & Automation",
      sortOrder: -1
    }
  ];

  // Combine static brochures (placed at top) with database brochures
  const allBrochures = [...staticBrochures, ...brochures];

  // Dynamically extract categories from all records
  const dynamicCategories = Array.from(new Set(allBrochures.map(b => b.category).filter(Boolean))) as string[];
  const categories = ["All", ...dynamicCategories];

  // Filter brochures
  const filteredBrochures = allBrochures.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "All" || doc.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (e: React.MouseEvent, doc: Brochure) => {
    e.preventDefault();
    setSelectedBrochure(doc);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBrochure) return;

    // Simulate API submission
    console.log("Saving user details for brochure download:", formData);

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = selectedBrochure.pdfUrl;
    link.download = selectedBrochure.pdfUrl.split("/").pop() || `${selectedBrochure.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message briefly before closing
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedBrochure(null);
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
              <button
                onClick={(e) => handleCardClick(e, doc)}
                className="w-full text-left group flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full justify-between cursor-pointer"
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
                      <div className="text-lg font-bold text-white/90 leading-snug font-heading px-4">
                        {doc.title}
                      </div>
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
                    <div className="text-base font-bold text-white font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {doc.title}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono w-full">
                    <span>PDF Document</span>
                    <span className="text-primary font-bold group-hover:underline">GET FILE →</span>
                  </div>
                </div>
              </button>
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

      {/* Glassmorphic Download Popup Form Modal */}
      <AnimatePresence>
        {selectedBrochure && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedBrochure(null)}
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
                onClick={() => setSelectedBrochure(null)}
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
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Brochure Download Portal</span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug pr-8">
                    {selectedBrochure.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                    Please provide your contact information to access the document.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Company *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. AEPL"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Role / Title</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Engineer"
                          value={formData.designation}
                          onChange={(e) => setFormData({...formData, designation: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-primary hover:bg-teal-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Submit & Download</span>
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
