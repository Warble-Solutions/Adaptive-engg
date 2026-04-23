import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Activity, CheckCircle2, Cpu, Award, ThermometerSun, Lock, Gauge, Settings } from "lucide-react";
import CertificateGallery from "@/components/CertificateGallery";
import { ACDBPanelVisual } from "@/components/DashboardMockups";

export const metadata = {
 title: "ACDB Panel Solutions | PM-KUSUM | Adaptive Engineering",
 description: "IP65 rated AC Distribution Boards for PM-KUSUM solar pump connections — 800V & 415V LT panels with surge protection, isolation, and energy metering.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* HERO — Product catalog gradient */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_acdb_1776742278308.png')] bg-cover bg-center">
 <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14]/80 via-[#0a1a14]/60 to-[#0a1a14]/90 mix-blend-multiply"></div>
 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(4,154,137,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
 <Shield className="w-4 h-4" />
 <span>PM-KUSUM</span>
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-heading">
 ACDB Panel <span className="gradient-heading">Solutions</span>
 </h1>
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mt-6">
 IP65 rated AC Distribution Boards for PM-KUSUM solar pump connections with surge protection and isolation. Built for India&apos;s harshest field conditions — deserts, coastal humidity, and monsoon rains.
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* KEY SPECS */}
 <section className="py-16 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-center">
 {[
 { value: "IP65", label: "Protection Rating" },
 { value: "800V", label: "Max System Voltage" },
 { value: "50k+", label: "Units Delivered" },
 { value: "Type 1+2", label: "SPD Protection" },
 { value: "40kA", label: "Surge Rating" },
 ].map((item, i) => (
 <div key={i} className="p-5 bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl border border-teal-100">
 <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{item.value}</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">{item.label}</div>
 </div>
 ))}
 </div>
 </SectionWrapper>
 </div>
 </section>

 {/* ABOUT THE PRODUCT */}
 <section className="py-16 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Built for the Field</h2>
 <p className="text-lg text-slate-600 leading-relaxed mb-8">
 Our ACDB panels are purpose-built for PM-KUSUM solar pump installations. Designed to withstand India&apos;s harshest environmental conditions, these IP65 rated panels provide reliable AC distribution between the solar inverter and the pump controller. Available for 800V and 415V systems with integrated surge protection.
 </p>
 <div className="space-y-3">
 {[
 "FRP/CRCA enclosure with anti-corrosion coating",
 "UV-resistant gaskets and sealed cable glands",
 "Rotary isolator with padlockable handle",
 "Type 1+2 SPD with MOV technology (40kA)",
 "Optional integrated energy meter with RS485 Modbus",
 "Connection to SolarWiz IoT gateway",
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3">
 <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
 <span className="text-slate-700 font-medium text-sm">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="h-96">
 <ACDBPanelVisual />
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* SPECIFICATION TABLE — 800V & 415V */}
 <section className="py-20 bg-slate-50 relative z-20 border-y border-slate-200">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 text-center mb-12 font-heading">ACDB Specifications</h2>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-slate-900 text-white">
 <th className="text-left p-5 font-bold text-xs uppercase tracking-wider">Parameter</th>
 <th className="text-center p-5 font-bold text-xs uppercase tracking-wider bg-primary/20 border-x border-primary/30">800V ACDB</th>
 <th className="text-center p-5 font-bold text-xs uppercase tracking-wider bg-teal-600/20 border-x border-teal-500/30">415V LT Panel</th>
 </tr>
 </thead>
 <tbody>
 {[
 { param: "System Voltage", values: ["800V AC", "415V AC"] },
 { param: "Rated Current", values: ["Up to 100A", "Up to 630A"] },
 { param: "Enclosure Rating", values: ["IP65", "IP42/IP54"] },
 { param: "Enclosure Material", values: ["FRP / CRCA", "CRCA Powder Coated"] },
 { param: "SPD Type", values: ["Type 1+2 (40kA)", "Type 2 (20kA)"] },
 { param: "Protection", values: ["MCCB / Fuse / Isolator", "MCCB / MCB"] },
 { param: "Isolation Switch", values: ["Rotary (Padlockable)", "Rotary / MCCB"] },
 { param: "Energy Meter", values: ["Optional (RS485)", "Optional (RS485)"] },
 { param: "Cable Entry", values: ["Sealed Cable Glands", "Cable Glands / Bus Bar"] },
 { param: "Mounting", values: ["Pole / Wall / Ground", "Floor Standing"] },
 { param: "UV Protection", values: ["UV-Resistant Gaskets", "Standard"] },
 { param: "Standards", values: ["IS 61439 / IEC", "IS 61439 / IEC"] },
 ].map((row, i) => (
 <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:border-primary/50 hover:shadow-xl bg-teal-50/50 transition-colors`}>
 <td className="p-4 font-bold text-slate-900 border-b border-slate-100">{row.param}</td>
 <td className="p-4 text-center text-slate-600 border-b border-slate-100 bg-primary/5 border-x border-primary/10">{row.values[0]}</td>
 <td className="p-4 text-center text-slate-600 border-b border-slate-100 bg-teal-50/30 border-x border-teal-100">{row.values[1]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </SectionWrapper>
 </div>
 </section>

 {/* ACDB FEATURES */}
 <section className="py-28 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">Panel Features</h2>
 </SectionWrapper>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { icon: <Shield className="w-6 h-6" />, title: "Surge Protection", desc: "Type 1+2 SPD with MOV technology for protection against lightning and switching surges up to 40kA." },
 { icon: <Zap className="w-6 h-6" />, title: "Isolation Switch", desc: "Rotary isolator with padlockable handle for safe maintenance and compliance with electrical safety standards." },
 { icon: <Activity className="w-6 h-6" />, title: "Energy Metering", desc: "Optional integrated energy meter with RS485 Modbus output for connection to SolarWiz IoT gateway." },
 { icon: <Cpu className="w-6 h-6" />, title: "Weatherproof Design", desc: "FRP/CRCA enclosure with anti-corrosion coating, UV-resistant gaskets, and sealed cable glands." },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
 {item.icon}
 </div>
 <h3 className="text-lg font-bold mb-3 text-white leading-tight">{item.title}</h3>
 <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">{item.desc}</p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* CERTIFICATES GALLERY */}
 <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 text-center mb-4 font-heading">ERDA Test Reports & Certifications</h2>
 <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">All panels are type-tested at ERDA (Electrical Research & Development Association) and certified to IS/IEC standards. Click any certificate to preview.</p>
 </SectionWrapper>
 <CertificateGallery />
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
 { href: "/pm-kusum/wms", abbr: "WMS", label: "Weather Monitoring System", desc: "Real-time irradiance, wind, and temperature sensors for performance benchmarking." },
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
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Need ACDB Panels for Your PM-KUSUM Project?</h2>
 <p className="text-gray-400 mb-8 text-lg">Get bulk pricing and custom configurations for your solar pump installations.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Get Quote <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
