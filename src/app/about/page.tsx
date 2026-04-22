"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { CheckCircle2, Rocket, Factory, TrendingUp, Trophy, MapPin, Cpu, Activity, Wrench, Users, Award, Zap } from "lucide-react";
import { WATER_STATS, TUNNEL_STATS } from "@/lib/constants";
import MicroCTA from "@/components/ui/MicroCTA";
import Counter from "@/components/ui/Counter";
import { COMPANY_STATS } from "@/lib/constants";

// NOTE: Navbar and Footer are provided globally by layout.tsx

export default function AboutPage() {
 const [leaderIndex, setLeaderIndex] = useState(0);

 return (
 <div className="flex flex-col w-full">
 {/* 1. HERO SECTION (Dark) */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 {/* Background Image */}
 <div className="absolute inset-0 z-0">
 <img
 src="/imgs/about.jpg"
 alt="About Background"
 className="w-full h-full object-cover"
 />
 {/* Gradient Overlay for better text contrast */}
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
 </div>

 {/* Content */}
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Engineering <span className="text-primary drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Legacy</span>
 </h1>
 <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
 Three Decades of Excellence in Renewable Energy & Automation
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* 2. THE BLUEPRINT (Light) */}
 <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="flex flex-col md:flex-row gap-16 items-center">
 <div className="md:w-1/2">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Our Mission</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 Continuously evolve to maximize value of each installation towards providing the Best Customer Experience
 </p>
 </SectionWrapper>
 </div>
 <div className="md:w-1/2">
 <SectionWrapper delay={0.2}>
 <div className="grid grid-cols-3 gap-8 text-center">
 <div>
 <Counter
 value={COMPANY_STATS.yearsExperience.value}
 suffix={COMPANY_STATS.yearsExperience.suffix}
 className="text-4xl font-extrabold text-primary mb-1 block"
 />
 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years</div>
 </div>
 <div>
 <Counter
 value={COMPANY_STATS.manpower.value}
 suffix={COMPANY_STATS.manpower.suffix}
 className="text-4xl font-extrabold text-primary mb-1 block"
 />
 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manpower</div>
 </div>
 <div>
 <Counter
 value={COMPANY_STATS.scadaInstalled.value}
 suffix={COMPANY_STATS.scadaInstalled.suffix}
 className="text-4xl font-extrabold text-primary mb-1 block"
 />
 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{COMPANY_STATS.scadaInstalled.label}</div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </div>
 </section>

 {/* 3. WHO WE ARE (Dark) */}
 <section className="section-dark py-32 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-20">
 <span className="text-primary font-bold uppercase text-sm tracking-widest mb-4 block">Who We Are</span>
 <h2 className="text-4xl md:text-5xl font-bold font-heading">Engineering Excellence,<br className="hidden md:block" /> End to End</h2>
 </div>
 </SectionWrapper>

 {/* Main Content Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
 {/* Left: Company Description */}
 <div className="space-y-10">
 <SectionWrapper delay={0.1}>
 <div className="flex items-start gap-5">
 <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 mt-1">
 <Wrench className="w-6 h-6 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold mb-3">Complete Turnkey Solutions</h3>
 <p className="text-gray-400 leading-relaxed">
 AEPL offers end-to-end solutions starting from conceptualizing, designing, supplying, installing, testing, commissioning and maintaining of complete industrial automation and electrical (upto 66KV) systems. It also provides customized software solutions for Central Plant Monitoring and Mobile Asset Management packages to make the most of any installation.
 </p>
 </div>
 </div>
 </SectionWrapper>

 <SectionWrapper delay={0.2}>
 <div className="flex items-start gap-5">
 <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 mt-1">
 <Users className="w-6 h-6 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold mb-3">Passionate Team, Proven Results</h3>
 <p className="text-gray-400 leading-relaxed">
 Driven by a passionate team of {COMPANY_STATS.manpower.value}+ engineers under the guidance of the founders carrying rich experience of more than {COMPANY_STATS.yearsExperience.value}+ years, team AEPL has successfully completed {COMPANY_STATS.scadaInstalled.value}+ projects across India. Completing projects before time with the demonstration of the best quality work and use of latest technologies enables AEPL to deliver maximum value.
 </p>
 </div>
 </div>
 </SectionWrapper>

 <SectionWrapper delay={0.3}>
 <div className="flex items-start gap-5">
 <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 mt-1">
 <Award className="w-6 h-6 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold mb-3">Preferred Project Partner</h3>
 <p className="text-gray-400 leading-relaxed">
 AEPL has achieved an exceptional track record of managing Renewable Plant Monitoring Software with an installed base of {COMPANY_STATS.installedBase.value}GW+ at {COMPANY_STATS.satisfiedCustomers.value}+ plants across India. It also manages {WATER_STATS.supplySchemes.value}+ Water Supply Schemes and India&apos;s widest highway twin-tunnel of {TUNNEL_STATS.twinTubeRoad.value}KM where complete E&I packages are delivered. With such a vast experience, cost leadership, faster execution and quality of work, the company is considered a &ldquo;Preferred Project Partner&rdquo; by large corporate houses of India.
 </p>
 </div>
 </div>
 </SectionWrapper>
 </div>

 {/* Right: Key Highlights */}
 <SectionWrapper delay={0.2} className="h-full">
 <div className="grid grid-cols-2 gap-6 h-full">
 {[
 { icon: Zap, value: `${COMPANY_STATS.installedBase.value}GW+`, label: "Installed Base" },
 { icon: Users, value: `${COMPANY_STATS.manpower.value}+`, label: "Engineers" },
 { icon: Factory, value: COMPANY_STATS.electricalPanels.formatted, label: "Panels Supplied" },
 { icon: Activity, value: `${COMPANY_STATS.satisfiedCustomers.value}+`, label: "Plants Monitored" },
 { icon: MapPin, value: `${WATER_STATS.supplySchemes.value}+`, label: "Water Schemes" },
 { icon: Trophy, value: `${COMPANY_STATS.yearsExperience.value}+`, label: "Years Experience" },
 ].map((item, i) => (
 <div key={i} className="p-6 flex flex-col justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 h-full">
 <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
 <div className="text-3xl font-black text-white font-heading mb-1">{item.value}</div>
 <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</div>
 </div>
 ))}
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 4. LEADERSHIP TEAM (Light) */}
 <section className="section-light py-32 bg-white rounded-t-[40px] relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Leadership</h2>
 </SectionWrapper>
 <div className="relative">
 <SectionWrapper delay={0.2}>
 <div className="overflow-hidden p-4">
 <AnimatePresence mode="popLayout">
 <motion.div
 className="flex gap-8"
 initial={false}
 >
 {[0, 1, 2, 3].map((offset) => {
 const leader = [
 {
 name: "Chirag Soni",
 role: "Managing Director",
 img: "https://test.adaptive-engg.com/wp-content/uploads/2023/09/chirag-1.png.webp"
 },
 {
 name: "Jay Patel",
 role: "Director",
 img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Jay-1.png.webp"
 },
 {
 name: "Keyur Amin",
 role: "C.E.O",
 img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Keyur-1.png.webp"
 },
 {
 name: "Ajit Patel",
 role: "Technical Advisor",
 img: "https://adaptive-engg.com/wp-content/uploads/2023/06/ajit.png.webp"
 },
 {
 name: "Chintan Patel",
 role: "Head Sales",
 img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Chintan-1.png.webp"
 }
 ][(leaderIndex + offset) % 5];

 return (
 <motion.div
 key={leader.name}
 layout="position"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.4 }}
 className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] premium-card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/50 hover:shadow-xl shadow-xl hover:border-primary/50 hover:shadow-xl -translate-y-2 group"
 >
 <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-md mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-white">
 <img
 src={leader.img}
 alt={leader.name}
 className="w-full h-full object-cover object-top"
 />
 </div>
 <h3 className="text-xl font-bold text-slate-900 text-center mb-1">{leader.name}</h3>
 <p className="text-primary font-bold text-xs uppercase tracking-widest text-center">{leader.role}</p>
 </motion.div>
 );
 })}
 </motion.div>
 </AnimatePresence>
 </div>
 </SectionWrapper>

 {/* Controls */}
 <button
 onClick={() => setLeaderIndex((prev) => (prev - 1 + 5) % 5)}
 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 hover:shadow-xl scale-110 transition-all z-10"
 >
 <ChevronLeft className="w-6 h-6" />
 </button>
 <button
 onClick={() => setLeaderIndex((prev) => (prev + 1) % 5)}
 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 hover:shadow-xl scale-110 transition-all z-10"
 >
 <ChevronRight className="w-6 h-6" />
 </button>
 </div>
 </div>
 </section>

 {/* 5. ACCREDITATIONS (Alt Light) */}
 <section className="py-24 bg-slate-50 border-t border-slate-200 relative z-20">
 <div className="max-w-6xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Certified Excellence</h2>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* ISO Certification */}
 <SectionWrapper delay={0.1}>
 <div className="premium-card p-10 bg-white rounded-2xl border border-slate-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center gap-8">
 <div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
 <CheckCircle2 className="w-48 h-48 text-primary" />
 </div>
 <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
 <CheckCircle2 className="w-10 h-10" />
 </div>
 <div>
 <h3 className="text-2xl font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
 <p className="text-slate-500 font-medium">Quality Management System</p>
 <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
 <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
 Active
 </div>
 </div>
 </div>
 </SectionWrapper>

 {/* TUV Certification */}
 <SectionWrapper delay={0.2}>
 <div className="premium-card p-10 bg-white rounded-2xl border border-slate-100 hover:border-teal-500 hover:shadow-xl shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center gap-8">
 <div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
 <CheckCircle2 className="w-48 h-48 text-teal-600" />
 </div>
 <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-110 transition-transform">
 <CheckCircle2 className="w-10 h-10" />
 </div>
 <div>
 <h3 className="text-2xl font-bold text-slate-900 mb-2">TUV Nord Certified</h3>
 <p className="text-slate-500 font-medium">Global Safety & Quality Standards</p>
 <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-wider">
 <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
 Verified
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 6. CTA (Dark) */}
 <section className="section-dark text-center py-32 bg-transparent text-white relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-4xl font-bold mb-8 font-heading">Want to join our team?</h2>
 <Link href="/careers" className="inline-block px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 View Careers
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
