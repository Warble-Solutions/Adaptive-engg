"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Renewable Solutions",
        tagline: "Powering Tomorrow",
        image: "/imgs/banner/4.jpg",
        subtext: "Unifying Manufacturing Power with Digital Intelligence to build the Future of Energy",
        cta: "Our Solutions",
        link: "/renewable",
        ctaSecondary: "Our Expertise",
        linkSecondary: "/about",
    },
    {
        id: 2,
        title: "PM-KUSUM Solutions",
        tagline: "India's Most Trusted Company",
        image: "/imgs/farm.jpg",
        subtext: "Revolutionizing Agriculture through Smart Solar Pumping & Next-Gen IoT Solutions",
        cta: "View Solutions",
        link: "/pm-kusum",
        ctaSecondary: "Contact Us",
        linkSecondary: "/contact",
    },
    {
        id: 3,
        title: "Infrastructure Solutions",
        tagline: "Engineering Excellence",
        image: "/imgs/tunnel.jpg",
        subtext: "Delivering Critical Turnkey E&I Infrastructure for Tunnels, Data Centers & Heavy Industry",
        cta: "View Projects",
        link: "/#projects",
        ctaSecondary: "Get Quote",
        linkSecondary: "/contact",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds pause as requested
        return () => clearTimeout(timer);
    }, [current]);

    const slide = slides[current];

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Layer (Ken Burns Effect) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        src={slide.image}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 7, ease: "linear" }
                        }}
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="inline-flex items-center gap-2 mb-6"
                            >
                                <span className="w-12 h-[2px] bg-primary"></span>
                                <span className="text-white/90 uppercase tracking-widest text-sm font-bold">{slide.tagline}</span>
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 font-heading drop-shadow-2xl overflow-hidden">
                                {slide.title.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.6, ease: "backOut" }}
                                        className={`inline-block mr-4 ${word.includes("Solution") ? "gradient-heading" : ""}`}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-slate-200 text-lg sm:text-lg md:text-2xl leading-relaxed mb-12 max-w-2xl font-light drop-shadow-md border-l-4 border-primary pl-6 bg-black/20 backdrop-blur-sm rounded-r-lg py-4"
                            >
                                {slide.subtext}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="flex flex-wrap items-center gap-6"
                            >
                                {/* Primary Button */}
                                <Link
                                    href={slide.link}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#0da08a] text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-teal-900/40 group overflow-hidden relative"
                                >
                                    <span className="relative z-10">{slide.cta}</span>
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                                </Link>

                                {/* Secondary Button */}
                                <Link
                                    href={slide.linkSecondary}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md"
                                >
                                    {slide.ctaSecondary}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:bg-[#0da08a] text-dark transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:bg-[#0da08a] text-dark transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-12 z-20 flex gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 transition-all duration-500 rounded-full ${current === idx ? "w-16 bg-white" : "w-8 bg-white/30"}`}
                    />
                ))}
            </div>
        </div>
    );
}
