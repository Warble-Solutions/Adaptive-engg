"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2, 
  Server, Gauge, Wind, Database, Sliders, Clock, FileText, LayoutTemplate, 
  Lock, Compass, ChevronRight, HelpCircle
} from "lucide-react";

export default function DataCenterPageClient() {
  const [activeSolution, setActiveSolution] = useState<number>(0);
  const [activeStandard, setActiveStandard] = useState<number>(0);

  const solutions = [
    {
      title: "Critical Power",
      icon: <Zap className="w-6 h-6" />,
      desc: "UPS, DRUPS, STS, ATS design and installation with 2N and 2(N+1) redundancy architectures for zero transfer time.",
      specs: [
        { label: "Redundancy Design", value: "2N / 2(N+1) / Block Redundant" },
        { label: "Switchover Interval", value: "0 ms (Static Transfer Switch)" },
        { label: "UPS Battery Systems", value: "Lithium-Ion / VRLA with smart BMS" },
        { label: "Active Harmonic Filter", value: "AHF compensation < 3% THDi" },
        { label: "Backup Generator Sync", value: "Auto-Mains Failure (AMF) < 10s" }
      ],
      equipment: ["Static Transfer Switches (STS)", "Double-Conversion Online UPS", "Diesel Rotary UPS (DRUPS)", "Automatic Transfer Switches (ATS)"]
    },
    {
      title: "Power Distribution",
      icon: <Activity className="w-6 h-6" />,
      desc: "Medium voltage switchgear, transformer substations, busway systems, and intelligent PDUs with per-outlet monitoring.",
      specs: [
        { label: "Substation Voltage", value: "11kV / 22kV / 33kV Switchgears" },
        { label: "Busbar Rating", value: "Up to 5000A Sandwich Busway" },
        { label: "PDU Monitoring Type", value: "Branch Circuit & Outlet Level Billing" },
        { label: "Metering Accuracy", value: "Class 0.2S Revenue Meters" },
        { label: "Grid Interface", value: "Dual Feed Incomer with ATS interlocking" }
      ],
      equipment: ["HT/LT Switchgear Panels", "Cast Resin Dry-Type Transformers", "Intelligent Rack PDUs", "Overhead Busbar Trunking Systems"]
    },
    {
      title: "Precision Cooling",
      icon: <Wind className="w-6 h-6" />,
      desc: "CRAC/CRAH design, hot/cold aisle containment, in-row cooling, and free cooling economizer integration.",
      specs: [
        { label: "Chilled Water Loop", value: "Redundant Ring (N+N chiller valves)" },
        { label: "Containment Type", value: "Dual Ceiling-Drop Hot/Cold Aisle" },
        { label: "Fan Type", value: "Electronically Commutated (EC) Fans" },
        { label: "Economizer Mode", value: "Indirect Evaporative Free Cooling" },
        { label: "Underfloor Plenum", value: "Pressurized Grid Floor, 800mm Depth" }
      ],
      equipment: ["Computer Room Air Handler (CRAH)", "In-Row DX/Chilled Water Coolers", "Variable Speed Chiller Plant Controls", "Intelligent Containment Doors"]
    },
    {
      title: "DCIM Platform",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Real-time PUE monitoring, thermal mapping, capacity planning, and predictive analytics for proactive management.",
      specs: [
        { label: "Telemetry Standard", value: "SNMP v3 / Modbus TCP / BACnet IP" },
        { label: "Thermal Array Density", value: "3 Sensors per Rack (Top/Mid/Bottom)" },
        { label: "PUE Calculation", value: "Real-time ISO/IEC 30134 Level 3 PUE" },
        { label: "FDD Diagnostics", value: "Predictive Analytics Machine Learning" },
        { label: "Reporting Frequency", value: "1s Continuous Modbus Telemetry" }
      ],
      equipment: ["Environmental Monitor Sensors", "Real-Time Thermal Map Dashboards", "Capacity & Cabling Layout Managers", "EMS Energy Optimization Planners"]
    }
  ];

  const standards = [
    {
      num: "01",
      title: "TIA-942 & EN 50600 Design",
      desc: "Electrical and structural engineering designed strictly in compliance with TIA-942 Rated 3 (Tier III) and Rated 4 (Tier IV) parameters, assuring concurrently maintainable setups.",
      metrics: ["Rated 3/4 Concurrently Maintainable", "Dual active power paths", "Systemic failure-point audits", "Compartmentation per fire ratings"]
    },
    {
      num: "02",
      title: "ETAP Arc Flash & Coordination",
      desc: "Full short circuit calculations, transient stability simulation, and protective relay selective coordination curves mapped using ETAP to guarantee safety clearances.",
      metrics: ["Incident energy calculations", "PPE boundary definitions", "VCB coordination curves verified", "Transient load flow stability plots"]
    },
    {
      num: "03",
      title: "NOVEC 1230 Clean Agent Gas",
      desc: "Integrated fire warning and automated clean agent gas suppression networks, protecting critical server cabinets without water hazard risks.",
      metrics: ["Zero Ozone Depletion clean gas", "Cross-zone smoke detection loops", "Pressure discharge release calculations", "BMS emergency shutdown links"]
    },
    {
      num: "04",
      title: "Integrated BMS & EMS Control",
      desc: "High-performance building management and energy monitoring loops based on Schneider Electric System Platform architecture to track PUE.",
      metrics: ["Real-time power quality graphs", "Environmental sensor array ring", "Automated CRAH fan RPM speed sync", "HVAC chiller optimization program"]
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">

      {/* 1. HERO (Dark Immersive with Stats) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#071926] to-slate-950">
          {/* Background image & scrims */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25 mix-blend-luminosity z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10"></div>
          {/* Tech lines */}
          <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[140px] z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px] z-10"></div>
        </div>

        <div className="z-20 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Server className="w-4 h-4" />
                  <span>Tier III+ Mission Critical</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Data Center<br />
                  <span className="gradient-heading">Infrastructure</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Engineering concurrently maintainable electrical distribution, precision cooling, and DCIM platforms for zero-downtime operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Consult Data Center Experts <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#solutions-drawer" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Explore Solutions
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Floating Glass Stats Panel */}
            <SectionWrapper delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">99.999%</div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Target uptime reliability</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">Tier III+</div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Design & build standards</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-primary/10 to-teal-500/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">PUE &lt; 1.40</div>
                    <span className="text-xs text-gray-300">Target energy efficiency ratios achieved</span>
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

      {/* 2. SYSTEM STATUS (Zero Downtime Dashboard Simulator) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                  <Activity className="w-4 h-4" />
                  <span>Availability Model</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6 leading-tight">
                  Zero Downtime Architecture
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-8">
                  A single minute of critical server downtime can incur massive financial and operational losses. We design, manufacture, and erect robust E&amp;I distribution frameworks that ensure concurrent maintainability for Tier III and Tier IV datacenters.
                </p>
                <div className="space-y-4 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Concurrently maintainable power paths</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Dual feed active utility lines with auto-interlocks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Lithium-Ion backup systems with computerized BMS loops</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:col-span-7 h-full flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full bg-slate-950 text-white border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden font-mono">
                  {/* Subtle lighting */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] text-gray-500">
                      <span>AEPL DCIM ENGINE v1.2</span>
                      <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        TELEMETRY_ONLINE
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {/* Metric 1 */}
                      <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-center">
                        <span className="text-[9px] text-gray-500 font-bold uppercase block mb-1">Active PUE</span>
                        <div className="text-2xl font-black text-white font-mono leading-none">1.34</div>
                        <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider mt-2 inline-block">Efficient</span>
                      </div>
                      
                      {/* Metric 2 */}
                      <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-center">
                        <span className="text-[9px] text-gray-500 font-bold uppercase block mb-1">Redundancy</span>
                        <div className="text-2xl font-black text-white font-mono leading-none">2N+1</div>
                        <span className="text-[8px] bg-primary/20 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider mt-2 inline-block">Active</span>
                      </div>

                      {/* Metric 3 */}
                      <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-center">
                        <span className="text-[9px] text-gray-500 font-bold uppercase block mb-1">UPS Load</span>
                        <div className="text-2xl font-black text-white font-mono leading-none">42.8%</div>
                        <span className="text-[8px] bg-teal-500/10 text-teal-400 border border-teal-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider mt-2 inline-block">Balanced</span>
                      </div>
                    </div>

                    {/* DCIM Logs */}
                    <div className="bg-slate-900/30 p-4 rounded-xl border border-white/5">
                      <span className="text-[9px] text-gray-500 font-bold uppercase block mb-2">Power Feed Ring Diagnostics</span>
                      <div className="space-y-1.5 text-[10px] text-gray-400 font-mono">
                        <div className="flex justify-between">
                          <span>FEED_A (Utility Grid Incomer 1):</span>
                          <span className="text-emerald-400 font-bold">CONNECTED_33KV</span>
                        </div>
                        <div className="flex justify-between">
                          <span>FEED_B (Utility Grid Incomer 2):</span>
                          <span className="text-emerald-400 font-bold">CONNECTED_33KV</span>
                        </div>
                        <div className="flex justify-between">
                          <span>UPS_BANK_1 (Lithium-Ion BMS):</span>
                          <span className="text-teal-400 font-bold">100%_CHARGED [STANDBY]</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-8 flex justify-between items-center text-[9px] text-gray-500">
                    <span>ISO/IEC 30134 PUE COMPLIANT</span>
                    <span>SYSTEM_SAFE</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS DRAWER (State-Based Specs Switcher) */}
      <section id="solutions-drawer" className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Core Deliverables</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Infrastructure Solutions</h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                Explore our engineering capabilities designed to sustain continuous operation, precision humidity, and temperature control.
              </p>
            </SectionWrapper>
          </div>

          {/* Solutions selection tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {solutions.map((item, idx) => {
              const isActive = activeSolution === idx;
              return (
                <SectionWrapper key={idx} delay={idx * 0.05}>
                  <button
                    onClick={() => setActiveSolution(idx)}
                    className={`w-full text-left p-8 rounded-2xl border transition-all duration-300 cursor-pointer select-none group h-full flex flex-col justify-between ${
                      isActive
                        ? "bg-white border-white text-slate-900 shadow-2xl translate-y-[-4px]"
                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                    }`}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-primary"
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 font-heading leading-tight">{item.title}</h3>
                      <p className={`text-xs leading-relaxed font-medium mb-4 ${isActive ? "text-slate-500" : "text-gray-400"}`}>
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary mt-2">
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </SectionWrapper>
              );
            })}
          </div>

          {/* Solution Spec Details Card */}
          <SectionWrapper delay={0.2}>
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -mr-40 -mt-40"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                {/* Specs list */}
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Standard Technical Sheet</span>
                  <h4 className="text-xl font-bold font-heading text-white mb-6">
                    {solutions[activeSolution].title} Parameters
                  </h4>
                  
                  <div className="divide-y divide-white/10 text-xs">
                    {solutions[activeSolution].specs.map((spec, sIdx) => (
                      <div key={sIdx} className="py-3.5 flex justify-between gap-4">
                        <span className="text-gray-400 font-bold">{spec.label}</span>
                        <span className="text-white font-bold font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-equipment */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Equipment Scope</span>
                    <h4 className="text-lg font-bold font-heading text-white mb-4">Scope & Application Modules</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solutions[activeSolution].equipment.map((equip, eIdx) => (
                        <div key={eIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-medium leading-tight">{equip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-mono">AEPL DCIM SPEC v1.0</span>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-primary transition-colors">
                      Consult Switchgear Drawing <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 4. COMPLIANCE & STANDARDS (Interactive fold list) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side standard list selector */}
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engineering Standards</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6 leading-tight">
                  Design Standards &amp; Compliance
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-10">
                  AEPL's data center designs comply with international Tier III and IV standards, ensuring protective relays, clean gas fire control, and energy management loops are fully synchronized.
                </p>

                {/* Vertical standard selectors */}
                <div className="space-y-3">
                  {standards.map((std, idx) => {
                    const isActive = activeStandard === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStandard(idx)}
                        className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300 cursor-pointer select-none ${
                          isActive
                            ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/10 translate-x-1"
                            : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono font-black ${isActive ? "text-primary" : "text-slate-400"}`}>
                            {std.num}
                          </span>
                          <span className="text-xs font-bold leading-tight">{std.title}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 shrink-0 opacity-50" />
                      </button>
                    );
                  })}
                </div>
              </SectionWrapper>
            </div>

            {/* Right side detailed compliance card */}
            <div className="lg:col-span-7 h-full flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-50 select-none font-mono">
                    {standards[activeStandard].num}
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Active Engineering Standard</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading leading-snug">
                      {standards[activeStandard].title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      {standards[activeStandard].desc}
                    </p>
                    
                    <div className="border-t border-slate-100 pt-6">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Compliance Checklist Metrics</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-semibold">
                        {standards[activeStandard].metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>AEPL COMPLIANCE LOG</span>
                    <span>STAGE_0{activeStandard + 1}</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Secure Your Mission-Critical Assets</h2>
            <p className="text-slate-500 mb-8 text-base leading-relaxed">
              Partner with AEPL for compliant, concurrently maintainable electrical switchgear distribution and precision HVAC setups.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-lg shadow-teal-500/20">
              Request Data Center Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
