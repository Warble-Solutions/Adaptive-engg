import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, ClipboardList, CheckCircle2, Bell, FileCheck, Package, QrCode, Camera, Smartphone, Clock, BarChart3, Users, Shield, Calendar, Cog, Monitor, Eye, Zap, Battery } from "lucide-react";
import { CMMSDashboard } from "@/components/DashboardMockups";

export const metadata = {
 title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
 description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">

 {/* ═══════════════════════════════════════════ */}
 {/* HERO — Split layout: text left, dashboard right */}
 <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
 {/* Background Image with Tint */}
 <div className="absolute inset-0 z-0">
  <img src="/images/renewable/cmms-hero-bg.png" alt="CMMS Solutions" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-slate-950/85"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
 </div>

 <div className="absolute inset-0 z-0">
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
 </div>
 <div className="z-10 max-w-7xl mx-auto w-full relative">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Left — Text */}
 <SectionWrapper>
 <div>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
 <Wrench className="w-4 h-4" />
 <span>Unified Renewable Solution</span>
 </div>
 <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
 Computerized Maintenance<br />
 <span className="gradient-heading">Management System</span>
 </h1>
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
 Automated workorder management, standardized SOPs across the enterprise, reduced mean time to repair, and effective cost control with inventory management.
 </p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Request Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </SectionWrapper>

 {/* Right — Dashboard */}
 <SectionWrapper delay={0.3}>
 <div className="h-[440px] hidden lg:block">
 <CMMSDashboard />
 </div>
 </SectionWrapper>
 </div>
 </div>
 {/* Scroll indicator */}
 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10 animate-bounce">
 <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════ */}
 {/* FOUR PILLARS — Full-width stacked cards */}
 {/* ═══════════════════════════════════════════ */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-6xl mx-auto px-6">
 <SectionWrapper>
 <div className="mb-16">
 <span className="text-xs font-bold text-[#0da08a] uppercase tracking-widest block mb-4">What it does</span>
 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-heading">Four pillars of<br />intelligent maintenance.</h2>
 </div>
 </SectionWrapper>

 <div className="space-y-4">
 {[
 {
 num: "01",
 title: "Automated Work Orders",
 desc: "SCADA alarm fires → work order auto-creates → nearest qualified technician gets notified → SLA clock starts ticking. No manual intervention. No delays.",
 },
 {
 num: "02",
 title: "Standardized SOPs",
 desc: "Every task follows a defined procedure with step-by-step checklists, embedded images, and mandatory photo evidence. Consistent quality across 100+ sites.",
 },
 {
 num: "03",
 title: "Reduced Mean Time to Repair",
 desc: "AI-driven task prioritization. Auto-assignment based on proximity and skill set. Push notifications with SLA deadlines. Average MTTR reduction: 60%.",
 },
 {
 num: "04",
 title: "Inventory & Cost Control",
 desc: "Track every spare part, consumable, and tool across your fleet. Min/max quantity alerts. Vendor management. Cost-per-work-order analysis.",
 },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group relative p-10 md:p-14 rounded-3xl border border-slate-100 hover:border-[#0da08a] bg-white hover:border-primary/50 hover:shadow-xl shadow-xl transition-all duration-500 overflow-hidden">
 <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
 <span className="text-7xl md:text-8xl font-black text-teal-500/30 group-hover:text-primary/40 select-none shrink-0 leading-none transition-colors duration-300">{item.num}</span>
 <div>
 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-primary mb-3 tracking-tight transition-colors duration-300">{item.title}</h3>
 <p className="text-slate-500 group-hover:text-slate-700 text-base md:text-lg leading-relaxed max-w-2xl transition-colors duration-300">{item.desc}</p>
 </div>
 </div>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════ */}
 {/* WORKFLOW — Fault to Fix */}
 {/* ═══════════════════════════════════════════ */}
 <section className="py-28 bg-transparent text-white relative z-10">
 <div className="max-w-6xl mx-auto px-6 relative z-10">
 <SectionWrapper>
 <div className="text-center mb-20">
 <span className="text-xs font-bold text-teal-400/70 uppercase tracking-widest block mb-4">The flow</span>
 <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Fault to fix.<br />Fully automated.</h2>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
 {[
 { step: "Detect", icon: <Bell className="w-6 h-6" />, desc: "SCADA alarm triggers or scheduled PM due date reached", color: "text-red-400" },
 { step: "Dispatch", icon: <Users className="w-6 h-6" />, desc: "Auto-assign to nearest qualified technician with SLA", color: "text-teal-400" },
 { step: "Execute", icon: <Camera className="w-6 h-6" />, desc: "Follow SOP checklists, capture photo evidence on mobile", color: "text-teal-400" },
 { step: "Resolve", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Verify completion, log root cause, update knowledge base", color: "text-teal-400" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="bg-slate-900/80 backdrop-blur-sm p-8 md:p-10 h-full flex flex-col group hover:bg-white/[0.04] transition-colors">
 <div className={`${item.color} mb-6 group-hover:scale-110 transition-transform`}>
 {item.icon}
 </div>
 <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
 <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
 <div className="mt-6 text-[10px] font-bold text-white/10 uppercase tracking-widest">Step {(i + 1).toString().padStart(2, '0')}</div>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════ */}
 {/* ADDITIONAL CAPABILITIES */}
 {/* ═══════════════════════════════════════════ */}
 <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Additional Capabilities</h2>
 </SectionWrapper>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 { icon: <QrCode className="w-5 h-5" />, text: "QR code-based asset identification" },
 { icon: <ClipboardList className="w-5 h-5" />, text: "Multi-step, multi-task complex maintenance" },
 { icon: <Calendar className="w-5 h-5" />, text: "Preventive maintenance scheduling" },
 { icon: <BarChart3 className="w-5 h-5" />, text: "Comprehensive KPIs (MTBF, MTTR, OEE)" },
 { icon: <FileCheck className="w-5 h-5" />, text: "Root cause analysis & incident logging" },
 { icon: <Smartphone className="w-5 h-5" />, text: "Mobile asset management app" },
 { icon: <CheckCircle2 className="w-5 h-5" />, text: "Pass / Fail / Warn task feedbacks" },
 { icon: <Camera className="w-5 h-5" />, text: "Mandatory photo uploads for verification" },
 { icon: <Cog className="w-5 h-5" />, text: "Integration with plant SCADA & ERP" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.05}>
 <div className="group flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/50 hover:shadow-xl hover:border-[#0da08a] shadow-md transition-all duration-300">
 <span className="text-[#0da08a] transition-colors">{item.icon}</span>
 <span className="font-medium text-slate-700 text-sm transition-colors">{item.text}</span>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* MAINTENANCE FIELD OPERATIONS IMAGE SECTION */}
 <section className="py-20 bg-slate-50 relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
 <img 
 src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
 alt="Technician maintaining solar installation" 
 className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
 <div className="absolute bottom-6 left-6 text-white">
 <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Field Services</p>
 <h4 className="text-lg font-bold">Technician Performing Preventive Maintenance</h4>
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div>
 <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Operations & Maintenance</span>
 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Empowering field technicians with standardized checklists</h3>
 <p className="text-slate-600 leading-relaxed mb-6">
 Close the loop on system alerts immediately. Technicians receive detailed work order sheets directly on their mobile devices, outlining standard procedures, target metrics, and mandatory photo verification requirements to ensure consistent compliance across your fleet.
 </p>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>Offline-first mobile capabilities</span>
 </div>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>Standardized verification flow with photos</span>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* OTHER SOLUTIONS */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
 Unified Renewable Suite
 </div>
 <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
 <p className="text-slate-500 mt-3 max-w-xl mx-auto">Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.</p>
 </div>
 </SectionWrapper>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
 {[
 { href: "/renewable/unified/scada", label: "SCADA", abbr: "SCADA", icon: <Monitor className="w-5 h-5" />, desc: "Scalable SCADA architecture with rich renewable libraries handling millions of real-time tags." },
 { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all your renewable assets." },
 { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, custom report builder and historical analysis." },
 { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
 { href: "/renewable/unified/ems-bess", label: "Energy Management System", abbr: "EMS-BESS", icon: <Battery className="w-5 h-5" />, desc: "ML-based energy arbitrage, SoC management, and peak shaving for battery storage." },
 ].map((sol, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <Link href={sol.href} className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/80 rounded-3xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-left">
 {/* Subtle top-right ambient hover highlight */}
 <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

 {/* Category Abbr Pill */}
 <div className="flex items-center justify-between mb-6">
 <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
 {sol.abbr}
 </span>
 <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
 {sol.icon}
 </div>
 </div>

 {/* Text Details */}
 <div className="flex-1 flex flex-col">
 <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
 {sol.label}
 </h3>
 <p className="text-slate-500 text-sm leading-relaxed flex-grow">
 {sol.desc}
 </p>
 </div>

 {/* Learn More Action Link */}
 <div className="flex items-center gap-1.5 text-primary font-bold text-sm mt-6 group-hover:gap-2.5 transition-all">
 <span>Learn More</span>
 <ArrowRight className="w-4 h-4" />
 </div>
 </Link>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════ */}
 {/* CTA */}
 {/* ═══════════════════════════════════════════ */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Streamline Your Maintenance Operations</h2>
 <p className="text-gray-400 mb-8 text-lg">See how CMMS can reduce downtime and optimize your O&M costs.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-[rgba(13,160,138,0.3)]">
 Get Started <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
