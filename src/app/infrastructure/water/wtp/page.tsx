import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Waves, Droplet, Droplets, Settings, Gauge, Power, CheckCircle2, LayoutTemplate, ShieldCheck, TrendingUp, Factory, Cpu, Activity, BarChart3, Handshake, Zap, Globe } from "lucide-react";
import { WATER_STATS, WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER } from "@/lib/constants";

export const metadata = {
 title: "Water Supply & WTP | Adaptive Engineering",
 description: "End to end E&I and SCADA solutions for Water Supply Schemes and Water Treatment Plants. 400+ MLD treated drinking water across 50+ schemes.",
};

export default function Page() {
 const currentPath = "/infrastructure/water/wtp";
 const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* 1. HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <Image src="/imgs/water-treatment-plant.png" alt="Water Treatment Plant" fill className="object-cover" priority />
 <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#0B1120] z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
 <Droplet className="w-4 h-4" />
 <span>Water Treatment</span>
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Water Supply & <span className="gradient-heading">WTP</span>
 </h1>
 <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
 Drinking water supply in urban and rural areas is essential for a country as big and as diverse as India. We at Adaptive Engineering Pvt Ltd. with {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years of experience provide end to end E&I & SCADA solutions.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
 Discuss Your Scheme <ArrowRight className="w-4 h-4" />
 </Link>
 <Link href="/infrastructure/water" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-sm">
 View All Water Solutions
 </Link>
 </div>
 </SectionWrapper>
 </div>
 </section>

 {/* 2. STATS BAR */}
 <section className="py-16 bg-[#081020] relative z-20 border-b border-teal-900/50">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-900/50">
 <SectionWrapper delay={0.1}>
 <div className="py-4">
 <div className="text-5xl font-black text-white mb-2">{WATER_STATS.mldTreatedWater.value}<span className="text-teal-500">{WATER_STATS.mldTreatedWater.suffix}</span></div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">MLD of Treated Drinking Water</p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="py-4">
 <div className="text-5xl font-black text-white mb-2">{WATER_STATS.supplySchemes.value}<span className="text-teal-500">{WATER_STATS.supplySchemes.suffix}</span></div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">Water Supply Schemes</p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.3}>
 <div className="py-4">
 <div className="text-5xl font-black text-white mb-2">{WATER_STATS.overheadTanks.formatted}</div>
 <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">Over Head Tanks (OHT)</p>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 3. OUR EXPERTISE (Light) */}
 <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
 <SectionWrapper>
 <div>
 <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">Our Expertise</span>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">End-to-End E&I & SCADA Solutions</h2>
 <p className="text-slate-600 text-lg leading-relaxed mb-8">
 Drinking water supply in urban and rural areas is essential for a country as big and as diverse as India. We at Adaptive Engineering Pvt Ltd. with {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years of experience to provide end to end E&I & SCADA solution.
 </p>
 <div className="flex flex-wrap gap-3">
 <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
 <ShieldCheck className="w-4 h-4" /> ISO 9001 Certified
 </div>
 <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
 <Globe className="w-4 h-4" /> {WATER_STATS.statesCovered.value}{WATER_STATS.statesCovered.suffix} States
 </div>
 <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
 <Factory className="w-4 h-4" /> In-House Manufacturing
 </div>
 </div>
 </div>
 </SectionWrapper>

 <SectionWrapper delay={0.2}>
 <div className="relative">
 <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-transparent rounded-[40px] blur-2xl"></div>
 <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
 <Image src="/imgs/wtp-scada-control-room.png" alt="SCADA Control Room for Water Treatment Operations" width={800} height={600} className="w-full h-auto object-cover" />
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
 <p className="text-white font-bold text-lg">Centralized SCADA Monitoring</p>
 <p className="text-gray-300 text-sm">Real-time control across all water treatment assets</p>
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 4. SOLUTIONS PORTFOLIO (Dark) */}
 <section className="py-28 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <span className="text-teal-400 font-bold uppercase text-sm tracking-widest mb-3 block">Solutions</span>
 <h2 className="text-4xl font-bold text-white mb-4 font-heading">Our Complete Solutions Portfolio</h2>
 <p className="text-slate-400 text-lg max-w-3xl mx-auto">
 Our complete solutions portfolio of Electrical and Automation solutions and the best of the project management skills proven at Water Supply Schemes to deliver solutions includes:
 </p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {[
 {
 icon: <Power className="w-7 h-7" />,
 title: "Pump Monitoring & Control",
 desc: "Pump monitoring and control along with Power Management.",
 highlight: "Power Management"
 },
 {
 icon: <Settings className="w-7 h-7" />,
 title: "Process Optimization",
 desc: "Filtration process control and optimization.",
 highlight: "Process Control"
 },
 {
 icon: <Cpu className="w-7 h-7" />,
 title: "Remote Connectivity",
 desc: "Remote connectivity of OHTs at centralized SCADA system.",
 highlight: "SCADA & Telemetry"
 },
 {
 icon: <BarChart3 className="w-7 h-7" />,
 title: "Dashboards & Analytics",
 desc: "Programmable Dashboards and advanced analytics for relevant report generation enabling better decision making.",
 highlight: "Decision Support"
 },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300">
 <div className="flex items-start gap-5">
 <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-110 transition-transform border border-teal-500/30">
 {item.icon}
 </div>
 <div>
 <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-xs font-bold uppercase tracking-widest mb-3">{item.highlight}</div>
 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
 <p className="text-slate-400 leading-relaxed">{item.desc}</p>
 </div>
 </div>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* 5. BENEFITS (Light) */}
 <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">Benefits</span>
 <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Why Choose AEPL for Water Supply?</h2>
 <p className="text-slate-600 text-lg max-w-3xl mx-auto">
 We at Adaptive Engineering Pvt Ltd. are experts in providing Electrical, Instrumentation and Automation Solutions for Water Supply Schemes and Water Treatment Plant from Raw Water Intake to distribution at Overhead Tanks ensuring:
 </p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliability", desc: "Providing robust, highly reliable E&I and automation architectures that ensure continuous municipal water supply.", color: "from-teal-500 to-teal-600" },
 { icon: <Waves className="w-8 h-8" />, title: "Sustainability", desc: "Implementing sustainable execution models that minimize environmental impact and maximize system efficiency.", color: "from-teal-600 to-teal-700" },
 { icon: <Droplet className="w-8 h-8" />, title: "Quality of Potable Drinking Water", desc: "Ensuring pure and safe potable drinking water through precision monitoring and automation solutions.", color: "from-teal-500 to-emerald-600" },
 { icon: <TrendingUp className="w-8 h-8" />, title: "Scalable Architecture", desc: "Delivering flexible, modular frameworks that easily scale with demand while reducing operating costs.", color: "from-emerald-500 to-teal-600" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group h-full p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
 <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
 {item.icon}
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
 <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* 6. VALUE CREATION (Dark) */}
 <section className="py-28 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <span className="text-teal-400 font-bold uppercase text-sm tracking-widest mb-3 block">Value Creation</span>
 <h2 className="text-4xl font-bold text-white mb-8 font-heading">The AEPL Advantage</h2>

 <div className="space-y-6">
 {[
 { icon: <Handshake className="w-6 h-6" />, title: "Highly Professional Project Management Team", desc: "Dedicated project managers with deep domain expertise ensuring seamless execution and delivery." },
 { icon: <ShieldCheck className="w-6 h-6" />, title: "Government Approved Partner", desc: "Approved by GWSSB (Gujarat), MPJNM, MPUDC & MPUADD (Madhya Pradesh), UPJNM (Uttar Pradesh), RWS&S (Odisha), JICA Assisted (Assam)." },
 { icon: <Zap className="w-6 h-6" />, title: "Turn-key E&I Solutions", desc: "Execution of scalable projects from design, engineering, procurement through commissioning." },
 { icon: <Factory className="w-6 h-6" />, title: "Own Electrical Panel Manufacturing Facility", desc: "In-house panel manufacturing ensures high quality control and faster project delivery timelines." },
 ].map((item, i) => (
 <div key={i} className="flex gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-500/30 transition-colors group">
 <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30 group-hover:scale-110 transition-transform">
 {item.icon}
 </div>
 <div>
 <h4 className="font-bold text-white mb-1">{item.title}</h4>
 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>

 <SectionWrapper delay={0.2}>
 <div className="space-y-8">
 <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
 <Image src="/imgs/wtp-panel-manufacturing.png" alt="Electrical Panel Manufacturing Facility" width={800} height={500} className="w-full h-[320px] object-cover" />
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
 <p className="text-white font-bold">1,25,000+sq.ft. Manufacturing Facility</p>
 <p className="text-gray-300 text-sm">In-house panel manufacturing for quality & speed</p>
 </div>
 </div>

 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
 <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
 <Handshake className="text-teal-400 w-5 h-5" /> Government Approved
 </h3>
 <div className="flex flex-wrap gap-3">
 {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
 <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 text-teal-300 text-sm font-bold rounded-full hover:bg-teal-500/20 transition-colors">
 {agency}
 </span>
 ))}
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 9. OTHER SOLUTIONS (Light) */}
 <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20">
 Water Solutions Suite
 </div>
 <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
 <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete water infrastructure offering covers every aspect — from treatment plants to centralized SCADA monitoring.</p>
 </div>
 </SectionWrapper>
 <div className="flex flex-wrap justify-center gap-6">
 {otherSolutions.map((sol, i) => (
 <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
 <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-teal-500/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
 <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
 <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
 <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
 <div className="flex items-center gap-1 text-teal-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
 Learn More <ArrowRight className="w-4 h-4" />
 </div>
 </Link>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* 9. CTA */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Upgrade Your Water Infrastructure?</h2>
 <p className="text-gray-400 mb-8 text-lg">Partner with India&apos;s most trusted E&I solutions provider for water supply schemes.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Contact Our Engineers <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
