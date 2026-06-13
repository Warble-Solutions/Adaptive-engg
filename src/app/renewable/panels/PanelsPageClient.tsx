"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, CheckCircle2, 
  Settings, Shield, Gauge, Layers, Sliders, Award, 
  ChevronRight
} from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

export default function PanelsPageClient() {
  const [activeMfgStep, setActiveMfgStep] = useState<number>(0);

  const ourSolutions = [
    {
      title: "HT Panel",
      icon: <Zap className="w-6 h-6 text-primary" />,
      image: "/panels/HT-Panel.webp",
      desc: "IS/IEC type-tested High Tension Vacuum Circuit Breaker (VCB) panels up to 33kV.",
      href: "/renewable/panels/ht-panel"
    },
    {
      title: "Power Control Centre (PCC)",
      icon: <Sliders className="w-6 h-6 text-primary" />,
      image: "/panels/PCC-Panel.webp",
      desc: "Main power distribution boards designed for high-capacity industrial power systems.",
      href: "/renewable/panels/pcc"
    },
    {
      title: "Motor Control Centre (MCC)",
      icon: <Settings className="w-6 h-6 text-primary" />,
      image: "/panels/MCC-Panel.webp",
      desc: "Robust motor control panels offering optimal thermal protection and safety.",
      href: "/renewable/panels/mcc"
    },
    {
      title: "Intelligent Motor Control Centre",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      image: "/panels/IMCC.webp",
      desc: "Smart MCCs integrated with communication protocols for real-time diagnostic reporting.",
      href: "/renewable/panels/intelligent-mcc"
    },
    {
      title: "Automatic Power Factor Correction",
      icon: <Activity className="w-6 h-6 text-primary" />,
      image: "/panels/APFC-Panel.webp",
      desc: "Automatic power factor correction systems for optimized efficiency and reduced penalties.",
      href: "/renewable/panels/apfc"
    },
    {
      title: "PDB/LDB Panel",
      icon: <Layers className="w-6 h-6 text-primary" />,
      image: "/panels/PDBLDB-Panels.webp",
      desc: "Power & Lighting Distribution Boards for reliable indoor and outdoor circuit control.",
      href: "/renewable/panels/pdb-ldb"
    },
    {
      title: "Soft Starter and VFD Panel",
      icon: <Gauge className="w-6 h-6 text-primary" />,
      image: "/panels/Soft-Starter-and-VFD-Panel.webp",
      desc: "Variable Frequency Drive and Soft Starter panels for smooth motor acceleration.",
      href: "/renewable/panels/soft-starter-vfd"
    },
    {
      title: "PLC Panel",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      image: "/panels/PLC-Panels.webp",
      desc: "Programmable Logic Controller panels customized for complex system automation.",
      href: "/renewable/panels/plc"
    },
    {
      title: "AC/DB Panels",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      image: "/panels/ACDB-Panels.webp",
      desc: "IP65 weather-proof AC Distribution Boards designed for solar pump installations.",
      href: "/renewable/panels/acdb"
    },
    {
      title: "Automation Panel",
      icon: <Activity className="w-6 h-6 text-primary" />,
      image: "/panels/Automation-Panels.webp",
      desc: "Custom control cabinets integrated with SCADA, telemetry, and smart gateways.",
      href: "/renewable/panels/automation"
    }
  ];

  const otherSolutions = [
    {
      title: "Busduct",
      icon: <Layers className="w-5 h-5 text-slate-500" />,
      desc: "High-current busbar trunking systems rated up to 6300A for efficient bulk power transmission."
    },
    {
      title: "UPS and Battery Isolation Panel",
      icon: <Shield className="w-5 h-5 text-slate-500" />,
      desc: "Safe DC isolation switchgear protecting backup power storage systems and battery banks."
    },
    {
      title: "Control and Relay Panel (CRP)",
      icon: <Sliders className="w-5 h-5 text-slate-500" />,
      desc: "Generator, transformer, and line protection relay panels with numerical protection logic."
    },
    {
      title: "Change Over Panel",
      icon: <Activity className="w-5 h-5 text-slate-500" />,
      desc: "Manual or automatic source transfer switch panels ensuring continuous power availability."
    }
  ];

  const mfgSteps = [
    {
      num: "01",
      title: "Sheet Metal CNC Fabrication",
      desc: "Raw sheet steel undergoes computerized precision laser cutting, CNC shearing, and heavy punching to establish custom panel structures.",
      features: ["CNC Amada Shearing", "Precision Laser Cutting", "Structured Frame Welding", "Dust-Free Powder Coating (RAL 7032/7035)"]
    },
    {
      num: "02",
      title: "Copper Busbar Prep & Silver Plating",
      desc: "Busbars are sized, bent, and punched using electro-hydraulic tooling to achieve maximum electrical capacity. Contact points are silver-plated.",
      features: ["Up to 6300A Copper Capacity", "Silver Electroplating for Low Contact Drop", "Torque Wrench Cable Termination Logs", "Shrinkable Sleeving Insulation"]
    },
    {
      num: "03",
      title: "Structured Modular Assembly",
      desc: "Switchgear, circuit breakers, protective relays, and current transformers are integrated in structured compartments per modular blueprints.",
      features: ["Interlocking Draw-out Modules", "Structured Wire Duct Routing", "Standardized Ferrule Identification Tags", "Shielded Control Cable Separators"]
    },
    {
      num: "04",
      title: "NABL Accredited Test Bench (FAT)",
      desc: "Every panel is subjected to Factory Acceptance Tests (FAT) using calibrated digital instruments. Complete simulated logic run-through is logged.",
      features: ["Insulation & High Voltage Tests", "Primary & Secondary Current Injection", "Millivolt Contact Resistance Log", "SCADA Modbus Point-to-Point Loop Test"]
    }
  ];


  return (
    <div className="flex flex-col w-full text-white">
      
      {/* 1. HERO (Futuristic Dark Mode) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/panels-hero-bg.png" alt="Electrical Panels" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Award className="w-4 h-4" />
                  <span>IS/IEC Certified Manufacturing</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Electrical<br />
                  <span className="gradient-heading">Panels</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  The core strength of our best-in-class Electrical Panels is our intelligent design concepts and the way they are implemented. With over 17+ years of experience, we meet the complex and varying needs of customers with a wide range of tailor-made products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Consult Panel Engineers <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#panel-range" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Explore Product Range
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Hero Stats Bento */}
            <SectionWrapper delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {/* Prominently Highlighted Manufacturing Facility Card */}
                <div className="col-span-2 bg-gradient-to-br from-[#0da08a]/20 via-primary/15 to-transparent border-2 border-primary/45 rounded-3xl p-8 hover:border-primary/60 transition-all duration-300 flex items-center justify-between shadow-2xl shadow-primary/10">
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono tracking-tight">
                      125,000<span className="text-primary">+</span> <span className="text-xl md:text-2xl font-bold font-sans">sq. ft.</span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-200 uppercase tracking-wider block">
                      Manufacturing Facility in Ahmedabad
                    </span>
                  </div>
                  <div className="w-14 h-14 bg-primary/30 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg border border-primary/20 animate-pulse">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                </div>

                {/* Other stats below */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">17<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Years Experience</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">2,500<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Panels Delivered/year</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">500<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Satisfied Customers</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">1,000<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Projects</span>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 1.5 OUR EXPERTISE (Intelligent Design & Engineering Strength) */}
      <section className="py-24 bg-transparent text-white relative z-20 border-t border-white/5">
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Block: Description */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                  <Award className="w-4 h-4" />
                  <span>Our Expertise</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight text-white">
                  Intelligent Design &<br />
                  Solid Engineering Strength
                </h2>

                <div className="space-y-6 text-gray-300 text-sm leading-relaxed font-medium">
                  <p>
                    Our State of Art comprehensive manufacturing facility at Ahmedabad spread across 125,000 sq. ft. is equipped with basic and advance machineries. Optimum quality components and ultra-modern technology deployed under the supervision of highly skilled professionals which are widely acclaimed.
                  </p>
                  <p>
                    The core strength of our best-in-class Electrical Panels is our intelligent design concepts and the way they are implemented. With over 17+ years of experience, we meet the complex and varying needs of customers with a wide range of tailor-made products.
                  </p>
                  <p>
                    Our Solid Engineering Strength allows us to provide a full range of electric and automation solutions from conceptualizing, designing, manufacturing, installing, and supporting in-house systems.
                  </p>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Block: Ahmedabad Facility Feature Card */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-4">Manufacturing Excellence</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">
                    We maintain complete control over the panel production cycle to ensure high standards of quality, performance, and durability.
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "Conceptualizing & Design", desc: "Tailor-made solutions engineered to meet complex and varying electrical specifications." },
                      { title: "In-house Manufacturing", desc: "Equipped with basic and advanced machinery for reliable panel assembly." },
                      { title: "Lifecycle & Support", desc: "End-to-end services including installation support and system integration." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-white">{item.title}</h4>
                          <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SOLUTIONS */}
      <section id="panel-range" className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Engineered Panel & Automation Solutions</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
                Explore our comprehensive portfolio of low-voltage, high-voltage, and automation panels. Click on any solution below to explore more.
              </p>
            </SectionWrapper>
          </div>

          {/* Our Solutions grid (Clickable cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {ourSolutions.map((item, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <Link
                  href={item.href}
                  className="group flex flex-col justify-between p-5 bg-slate-50 border border-slate-200/60 rounded-2xl transition-all duration-300 hover:bg-slate-900 hover:border-slate-900 hover:text-white hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1.5 h-full cursor-pointer"
                >
                  <div>
                    {/* Premium Card Image Header */}
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200/40 shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Floating Action Icon */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm text-primary flex items-center justify-center shadow-md border border-slate-100 transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold mb-2.5 font-heading leading-tight group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary mt-6 group-hover:text-primary transition-colors">
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>

          {/* Other Solutions sub-section (Non-clickable cards) */}
          <div className="mt-20 pt-16 border-t border-slate-100">
            <div className="text-center mb-12">
              <SectionWrapper>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">Other Solutions</h3>
                <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Specialized industrial distribution and custom-engineered power system accessories.
                </p>
              </SectionWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSolutions.map((item, idx) => (
                <SectionWrapper key={idx} delay={idx * 0.05}>
                  <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl h-full flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center mb-5">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING EXCELLENCE (Interactive Timeline Flow) */}
      <section className="py-24 bg-transparent text-white relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side info block */}
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                  <Settings className="w-4 h-4" />
                  <span>Fabrication Quality</span>
                </div>
                <h2 className="text-4xl font-bold text-white font-heading mb-6 leading-tight">
                  Manufacturing Excellence
                </h2>
                  <p className="text-gray-300 text-base leading-relaxed font-medium mb-10">
                    Our advanced fabrication facility features high-precision CNC machinery and modular assembly processes. Every panel undergoes stringent QA monitoring and testing to ensure long-term operational safety and compliance.
                  </p>

                {/* Timeline Buttons list */}
                <div className="space-y-3">
                  {mfgSteps.map((step, idx) => {
                    const isActive = activeMfgStep === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveMfgStep(idx)}
                        className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300 cursor-pointer select-none ${
                          isActive
                            ? "bg-primary/20 border-primary/30 text-white shadow-lg shadow-primary/5 translate-x-1"
                            : "bg-white/5 border-white/5 hover:bg-white/10 text-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono font-black ${isActive ? "text-primary" : "text-slate-400"}`}>
                            {step.num}
                          </span>
                          <span className="text-xs font-bold leading-tight">{step.title}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 shrink-0 opacity-50" />
                      </button>
                    );
                  })}
                </div>
              </SectionWrapper>
            </div>

            {/* Right side detailed step card */}
            <div className="lg:col-span-7 h-full flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-between h-full relative overflow-hidden text-white">
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.03] select-none font-mono">
                    {mfgSteps[activeMfgStep].num}
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Active Manufacturing Phase</span>
                    <h3 className="text-2xl font-bold text-white mb-4 font-heading leading-snug">
                      {mfgSteps[activeMfgStep].title}
                    </h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[48px]">
                      {mfgSteps[activeMfgStep].desc}
                    </p>
                    
                    <div className="border-t border-white/10 pt-8 mt-6">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-4.5">Operations & QA Parameters</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white font-bold">
                        {mfgSteps[activeMfgStep].features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-4 p-4.5 bg-white/5 border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/10 hover:shadow-md transition-all duration-300 min-h-[72px]">
                            <CheckCircle2 className="w-5.5 h-5.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span>AEPL QUALITY CONTROL CERTIFIED</span>
                    <span>STAGE_0{activeMfgStep + 1}</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 BENEFITS SECTION (Clean Light Theme) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Operational Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Why Choose AEPL Panels?</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Discover the engineering advantages and operational benefits of our custom-built electrical and automation panels.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enhanced safety", desc: "Engineered with maximum protection, type-tested short circuit compliance, and touch-safe configurations.", icon: <Shield className="w-6 h-6 text-primary" /> },
              { title: "Better energy efficiency", desc: "Intelligent components and busbar designs minimize electrical resistance and optimize power delivery.", icon: <Zap className="w-6 h-6 text-primary" /> },
              { title: "Increased reliability", desc: "Heavy-duty components and robust enclosures ensure failure-free operations in extreme industrial environments.", icon: <Activity className="w-6 h-6 text-primary" /> },
              { title: "Increased efficiency and optimization of equipment", desc: "Integrated power controls and protectors improve efficiency and maximize the service life of connected machinery.", icon: <Cpu className="w-6 h-6 text-primary" /> },
              { title: "Lesser maintenance", desc: "High-integrity connections and dust-proof layouts significantly reduce maintenance windows and operations cost.", icon: <Settings className="w-6 h-6 text-primary" /> },
              { title: "IoT ready", desc: "Built-in smart sensors and communication interfaces for real-time telemetry, SCADA, and remote monitoring.", icon: <Gauge className="w-6 h-6 text-primary" /> },
              { title: "Internationally compliant", desc: "Manufactured in accordance with local and global standards, fully prepared for export and multi-region deployment.", icon: <Award className="w-6 h-6 text-primary" /> },
              { title: "Protection against power spikes and transients", desc: "Equipped with advanced surge suppressors (SPDs) protecting sensitive automation components from grid spikes.", icon: <Sliders className="w-6 h-6 text-primary" /> },
              { title: "Dust proof", desc: "Fully sealed IP55 weatherproof enclosures preventing particulate ingress and guaranteeing optimal component life.", icon: <Layers className="w-6 h-6 text-primary" /> }
            ].map((benefit, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-8 hover:bg-slate-100/50 hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-heading leading-tight text-slate-950">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5 VALUE CREATION SECTION (Dark Premium) */}
      <section className="py-24 bg-transparent text-white relative z-20 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">Value Creation</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Quality Benchmarks & Standards</h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                Our commitment to superior quality and international standards guarantees highest level of customer satisfaction.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Certifications & Testing */}
            <SectionWrapper>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>
                <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Technical Certifications & Testing
                </h3>
                
                <div className="space-y-4">
                  {[
                    { title: "TYPE Test Certificate", desc: "50KA, 65KA Short circuit, IP55, Temperature rise (4000Amp)." },
                    { title: "ISO 9001:2015 Certified", desc: "Certified by TUV Nord for Quality Management System." },
                    { title: "Inhouse Testing Facility", desc: "Inhouse Testing Facility – HT, IR and Megger." },
                    { title: "Superior Quality Products", desc: "Superior quality products meeting stringent safety standards." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-primary/20 transition-all duration-300">
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Column 2: Customer Satisfaction & Global Standards */}
            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm h-full">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-teal-400" /> Customer Satisfaction & Services
                </h3>

                <div className="space-y-4">
                  {[
                    { title: "Vertical Expertise", desc: "Vertical expertise like Renewable, Water and Infra Projects." },
                    { title: "Global Compliance", desc: "Products and accessories suited to satisfy local and global needs." },
                    { title: "On-Time Delivery Guarantee", desc: "Guarantees highest level of 'Customer Satisfaction' involving consulting the client on the best and customized solution." },
                    { title: "Best in class 'Customer Service'", desc: "Continuous support and consulting to ensure maximum customer satisfaction." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-teal-500/20 transition-all duration-300">
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-transparent text-white text-center relative z-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Secure Your Electrical Infrastructure</h2>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              Consult with AEPL's panel design engineering team to customize your low-voltage or high-voltage switchboard configurations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Request Detailed Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
