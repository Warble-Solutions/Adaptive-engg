"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Generate all 138 image objects with categories
const TOTAL_IMAGES = 138;
const imagesData = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
  const id = i + 1;
  // Categorize based on ranges to keep the content structured
  let category = "Projects";
  if (id > 45 && id <= 90) {
    category = "Factory";
  } else if (id > 90) {
    category = "Exhibitions";
  }
  
  return {
    id,
    src: `/gallary/${id}.jpg`,
    alt: `Adaptive Engineering - Infrastructure, Solar & Automation Show #${id}`,
    category
  };
});

const CATEGORIES = [
  { id: "All", label: "All Photos" },
  { id: "Projects", label: "Projects & Sites" },
  { id: "Factory", label: "Factory & Manufacturing" },
  { id: "Exhibitions", label: "Exhibitions & Events" }
];

const IMAGES_PER_PAGE = 24;

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered images list
  const filteredImages = imagesData.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  );

  // Slice visible images
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  // Reset pagination on category change
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
  }, [activeCategory]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleNext = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return (prev + 1) % filteredImages.length;
    });
  };

  const handlePrev = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + IMAGES_PER_PAGE, filteredImages.length));
  };

  return (
    <div className="w-full min-h-screen text-white pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb & Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white/80">Media Gallery</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white font-heading tracking-tight mb-6">
            Media & <span className="gradient-heading-light">Gallery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A visual showcase of our 125,000+ sq. ft. manufacturing facility, utility-scale renewable energy installations, water infrastructure SCADA sites, and key industry exhibitions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-slate-900 shadow-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Image element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="p-2 bg-primary/20 backdrop-blur-md rounded-lg border border-primary/30 text-primary">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-primary/20 border border-primary/30 text-primary px-2.5 py-1 rounded-full inline-block mb-2">
                      {img.category === "Factory" ? "Manufacturing" : img.category === "Projects" ? "Project Site" : "Exhibitions"}
                    </span>
                    <h4 className="text-sm font-bold text-white line-clamp-2">
                      Showcase Image #{img.id}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary hover:text-white rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>Load More Photos</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            {/* Close area/click */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />
            
            {/* Controls Header */}
            <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-primary block mb-1">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-sm font-medium">
                  Photo {lightboxIndex + 1} of {filteredImages.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-primary transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-white hover:text-primary transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl max-h-[80vh] w-full px-6 flex items-center justify-center pointer-events-none">
              <motion.img
                key={filteredImages[lightboxIndex].id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/5"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-white hover:text-primary transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
