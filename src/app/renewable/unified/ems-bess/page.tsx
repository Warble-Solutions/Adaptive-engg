import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Battery, Zap, BarChart3, TrendingUp, Sun, Wind, 
  CheckCircle2, Activity, Shield, DollarSign, Monitor, 
  Eye, Wrench, AlertTriangle, Layers, Sliders, FileCheck, Globe 
} from "lucide-react";
import { EMSHeroDashboards, HybridPlantDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "Energy Management System - BESS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Indigenous EMS solution for Battery Energy Storage Systems — ML-based energy arbitrage, SoC management, peak shaving, and grid support.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full text-slate-900 bg-slate-955">

      {/* 1. HERO — Split Layout (Dark) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/ems-bess-hero-bg.png" alt="EMS-BESS Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-955/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-955/80 via-transparent to-slate-955/95"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
        </div>
     
        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            {/* Left — Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-teal-500/20">
                  <Battery className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading leading-tight">
                  <span className="gradient-heading">EMS for BESS</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg font-medium max-w-lg leading-relaxed mb-8">
                  Indigenous solution for Battery Energy Storage Systems with ML-based energy arbitrage, state of charge management, peak shaving, and grid support.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* Right — Dashboards */}
            <SectionWrapper delay={0.3}>
              <div className="hidden lg:block h-[500px] select-none pointer-events-none">
                <EMSHeroDashboards />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. WHY EMS? (Light) */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                <Sliders className="w-4 h-4" />
                <span>Value Proposition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 leading-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">EMS?</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                A grid-compliant, utility-scale controller optimizing battery asset lifespans and capacity.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Improves availability",
                desc: "Maintains cells within tight SOC and thermal windows to maximize operational run-times and readiness.",
                icon: <Activity className="w-5 h-5 text-teal-600" />,
                bg: "bg-teal-50"
              },
              {
                title: "Optimizes performance",
                desc: "Dynamically manages charging and discharging rates to prevent fast capacity degradation.",
                icon: <Zap className="w-5 h-5 text-emerald-600" />,
                bg: "bg-emerald-50"
              },
              {
                title: "Assures compliances",
                desc: "Enforces strict active/reactive power parameters and anti-islanding regulations at the grid coupling point.",
                icon: <Shield className="w-5 h-5 text-cyan-600" />,
                bg: "bg-cyan-50"
              },
              {
                title: "Maximize returns",
                desc: "Deploys store-and-release strategies aligned with tariff spikes to maximize arbitrage spreads.",
                icon: <DollarSign className="w-5 h-5 text-indigo-600" />,
                bg: "bg-indigo-50"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="relative p-8 rounded-3xl border border-slate-200/60 bg-slate-50/50 hover:bg-white shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <span className="absolute top-5 right-6 text-slate-200/60 font-mono font-bold text-3xl group-hover:text-primary/10 transition-colors select-none">
                    0{i + 1}
                  </span>
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-slate-100/80 ${item.bg} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium mt-2">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES & BENEFITS (Light-Gray) */}
      <section className="py-24 bg-slate-50 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                AEPL Technologies
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">
                Features & Benefits
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Advanced battery management capabilities and smart grid synchronization tools built in-house.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiple operating modes",
                desc: "Supports Peak Shaving, Frequency Regulation, Volt-Var control, and Load Following options.",
                icon: <Sliders className="w-5 h-5 text-primary group-hover:text-white" />,
                tag: "Control Modes"
              },
              {
                title: "Automated SoC balancing",
                desc: "Actively balances cell blocks during idle times to keep capacity metrics uniform across banks.",
                icon: <Battery className="w-5 h-5 text-teal-500 group-hover:text-white" />,
                tag: "SOC Management"
              },
              {
                title: "Avoid thermal run away",
                desc: "Supervises cell temperatures to shut down failing circuits before fire risks occur.",
                icon: <AlertTriangle className="w-5 h-5 text-rose-500 group-hover:text-white" />,
                tag: "Safety Systems"
              },
              {
                title: "Advanced analytics",
                desc: "Calculates State of Health (SOH) and round-trip efficiency (RTE) through predictive regression models.",
                icon: <BarChart3 className="w-5 h-5 text-cyan-500 group-hover:text-white" />,
                tag: "Data Modeling"
              },
              {
                title: "Energy arbitrage",
                desc: "Uses dynamic rate tracking to charge at low tariff windows and discharge during load peaks.",
                icon: <TrendingUp className="w-5 h-5 text-indigo-500 group-hover:text-white" />,
                tag: "Arbitrage"
              },
              {
                title: "Fault diagnosis",
                desc: "Detects failing contactors, communications dropouts, and high resistance connections instantly.",
                icon: <Wrench className="w-5 h-5 text-teal-500 group-hover:text-white" />,
                tag: "Diagnostics"
              },
              {
                title: "Cell-Level monitoring",
                desc: "Tracks volt and temp parameters at individual cell groups to identify weak containers.",
                icon: <Layers className="w-5 h-5 text-emerald-500 group-hover:text-white" />,
                tag: "Granularity"
              },
              {
                title: "SCADA & third-party integration",
                desc: "Connects with plant controllers and utility centers via Modbus TCP, DNP3, and IEC 104 drivers.",
                icon: <Monitor className="w-5 h-5 text-sky-500 group-hover:text-white" />,
                tag: "Connectivity"
              },
              {
                title: "Grid support (CEA regulations)",
                desc: "Guarantees full compliance with Central Electricity Authority rules for active/reactive power dispatch.",
                icon: <Globe className="w-5 h-5 text-primary group-hover:text-white" />,
                tag: "Compliance"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-[28px] border border-slate-200/80 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ease-out h-full flex flex-col justify-between overflow-hidden hover:-translate-y-2 hover:scale-[1.01] p-8 text-left">
                  
                  {/* Subtle top-right ambient hover highlight */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/[0.03] group-hover:bg-primary/[0.08] rounded-full blur-2xl transition-colors duration-500 pointer-events-none"></div>
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary text-[10px] font-mono font-bold rounded-full tracking-wider transition-all duration-300">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100/85 relative z-10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>

                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HYBRID PLANT INTEGRATION (Dark background) */}
      <section className="py-24 bg-[#0b0f17] text-white border-t border-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div className="text-left">
                <h2 className="text-4xl font-bold mb-6 font-heading">Hybrid Plant Intelligence</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our EMS seamlessly integrates with Solar, Wind, and Grid assets for intelligent energy dispatch. The AI engine optimizes across all sources in real-time.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: <Sun className="w-8 h-8" />, label: "Solar" },
                    { icon: <Wind className="w-8 h-8" />, label: "Wind" },
                    { icon: <Battery className="w-8 h-8" />, label: "BESS" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-primary/50 hover:shadow-xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="h-full flex items-center select-none pointer-events-none">
                <HybridPlantDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 5. ENERGY STORAGE SOLUTIONS IMAGE SECTION (Light) */}
      <section className="py-20 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div className="text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Grid Stabilization</span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Indigenous EMS for utility-scale BESS integration</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  Optimize battery performance and prolong cell lifecycles. AEPL&apos;s Energy Management System coordinates state-of-charge balancing, schedules charge cycles for peak solar and wind generation, and dispatches stored energy during peak grid pricing hours to maximize commercial arbitrage.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>State of charge optimization algorithms</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Real-time grid support & peak shaving</span>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 select-none pointer-events-none group">
                <img 
                  src="/images/renewable/hybrid_renewable_site.png" 
                  alt="Battery Energy Storage Container" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Dark teal tint overlay */}
                <div className="absolute inset-0 bg-teal-950/20 mix-blend-multiply"></div>
                {/* Deep bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-955/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Battery Storage</p>
                  <h4 className="text-lg font-bold">Utility-Scale BESS Enclosures</h4>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 6. VALUE CREATION (Light-Gray) */}
      <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20">
                <TrendingUp className="w-4 h-4" />
                <span>Financial & Operational Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 leading-tight">
                Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Creation</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Maximize the financial returns and operational safety profiles of your BESS assets.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Maximize asset utilization",
                desc: "Run predictive charging patterns matching solar/wind forecasts to keep round-trip efficiency high.",
                icon: <Zap className="w-5 h-5 text-teal-600" />,
                tag: "Utilization"
              },
              {
                title: "Assure system safety",
                desc: "Implements module-level cutoff triggers and cell monitoring to eliminate thermal runaway risks.",
                icon: <Shield className="w-5 h-5 text-emerald-600" />,
                tag: "Safety"
              },
              {
                title: "Cost reduction",
                desc: "Prevents high peak utility demand rates through automated high-load discharge scheduling.",
                icon: <DollarSign className="w-5 h-5 text-cyan-600" />,
                tag: "Cost Control"
              },
              {
                title: "Improves system availability",
                desc: "Continuous cell health tracking avoids unscheduled bank dropouts and capacity limitations.",
                icon: <Activity className="w-5 h-5 text-indigo-600" />,
                tag: "Availability"
              },
              {
                title: "Avoid penalties",
                desc: "Guarantees grid commands are met in sub-seconds, avoiding solar/wind deviation charges.",
                icon: <FileCheck className="w-5 h-5 text-teal-600" />,
                tag: "Grid Compliance"
              },
              {
                title: "Optimized revenue",
                desc: "Stacks revenue generation channels, supporting simultaneous arbitrage and ancillary markets.",
                icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
                tag: "Revenue Stack"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="group bg-white rounded-3xl border border-slate-200/70 hover:border-teal-500/30 p-8 shadow-sm hover:shadow-xl hover:shadow-teal-500/[0.02] transition-all duration-300 flex items-start gap-6 h-full text-left">
                  {/* Left Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-105 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Right Content */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-teal-600 uppercase tracking-wider block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OTHER SOLUTIONS (Light) */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                Unified Renewable Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.</p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { href: "/renewable/unified/scada", label: "SCADA", abbr: "SCADA", icon: <Monitor className="w-5 h-5" />, desc: "Scalable SCADA architecture with rich renewable libraries handling millions of real-time tags." },
              { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all your renewable assets." },
              { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, custom report builder and historical analysis." },
              { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
              { href: "/renewable/unified/cmms", label: "Computerised Maintenance Management", abbr: "CMMS", icon: <Wrench className="w-5 h-5" />, desc: "Automated work orders, SOPs and inventory management for O&M teams." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <Link href={sol.href} className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/80 rounded-3xl hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      {sol.abbr}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
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

                  <div className="flex items-center gap-1.5 text-primary font-bold text-sm mt-6 group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA (Dark) */}
      <section className="py-20 bg-slate-950 text-center relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-900">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready for Energy Storage?</h2>
            <p className="text-gray-400 mb-8 text-base">Explore how our indigenous EMS solution can maximize your BESS ROI.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Get EMS Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
