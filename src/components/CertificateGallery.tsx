"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const certificates = [
  {
    src: "/imgs/abdc_panel_certificates/1-2.png.webp",
    title: "MCC Panel — Short Circuit Test",
    subtitle: "1250A, 415V, 50Hz 3PH+N MCC Panel",
    standard: "IS/IEC 61439-1:2011 & IS/IEC 61439-2:2011",
    reportNo: "RP-2021-008261",
    date: "Aug 2020",
  },
  {
    src: "/imgs/abdc_panel_certificates/2-2.png.webp",
    title: "800V LT Panel — IP55 Protection Test",
    subtitle: "4000A, 800V AC LT Panel",
    standard: "IEC 61439-1:2020 & IEC 61439-2:2020",
    reportNo: "RP-2324-008718",
    date: "Jun 2023",
  },
  {
    src: "/imgs/abdc_panel_certificates/3-1.png.webp",
    title: "800V LT Panel — Dielectric Properties Test",
    subtitle: "4000A, 800V AC LT Panel",
    standard: "IEC 61439-1:2020 & IEC 61439-2:2020",
    reportNo: "RP-2324-021201",
    date: "Oct 2023",
  },
  {
    src: "/imgs/abdc_panel_certificates/4-1.png.webp",
    title: "440V LT Panel — Temperature Rise Test",
    subtitle: "4000A, 440V AC LT Panel",
    standard: "IEC 61439-1:2020 & IEC 61439-2:2020",
    reportNo: "RP-2223-028084",
    date: "Dec 2022",
  },
  {
    src: "/imgs/abdc_panel_certificates/5-1.png.webp",
    title: "Control Panel — IP55 Enclosure Test",
    subtitle: "230V, 32A Single Phase Control Panel",
    standard: "IS/IEC 60529:2001",
    reportNo: "RP-1718-063932",
    date: "Mar 2018",
  },
  {
    src: "/imgs/abdc_panel_certificates/6-1.png.webp",
    title: "440V LT Panel — Short Circuit Test (65kA)",
    subtitle: "4000A, 440V AC LT Panel",
    standard: "IEC 61439-1:2020 & IEC 61439-2:2020",
    reportNo: "RP-2223-039271",
    date: "Mar 2023",
  },
];

export default function CertificateGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPreview = (index: number) => setSelectedIndex(index);
  const closePreview = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex(prev => prev !== null ? (prev + 1) % certificates.length : null);
  const goPrev = () => setSelectedIndex(prev => prev !== null ? (prev - 1 + certificates.length) % certificates.length : null);

  return (
    <>
      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <SectionWrapper key={i} delay={i * 0.08}>
            <button
              onClick={() => openPreview(i)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-white w-full text-left cursor-pointer"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 group-hover:bg-slate-900 hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Click to Preview</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{cert.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{cert.subtitle}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cert.standard.split(" & ")[0]}</span>
                      <span className="text-[10px] text-slate-400">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </SectionWrapper>
        ))}
      </div>

      {/* LIGHTBOX PREVIEW */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closePreview}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 w-[95vw] max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{certificates[selectedIndex].title}</h3>
                    <p className="text-xs text-slate-500">{certificates[selectedIndex].subtitle} • {certificates[selectedIndex].reportNo}</p>
                  </div>
                </div>
                <button
                  onClick={closePreview}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-red-500 flex items-center justify-center text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              <div className="flex-grow relative bg-white overflow-auto">
                <div className="min-h-full flex items-center justify-center p-4">
                  <Image
                    src={certificates[selectedIndex].src}
                    alt={certificates[selectedIndex].title}
                    width={800}
                    height={1100}
                    className="object-contain max-h-[75vh] w-auto rounded-lg shadow-md"
                    quality={95}
                  />
                </div>
              </div>

              {/* Footer nav */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100 bg-slate-50 shrink-0">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 text-slate-600 text-sm font-bold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs text-slate-400 font-bold">
                  {selectedIndex + 1} / {certificates.length}
                </span>
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 text-slate-600 text-sm font-bold transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
