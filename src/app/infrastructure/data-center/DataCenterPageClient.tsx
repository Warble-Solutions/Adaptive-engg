"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, CheckCircle2, 
  Server, Wind, Sliders, Lock, ChevronRight
} from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function DataCenterPageClient() {
  const [activeSolution, setActiveSolution] = useState<number>(0);
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Automation",
      icon: <Cpu className="w-5 h-5" />,
      desc: "Automation plays a crucial role in Data Centers, enabling increased efficiency, scalability, and reliability. Automating various tasks and processes allows Data Center operators to streamline operations, reduce human error, and improve overall productivity.",
      tagline: "Operational Efficiency & Control",
      items: [
        { label: "HVAC Management", val: "Heat ventilation & Air conditioning management system optimizing real-time thermal profiles." },
        { label: "Energy Efficiency", val: "Energy Efficiency and Optimization algorithms adjusting chiller valves and fan speeds." },
        { label: "Incident Response", val: "Incident Response and Troubleshooting procedures automatically triggered on fault detections." },
        { label: "Reporting & Analysis", val: "Continuous Reporting and Analysis of power, temperature, and performance metrics." },
        { label: "Performance & Capacity", val: "Performance and Capacity Management logs tracking CPU workloads and power path limits." },
        { label: "Alarms & Notifications", val: "Intelligent Alarms and Notifications sent via email, SMS, and SCADA console alerts." }
      ]
    },
    {
      title: "Power System",
      icon: <Zap className="w-5 h-5" />,
      desc: "We at Adaptive Engineering Pvt. Ltd. provide turn-key projects with Supply, Installation, Testing and Commissioning of HT Sub Station with Pole Structure, VCB Panel, Transformer and RMU, LT Electrical Room having Power Distribution Panels, LT Panels, APFC Panels with HT and LT Cables and Grid Earthing.",
      tagline: "Turn-Key HV/LV Power Infrastructure",
      items: [
        { label: "Power Quality", val: "Improve Power Quality and Active Harmonic Filtering compensation." },
        { label: "Intelligent Energy", val: "Intelligent usage of energy using Modbus metering loops and smart EMS controllers." },
        { label: "Operating Costs", val: "Reduced Operating Cost through optimized load sharing and demand-side management." },
        { label: "Zero Shutdowns", val: "Zero Energy Shutdown design utilizing concurrently maintainable 2N+1 topologies." },
        { label: "Power Factor Control", val: "Efficient Power Factor Control via automatic APFC capacitor bank switching." },
        { label: "SCADA Control", val: "Complete Monitoring and Control of transformers and breakers through SCADA screens." }
      ]
    },
    {
      title: "Fire Fighting & CCTV",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Fire detection systems should be integrated with the SCADA system, allowing increased visibility and support to the system remotely. This allows for all assets to be controlled in a coordinated manner to help minimize risk. Our vast experience in the Automation Industry helps to tightly integrate Fire Detection, Video Monitoring, Traffic Signaling and PA Control with the SCADA system to increase safety and Traffic Control.",
      tagline: "Safety, Security & Remote Vigilance",
      items: [
        { label: "NFPA Compliance", val: "Safety compliance with NFPA standards ensuring strict fire-suppression regulations." },
        { label: "Precise Detection", val: "Fast, precise and reliable detection through high-sensitivity smoke and heat sensors." },
        { label: "Annunciator Alerts", val: "Trigger alarms on fire niche door opening, emergency telephones or SOS buttons." },
        { label: "AID CCTV Integration", val: "Automatic Incident Detection System with CCTV image analysis." },
        { label: "CCTV Alerts", val: "CCTV System alerts on unauthorized entry, wrong direction, stopped vehicles or debris." },
        { label: "Evacuation Guidance", val: "Escape Route signaling and Dynamic Messaging VMS system coordination." }
      ]
    }
  ];


  const solutions = [
    {
      title: "BMS (Building Management System)",
      icon: <Wind className="w-6 h-6" />,
      desc: "Building Management System (BMS) designed for floor-level heat and air management, optimizing climate conditions continuously.",
      specs: [
        { label: "Floor Heat Management", value: "Smart airflow loops & containment doors" },
        { label: "Sensor Array Density", value: "3 sensors per rack (Top / Mid / Bottom)" },
        { label: "CRAH Integration", value: "Automated fan speed sync based on heat loads" },
        { label: "Telemetry Standard", value: "BACnet IP / Modbus TCP / SNMP v3" },
        { label: "Cooling Coordination", value: "Closed-loop feedback to chiller valves" }
      ],
      equipment: ["Computer Room Air Handler (CRAH)", "Variable Speed Fan Controllers", "Containment Dampers & Doors", "Environmental Airflow Monitors"]
    },
    {
      title: "EMS (Energy Management System)",
      icon: <Zap className="w-6 h-6" />,
      desc: "Energy Management System (EMS) focusing on energy data analysis to increase efficiency and reduce overall operational costs.",
      specs: [
        { label: "PUE Calculation", value: "Real-time PUE (ISO/IEC 30134 Level 3)" },
        { label: "Metering Accuracy", value: "Class 0.2S Revenue Grade Meters" },
        { label: "Telemetry Frequency", value: "Continuous 1s Modbus updates" },
        { label: "Harmonic Optimization", value: "AHF compensation < 3% THDi" },
        { label: "Capacity Planner", value: "Predictive power path load tracking" }
      ],
      equipment: ["Power Quality Analyzers", "Intelligent Rack PDUs", "Branch Circuit Monitors", "EMS Dashboard database servers"]
    },
    {
      title: "Facility AnalytiX (FDD)",
      icon: <Activity className="w-6 h-6" />,
      desc: "Predictive building automation featuring advanced Fault Detection and Diagnostics (FDD) technology for critical infrastructure.",
      specs: [
        { label: "FDD Technology", value: "Rules-engine & machine learning diagnostics" },
        { label: "Alert Escalation", value: "Instant notifications (SMS / email / alarm)" },
        { label: "Maintenance Sync", value: "CMMS automatic work order dispatch" },
        { label: "Risk Evaluation", value: "Single-point-of-failure simulation loops" },
        { label: "System Health Status", value: "Real-time status tracking per equipment" }
      ],
      equipment: ["AnalytiX Telemetry Gateway", "Predictive Diagnostic Servers", "Diagnostic Console Client UI", "Risk Simulation Planners"]
    },
    {
      title: "Programmable Dashboards",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Advanced analytics and programmable dashboards for relevant report generation enabling better decision making.",
      specs: [
        { label: "Customization Mode", value: "Widget-based drag-and-drop dashboard design" },
        { label: "Reports Generated", value: "Daily/Weekly PUE, load, and battery logs" },
        { label: "Export Formats", value: "PDF / CSV / Excel spreadsheets" },
        { label: "Scheduler System", value: "Automatic email reports to stakeholders" },
        { label: "Database Speed", value: "High-performance time-series telemetry store" }
      ],
      equipment: ["Reporting Server Engines", "Web Dashboard Interfaces", "Analytical Database Systems", "Email Dispatcher Services"]
    }
  ];



  return (
    <div className="flex flex-col w-full text-white">

      {/* 1. HERO (Dark Immersive with Stats) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 pt-24 pb-32 overflow-hidden">
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
                  <span>10+ Years of Critical IT Expertise</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Data Center<br />
                  <span className="gradient-heading">Infrastructure</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg font-medium max-w-lg leading-relaxed mb-8">
                  AEPL has 10+ years history in providing solutions in building environments incorporating latest technology in the critical infrastructure of Data Center. Your peace of mind comes from our world class quality and state-of-art design customised to the needs of each critical infrastructure.
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

          {/* PROCESS FLOW BANNER */}
          <div className="border-t border-white/10 pt-12 mt-16 max-w-4xl mx-auto w-full relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-slate-300 font-semibold text-center">
              {[
                { step: "01", name: "Automation", desc: "BMS Heat Management & Telemetry" },
                { step: "02", name: "Power System", desc: "EMS Analysis & Distribution" },
                { step: "03", name: "Fire Fighting", desc: "Clean Agent Suppression" }
              ].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-12 w-full md:w-auto justify-between md:justify-start">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
                      {p.step}
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-sm leading-tight">{p.name}</h4>
                      <p className="text-[10px] text-gray-400 font-medium leading-normal">{p.desc}</p>
                    </div>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block text-2xl text-primary font-bold font-mono pl-6">→</div>
                  )}
                </div>
              ))}
            </div>
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

      {/* CORE TURN-KEY INFRASTRUCTURE SYSTEMS */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Selector tabs & description */}
            <div className="lg:col-span-5 w-full flex">
              <SectionWrapper className="h-full w-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Turn-Key Offerings</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-heading tracking-tight leading-tight">
                    Core Turn-Key <br />
                    <span className="gradient-heading">Infrastructure Systems</span>
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    Our extensive execution experience in Automation, High-Voltage Power distribution, and Fire safety enables concurrently maintainable operations.
                  </p>

                  {/* Vertical Tabs */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0da08a] mb-2.5 font-mono">
                      Turn-Key Pillars
                    </h4>
                    <div className="flex flex-col gap-2.5">
                      {pillars.map((pillar, idx) => {
                        const isActive = activePillar === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActivePillar(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group flex items-start gap-4 cursor-pointer select-none ${
                              isActive
                                ? "bg-white border-primary/30 shadow-md shadow-primary/5"
                                : "bg-transparent border-slate-200/60 hover:bg-white/50 hover:border-slate-300"
                            }`}
                          >
                            {isActive && (
                              <div className="absolute left-0 top-3.5 bottom-3.5 w-1 bg-primary rounded-r-md"></div>
                            )}
                            <div className={`p-2 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                              isActive ? "bg-primary/20 text-primary" : "bg-slate-200 text-slate-600"
                            }`}>
                              {pillar.icon}
                            </div>
                            <div>
                              <h5 className={`text-xs font-extrabold transition-colors ${isActive ? "text-slate-950 text-sm" : "text-slate-700 text-xs"}`}>{pillar.title}</h5>
                              <p className={`text-[10px] leading-relaxed mt-1 transition-colors ${isActive ? "text-slate-600 font-medium" : "text-slate-500 font-medium"}`}>{pillar.tagline}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right side: Detailed Scope Card */}
            <div className="lg:col-span-7 w-full flex">
              <SectionWrapper delay={0.2} className="h-full w-full flex flex-col justify-between">
                <div className="w-full h-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between select-none">
                  <div>
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-4 mb-5 flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        AEPL IMPLEMENTATION BLUEPRINT
                      </span>
                      <span className="font-bold text-primary">PILLAR_0{activePillar + 1}</span>
                    </div>

                    {/* Content Detail */}
                    <h3 className="text-xl font-bold text-slate-950 mb-3">{pillars[activePillar].title} Scope</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
                      {pillars[activePillar].desc}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillars[activePillar].items.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex items-start gap-3 hover:border-primary/25 transition-colors duration-300">
                          <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-primary">
                            <CheckCircle2 className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold text-slate-900 mb-1 leading-snug">{item.label}</h4>
                            <p className="text-[10px] text-slate-500 leading-normal font-medium">{item.val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>AEPL DC CORE CAPABILITY MODULE</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>ACTIVE DRAWINGS</span>
                    </span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. BENEFITS (Key benefits grid) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Why AEPL</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900">
                Key Benefits of <span className="gradient-heading">Smart Data Center Systems</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Efficient on-premises Data Center power, cooling, security and environmental monitoring that gives you the reports, graphs, instant fault notification, and escalation you need to quickly resolve events and ensure the high availability of your critical infrastructure.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Power System Efficiency",
                desc: "Real-time energy tracking and load optimization via smart EMS interfaces, reducing overall operational costs."
              },
              {
                icon: <Wind className="w-5 h-5" />,
                title: "Precision Cooling",
                desc: "Integrated floor-level heat management and CRAH fan speeds dynamically linked with cabinet temperature readings."
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Unified Security Monitoring",
                desc: "Access control, environmental alarms, and thermal arrays fully visualized and managed in a single console."
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: "Instant Fault Notifications",
                desc: "Advanced Fault Detection and Diagnostics (FDD) with automated escalation alerts to resolve issues before downtime occurs."
              }
            ].map((benefit, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUE CREATION (Operational software optimization) */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-t border-white/5 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side detail */}
            <SectionWrapper>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Value Creation</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight">
                  Optimizing Colocation &amp; DC Operations
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Software for planning, modelling, and optimization of your Data Center and colocation operations through assets tracking, risk management, and integrations with third-party systems, eliminating dependency on complex spreadsheets.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Dynamic Asset Tracking", desc: "Keep count and locations of all blades, power feeds, and thermal sensors automatically." },
                    { title: "Risk Simulation Models", desc: "Simulate generator failovers and circuit outages without impacting operations." },
                    { title: "Universal Integrations", desc: "Integrate BMS, power switchgears, and ticketing software via REST APIs and Modbus rings." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 font-bold text-xs mt-1">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Right side high-tech mock layout */}
            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl font-mono">
                <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] text-gray-500">
                  <span>AEPL OPERATIONS PLATFORM</span>
                  <span className="text-primary font-bold">READY</span>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-4">Software Integrations Status</h4>
                <div className="space-y-3">
                  {[
                    { label: "Colocation Asset Registry", status: "CONNECTED (AUTO-SYNC)" },
                    { label: "Risk Management Engine", status: "NOMINAL (RUNNING)" },
                    { label: "Third-Party HVAC APIs", status: "ACTIVE (POLLING)" },
                    { label: "Legacy Spreadsheet Parser", status: "DEPRECATED (BYPASSED)" }
                  ].map((sys, sIdx) => (
                    <div key={sIdx} className="p-3 bg-slate-950 border border-white/5 rounded-xl flex justify-between text-[10px]">
                      <span className="text-gray-400 font-bold">{sys.label}</span>
                      <span className="text-primary font-bold">{sys.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection
        theme="dark"
        faqs={[
          {
            question: "What does AEPL's scope of work include for Data Center E&I?",
            answer: "We supply, install, test, and commission complete Electrical and Instrumentation (E&I) systems. This includes high-tension (HT) switchyards up to 33kV, medium-voltage (MV) and low-voltage (LV) distribution panels (PCC/MCC), busduct routing, uninterruptible power supply (UPS) synchronization, precision HVAC controls, and environment monitoring systems (EMS)."
          },
          {
            question: "What certifications and compliance levels do you support for data center infrastructure?",
            answer: "All our panels and integration designs comply with international standards such as IS/IEC 61439 (Type-Tested assemblies) and IEEE recommendations. We design systems to align with TIA-942 and Uptime Institute Tier III and Tier IV guidelines, ensuring maximum operational availability."
          },
          {
            question: "How does AEPL support Concurrent Maintainability (Tier III)?",
            answer: "We design and fabricate electrical panels with dual power feeds, physical compartment barriers (Form 4b separation), and draw-out vacuum circuit breakers (VCBs). This allows maintenance, testing, and replacement of individual power paths or breakers without shutting down downstream servers."
          },
          {
            question: "Do you integrate Building Management Systems (BMS) and EPMS?",
            answer: "Yes. We configure intelligent monitoring gateways that aggregate telemetry from energy meters, UPS systems, automatic transfer switches (ATS), chillers, and CRAH units. Data is integrated into centralized BMS or EPMS platforms via Modbus RTU/TCP, BACnet, or SNMP protocols."
          },
          {
            question: "What testing protocols are executed before hand-over?",
            answer: "We conduct detailed Factory Acceptance Testing (FAT) with loop checking and hot-standby simulations. On-site, we perform comprehensive Site Acceptance Testing (SAT), including insulation tests, contact resistance tests, relay coordination checks, and generator synchronization audits."
          }
        ]}
      />

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
