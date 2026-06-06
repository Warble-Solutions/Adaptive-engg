import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Battery, Zap, BarChart3, TrendingUp, Sun, Wind, CheckCircle2, Activity, Shield, Clock, DollarSign, Monitor, Eye, Wrench, AlertTriangle, Layers } from "lucide-react";
import { EMSHeroDashboards, HybridPlantDashboard } from "@/components/DashboardMockups";

export const metadata = {
 title: "Energy Management System - BESS | Unified Renewable Solutions | Adaptive Engineering",
 description: "Indigenous EMS solution for Battery Energy Storage Systems — ML-based energy arbitrage, SoC management, peak shaving, and grid support.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
  {/* HERO — Split Layout */}
  <section className="section-hero relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
   {/* Background Image with Tint */}
   <div className="absolute inset-0 z-0">
    <img src="/images/renewable/ems-bess-hero-bg.png" alt="EMS-BESS Solutions" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-slate-950/85"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
   </div>

   <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
   </div>
 
 <div className="z-10 max-w-7xl mx-auto w-full relative">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
 Indigenous solution for Battery Energy Storage Systems with ML-based energy arbitrage, state of charge management, peak shaving, and grid support.
 </p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Request Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </SectionWrapper>

 {/* Right — Dashboards */}
 <SectionWrapper delay={0.3}>
 <div className="hidden lg:block h-[500px]">
 <EMSHeroDashboards />
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* CORE CAPABILITIES CARDS */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">EMS Capabilities</h2>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {[
 { icon: <Zap className="w-8 h-8" />, title: "Indigenous Solution", desc: "Built entirely in-house by AEPL engineers. No dependency on foreign OEMs. Full control over algorithms, updates, and customizations.", gradient: "from-teal-500 to-teal-500" },
 { icon: <BarChart3 className="w-8 h-8" />, title: "ML Based Energy Arbitrage", desc: "Machine learning algorithms optimize charge/discharge cycles based on real-time electricity pricing, demand forecasting, and weather patterns.", gradient: "from-teal-500 to-teal-500" },
 { icon: <Battery className="w-8 h-8" />, title: "State of Charge (SoC) Management", desc: "Advanced battery management algorithms maintain optimal SoC to maximize battery life while meeting operational requirements. Cell-level balancing.", gradient: "from-teal-500 to-teal-500" },
 { icon: <Shield className="w-8 h-8" />, title: "Peak Shaving & Grid Support", desc: "Reduce peak demand charges, provide frequency regulation, and support grid stability during renewable intermittency events.", gradient: "from-teal-500 to-teal-500" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group p-10 bg-white rounded-3xl border border-slate-100 hover:border-primary/50 hover:shadow-xl shadow-2xl -translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
 <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
 <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg relative`}>
 <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity animate-pulse`}></div>
 {item.icon}
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
 <p className="text-slate-500 leading-relaxed">{item.desc}</p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

  {/* FEATURES & BENEFITS */}
  <section className="py-24 bg-slate-50 border-t border-slate-100 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Comprehensive Features</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Features & Benefits</h2>
          <p className="text-slate-600 leading-relaxed">
            Our Energy Management System provides a highly detailed feature set to supervise, automate, and protect utility-scale battery storage installations.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Activity className="w-5 h-5 text-teal-600" />, title: "Data Acquisition & Real-Time Monitoring", desc: "Supervise active power, state of charge, temperatures, and cell voltages instantly with direct Modbus and OPC UA connections." },
          { icon: <BarChart3 className="w-5 h-5 text-teal-600" />, title: "Advanced Analytics", desc: "Gain deep visibility into system performance with calculations of efficiency, battery health index, and cycle counts." },
          { icon: <Battery className="w-5 h-5 text-teal-600" />, title: "Cell-Level Monitoring", desc: "Supervise internal cell balance, temperature thresholds, and charge ratios to prevent single-cell wear from affecting the pack." },
          { icon: <Clock className="w-5 h-5 text-teal-600" />, title: "Time-of-Use (ToU) Optimization", desc: "Shift energy automatically. Charge during low-tariff hours and discharge during peak-rate periods to capture arbitrage revenue." },
          { icon: <Layers className="w-5 h-5 text-teal-600" />, title: "Multiple Operating Modes", desc: "Run your BESS under diverse strategies including peak shaving, solar-following, load-following, and frequency support." },
          { icon: <Shield className="w-5 h-5 text-teal-600" />, title: "Grid Code Compliance", desc: "Strict adherence to national utility grid limits for active and reactive power limits, voltage ride-through, and ramp controls." },
          { icon: <Zap className="w-5 h-5 text-teal-600" />, title: "Intelligent Control", desc: "State-of-charge tracking algorithms that dynamically manage charge/discharge rates to prioritize cell temperature and health." },
          { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, title: "Peak Shaving & Load Shifting", desc: "Avoid peak demand tariffs by shaving load spikes. Keep facility consumption under specified utility thresholds." },
          { icon: <AlertTriangle className="w-5 h-5 text-teal-600" />, title: "Fault Management & Diagnostics", desc: "Real-time alerts, remote emergency stops, and diagnostic logs to flag cell drift or thermal anomalies before they scale." },
          { icon: <Monitor className="w-5 h-5 text-teal-600" />, title: "SCADA & Third-Party Integration", desc: "Interface seamlessly with centralized SCADA controls, local HMIs, or third-party power scheduling dashboards." },
        ].map((item, i) => (
          <SectionWrapper key={i} delay={i * 0.05}>
            <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>

 {/* HYBRID INTEGRATION */}
 <section className="py-24 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
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
 <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-primary/50 hover:shadow-xl /10 hover:bg-white/10 border-primary/30 transition-all">
 <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
 <span className="text-sm font-bold text-white">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="h-full flex items-center">
 <HybridPlantDashboard />
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

  {/* ENERGY STORAGE SOLUTIONS IMAGE SECTION */}
  <section className="py-20 bg-slate-50 relative z-20">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  <SectionWrapper>
  <div>
  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Grid Stabilization</span>
  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Indigenous EMS for utility-scale battery integration</h3>
  <p className="text-slate-600 leading-relaxed mb-6">
  Optimize battery performance and prolong cell lifecycle. AEPL's Energy Management System coordinates state-of-charge balancing, schedules charge cycles for peak solar generation, and dispatches stored energy during peak grid pricing hours to maximize commercial arbitrage.
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
  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
  <img 
  src="/imgs/banner/hero_renewable_solar_bess.png" 
  alt="Battery Energy Storage Container" 
  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
  <div className="absolute bottom-6 left-6 text-white">
  <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Battery Storage</p>
  <h4 className="text-lg font-bold">Utility-Scale BESS Enclosures</h4>
  </div>
  </div>
  </SectionWrapper>
  </div>
  </div>
  </section>

  {/* VALUE CREATION & COST OPTIMIZATION */}
  <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-900 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">Financial & Operational Benefits</span>
          <h2 className="text-4xl font-bold mb-6 font-heading">Value Creation & Cost Optimization</h2>
          <p className="text-gray-400 leading-relaxed">
            Maximize your battery assets' lifecycle value while minimizing operational expenses and demand penalties.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Value Creation Card */}
        <SectionWrapper delay={0.1}>
          <div className="p-8 md:p-10 bg-white/5 border border-white/10 hover:border-teal-500/40 rounded-3xl transition-all duration-500 h-full flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 border border-teal-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Value Creation</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "SoC-Balanced Asset Lifespan",
                    desc: "Maximize battery life through balanced SoC utilization. Dynamic cell balancing prevents localized hotspot stress and slow capacity fade."
                  },
                  {
                    title: "Revenue Stacking Capabilities",
                    desc: "Optimized revenue generation from multiple concurrent use cases. Participate in frequency response, arbitrage, and reserve markets simultaneously."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-extrabold text-slate-100 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Cost Optimization Card */}
        <SectionWrapper delay={0.2}>
          <div className="p-8 md:p-10 bg-white/5 border border-white/10 hover:border-teal-500/40 rounded-3xl transition-all duration-500 h-full flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 border border-teal-500/20">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Cost Optimization</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Reduced Peak Demand Charges",
                    desc: "Supervise load thresholds and auto-discharge during peak facility draw windows, dramatically cutting monthly utility demand rates."
                  },
                  {
                    title: "Thermal Runaway Prevention",
                    desc: "Supervise temperature anomalies at the module level. Early cutoff stops fire risks and avoids catastrophic asset replacement costs."
                  },
                  {
                    title: "Minimizing Energy Losses",
                    desc: "Improves system round-trip efficiency by scheduling charges and cooling systems at optimal thermal intervals."
                  },
                  {
                    title: "Maximized Asset Revenue & Utilization",
                    desc: "Run predictive simulations to allocate storage dispatch when market rates are highest, maximizing cash generation."
                  },
                  {
                    title: "Penalty Avoidance",
                    desc: "Avoid grid curtailment and capacity penalties with lightning-fast response times that match utility ramp commands."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-extrabold text-slate-100 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  </section>

 {/* OTHER SOLUTIONS */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
 Unified Renewable Suite
 </div>
 <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
 <p className="text-slate-500 mt-3 max-w-xl mx-auto">Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.</p>
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
      <Link href={sol.href} className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/80 rounded-3xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-left">
        {/* Subtle top-right ambient hover highlight */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Category Abbr Pill */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
            {sol.abbr}
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
            {sol.icon}
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
            {sol.label}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed flex-grow">
            {sol.desc}
          </p>
        </div>

        {/* Learn More Action Link */}
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

 {/* CTA */}
 <section className="py-20 bg-white text-center relative z-20">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Ready for Energy Storage?</h2>
 <p className="text-slate-500 mb-8 text-lg">Explore how our indigenous EMS solution can maximize your BESS ROI.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
 Get EMS Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
