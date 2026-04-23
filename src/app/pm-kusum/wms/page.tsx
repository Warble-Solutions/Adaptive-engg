import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
 title: "Weather Monitoring System | Adaptive Engineering",
 description: "Industrial-grade environmental sensors for accurate Performance Ratio calculation and yield assessment.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
 
 {/* HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_wms_1776742435463.png')] bg-cover bg-center">
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 mix-blend-multiply z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
 PM-KUSUM
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Weather Monitoring <span className="gradient-heading">System</span>
 </h1>
 <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
 Industrial-grade environmental sensors for accurate Performance Ratio calculation and yield assessment.
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* Precision Weather Intelligence */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Precision Weather Intelligence</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
 Accurate Performance Ratio (PR) calculation requires precise environmental data. Our Weather Monitoring System provides industrial-grade measurements of Global Horizontal Irradiance (GHI), Global Tilted Irradiance (GTI), module temperature, ambient temperature, wind speed, and humidity. Without accurate weather data, you cannot determine whether underperformance is due to equipment issues or environmental conditions.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
 <div className="grid grid-cols-3 gap-8 relative z-10">
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">±2%</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Irradiance Accuracy</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">6</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Sensor Parameters</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">IEC 61724</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Compliant</div>
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* Sensor Suite */}
 <section className="py-32 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <SectionWrapper>
 <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Sensor Suite</h2>
 </SectionWrapper>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 <SectionWrapper delay={0}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Activity className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Pyranometer</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Secondary standard pyranometer for GHI measurement. Reference cell for GTI. Both calibrated with NABL traceability.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.1}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Zap className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Temperature Sensors</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 PT100 RTD sensors for module back-surface temperature and ambient temperature with ±0.3°C accuracy.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <ShieldCheck className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Wind Sensor</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Ultrasonic anemometer for wind speed and direction measurement. No moving parts — maintenance-free operation.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.3}>
 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 <Cpu className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">Data Logger</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
 Campbell Scientific compatible logger with 1-second sampling, 1-minute averaging, and Modbus/MQTT output.
 </p>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* Installation Standards */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Installation Standards</h2>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
 <ul className="space-y-5">
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Mounting structures as per IEC 61724 guidelines for PV monitoring</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Calibration certificates with NABL accreditation traceability</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Anti-soiling coating on pyranometer domes for reduced maintenance</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Lightning protection with dedicated earth pit for weather station</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Direct integration with SolarWiz for automated PR calculation</span>
 </li>
 <li className="flex items-start gap-4 text-slate-700">
 <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
 <span className="leading-relaxed">Annual recalibration service available with on-site replacement</span>
 </li>
 </ul>
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
 PM-KUSUM Suite
 </div>
 <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
 <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete PM-KUSUM offering covers every layer — from hardware panels to cloud-based monitoring and compliance.</p>
 </div>
 </SectionWrapper>
 <div className="flex flex-wrap justify-center gap-6">
 {[
 { href: "/pm-kusum/iot-scada", abbr: "IoT SCADA", label: "IoT SCADA — SolarWiz", desc: "Real-time plant monitoring gateway with multi-protocol support and state portal integration." },
 { href: "/pm-kusum/reportwiz", abbr: "ReportWiz", label: "ReportWiz", desc: "Automated reporting suite with custom builders, KPI tracking, and multi-format export." },
 { href: "/pm-kusum/cms", abbr: "CMS", label: "Central Monitoring System", desc: "Portfolio-level monitoring with ML anomaly detection and AI assistant." },
 { href: "/pm-kusum/ams", abbr: "AMS", label: "Asset Management System", desc: "End-to-end asset, maintenance, inventory, and work order management." },
 { href: "/pm-kusum/ht-panel", abbr: "HT Panel", label: "HT Panel Solutions", desc: "VCB panels up to 33kV with numerical protection and motorized racking." },
 { href: "/pm-kusum/acdb-panels", abbr: "ACDB", label: "ACDB Panel Solutions", desc: "IP65 rated AC Distribution Boards with surge protection for solar pump connections." },
 { href: "/pm-kusum/telemetry", abbr: "Telemetry", label: "Telemetry System", desc: "Real-time data transmission to SLDC/RLDC via RTU for grid visibility and compliance." },
 ].map((sol, i) => (
 <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
 <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
 <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
 <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
 <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
 <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4 group-hover:gap-2 transition-all">
 Learn More <ArrowRight className="w-4 h-4" />
 </div>
 </Link>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Weather Monitoring System?</h2>
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
