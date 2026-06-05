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
 We at Adaptive Engineering Pvt. Ltd. bring {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years of proven expertise delivering comprehensive Electrical, Instrumentation, and SCADA solutions for Water Supply Schemes and Water Treatment Plants — from raw water intake all the way to distribution at Overhead Tanks.
 </p>
 <p className="text-slate-600 leading-relaxed mb-8">
 Our complete solutions portfolio combined with the best-in-class project management skills ensures every scheme is delivered on time, within budget, and to the highest quality standards demanded by government agencies and international funding bodies.
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
 <div className="relative bg-slate-50 rounded-[32px] p-10 border border-slate-200 shadow-xl">
 <div className="grid grid-cols-2 gap-6">
 {[
 { value: `${WATER_STATS.yearsExperience.value}${WATER_STATS.yearsExperience.suffix}`, label: "Years Experience", icon: <TrendingUp className="w-5 h-5" /> },
 { value: `${WATER_STATS.mldTreatedWater.value}${WATER_STATS.mldTreatedWater.suffix}`, label: "MLD Treated Water", icon: <Droplets className="w-5 h-5" /> },
 { value: `${WATER_STATS.supplySchemes.value}${WATER_STATS.supplySchemes.suffix}`, label: "Supply Schemes", icon: <Activity className="w-5 h-5" /> },
 { value: WATER_STATS.overheadTanks.formatted, label: "Overhead Tanks", icon: <Gauge className="w-5 h-5" /> },
 ].map((stat, i) => (
 <div key={i} className="text-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
 <div className="w-10 h-10 mx-auto bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-3">{stat.icon}</div>
 <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
 </div>
 ))}
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
 Electrical and Automation solutions backed by the best project management skills, proven across {WATER_STATS.supplySchemes.value}{WATER_STATS.supplySchemes.suffix} Water Supply Schemes.
 </p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {[
 {
 icon: <Power className="w-7 h-7" />,
 title: "Pump Monitoring & Control",
 desc: "Advanced pump monitoring and control systems along with integrated Power Management solutions. Real-time tracking of pump performance, energy consumption, and operational health across all pump houses.",
 highlight: "Power Management Integration"
 },
 {
 icon: <Settings className="w-7 h-7" />,
 title: "Filtration Process Control",
 desc: "Intelligent filtration process control and optimization systems that maximize throughput while maintaining stringent water quality standards. Automated backwash scheduling and filter performance analytics.",
 highlight: "Process Optimization"
 },
 {
 icon: <Cpu className="w-7 h-7" />,
 title: "Remote OHT Connectivity",
 desc: "Seamless remote connectivity of Over Head Tanks (OHTs) integrated directly into the centralized SCADA system. Monitor water levels, flow rates, and distribution patterns across the entire network from a single dashboard.",
 highlight: "Centralized SCADA Integration"
 },
 {
 icon: <BarChart3 className="w-7 h-7" />,
 title: "Dashboards & Advanced Analytics",
 desc: "Programmable dashboards and advanced analytics engines that generate relevant reports, enabling informed and faster decision making at every level — from field operators to executive management.",
 highlight: "Data-Driven Decisions"
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
 We are experts in providing Electrical, Instrumentation and Automation Solutions for Water Supply Schemes and Water Treatment Plants from Raw Water Intake to distribution at Overhead Tanks.
 </p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliability", desc: "Highly reliable architectures with redundant systems ensuring 24/7 uninterrupted water supply to communities.", color: "from-teal-500 to-teal-600" },
 { icon: <Waves className="w-8 h-8" />, title: "Sustainability", desc: "Sustainable execution practices that minimize environmental impact while maximizing system longevity and efficiency.", color: "from-teal-600 to-teal-700" },
 { icon: <Droplet className="w-8 h-8" />, title: "Water Quality", desc: "Guaranteed quality of potable drinking water through precision instrumentation and continuous monitoring systems.", color: "from-teal-500 to-emerald-600" },
 { icon: <TrendingUp className="w-8 h-8" />, title: "Scalable Architecture", desc: "Modular, scalable architecture that grows with demand while reducing per-unit operating costs over the project lifetime.", color: "from-emerald-500 to-teal-600" },
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
 { icon: <Handshake className="w-6 h-6" />, title: "Highly Professional Project Management Team", desc: "Dedicated project managers with deep domain expertise in government water infrastructure projects." },
 { icon: <ShieldCheck className="w-6 h-6" />, title: "Government Approved Partner", desc: "Recognized and approved by multiple state agencies across India for critical water infrastructure." },
 { icon: <Zap className="w-6 h-6" />, title: "Turn-key E&I Solutions", desc: "End-to-end execution of scalable projects from design, engineering, procurement through commissioning." },
 { icon: <Factory className="w-6 h-6" />, title: "In-House Panel Manufacturing", desc: "Own electrical panel manufacturing facility ensuring quality control and faster delivery timelines." },
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
 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-10">
 <h3 className="text-2xl font-bold text-white mb-6 font-heading flex items-center gap-3">
 <Handshake className="text-teal-400 w-6 h-6" /> Government Approved
 </h3>
 <p className="text-slate-400 mb-8 leading-relaxed">
 We are recognized by major government bodies and international agencies for the quality and reliability of our water infrastructure solutions.
 </p>
 <div className="flex flex-wrap gap-3">
 {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
 <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 text-teal-300 text-sm font-bold rounded-full hover:bg-teal-500/20 transition-colors">
 {agency}
 </span>
 ))}
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 7. PROCESS FLOW (Light) */}
 <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">How It Works</span>
 <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Raw Water Intake to Distribution</h2>
 <p className="text-slate-600 text-lg max-w-3xl mx-auto">
 Our proven methodology ensures seamless integration across every stage of the water supply chain.
 </p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { step: "01", title: "Survey & Design", desc: "Complete site survey, system architecture design, and engineering documentation for the entire water supply scheme.", icon: <LayoutTemplate className="w-6 h-6" /> },
 { step: "02", title: "Panel Manufacturing", desc: "In-house fabrication of MCC, PCC, APFC, and control panels with rigorous quality checks at our 125,000+ sq. ft. facility.", icon: <Factory className="w-6 h-6" /> },
 { step: "03", title: "Installation & Commissioning", desc: "On-site installation, wiring, loop checking, and systematic commissioning with complete FAT and SAT protocols.", icon: <Settings className="w-6 h-6" /> },
 { step: "04", title: "SCADA & Handover", desc: "Centralized SCADA integration, operator training, and comprehensive handover with O&M support documentation.", icon: <Cpu className="w-6 h-6" /> },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="relative h-full">
 {i < 3 && <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent translate-x-1/2 z-0"></div>}
 <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 h-full">
 <div className="text-5xl font-black text-teal-100 mb-4">{item.step}</div>
 <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
 <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
 <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
 </div>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* 8. OTHER SOLUTIONS (Light) */}
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
