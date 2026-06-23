import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2, Monitor, Shield, PieChart, Wrench, Battery } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";
import FAQSection from "@/components/FAQSection";


export const metadata = {
 title: "Unified Renewable Solution | Adaptive Engineering",
 description: "A single-vendor, end-to-end approach covering SCADA, PPC, CMS, Analytics, CMMS, and EMS-BESS for solar & wind parks.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* HERO */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" alt="Unified Renewable Solution Background" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
 Renewable Energy
 </div>
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
 Unified Renewable <span className="gradient-heading">Solution</span>
 </h1>
 <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
 A single-vendor, end-to-end approach covering SCADA, PPC, CMS, Analytics, CMMS, and EMS-BESS for solar &amp; wind parks.
 </p>
 </SectionWrapper>
 </div>
 </section>

 {/* One Partner. Complete Execution. */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">One Partner. Complete Execution.</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
 Most solar projects involve 5-7 vendors for different components — panels, wiring, SCADA, switchgear, testing. This fragmentation leads to delays, finger-pointing, and compatibility issues. AEPL&apos;s Unified Renewable Solution eliminates this by providing a single point of responsibility for the entire E&amp;I scope. From detailed engineering drawings to final grid synchronization, we handle everything in-house.
 </p>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
 <div className="grid grid-cols-3 gap-8 relative z-10">
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">40%</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Faster Execution</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">100%</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">In-House Capability</div>
 </div>
 <div>
 <div className="text-4xl font-black text-slate-900 mb-1">0</div>
 <div className="text-xs font-bold text-primary uppercase tracking-wider">Compatibility Issues</div>
 </div>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* UNIFIED SOLUTIONS OVERVIEW IMAGE SECTION */}
 <section className="py-20 bg-slate-50 relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
 <img 
 src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" 
 alt="Unified Renewable Solutions Solar and Wind" 
 className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
 <div className="absolute bottom-6 left-6 text-white">
 <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Integrated Execution</p>
 <h4 className="text-lg font-bold">Hybrid Wind & Solar Infrastructure</h4>
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div>
 <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Complete Integration</span>
 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Coordinated control of wind, solar, and battery storage</h3>
 <p className="text-slate-600 leading-relaxed mb-6">
 Modern hybrid power systems demand complete integration. By managing everything from high-voltage switchgear design to advanced energy management algorithms in-house, AEPL guarantees seamless operational coordination and prevents communication lag between disparate plant systems.
 </p>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>Zero compatibility lag between sub-systems</span>
 </div>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>Faster grid compliance approvals</span>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* 6 SOLUTIONS GRID */}
 <section className="py-32 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <SectionWrapper>
 <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Our 6 Integrated Solutions</h2>
 <p className="text-gray-400 max-w-2xl mx-auto">A complete digital ecosystem for renewable energy operations</p>
 </SectionWrapper>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
 {
 title: "SCADA",
 icon: <Monitor className="w-7 h-7" />,
 href: "/renewable/unified/scada",
 bullets: ["Flexible & Scalable Architecture", "Rich set of Renewable Libraries", "Seamless Handling of 10 Lakh+ tags", "Refined interface from decades of experience"],
 gradient: "from-teal-500 to-teal-500"
 },
 {
 title: "Power Plant Controller (PPC)",
 icon: <Cpu className="w-7 h-7" />,
 href: "/ppc",
 bullets: ["Grid Code Compliant", "HIL Type Tested", "Automatic Generation Control (AGC) Ready", "Forecast & Schedule Synchronization"],
 gradient: "from-teal-500 to-teal-500"
 },
 {
 title: "Central Monitoring System (CMS)",
 icon: <Shield className="w-7 h-7" />,
 href: "/renewable/unified/cms",
 bullets: ["Insightful View of Entire Portfolio", "Measure KPIs against Targeted Data", "ML Based Anomaly Detection", "Conversational AI Assistant"],
 gradient: "from-teal-500 to-teal-500"
 },
 {
 title: "Advanced Analytics",
 icon: <PieChart className="w-7 h-7" />,
 href: "/renewable/unified/analytics",
 bullets: ["Advanced Data Visualization", "Accurate Loss Buckets", "Custom Report Builder", "Analyse Historical Data"],
 gradient: "from-teal-500 to-teal-500"
 },
 {
 title: "CMMS",
 icon: <Wrench className="w-7 h-7" />,
 href: "/renewable/unified/cmms",
 bullets: ["Automated Workorder Management", "Standardized SOPs Across Enterprise", "Reduced Mean Time to Repair", "Effective Cost Control & Inventory Management"],
 gradient: "from-teal-500 to-teal-500"
 },
 {
 title: "Energy Management System - BESS",
 icon: <Battery className="w-7 h-7" />,
 href: "/renewable/unified/ems-bess",
 bullets: ["Indigenous Solution", "ML Based Energy Arbitrage", "State of Charge (SoC) Management", "Peak Shaving, Grid Support"],
 gradient: "from-teal-500 to-teal-500"
 },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <Link href={item.href} className="block h-full">
 <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
 <div className={`mb-6 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
 {item.icon}
 </div>
 <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
 <ul className="space-y-3 text-gray-400 text-sm flex-1">
 {item.bullets.map((bullet, idx) => (
 <li key={idx} className="flex gap-2">
 <span className="text-primary mt-0.5">▸</span>
 <span>{bullet}</span>
 </li>
 ))}
 </ul>
 <div className="mt-6 flex items-center text-primary font-bold text-sm gap-2 group-hover:gap-3 transition-all">
 Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </div>
 </div>
 </Link>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* Our Execution Methodology */}
 <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Our Execution Methodology</h2>
 </SectionWrapper>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
 <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30 -z-0"></div>
 {[
 { step: "1", title: "Survey & Design", desc: "Site survey, soil testing, and complete electrical design with simulation-backed cable sizing." },
 { step: "2", title: "Manufacturing", desc: `Panels and assemblies manufactured in our ${COMPANY_STATS.manufacturingFacility.formatted} facility with strict QA/QC protocols.` },
 { step: "3", title: "Installation", desc: "On-site cable laying, termination, earthing, and equipment erection by trained field teams." },
 { step: "4", title: "Go-Live", desc: "Testing, commissioning, grid synchronization, and handover with 24/7 monitoring activation." },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="relative z-10 flex flex-col items-center text-center group/step">
 <div className="w-20 h-20 bg-white border-4 border-primary/20 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg group-hover/step:bg-primary group-hover/step:border-primary group-hover/step:scale-110 transition-all duration-300">
 <span className="text-2xl font-black group-hover/step:text-white transition-colors duration-300">{item.step}</span>
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
 <p className="text-sm text-slate-500 leading-relaxed px-4">{item.desc}</p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ SECTION */}
  <FAQSection
    theme="light"
    faqs={[
      {
        question: "What is AEPL's Unified Renewable Solution?",
        answer: "It is an end-to-end, single-vendor integration package that covers the entire Electrical, Instrumentation, and Control (E&I) scope, including panels, substation switchyards, SCADA, PPC, CMS, Analytics, CMMS, and battery management."
      },
      {
        question: "What are the benefits of using a single vendor for renewable projects?",
        answer: "By consolidating E&I and software under one responsible vendor, clients eliminate compatibility issues, reduce project execution timelines by up to 40%, and avoid vendor-coordination delays."
      },
      {
        question: "What sub-systems are integrated into your unified platform?",
        answer: "Our ecosystem integrates six core components: 1) SCADA (plant control), 2) Power Plant Controller (PPC for grid compliance), 3) Central Monitoring System (CMS for portfolio analytics), 4) Advanced Analytics, 5) CMMS (maintenance management), and 6) EMS-BESS (battery energy storage system management)."
      },
      {
        question: "How does the Unified Solution simplify grid compliance?",
        answer: "Because we engineer the electrical switchyard, HT/LT panels, and the software-based Power Plant Controller (PPC) in-house, we can calibrate relay coordination and control response speeds (under 200 milliseconds) dynamically to meet utility grid codes."
      },
      {
        question: "Does this platform support hybrid wind-solar-BESS configurations?",
        answer: "Yes. Our platform is designed specifically for utility-scale hybrid installations. The Energy Management System (EMS) runs algorithms that coordinate generation profiles across solar inverters and wind turbines while regulating BESS charging/discharging dynamically."
      }
    ]}
  />

 {/* CTA */}
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready for a Unified Approach?</h2>
 <p className="text-gray-400 mb-8 text-lg">Eliminate vendor fragmentation. Get a single point of responsibility for your renewable project.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-[rgba(13,160,138,0.3)]">
 Get in Touch <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
