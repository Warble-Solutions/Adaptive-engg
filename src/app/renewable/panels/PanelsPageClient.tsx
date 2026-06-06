"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Activity, ShieldCheck, Cpu, CheckCircle2, 
  Settings, Shield, Gauge, Layers, Sliders, Play, Award, 
  HelpCircle, ChevronRight, FileText, Database, Compass
} from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

export default function PanelsPageClient() {
  const [activePanelType, setActivePanelType] = useState<number>(0);
  const [activeMfgStep, setActiveMfgStep] = useState<number>(0);
  const [activeAnalysis, setActiveAnalysis] = useState<number>(0);

  const panelTypes = [
    {
      title: "LT Panels",
      icon: <Zap className="w-6 h-6" />,
      desc: "PCC, MCC, APFC, Bus Duct, and custom control panels rated up to 6300A for industrial and utility applications.",
      specs: [
        { label: "Rated Current", value: "Up to 6300A" },
        { label: "Short Circuit Rating", value: "100kA for 1s" },
        { label: "IP Protection Class", value: "IP42 / IP52 / IP54 / IP55" },
        { label: "Busbar Material", value: "99.9% Electrolytic Copper / Aluminium" },
        { label: "Form Configuration", value: "Form 3b / Form 4a / Form 4b" }
      ],
      typesList: ["Power Control Centers (PCC)", "Motor Control Centers (MCC)", "APFC Panels (Harmonic Filtered)", "Busducts & Sandwiched Busways"]
    },
    {
      title: "HT Panels",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "11kV and 33kV VCB panels, Ring Main Units (RMU), and metering panels for substation applications.",
      specs: [
        { label: "Rated System Voltage", value: "11kV / 22kV / 33kV" },
        { label: "Short Time Current", value: "26.3kA / 31.5kA for 3s" },
        { label: "Breaker Medium", value: "Vacuum Circuit Breaker (VCB)" },
        { label: "Internal Arc Class", value: "IAC AFLR 31.5kA/1s" },
        { label: "Enclosure Type", value: "Metal Clad LSC2B-PM" }
      ],
      typesList: ["Substation Incomer VCBs", "Ring Main Units (RMU)", "HT Metering Kiosks", "Outdoor Breaker Enclosures"]
    },
    {
      title: "Solar Panels",
      icon: <Activity className="w-6 h-6" />,
      desc: "ACDB, DCDB, String Combiner Boxes, Inverter Duty Panels with IP65 protection for harsh outdoor environments.",
      specs: [
        { label: "DC Input Voltage", value: "Up to 1500V DC" },
        { label: "AC Output Voltage", value: "Up to 800V AC" },
        { label: "Protection Index", value: "IP65 / IP66 Outdoor Weatherproof" },
        { label: "Surge Protection", value: "Type 1 + Type 2 DC SPDs" },
        { label: "Communication Protocol", value: "Modbus TCP / RTU / Fiber Optic" }
      ],
      typesList: ["AC Distribution Boards (ACDB)", "DC Distribution Boards (DCDB)", "String Combiner & Monitoring Boxes", "Inverter Duty LT Panels"]
    },
    {
      title: "Automation Panels",
      icon: <Cpu className="w-6 h-6" />,
      desc: "PLC panels, VFD panels, relay protection panels, and SCADA interface panels with pre-loaded configurations.",
      specs: [
        { label: "PLC Redundancy", value: "Hot-Standby Dual Processor" },
        { label: "VFD Filtering", value: "Harmonics AHF / Line Reactors" },
        { label: "Control System", value: "Siemens / Rockwell / Schneider" },
        { label: "Network Ring Topology", value: "MRP / DLR High-Speed Fiber" },
        { label: "Surge & EMI Protection", value: "Integrated Shielding & TVSS" }
      ],
      typesList: ["SCADA Remote I/O Marshalling Panels", "Variable Frequency Drive (VFD) Panels", "DCS/RTU Automation Cabinets", "Relay Control & Annunciation Panels"]
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

  const analysisStudies = [
    {
      title: "Short Circuit Study",
      desc: "Fault level analysis at every bus to determine equipment ratings, protective device coordination, and system adequacy.",
      simName: "Fault Injection Simulation",
      simMetric: "Calculated Peak Fault",
      simValue: "51.2 kA",
      simLimit: "65.0 kA",
      simStatus: "SAFE",
      simStatusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      simCode: "BUS_33KV: FAULT_INJECTED -> VCB_TRIP_SUCCESS (120ms)"
    },
    {
      title: "Power Factor Analysis",
      desc: "Harmonic analysis, reactive power compensation design, and APFC panel sizing for optimal power quality.",
      simName: "APFC Sizing & Harmonics",
      simMetric: "Target Power Factor",
      simValue: "0.992",
      simLimit: "Raw: 0.810",
      simStatus: "OPTIMAL",
      simStatusColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      simCode: "THD_VOLTAGE: 1.8% -> APFC_COMPENSATED (Active Filter ON)"
    },
    {
      title: "Earthing Study",
      desc: "Touch and step potential analysis, soil resistivity interpretation, and earthing grid design per IS/IEEE standards.",
      simName: "Step & Touch Potential",
      simMetric: "Max Touch Voltage",
      simValue: "62.4 V",
      simLimit: "IEEE Limit: 110V",
      simStatus: "COMPLIANT",
      simStatusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      simCode: "EARTH_GRID: RESISTIVITY_CHECK -> STEP_POTENTIAL_PASS (42V)"
    },
    {
      title: "Transformer & Cable Sizing",
      desc: "Optimal transformer selection, cable size calculation with derating factors, voltage drop analysis, and ampacity verification.",
      simName: "Voltage Drop / Derating",
      simMetric: "Cable Temp Rise",
      simValue: "68°C",
      simLimit: "Max Limit: 90°C",
      simStatus: "VERIFIED",
      simStatusColor: "text-primary bg-primary/20 border-primary/30",
      simCode: "FEEDER_L1: 3C x 240 sq mm Al -> VOLTAGE_DROP: 1.25% (Limit 3%)"
    },
    {
      title: "Relay Coordination Study",
      desc: "Time-current curve analysis, protection grading, and relay setting calculations for selective fault isolation.",
      simName: "TCC Overcurrent Curve",
      simMetric: "Breaker Trip Delay",
      simValue: "0.18 s",
      simLimit: "Backup: 0.38s",
      simStatus: "SELECTIVE",
      simStatusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      simCode: "RELAY_50/51: INSTANTANEOUS_TRIP -> COORD_MARGIN: 200ms"
    },
    {
      title: "Load Flow Study",
      desc: "Steady-state voltage profile, branch loading, transformer loading, and system losses under various operating scenarios.",
      simName: "Steady-State Load Flow",
      simMetric: "Bus Voltage Level",
      simValue: "99.6 %",
      simLimit: "Nominal: 33.0 kV",
      simStatus: "STABLE",
      simStatusColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      simCode: "ACTIVE_POWER: 4.85 MW -> REACTIVE_POWER: 1.15 MVAr"
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
                  Engineering type-tested HT & LT panels alongside comprehensive ETAP-based power system analysis.
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
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">40k<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Sq. Ft. Manufacturing Space</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">25k<span className="text-primary">+</span></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Panels Dispatched & Commissioned</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-primary/10 to-teal-500/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">IS/IEC 61439</div>
                    <span className="text-xs text-gray-300">Type-tested for short circuit & temperature rise</span>
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

      {/* 2. PANEL RANGE (State-Based Switchboard Drawer) */}
      <section id="panel-range" className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Product Catalog</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Engineered Panel Range</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Explore our comprehensive range of high and low-voltage custom-built switchboards manufactured for solar, utility, and heavy industries.
              </p>
            </SectionWrapper>
          </div>

          {/* Cards selector grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {panelTypes.map((item, idx) => {
              const isActive = activePanelType === idx;
              return (
                <SectionWrapper key={idx} delay={idx * 0.05}>
                  <button
                    onClick={() => setActivePanelType(idx)}
                    className={`w-full text-left p-8 rounded-2xl border transition-all duration-300 cursor-pointer select-none group h-full flex flex-col justify-between ${
                      isActive
                        ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 translate-y-[-4px]"
                        : "bg-slate-50 border-slate-200/50 hover:bg-slate-100/70 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                        isActive ? "bg-primary/20 text-primary" : "bg-teal-50 text-primary"
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 font-heading leading-tight">{item.title}</h3>
                      <p className={`text-xs leading-relaxed font-medium mb-4 ${isActive ? "text-slate-400" : "text-slate-500"}`}>
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

          {/* Detailed specs sheet layout */}
          <SectionWrapper delay={0.2}>
            <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -mr-40 -mt-40"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                {/* Tech Specs Table */}
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Standard Technical Sheet</span>
                  <h4 className="text-xl font-bold font-heading text-white mb-6">
                    {panelTypes[activePanelType].title} Specifications
                  </h4>
                  
                  <div className="divide-y divide-white/10 text-xs">
                    {panelTypes[activePanelType].specs.map((spec, sIdx) => (
                      <div key={sIdx} className="py-3.5 flex justify-between gap-4">
                        <span className="text-gray-400 font-bold">{spec.label}</span>
                        <span className="text-white font-bold font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-assemblies */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Module Configurations</span>
                    <h4 className="text-lg font-bold font-heading text-white mb-4">Scope & Applications</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {panelTypes[activePanelType].typesList.map((type, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-medium leading-tight">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-mono">AEPL MFG SCHED v1.4</span>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-primary transition-colors">
                      Request Panel Drawing <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 3. MANUFACTURING EXCELLENCE (Interactive Timeline Flow) */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side info block */}
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                  <Settings className="w-4 h-4" />
                  <span>Fabrication Quality</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6 leading-tight">
                  Manufacturing Excellence
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium mb-10">
                  Our ISO-certified manufacturing process combines CNC automation, advanced busbar layout computations, and strict type-testing to deliver industry-leading switchboards.
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
                            ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/10 translate-x-1"
                            : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
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
                <div className="w-full bg-white border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-50 select-none font-mono">
                    {mfgSteps[activeMfgStep].num}
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Active Manufacturing Phase</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading leading-snug">
                      {mfgSteps[activeMfgStep].title}
                    </h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-8 min-h-[48px]">
                      {mfgSteps[activeMfgStep].desc}
                    </p>
                    
                    <div className="border-t border-slate-100 pt-8 mt-6">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4.5">Operations & QA Parameters</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-800 font-bold">
                        {mfgSteps[activeMfgStep].features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-4 p-4.5 bg-slate-50 border border-slate-200/50 rounded-2xl hover:border-primary/30 hover:bg-slate-100/30 hover:shadow-md transition-all duration-300 min-h-[72px]">
                            <CheckCircle2 className="w-5.5 h-5.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>AEPL QUALITY CONTROL CERTIFIED</span>
                    <span>STAGE_0{activeMfgStep + 1}</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ELECTRICAL POWER SYSTEM ANALYSIS (Interactive ETAP Simulator Console) */}
      <section className="py-28 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                <Gauge className="w-4 h-4" />
                <span>Simulation Engineering Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Electrical Power System Analysis</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
                Comprehensive system verification studies compiled using E-TAP tools. Ensure short circuit safety, protection coordination, and power factor standards.
              </p>
            </div>
          </SectionWrapper>

          {/* Interactive ETAP Layout */}
          <div className="flex flex-col lg:flex-row gap-10 items-stretch mb-20">
            {/* Left list selectors */}
            <div className="w-full lg:w-4/12 flex flex-col gap-3 shrink-0">
              {analysisStudies.map((study, idx) => {
                const isActive = activeAnalysis === idx;
                return (
                  <SectionWrapper key={idx} delay={idx * 0.05}>
                    <button
                      onClick={() => setActiveAnalysis(idx)}
                      onMouseEnter={() => setActiveAnalysis(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none group flex items-start gap-3 ${
                        isActive
                          ? "bg-gradient-to-r from-primary/15 to-primary/5 border-primary/40 shadow-lg shadow-primary/5"
                          : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg shrink-0 transition-transform group-hover:scale-105 ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400"
                      }`}>
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-gray-300"}`}>{study.title}</h4>
                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${isActive ? "text-slate-300" : "text-gray-400"}`}>
                          {study.desc}
                        </p>
                      </div>
                    </button>
                  </SectionWrapper>
                );
              })}
            </div>

            {/* Right ETAP Simulation Console Screen */}
            <div className="w-full lg:w-8/12 flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full h-full bg-slate-950 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden lg:h-[540px] min-h-[540px] font-mono">
                  {/* Neon screen grid mesh overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Console Header */}
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] text-gray-500">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-slate-300">ETAP POWER ENGINE v22.0.4</span>
                      </div>
                      <div className="flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        <span className="text-white">RUNNING_SIMULATION</span>
                      </div>
                    </div>

                    {/* Simulation readouts */}
                    <div className="flex-grow space-y-6 py-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div>
                          <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">Active Study</span>
                          <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                            {analysisStudies[activeAnalysis].title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed max-w-lg font-sans min-h-[48px] md:min-h-[36px]">
                            {analysisStudies[activeAnalysis].desc}
                          </p>
                        </div>
                        
                        {/* Simulation Status circular pill */}
                        <div className="shrink-0 flex flex-col items-center justify-center">
                          <div className={`px-6 py-3 border rounded-xl font-black text-sm text-center min-w-[140px] ${analysisStudies[activeAnalysis].simStatusColor}`}>
                            {analysisStudies[activeAnalysis].simStatus}
                          </div>
                          <span className="text-[10px] text-gray-500 mt-2 font-bold uppercase">Report Status</span>
                        </div>
                      </div>

                      {/* Diagnostic specifications */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-center min-h-[160px]">
                          <span className="text-[10px] text-gray-500 font-bold uppercase block mb-3">Simulated Parameter Output</span>
                          <div className="flex justify-between items-baseline py-2 border-b border-white/5">
                            <span className="text-xs text-gray-400">{analysisStudies[activeAnalysis].simName}</span>
                            <span className="text-base font-bold text-white">{analysisStudies[activeAnalysis].simValue}</span>
                          </div>
                          <div className="flex justify-between items-baseline py-2 mt-2">
                            <span className="text-[10px] text-gray-500">{analysisStudies[activeAnalysis].simMetric}</span>
                            <span className="text-xs text-gray-400">{analysisStudies[activeAnalysis].simLimit}</span>
                          </div>
                        </div>

                        <div className="bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[160px]">
                          <span className="text-[10px] text-gray-500 font-bold uppercase block mb-3">Live Engine Log Stream</span>
                          <div className="text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-white/5 whitespace-nowrap overflow-x-auto font-mono flex-grow flex items-center">
                            <code>{analysisStudies[activeAnalysis].simCode}</code>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Console Footer */}
                    <div className="border-t border-white/10 pt-4 mt-6 flex flex-wrap gap-4 justify-between items-center text-[9px] text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>IS/IEC/IEEE Compliant System Logs</span>
                      </span>
                      <span className="text-slate-400 font-bold">SIMULATION COMPLETED</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>

          {/* EPSA Benefits Table */}
          <SectionWrapper>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center font-heading">
                  Why Professional ETAP Simulation Matters
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  {[
                    "Protects electrical assets from massive thermal/magnetic fault stresses",
                    "Reduces power bills via reactive power and harmonic calculations",
                    "Assures strict compliance with IEEE/IS grid synchronization standards",
                    "Protects operators from step and touch potential shock loops",
                    "Reduces installation capital expenditure via optimized sizing grids",
                    "Speeds up grid synchronization approval with compliant drawings"
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl hover:border-primary/20 hover:bg-white/10 transition-all duration-300">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs leading-relaxed font-semibold font-sans">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Secure Your Electrical Infrastructure</h2>
            <p className="text-slate-500 mb-8 text-base leading-relaxed">
              Consult with AEPL's panel design engineering team to customize your low-voltage or high-voltage switchboard configurations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-lg shadow-teal-500/20">
              Request Detailed Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
