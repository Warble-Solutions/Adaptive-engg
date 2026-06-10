import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Monitor, Droplets, BatteryCharging, Shield, Activity, Search, RefreshCw, Layers, Database, Lock, Cpu, LayoutTemplate, Factory, Settings } from "lucide-react";
import { ScadaHeroDashboard } from "@/components/DashboardMockups";
import { WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER } from "@/lib/constants";

export const metadata = {
  title: "Centralized SCADA System | Adaptive Engineering",
  description: "Highly reliable, scalable and flexible software architecture for centralized SCADA in water infrastructure. Bird's eye view dashboards.",
};

export default function Page() {
  const currentPath = "/infrastructure/water/centralized-scada";
  const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

  return (
    <div className="flex flex-col w-full text-slate-100">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* 1. HERO SECTION (Clean Dark Theme with dashboard) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/central-scada-hero.png"
            alt="Centralized SCADA Control Room"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B1120] z-10"></div>
        </div>
        
        <div className="z-10 max-w-7xl w-full relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionWrapper>
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/15 backdrop-blur-sm text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/25">
                <Monitor className="w-4 h-4" />
                <span>Water Solutions Software</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading">
                Centralized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da08a] to-emerald-400">SCADA</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                Highly reliable, scalable, and flexible software architecture offering a bird&apos;s eye view of all decentralized water assets globally.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
                Request SCADA Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionWrapper>
          
          <SectionWrapper delay={0.2}>
            <div className="h-[440px] hidden lg:block rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(13,160,138,0.15)] border border-emerald-900/50">
              <ScadaHeroDashboard />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. PARAMETER MATRIX (Light Dashboard Grid) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-2 block font-bold">System Capabilities</span>
              <h2 className="text-4xl font-bold text-slate-900 font-heading">Total Ecosystem Visibility</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                AEPL Centralized SCADA logs, tracks, and balances parameters across the entire municipal or industrial pipeline.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Droplets className="w-6 h-6" />, title: "Water Quantity", desc: "Real-time volumetric intake, flow rates, and reservoir levels." },
              { icon: <Activity className="w-6 h-6" />, title: "Water Quality", desc: "Continuous monitoring of pH, turbidity, and chemical balance." },
              { icon: <BatteryCharging className="w-6 h-6" />, title: "Energy Management", desc: "Active voltage tracking, VFD draw, and power optimization loops." },
              { icon: <Lock className="w-6 h-6" />, title: "Data Integrity", desc: "Local buffer storage, encrypted links, and database integrity checks." },
              { icon: <Monitor className="w-6 h-6" />, title: "Asset Monitoring", desc: "Pump motor temperature index, vibration alarms, and run hours." },
              { icon: <Search className="w-6 h-6" />, title: "Water Source Optimization", desc: "Groundwater aquifers replenishment and canal intake balancing." },
              { icon: <RefreshCw className="w-6 h-6" />, title: "O&M Standardization", desc: "Valve sequence verification and digital shift logs integration." },
              { icon: <Layers className="w-6 h-6" />, title: "Consumable Estimation", desc: "Chlorine usage calculators and chemical stock inventory alerts." }
            ].map((feature, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-500/50 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[#0da08a] mb-4 p-3 bg-emerald-50 rounded-xl inline-block">{feature.icon}</div>
                    <h4 className="font-bold text-slate-800 text-base mb-2">{feature.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS & TELEMETRY NETWORK DIAGRAM (Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Solutions list */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Solutions</span>
                <h2 className="text-4xl font-bold text-white mb-6 font-heading">Complete Control Architecture</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We at Adaptive Engineering Pvt Ltd. offer Centralized SCADA systems built to deliver overall monitoring, data integrity, and secure remote operations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Overall monitoring of Quantitative and Qualitative parameters",
                    "Energy Consumption",
                    "Efficient plant/scheme operations",
                    "Highly reliable, scalable and flexible software architecture",
                    "Advanced data mining",
                    "Reporting tools",
                    "Data integrity and security",
                    "Supports the latest analytics with bird eye view of dashboards"
                  ].map((sol, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mt-2 shrink-0"></div>
                      <span className="text-slate-200 text-xs font-semibold leading-relaxed">{sol}</span>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Custom CSS SCADA Telemetry Network Diagram */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="p-8 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
                  
                  <h4 className="font-bold text-sm text-[#0da08a] uppercase tracking-widest mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" /> Telemetry Flow Diagram
                  </h4>

                  {/* SCADA Network Flow Visualization */}
                  <div className="relative space-y-12">
                    
                    {/* Concentrator lines */}
                    <div className="absolute left-[38px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500 to-emerald-500/10 z-0"></div>

                    {[
                      { node: "Central SCADA Host", details: "Oracle/MSSQL DB Server", isMaster: true },
                      { node: "Water Treatment Plant (WTP)", details: "Modbus/TCP Client connection", isMaster: false },
                      { node: "Sewage Treatment (STP)", details: "MQTT Telemetry Broker", isMaster: false },
                      { node: "Lift Pumping Stations", details: "Cellular 4G RTU Nodes", isMaster: false }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 relative z-10">
                        <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center shrink-0 border ${
                          item.isMaster 
                            ? "bg-slate-950 border-[#0da08a] text-emerald-400 shadow-lg shadow-emerald-500/10" 
                            : "bg-slate-950 border-slate-800 text-slate-400"
                        }`}>
                          <Monitor className="w-8 h-8" />
                          <span className="text-[8px] font-bold mt-1 uppercase">{item.isMaster ? "Master" : "RTU Node"}</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-100 text-xs md:text-sm">{item.node}</h5>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">{item.details}</span>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PLATFORM ADVANTAGE (Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Advantage Points */}
            <SectionWrapper>
              <div>
                <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block font-bold">Data & Intelligence</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 font-heading">The Centralized SCADA Advantage</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Monitor className="w-5 h-5" />, title: "Overall monitoring of Quantitative and Qualitative parameters", desc: "Tracking flow rates, levels, pH, and turbidity in a single centralized console." },
                    { icon: <BatteryCharging className="w-5 h-5" />, title: "Energy Consumption", desc: "Active monitoring of grid voltage, VFD power draw, and capacitor performance." },
                    { icon: <Cpu className="w-5 h-5" />, title: "Efficient plant/scheme operations", desc: "Automating motor duty cycles and valve sequences to optimize overall throughput." },
                    { icon: <Layers className="w-5 h-5" />, title: "Highly reliable, scalable and flexible software architecture", desc: "Ensuring easy expansions for future treatment plants and OHT nodes." },
                    { icon: <Database className="w-5 h-5" />, title: "Advanced data mining", desc: "Extracting actionable insights from historical sensor telemetry and runtime logs." },
                    { icon: <LayoutTemplate className="w-5 h-5" />, title: "Reporting tools", desc: "Generating automated daily summaries, energy reports, and compliance logs." },
                    { icon: <Lock className="w-5 h-5" />, title: "Data integrity and security", desc: "Protecting utility data with localized buffer storage and encrypted cellular channels." },
                    { icon: <Activity className="w-5 h-5" />, title: "Supports the latest analytics with bird eye view of dashboards", desc: "Web-based dashboards providing real-time operations status at a glance." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-emerald-500/30 hover:shadow-md transition-all group">
                      <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-[#0da08a] mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Right Column: Visual Image & Government Approvals */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8 lg:sticky lg:top-24">
                
                <div className="relative rounded-[32px] overflow-hidden border border-slate-150 shadow-2xl">
                  <Image src="/imgs/central-scada-network.png" alt="Centralized SCADA telemetry network overview dashboard" width={800} height={500} className="w-full h-[320px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-white font-bold">Smart Centralized SCADA & Analytics</p>
                    <p className="text-gray-300 text-xs">Decentralized water asset monitoring and automated reporting logs</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Factory className="text-[#0da08a] w-5 h-5" /> Government & Municipal Partner
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 text-[#0da08a] text-xs font-bold rounded-full">
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



      {/* 6. OTHER SOLUTIONS (Light) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
                Water Solutions Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete water infrastructure offering covers every aspect — from treatment plants to centralized SCADA monitoring.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {otherSolutions.map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#0da08a]/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
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

      {/* 7. CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Implement Centralized Telemetry?</h2>
            <p className="text-slate-400 mb-8 text-lg">Partner with Adaptive Engineering for secure, scalable software architectures.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
              Contact Our Software Engineers <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
