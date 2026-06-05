"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Shield, 
  Battery, 
  CheckCircle2, 
  Factory, 
  Monitor, 
  Cpu, 
  PieChart, 
  Wrench, 
  Sun, 
  Activity, 
  LineChart, 
  DollarSign 
} from "lucide-react";
import Image from "next/image";
import MicroCTA from "@/components/ui/MicroCTA";
import SectionWrapper from "@/components/SectionWrapper";
import { COMPANY_STATS } from "@/lib/constants";

export default function RenewablePageClient() {
  // --- NOC Simulator State ---
  const [generation, setGeneration] = useState(128.4);
  const [gridFreq, setGridFreq] = useState(50.02);
  const [bessSoC, setBessSoC] = useState(72.4);
  const [bessStatus, setBessStatus] = useState("CHARGING");
  const [logFeed, setLogFeed] = useState<string[]>([
    "System Initialized. Grid sync established.",
    "PPC active power control looping: Compliant",
    "SCADA telemetry feed: 100% tags responsive"
  ]);

  // --- Yield Calculator State ---
  const [solarCap, setSolarCap] = useState(100); // MW
  const [windCap, setWindCap] = useState(50); // MW
  const [bessCap, setBessCap] = useState(20); // MWh

  // Dynamic NOC Telemetry simulation
  useEffect(() => {
    const timer = setInterval(() => {
      // Random generation fluctuation
      setGeneration(prev => {
        const delta = (Math.random() - 0.5) * 2;
        return parseFloat(Math.max(10, prev + delta).toFixed(1));
      });

      // Grid frequency fluctuation
      setGridFreq(prev => {
        const delta = (Math.random() - 0.5) * 0.02;
        return parseFloat(Math.min(50.15, Math.max(49.85, prev + delta)).toFixed(3));
      });

      // BESS SoC simulation
      setBessSoC(prev => {
        if (prev >= 95) {
          setBessStatus("DISCHARGING");
          return parseFloat((prev - 0.1).toFixed(1));
        } else if (prev <= 15) {
          setBessStatus("CHARGING");
          return parseFloat((prev + 0.1).toFixed(1));
        }
        return parseFloat((bessStatus === "CHARGING" ? prev + 0.15 : prev - 0.15).toFixed(1));
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [bessStatus]);

  // Log feed updater
  useEffect(() => {
    const timer = setInterval(() => {
      const logs = [
        `PPC dynamic response active at POI. Frequency: ${gridFreq}Hz.`,
        `Telemetry heartbeat ok. Inverters response loop execution <180ms.`,
        `BESS status: ${bessStatus} | SoC: ${bessSoC}%`,
        `Active SCADA Tags: 125,482/125,482 online.`,
        "AGC scheduling command synchronized with grid operator."
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLogFeed(prev => [randomLog, prev[0], prev[1]].slice(0, 3));
    }, 4500);

    return () => clearInterval(timer);
  }, [gridFreq, bessSoC, bessStatus]);

  // Yield & Cost Calculations
  const solarGen = solarCap * 1.62; // GWh/year
  const windGen = windCap * 2.85; // GWh/year
  const totalGen = solarGen + windGen;
  
  const carbonOffset = totalGen * 820; // Tons of CO2/year
  
  // Simulated project cost in Crores INR
  const estCost = (solarCap * 4.5) + (windCap * 6.5) + (bessCap * 2.2); 
  
  // Simulated stability index
  let stabilityIndex = 70;
  if (solarCap > 0 && windCap > 0) stabilityIndex += 12; // Hybrid balance
  if (bessCap > 0) {
    const ratio = bessCap / (solarCap + windCap + 1);
    stabilityIndex += Math.min(16, Math.round(ratio * 80));
  }
  stabilityIndex = Math.min(99.8, stabilityIndex);

  // Payback years
  const annualRev = (solarGen * 2.6) + (windGen * 3.1) + (bessCap * 0.08 * 300 * 1.5 / 10); // Simulated revenue Crore
  const payback = annualRev > 0 ? parseFloat(Math.min(10, Math.max(3.5, estCost / annualRev)).toFixed(1)) : 0;

  return (
    <div className="flex flex-col w-full bg-slate-950 text-white font-sans">
      {/* 1. HERO SECTION */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/renewable.jpg"
            alt="Renewable Solutions Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6 bg-black/40 backdrop-blur-md py-2 px-6 rounded-full inline-flex border border-white/10 shadow-lg">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/80">Renewable Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Renewable <span className="gradient-heading">Solutions</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-md rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              The complete power value chain: From Digital Intelligence & SCADA to Heavy Electrical Infrastructure & Grid Integration
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* --- SOLUTION NAVIGATOR --- */}
      <section className="relative z-20 py-24 bg-slate-900 rounded-t-[40px] -mt-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1: Software */}
            <SectionWrapper delay={0.1}>
              <a href="#unified" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Monitor className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Unified Renewable Solution</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">SCADA, PPC, and Telemetry for Grid Compliance.</p>
              </a>
            </SectionWrapper>

            {/* Card 2: Hardware */}
            <SectionWrapper delay={0.2}>
              <a href="#panels" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Electrical Panels</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">In-house Manufacturing of HT/LT Panels.</p>
              </a>
            </SectionWrapper>

            {/* Card 3: Projects */}
            <SectionWrapper delay={0.3}>
              <a href="#turnkey" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Factory className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Turnkey E&I</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">End-to-End Execution for Solar & Wind.</p>
              </a>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION 1: UNIFIED RENEWABLE SOLUTIONS (Dark with Simulation NOC) */}
      <section id="unified" className="py-32 bg-slate-950 text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Core Software Suite</span>
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">
                1. Unified Renewable Solution
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                An integrated digital ecosystem ensuring grid compliance, real-time control, and asset longevity.
              </p>
            </SectionWrapper>
          </div>

          {/* NOC Dashboard Simulator Pane */}
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 p-8 bg-slate-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-md shadow-3xl">
              {/* Description side */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit border border-primary/20">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>NOC Simulation Loop</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Unified Telemetry Control</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Experience a simulation of our unified Power Plant Controller (PPC) and SCADA console. In utility-scale solar and wind fields, this module monitors active generation metrics, manages BESS charge loops, and ensures state-grid compliance parameters automatically.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">Active grid coupling compliance checks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">Dynamic power curtailment logic response</span>
                  </div>
                </div>
              </div>

              {/* Console side */}
              <div className="lg:col-span-7 bg-black rounded-3xl border border-white/10 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="w-3 h-3 bg-emerald-500 rounded-full absolute"></span>
                    <div className="text-xs font-mono font-bold tracking-widest text-emerald-400">AEPL-PPC // COMPLIANT</div>
                  </div>
                  <div className="text-right text-[10px] font-mono text-gray-500">
                    LATENCY: 12ms // RTU_OK
                  </div>
                </div>

                {/* Console Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                    <div className="text-2xl font-mono font-black text-primary">{generation} MW</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Active Gen</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                    <div className="text-2xl font-mono font-black text-amber-400">{gridFreq} Hz</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Grid Freq</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                    <div className="text-2xl font-mono font-black text-teal-400">{bessSoC}%</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">BESS SoC</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                    <div className="text-2xl font-mono font-black text-sky-400">{bessStatus}</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">BESS Status</div>
                  </div>
                </div>

                {/* Live Console Output feed */}
                <div className="bg-slate-950 rounded-xl p-4 border border-white/5 font-mono text-xs text-emerald-500/80 space-y-2 flex-grow min-h-[100px] flex flex-col justify-end">
                  {logFeed.map((log, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-gray-600 shrink-0">[{new Date().toLocaleTimeString()}]</span>
                      <span className="text-gray-400">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SCADA",
                icon: <Monitor />,
                href: "/renewable/unified/scada",
                bullets: [
                  "Flexible & Scalable Architecture",
                  "Rich set of Renewable Libraries",
                  "Seamless Handling of 10 Lacs+ Tags",
                  "Refined interface from decades of experience"
                ]
              },
              {
                title: "Power Plant Controller (PPC)",
                icon: <Cpu />,
                href: "/ppc",
                bullets: [
                  "Grid Code Compliant",
                  "HIL Type Tested",
                  "Automatic Generation Control (AGC) Ready",
                  "Forecast & Schedule Synchronization"
                ]
              },
              {
                title: "Central Monitoring System (CMS)",
                icon: <Shield />,
                href: "/renewable/unified/cms",
                bullets: [
                  "Insightful View of Entire Portfolio",
                  "Measure KPIs against Targeted Data",
                  "ML Based Anomaly Detection",
                  "Conversational AI Assistant"
                ]
              },
              {
                title: "Advanced Analytics",
                icon: <PieChart />,
                href: "/renewable/unified/analytics",
                bullets: [
                  "Advanced Data Visualization",
                  "Accurate Loss Buckets",
                  "Custom Report Builder",
                  "Analyse Historical Data"
                ]
              },
              {
                title: "CMMS",
                icon: <Wrench />,
                href: "/renewable/unified/cmms",
                bullets: [
                  "Automated Workorder Management",
                  "Standardized SOPs Across Enterprise",
                  "Reduced Mean Time to Repair",
                  "Cost Control & Inventory Management"
                ]
              },
              {
                title: "EMS - BESS",
                icon: <Battery />,
                href: "/renewable/unified/ems-bess",
                bullets: [
                  "Indigenous Solution",
                  "ML Based Energy Arbitrage",
                  "State of Charge (SoC) Management",
                  "Peak Shaving, Grid Support"
                ]
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-8 bg-slate-900/40 border border-white/10 rounded-2xl hover:bg-slate-900/70 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <div className="w-6 h-6">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={item.href} className="mt-6 flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all w-fit">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
            <MicroCTA text="Download Brochure" variant="download" href="/resources/brochures" />
            <MicroCTA text="Get Demo" variant="connect" href="/contact" context="dark" />
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE CALCULATOR SECTION --- */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Engineering Evaluation Tool</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Interactive Clean Energy & Yield Calculator</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Configure your proposed solar, wind, and storage capacity parameters to check estimated clean power metrics and stability indices.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sliders Container */}
            <div className="lg:col-span-6 space-y-8 p-8 bg-slate-800/40 border border-white/5 rounded-3xl">
              <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3 mb-6">Asset Capacity Configuration</h3>

              {/* Slider 1: Solar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Solar Capacity</span>
                  </div>
                  <span className="text-primary font-mono">{solarCap} MW</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={solarCap}
                  onChange={(e) => setSolarCap(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Slider 2: Wind */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>Wind Capacity</span>
                  </div>
                  <span className="text-primary font-mono">{windCap} MW</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={windCap}
                  onChange={(e) => setWindCap(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Slider 3: BESS */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-emerald-400" />
                    <span>BESS Storage</span>
                  </div>
                  <span className="text-primary font-mono">{bessCap} MWh</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={bessCap}
                  onChange={(e) => setBessCap(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>

            {/* Calculations Dashboard View */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cost card */}
              <div className="p-6 bg-slate-950 border border-white/10 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Est. Capex</span>
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-black font-heading text-white font-mono">
                    ₹{estCost > 0 ? estCost.toFixed(1) : "0"} Cr
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2">Simulation based on average EPC installation variables.</p>
                </div>
              </div>

              {/* Annual Generation card */}
              <div className="p-6 bg-slate-950 border border-white/10 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Annual Yield</span>
                  <LineChart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-black font-heading text-white font-mono">
                    {totalGen.toFixed(1)} GWh
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2">Estimated generation using typical CUF values (Solar: 18.5%, Wind: 32.5%).</p>
                </div>
              </div>

              {/* Carbon Offset card */}
              <div className="p-6 bg-slate-950 border border-white/10 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">CO2 Offsets</span>
                  <Shield className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-3xl font-black font-heading text-white font-mono">
                    {carbonOffset.toLocaleString(undefined, { maximumFractionDigits: 0 })} Tons/Yr
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2">Greenhouse gas emission reduction equivalent.</p>
                </div>
              </div>

              {/* Grid stability rating */}
              <div className="p-6 bg-slate-950 border border-white/10 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stability Index</span>
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-3xl font-black font-heading text-white font-mono">
                    {stabilityIndex}%
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-500" 
                      style={{ width: `${stabilityIndex}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Payback period card */}
              <div className="md:col-span-2 p-6 bg-gradient-to-r from-teal-950/30 to-slate-950 border border-teal-500/20 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-300">Estimated Project Payback Period</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Simple payback mapping simulated tariffs and arbitrage loops.</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-heading text-primary font-mono">{payback} Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION 2: ELECTRICAL PANELS */}
      <section id="panels" className="py-24 bg-white text-slate-900 rounded-t-[40px] relative z-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionWrapper>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Engineering & Manufacturing</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">2. Electrical Panels</h2>
                <p className="text-xl text-primary font-bold mb-6">
                  Manufactured in our {COMPANY_STATS.manufacturingFacility.formatted} Sq. Ft. Manufacturing Facility.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  We design and manufacture high-performance control panels ensuring safety and reliability for critical infrastructure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <PanelItem title="HT Panels" desc="Up to 33kV Indoor/Outdoor VCB" />
                  <PanelItem title="LT Panels" desc="PCC, MCC, APFC, and Bus Ducts" />
                  <PanelItem title="Specialty Panels" desc="C&R Panels for substations" />
                  <PanelItem title="Compact Substations" desc="CSS solutions for rapid deployment" />
                </div>
                <div className="mt-8 flex items-center gap-4 justify-start">
                  <Link href="/renewable/panels" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary rounded-full font-bold text-slate-700 hover:border-primary/50 hover:shadow-xl hover:text-primary transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <MicroCTA text="Contact Sales" variant="connect" href="/contact" context="light" />
                </div>
              </SectionWrapper>
            </div>

            <div className="lg:w-1/2">
              <SectionWrapper delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="col-span-2 row-span-2 relative group overflow-hidden">
                    <Image 
                      src="/imgs/renewable/solar_combiner_panel.png" 
                      alt="HT/LT Panel Electrical Wiring" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/imgs/renewable/solar_inverter_cabinet.png" 
                      alt="Control Panel Cabinets" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/imgs/renewable/solar_switchgear_panel.png" 
                      alt="PLC Controller Modules" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/imgs/renewable/solar_combiner_wiring.png" 
                      alt="Panel Assembly Line" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/imgs/renewable/solar_telemetry_cabinet.png" 
                      alt="Testing & Quality Control" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <div className="text-primary font-bold tracking-widest uppercase text-xs mb-1">State-of-the-Art</div>
                    <div className="text-white text-lg font-bold">Manufacturing Unit</div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION 3: TURNKEY E&I */}
      <section id="turnkey" className="py-24 bg-transparent text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Complete Execution Scope</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">3. Turnkey E&I</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Complete Electrical & Instrumentation services for Utility Scale & Hybrid projects.</p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Switchyards", desc: "Design & erection up to 220kV.", img: "/imgs/turnkey/7.jpg" },
              { title: "Transmission", desc: "ROW, towers & stringing.", img: "/imgs/turnkey/8.jpg" },
              { title: "Liasioning", desc: "CEIG & DISCOM approvals.", img: "/imgs/turnkey/9.jpg" },
              { title: "Testing", desc: "Pre-commissioning & Sync.", img: "/imgs/turnkey/10.jpg" }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-white/5">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-white border-l-4 border-primary pl-4">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed pl-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MicroCTA text="Learn More" variant="connect" href="/renewable/turnkey" context="dark" />
          </div>
        </div>
      </section>

      {/* 5. SECTORS WE SERVE */}
      <section className="py-24 bg-white text-slate-900 rounded-t-[40px] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Powering the Future</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Utility Scale", desc: "GW-scale Solar & Wind parks", icon: <Sun className="w-8 h-8" /> },
              { title: "Hybrid Projects", desc: "Solar + Wind + BESS integration", icon: <Battery className="w-8 h-8" /> },
              { title: "C&I (Commercial)", desc: "Captive power plants for heavy industry (Steel, Cement)", icon: <Factory className="w-8 h-8" /> }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1} className="h-full">
                <div className="group relative p-10 bg-slate-50 border border-slate-200 rounded-[2rem] hover:bg-slate-900 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/0 to-primary/10 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150 to-primary/20"></div>

                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md text-primary group-hover:scale-110 transition-all duration-500 relative z-10 shrink-0 border border-slate-100">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300 relative z-10">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 relative z-10 flex-grow">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA (Dark) */}
      <section className="py-20 bg-slate-950 text-center border-t border-white/5 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Execute?</h2>
            <p className="text-gray-400 mb-8 text-lg">Get a quote for Panels, SCADA, or Turnkey E&I.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

// Helper for Panel List Item
function PanelItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-white shadow-sm transition-all duration-300">
      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  );
}
