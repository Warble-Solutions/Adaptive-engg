"use client";

import { useState, Fragment } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Share2, Lightbulb, Clock, CheckCircle2, Fan, Settings, Shield, Bell, Layers, FileText, Users, Server, Radio, Wind, TrendingUp } from "lucide-react";
import { COMPANY_STATS, TUNNEL_STATS } from "@/lib/constants";
import { TunnelSCADADashboard } from "@/components/DashboardMockups";

export default function TunnelPageClient() {
  const [activeTab, setActiveTab] = useState<"ventilation" | "lighting" | "power" | "safety">("ventilation");
  const [activePillar, setActivePillar] = useState<number>(0);
  const [fanSpeed, setFanSpeed] = useState(65);
  const [lightMode, setLightMode] = useState<"day" | "dusk" | "night">("day");
  const [activePowerSource, setActivePowerSource] = useState<"grid1" | "grid2" | "ups">("grid1");
  const [alarmActive, setAlarmActive] = useState(false);

  const stats = [
    { val: "17", suf: "+", label: "Years of Experience" },
    { val: "2.5", suf: " Km", label: "Twin Tube Road Tunnel" },
    { val: "1,000", suf: " KVA", label: "Transformer with HT Sub Station Installation" },
    { val: "1,500", suf: "+", label: "LED Lights Installed" },
    { val: "15", suf: "+", label: "Remote I/O Panels Installed in Tunnel" },
  ];

  const specTabs = [
    {
      id: "ventilation" as const,
      label: "Ventilation",
      icon: <Fan className="w-5 h-5" />,
      title: "Intelligent Tunnel Ventilation Systems",
      desc: "Closed-loop jet fan automation designed to optimize air quality and smoke extraction.",
      items: [
        { label: "CO & NO2 Sensors", desc: "Electrochemical sensors measure toxic emission concentrations continuously." },
        { label: "Visibility Index (VI)", desc: "Optical sensors determine dust and smoke haze density to adjust jet fans." },
        { label: "PI Adaptive Control", desc: "Algorithm adjusts Jet Fan RPMs dynamically, reducing energy usage by up to 45%." },
        { label: "Emergency Smoke Purge", desc: "Automated routines reverse/activate fans to force smoke out of the nearest portal." }
      ]
    },
    {
      id: "lighting" as const,
      label: "Adaptive Lighting",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "CIE-Compliant Adaptive Lighting Control",
      desc: "Portal luminance matches internal visibility grids to prevent 'black hole' entry illusions.",
      items: [
        { label: "L20 Portal Photometers", desc: "Measures exterior glare to scale entry-zone illumination dynamically." },
        { label: "CIE Zone Adjustment", desc: "Threshold, Transition, Interior, and Exit zones dim or boost separately." },
        { label: "High-Efficiency LEDs", desc: "Industrial-grade LED light fixtures designed to withstand tunnel hum and moisture." },
        { label: "Night Dimming Profiles", desc: "Fades lighting output down to 10% during quiet off-peak hours to slash utility bills." }
      ]
    },
    {
      id: "power" as const,
      label: "Substation & UPS",
      icon: <Zap className="w-5 h-5" />,
      title: "Redundant Power Substation Architecture",
      desc: "Dual-grid failover switchgear engineered to keep critical safety grids running 24/7.",
      items: [
        { label: "HT/LT Switchgear panels", desc: "Vacuum Circuit Breakers (VCB) up to 33kV with motor-operated racking." },
        { label: "Dry-Type Transformers", desc: "Cast-resin transformers designed to mitigate fire risks inside structural substations." },
        { label: "0ms UPS Backup Banks", desc: "Industrial online double-conversion UPS systems for SCADA and emergency lighting." },
        { label: "Auto-Start DG Sets", desc: "High-power diesel generators with Auto Mains Failure (AMF) control panels." }
      ]
    },
    {
      id: "safety" as const,
      label: "Fire & Safety",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Multi-Hazard Life Safety Systems",
      desc: "Early heat detection, quick suppression routing, and clear evacuation broadcasts.",
      items: [
        { label: "Fiber-Optic LHD", desc: "Linear Heat Detection cables identify temperature spikes to within 1 meter." },
        { label: "Evacuation VMS & SOS", desc: "Digital message panels and SOS boxes direct motorists safely out during emergencies." },
        { label: "Public Address Broadcast", desc: "Intelligible horn speaker grids mapping acoustic zones for emergency alerts." },
        { label: "Substation Deluge Setup", desc: "Automatic water deluge/sprinkler valves connected directly to early fire indicators." }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. CINEMATIC HERO (Dark, split) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#061818] to-slate-950">
          {/* Grid lines overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Infrastructure Systems</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Tunnel<br />
                  <span className="gradient-heading">Solutions</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Complete turn-key Electrical, Instrumentation, and SCADA automation solutions for Road, Railway, and Metro Tunnels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Consult an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#technical-specs" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Explore Specifications
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Right - Interactive SCADA Mockup */}
            <SectionWrapper delay={0.3}>
              <div className="h-[440px] hidden lg:block relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative h-full">
                  <TunnelSCADADashboard />
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* 2. STATS STRIP (Light transition) */}
      <section className="py-16 bg-white rounded-t-[40px] relative z-20 -mt-10 border-t border-slate-100 shadow-[0_-15px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:divide-x divide-slate-100">
            {stats.map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="text-center md:px-4">
                  <div className="text-4xl font-black text-slate-900 mb-1 tracking-tight">
                    {stat.val}<span className="text-primary">{stat.suf}</span>
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-snug">{stat.label}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE / PREFERRED PROJECT PARTNER SECTION */}
      <section className="py-24 bg-white relative z-20 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <SectionWrapper>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10"></div>
                <img 
                  src="/imgs/tunnel/tunnel_hero.png" 
                  alt="Tunnel Automation and Electrical Solutions" 
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg backdrop-blur-md bg-opacity-90">
                    Road, Rail & Metro Tunnels
                  </span>
                </div>
              </div>
            </SectionWrapper>

            {/* Right - Text Content */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Our Expertise</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-heading tracking-tight leading-tight">
                  Preferred Project Partner in <span className="gradient-heading">Turn-Key Projects</span>
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                  We at Adaptive Engineering Pvt Ltd. are experts in providing Electrical, Instrumentation and Automation Solutions for Tunnels – Road, Railway and Metro.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  With the rising awareness on road and rail safety, the government is modernizing road and railway tunnels. Additionally, numerous railway lines and highways pass through tunnels in mountain ranges, which creates a high demand for tunnel electrical & automation systems.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-primary mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Empowering Turn-Key Excellence</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our 17+ years of experience, a complete solutions portfolio of Electrical and Automation solutions and the best of the project management skills empowered us a <strong className="text-slate-950 font-bold">“Preferred Project Partner”</strong> in Turn-Key Projects for EPCs.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>



      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white relative z-20 border-t border-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-heading mb-4 tracking-tight">
                Key Benefits of <span className="gradient-heading">Smart Tunnel Automation</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Our advanced E&I solutions optimize power, ensure clean air, and provide intelligent automated responses to critical safety incidents.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Reduce Energy Consumption and Carbon Footprint",
                desc: "Intelligent control algorithms adjust jet fan speed and light levels dynamically based on actual demand, slashing utility bills and carbon footprint."
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Adaptive Tunnel Lighting",
                desc: "Matches tunnel entrance illumination with external ambient sunlight to prevent visual shock (black-hole effect) and ensure safe motorist entry."
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: "Efficient Traffic Management",
                desc: "Integrates loop detectors, overheight detectors, and variable message signs (VMS) to regulate vehicle flow and avoid congestion inside tubes."
              },
              {
                icon: <Fan className="w-5 h-5" />,
                title: "Healthy Tunnel Environment",
                desc: "Closed-loop feedback from CO, NO2, and visibility sensors triggers jet fans to maintain clean, fresh air, keeping pollutants below permissible levels."
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Ensure Safety and Minimize Hazardous Events",
                desc: "Linear Heat Detection (LHD) cables and CCTV cameras monitor operations to detect accidents, breakdowns, or thermal issues instantly."
              },
              {
                icon: <Bell className="w-5 h-5" />,
                title: "Manage Emergency Conditions",
                desc: "Automated emergency SCADA modes coordinate ventilation smoke purge, PA system alerts, and escape lighting to guide quick evacuations."
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

      {/* 4. DYNAMIC SYSTEM SPECIFICATIONS (Interactive tabs & simulators) */}
      <section id="technical-specs" className="py-24 bg-white relative z-20 border-t border-slate-100 scroll-mt-20 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Inside the System</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Technical System Specifications</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Explore the detailed engineering components that compose AEPL's turn-key road and railway tunnel solutions.</p>
            </SectionWrapper>
          </div>

          <div className="flex flex-col gap-10">
            {/* Top - Tab selector */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {specTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-center text-sm transition-all w-full ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg shadow-teal-500/20 scale-[1.02]"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Middle & Right - Interactive Simulator & Specs */}
            <div className="w-full flex flex-col xl:flex-row gap-8 items-stretch">
              {specTabs.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <Fragment key={tab.id}>
                    {/* Interactive Simulator Card (Left Panel) */}
                    <SectionWrapper className="w-full xl:w-1/2 flex" delay={0.1}>
                      <div className="w-full bg-slate-950 text-white rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col justify-between select-none">
                        <div className="border-b border-white/5 pb-3 mb-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                            SYSTEM SIMULATOR
                          </span>
                          <span>{tab.label.toUpperCase()}</span>
                        </div>

                        {/* Ventilation Simulator */}
                        {tab.id === "ventilation" && (
                          <div className="flex-grow flex flex-col justify-between py-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-slate-400">Jet Fan Speed Regulator</span>
                              <span className="text-sm font-bold text-teal-400 font-mono">{fanSpeed}% RPM</span>
                            </div>

                            {/* Rotating Fan Animation */}
                            <div className="flex justify-center my-6">
                              <div 
                                className="w-20 h-20 rounded-full border-4 border-slate-800 flex items-center justify-center relative overflow-hidden transition-all duration-300"
                                style={{ transform: `rotate(${fanSpeed * 4}deg)` }}
                              >
                                <div className="absolute w-1 h-16 bg-slate-500 rounded"></div>
                                <div className="absolute w-16 h-1 bg-slate-500 rounded"></div>
                                <div className="w-4 h-4 bg-teal-400 rounded-full z-10 shadow-lg shadow-teal-500/50"></div>
                              </div>
                            </div>

                            {/* Live Stats */}
                            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono bg-slate-900/60 p-3 rounded-xl border border-white/5">
                              <div>
                                <span className="text-slate-500 block">Carbon Monoxide (CO)</span>
                                <span className={`font-bold ${Math.max(10, Math.floor(100 - fanSpeed * 1.1)) > 50 ? 'text-amber-400' : 'text-teal-400'}`}>
                                  {Math.max(10, Math.floor(100 - fanSpeed * 1.1))} ppm
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-500 block">Energy Efficiency</span>
                                <span className="text-teal-400 font-bold">+{Math.max(0, Math.floor(45 - (fanSpeed - 50) * 0.5))}% saved</span>
                              </div>
                            </div>

                            <input 
                              type="range" 
                              min="20" 
                              max="100" 
                              value={fanSpeed}
                              onChange={(e) => setFanSpeed(Number(e.target.value))}
                              className="w-full accent-primary mt-4 cursor-pointer" 
                            />
                          </div>
                        )}

                        {/* Lighting Simulator */}
                        {tab.id === "lighting" && (
                          <div className="flex-grow flex flex-col justify-between py-2">
                            <span className="text-xs text-slate-400 mb-2">Exterior-to-Interior CIE Lux Curve</span>

                            {/* Lux bars */}
                            <div className="space-y-3 my-4">
                              {[
                                { zone: "Threshold (Portal)", max: 12000, day: 100, dusk: 50, night: 10 },
                                { zone: "Transition Zone", max: 4000, day: 45, dusk: 25, night: 10 },
                                { zone: "Tunnel Interior", max: 800, day: 10, dusk: 10, night: 10 },
                              ].map((bar, bIdx) => {
                                const level = lightMode === "day" ? bar.day : lightMode === "dusk" ? bar.dusk : bar.night;
                                return (
                                  <div key={bIdx} className="space-y-1">
                                    <div className="flex justify-between text-[9px] font-mono">
                                      <span className="text-slate-400">{bar.zone}</span>
                                      <span className="text-teal-400 font-bold">{Math.round(bar.max * (level / 100))} Lux</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                                      <div 
                                        className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-500"
                                        style={{ width: `${level}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Mode Selectors */}
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {(["day", "dusk", "night"] as const).map((mode) => (
                                <button
                                  key={mode}
                                  onClick={() => setLightMode(mode)}
                                  className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase transition-all ${
                                    lightMode === mode
                                      ? "bg-teal-500 text-slate-950 font-extrabold shadow-md shadow-teal-500/20"
                                      : "bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10"
                                  }`}
                                >
                                  {mode} Profile
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Power Simulator */}
                        {tab.id === "power" && (
                          <div className="flex-grow flex flex-col justify-between py-2">
                            <span className="text-xs text-slate-400">Main Substation Feeder Line</span>

                            <div className="my-4 space-y-3 text-[10px] font-mono">
                              <div className="flex items-center justify-between p-2.5 bg-slate-900 border border-white/5 rounded-xl">
                                <span className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${activePowerSource === "grid1" ? "bg-teal-400 animate-pulse" : "bg-slate-600"}`}></span>
                                  GRID FEED 1 (33kV Primary)
                                </span>
                                <span className={`font-bold ${activePowerSource === "grid1" ? "text-teal-400" : "text-slate-500"}`}>
                                  {activePowerSource === "grid1" ? "CLOSED (ACTIVE)" : "OPEN (STBY)"}
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-slate-900 border border-white/5 rounded-xl">
                                <span className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${activePowerSource === "grid2" ? "bg-teal-400 animate-pulse" : "bg-slate-600"}`}></span>
                                  GRID FEED 2 (33kV Back-up)
                                </span>
                                <span className={`font-bold ${activePowerSource === "grid2" ? "text-teal-400" : "text-slate-500"}`}>
                                  {activePowerSource === "grid2" ? "CLOSED (ACTIVE)" : "OPEN (STBY)"}
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-slate-900 border border-white/5 rounded-xl">
                                <span className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${activePowerSource === "ups" ? "bg-amber-400 animate-pulse" : "bg-slate-600"}`}></span>
                                  0ms UPS BATTERY BUFFER
                                </span>
                                <span className={`font-bold ${activePowerSource === "ups" ? "text-amber-400" : "text-slate-500"}`}>
                                  {activePowerSource === "ups" ? "DISCHARGING (0ms TRANS)" : "STANDBY (FLOAT)"}
                                </span>
                              </div>
                            </div>

                            <button 
                              onClick={() => {
                                if (activePowerSource === "grid1") {
                                  setActivePowerSource("ups");
                                  setTimeout(() => setActivePowerSource("grid2"), 1200);
                                } else {
                                  setActivePowerSource("ups");
                                  setTimeout(() => setActivePowerSource("grid1"), 1200);
                                }
                              }}
                              className="w-full py-2 bg-red-600 text-white rounded-lg text-[9px] font-bold uppercase hover:bg-red-500 transition-colors mt-2"
                            >
                              Simulate Grid Failover Trip
                            </button>
                          </div>
                        )}

                        {/* Safety Simulator */}
                        {tab.id === "safety" && (
                          <div className="flex-grow flex flex-col justify-between py-2">
                            <span className="text-xs text-slate-400">Alarm Annunciation Panel</span>

                            <div className={`my-4 p-4 rounded-2xl border transition-all duration-300 ${
                              alarmActive 
                                ? "bg-red-500/15 border-red-500/40 text-red-400 animate-pulse"
                                : "bg-slate-900 border-white/5 text-slate-400"
                            }`}>
                              <h5 className="text-[10px] font-bold uppercase tracking-wider mb-2">Linear Heat Detector Cable</h5>
                              <div className="flex justify-between items-baseline text-xs font-mono">
                                <span>STATUS:</span>
                                <span className="font-extrabold">{alarmActive ? "CRITICAL: ZONE 4 FIRE" : "NOMINAL"}</span>
                              </div>
                              {alarmActive && (
                                <div className="mt-2 text-[8px] font-mono leading-relaxed bg-red-950/40 p-2 rounded border border-red-500/20">
                                  WARNING: PA evac broadcast active. Deluge water valves open at Zone 4 + 75m.
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => setAlarmActive(!alarmActive)}
                              className={`w-full py-2 rounded-lg text-[9px] font-bold uppercase transition-colors ${
                                alarmActive
                                  ? "bg-slate-800 text-white hover:bg-slate-700"
                                  : "bg-red-600 text-white hover:bg-red-500"
                              }`}
                            >
                              {alarmActive ? "Reset Annunciator" : "Trigger Thermal Alert (Test)"}
                            </button>
                          </div>
                        )}

                        {/* Console Footer */}
                        <div className="border-t border-white/5 pt-3 mt-4 flex justify-between items-center text-[8px] font-mono text-slate-500">
                          <span>AEPL CORE COMPONENT LAB v1.2</span>
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            <span>READY</span>
                          </span>
                        </div>
                      </div>
                    </SectionWrapper>

                    {/* Specs Details Card (Right Panel) */}
                    <SectionWrapper className="w-full xl:w-1/2 flex" delay={0.2}>
                      <div className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 text-primary mb-4">
                            {tab.icon}
                            <span className="text-xs font-black uppercase tracking-widest">Active System Specs</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-heading leading-tight">{tab.title}</h3>
                          <p className="text-slate-500 text-xs mb-8 leading-relaxed">{tab.desc}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tab.items.map((item, idx) => (
                              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/50 shadow-sm flex items-start gap-3.5 hover:border-primary/30 transition-colors">
                                <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-primary">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-extrabold text-slate-900 mb-1 leading-snug">{item.label}</h4>
                                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SectionWrapper>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUE CREATION (10 Items Grid) */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,160,138,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                <Share2 className="w-4 h-4" />
                <span>Value Creation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight">
                Value Creation for <span className="gradient-heading">Tunnel Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed font-medium">
                We design and execute robust E&I packages that maximize system availability, safety compliance, and operational efficiency for EPC partners.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Highly Professional Project Management Team",
                desc: "Experienced PMO team delivering drawings, approval documentations, schedules, and strict compliance reports to keep projects on track."
              },
              {
                icon: <Settings className="w-6 h-6 text-primary" />,
                title: "Expertise in Industrial Electrical, Automation and Instrumentation Solutions",
                desc: "Deep engineering capabilities in high-voltage substations, field instrumentation, PLC control systems, and complete SCADA platforms."
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Power management via Monitoring and Distribution",
                desc: "Smart load monitoring, auto-transfer switchgear logic, and protection schemes ensuring seamless power distribution to critical loads."
              },
              {
                icon: <Layers className="w-6 h-6 text-primary" />,
                title: "Turn-key E&I Solutions – Execution of scalable projects",
                desc: "End-to-end responsibility covering feasibility, drawing designs, in-house panel fabrication, site installation, and loop commissioning."
              },
              {
                icon: <Server className="w-6 h-6 text-primary" />,
                title: "Reliable Tunnel Electrical Distribution Architecture",
                desc: "Double-bus configurations, redundant rings, and cast-resin dry transformers to eliminate single points of failure in power supply."
              },
              {
                icon: <Cpu className="w-6 h-6 text-primary" />,
                title: "Scalable SCADA Architecture",
                desc: "Open, modern control platform allowing future expansion of field nodes, instrumentation networks, and traffic supervision systems."
              },
              {
                icon: <Radio className="w-6 h-6 text-primary" />,
                title: "Secure and Reliable Connectivity",
                desc: "Cyber-secured industrial ethernet rings, redundant fiber loops, and fail-safe telemetry communication networks."
              },
              {
                icon: <Wind className="w-6 h-6 text-primary" />,
                title: "Better Control of Air Quality Standards",
                desc: "Advanced closed-loop ventilation algorithms adjusting jet fan RPMs in response to carbon monoxide, nitrogen dioxide, and visibility indices."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: "Increased Safety with reduce Downtime",
                desc: "Hot-standby redundant control systems, early incident identification, and automatic failover switchboards preventing shutdowns."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                title: "Optimize Asset Utilization",
                desc: "Detailed diagnostics, runtime trackers, thermal analytics, and smart scheduling to extend the lifecycle of machinery and panels."
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="relative group p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-primary/45 transition-all duration-300 h-full flex flex-col justify-between hover:shadow-[0_0_30px_rgba(13,160,138,0.15)] backdrop-blur-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span>VALUE CREATION</span>
                    <span className="text-primary font-bold">0{i + 1}</span>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VALUE CREATION FOR EPC PARTNERS */}
      <section className="py-24 bg-gradient-to-b from-[#0a1628]/30 via-slate-950 to-[#0a1628]/30 text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                <Share2 className="w-4 h-4" />
                <span>EPC Partnerships</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight">Value Creation for <span className="gradient-heading">EPC Partners</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">AEPL acts as a single-point responsibility E&I partner, removing interface friction between hardware, cabling, and SCADA automation layers.</p>
            </SectionWrapper>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left selector pane */}
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
              {[
                {
                  num: "01",
                  stat: "Single Point",
                  label: "E&I Vendor",
                  title: "Vendor Consolidation",
                  desc: "We own the complete E&I scope. No interface friction between panel builders, cable laying teams, SCADA developers, and commissioning engineers.",
                  icon: <Layers className="w-5 h-5" />
                },
                {
                  num: "02",
                  stat: "40,000 sq ft",
                  label: "Manufacturing",
                  title: "In-House Panels",
                  desc: "All HT/LT, AMF, VFD, and SCADA remote I/O panels are designed and assembled inside AEPL's state-of-the-art facility, certified for safety and quality.",
                  icon: <Settings className="w-5 h-5" />
                },
                {
                  num: "03",
                  stat: "40% Faster",
                  label: "Commissioning",
                  title: "Accelerated Handover",
                  desc: "Pre-tested logic and loop checks performed at the factory floor before panels arrive on site, reducing field-commissioning hours drastically.",
                  icon: <Zap className="w-5 h-5" />
                },
                {
                  num: "04",
                  stat: "Zero Gaps",
                  label: "Interface Gaps",
                  title: "Professional PMO",
                  desc: "Our PMO delivers full drawing reviews, project schedules, and documentation (NIST/CIE) required for final inspector approvals and grid synchronization.",
                  icon: <ShieldCheck className="w-5 h-5" />
                }
              ].map((p, idx) => {
                const isActive = activePillar === idx;
                return (
                  <SectionWrapper key={idx} delay={idx * 0.05}>
                    <button
                      onClick={() => setActivePillar(idx)}
                      onMouseEnter={() => setActivePillar(idx)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 cursor-pointer select-none ${
                        isActive
                          ? "bg-gradient-to-r from-primary/15 to-primary/5 border-primary/40 shadow-lg shadow-primary/5"
                          : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary rounded-r-md"></div>
                      )}
                      <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400"
                      }`}>
                        {p.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className={`font-bold transition-colors ${isActive ? "text-white text-base" : "text-gray-300 text-base"}`}>
                            {p.title}
                          </h3>
                          <span className="text-xs font-mono font-black text-primary/80 uppercase">
                            {p.num}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed transition-colors ${isActive ? "text-slate-300 font-medium" : "text-gray-400 font-medium"}`}>
                          {p.desc}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className={`text-xs font-bold font-mono tracking-tight ${isActive ? "text-primary" : "text-gray-300"}`}>
                            {p.stat}
                          </span>
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                            {p.label}
                          </span>
                        </div>
                      </div>
                    </button>
                  </SectionWrapper>
                );
              })}
            </div>

            {/* Right display dashboard pane */}
            <div className="w-full lg:w-7/12 flex">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full h-full bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px]">
                  {/* Subtle ambient light behind dashboard */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">AEPL Operations Controller</span>
                        <h4 className="text-base md:text-lg font-bold text-white leading-tight font-heading">
                          {activePillar === 0 && "Consolidated E&I Delivery Blueprint"}
                          {activePillar === 1 && "AEPL In-House Panel Manufacturing Specs"}
                          {activePillar === 2 && "Accelerated Project Timeline Comparison"}
                          {activePillar === 3 && "E&I Engineering & Inspector Compliance Lib"}
                        </h4>
                      </div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold rounded-full text-slate-300 font-mono">
                        PILLAR_0{activePillar + 1}_V.2
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="flex-grow flex items-center justify-center py-4">
                      {activePillar === 0 && (
                        <div className="w-full space-y-6">
                          <p className="text-xs text-gray-400 text-center max-w-md mx-auto">
                            Traditional execution splits accountability, creating interface friction. AEPL unifies the stack under a single point of responsibility.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                            {/* Traditional */}
                            <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-2xl flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-3">Traditional Gaps (4 Vendors)</span>
                                <div className="space-y-2 text-[10px] text-gray-400">
                                  <div className="flex items-center gap-2 bg-slate-900/50 p-2 rounded border border-white/5">
                                    <span className="w-3.5 h-3.5 rounded-full bg-red-950 text-red-400 border border-red-500/30 flex items-center justify-center text-[7px] font-mono">1</span>
                                    <span>Panel Builder (Fabrication gaps)</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-slate-900/50 p-2 rounded border border-white/5">
                                    <span className="w-3.5 h-3.5 rounded-full bg-red-950 text-red-400 border border-red-500/30 flex items-center justify-center text-[7px] font-mono">2</span>
                                    <span>Cabling Vendor (Tag discrepancies)</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-slate-900/50 p-2 rounded border border-white/5">
                                    <span className="w-3.5 h-3.5 rounded-full bg-red-950 text-red-400 border border-red-500/30 flex items-center justify-center text-[7px] font-mono">3</span>
                                    <span>SCADA Developer (Logic clashes)</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-slate-900/50 p-2 rounded border border-white/5">
                                    <span className="w-3.5 h-3.5 rounded-full bg-red-950 text-red-400 border border-red-500/30 flex items-center justify-center text-[7px] font-mono">4</span>
                                    <span>Commissioning Crew (Field errors)</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-[10px] text-red-400 font-bold text-center border-t border-red-500/10 pt-2">
                                ⚠️ High risk of coordination delays
                              </div>
                            </div>

                            {/* AEPL Way */}
                            <div className="bg-primary/5 border border-primary/30 p-5 rounded-2xl flex flex-col justify-between shadow-lg shadow-primary/5">
                              <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-3">AEPL Unified Delivery</span>
                                <div className="space-y-2 text-[10px] text-gray-300">
                                  <div className="bg-slate-900/80 p-4 rounded-xl border border-primary/20 relative overflow-hidden">
                                    <h5 className="font-bold text-white mb-2 text-xs flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                      Single-Point Responsibility
                                    </h5>
                                    <p className="text-[10px] text-gray-400 leading-relaxed">
                                      AEPL owns the entire electrical drawing approvals, panel assembly, on-site cable pulls, control configuration, and official grid sync.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-[10px] text-primary font-bold text-center border-t border-primary/20 pt-2">
                                ✅ Zero interface friction. 100% accountable.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activePillar === 1 && (
                        <div className="w-full space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">State-of-the-Art Factory</span>
                                <h5 className="font-bold text-white mb-2 text-sm">40,000 Sq. Ft. Facility</h5>
                                <p className="text-[10px] text-gray-400 leading-relaxed">
                                  Equipped with computerized sheet metal shears, CNC punching, silver-plated copper busbar bending (up to 6300A), and modular wiring bays.
                                </p>
                              </div>
                              <div className="mt-3 pt-2 border-t border-white/5 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                                ISO 9001:2015 certified Quality
                              </div>
                            </div>

                            <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">NABL Accredited Checks</span>
                                <h5 className="font-bold text-white mb-2 text-sm">Rigorous Type Testing</h5>
                                <p className="text-[10px] text-gray-400 leading-relaxed">
                                  Compliance verification for insulation resistance, temperature rise limits, IP environmental protection, and full control logic sequences.
                                </p>
                              </div>
                              <div className="mt-3 pt-2 border-t border-white/5 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                                100% Factory Acceptance Testing (FAT)
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-900/30 border border-white/5 p-4 rounded-xl">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2.5">Manufacturing Capabilities</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[9px] font-mono text-center">
                              <div className="bg-white/5 border border-white/5 p-2 rounded text-white font-bold">HT VCB (33kV)</div>
                              <div className="bg-white/5 border border-white/5 p-2 rounded text-white font-bold">LT PCC/MCC (6300A)</div>
                              <div className="bg-white/5 border border-white/5 p-2 rounded text-white font-bold">ACDB & DCDB Panels</div>
                              <div className="bg-white/5 border border-white/5 p-2 rounded text-white font-bold">SCADA Marshalling</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activePillar === 2 && (
                        <div className="w-full space-y-6">
                          <div className="space-y-4">
                            {/* Traditional Timeline */}
                            <div>
                              <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Traditional Timeline (24 Weeks)</span>
                                <span className="text-[10px] text-red-400 font-bold font-mono">Sequential Gaps</span>
                              </div>
                              <div className="h-6 w-full bg-slate-900/60 rounded-full border border-red-500/10 overflow-hidden p-0.5 flex">
                                <div className="h-full w-4/12 bg-slate-800 border-r border-slate-950 flex items-center justify-center text-[8px] text-gray-400 font-bold">
                                  Panel Fab
                                </div>
                                <div className="h-full w-4/12 bg-slate-700 border-r border-slate-950 flex items-center justify-center text-[8px] text-gray-400 font-bold">
                                  Cabling Lay
                                </div>
                                <div className="h-full w-3/12 bg-red-950/40 border-r border-slate-950 flex items-center justify-center text-[8px] text-red-300 font-bold">
                                  Site Debug
                                </div>
                                <div className="h-full w-1/12 bg-red-900/60 flex items-center justify-center text-[8px] text-red-300 font-bold">
                                  Sync
                                </div>
                              </div>
                            </div>

                            {/* AEPL Timeline */}
                            <div>
                              <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">AEPL Accelerated Workflow (14 Weeks)</span>
                                <span className="text-[10px] text-primary font-bold font-mono">40% Faster Handover</span>
                              </div>
                              <div className="h-6 w-full bg-slate-900/60 rounded-full border border-primary/20 overflow-hidden p-0.5 flex">
                                <div className="h-full w-[57%] bg-primary/10 border-r border-slate-950 flex flex-col justify-center items-center text-[8px] text-primary font-bold leading-none">
                                  <span>Panel Assembly & SCADA Simulation</span>
                                  <span className="text-[7px] text-primary/80 mt-0.5">(Pre-tested at factory)</span>
                                </div>
                                <div className="h-full w-[28%] bg-slate-800 border-r border-slate-950 flex items-center justify-center text-[8px] text-gray-400 font-bold">
                                  Cabling
                                </div>
                                <div className="h-full w-[10%] bg-primary/20 border-r border-slate-950 flex items-center justify-center text-[8px] text-primary font-bold">
                                  Test
                                </div>
                                <div className="h-full w-[5%] bg-primary flex items-center justify-center text-[8px] text-white font-bold">
                                  Sync
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-primary/5 border border-primary/20 p-3 rounded-xl flex items-center gap-3 text-[10px] text-gray-300">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                              <Clock className="w-4.5 h-4.5" />
                            </div>
                            <p className="leading-relaxed">
                              <strong>Parallel Loop Testing:</strong> We pre-wire and commission control components and SCADA software inside the factory, eliminating loop verification bugs before equipment arrives on-site.
                            </p>
                          </div>
                        </div>
                      )}

                      {activePillar === 3 && (
                        <div className="w-full space-y-4">
                          <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2.5">Design Submittals & Approvals</span>
                            
                            <div className="space-y-2 text-[10px]">
                              <div className="flex justify-between items-center p-2.5 bg-slate-950/80 rounded border border-white/5">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                                  <span className="font-bold text-white">CIE-Compliant Tunnel Lighting Curves</span>
                                </div>
                                <span className="text-[8px] bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-mono">Approved</span>
                              </div>
                              
                              <div className="flex justify-between items-center p-2.5 bg-slate-950/80 rounded border border-white/5">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                                  <span className="font-bold text-white">NIST Cybersecurity SCADA Loop Audit</span>
                                </div>
                                <span className="text-[8px] bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-mono">Verified</span>
                              </div>

                              <div className="flex justify-between items-center p-2.5 bg-slate-950/80 rounded border border-white/5">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                                  <span className="font-bold text-white">AutoCAD Electrical Layouts & SLDs</span>
                                </div>
                                <span className="text-[8px] bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-mono">Delivered</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-[10px] text-gray-400 leading-relaxed text-center max-w-md mx-auto">
                            AEPL's project management office handles drawing schedules, submittals, and factory records to guarantee quick clearances from power inspectors.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                      <span>AEPL COMMAND CONSOLE v2.0</span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-white font-bold">ONLINE</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>



      {/* 7. CTA (Subtle dark overlay) */}
      <section className="py-24 bg-transparent text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Secure Your Infrastructure</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with Adaptive Engineering for robust, compliant automation and electrical execution.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Contact Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
