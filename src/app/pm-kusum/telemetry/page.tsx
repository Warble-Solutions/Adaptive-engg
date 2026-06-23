import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2, Server, Lock, Network, Shield, AlertTriangle } from "lucide-react";
import FAQSection from "@/components/FAQSection";



export const metadata = {
  title: "Telemetry System | PM-KUSUM Compliance | Adaptive Engineering",
  description: "Real-time grid data transmission to SLDC/RLDC via RTU ensuring regulatory compliance and grid visibility.",
};

// Inline Client-like dashboard helper to render inside hero (server component compliant)
function HeroRtuDashboard() {
  return (
    <div className="w-full bg-slate-900/80 border border-white/10 rounded-2xl p-5 text-white font-sans text-left shadow-2xl backdrop-blur-md relative select-none">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Gateway: AEPL-RTU-104</span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono">ID: KUSUM-RJ-04</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
          <span className="text-[8px] text-slate-400 uppercase tracking-widest block font-extrabold">Active Power</span>
          <span className="text-xl font-bold font-mono text-white block mt-1">4.82MW</span>
          <span className="text-[7px] text-teal-400 font-bold uppercase mt-1 block">EXPORTING</span>
        </div>
        <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
          <span className="text-[8px] text-slate-400 uppercase tracking-widest block font-extrabold">Link Availability</span>
          <span className="text-xl font-bold font-mono text-white block mt-1">99.98%</span>
          <span className="text-[7px] text-teal-400 font-bold uppercase mt-1 block">STABLE</span>
        </div>
      </div>

      <div className="space-y-2 text-[9px] font-mono text-slate-400">
        <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
          <span className="flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-teal-400" /> Channel A (Fiber Link)</span>
          <span className="text-teal-400 font-extrabold">ONLINE</span>
        </div>
        <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
          <span className="flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-teal-400/40" /> Channel B (Cellular LTE)</span>
          <span className="text-slate-500">STANDBY</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-teal-400" /> CERC Security Protocol</span>
          <span className="text-teal-400 font-extrabold">ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col w-full bg-slate-950">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO — Split Layout with Mockup */}
      <section className="section-hero relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/imgs/pm-kusum/kusum_telemetry_1776742420287.png" alt="Telemetry System hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-transparent to-slate-950/90"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column — Description Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                  <Activity className="w-4 h-4" />
                  <span>PM-KUSUM Compliance Suite</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading leading-tight py-2">
                  Telemetry <span className="gradient-heading block">System</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Real-time grid data transmission to SLDC/RLDC via RTU ensuring regulatory compliance and grid visibility.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/10">
                  Consult Compliance Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* Right Column — Gateway Dashboard Mockup */}
            <SectionWrapper delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900/30 p-2">
                <HeroRtuDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Grid Compliance (Alternating Column 1) */}
      <section className="py-28 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Side — SLDC Control Room Image (7 cols) */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-4 bg-slate-50 group">
                  {/* Mock browser header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 text-[9px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      SLDC State Grid Interface Status
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 mt-3">
                    <img 
                      src="/imgs/pm-kusum/sldc_control_center.png" 
                      alt="SLDC State Load Despatch Centre Command Room" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Side — Compliance Description (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <SectionWrapper delay={0.2}>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  SLDC / RLDC Compliance
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading leading-tight">
                  Grid Visibility, Guaranteed
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  For grid-connected solar plants, real-time data transmission to the State Load Despatch Centre (SLDC) and Regional Load Despatch Centre (RLDC) is mandatory. Our Telemetry System provides IEC 60870-5-104 and DNP3 compliant data communication through dedicated RTUs, ensuring your plant remains visible to grid operators and avoids penalties for non-compliance.
                </p>

                {/* Micro Stats panel */}
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-black text-slate-900">IEC 104</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-1">Protocol</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-xl font-black text-slate-900">99.9%</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-1">Uptime</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-xl font-black text-slate-900">&lt; 1s</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-1">Latency</div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Industrial Hardware (Alternating Column 2) */}
      <section className="py-28 bg-slate-50 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Side — Hardware Description (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
              <SectionWrapper>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Industrial Telemetry Hardware
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading leading-tight">
                  Field RTU & Signal Cabinets
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  We deploy rugged industrial-grade Remote Terminal Unit (RTU) enclosures designed to withstand harsh utility environments. The system normalizes physical signals from local instrumentation and securely routes them to central grid systems.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Dual redundant communication routes (Fiber & LTE Cellular fallback)",
                    "Signal conditioning cards for 4-20mA CT/PT analog feedback",
                    "Battery backup UPS system ensuring operation during outages",
                    "CERC regulatory compliant security firewall filters"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </SectionWrapper>
            </div>

            {/* Right Side — Cabinet Photo (7 cols) */}
            <div className="lg:col-span-7 lg:order-2 order-1">
              <SectionWrapper delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-4 bg-white group">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 text-[9px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      RTU System Panel (AEPL-RTU-104)
                    </span>
                    <span className="text-slate-400 font-mono">REV 3.1</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 mt-3">
                    <img 
                      src="/imgs/pm-kusum/telemetry_rtu_cabinet.png" 
                      alt="Industrial Telemetry RTU Panel Cabinet Interior" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 4 — System Components Grid */}
      <section className="py-28 bg-white relative z-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
                Module Breakdown
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
                System Components
              </h2>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Remote Terminal Unit",
                desc: "Industrial RTU with IEC 60870-5-104, DNP3, and Modbus protocols. Dual communication channels for redundancy."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Signal Conditioning",
                desc: "Analog (4-20mA, 0-10V) and digital signal acquisition from CTs, PTs, energy meters, and weather stations."
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "Grid Communication",
                desc: "Dedicated fiber optic or leased line connection to SLDC. Backup 4G cellular channel for failover."
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Cyber Security",
                desc: "CERC cyber security guidelines compliant with encrypted communication, access control, and audit logging."
              }
            ].map((comp, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/50 hover:shadow-xl shadow-sm hover:-translate-y-1.5 transition-all duration-300 group cursor-default h-full flex flex-col items-start text-left">
                  <div className="mb-6 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {comp.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-3 leading-snug">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                    {comp.desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>



      {/* OTHER SOLUTIONS */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                PM-KUSUM Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete PM-KUSUM offering covers every layer — from hardware panels to cloud-based monitoring and compliance.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/pm-kusum/iot-scada", abbr: "IoT SCADA", label: "IoT SCADA — SolarWiz", desc: "Real-time plant monitoring gateway with multi-protocol support and state portal integration." },
              { href: "/pm-kusum/reportwiz", abbr: "ReportWiz", label: "ReportWiz", desc: "Automated reporting suite with custom builders, KPI tracking, and multi-format export." },
              { href: "/pm-kusum/cms", abbr: "CMS", label: "Central Monitoring System", desc: "Portfolio-level monitoring with ML anomaly detection and AI assistant." },
              { href: "/pm-kusum/ams", abbr: "AMS", label: "Asset Management System", desc: "End-to-end asset, maintenance, inventory, and work order management." },
              { href: "/pm-kusum/ht-panel", abbr: "HT Panel", label: "HT Panel Solutions", desc: "VCB panels up to 33kV with numerical protection and motorized racking." },
              { href: "/pm-kusum/acdb-panels", abbr: "ACDB", label: "ACDB Panel Solutions", desc: "IP65 rated AC Distribution Boards with surge protection for solar pump connections." },
              { href: "/pm-kusum/wms", abbr: "WMS", label: "Weather Monitoring System", desc: "Real-time irradiance, wind, and temperature sensors for performance benchmarking." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1 text-left">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">{sol.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4 group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection
        theme="light"
        faqs={[
          {
            question: "What is the role of the Telemetry System in PM-KUSUM projects?",
            answer: "The Telemetry System utilizes Remote Terminal Units (RTUs) to transmit real-time electrical data from grid-connected solar power plants to State Load Despatch Centres (SLDC) or Regional Load Despatch Centres (RLDC), satisfying grid operator visibility mandates."
          },
          {
            question: "What protocols does the Telemetry System support?",
            answer: "Our system is fully compliant with standard utility protocols including IEC 60870-5-104, DNP3, and Modbus RTU/TCP, facilitating direct integration with SCADA hosts."
          },
          {
            question: "How is communication reliability maintained in remote areas?",
            answer: "We deploy dual redundant communication paths. The primary channel runs over a dedicated fiber optic or leased line link, with a secondary backup channel running over cellular LTE (4G/5G) for automatic failover."
          },
          {
            question: "Does the Telemetry System meet CERC cyber security guidelines?",
            answer: "Yes, the RTU signal cabinets are integrated with security firewalls, encrypted communication channels, secure user access controls, and auditing logs in compliance with Central Electricity Regulatory Commission (CERC) security mandates."
          },
          {
            question: "What happens during a grid power failure?",
            answer: "Our telemetry cabinets feature a built-in battery backup UPS system. This ensures that the RTU and critical network sensors remain fully operational and continue monitoring/logging telemetry during temporary power outages."
          }
        ]}
      />

      {/* CTA */}

      <section className="py-24 bg-slate-950 text-center relative z-20">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Telemetry System?</h2>
            <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/10">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
