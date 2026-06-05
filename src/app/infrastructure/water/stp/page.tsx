"use client";

import { useState } from "react";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Waves, Droplets, Settings, LayoutTemplate, ShieldCheck, Factory, Cpu, Activity, BarChart3, Handshake, Zap, Globe, Smartphone, Radio, ShieldAlert } from "lucide-react";
import { WATER_STATS, WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER } from "@/lib/constants";

export default function Page() {
  const currentPath = "/infrastructure/water/stp";
  const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

  // Solutions tab state
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      titleShort: "Process Optimization",
      highlight: "Biological Treatment Control",
      title: "Biological Process & Aeration Optimization",
      icon: <Settings className="w-6 h-6" />,
      description: "Deploying intelligent closed-loop control systems for aeration basins (SBR, MBR, ASP). Utilizing continuous dissolved oxygen (DO) feedback sensors, variable-speed blower algorithms, and return activated sludge (RAS) telemetry to guarantee regulatory compliance while slashing energy overhead by up to 30%.",
      keySpecs: ["Automated DO Loops", "SBR Cycle Analytics", "Sludge Age Algorithms"]
    },
    {
      titleShort: "Pump Optimization",
      highlight: "Hydraulic Management",
      title: "VFD & Smart Level Telemetry Pump Control",
      icon: <Activity className="w-6 h-6" />,
      description: "Adjusting influent and effluent pump performance dynamically based on continuous ultrasonic level inputs. Balances running hours across multi-pump configurations, preventing dry-runs, reducing start-stop fatigue, and mitigating pipeline surge pressures.",
      keySpecs: ["Anti-Clog Diagnostics", "Dry-Run Protection", "Dynamic Speed Controls"]
    },
    {
      titleShort: "Geographic Networks",
      highlight: "Distributed Infrastructure",
      title: "Wide-Area Telemetry & Centralized Monitoring",
      icon: <Radio className="w-6 h-6" />,
      description: "Integrating remote sewage pumping stations (SPS) and lift stations into a unified centralized SCADA dashboard. Utilizing encrypted telemetry protocols (LoRa, 4G/5G, fiber optic) with robust local buffers to prevent data gaps during signal outages.",
      keySpecs: ["Edge RTU Integration", "Dual-SIM Fallbacks", "Distributed Alarming"]
    },
    {
      titleShort: "Mobile Asset Management",
      highlight: "Operations intelligence",
      title: "CMMS Sync & Field Diagnostics",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Connecting edge field devices directly with mobile Computerized Maintenance Management Systems (CMMS). Field operations crews receive predictive warnings (bearing temperature, motor vibration shifts) as push alerts, speeding up dispatch.",
      keySpecs: ["Vibration Analytics", "Push Maintenance Alerts", "Digital Run Log Sync"]
    }
  ];

  return (
    <div className="flex flex-col w-full text-slate-100">
      <SceneTrigger variant="logo" color="#10b981" speed={0.5} />

      {/* 1. HERO SECTION (Dark environment theme) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/imgs/stp-hero.png" alt="Sewage Treatment Plant" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/30">
              <Droplets className="w-4 h-4" />
              <span>Waste Water Industry</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Sewage Treatment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">STP</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Transforming wastewater operations with custom Turnkey Electrical, Instrumentation, and Intelligent SCADA Solutions built for maximum ecological compliance and high operational scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Discuss Your STP Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/infrastructure/water" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                Explore Water Suite
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. STATS BAR (Dark emerald background) */}
      <section className="py-16 bg-[#070e1b] relative z-20 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-950/40">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-emerald-500">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Years Experience</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.mldTreatedSewage.value}<span className="text-emerald-500">{WATER_STATS.mldTreatedSewage.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">MLD of Treated Sewage Water</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.pumpingStationsConnected.value}<span className="text-emerald-500">{WATER_STATS.pumpingStationsConnected.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Pumping Stations Remotely Connected</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Light, distinct layout) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text column */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <span className="text-emerald-600 font-bold uppercase text-sm tracking-widest mb-3 block">Wastewater Infrastructure Leadership</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">Experts in Electrical & Automation for Waste Water</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We at Adaptive Engineering Pvt Ltd. are experts in providing Electrical, Instrumentation and Automation Solutions for the Waste Water industry. Over the past {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years, we have designed systems to manage the unique corrosive environments, high variable flows, and strict biological parameters that define sewage treatment plants.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our services deliver the robust structural layouts, safety systems, and instrumentation required to monitor and control complex waste water cycles efficiently, preventing ecological incidents while maximizing pump life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Industrial Compliance</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Strict discharge limits met consistently</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <Globe className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Scale Telemetry</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Over {WATER_STATS.statesCovered.value}+ states actively monitored</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right side graphic column */}
            <div className="lg:col-span-5 relative">
              <SectionWrapper delay={0.2}>
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-[40px] blur-2xl"></div>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
                  <Image src="/imgs/stp-scada-control-room.png" alt="STP SCADA operations dashboard display panel" width={600} height={450} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-white text-xs font-bold uppercase tracking-wider">Live System Active</span>
                    </div>
                    <p className="text-white font-bold text-lg">Central Control Console</p>
                    <p className="text-gray-300 text-xs">Continuous process reporting and fault isolation loops</p>
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SHOWCASE (Custom Interactive Tabbed Interface - Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-emerald-400 font-bold uppercase text-sm tracking-widest mb-3 block font-bold">Solutions Portfolio</span>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Solutions We Deliver</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We offer end to end Electrical, Automation and Instrumentation solutions to manage waste water networks of geographically distributed assets.
              </p>
            </div>
          </SectionWrapper>

          {/* Interactive tabs showcase */}
          <SectionWrapper delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
              
              {/* Left Column: Interactive Selector Buttons */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                {solutions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                      activeTab === idx
                        ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        activeTab === idx ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-slate-400"
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-semibold">{item.highlight}</span>
                        <h4 className="text-base font-bold text-white mt-0.5">{item.titleShort}</h4>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Display Active Tab Details */}
              <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-md flex flex-col justify-between min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                
                <div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                    {solutions[activeTab].highlight}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{solutions[activeTab].title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8">{solutions[activeTab].description}</p>
                </div>

                <div>
                  <h5 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Technical Highlights</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {solutions[activeTab].keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="px-4 py-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                        <span className="text-slate-200 text-xs font-bold leading-none">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 5. BENEFITS SECTION (Staggered Layout with Mock Dashboard - Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold uppercase text-sm tracking-widest mb-3 block">Benefits</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Engineered Benefits of AEPL Turn-key Systems</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We design and deploy custom E&I grids to manage geographically distributed pump stations and large-scale plant parameters.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Simulated SCADA Monitoring Widget */}
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl relative text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm tracking-wide text-slate-300">STP PROCESS MONITORING</span>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold tracking-wider uppercase border border-emerald-500/20">Active</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Inlet Dissolved Oxygen</span>
                    <span className="text-xl font-bold text-emerald-400">2.14 mg/L</span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Total Daily Output</span>
                    <span className="text-xl font-bold text-cyan-400">300 MLD+</span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Remote Lift Stations</span>
                    <span className="text-xl font-bold text-white">10 Active</span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">System Health Index</span>
                    <span className="text-xl font-bold text-emerald-400">99.8%</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald-400 w-5 h-5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold block text-slate-200">Alarms & Safety System</span>
                      <span className="text-[10px] text-slate-400">Continuous loop checks active</span>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>
            </SectionWrapper>

            {/* Right Column: Key Benefits Descriptions */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Reliable Remote Pumping Station Control",
                    desc: "Reliable monitoring and control of pump stations, minimizing risk of sewer system overflows and enabling automated emergency bypass schemes.",
                    color: "border-l-4 border-emerald-500"
                  },
                  {
                    num: "02",
                    title: "Minimize Overall Energy Draw",
                    desc: "Minimize energy usage by integrating automated VFD cycles, soft starters, and intelligent power quality panels (APFC).",
                    color: "border-l-4 border-cyan-500"
                  },
                  {
                    num: "03",
                    title: "Flexible & Expandable Architecture",
                    desc: "Ensure a scalable, reliable, and flexible architecture based on open database standards to incorporate new pump wells easily.",
                    color: "border-l-4 border-emerald-500"
                  },
                  {
                    num: "04",
                    title: "Batch Diagnostics & Custom Reporting",
                    desc: "Batch processing to generate user defined reports, custom compliance logging sheets, and predictive maintenance alerts.",
                    color: "border-l-4 border-cyan-500"
                  }
                ].map((item, i) => (
                  <div key={i} className={`pl-6 p-4 bg-slate-50 rounded-r-2xl ${item.color} transition-all duration-300 hover:shadow-md`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-black text-slate-400">{item.num}</span>
                      <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 6. VALUE CREATION (Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: AEPL Advantage Cards */}
            <SectionWrapper>
              <div>
                <span className="text-emerald-400 font-bold uppercase text-sm tracking-widest mb-3 block">Value Creation</span>
                <h2 className="text-4xl font-bold text-white mb-8 font-heading">The AEPL Value Advantage</h2>

                <div className="space-y-5">
                  {[
                    { icon: <Zap className="w-6 h-6 text-emerald-400" />, title: "Turn-key E&I Solutions", desc: "Covers all project stages—from initial instrumentation sizing to manufacturing panels, loop checking, and final testing." },
                    { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, title: "Secure & Encrypted Connectivity", desc: "Secure telemetry layers protecting public wastewater grids from intrusion while enabling anytime-anywhere monitoring." },
                    { icon: <BarChart3 className="w-6 h-6 text-emerald-400" />, title: "Analytical Processing & Logging", desc: "Batch processes designed to aggregate historical levels, pump logs, and chemical usage into compliant regulatory reports." },
                    { icon: <Smartphone className="w-6 h-6 text-emerald-400" />, title: "Mobile Maintenance Integration", desc: "Direct notification loops notifying engineers and supervisors when parameters shift past limits, maximizing pump lifetimes." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Right Column: Panel Factory Visual & Government Approvals */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/imgs/wtp-panel-manufacturing.png" alt="In-house panel manufacturing plant" width={800} height={500} className="w-full h-[320px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-white font-bold">125,000+ Sq. Ft. Manufacturing Infrastructure</p>
                    <p className="text-gray-300 text-xs">Quality panel fabrication and pre-FAT test beds in-house</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <Handshake className="text-emerald-400 w-5 h-5" /> Government & Municipal Approved Vendor
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold rounded-full hover:bg-emerald-500/20 transition-colors">
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 7. PROCESS FLOW (Custom Blueprint Timeline layout - Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-emerald-600 font-bold uppercase text-sm tracking-widest mb-3 block">Workflow Process</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Our STP Project Execution Timeline</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                A highly structured blueprint process matching strict engineering standards.
              </p>
            </div>
          </SectionWrapper>

          {/* Vertical blueprint timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500/10 md:-translate-x-1/2 z-0"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Engineering Survey & Drafting",
                  desc: "Conducting hydraulic diagnostics, detailing plant instrumentation maps, sizing power panels, and drafting customized single-line diagrams (SLDs).",
                  icon: <LayoutTemplate className="w-5 h-5 text-emerald-600" />
                },
                {
                  step: "02",
                  title: "In-House Panel Fabrication",
                  desc: "Assembling power distribution panels (PCC), motor control centers (MCC), and programmable automation kiosks (PLC/RTU) in our facility.",
                  icon: <Factory className="w-5 h-5 text-emerald-600" />
                },
                {
                  step: "03",
                  title: "Field Deployment & Testing",
                  desc: "Routing cables on-site, mounting field instruments (DO sensors, ultrasonic transceivers), and completing rigid FAT and loop-check testing.",
                  icon: <Settings className="w-5 h-5 text-emerald-600" />
                },
                {
                  step: "04",
                  title: "Central SCADA Handover",
                  desc: "Integrating communication channels, deploying centralized SCADA maps, setting alarm configurations, and completing operator training.",
                  icon: <Cpu className="w-5 h-5 text-emerald-600" />
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch z-10">
                  {/* Step marker pin */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 -translate-x-1/2 flex items-center justify-center z-20 text-white font-bold text-xs shadow-lg shadow-emerald-500/20">
                    {item.step}
                  </div>

                  {/* Left Side spacer/block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 text-left md:text-right ${idx % 2 === 0 ? "md:block" : "md:invisible h-0 md:h-auto overflow-hidden md:overflow-visible"}`}>
                    {idx % 2 === 0 && (
                      <SectionWrapper delay={0.1} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-xl mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </SectionWrapper>
                    )}
                  </div>

                  {/* Right Side spacer/block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 text-left ${idx % 2 !== 0 ? "md:block" : "md:invisible h-0 md:h-auto overflow-hidden md:overflow-visible"}`}>
                    {idx % 2 !== 0 && (
                      <SectionWrapper delay={0.1} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-xl mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </SectionWrapper>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INFRASTRUCTURE SHOWCASE */}
      <section className="relative z-20 overflow-hidden">
        <div className="relative h-[400px]">
          <Image src="/imgs/stp-infrastructure-scale.png" alt="Sewage Pump house station assets scale" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <SectionWrapper>
                <div className="max-w-lg">
                  <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-3 block">Infrastructure at Scale</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">{WATER_STATS.pumpingStationsConnected.value}+ Pumping Stations Online</h2>
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                    Deploying remote terminal units (RTUs) across multiple pumping grids, delivering integrated telemetry maps to a single SCADA control hub.
                  </p>
                  <Link href="/infrastructure/water/centralized-scada" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    Explore Centralized SCADA <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OTHER SOLUTIONS (Light) */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
                Water Infrastructure Solutions
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete water infrastructure offering covers every aspect — from treatment plants to centralized SCADA monitoring.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {otherSolutions.map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Modernize Wastewater Infrastructure?</h2>
            <p className="text-slate-400 mb-8 text-lg">Partner with Adaptive Engineering for advanced, turn-key E&I and automation solutions.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Contact Our Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
