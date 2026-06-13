"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { CaseStudy } from "@/lib/staticCaseStudies";

export default function CaseStudyDetailClient({ caseStudy }: { caseStudy: CaseStudy }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API submission
    console.log("Saving user details for case study download:", formData);

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = caseStudy.pdfUrl;
    link.download = caseStudy.pdfUrl.split("/").pop() || `${caseStudy.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message briefly before closing
    setIsSubmitted(true);
    setTimeout(() => {
      setIsPopupOpen(false);
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
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-slate-950 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.8} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>

        {/* Hero Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-start">
          <div className="lg:col-span-2">
            <SectionWrapper>
              {caseStudy.category && (
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full w-fit block mb-4">
                  {caseStudy.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              {caseStudy.description && (
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                  {caseStudy.description}
                </p>
              )}
            </SectionWrapper>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4 bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold font-heading mb-2">Want to save this study?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 font-sans">
              Get the complete offline PDF version including detailed schematics and instrumentation specs.
            </p>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="w-full py-3 bg-primary hover:bg-teal-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
            >
              <Download className="w-4 h-4 animate-pulse" />
              Download PDF
            </button>
          </div>
        </div>

        {/* PDF Document Viewer Container */}
        <SectionWrapper delay={0.1}>
          <div className="relative border border-white/10 rounded-[2rem] overflow-hidden bg-slate-950 shadow-[0_0_50px_rgba(13,160,138,0.1)] p-4 md:p-6 mb-8 flex flex-col items-center">
            {/* Header info bar */}
            <div className="w-full pb-4 mb-4 border-b border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                {caseStudy.title.split("Case Study")[0]} PDF Reader
              </span>
              <span className="hidden md:inline text-primary/80">Scroll to read on page</span>
            </div>

            {/* Iframe */}
            <div className="w-full aspect-[4/5] md:h-[800px] overflow-hidden rounded-2xl bg-slate-900 relative">
              <iframe
                src={`${caseStudy.pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0 rounded-2xl bg-white"
                title={caseStudy.title}
              />
            </div>
            
            {/* Mobile/Fallback action */}
            <div className="mt-6 text-center text-xs text-gray-500 md:hidden">
              Can't see the PDF document? 
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="text-primary font-bold ml-1.5 hover:underline cursor-pointer border-0 bg-transparent"
              >
                Download PDF to view.
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Glassmorphic Download Popup Form Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setIsPopupOpen(false)}
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
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer border-0 bg-transparent"
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
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-mono">Case Study Download</span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug pr-8">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed font-sans">
                    Please provide your contact details to download the document.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Company *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">Role / Title</label>
                        <input 
                          type="text" 
                          value={formData.designation}
                          onChange={(e) => setFormData({...formData, designation: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all font-sans"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-primary hover:bg-teal-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer border-0"
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
    </main>
  );
}
