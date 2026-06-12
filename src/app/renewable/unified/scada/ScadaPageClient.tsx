"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Monitor, CheckCircle2, BarChart3, 
  Cpu, Zap, Eye, Wrench, Battery, ShieldCheck, Sliders
} from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";
import { 
  ScadaHeroDashboard, PlantOverviewDashboard, AlarmConsoleDashboard, ScadaMonitoringDashboard 
} from "@/components/DashboardMockups";

export default function ScadaPageClient() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Brochure: Powering the Future OF RENEWABLE OPERATIONS
  const futureOperations = [
    {
      title: "Optimized Performance",
      desc: "Maximizes energy yield through efficient monitoring, control, and system optimization.",
      icon: <Zap className="w-6 h-6 text-teal-500" />
    },
    {
      title: "Improved Asset Availability",
      desc: "Enhances plant uptime by reducing unexpected failures and minimizing downtime.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Reduced O&M Costs",
      desc: "Lowers operational expenses through automation, predictive maintenance, and efficient resource utilization.",
      icon: <Wrench className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Better Decision-Making",
      desc: "Enables informed and timely decisions with actionable insights derived from real-time and historical data.",
      icon: <BarChart3 className="w-6 h-6 text-sky-500" />
    },
    {
      title: "Grid Code Compliance (First-Time Right)",
      desc: "Ensures smooth commissioning and adherence to regulatory standards without rework or delays.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-500" />
    }
  ];

  // Brochure: GAIN SUPERIOR CONTROL WITH AEPL PLANT SCADA
  const superiorControl = [
    {
      label: "Faster Fault Detection",
      val: "Enables immediate identification of faults at the local level, significantly reducing downtime and improving response time."
    },
    {
      label: "High-Resolution Data",
      val: "Provides granular, high-frequency data for precise loss analysis and performance optimization."
    },
    {
      label: "Improved O&M Efficiency",
      val: "Streamlines operations and maintenance activities with quicker troubleshooting and reduced dependency on central systems."
    },
    {
      label: "Enhanced Control",
      val: "Delivers better real-time control and faster grid responsiveness, ensuring stable and efficient plant operation."
    }
  ];

  // SCADA Sub-Solutions data (Solar, Wind, Hybrid)
  const scadaPillars = [
    {
      id: "solar",
      title: "Solar SCADA",
      subtitle: "Utility-Scale Solar PV Supervisory Control",
      desc: "Industry-leading solar monitoring solutions built to manage complex solar PV layouts, tracker arrays, and environmental telemetry.",
      icon: <Zap className="w-5 h-5" />,
      sections: [
        {
          title: "Our Expertise",
          items: [
            "Customized Dashboard for CXOs to on ground team",
            "Insightful Report for Historical Data Analysis and Analyze asset Performance",
            "Anomaly Detection to get real time fault alerts through SMS & Email to concern department",
            "Access Plant SCADA data from anywhere by Web based Monitoring",
            "Scalable and Flexible SCADA architecture to suit all type and size of renewables plant",
            "Cyber security compliant Hardware & Software"
          ]
        },
        {
          title: "Value Creation",
          items: [
            "Sustainable growth keeping customer at the core of our operations",
            "Globally recognized channel partner of Schneider Electric",
            `Highly skilled professional team with ${COMPANY_STATS.yearsExperience.value}+ years of experience`,
            "Dedicated team to meet project deliverables",
            `Most Installed project in India with more than ${COMPANY_STATS.installedBase.value} capacity`,
            "Ranked No.1, most recognized and most awarded company by reputed agencies for consecutive four years from 2019",
            "ISO 9001:2015 certification with quality approach"
          ]
        }
      ]
    },
    {
      id: "wind",
      title: "Wind SCADA",
      subtitle: "Multi-OEM Wind Asset Telemetry & Management",
      desc: "OEM-independent supervisory control designed to aggregate and compare wind asset performances across scattered locations.",
      icon: <Cpu className="w-5 h-5" />,
      sections: [
        {
          title: "Our Expertise",
          items: [
            "Monitor KPIs of geographically scattered WTG system irrespective of OEM",
            "Compare multiple Wind Asset Performance",
            "Identify best performing WTG across geographies",
            "Integrate wind SAS system with SCADA System as per IEC Standard",
            "Integration of Wind Speed Data through Sensor to our SCADA",
            "Provide relevant data to third party for Generation Forecast"
          ]
        },
        {
          title: "Features",
          items: [
            "Aggregate Data From Geographically Scattered Wind Turbine",
            "Customized Reporting & Dashboard",
            "Increase Availability & Reduce downtime of asset",
            "Maximize Profitability & ROI"
          ]
        },
        {
          title: "Benefits",
          items: [
            "Operational Excellence: World-leading capabilities and innovative user experience empower operators to meet complex operation requirements",
            "High Performance: Reliable, Flexible and High Performance Solutions",
            "Trusted Solutions: Highly secure, scalable and offers real-time supervisory control"
          ]
        }
      ]
    },
    {
      id: "hybrid",
      title: "Hybrid SCADA",
      subtitle: "Combined Solar-Wind Farms & Power Plant Control",
      desc: "Supervisory control and PPC engineered specifically for combined solar and wind generation developed by a single entity.",
      icon: <Sliders className="w-5 h-5" />,
      sections: [
        {
          title: "Our Expertise",
          items: [
            "We at Adaptive Engineering Pvt. Ltd. migrated and diversified ourselves in the field of Hybrid Power Plant and developed solutions comprising combinations of Solar Plant & Wind Plant developed by single entity.",
            "We have also developed our solutions for SCADA & PPC for Hybrid Plant and cater to more than 8GW+ Hybrid Projects.",
            "We have also gained expertise in Hybrid PPC by Installing 10+ Hybrid PPC for various projects."
          ]
        },
        {
          title: "Features for Hybrid Plant SCADA",
          items: [
            "Aggregate Data From Geographically Scattered Wind Turbine",
            "Customized Reporting & Dashboard",
            "Maximize Profitability & ROI",
            "Increase Availability & Reduce downtime of assets"
          ]
        },
        {
          title: "Features for Hybrid PPC",
          items: [
            "Active Power Control",
            "Reactive Power Operating Modes",
            "Reactive Power Control",
            "Voltage Control",
            "Power Factor Control",
            "Frequency Droop Response"
          ]
        },
        {
          title: "Value Creation",
          items: [
            "Power Plant Controller (PPC) for smooth plant operation",
            "Easy integration with all reputed Inverters, WTGs to SCADA System",
            "Work independently irrespective of any compliance challenge",
            "Our PPC server can log data at millisecond timestamped",
            "Offer super quick backfilling supported event logger",
            "Tested and verified under various Indian and International agencies running successfully at more than 8GW+ plants"
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      
      {/* 1. HERO (Dark Immersive with Split Layout) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#071926] to-slate-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10"></div>
          <div className="absolute inset-0 opacity-5 z-10" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[140px] z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px] z-10"></div>
        </div>

        <div className="z-20 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Monitor className="w-4 h-4" />
                  <span>Unified Control Solutions</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  <span className="gradient-heading">SCADA</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg font-medium max-w-lg leading-relaxed mb-8">
                  Supervisory control and data acquisition engineered for utility-scale Solar, Wind, and Hybrid plants. Aggregate data and maximize operational performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
                    Schedule Engineering Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#scada-showcase" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Explore SCADA Domains
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Split Right Dashboard Mockup */}
            <SectionWrapper delay={0.3}>
              <div className="h-[440px] hidden lg:block select-none pointer-events-none">
                <ScadaHeroDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. POWERING THE FUTURE OF RENEWABLE OPERATIONS (Brochure Section) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                AEPL Operational Impact
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 font-heading mb-4 leading-tight tracking-tight">
                Powering the Future <br className="hidden sm:block" />
                <span className="gradient-heading">of Renewable Operations</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Supervisory systems built to maximize energy yield, enhance asset lifespan, and lower operational complexity across multi-GW portfolios.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {futureOperations.map((item, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-950 mb-3 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DOMAIN-SPECIFIC SCADA OFFERINGS (Solar, Wind & Hybrid Switcher) */}
      <section id="scada-showcase" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                Targeted Implementations
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-heading mb-4">
                Domain-Specific <span className="gradient-heading">SCADA Offerings</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Diversified solutions configured specifically for solar tracking networks, utility wind parks, and hybrid power management.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Selector tabs */}
            <div className="lg:col-span-4 w-full flex flex-col justify-between">
              <SectionWrapper className="h-full w-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Domain Selector</span>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-col gap-3">
                      {scadaPillars.map((pillar, idx) => {
                        const isActive = activeTab === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 cursor-pointer select-none ${
                              isActive
                                ? "bg-white border-primary/30 shadow-md shadow-primary/5"
                                : "bg-transparent border-slate-200 hover:bg-white/50 hover:border-slate-300"
                            }`}
                          >
                            {isActive && (
                              <div className="absolute left-0 top-4 bottom-4 w-1 bg-primary rounded-r-md"></div>
                            )}
                            <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                              isActive ? "bg-primary/20 text-primary" : "bg-slate-200 text-slate-600"
                            }`}>
                              {pillar.icon}
                            </div>
                            <div>
                              <h5 className={`font-extrabold transition-colors ${isActive ? "text-slate-950 text-sm" : "text-slate-700 text-xs"}`}>
                                {pillar.title}
                              </h5>
                              <p className={`text-[10px] leading-relaxed mt-1 transition-colors ${isActive ? "text-slate-600 font-semibold" : "text-slate-500 font-medium"}`}>
                                {pillar.subtitle}
                              </p>
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
            <div className="lg:col-span-8 w-full flex">
              <SectionWrapper delay={0.2} className="h-full w-full flex flex-col justify-between">
                <div className="w-full h-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between select-none">
                  <div>
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-4 mb-6 flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        AEPL renewable implementation blueprint
                      </span>
                      <span className="font-bold text-primary">MODULE_0{activeTab + 1}</span>
                    </div>

                    {/* Content Detail */}
                    <h3 className="text-xl font-black text-slate-950 mb-3">{scadaPillars[activeTab].title} Scope</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
                      {scadaPillars[activeTab].desc}
                    </p>

                    {/* Dynamic Sections (Expertise, Features, Benefits, PPC) */}
                    <div className="space-y-6">
                      {scadaPillars[activeTab].sections.map((sect, sIdx) => (
                        <div key={sIdx} className="space-y-3">
                          <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-[0.1em] border-b border-slate-100 pb-1.5">
                            {sect.title}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {sect.items.map((item, iIdx) => (
                              <div key={iIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex items-start gap-3 hover:border-primary/25 transition-colors duration-300">
                                <div className="w-5 h-5 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-primary mt-0.5">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <p className="text-[10px] text-slate-700 leading-relaxed font-semibold">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-slate-100 pt-4 mt-8 flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>AEPL UNIFIED RENEWABLE SYSTEM CONFIG</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>ACTIVE SCHEMATICS</span>
                    </span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. GAIN SUPERIOR CONTROL WITH AEPL PLANT SCADA (Brochure Section) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side description */}
            <div className="lg:col-span-6 space-y-6">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Superior Control</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-heading leading-tight">
                  Gain Superior Control <br />
                  <span className="gradient-heading">with AEPL Plant SCADA</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Designed for real-time grid responsiveness, rapid fault isolation, and highly granular performance analytics at local operator stations.
                </p>
              </SectionWrapper>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {superiorControl.map((item, idx) => (
                  <SectionWrapper key={idx} delay={idx * 0.05}>
                    <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-start gap-4 hover:border-primary/25 transition-colors duration-300 h-full">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-primary">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-950 mb-1 leading-snug">{item.label}</h4>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.val}</p>
                      </div>
                    </div>
                  </SectionWrapper>
                ))}
              </div>
            </div>

            {/* Right side live monitoring dashboard mockup */}
            <div className="lg:col-span-6 h-full flex select-none pointer-events-none">
              <SectionWrapper delay={0.2} className="w-full">
                <div className="w-full bg-slate-950 text-white border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden font-mono">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center text-[10px] text-gray-500">
                      <span>AEPL REAL-TIME SCADA PANEL</span>
                      <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        LOCAL_TELEMETRY_OK
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                        <span className="text-[9px] text-gray-500 font-bold block mb-1">Active Power Output</span>
                        <div className="text-xl font-bold text-white font-mono">42.84 MW</div>
                      </div>
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                        <span className="text-[9px] text-gray-500 font-bold block mb-1">Grid Frequency</span>
                        <div className="text-xl font-bold text-white font-mono">50.02 Hz</div>
                      </div>
                    </div>

                    <div className="bg-slate-900/30 p-4 rounded-xl border border-white/5 text-[10px] text-gray-400 space-y-1">
                      <div className="flex justify-between">
                        <span>IEC 61850 Link Status:</span>
                        <span className="text-emerald-400 font-bold">ACTIVE_SAS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Meteorological Solar Feed:</span>
                        <span className="text-emerald-400 font-bold">1040 W/m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anemometer Wind Speed:</span>
                        <span className="text-emerald-400 font-bold">12.4 m/s</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-6 text-[9px] text-gray-500">
                    <span>GRID CODE COMPLIANT | FIRST-TIME RIGHT</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROTOCOLS & DEVICES */}
      <section className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                Integration Protocols
              </span>
              <h2 className="text-3xl font-bold font-heading mb-4">Supported Protocols & Devices</h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm">
                Native driver libraries ensure plug-and-play integrations with all utility inverters, WTGs, and BESS systems.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["IEC 61850", "Modbus TCP/RTU", "OPC UA", "DNP3", "IEC 104", "MQTT", "HTTP/REST API", "Profinet"].map((protocol, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-primary/50 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
                  <Cpu className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-extrabold text-sm text-white">{protocol}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SCADA IN ACTION (Tabbed Interactive Dashboard Previews) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                SCADA Console Mockups
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-heading mb-4">
                SCADA in Action
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Clickable preview and live UI modules showcasing contextual alarm management and performance dashboards.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="h-80 select-none pointer-events-none">
                <ScadaMonitoringDashboard />
              </div>
              <p className="text-center text-xs font-extrabold text-slate-700 mt-4 uppercase tracking-wider">Real-Time Monitoring</p>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="h-80 select-none pointer-events-none">
                <PlantOverviewDashboard />
              </div>
              <p className="text-center text-xs font-extrabold text-slate-700 mt-4 uppercase tracking-wider">Plant Overview</p>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="h-80 select-none pointer-events-none">
                <AlarmConsoleDashboard />
              </div>
              <p className="text-center text-xs font-extrabold text-slate-700 mt-4 uppercase tracking-wider">Alarm Management</p>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 7. EXPLORE OTHER SOLUTIONS */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                Unified Renewable Suite
              </div>
              <h2 className="text-3xl font-black text-slate-950 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all assets." },
              { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, and report builder." },
              { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant power regulation and voltage support." },
              { href: "/renewable/unified/cmms", label: "Computerised Maintenance", abbr: "CMMS", icon: <Wrench className="w-5 h-5" />, desc: "Automated work orders and SOP dispatch for O&M teams." },
              { href: "/renewable/unified/ems-bess", label: "Energy Management System", abbr: "EMS-BESS", icon: <Battery className="w-5 h-5" />, desc: "Arbitrage, SoC management, and battery peak shaving." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <Link href={sol.href} className="group relative flex flex-col h-full p-6 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      {sol.abbr}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300">
                      {sol.icon}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-extrabold text-slate-950 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {sol.label}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed flex-grow font-medium">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-primary font-bold text-xs mt-6 group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-6 font-heading">Ready to Modernize Your SCADA?</h2>
            <p className="text-slate-500 mb-8 text-sm md:text-base leading-relaxed">
              Talk to our SCADA engineers to design a system tailored to your solar, wind, or hybrid utility plant requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-lg shadow-teal-500/20">
              Request SCADA Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
