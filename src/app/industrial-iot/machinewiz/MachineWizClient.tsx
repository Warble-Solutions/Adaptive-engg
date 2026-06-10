"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, 
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
  Sparkles,
  Zap,
  Droplet,
  Layers
} from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";

export default function MachineWizClient() {
  const steps = [
    {
      phase: "ACQUIRE",
      tagline: "Collect Data From Machine Controller",
      desc: "MachineWiz provides a scalable solution for manufacturers that can be self-installed to simply gather data from any piece of machinery and provide actionable machine insights in a matter of minutes.",
      bullets: [
        { title: "Direct Controller Connectivity", text: "Acquire high-frequency parameters directly from PLCs, CNC controllers, and I/O modules." },
        { title: "Flexible Deployment Options", text: "Deploy as a physical edge gateway, software agent, or containerized Docker service on the shop floor." },
        { title: "Transform Data Instantly", text: "Pre-process and clean raw telemetry signals at the edge to reduce transmission bandwidth." },
        { title: "Remote Edge Management", text: "Update drivers, configure polling rates, and manage telemetry devices securely from a single portal." }
      ]
    },
    {
      phase: "ANALYZE",
      tagline: "Centralized Data Processing Platform",
      desc: "MachineWiz Data Platform guarantees that all your data is captured and processed in one centralised location so that you can have secure, reliable remote access from any part of the world.",
      bullets: [
        { title: "Remote Data Storage", text: "High-performance time-series database optimized for storing massive industrial telemetry datasets." },
        { title: "Data Integration Engine", text: "Easily merge machine telemetry with context from ERP, MES, and CMMS systems for rich reporting." },
        { title: "Rules-Based Workflows", text: "Configure event triggers and calculations to run automatically on incoming stream events." },
        { title: "Open API Access", text: "Query raw or aggregated machine data using secure, standard REST APIs and Webhooks." }
      ]
    },
    {
      phase: "ACTION",
      tagline: "Rapid Actionability Applications",
      desc: "Our out-of-the-box applications give use cases that enable rapid actionability including real-time dashboards, historical information, rules-based workflows, and text/email alerts that bring optimised processes to factory employees.",
      bullets: [
        { title: "Production Monitoring", text: "Track OEE, cycle times, cavity yields, scrap rates, and actual-vs-target counts in real-time." },
        { title: "Condition Monitoring", text: "Monitor motor temperature, vibration frequencies, current load, and bearing wear parameters." },
        { title: "Predictive Maintenance", text: "Utilize machine learning anomalies to predict tooling failures and plan maintenance proactively." },
        { title: "Process Optimization", text: "Analyze optimal parameter recipes (injection speed, pressure, cure time) to enhance yield quality." }
      ]
    }
  ];

  const industries = [
    { name: "Plastic Manufacturing" },
    { name: "Pharma Machine Manufacturing" },
    { name: "Packaging Machine Manufacturing" },
    { name: "Textile Machine Manufacturing" },
    { name: "Machine Tools" },
    { name: "Process Plant Industries" }
  ];

  const applications = [
    { title: "Production Monitoring", desc: "Real-time OEE, count logging, and shift reporting." },
    { title: "Condition Monitoring", desc: "Predictive mechanical wear and thermal tracking." },
    { title: "Predictive Maintenance", desc: "ML-powered remaining useful life (RUL) estimation." },
    { title: "Process Optimization", desc: "Cycle-time analysis and recipe configuration validation." },
    { title: "Asset Management", desc: "Shop floor inventory tracking and equipment usage logs." }
  ];

  const values = [
    {
      title: "Ease In Deployment",
      desc: "Plug-and-play, simple to use, and easy to scale."
    },
    {
      title: "Autonomous Data Collection",
      desc: "Autonomous collection of production data without any manual intervention."
    },
    {
      title: "Drive Immediate Value",
      desc: "Out-of-the-box apps without any initial development."
    },
    {
      title: "Connects To Everything",
      desc: "Easily capture data from modern and legacy assets."
    },
    {
      title: "Deep Manufacturing Vertical Expertise",
      desc: "Provides necessary context to enable data actionability."
    },
    {
      title: "Drive Systems With Accurate Production Data",
      desc: "Extensible and flexible. Built to drive ERP/MES systems."
    }
  ];


  const statsList = [
    { value: "2,500+", label: "Connected Machines" },
    { value: "98.5%", label: "Anomaly Accuracy" },
    { value: "35%+", label: "Average OEE Increase" },
    { value: "10 Min", label: "Edge Commissioning" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950/40 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* 1. HERO (Dark with background image and transparent overlay) */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/industrial-iot/factory_floor_telemetry.png" alt="Smart Factory Shop Floor Telemetry" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(13,160,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,160,138,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0da08a]/10 rounded-full blur-[160px] pointer-events-none"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <SectionWrapper className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0da08a]/10 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#0da08a]/20">
              <Cpu className="w-4 h-4 text-[#0da08a]" />
              <span>Smart Manufacturing Suite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading tracking-tight leading-none">
              Machine<span className="text-[#0da08a]">Wiz</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-6">
              A self-installed, plug-and-play machine telemetry platform. Transform raw shop floor data into actionable insights for OEE, predictive maintenance, and process optimization.
            </p>
            <div className="text-sm text-[#0da08a] font-bold uppercase tracking-wider mb-12 flex justify-center items-center gap-2">
              <Sparkles className="w-4 h-4" /> Operational Excellence Through Machine Learning
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Stats Strip (Light) */}
      <section className="py-12 bg-white text-slate-900 border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsList.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-black text-[#0da08a] font-heading">{stat.value}</span>
                  <span className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 3. Shop Floor View (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0da08a]/10 border border-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Edge Intelligence
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Autonomous Shop-Floor Data Extraction
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Over the years, our customers have achieved operational excellence using our innovative technology backed by years of experience in Machine Learning, Production Monitoring, Condition Monitoring, Predictive Maintenance, Process Optimization, and Mobile Asset Management.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  MachineWiz automates data acquisition directly from machine CNCs and PLCs without any manual intervention, feeding high-fidelity telemetry records into centralized intelligence portals.
                </p>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-7">
              <SectionWrapper delay={0.1}>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl h-[360px] md:h-[420px]">
                  <img 
                    src="/imgs/industrial-iot/factory_floor_telemetry.png" 
                    alt="Smart Factory Shop Floor Telemetry" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Phases Glowing Timeline (Acquire -> Analyze -> Action) (Dark) */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">The Data-to-Action Pipeline</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Our structured IoT framework takes you from raw electrical/mechanical telemetry to real-time shop floor action.
            </p>
          </SectionWrapper>

          <div className="space-y-16 max-w-6xl mx-auto relative">
            <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-[#0da08a]/20 hidden lg:block z-0"></div>

            {steps.map((step, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="p-8 md:p-10 rounded-[32px] bg-slate-900/40 border border-white/5 backdrop-blur-sm relative overflow-hidden bg-gradient-to-r from-[#0da08a]/5 to-transparent z-10">
                  <div className="absolute top-6 right-8 text-7xl md:text-8xl font-black text-white/[0.02] select-none font-heading">
                    0{idx + 1}
                  </div>
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 flex gap-6">
                      <div className="w-14 h-14 bg-[#0da08a]/10 rounded-2xl flex items-center justify-center text-[#0da08a] shrink-0 border border-[#0da08a]/20 shadow-[0_0_20px_rgba(13,160,138,0.1)]">
                        <span className="font-heading font-black text-lg">0{idx + 1}</span>
                      </div>
                      <div>
                        <span className="text-xs font-black tracking-widest uppercase text-[#0da08a]">
                          {step.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-3 font-heading leading-tight">
                          {step.tagline}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {step.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 flex gap-4 items-start hover:border-[#0da08a]/20 transition-all duration-300">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#0da08a]" />
                          <div>
                            <h4 className="text-sm font-bold text-white mb-1">{bullet.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{bullet.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Industries We Support (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading">Industries We Support</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto mt-4">
              MachineWiz delivers pre-configured analytics templates for major manufacturing verticals.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0da08a]/30 shadow-sm transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0da08a]/10 rounded-lg flex items-center justify-center text-[#0da08a]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{ind.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#0da08a] group-hover:translate-x-1 transition-all" />
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MachineWiz Value (Dark) */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">The MachineWiz Value</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Why manufacturing plants trust MachineWiz for autonomous telemetry and production insights.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {values.map((val, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-[#0da08a]/20 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">{val.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-[#0da08a] gap-1.5 uppercase">
                    Value Created <TrendingUp className="w-4 h-4" />
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
              Discover other specialized IoT monitoring systems developed by Adaptive Engineering.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SolarWiz */}
            <SectionWrapper>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0da08a]/20 transition-all duration-300 flex flex-col justify-between shadow-sm">
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

            {/* WaterWiz */}
            <SectionWrapper>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0da08a]/20 transition-all duration-300 flex flex-col justify-between shadow-sm">
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
          </div>
        </div>
      </section>

      {/* 10. CTA (Dark) */}
      <section className="py-24 text-center relative z-10 bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Ready to Deploy MachineWiz?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with AEPL to integrate smart machine telemetry with your existing MES and ERP systems.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] hover:bg-[#0bc2a5] text-white rounded-full font-bold transition-all shadow-lg shadow-[#0da08a]/20">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
