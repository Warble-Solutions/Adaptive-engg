import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
 title: "Telemetry System | Adaptive Engineering",
 description: "Real-time grid data transmission to SLDC/RLDC via RTU ensuring regulatory compliance and grid visibility.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
 
 {/* HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_telemetry_1776742420287.png')] bg-cover bg-center">
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 mix-blend-multiply z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
 PM-KUSUM
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Telemetry <span className="gradient-heading">System</span>
 </h1>
 <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
 Real-time grid data transmission to SLDC/RLDC via RTU ensuring regulatory compliance and grid visibility.
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* Grid Visibility, Guaranteed */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Grid Visibility, Guaranteed</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
 For grid-connected solar plants, real-time data transmission to the State Load Despatch Centre (SLDC) and Regional Load Despatch Centre (RLDC) is mandatory. Our Telemetry System provides IEC 60870-5-104 and DNP3 compliant data communication through dedicated RTUs, ensuring your plant remains visible to grid operators and avoids penalties for non-compliance.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
 <div className="grid grid-cols-3 gap-8 relative z-10">
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">IEC 104</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Protocol Support</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">99.9%</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Data Availability</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">SLDC/RLDC</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Direct Link</div>
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* System Components */}
 <section className="py-32 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <SectionWrapper>
 <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">System Components</h2>
 </SectionWrapper>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 <SectionWrapper delay={0}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Cpu className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Remote Terminal Unit</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Industrial RTU with IEC 60870-5-104, DNP3, and Modbus protocols. Dual communication channels for redundancy.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.1}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Activity className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Signal Conditioning</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Analog (4-20mA, 0-10V) and digital signal acquisition from CTs, PTs, energy meters, and weather stations.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <ShieldCheck className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Communication</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Dedicated fiber optic or leased line connection to SLDC. Backup 4G cellular channel for failover.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.3}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Zap className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Cyber Security</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 CERC cyber security guidelines compliant with encrypted communication, access control, and audit logging.
 </p>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* Data Points Transmitted */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Data Points Transmitted</h2>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
 <ul className="space-y-5">
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Active Power (MW), Reactive Power (MVAR), Power Factor</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Bus voltage and frequency at point of interconnection</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Breaker status, tap position, and alarm conditions</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Cumulative energy generation (MWh) for scheduling</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Weather data: irradiance, wind speed, and temperature</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Equipment health: transformer temperature, cooling status</span>
 </li>
 </ul>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Telemetry System?</h2>
 <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Get in Touch <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
