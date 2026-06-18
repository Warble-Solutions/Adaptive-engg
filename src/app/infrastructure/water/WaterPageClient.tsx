"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Droplets, Activity, CheckCircle2, ShieldCheck, Settings, LineChart, Cpu, Anchor, Wifi, RefreshCw } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

interface LogMessage {
  id: number;
  time: string;
  source: string;
  msg: string;
  type: "info" | "success" | "warn";
}

export default function WaterPageClient() {
  // Telemetry Simulation States
  const [mldFlow, setMldFlow] = useState(242.4);
  const [turbidity, setTurbidity] = useState(1.22);
  const [activePumps, setActivePumps] = useState(14);
  const [logs, setLogs] = useState<LogMessage[]>([
    { id: 1, time: "11:42:15", source: "WTP INTAKE", msg: "Raw water pumps operating at nominal 92.4Hz speed.", type: "success" },
    { id: 2, time: "11:43:02", source: "SPS-04 SYSTEM", msg: "Wet well level at 2.45m; float switches check complete.", type: "info" },
    { id: 3, time: "11:44:19", source: "COMPLIANCE", msg: "PH transmitter calibrated; reading stable at 7.15 pH.", type: "success" },
    { id: 4, time: "11:45:00", source: "TELEMETRY", msg: "LoRa edge gateway handshakes verified; signal RSSI: -68dBm.", type: "info" }
  ]);

  // Periodic updates simulating SCADA polling
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate Flow Rate slightly
      setMldFlow(prev => {
        const change = (Math.random() - 0.5) * 1.2;
        return parseFloat((prev + change).toFixed(1));
      });

      // Fluctuate Turbidity
      setTurbidity(prev => {
        const change = (Math.random() - 0.5) * 0.08;
        const next = prev + change;
        return parseFloat((next < 0.5 ? 0.5 : next > 2.5 ? 2.5 : next).toFixed(2));
      });

      // Randomly change pump state or log something
      const rand = Math.random();
      if (rand > 0.7) {
        // Toggle active pumps
        setActivePumps(prev => (prev === 14 ? 15 : 14));
      }

      // Add a fresh simulated log
      if (rand > 0.6) {
        const logSources = ["WTP BACKWASH", "SPS-09 COMPRESSOR", "DISTRIBUTION VALVE #3", "CHLORINE DOSING", "SLDC MONITORING"];
        const logMsgs = [
          "Differential pressure across Sand Filter B cleared.",
          "Automatic level controller dispatched Start signal to Pump 2.",
          "Actuator torque limit setpoint confirmed at 94%.",
          "Dosing speed optimized according to flow loop calculations.",
          "Heartbeat packet acknowledged by Municipal server."
        ];
        const logTypes: ("info" | "success" | "warn")[] = ["info", "success", "warn"];
        
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        const sourceIndex = Math.floor(Math.random() * logSources.length);
        const msgIndex = Math.floor(Math.random() * logMsgs.length);
        const typeIndex = Math.floor(Math.random() * logTypes.length);

        setLogs(prev => [
          {
            id: Date.now(),
            time: timeStr,
            source: logSources[sourceIndex],
            msg: logMsgs[msgIndex],
            type: logTypes[typeIndex]
          },
          ...prev.slice(0, 4) // keep last 5
        ]);
      }

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-950">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/water/hero-water-main.png" alt="Water Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
              <Droplets className="w-4 h-4" />
              <span>Infrastructure Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Water <span className="gradient-heading">Solutions</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Drinking water supply in urban and rural areas is essential for a country as big and as diverse as India. With {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} of experience, we provide end-to-end E&I & SCADA solutions.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* OVERVIEW STATS */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Our Expertise</h2>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { val: WATER_STATS.yearsExperience.value, suffix: WATER_STATS.yearsExperience.suffix, label: WATER_STATS.yearsExperience.label },
              { val: WATER_STATS.mldTreatedWater.value, suffix: WATER_STATS.mldTreatedWater.suffix, label: WATER_STATS.mldTreatedWater.label },
              { val: WATER_STATS.supplySchemes.value, suffix: WATER_STATS.supplySchemes.suffix, label: WATER_STATS.supplySchemes.label },
              { val: "1,500", suffix: WATER_STATS.overheadTanks.suffix, label: WATER_STATS.overheadTanks.label }
            ].map((stat, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center h-full shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-5xl font-black text-slate-900 mb-2">{stat.val}<span className="text-teal-500">{stat.suffix}</span></div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE WATER NOC TELEMETRY SIMULATOR */}
      <section className="py-24 bg-slate-950 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase text-sm tracking-widest mb-2 block">Live Operations Console</span>
              <h2 className="text-4xl font-bold font-heading">Water Infrastructure Telemetry SCADA NOC</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                Simulated real-time status feed monitoring municipal pump operations, chemical dosers, and water flow parameters across regional hubs.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Flow & Dials SCADA mockup */}
            <div className="lg:col-span-8">
              <SectionWrapper className="h-full">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-mono text-xs font-bold text-slate-300">SCADA PORTAL STREAM // NODES_ONLINE</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-primary" />
                      <span>POLLING RATE: 3000ms</span>
                    </div>
                  </div>

                  {/* Main stats layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Stat 1: MLD Flow */}
                    <div className="p-6 bg-slate-950 border border-slate-800/80 rounded-2xl flex flex-col justify-between group">
                      <div>
                        <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-2">Live Flow Rate</div>
                        <div className="text-3xl font-black text-white font-mono flex items-baseline gap-0">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={mldFlow}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {mldFlow}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-xs text-primary font-bold">MLD</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-emerald-400" />
                        <span>System Load: Nominal</span>
                      </div>
                    </div>

                    {/* Stat 2: Turbidity NTU */}
                    <div className="p-6 bg-slate-950 border border-slate-800/80 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-2">Water Turbidity</div>
                        <div className="text-3xl font-black text-white font-mono flex items-baseline gap-0">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={turbidity}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {turbidity}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-xs text-primary font-bold">NTU</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Quality: Clean (&lt; 5.0)</span>
                      </div>
                    </div>

                    {/* Stat 3: Lift Pumps */}
                    <div className="p-6 bg-slate-950 border border-slate-800/80 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-2">Lift-Pumps Active</div>
                        <div className="text-3xl font-black text-white font-mono flex items-baseline gap-1">
                          <span>{activePumps}</span>
                          <span className="text-xs text-slate-500 font-bold">/ 15</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-[#0da08a] font-mono flex items-center gap-1.5">
                        <Wifi className="w-3 h-3 text-[#0da08a]" />
                        <span>Pumps telemetry OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual wave diagram simulation */}
                  <div className="p-6 bg-slate-950 border border-slate-800/80 rounded-2xl flex-grow flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono text-slate-400">POI LOOP HARMONY CHART</span>
                      <span className="text-[10px] font-mono text-slate-500">FREQUENCY: 50.02Hz</span>
                    </div>
                    <div className="h-40 w-full flex items-end gap-1.5 overflow-hidden">
                      {Array.from({ length: 24 }).map((_, i) => {
                        const heights = [30, 45, 55, 40, 65, 80, 75, 50, 60, 45, 35, 50, 70, 85, 90, 60, 45, 55, 68, 72, 85, 50, 40, 30];
                        return (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-sm"
                            style={{ height: `${heights[i]}%` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Live compliant ticker events */}
            <div className="lg:col-span-4">
              <SectionWrapper delay={0.2} className="h-full">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Compliance Event Log</h3>
                    <p className="text-slate-500 text-xs mb-6 font-medium">Real-time edge device messages verified by state automation networks.</p>

                    <div className="space-y-4">
                      <AnimatePresence initial={false}>
                        {logs.map((log) => (
                          <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: 20, height: 0 }}
                            animate={{ opacity: 1, x: 0, height: "auto" }}
                            exit={{ opacity: 0, x: -20, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl flex flex-col gap-1.5"
                          >
                            <div className="flex items-center justify-between font-mono text-[9px]">
                              <span className="text-primary font-bold">[{log.time}] {log.source}</span>
                              <span className={`px-1.5 py-0.5 rounded uppercase font-extrabold ${
                                log.type === "success" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" :
                                log.type === "warn" ? "bg-amber-500/15 text-amber-400 border border-amber-500/20" :
                                "bg-slate-800 text-slate-300 border border-slate-700"
                              }`}>{log.type}</span>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed font-mono">{log.msg}</p>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800 flex justify-center">
                    <Link href="/contact" className="w-full text-center py-3 bg-[#0da08a]/20 hover:bg-[#0da08a] text-primary hover:text-white border border-[#0da08a]/40 hover:border-transparent rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300">
                      Request Full SCADA Access
                    </Link>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS BENTO GRID (Premium Asymmetrical Light Bento Grid Overhaul) */}
      <section className="py-28 bg-slate-50 text-slate-900 relative z-20 border-t border-b border-slate-200">
        {/* Subtle background ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="mb-20 text-center md:text-left">
              <span className="text-primary font-bold uppercase text-xs tracking-[0.25em] mb-3 block">OUR SOLUTIONS</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">End-to-End</span> Delivery
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mt-6 hidden md:block"></div>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Water Supply & WTP (Spans 2 columns) */}
            <SectionWrapper delay={0.1} className="md:col-span-2">
              <Link href="/infrastructure/water/wtp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative shadow-sm hover:-translate-y-1">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                        <Droplets className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 font-heading group-hover:text-primary transition-colors">Water Supply & WTP</h3>
                        <span className="text-xs text-slate-500 font-mono">CORE SYSTEM INTEGRATION</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">Intake Pumps</span>
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">Filter Beds</span>
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">Distribution</span>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 max-w-xl text-base">
                    Complete turn-key Electrical & Instrumentation solutions designed to handle raw water intake, sand filtering beds, chemical dosing pumps, and urban distribution piping systems.
                  </p>

                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                    Explore WTP Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            {/* 2. Sewage Treatment (STP) - 1 Column */}
            <SectionWrapper delay={0.2}>
              <Link href="/infrastructure/water/stp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between shadow-sm hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  <div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <Activity className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary transition-colors">Sewage Treatment (STP)</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      Electrical, Instrumentation and Automation Solutions tailored for the complex demands of modern municipal Waste Water recycling plants.
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:underline">
                    Explore STP Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            {/* 3. Effluent Treatment (ETP) - 1 Column */}
            <SectionWrapper delay={0.3}>
              <Link href="/infrastructure/water/etp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between shadow-sm hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  <div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <Settings className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary transition-colors">Effluent Treatment (ETP)</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      Optimized process control and SCADA architecture for heavy industrial effluent treatment incorporating advanced MBR and RO membranes.
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:underline">
                    Explore ETP Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            {/* 4. Lift Irrigation - 1 Column */}
            <SectionWrapper delay={0.4}>
              <Link href="/infrastructure/water/lift-irrigation" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between shadow-sm hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  <div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <LineChart className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary transition-colors">Lift Irrigation</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      Complete E&I engineering packages for rural pump houses, optimized for power factor correction, motor soft-starters, and safe grid load shifts.
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:underline">
                    Explore Pump Systems <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            {/* 5. Micro Irrigation - 1 Column */}
            <SectionWrapper delay={0.5}>
              <Link href="/infrastructure/water/micro-irrigation" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between shadow-sm hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  <div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <Anchor className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary transition-colors">Micro Irrigation</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      Intelligent Outlet Management Systems (OMS) integrating solar power and low-power telemetry to coordinate field valve automation.
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:underline">
                    Explore Micro Systems <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            {/* 6. Centralized SCADA (Spans 2 columns) */}
            <SectionWrapper delay={0.6} className="md:col-span-2">
              <Link href="/infrastructure/water/centralized-scada" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative shadow-sm hover:-translate-y-1">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.08] transition-colors duration-500"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                        <Cpu className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 font-heading group-hover:text-primary transition-colors">Centralized SCADA Portal</h3>
                        <span className="text-xs text-slate-500 font-mono">ENTERPRISE TELEMETRY ENGINE</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">Data Mining</span>
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">HMI Interface</span>
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-[10px] text-slate-600 font-mono">Predictive Analytics</span>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 max-w-xl text-base">
                    State-of-the-art municipal control core aggregating telemetry data, providing localized HMI readouts, managing automated dosing triggers, and logging compliance analytics across the network.
                  </p>

                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                    Explore SCADA Platform <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Secure Your Water Infrastructure</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with recognized experts for scalable, reliable E&I integration.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
