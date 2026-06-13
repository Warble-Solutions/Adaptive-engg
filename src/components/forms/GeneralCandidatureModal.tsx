"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

// Client-side portal helper to render components at the document body root level
function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
}

export default function GeneralCandidatureModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 bg-primary hover:bg-[#0da08a] text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 duration-250 cursor-pointer text-base uppercase tracking-wider font-heading"
      >
        <Send className="w-5 h-5" />
        Submit Your Candidature
      </button>

      {isOpen && (
        <Portal>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <div 
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-250">
              
              {/* Header with Title and Close Button */}
              <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-slate-800/60">
                <h3 className="text-xl font-bold text-white font-heading">
                  General Candidature
                </h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="overflow-y-auto p-8">
                <ApplicationForm jobId="general-application" title="Submit Your Candidature" flat={true} />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
