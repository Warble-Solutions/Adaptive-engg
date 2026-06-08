import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Eye, Monitor, Globe, Shield, BarChart3, Cpu, CheckCircle2, Activity, Database, Layers, Users, Palette, Lock, Wifi, Smartphone, MessageSquare, Folder, FileText } from "lucide-react";

export const metadata = {
 title: "Central Monitoring System (CMS) | PM-KUSUM | Adaptive Engineering",
 description: "Centralized monitoring platform for PM-KUSUM solar installations — flexible, lightweight, OEM independent with SCADA integration.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* HERO — Dashboard-inspired with grid overlay */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_cms_1776742307616.png')] bg-cover bg-center">
 <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90 mix-blend-multiply"></div>
 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
 <Eye className="w-4 h-4" />
 <span>PM-KUSUM</span>
 </div>
  <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
    Central Monitoring<br />
    <span className="gradient-heading">System (CMS)</span>
  </h1>
  <div className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-2xl py-6 px-8 border border-white/10 space-y-4 mt-6">
    <p>
      We at <strong className="text-teal-400">Adaptive Engineering Pvt. Ltd.</strong> are pleased to introduce the Central Monitoring Portal <strong className="text-teal-400">&ldquo;SolarWiz&rdquo;</strong>.
    </p>
    <p>
      &ldquo;SolarWiz&rdquo; offers a great experience to monitor and analyse plants across geographies at a central location.
    </p>
    <p>
      It collects, aggregates, presents and executes different data model algorithms to calculate individual plant KPIs.
    </p>
  </div>
 </SectionWrapper>
 </div>
 </section>

 {/* KEY HIGHLIGHTS — Split Sticky Layout */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
 <div className="max-w-7xl mx-auto px-6">
 <div className="flex flex-col lg:flex-row gap-16">
 <div className="lg:w-1/3">
 <div className="lg:sticky lg:top-32">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
 <Monitor className="w-4 h-4" />
 <span>Operational Excellence</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 leading-tight">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-500">Highlights</span></h2>
 <p className="text-slate-500 text-lg leading-relaxed mb-8">Achieve total transparency and granular control over your PM-KUSUM decentralized portfolio with AEPL&apos;s intelligent insights.</p>
 </SectionWrapper>
 </div>
 </div>
 
 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
 {[
 { icon: <Eye className="w-6 h-6" />, title: "Insightful View of Entire Portfolio", color: "text-teal-600 bg-teal-50 border-teal-100", shadow: "shadow-teal-500/20 hover:border-primary/50 hover:shadow-xl border-teal-300" },
 { icon: <BarChart3 className="w-6 h-6" />, title: "Targeted KPI Metrics", color: "text-teal-600 bg-teal-50 border-teal-100", shadow: "shadow-teal-500/20 hover:border-primary/50 hover:shadow-xl border-teal-300" },
 { icon: <Activity className="w-6 h-6" />, title: "Equipment Performance Tracking", color: "text-teal-600 bg-teal-50 border-teal-100", shadow: "shadow-teal-500/20 hover:border-primary/50 hover:shadow-xl border-teal-300" },
 { icon: <Cpu className="w-6 h-6" />, title: "Custom Reporting & Analytics", color: "text-[#0da08a] bg-teal-50 border-teal-100", shadow: "shadow-teal-500/20 hover:border-primary/50 hover:shadow-xl border-teal-300" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className={`p-8 rounded-3xl border ${item.color} bg-white shadow-sm transition-all duration-300 h-full flex flex-col group ${item.shadow} -translate-y-1`}>
 <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}>
 {item.icon}
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
 <p className="text-sm text-slate-500 font-medium tracking-wide">Automated tracking mapping realtime metrics against operational baselines.</p>
 </div>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </div>
 </section>

  {/* ARCHITECTURE — LIGHT */}
  <section className="py-24 bg-white relative z-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20 w-fit">
            System Topology
          </div>
          <h2 className="text-4xl font-black text-slate-900 font-heading mb-4">Command & Control Architecture</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Flow of telemetry data from geographically scattered field generation units to local control rooms and the Central Command Center.
          </p>
        </div>
      </SectionWrapper>

      {/* Large Diagram Display */}
      <SectionWrapper delay={0.1} className="mb-12">
        <div className="relative p-4 bg-white border border-slate-200/60 rounded-[32px] overflow-hidden shadow-2xl group max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="/imgs/pm-kusum/cms-architecture.png" 
            alt="SolarWiz CMS Control Architecture" 
            className="w-full h-auto rounded-2xl border border-slate-100 shadow-sm group-hover:scale-[1.002] transition-transform duration-500" 
          />
        </div>
      </SectionWrapper>
    </div>
  </section>

  {/* PLATFORM FEATURES — Immersive Bento Grid */}
  <section className="py-24 bg-slate-950 text-white relative z-20 border-t border-white/5">
    <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20 w-fit">
            System Features
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-4">Platform Features</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            AEPL&apos;s Central Monitoring System is packed with field-tested tools designed to optimize operational visibility.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Bento Box 1 - Wide (Flexibility) */}
        <SectionWrapper delay={0.05} className="md:col-span-2">
          <div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Deployment Flexibility</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                  In-Premise and Cloud Supported Solutions. Tailor-made hosting matching corporate infrastructure requirements with full scalability.
                </p>
              </div>
              <div className="flex gap-3 text-[10px] font-mono mt-4">
                <span className="bg-teal-950/40 border border-teal-500/20 text-teal-400 px-3 py-1 rounded-md font-bold">AWS / AZURE CLOUD</span>
                <span className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-md font-bold">ON-PREMISE HYBRID</span>
              </div>
            </div>
            {/* Visual background shape */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none bg-gradient-to-t from-primary to-transparent blur-2xl"></div>
          </div>
        </SectionWrapper>

        {/* Bento Box 2 - Standard (SSL Security) */}
        <SectionWrapper delay={0.1}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">128-bit SSL Security</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Advanced user management with SSL certifications to protect telemetry pipelines and dashboard access.
              </p>
            </div>
            <div className="text-[10px] font-mono bg-teal-950/20 border border-teal-500/10 text-teal-400 p-2.5 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>TLS 1.3 ENCRYPTION ACTIVE</span>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 3 - Standard (Lightweight Structure) */}
        <SectionWrapper delay={0.15}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Lightweight Payloads</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Optimized lightweight data structure engineered for fast synchronisation across rural networks.
              </p>
            </div>
            <div className="text-[10px] font-mono bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-lg">
              <span>Sync Overhead: <strong className="text-emerald-400">&lt;1.2 KB / poll</strong></span>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 4 - Wide (OEM & Connectors) */}
        <SectionWrapper delay={0.2} className="md:col-span-2">
          <div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[300px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">OEM Independent Connectors</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                  OPC UA, MQTT, API, and Modbus TCP connectors. Integrate any inverter brand, weather station, or energy meter into a unified platform.
                </p>
              </div>
              
              {/* Terminal Code Mockup */}
              <div className="bg-slate-950/80 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-emerald-400/90 shadow-inner mt-4 w-full max-w-md">
                <div className="flex justify-between text-slate-500 border-b border-white/5 pb-1 mb-1.5">
                  <span>MQTT_BROKER_CONN</span>
                  <span>SSL_PORT:8883</span>
                </div>
                <p className="text-slate-400">{"{"} <span className="text-teal-400">"devId"</span>: <span className="text-amber-300">"INV_04"</span>, <span className="text-teal-400">"P_AC"</span>: <span className="text-emerald-300">45.2</span>, <span className="text-teal-400">"status"</span>: <span className="text-emerald-300">"OK"</span> {"}"}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 5 - Wide (Integrated Analysis) */}
        <SectionWrapper delay={0.25} className="md:col-span-2">
          <div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[300px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Comparative Device Analysis</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                  Compare multi-device and plant level parameters side-by-side. Includes the ability to save up to 10 separate user analytical configurations.
                </p>
              </div>

              {/* Graphic Mockup: Comparison curves */}
              <div className="flex gap-2 items-end h-[60px] border-b border-white/10 pb-1 mt-4">
                {[60, 40, 75, 55, 90, 70, 85, 65, 95, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-teal-500/20 rounded-t-sm group-hover:bg-teal-500/40 transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 6 - Standard (Operations Automation) */}
        <SectionWrapper delay={0.3}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">O&amp;M Automation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Integrated tickets generation, WhatsApp chatbot notifications, and proactive maintenance scheduler for field operators.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px] font-bold bg-amber-950/40 border border-amber-500/20 text-amber-400 px-2 py-1 rounded">TICKETING</span>
              <span className="text-[9px] font-bold bg-teal-950/40 border border-teal-500/20 text-teal-400 px-2 py-1 rounded">WHATSAPP</span>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 7 - Standard (Mobile Management) */}
        <SectionWrapper delay={0.35}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Mobile Asset App</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Mobile Asset Management portal. Track generation, check alarms, and update O&amp;M logs directly from the field.
              </p>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              <span>IOS &amp; ANDROID CLIENTS</span>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 8 - Standard (Reports & Documents) */}
        <SectionWrapper delay={0.4}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Reports &amp; Documents</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Asset wise reports, custom parameters, data save options, and easy access to compliance document templates.
              </p>
            </div>
            <div className="flex justify-between items-center text-[10px] text-teal-400 font-mono">
              <span>PDF / EXCEL EXPORT</span>
            </div>
          </div>
        </SectionWrapper>

        {/* Bento Box 9 - Standard (Visual Analytics) */}
        <SectionWrapper delay={0.45}>
          <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 h-[280px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-115 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Visual Analytics</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Bird&apos;s Eye portfolio view, custom bullet graphs, and theme configurations designed for large command centers.
              </p>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              <span>BULLET &amp; AREA CHARTS</span>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  </section>

  {/* VALUE CREATION — Sleek dark container */}
  <section className="py-24 bg-slate-950 text-white relative z-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20 w-fit">
            Value Creation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-4">Value Creation</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Proven business advantages realized by centralized, operations portfolio monitoring.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {[
          { num: "01", title: "Single Dashboard Visibility", desc: "Monitor & Analyse all scattered renewable assets on Single Dashboard." },
          { num: "02", title: "Loss Mitigation", desc: "Decrease Breakdown losses and increase generations & profitability." },
          { num: "03", title: "Flexible & Scalable", desc: "Flexible & Scalable Architecture helps future expansion on the same platform." },
          { num: "04", title: "Comparative Performance", desc: "Easy to compare performance of all geographically scattered assets." },
          { num: "05", title: "Root Cause Diagnosis", desc: "Diagnose the root cause of performance and facilitate easy maintenance of assets." }
        ].map((item, i) => (
          <SectionWrapper key={i} delay={i * 0.05}>
            <div className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] rounded-2xl transition-all duration-500 h-full flex flex-col justify-between shadow-lg backdrop-blur-sm">
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-600 font-bold group-hover:text-primary transition-colors">
                {item.num}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-white text-sm leading-snug group-hover:text-primary transition-colors pr-6">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>
              {/* Subtle accent bar at bottom of card */}
              <div className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
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
 { href: "/pm-kusum/ams", abbr: "AMS", label: "Asset Management System", desc: "End-to-end asset, maintenance, inventory, and work order management." },
 { href: "/pm-kusum/ht-panel", abbr: "HT Panel", label: "HT Panel Solutions", desc: "VCB panels up to 33kV with numerical protection and motorized racking." },
 { href: "/pm-kusum/acdb-panels", abbr: "ACDB", label: "ACDB Panel Solutions", desc: "IP65 rated AC Distribution Boards with surge protection for solar pump connections." }
 ].map((sol, i) => (
 <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
 <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
 <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
 <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
 <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
 <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4 group-hover:gap-2 transition-all">
 Learn More <ArrowRight className="w-4 h-4" />
 </div>
 </Link>
 </SectionWrapper>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Centralize Your PM-KUSUM Monitoring</h2>
 <p className="text-slate-500 mb-8 text-lg">Get complete visibility of your PM-KUSUM portfolio with our CMS platform.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
 Get Started <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
