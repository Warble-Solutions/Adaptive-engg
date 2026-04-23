import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
 title: "Company Profile | Adaptive Engineering",
 description: "India\'s leading Turnkey Electrical, Instrumentation, and Automation company delivering end-to-end solutions since 2014.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
 
 {/* HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <img src="/imgs/about-hero.png" alt="Company Profile Background" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
 About Us
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Company <span className="gradient-heading">Profile</span>
 </h1>
 <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
 India&apos;s leading Turnkey Electrical, Instrumentation, and Automation company delivering end-to-end solutions since 2014.
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* Who We Are */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Who We Are</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
 Adaptive Engineering Pvt. Ltd. (AEPL) is a technology-driven engineering company headquartered in Ahmedabad, Gujarat. Since its inception in 2014, AEPL has emerged as India&apos;s most trusted partner for Renewable Energy, PM-KUSUM, Water Infrastructure, and Industrial Automation solutions. With a 60,000+ sq. ft. manufacturing facility, 300+ skilled professionals, and 1000+ sites monitored across India, we deliver mission-critical Turnkey E&amp;I systems that power the nation&apos;s growth.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
 <div className="grid grid-cols-3 gap-8 relative z-10">
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">68GW+</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Installed Base</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">300+</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Team Strength</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">10k+</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Panels Supplied</div>
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* Core Competencies */}
 <section className="py-24 bg-slate-50 relative z-10 border-y border-slate-100">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <SectionWrapper>
 <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 tracking-tight">Core Competencies</h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Delivering mission-critical engineering solutions across multiple domains.</p>
 </SectionWrapper>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { title: "Turnkey E&I", icon: <Zap className="w-6 h-6" />, desc: "Complete Electrical & Instrumentation execution from design to commissioning for Solar, Water, and Industrial projects." },
 { title: "IoT & SCADA", icon: <Activity className="w-6 h-6" />, desc: "In-house developed SolarWiz, WaterWiz, and MachineWiz IoT platforms with edge computing and cloud analytics." },
 { title: "Panel Manufacturing", icon: <ShieldCheck className="w-6 h-6" />, desc: "IS/IEC certified LT/HT panels, MCC, PCC, ACDB, DCDB panels manufactured in our state-of-the-art facility." },
 { title: "Software & Analytics", icon: <Cpu className="w-6 h-6" />, desc: "ReportWiz, CMS, AMS — proprietary software suite for automated reporting, asset tracking, and performance monitoring." },
 ].map((skill, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#0da08a]/30 hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default h-full flex flex-col items-start">
 <div className="mb-6 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0da08a] group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-md transition-all duration-300">
 {skill.icon}
 </div>
 <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#0da08a] transition-colors duration-300 leading-tight">{skill.title}</h3>
 <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 flex-grow">
 {skill.desc}
 </p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>



 {/* Our Values - S.C.A.L.E Design Image */}
 <section className="py-32 bg-transparent w-full relative z-20">
 <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
 <div className="text-center mb-20">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
 Guiding Principles
 </div>
 <h2 className="text-5xl font-black text-white mb-6 font-heading">Our Values</h2>
 </SectionWrapper>
 </div>
 <div className="flex justify-center">
 <SectionWrapper>
 <img
 src="/imgs/Values-Design.webp"
 alt="Our Values Design: S.C.A.L.E"
 className="w-full object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 rounded-3xl"
 />
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Partner with Us?</h2>
 <p className="text-gray-400 mb-8 text-lg">Get in touch to discuss how we can support your next project.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Get in Touch <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
