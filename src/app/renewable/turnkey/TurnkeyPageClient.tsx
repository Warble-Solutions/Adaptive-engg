"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, LayoutTemplate, 
  Network, Factory, CheckCircle2, ChevronRight, Ruler, Lock, 
  Monitor, Compass, BarChart3, Clock, FileText, Settings, Shield,
  Award, Layers, Sliders, Gauge
} from "lucide-react";

export default function TurnkeyPageClient() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: "01",
      title: "Detailed Engineering",
      subtitle: "Blueprinting & Calculations",
      desc: "Detailed drafting of cable sizing tables, load schedules, cable routing trenches, and earthing grids using advanced power system calculations to eliminate material waste.",
      features: ["Cable sizing calculations", "Trench cross-section layouts", "Earthing grid spacing plots", "Single line drawing submittals"],
      visualType: "engineering"
    },
    {
      num: "02",
      title: "In-House Manufacturing",
      subtitle: "Custom Panel Fabrication",
      desc: "Designing and assembling all required LT panels, ACDB/DCDB combiner boxes, and HT switchgears inside AEPL's 40,000 sq ft workshop under strict ISO testing.",
      features: ["HT/LT switchgear panels", "Combiner box testing", "Factory loop simulations", "NABL accredited FAT logs"],
      visualType: "factory"
    },
    {
      num: "03",
      title: "Precision Site Erection",
      subtitle: "Fast-Track Field Construction",
      desc: "Rapid deployment of field E&I utilities: installing cable trays, pulling HV/MV cables, switchyard equipment structure erection, and dry-type transformer installations.",
      features: ["Cabling layout pulls", "MV/HV termination joints", "Substation bay erection", "Safety earth pit routing"],
      visualType: "field"
    },
    {
      num: "04",
      title: "Commissioning & Sync",
      subtitle: "Final Grid Injection",
      desc: "Executing numerical relay tests, SCADA system verification, Modbus point-to-point diagnostics, CEIG approvals, and safe final grid synchronization.",
      features: ["Relay curve calibration", "SCADA telemetry test", "CEIG safety clearance", "Official grid inject lock"],
      visualType: "grid"
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">

      {/* 1. HERO SECTION (Dark Immersive) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/turnkey-hero-bg.png" alt="Turnkey E&I Execution" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <LayoutTemplate className="w-4 h-4" />
                  <span>EPC Turnkey Contractor</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Turnkey E&I<br />
                  <span className="gradient-heading">Execution</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Empowered as a "Preferred Project Partner" in Turn-Key Projects for EPCs, delivering complete Electrical, Instrumentation & Automation solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Consult E&I Experts <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#execution-lifecycle" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    View Project Lifecycle
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Stats strip cards grid */}
            <SectionWrapper delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">17<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Years of Experience</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">68<span className="text-primary">GW+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Solar-Wind-Hybrid Projects</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">700<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">MLD of Treated Drinking / Sewage Water</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">2.5<span className="text-primary">Km</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">Twin Tube Road Tunnel</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-primary/10 to-teal-500/5 border border-primary/30 rounded-3xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-white mb-1">3,500+ Panels</div>
                    <span className="text-[11px] text-gray-300 block">Delivered/Year</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 1.5 OUR EXPERTISE (Electrical, Instrumentation & Automation Solutions) */}
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
                  Experts in Electrical, <br />
                  Instrumentation & Automation
                </h2>

                <div className="space-y-6 text-gray-300 text-sm leading-relaxed font-medium">
                  <p>
                    We at Adaptive Engineering Pvt Ltd. are experts in providing Electrical, Instrumentation and Automation Solutions for Renewable, Water and Infrastructure verticals. Our best in class, SCADA and Monitoring Solutions with Mobile Asset Management Software minimize breakdown losses leading to increased productivity.
                  </p>
                  <p>
                    Our 17+ years of experience, a complete solutions portfolio of Electrical and Automation solutions and the best of the project management skills empowered us a “Preferred Project Partner” in Turn-Key Projects for EPCs.
                  </p>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Block: Vertical Domains Bento Card */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-6">Core Industry Verticals</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Renewable", desc: "Solar, Wind & Hybrid power E&I.", icon: <Zap className="w-5 h-5 text-primary" /> },
                      { title: "Water Solutions", desc: "WTP, STP, ETP & automated pumping houses.", icon: <Activity className="w-5 h-5 text-primary" /> },
                      { title: "Infrastructure", desc: "Twin-tube road tunnels & smart traffic E&I.", icon: <Compass className="w-5 h-5 text-primary" /> },
                      { title: "CGD Networks", desc: "City Gas Distribution SCADA & telemetry.", icon: <Network className="w-5 h-5 text-primary" /> }
                    ].map((vertical, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-primary/20 hover:bg-white/10 transition-all duration-300">
                        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-3">
                          {vertical.icon}
                        </div>
                        <h4 className="text-xs font-bold text-white">{vertical.title}</h4>
                        <p className="text-[10px] text-gray-400 mt-1 leading-normal font-semibold">{vertical.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FROM BLUEPRINT TO MEGAWATTS (Interactive lifecycle stepper) */}
      <section id="execution-lifecycle" className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Project Workflow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">From Blueprint to Megawatts</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                We take complete ownership of the electrical and instrumentation scope, coordinating all project milestones through a structured lifecycle.
              </p>
            </SectionWrapper>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left selector steps */}
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <SectionWrapper key={idx} delay={idx * 0.05}>
                    <button
                      onClick={() => setActiveStage(idx)}
                      onMouseEnter={() => setActiveStage(idx)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 cursor-pointer select-none ${
                        isActive
                          ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 translate-x-1"
                          : "bg-slate-50 border-slate-200/50 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary rounded-r-md"></div>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 transition-all ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white text-slate-400 border border-slate-200"
                      }`}>
                        {stage.num}
                      </div>
                      <div className="flex-grow">
                        <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                          isActive ? "text-primary" : "text-slate-400"
                        }`}>
                          {stage.subtitle}
                        </span>
                        <h3 className={`font-bold text-base leading-tight ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}>
                          {stage.title}
                        </h3>
                      </div>
                    </button>
                  </SectionWrapper>
                );
              })}
            </div>

            {/* Right Display Board */}
            <div className="w-full lg:w-7/12 flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full h-full bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>AEPL PROJECT TRACKER</span>
                      <span className="font-bold text-primary">PHASE_0{activeStage + 1}_DETAILS</span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow py-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                        {stages[activeStage].subtitle}
                      </span>
                      <h4 className="text-xl font-bold font-heading mb-4 text-white">
                        {stages[activeStage].title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                        {stages[activeStage].desc}
                      </p>

                      {/* Dynamic Visual Mockup */}
                      <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 font-mono">
                        <span className="text-[9px] text-gray-500 font-bold uppercase block mb-3">Milestone Progress checklist</span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {stages[activeStage].features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 bg-slate-950 p-2.5 rounded border border-white/5">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-gray-300 text-[11px] font-medium leading-none">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-[9px] text-gray-500 font-mono">
                      <span>STABILITY VERIFIED</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-white font-bold">GRID ACTIVE</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCOPE OF WORK (Dark Bento Grid) */}
      <section className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                <LayoutTemplate className="w-4 h-4" />
                <span>Capabilities Scope</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 tracking-tight">Scope of <span className="gradient-heading">Work</span></h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                Full-scope E&I capabilities designed for safety, grid stability, and long-term asset security.
              </p>
            </div>
          </SectionWrapper>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 - Wide Card (Cabling Installation) */}
            <SectionWrapper delay={0.1} className="md:col-span-2">
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[360px] flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">Cabling Installation Works</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                    We can offer the following services on high voltage / medium voltage / low voltage cabling installation work all in accordance to tender technical specifications / local authority standards and clients / consultants’ requirements.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>HV / MV / LV SYSTEM INSTALLATION</span>
                  <span className="text-primary font-bold">COMPLIANT SYSTEMS</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 2 - Standard Card (Maps & Routing) */}
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[360px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">Map Collection & Routing</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    We handle scale-accurate map collection from clients/authorities with contractor support, providing exact cable route layout blueprints and detailed cable ampacity thermal calculations.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>BLUEPRINTING & CAPACITY PLANS</span>
                  <span className="text-primary font-bold">DESIGN ENGINE</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 3 - Standard Card (Pre-Jointing & HV Tests) */}
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[350px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">Testing & Validation</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Rigorous electrical field testing including Pre-Jointing and Jointing verification, High Voltage (HV) testing, Insulation Resistance (IR), Magnetic Balance, and Vector Group testing.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>DIAGNOSTIC & COMMISSIONING TESTS</span>
                  <span className="text-primary font-bold">ZERO ERRORS</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 4 - Wide Card (SITC & Relay Parameterization) */}
            <SectionWrapper delay={0.4} className="md:col-span-2">
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[350px] flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">Relay parameterization & Complete SITC</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                    Full protective relay parameterization coordination, and Supply Installation Testing & Commissioning (SITC) of HT/LT Panels, PLC/DCS automation, telemetry SCADA, and all field instrumentation.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>PANELS, INSTRUMENTS & SCADA SITC</span>
                  <span className="text-primary font-bold">IEEE COMPLIANT</span>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 3.5 BENEFITS SECTION (Clean Light Theme) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Operational Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">E&I Project Advantages</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Streamlined turnkey project delivery ensures minimized risk, operational efficiency, and rapid hot commissioning.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Increased Productivity", desc: "Consolidated E&I contracts minimize operational friction, boosting E&I coordination speed and system output.", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
              { title: "In-sync design for commissioning", desc: "Integrated drawing submittals and engineering studies guarantee zero discrepancy during final grid injection.", icon: <Sliders className="w-6 h-6 text-primary" /> },
              { title: "Reduced Change Management Challenges", desc: "Single-point design and manufacturing minimize unexpected change requests or cost variations during execution.", icon: <Settings className="w-6 h-6 text-primary" /> },
              { title: "Reduced Operating Cost", desc: "Optimized sizing, thermal ampacity plans, and high-efficiency panels reduce long-term operational expenditures.", icon: <Zap className="w-6 h-6 text-primary" /> },
              { title: "Adaptive Project Timeline", desc: "Our agile project management coordinates teams flexibly, adapting to site conditions to secure grid deadlines.", icon: <Clock className="w-6 h-6 text-primary" /> },
              { title: "Reduced Management Efforts", desc: "Eliminate multi-contract overhead, allowing client managers to coordinate with one single accountable E&I partner.", icon: <Shield className="w-6 h-6 text-primary" /> }
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

      {/* 4. WHY CHOOSE AEPL (Traditional vs AEPL Unified E&I comparison) */}
      <section className="py-24 bg-transparent text-white relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">Value Proposition</span>
                <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 leading-tight">
                  Why Choose AEPL for <br /><span className="text-primary">Turnkey E&I?</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed font-medium mb-10">
                  Coordinating multiple vendors for panel building, cabling, SCADA logic, and substation works is the #1 cause of project delays. AEPL consolidates the entire scope under a single point of responsibility.
                </p>

                {/* Flow items */}
                <div className="space-y-4 text-xs font-bold text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Single-point project management reducing overhead by 60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>In-house manufacturing of LT/HT panels ensures delivery control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>NABL accredited testing loops prevent on-site logic bugs</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Comparison Cards Stack */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-6">
                
                {/* Traditional Card */}
                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl shadow-md flex items-start gap-4 text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1.5">Traditional Multi-Vendor Route</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      Requires managing separate contracts for panel supply, on-site cable layers, and programming. Leads to finger-pointing when parameters clash during hot testing.
                    </p>
                  </div>
                </div>

                {/* AEPL Card */}
                <div className="p-6 bg-primary/10 border border-primary/30 rounded-2xl shadow-xl flex items-start gap-4 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 relative z-10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-bold text-sm mb-1.5">AEPL Consolidated Contract</h4>
                    <p className="text-gray-300 text-xs leading-relaxed font-medium">
                      One contract covers drawing submittals, panel construction, cable lays, safety earth tests, and grid sync. One project manager is 100% accountable.
                    </p>
                  </div>
                </div>

              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold uppercase text-xs tracking-widest mb-3 block">Corporate Competencies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Value Creation</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering industrial utility and power infrastructure with engineering precision, integrated manufacturing, and comprehensive project execution.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Project Management Team", desc: "Highly Professional Project Management Team.", icon: <Compass className="w-5 h-5 text-primary" /> },
              { title: "Industrial E&I Expertise", desc: "Expertise in Industrial Electrical, Automation and instrumentation Solutions.", icon: <Cpu className="w-5 h-5 text-primary" /> },
              { title: "Turn-key E&I Solutions", desc: "Turn-key E&I Solutions – Execution of scalable projects.", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
              { title: "Solar Verticals Pedigree", desc: "Expertise in Solar Verticals with 40GW+ experience.", icon: <Zap className="w-5 h-5 text-primary" /> },
              { title: "Government Approved Contractor", desc: "Government Approved – GWSSB – Gujarat, MPJNM, MPUDC & MPUADD – Madhya Pradesh, UPJNM – Uttar Pradesh, RWS&S – Odisha, JICA Assisted – Assam.", icon: <Lock className="w-5 h-5 text-primary" /> },
              { title: "Water Segment Expertise", desc: "Expertise in all Water Segments viz. WTP, STP, ETP, Pumping.", icon: <Activity className="w-5 h-5 text-primary" /> },
              { title: "Panel Manufacturing", desc: "In House Panel Manufacturing Facilities.", icon: <Factory className="w-5 h-5 text-primary" /> },
              { title: "Tunnel Turn-key E&I", desc: "Experience Team of Tunnel Turn-key E&I Solutions.", icon: <Network className="w-5 h-5 text-primary" /> },
              { title: "Automation & Instrumentation", desc: "Automation and instrumentation Solutions.", icon: <Settings className="w-5 h-5 text-primary" /> }
            ].map((item, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl hover:border-primary/20 hover:bg-slate-100/30 transition-all duration-300 flex items-start gap-4 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-transparent text-white text-center relative z-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Secure Your Turnkey E&I Project</h2>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              Partner with Adaptive Engineering for safe, compliant, and accelerated electrical utility execution.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Consult E&I Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
