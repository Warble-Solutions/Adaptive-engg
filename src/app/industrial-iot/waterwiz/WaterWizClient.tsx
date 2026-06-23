"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, 
  Droplet, 
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
  Zap
} from "lucide-react";
import { useState } from "react";
import SceneTrigger from "@/components/3d/SceneTrigger";
import FAQSection from "@/components/FAQSection";


export default function WaterWizClient() {
  const [activeTab, setActiveTab] = useState<"monitor" | "analyze" | "reporting" | "om" | "integrations">("monitor");

  const tabContents = {
    monitor: {
      title: "Monitor Water Schemes from Anywhere",
      subtitle: "Rich Set of Dashboards to Enhance Plant Performance",
      bullets: [
        { title: "Central dashboards to monitor entire Water Schemes / Treatment Plants", desc: "" },
        { title: "Scheme dashboards for Plant KPIs", desc: "" },
        { title: "Equipment dashboards for Performance Enhancement (MFM, Flow Meters, Chlorine / Turbidity Analysers, Level Sensors)", desc: "" },
        { title: "Display of parameter values and trends to get more insights on Quality and Quantity parameters", desc: "" },
        { title: "Choose your own Color Themes", desc: "" }
      ]
    },
    analyze: {
      title: "Analyze Asset Performances",
      subtitle: "Advanced Analytic Toolset to convert data into action",
      bullets: [
        { title: "Advanced Analytics Tools Library", desc: "" },
        { title: "Compare the ‘Best’ and ‘Worst’ performing Schemes", desc: "" },
        { title: "Diagnose the root cause of performance", desc: "" },
        { title: "Cross-Scheme comparison of performance parameters", desc: "" },
        { title: "Export Analysis results to Third Party Software (e.g. Microsoft Power BI)", desc: "" }
      ]
    },
    reporting: {
      title: "Reporting",
      subtitle: "Customized reports to figure out root cause of any event",
      bullets: [
        { title: "In-Built Reports Library", desc: "" },
        { title: "Customizable Report Views", desc: "" },
        { title: "Set Higher and Lower Value Range for parameters of all devices", desc: "" },
        { title: "Visualize and Categorize Parameter Values Effecting Performance", desc: "" },
        { title: "Variety of Supported Report Formats", desc: "" },
        { title: "Export Reports to Third Party Software (e.g. Microsoft Power BI)", desc: "" }
      ]
    },
    om: {
      title: "Multi-Scheme Configuration And O&M",
      subtitle: "Fast and Intuitive Plant Configuration",
      bullets: [
        { title: "Support multiple and geographical Water Supply Schemes through a common control center", desc: "" },
        { title: "Minimize downtime and maximize generations and profitability", desc: "" },
        { title: "Transform Raw data into valuable insights.", desc: "" }
      ]
    },
    integrations: {
      title: "Third-Party Integrations",
      subtitle: "Integrate with Third-Party Systems",
      bullets: [
        { title: "Asset Management Software", desc: "" },
        { title: "Integration with District/ State/National level Water Management Agencies", desc: "" },
        { title: "Third party Application Server Integration", desc: "" }
      ]
    }
  };

  const waterStats = [
    { value: "120+", label: "ETP/STP Deployments" },
    { value: "500+", label: "Sensors Integrated" },
    { value: "15+", label: "Municipal Boards Served" },
    { value: "99.9%", label: "Uptime & Compliance" }
  ];

  const valueCreations = [
    {
      title: "Single Dashboard Utility Portfolio",
      desc: "Monitor and analyze all scattered water distribution reservoirs, pumping stations, and STPs/ETPs on a unified central dashboard."
    },
    {
      title: "Reduce Water Wastage & NRW",
      desc: "Detect leaks and distribution imbalances in real-time, helping municipalities minimize Non-Revenue Water losses."
    },
    {
      title: "Optimized Power Usage",
      desc: "Integrate pump scheduling algorithms based on reservoir levels and electricity tariffs to lower energy bills."
    },
    {
      title: "100% Pollution Board Compliance",
      desc: "Direct integration with Pollution Control Boards ensures flawless compliance reporting and avoids penalty hazards."
    },
    {
      title: "Predictive Maintenance of Assets",
      desc: "Diagnose cavitation in pumps, leakage in valves, and sensor drift in flowmeters, preventing sudden utility downtime."
    }
  ];

  const iotFeatures = [
    { title: "GPRS & Fiber Uplink", desc: "Supports telemetry over cellular networks, satellite nodes, and local fiber loops." },
    { title: "Lightweight Structure", desc: "Optimized modbus polling cycles that save cellular bandwidth on remote RTUs." },
    { title: "OEM Independent", desc: "Connect any electromagnetic flowmeter or chemical sensor using open protocol standardizers." },
    { title: "Multi-protocol Connectors", desc: "Built-in drivers for MQTT, OPC UA, Modbus TCP/RTU, and standard REST APIs." },
    { title: "SSL Security", desc: "Secure 128-bit SSL encrypted data transport to safeguard critical water telemetry networks." }
  ];

  const complianceParameters = [
    { param: "pH Value", range: "6.5-8.5", method: "Electrometric", boardLimit: "5.5-9.0" },
    { param: "Total Suspended Solids (TSS)", range: "<10mg/L", method: "Gravimetric", boardLimit: "<50mg/L" },
    { param: "Chemical Oxygen Demand (COD)", range: "<30mg/L", method: "Dichromate Reflux", boardLimit: "<250mg/L" },
    { param: "Biochemical Oxygen Demand (BOD)", range: "<5mg/L", method: "3-Day Incubation", boardLimit: "<30mg/L" },
    { param: "Free Residual Chlorine", range: "0.2-0.5mg/L", method: "DPD Colorimetric", boardLimit: "0.2-2.0mg/L" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950/40 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* 1. HERO (Dark with background image and transparent overlay) */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/water-treatment-plant.png" alt="Water Treatment Facility" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(13,160,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,160,138,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0da08a]/10 rounded-full blur-[160px] pointer-events-none"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <SectionWrapper className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0da08a]/10 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#0da08a]/20">
              <Droplet className="w-4 h-4 text-[#0da08a]" />
              <span>Water Telemetry Suite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading tracking-tight leading-none">
              Water<span className="text-[#0da08a]">Wiz</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-6">
              Advanced Electrical, Instrumentation, and Automation Solutions for the water industry. Monitor flow, turbidity, and chemical logs across reservoirs, STPs, and ETPs.
            </p>
            <div className="text-sm text-[#0da08a] font-bold uppercase tracking-wider mb-12 flex justify-center items-center gap-2">
              <Sparkles className="w-4 h-4" /> Customized Drinking Water & Effluent Telemetry
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Stats Bar (Light) */}
      <section className="py-12 bg-white text-slate-900 border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {waterStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-black text-[#0da08a] font-heading">{stat.value}</span>
                  <span className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 3. Utility View (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0da08a]/10 border border-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Real-time Utility View
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Intelligent Flow &amp; Quality Control
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  WaterWiz enables water utilities and plant operators to establish secure, low-latency telemetry pipelines. Real-time dashboards provide central monitoring of scattered pump houses, overhead tanks, and raw water inlets.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Using high-precision MFMs, Chlorine/Turbidity Analysers, Level Sensors, and chemical instrumentation, our telemetry edge controllers parse, validate, and synchronize vital parameter values directly with the WaterPro cloud portal.
                </p>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-7">
              <SectionWrapper delay={0.1}>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl h-[360px] md:h-[420px]">
                  <img 
                    src="/imgs/industrial-iot/water_telemetry_monitoring.png" 
                    alt="Water Telemetry Dashboard Monitor" 
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
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Two-Tier Telemetry Architecture</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              WaterWiz combines localized sensor buffer logic with high-performance cloud analytical applications.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* WaterEdge */}
            <SectionWrapper delay={0.1}>
              <div className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-[#0da08a]/35 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 bg-[#0da08a]/10 rounded-2xl flex items-center justify-center text-[#0da08a] mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-3">WaterEdge</h3>
                  <p className="text-xs text-[#0da08a] uppercase font-black tracking-widest mb-4">IoT Telemetry RTU</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    An IOT based Edge Computing Device to acquire data from Water Supply Schemes Equipments. It comprises Intelligent Data Pre-Processing and Synchronize with WaterPro. The WaterEdge stores and forwards data during Cloud Connection Interruption and Restore.
                  </p>
                </div>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>On-device data preprocessing and filtering</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Store-and-forward backup logic (zero data loss)</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
 
            {/* WaterPro */}
            <SectionWrapper delay={0.2}>
              <div className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-[#0da08a]/35 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 bg-[#0da08a]/10 rounded-2xl flex items-center justify-center text-[#0da08a] mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-3">WaterPro</h3>
                  <p className="text-xs text-[#0da08a] uppercase font-black tracking-widest mb-4">Cloud Monitoring & Compliance Software</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    A cloud-based comprehensive, highly secure, available, reliable and scalable software package for data monitoring, analysis, reporting, O&M and multi-plant configuration.
                  </p>
                </div>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Real-time dashboard for flow, pressure, and quality</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                    <span>Automated daily logs for state water boards</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 5. Wastewater STP/ETP (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-last lg:order-first">
              <SectionWrapper delay={0.1}>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl h-[360px] md:h-[420px]">
                  <img 
                    src="/imgs/industrial-iot/water_treatment_scada.png" 
                    alt="Water Treatment SCADA Plant" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0da08a]/10 border border-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Industrial Compliance
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Wastewater &amp; Effluent STP/ETP Automation
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  For industrial plants, environmental discharge compliance is crucial. WaterWiz provides pre-engineered telemetry packages to monitor ETP and STP discharges.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our software logs total organic carbon, pH level trends, suspended solids (TSS), and chemical oxygen demand (COD), offering automated alarms to operators before quality variables cross the legal state limits.
                </p>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Features Tab Section (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-20 px-6 bg-slate-950/80 backdrop-blur-sm text-white relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Comprehensive Platform Functions</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Explore the core components of the WaterWiz software package, engineered for efficiency and regulatory compliance.
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
                {tab === "monitor" ? "Monitor" 
                  : tab === "analyze" ? "Analyze" 
                  : tab === "reporting" ? "Reporting" 
                  : tab === "om" ? "Configuration & O&M" 
                  : "Third-Party Integrations"}
              </button>
            ))}
          </div>

          {/* Tab Body */}
          <SectionWrapper key={activeTab}>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm max-w-5xl mx-auto mb-16">
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
                      {item.desc ? <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Water quality standard specifications */}
          <SectionWrapper className="max-w-4xl mx-auto">
            <h4 className="text-xl font-bold font-heading text-white mb-6 text-center">Typical Online Continuous Effluent Monitoring Parameters</h4>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-slate-900/20">
              <div className="grid grid-cols-4 bg-slate-900/60 p-4 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/5">
                <div>Parameter Name</div>
                <div>Typical Output</div>
                <div>Measurement Method</div>
                <div>State Board Limit</div>
              </div>
              {complianceParameters.map((spec, i) => (
                <div key={i} className="grid grid-cols-4 p-4 text-sm border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                  <div className="font-bold text-gray-200">{spec.param}</div>
                  <div className="text-[#0da08a] font-mono">{spec.range}</div>
                  <div className="text-gray-400">{spec.method}</div>
                  <div className="text-red-400 font-mono">{spec.boardLimit}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 7. Platform Features Grid (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading">Robust Water Protocol Systems</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mt-4">
              WaterWiz ensures consistent connectivity and integration across public utility networks and industrial sites.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotFeatures.map((feat, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0da08a]/20 shadow-sm transition-all duration-300">
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
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Value Creation</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Real-world operational benefits delivered to municipal bodies, water utilities, and industrial clients.
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
              Explore our other specialized IoT telemetry and central monitoring software packages.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SolarWiz */}
            <SectionWrapper>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0da08a]/30 transition-all duration-300 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-[#0da08a]/10 rounded-xl flex items-center justify-center text-[#0da08a] mb-6">
                    <Zap className="w-6 h-6 text-[#0da08a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">SolarWiz</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    More power to make the most of solar plants. Edge-to-cloud telemetry, KPI trackers, and solar architecture monitoring.
                  </p>
                </div>
                <Link href="/industrial-iot/solarwiz" className="text-xs font-bold text-[#0da08a] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Explore SolarWiz <ArrowRight className="w-4 h-4" />
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

      {/* FAQ SECTION */}
      <FAQSection
        theme="light"
        faqs={[
          {
            question: "What is WaterWiz and what infrastructure does it monitor?",
            answer: "WaterWiz is a specialized SCADA and telemetry software platform for the water industry. It provides real-time monitoring and automation for municipal water supply schemes, wastewater treatment plants (STPs), effluent treatment plants (ETPs), reservoirs, and smart micro-irrigation networks."
          },
          {
            question: "What sensors and hardware interface with the WaterWiz portal?",
            answer: "WaterWiz aggregates data from electromagnetic flow meters, chemical/turbidity analyzers, chlorine sensors, water level transmitters, pump status indicators, and energy meters via local RTUs using Modbus or OPC communication protocols."
          },
          {
            question: "Can WaterWiz feed data directly to state or national water boards?",
            answer: "Yes, WaterWiz features pre-built API integration pipelines to feed telemetry reports directly to municipal and regional water management systems, including state department dashboards and central water monitoring databases."
          },
          {
            question: "How does WaterWiz help in reducing water distribution losses?",
            answer: "The platform calculates flow balance across pipelines and reservoirs, enabling operators to identify leaks, line blockages, or Non-Revenue Water (NRW) anomalies immediately in real-time."
          },
          {
            question: "What hosting configurations are supported for WaterWiz deployments?",
            answer: "WaterWiz supports a variety of deployment models, including secure cloud instances (AWS or Microsoft Azure) for multi-town schemes and local on-premise servers for standalone treatment plants."
          }
        ]}
      />

      {/* 10. CTA (Dark - Semi-transparent background for 3D visibility) */}

      <section className="py-24 text-center relative z-10 bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Ready to Deploy WaterWiz?</h2>
            <p className="text-gray-400 mb-8 text-lg">Talk to our experts about customizing a telemetry solution for your drinking water or treatment system.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] hover:bg-[#0bc2a5] text-white rounded-full font-bold transition-all shadow-lg shadow-[#0da08a]/20">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
