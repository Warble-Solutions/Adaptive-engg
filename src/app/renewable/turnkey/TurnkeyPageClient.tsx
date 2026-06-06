"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, LayoutTemplate, 
  Network, Factory, CheckCircle2, ChevronRight, Ruler, Lock, 
  Monitor, Compass, BarChart3, Clock, FileText, Settings, Shield
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
                  End-to-end electrical &amp; instrumentation mastery for solar plants, substations, and heavy industrial assets.
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
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">200M<span className="text-primary">W+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Largest Single Project Site</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">15<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">States covered nationally</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-primary/10 to-teal-500/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">99.5%</div>
                    <span className="text-xs text-gray-300 font-semibold">Track record of on-time grid synchronization</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </SectionWrapper>
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
            
            {/* Box 1 - Wide Card */}
            <SectionWrapper delay={0.1} className="md:col-span-2">
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[380px] flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">Switchyard Works</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                    Complete HT transformer installation, CT/PT structure mounting, isolator erection, busbar clamping, breaker interface wiring, and final HT control cabinet commissioning up to 33kV/66kV standards.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>TRANSFORMERS & SWITCHYARDS</span>
                  <span className="text-primary font-bold">UP TO 66KV</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 2 - Standard Card */}
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[380px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">Protection & Metering</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Calibration of numerical protective relays, secondary current injection loop verification, CT ratio check records, and ABT metering integration complying with state grid authorities.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>COMPLIANCE & TESTING</span>
                  <span className="text-primary font-bold">GRID ACCREDITED</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 3 - Standard Card */}
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[350px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">Cable Engineering</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Routing and pulling of DC & AC cables, layout of ladder-type cable trays, deep burial trench execution, and HT/LT jointing works monitored for safety limits.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>CABLING & TERMINATION</span>
                  <span className="text-primary font-bold">STRUCTURAL TRENCH</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Box 4 - Wide Card */}
            <SectionWrapper delay={0.4} className="md:col-span-2">
              <div className="p-8 bg-slate-900 border border-white/10 hover:border-primary/50 hover:shadow-xl rounded-3xl transition-all duration-500 h-[350px] flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">Earthing & Lightning Grids</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                    Calculations and structural assembly of low-impedance earthing systems. Installation of chemical earth pits, copper earth tape routing, and strategic lightning terminal masts to secure field sensors.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>EARTH GRID CALCULATIONS</span>
                  <span className="text-primary font-bold">IEEE 80 COMPLIANT</span>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE AEPL (Traditional vs AEPL Unified E&I comparison) */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Value Proposition</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 leading-tight">
                  Why Choose AEPL for <br /><span className="text-primary">Turnkey E&I?</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-10">
                  Coordinating multiple vendors for panel building, cabling, SCADA logic, and substation works is the #1 cause of project delays. AEPL consolidates the entire scope under a single point of responsibility.
                </p>

                {/* Flow items */}
                <div className="space-y-4 text-xs font-bold text-slate-700">
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
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-md flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm mb-1.5">Traditional Multi-Vendor Route</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      Requires managing separate contracts for panel supply, on-site cable layers, and programming. Leads to finger-pointing when parameters clash during hot testing.
                    </p>
                  </div>
                </div>

                {/* AEPL Card */}
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex items-start gap-4 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 relative z-10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-bold text-sm mb-1.5">AEPL Consolidated Contract</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">
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
      <section className="py-28 bg-transparent text-white relative z-10 border-t border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold uppercase text-xs tracking-widest mb-3 block">Corporate Competencies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Value Creation</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering industrial utility and power infrastructure with engineering precision, integrated manufacturing, and comprehensive project execution.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "68GW+ Experience",
                desc: "Massive execution and monitoring pedigree across utility-scale power assets.",
                icon: Zap
              },
              {
                title: "Turn-key E&I Solutions",
                desc: "End-to-end execution scope comprising system drawing designs, switchyards, and grid synchronization.",
                icon: ShieldCheck
              },
              {
                title: "Inhouse Panel Manufacturing",
                desc: "Quality-tested HT switchgear, LT distribution panels, PCC, MCC, and ACDB panels fabricated in our facility.",
                icon: Factory
              },
              {
                title: "Industrial electrical, automation solutions",
                desc: "Sleek electrical engineering, custom panel designs, and advanced PLC/SCADA integrations.",
                icon: Cpu
              },
              {
                title: "Project management team",
                desc: "Dedicated lifecycle managers tracking milestones, engineering compliance, and safety standards.",
                icon: Compass
              },
              {
                title: "Experience Team",
                desc: "Highly skilled field engineering crew executing complex grid synchronization, cabling, and substation erection.",
                icon: Network
              },
              {
                title: "Water Segments Pumping",
                desc: "Pioneering pumping scheme E&I layouts, automated pump house controls, and telemetry grids.",
                icon: Activity
              },
              {
                title: "Government Approved",
                desc: "Licensed A-grade electrical contracting, CEIG safety clearances, and DISCOM approvals.",
                icon: Lock
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <SectionWrapper key={idx} delay={idx * 0.05}>
                  <div className="h-full p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-primary/50 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-bold text-base mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Secure Your Turnkey E&I Project</h2>
            <p className="text-slate-500 mb-8 text-base leading-relaxed">
              Partner with Adaptive Engineering for safe, compliant, and accelerated electrical utility execution.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-lg shadow-teal-500/20">
              Consult E&I Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
