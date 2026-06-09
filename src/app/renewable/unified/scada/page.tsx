import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Monitor, Shield, Database, Cpu, Settings, CheckCircle2, Layers, BarChart3, Workflow, Eye, Zap, Wrench, Battery } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";
import { ScadaHeroDashboard, PlantOverviewDashboard, AlarmConsoleDashboard, ScadaMonitoringDashboard } from "@/components/DashboardMockups";

export const metadata = {
 title: "SCADA Solutions | Adaptive Engineering",
 description: "Flexible & scalable SCADA architecture with rich renewable libraries and seamless handling of 10 Lakh+ tags.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 {/* HERO — Split layout: text left, dashboard right */}
 <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
 {/* Background Image with Tint */}
 <div className="absolute inset-0 z-0">
  <img src="/images/renewable/scada-hero-bg.png" alt="SCADA Solutions" className="w-full h-full object-cover" />
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
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
 <Monitor className="w-4 h-4" />
 <span>Unified Renewable Solution</span>
 </div>
 <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading">
 <span className="gradient-heading">SCADA</span>
 </h1>
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
 Flexible & scalable SCADA architecture with rich renewable libraries, handling millions of tags with a refined interface built from decades of field experience.
 </p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Schedule Consultation <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </SectionWrapper>

 {/* Right — Dashboard */}
 <SectionWrapper delay={0.3}>
 <div className="h-[440px] hidden lg:block">
 <ScadaHeroDashboard />
 </div>
 </SectionWrapper>
 </div>
 </div>
 {/* Scroll indicator */}
 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10 animate-bounce">
 <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
 </div>
 </section>

 {/* CORE CAPABILITIES */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Core Capabilities</h2>
 <p className="text-slate-500 max-w-2xl mx-auto text-lg">Enterprise-grade SCADA built specifically for renewable energy operations.</p>
 </div>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {[
 { icon: <Layers className="w-7 h-7" />, title: "Flexible & Scalable Architecture", desc: "From 50MW single-site to multi-GW portfolios. Our modular SCADA scales horizontally without performance degradation.", color: "bg-teal-50 text-teal-600" },
 { icon: <Database className="w-7 h-7" />, title: "Rich Renewable Libraries", desc: "Pre-built driver libraries for all major inverter, turbine, and BESS manufacturers. Reduces commissioning time by 60%.", color: "bg-teal-50 text-teal-600" },
 { icon: <BarChart3 className="w-7 h-7" />, title: "Seamless Handling of 10 Lakh+ tags", desc: "Optimized data engine capable of processing over 10 Lakh+ real-time tags in a single project without latency.", color: "bg-teal-50 text-teal-600" },
 { icon: <Settings className="w-7 h-7" />, title: "Refined Interface from Decades of Experience", desc: "Intuitive HMI screens developed through decades of operator feedback. Contextual alarms, trend analysis, and one-click diagnostics.", color: "bg-teal-50 text-[#0da08a]" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group p-8 bg-white rounded-2xl border border-primary/30 hover:border-primary/50 hover:shadow-xl shadow-2xl -translate-y-2 transition-all duration-500 h-full">
 <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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

 {/* SPECIALIZED DOMAIN OFFERINGS */}
 <section className="py-24 bg-slate-50 relative z-20 -mt-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Proven Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Specialized Domain Offerings</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Custom SCADA applications developed for specific utility-scale renewable setups.</p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Tracker SCADA & Solutions",
            desc: "Highly robust closed-loop solar tracking control algorithms and diagnostic monitoring. Deployed and operational at over 61 utility-scale sites across India.",
            badge: "Tracker SCADA"
          },
          {
            title: "Substation Automation System (SAS)",
            desc: "Dedicated IEC 61850-compliant Substation Automation Systems providing reliable bay control, monitoring, and switchgear protection interface.",
            badge: "SAS Integration"
          },
          {
            title: "Floating Solar SCADA",
            desc: "AEPL has successfully engineered and commissioned one of India's largest Floating Solution SCADA Systems, handling complex weather telemetry and marine electrical configurations.",
            badge: "Floating Solar"
          }
        ].map((item, i) => (
          <SectionWrapper key={i} delay={i * 0.1}>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold mb-4">{item.badge}</span>
                <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>

  {/* WIND SCADA SOLUTIONS */}
  <section className="py-24 bg-white relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Wind Energy</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Wind SCADA Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">OEM-independent supervisory control and data acquisition for utility-scale wind parks.</p>
        </div>
      </SectionWrapper>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Image */}
        <div className="lg:col-span-5">
          <SectionWrapper>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[380px]">
              <img src="/imgs/case-studies/khavda-hybrid-plant.png" alt="Wind Turbine SCADA" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/40"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Wind Assets</p>
                <h4 className="text-lg font-bold">Multi-OEM WTG Performance Analysis</h4>
              </div>
            </div>
          </SectionWrapper>
        </div>
        
        {/* Right column: Details */}
        <div className="lg:col-span-7 space-y-6">
          <SectionWrapper delay={0.2}>
            <h3 className="text-2xl font-bold text-slate-950 font-heading">Trusted Solutions: Highly secure, scalable, real-time supervisory control</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              AEPL Wind SCADA delivers operational excellence by aggregating telemetry data from geographically scattered wind turbines. We provide seamless integration with wind Substation Automation Systems (SAS) as per IEC standards, wind speed sensors, and third-party generation forecast data feeds.
            </p>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Monitor KPIs of WTGs irrespective of OEM",
              "Compare multiple wind asset performance",
              "Identify best performing WTG across geographies",
              "Integrate wind speed sensors & weather telemetry",
              "Third-party generation forecast data integration",
              "Increase turbine availability & reduce downtime"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

 {/* INTEGRATION PROTOCOLS */}
 <section className="py-24 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-16">
 <h2 className="text-3xl font-bold font-heading mb-4">Supported Protocols & Devices</h2>
 <p className="text-gray-400 max-w-xl mx-auto">Native protocol support for seamless integration across your entire plant ecosystem.</p>
 </div>
 </SectionWrapper>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {["IEC 61850", "Modbus TCP/RTU", "OPC UA", "DNP3", "IEC 104", "MQTT", "HTTP/REST API", "Profinet"].map((protocol, i) => (
 <SectionWrapper key={i} delay={i * 0.05}>
 <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-primary/50 hover:shadow-xl /10 hover:bg-white/10 border-primary/30 transition-all duration-300 group">
 <Cpu className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
 <span className="font-bold text-sm text-white">{protocol}</span>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* REAL-WORLD OPERATIONS IMAGE SECTION */}
 <section className="py-20 bg-slate-50 relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
 <img 
 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
 alt="SCADA Software Dashboard" 
 className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
 <div className="absolute bottom-6 left-6 text-white">
 <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Software Platform</p>
 <h4 className="text-lg font-bold">Real-Time SCADA Telemetry Interface</h4>
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div>
 <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Enterprise Reliability</span>
 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Engineered for uninterrupted grid visualization</h3>
 <p className="text-slate-600 leading-relaxed mb-6">
 Our SCADA installations are built for maximum uptime and rugged environments. From hot desert solar farms to remote offshore wind installations, the platform processes millions of data points every second, feeding critical real-time information to local operator screens and regional control centers.
 </p>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>Industrial-grade hardware compatibility</span>
 </div>
 <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
 <CheckCircle2 className="text-primary w-5 h-5" />
 <span>High-availability failover architectures</span>
 </div>
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* SCADA IN ACTION — Interactive Dashboards */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center font-heading">SCADA in Action</h2>
 <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">Interactive preview of our SCADA interface screens</p>
 </SectionWrapper>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <SectionWrapper delay={0.1}>
 <div className="h-80">
 <ScadaMonitoringDashboard />
 </div>
 <p className="text-center text-sm font-bold text-slate-700 mt-4">Real-Time Monitoring</p>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="h-80">
 <PlantOverviewDashboard />
 </div>
 <p className="text-center text-sm font-bold text-slate-700 mt-4">Plant Overview</p>
 </SectionWrapper>
 <SectionWrapper delay={0.3}>
 <div className="h-80">
 <AlarmConsoleDashboard />
 </div>
 <p className="text-center text-sm font-bold text-slate-700 mt-4">Alarm Management</p>
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
    { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all your renewable assets." },
    { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, custom report builder and historical analysis." },
    { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
    { href: "/renewable/unified/cmms", label: "Computerised Maintenance Management", abbr: "CMMS", icon: <Wrench className="w-5 h-5" />, desc: "Automated work orders, SOPs and inventory management for O&M teams." },
    { href: "/renewable/unified/ems-bess", label: "Energy Management System", abbr: "EMS-BESS", icon: <Battery className="w-5 h-5" />, desc: "ML-based energy arbitrage, SoC management, and peak shaving for battery storage." },
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
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Modernize Your SCADA?</h2>
 <p className="text-gray-400 mb-8 text-lg">Talk to our SCADA engineers to design a system tailored to your plant requirements.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Schedule Consultation <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
