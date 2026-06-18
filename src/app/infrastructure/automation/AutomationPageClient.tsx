"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Zap, Target, ShieldCheck, Settings, CheckCircle2, 
  Factory, MonitorSmartphone, Server, Droplet, Wind, CircleDollarSign, 
  TrendingUp, Sun, ChevronRight, Play, Database, Sliders, LayoutTemplate
} from "lucide-react";
import { AUTOMATION_STATS } from "@/lib/constants";

export default function AutomationPageClient() {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  const solutions = [
    {
      title: "RTU / PLC System",
      icon: <Settings className="w-8 h-8" />,
      desc: "Robust industrial logic controllers configured in redundant hot-standby architectures for critical process loops.",
      specs: [
        { label: "Redundant Config", value: "Hot-Standby Dual CPUs" },
        { label: "PLC Brands", value: "Siemens S7-1500 / Modicon M580 / Allen-Bradley" },
        { label: "Program Standard", value: "IEC 61131-3 (LD, FBD, ST, SFC)" },
        { label: "Scan Time Delay", value: "<12ms loop execution" },
        { label: "Digital/Analog Max", value: "Up to 10,000+ local & remote I/O points" }
      ],
      simMetric: "CPU Status Logs",
      simValue: "ACTIVE",
      simCode: "CPU_A: RUN [ACTIVE] | CPU_B: STANDBY [READY]\nRing network speed: 100 Mbps (MRP protocol OK)"
    },
    {
      title: "SCADA System",
      icon: <Server className="w-8 h-8" />,
      desc: "Centralized plant visualization platforms collecting telemetry databases to optimize production and coordinate controls.",
      specs: [
        { label: "SCADA Engines", value: "Schneider System Platform / WinCC / Ignition" },
        { label: "Database Type", value: "Redundant Historian SQL Server" },
        { label: "HMI Screen Resolution", value: "Full HD Vector Graphics (SVG-based)" },
        { label: "Alarm Management", value: "ISA 18.2 compliant hierarchy" },
        { label: "Client Access", value: "HTML5 Web client / Mobile dashboard" }
      ],
      simMetric: "Active Telemetry Tags",
      simValue: "12,850 OK",
      simCode: "Historian SQL Connection: CONNECTED\nActive alarms: 0 | Event logging: ACTIVE"
    },
    {
      title: "Soft Starters & VFDs",
      icon: <Zap className="w-8 h-8" />,
      desc: "Variable Frequency Drives and soft starters with active harmonic filters to save motor energy and limit current spikes.",
      specs: [
        { label: "Drive Voltage Range", value: "415V LT to 11kV HT drives" },
        { label: "Energy Efficiency", value: "Up to 45% utility cost reduction" },
        { label: "Harmonic Mitigation", value: "Active Harmonic Filter (AHF) < 5% THDi" },
        { label: "Control Protocol", value: "Modbus TCP / EtherNet/IP / Profinet" },
        { label: "IP Protection Rating", value: "IP54 / IP55 custom drive panels" }
      ],
      simMetric: "VFD Energy Savings",
      simValue: "44.5 %",
      simCode: "Motor speed: 1480 RPM | Current draw: 142A\nHarmonics filtered: THDi down to 2.8%"
    },
    {
      title: "HMIs",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      desc: "Industrial multi-touch display terminals installed on panel doors for local monitoring and parameter editing.",
      specs: [
        { label: "Screen Sizes", value: "7\" / 12\" / 15\" / 19\" widescreen" },
        { label: "Touch Type", value: "PCAP Multitouch glass front" },
        { label: "Protection Index", value: "IP65 dust/waterproof front face panel" },
        { label: "Storage Capacity", value: "Solid state flash memory storage" },
        { label: "Audit Trails", value: "FDA 21 CFR Part 11 compliant logs" }
      ],
      simMetric: "HMI Enclosure Temp",
      simValue: "34.5°C",
      simCode: "Operator logged: ADMIN_LEVEL_3\nTouch calibration: OK | Screen backlight: 80%"
    },
    {
      title: "Automation Panels",
      icon: <Factory className="w-8 h-8" />,
      desc: "Control desks and Remote I/O panels designed, wired, and factory-tested (FAT) in our ISO 9001 facility.",
      specs: [
        { label: "Enclosure Brands", value: "Rittal / AEPL Custom Modular" },
        { label: "Wiring Identification", value: "Computerized sleeve ferrule markers" },
        { label: "Surge Protection", value: "Type 2 surge arrester loops fitted" },
        { label: "Factory Testing", value: "100% loop check & continuity FAT logs" },
        { label: "Paint Finish", value: "Epoxy polyester powder coating RAL 7035" }
      ],
      simMetric: "Control Loop Check",
      simValue: "100% PASS",
      simCode: "Continuity check: COMPLETE\nFAT report generated & barcoded for site delivery"
    },
    {
      title: "Central Monitoring System",
      icon: <Target className="w-8 h-8" />,
      desc: "Unified command rooms aggregating telemetry streams from remote RTU locations via fiber or cellular bands.",
      specs: [
        { label: "Remote Telemetry", value: "Integrated 4G/5G Cellular or VSAT" },
        { label: "Protocol Support", value: "DNP3 / IEC 60870-5-104 / MQTT" },
        { label: "GPS Time Sync", value: "NTP server coordinate alignment" },
        { label: "Site Diagnostics", value: "Continuous remote ping health monitor" },
        { label: "Redundancy Loop", value: "Dual gateway automatic failover routing" }
      ],
      simMetric: "Linked Remote Sites",
      simValue: "32 ONLINE",
      simCode: "Irrigation pumps: 12 OK | Water plants: 8 OK\nSolar telemetry: 12 OK | Zero connectivity dropouts"
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">

      {/* 1. HERO (Dark Immersive with Stats) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#072120] to-slate-950">
          {/* Background image & scrims */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10"></div>
          {/* Tech lines */}
          <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[140px] z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px] z-10"></div>
        </div>

        <div className="z-25 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Factory className="w-4 h-4" />
                  <span>Industry 4.0 Systems Integration</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Industrial<br />
                  <span className="gradient-heading">Automation</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Empowering smart manufacturing and process optimization with redundant PLC logic, WinCC/Ignition SCADA, and IoT telemetries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Consult Automation Engineers <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#solutions-switchboard" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Explore Solutions
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Stats grid */}
            <SectionWrapper delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">
                    {AUTOMATION_STATS.scadaInstalled.value}
                    <span className="text-primary">{AUTOMATION_STATS.scadaInstalled.suffix}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">SCADA Systems Installed</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tight">
                    {AUTOMATION_STATS.yearsExperience.value}
                    <span className="text-primary">{AUTOMATION_STATS.yearsExperience.suffix}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Years of core experience</span>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-primary/10 to-teal-500/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Schneider Authorized</div>
                    <span className="text-xs text-gray-300">Global System Integrator status verified</span>
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

      {/* 2. SOLUTIONS (Interactive Switchboard Dashboard) */}
      <section id="solutions-switchboard" className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Core Competency</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Our Solutions</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Explore our engineering solutions spanning redundant PLC logic controllers, SCADA Historians, VFD drives, and central telemetry controllers.
              </p>
            </SectionWrapper>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left list of 6 buttons */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              {solutions.map((item, idx) => {
                const isActive = activeSolution === idx;
                return (
                  <SectionWrapper key={idx} delay={idx * 0.05}>
                    <button
                      onClick={() => setActiveSolution(idx)}
                      onMouseEnter={() => setActiveSolution(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 cursor-pointer select-none ${
                        isActive
                          ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 translate-x-1"
                          : "bg-slate-50 border-slate-200/50 hover:bg-slate-100 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-5 bottom-5 w-1 bg-primary rounded-r-md"></div>
                      )}
                      <div className={`p-2.5 rounded-lg shrink-0 transition-transform ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white text-slate-400 border border-slate-200"
                      }`}>
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                        <p className={`text-[11px] leading-relaxed line-clamp-1 ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  </SectionWrapper>
                );
              })}
            </div>

            {/* Right Diagnostic Console Screen */}
            <div className="w-full lg:w-7/12 flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full h-full bg-slate-950 text-white border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px] font-mono">
                  {/* Neon screen overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] text-gray-500">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-slate-300">AEPL DIAGNOSTIC CORE v4.1</span>
                      </div>
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        <span>LOOP_MONITOR_ON</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-6 py-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                        <div>
                          <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">Configuration Profile</span>
                          <h4 className="text-base font-bold text-white mb-2 leading-tight font-heading">
                            {solutions[activeSolution].title} System
                          </h4>
                          <p className="text-[11px] text-gray-400 leading-relaxed font-sans max-w-sm">
                            {solutions[activeSolution].desc}
                          </p>
                        </div>
                        
                        <div className="shrink-0 text-center">
                          <div className="px-4 py-2 border border-primary/30 bg-primary/15 rounded-xl font-black text-xs text-primary min-w-[120px]">
                            {solutions[activeSolution].simValue}
                          </div>
                          <span className="text-[9px] text-gray-500 mt-1 font-bold uppercase block">{solutions[activeSolution].simMetric}</span>
                        </div>
                      </div>

                      {/* Tech Sheet Table & Logs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/30 p-4 rounded-xl border border-white/5">
                          <span className="text-[9px] text-gray-500 font-bold uppercase block mb-3">System Specifications</span>
                          <div className="divide-y divide-white/10 text-[10px]">
                            {solutions[activeSolution].specs.slice(0, 3).map((spec, sIdx) => (
                              <div key={sIdx} className="py-2 flex justify-between">
                                <span className="text-gray-400">{spec.label}</span>
                                <span className="text-white font-bold">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-900/30 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                          <span className="text-[9px] text-gray-500 font-bold uppercase block mb-1">Live Loop Log Output</span>
                          <div className="text-[9px] text-slate-400 bg-slate-950 p-2.5 rounded border border-white/5 leading-normal whitespace-pre-wrap">
                            {solutions[activeSolution].simCode}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-[9px] text-gray-500">
                      <span>IEC 61131 PROGRAM COMPLIANT</span>
                      <span className="text-slate-400 font-bold">READY</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE VERTICALS (Sleek card grid) */}
      <section className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Domain Integrations</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Vertical Industry Expertise</h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                We design and commission advanced control logic across four major utility sectors.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Sun className="w-8 h-8 text-primary" />, title: "Renewable Energy", desc: "Solar plant RTU controllers, telemetry, and central monitoring systems (CMS)." },
              { icon: <Droplet className="w-8 h-8 text-primary" />, title: "Water Treatment", desc: "Lift irrigation systems, pumping stations, ETP, STP, and WTP closed-loop PLCs." },
              { icon: <LayoutTemplate className="w-8 h-8 text-primary" />, title: "Infrastructure", desc: "Tunnel safety ventilation, portal glare lighting control, and redundant UPS substations." },
              { icon: <Factory className="w-8 h-8 text-primary" />, title: "Manufacturing", desc: "Automated production line controls, shop-floor machine intelligence, and OEE telemetry." },
              { icon: <Wind className="w-8 h-8 text-primary" />, title: "City Gas Distribution", desc: "Telemetry systems, custody transfer flow meters, and control desks." }
            ].map((vertical, vIdx) => (
              <SectionWrapper key={vIdx} delay={vIdx * 0.05}>
                <div className="p-8 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 hover:shadow-xl rounded-2xl transition-all duration-300 group h-full flex flex-col justify-between items-start">
                  <div>
                    <div className="mb-6 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {vertical.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3 font-heading leading-tight text-white">{vertical.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-white transition-colors">{vertical.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS & VALUE (Split layout checklist) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-100 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left - Process Benefits */}
            <SectionWrapper>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 h-full">
                <h3 className="text-3xl font-bold font-heading mb-8 text-slate-900">Process Optimization Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { text: "Enhanced Safety", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
                    { text: "Reduced Operating Cost", icon: <CircleDollarSign className="w-5 h-5 text-primary" /> },
                    { text: "Increased Productivity", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
                    { text: "Better Energy Efficiency", icon: <Zap className="w-5 h-5 text-primary" /> },
                    { text: "Systemic Reliability", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
                    { text: "Reduced Maintenance", icon: <Settings className="w-5 h-5 text-primary" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm">
                      <div className="shrink-0">{item.icon}</div>
                      <span className="text-xs font-bold text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Right - AEPL Value */}
            <SectionWrapper delay={0.2}>
              <div className="bg-gradient-to-br from-teal-50/50 to-white p-10 rounded-[2.5rem] border border-teal-100 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold font-heading mb-8 text-slate-900">Value Creation</h3>
                  
                  <div className="space-y-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                      <p className="leading-relaxed">
                        <strong>Schneider Electric System Integrators:</strong> Globally certified partner status ensuring up-to-date hardware and logic configurations.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                      <p className="leading-relaxed">
                        <strong>TUV Nord QMS Certification:</strong> ISO 9001:2015 accredited design, software engineering, and panel fabrication QA/QC loops.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                      <p className="leading-relaxed">
                        <strong>End-to-End Competency:</strong> Dedicated project managers coordinate layout drawing reviews, logic code simulation FAT logs, and hot-commissioning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                  AEPL INTEGRATION STANDARDS
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Ready to Optimize Your Process Loops?</h2>
            <p className="text-slate-500 mb-8 text-base leading-relaxed">
              Consult with AEPL's system integration engineers to compile control logic designs or plan SCADA migrations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-lg shadow-teal-500/20">
              Request Telemetry Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
