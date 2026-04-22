import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Factory, Zap, CloudCog, ShieldCheck, TrendingUp, Settings } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

export const metadata = {
 title: "Effluent Treatment Plant (ETP) | Adaptive Engineering",
 description: "Electrical, Instrumentation and Automation Solutions for Effluent Treatment and MBR Technology.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <img src="/images/water/hero-etp.png" alt="Industrial Effluent Treatment" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-black/70 to-[#0B1120] z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
 <Factory className="w-4 h-4" />
 <span>Industrial Automation</span>
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Effluent Treatment (ETP)
 </h1>
 <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
 Experts in providing E&I and Automation Solutions for Effluent Treatment and MBR Technology, ensuring sustainability and compliance.
 </p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
 Discuss Your Facility <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>

 {/* STATS STRIP */}
 <section className="py-12 bg-[#0B1120] relative z-20 border-b border-teal-900/50">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-900/50">
 <SectionWrapper delay={0.1}>
 <div className="py-4">
 <div className="text-4xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-teal-500">{WATER_STATS.yearsExperience.suffix}</span></div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.yearsExperience.label}</p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="py-4">
 <div className="text-4xl font-black text-white mb-2">{WATER_STATS.mldEffluentTreated.value}<span className="text-teal-500">{WATER_STATS.mldEffluentTreated.suffix}</span></div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.mldEffluentTreated.label}</p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.3}>
 <div className="py-4">
 <div className="text-4xl font-black text-white mb-2">{WATER_STATS.statesCovered.value}<span className="text-teal-500">{WATER_STATS.statesCovered.suffix}</span></div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.statesCovered.label}</p>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* THREE COLUMNS: Solutions, Benefits, Value */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold text-slate-900 font-heading">Complete MBR & RO Control</h2>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
 {/* Column 1: Solutions */}
 <SectionWrapper delay={0.1}>
 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
 <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
 <Settings className="w-6 h-6" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Proven Solutions</h3>
 <ul className="space-y-4">
 {[
 "Efficient process control of MBR and RO systems",
 "Integrated SCADA for real-time data access and control",
 "Advanced reporting and analytics tools",
 "Mobile Asset Management Systems"
 ].map((item, i) => (
 <li key={i} className="flex gap-3 text-slate-700 text-sm font-medium">
 <div className="mt-1 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div></div>
 {item}
 </li>
 ))}
 </ul>
 </div>
 </SectionWrapper>

 {/* Column 2: Benefits */}
 <SectionWrapper delay={0.2}>
 <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
 <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[rgba(13,160,138,0.3)]">
 <TrendingUp className="w-6 h-6" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Key Benefits</h3>
 <p className="text-slate-600 text-sm mb-6">
 We provide brown-field turn-key solutions integrating cutting-edge Industry 4.0 technologies:
 </p>
 <div className="space-y-3">
 {[
 "Optimize Energy and Chemical Usage",
 "Increase plant capacity and throughput",
 "Enable secure remote monitoring",
 "Lower downtime of operations",
 "Better optimization of critical assets"
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-teal-100 text-sm font-bold text-slate-800">
 <ShieldCheck className="w-4 h-4 text-teal-500" />
 {item}
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>

 {/* Column 3: Value Creation */}
 <SectionWrapper delay={0.3}>
 <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 h-full text-white relative overflow-hidden hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300">
 <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-2xl"></div>
 <div className="w-12 h-12 bg-white/10 text-teal-400 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 relative z-10">
 <CloudCog className="w-6 h-6" />
 </div>
 <h3 className="text-2xl font-bold text-white mb-6 font-heading relative z-10">Value Creation</h3>
 
 <div className="space-y-6 relative z-10">
 <div>
 <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-1">Scalable Architecture</h4>
 <p className="text-slate-300 text-sm">Cutting edge SCADA frameworks.</p>
 </div>
 <div>
 <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-1">Cloud Competency</h4>
 <p className="text-slate-300 text-sm">Secure and exclusive data storage & analytics.</p>
 </div>
 <div>
 <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-1">Data Analytics</h4>
 <p className="text-slate-300 text-sm">Facilitating rapid decision making.</p>
 </div>
 <div>
 <h4 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-1">Expert Team</h4>
 <p className="text-slate-300 text-sm">Highly Professional Project Management.</p>
 </div>
 </div>
 </div>
 </SectionWrapper>

 </div>
 </div>
 </section>
 </div>
 );
}
