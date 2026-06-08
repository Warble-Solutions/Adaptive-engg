"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Settings, 
  Smartphone,
  CheckCircle,
  Database,
  TrendingUp,
  Sliders,
  Sparkles,
  Droplet
} from "lucide-react";
import { useState } from "react";
import { SolarProDashboard } from "@/components/DashboardMockups";
import SceneTrigger from "@/components/3d/SceneTrigger";

export default function SolarWizClient() {
  const [activeTab, setActiveTab] = useState<"monitor" | "analyze" | "om">("monitor");

  const tabContents = {
    monitor: {
      title: "Monitor Renewable Assets from Anywhere",
      subtitle: "Rich Set of Dashboards to Enhance Plant Performance",
      bullets: [
        {
          title: "Central Portfolio Dashboards",
          desc: "Monitor your entire distributed renewable portfolio from a single, centralized pane of glass."
        },
        {
          title: "Site Dashboards for Plant KPIs",
          desc: "Gain deep visibility into overall site performance ratio (PR), capacity utilization factor (CUF), and active power output."
        },
        {
          title: "Equipment Performance Dashboards",
          desc: "Granular monitoring for weather monitoring stations (WMS), solar inverters, strings, transformers, multi-function energy meters, and switchgear panels."
        },
        {
          title: "Real-time Trends & Analytics",
          desc: "Continuous parameter polling and visualization of electrical trends to check asset health and identify operational anomalies."
        },
        {
          title: "Customizable Themes",
          desc: "Switch between modern dark and high-contrast light color themes tailored for control room monitors and office dashboards."
        }
      ]
    },
    analyze: {
      title: "Analyze Asset Performance",
      subtitle: "Advanced Analytic Toolset to Convert Telemetry into Actionable Insights",
      bullets: [
        {
          title: "Advanced Analytics Library",
          desc: "Run pre-commissioned machine learning models to compare yield profiles, detect panel degradation, and identify string clipping."
        },
        {
          title: "Performance Benchmarking",
          desc: "Compare the 'Best' and 'Worst' performing assets across different geographic locations to isolate underperforming configurations."
        },
        {
          title: "Loss Bucket & Soiling Analysis",
          desc: "Calculate environmental soiling losses and inverter efficiency losses to optimize maintenance schedules."
        },
        {
          title: "Root Cause Diagnostics",
          desc: "Automated fault diagnostics trace inverter trips and string failures back to their root cause, avoiding prolonged downtime."
        }
      ]
    },
    om: {
      title: "Optimize Operations & Maintenance",
      subtitle: "Streamline Workflows and Maintenance Schedulers",
      bullets: [
        {
          title: "Smart Tickets Generation",
          desc: "Automated ticket dispatch upon anomaly detection, directing field technicians to the exact device requiring attention."
        },
        {
          title: "Maintenance Scheduler",
          desc: "Set and track preventive maintenance tasks, panel cleaning schedules, and safety inspections."
        },
        {
          title: "WhatsApp & Email Alerts",
          desc: "Receive immediate, high-priority notifications regarding critical grid trips or communication failure events."
        },
        {
          title: "Mobile Asset Management",
          desc: "Equip your field engineering team with a mobile-friendly view of active alarms, asset logs, and maintenance checksheets."
        }
      ]
    }
  };

  const stats = [
    { value: "17+", label: "Years of Experience" },
    { value: "68 GW+", label: "Installed Base" },
    { value: "8 GW+", label: "PPC Solar" },
    { value: "19+", label: "States of India Benefiting" },
    { value: "100+", label: "Satisfied Customers" }
  ];

  const valueCreations = [
    {
      title: "Single Dashboard Portfolio",
      desc: "Monitor and analyze all geographically scattered renewable assets on a unified central dashboard."
    },
    {
      title: "Decrease Breakdown Losses",
      desc: "Detect degradation anomalies and equipment trips instantly to increase generation and maximize profitability."
    },
    {
      title: "Scalable Architecture",
      desc: "Flexible, cloud-native architecture supporting future capacity expansions without infrastructure upgrades."
    },
    {
      title: "Cross-Asset Comparisons",
      desc: "Easily compare historical performance profiles across different sites, manufacturers, and string layouts."
    },
    {
      title: "Root Cause Diagnosis",
      desc: "Diagnose root causes of generation drops, allowing for fast, targeted field maintenance."
    }
  ];

  const featuresList = [
    { title: "Flexibility", desc: "In-Premise and Cloud Supported Solutions." },
    { title: "Lightweight Structure", desc: "Low-latency telemetry data structure minimizing bandwidth." },
    { title: "OEM Independent", desc: "Integrate any inverter brand (Solis, Growatt, Sungrow, Delta, Kehua) via a single platform." },
    { title: "Multi-protocol Connectors", desc: "OPC UA / MQTT / API / Modbus TCP connectors." },
    { title: "SSL Security & Encryption", desc: "User management with 128-bit SSL certifications to enhance cyber security." },
    { title: "Mobile O&M Platform", desc: "Receive automated alarms and ticket schedules directly on the field mobile app." }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950/40 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* 1. HERO (Dark with background image and transparent overlay) */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/solar_farm_aerial.png" alt="Solar Farm Aerial" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(13,160,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,160,138,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0da08a]/10 rounded-full blur-[160px] pointer-events-none"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative text-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0da08a]/10 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#0da08a]/20">
              <Zap className="w-4 h-4 text-[#0da08a]" />
              <span>Renewable Telemetry Suite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading tracking-tight leading-none">
              Solar<span className="text-[#0da08a]">Wiz</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-6">
              Central Monitoring Portal designed to monitor and analyze renewable power assets across geographies, driving down operational costs and boosting generation.
            </p>
            <div className="text-sm text-[#0da08a] font-bold uppercase tracking-wider mb-8 flex justify-center items-center gap-2">
              <Sparkles className="w-4 h-4" /> 17+ Years of Industry Expertise
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Stats Bar (Light) */}
      <section className="py-12 bg-white text-slate-900 border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-black text-[#0da08a] font-heading">{stat.value}</span>
                  <span className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 3. Our Expertise / Introduction (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0da08a]/10 border border-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Expertise
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Centralized Solar NOC Operations
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We at Adaptive Engineering Pvt. Ltd. are pleased to introduce the Central Monitoring Portal “SolarWiz”. SolarWiz offers a great experience to monitor and analyze plants across geographies at a central location.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  It collects, aggregates, presents, and executes different data model algorithms to calculate individual plant KPIs. Benefit from complete installation of Solar Plant Monitoring Solutions in-line with tailored specifications and fast, reliable project execution.
                </p>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-7">
              <SectionWrapper delay={0.1}>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl h-[360px] md:h-[420px]">
                  <img 
                    src="/imgs/industrial-iot/solar_telemetry_hero.png" 
                    alt="Solar Telemetry Control Center" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Overview: Edge vs Cloud (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Two Powerful Components</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              SolarWiz is built on a two-tier architecture — ruggedized edge hardware paired with an enterprise-grade cloud platform.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* SolarEdge */}
            <SectionWrapper delay={0.1}>
              <div className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-[#0da08a]/35 transition-all duration-300">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">Hardware</div>
                  <h3 className="text-3xl font-black text-white font-heading mb-4">SolarEdge</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    An IoT-based Edge Computing Device to acquire data from renewable asset equipment. It comprises intelligent data pre-processing and synchronization with SolarPro. The SolarEdge device stores and forwards data during cloud connection interruptions and restores it automatically.
                  </p>
                </div>
                
                {/* Real solaredge device photo */}
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/5 relative mb-6">
                  <img 
                    src="/imgs/solaredge.webp" 
                    alt="SolarEdge IoT Device" 
                    className="w-full h-full object-contain bg-slate-900/80 p-4" 
                  />
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Intelligent local data filtration</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Store-and-forward backup logic during outages</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* SolarPro */}
            <SectionWrapper delay={0.2}>
              <div className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-[#0da08a]/35 transition-all duration-300">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">Software</div>
                  <h3 className="text-3xl font-black text-white font-heading mb-4">SolarPro</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    A cloud-based comprehensive, highly secure, available, reliable, and scalable software package for data monitoring, analysis, reporting, operations and maintenance (O&M), and multi-plant configuration management.
                  </p>
                </div>

                {/* SolarPro dashboard mockup component */}
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/5 relative mb-6 bg-slate-900">
                  <SolarProDashboard />
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Centralized Multi-Plant Configurations</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>In-built reports library & diagnostics</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 5. System Architecture Diagram - WHITE BACKGROUND UNDER IMAGE (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0da08a]/10 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0da08a]/20">
              Pipeline schematic
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading mb-4">Architecture</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mt-4">
              End-to-end data pipeline from physical field instruments to centralized monitoring applications and organizational personas.
            </p>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="p-8 bg-white rounded-[32px] shadow-xl max-w-5xl mx-auto border border-slate-200">
              <img 
                src="/imgs/industrial-iot/solar_architecture.png" 
                alt="SolarWiz System Integration Architecture" 
                className="w-full h-auto rounded-2xl" 
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 6. Interactive Features Tab Section (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-20 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Comprehensive Platform Functions</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Explore the detailed features of the SolarWiz software package, built to streamline operations and enhance generation.
            </p>
          </SectionWrapper>

          {/* Tab buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeTab === tab 
                    ? "bg-[#0da08a] border-[#0da08a] text-white shadow-lg shadow-[#0da08a]/20" 
                    : "bg-slate-900/60 border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {tab === "monitor" ? "Monitor" : tab === "analyze" ? "Analyze" : "O&M Operations"}
              </button>
            ))}
          </div>

          {/* Tab Body */}
          <SectionWrapper key={activeTab}>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">{tabContents[activeTab].title}</h3>
              <p className="text-[#0da08a] text-xs font-semibold tracking-wider uppercase mb-8">{tabContents[activeTab].subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tabContents[activeTab].bullets.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0da08a]/10 flex items-center justify-center text-[#0da08a] shrink-0">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 7. Platform Features Grid (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading">Features &amp; Benefits</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mt-4">
              OEM independent integration, secure lightweight protocols, and cloud flexibility built to scale.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feat, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0da08a]/40 shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-[#0da08a]/10 rounded-xl flex items-center justify-center text-[#0da08a] mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Value Creation (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Value Creation</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              How our telemetry portal translates into direct improvements in operational efficiency and generation.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {valueCreations.map((val, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-[#0da08a]/20 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">{val.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-[#0da08a] gap-1.5 uppercase">
                    Value Delivered <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Other IoT Products Grid (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 font-heading">Explore the Industrial IoT Suite</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mt-4">
              Adaptive Engineering provides specialized solutions for water telemetry and smart manufacturing applications.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WaterWiz */}
            <SectionWrapper>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0da08a]/30 transition-all duration-300 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-[#0da08a]/10 rounded-xl flex items-center justify-center text-[#0da08a] mb-6">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">WaterWiz</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Electrical, instrumentation, and automation solutions for the water industry, including drinking, wastewater, and effluent treatment.
                  </p>
                </div>
                <Link href="/industrial-iot/waterwiz" className="text-xs font-bold text-[#0da08a] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Explore WaterWiz <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* MachineWiz */}
            <SectionWrapper>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0da08a]/30 transition-all duration-300 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-[#0da08a]/10 rounded-xl flex items-center justify-center text-[#0da08a] mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">MachineWiz</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Achieve operational excellence with predictive maintenance, condition monitoring, production logging, and shop-floor ML analytics.
                  </p>
                </div>
                <Link href="/industrial-iot/machinewiz" className="text-xs font-bold text-[#0da08a] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Explore MachineWiz <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 10. CTA (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-24 text-center relative z-10 bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Ready to Deploy SolarWiz?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with AEPL for robust edge computing devices and high-performance cloud telemetry.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] hover:bg-[#0bc2a5] text-white rounded-full font-bold transition-all shadow-lg shadow-[#0da08a]/20">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
