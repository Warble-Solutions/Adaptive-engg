import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wifi, Monitor, Smartphone, BarChart3, Globe, Shield, Settings, CheckCircle2, Server, Radio, Cloud, Lock, Cpu, Activity, Users, Zap, Database, TrendingUp, Eye } from "lucide-react";
import { KUSUM_STATS } from "@/lib/constants";
import { SolarProDashboard, NocDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "IoT SCADA — SolarWiz | PM-KUSUM | Adaptive Engineering",
  description: "SolarWiz — AEPL's Central Monitoring Portal combining SolarEdge IoT hardware and SolarPro cloud software for remote monitoring, performance analytics, and real-time control of PM-KUSUM solar installations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/solar_farm_aerial.png" alt="Solar Farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,1) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="z-10 max-w-5xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
              <Radio className="w-4 h-4" /><span>PM-KUSUM · IoT SCADA</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 font-heading">Solar<span className="text-primary">Wiz</span></h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-400 mb-8">Central Monitoring Portal</p>
            <div className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed bg-black/30 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/10">
              <p>
                We at <strong className="text-primary">Adaptive Engineering Pvt. Ltd.</strong> are pleased to introduce the Central Monitoring Portal <strong className="text-primary">&ldquo;SolarWiz&rdquo;</strong>.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                { value: `${KUSUM_STATS.yearsExperience.value}+`, label: "Years of Experience" },
                { value: `${KUSUM_STATS.installedBase.value}${KUSUM_STATS.installedBase.suffix}`, label: "Installed Base" },
                { value: `${KUSUM_STATS.ppcSolar.value}${KUSUM_STATS.ppcSolar.suffix}`, label: "PPC Solar" },
                { value: `${KUSUM_STATS.statesOfIndia.value}+`, label: "States of India Benefiting" },
                { value: `${KUSUM_STATS.satisfiedCustomers.value}+`, label: "Satisfied Customers" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Header Row */}
          <SectionWrapper className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20 w-fit">
              SolarWiz Telemetry Core
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 font-heading leading-tight tracking-tight">
                  Where Edge Hardware Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Cloud Intelligence</span>
                </h2>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <p className="text-slate-600 leading-relaxed text-lg">
                  Adaptive Engineering Pvt. Ltd. integrates robust field instrumentation with advanced analytics. We capture raw electrical telemetry at the solar field and process it into actionable executive intelligence.
                </p>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  &ldquo;SolarWiz&rdquo; offers a great experience to monitor and analyse plants across geographies at a central location. It collects, aggregates, presents and executes different data model algorithms to calculate individual plant KPIs.
                </p>
              </div>
            </div>
          </SectionWrapper>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* The Telemetry Pipeline (Left 7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step 1: Edge Acquisition */}
              <SectionWrapper delay={0.05} className="flex-1">
                <div className="group relative p-6 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 hover:border-primary/30 rounded-2xl transition-all duration-300 flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <span className="text-xs font-bold uppercase text-primary tracking-wider">Layer 01</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-bold uppercase text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded">Physical Layer</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Edge Telemetry Acquisition</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Direct connection to inverter registers, multi-function energy meters, and weather sensors via RS-485 Modbus RTU/TCP protocols.
                    </p>
                    
                    {/* Visual schematic inside card */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-[10px] text-emerald-400/90 flex flex-wrap gap-3 items-center justify-between shadow-inner">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>MODBUS POLLING [Active]</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-500">P_AC: <span className="text-emerald-300">42.8kW</span></span>
                        <span className="text-slate-500">V_DC: <span className="text-emerald-300">680V</span></span>
                        <span className="text-slate-500">PR: <span className="text-emerald-300">84.2%</span></span>
                      </div>
                      <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[9px] font-bold">Growatt / Solis / Delta</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>

              {/* Step 2: Edge-to-Cloud Synchronization */}
              <SectionWrapper delay={0.1} className="flex-1">
                <div className="group relative p-6 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 hover:border-primary/30 rounded-2xl transition-all duration-300 flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Radio className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <span className="text-xs font-bold uppercase text-primary tracking-wider">Layer 02</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-bold uppercase text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded">Data Link Layer</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Sync &amp; Store-and-Forward</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      On-device preprocessing filter reduces bandwidth consumption. If GPRS/4G connectivity is lost, data is queued in local solid-state storage and auto-synchronized upon recovery.
                    </p>

                    {/* Store & Forward simulation visual */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-[10px] text-teal-400/90 flex flex-wrap gap-3 items-center justify-between shadow-inner">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                        <span>TELEMETRY QUEUE [Synchronized]</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-500">Queue Buffer: <span className="text-teal-300">0 Bytes</span></span>
                        <span className="text-slate-500">Status: <span className="text-teal-300">Active</span></span>
                        <span className="text-slate-500">Uplink: <span className="text-teal-300">Cellular / Fiber</span></span>
                      </div>
                      <span className="bg-teal-950 text-teal-400 px-2 py-0.5 rounded text-[9px] font-bold">TLS 1.3 SECURE</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>

              {/* Step 3: Analytical Engine */}
              <SectionWrapper delay={0.15} className="flex-1">
                <div className="group relative p-6 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 hover:border-primary/30 rounded-2xl transition-all duration-300 flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <span className="text-xs font-bold uppercase text-primary tracking-wider">Layer 03</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-bold uppercase text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded">Analytics Layer</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">SolarPro Analytics &amp; KPI Engine</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Automated execution of performance ratio (PR), CUF calculations, carbon offset tracking, and ML-based anomaly rules checking for string or inverter failures.
                    </p>

                    {/* KPI metrics display */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-[10px] text-cyan-400/90 flex flex-wrap gap-3 items-center justify-between shadow-inner">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        <span>KPI ANALYTICS RUNNING</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-500">Avg CUF: <span className="text-cyan-300">22.4%</span></span>
                        <span className="text-slate-500">CO2 Saved: <span className="text-cyan-300">12.5 Tons</span></span>
                        <span className="text-slate-500">Fault Detection: <span className="text-cyan-300">0 Anomalies</span></span>
                      </div>
                      <span className="bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded text-[9px] font-bold">AUTO REPORTS</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Server Node Monitor Container (Right 5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <SectionWrapper delay={0.2} className="h-full flex flex-col justify-between">
                <div className="relative border border-slate-200/80 rounded-3xl bg-slate-950 p-6 flex flex-col justify-between shadow-2xl h-full overflow-hidden group">
                  {/* Decorative background grid and neon glow */}
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
                  
                  <div>
                    {/* Header Panel mock details */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        <span className="text-slate-500 font-mono text-xs ml-2">NOC_NODE_04 // active</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest font-mono font-bold">
                        SSL SECURE
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white font-heading mb-3">Live Portal Diagnostic Dashboard</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      This diagnostic interface simulates the visual backend of SolarPro telemetry, streaming data aggregates from hundreds of solar arrays across multiple states.
                    </p>

                    {/* Stats details within the server node container */}
                    <div className="grid grid-cols-2 gap-4 mb-6 font-mono">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">SYSTEM UPTIME</div>
                        <div className="text-lg font-black text-white mt-1">99.98%</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">ACTIVE FIELD NODES</div>
                        <div className="text-lg font-black text-primary mt-1">2,840+</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">REFRESH RATE</div>
                        <div className="text-lg font-black text-teal-400 mt-1">15 Sec</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">API STATUS</div>
                        <div className="text-lg font-black text-emerald-400 mt-1">OPERATIONAL</div>
                      </div>
                    </div>
                  </div>

                  {/* High fidelity DashboardMockups embedded inside monitor frame */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg w-full h-[220px] bg-slate-900 relative mt-auto">
                    <SolarProDashboard />
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL PRODUCT: SOLAREDGE + SOLARPRO — DARK */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Two Powerful Components</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">SolarWiz is built on a two-tier architecture — ruggedized edge hardware paired with an enterprise-grade cloud platform.</p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <SectionWrapper delay={0.1} className="flex flex-col">
              <div className="group relative p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-primary/50 hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">Hardware</div>
                <h3 className="text-3xl font-black text-white mb-4">SolarEdge</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  An IOT based Edge Computing Device to acquire data from Renewable Assets Equipments. It comprises Intelligent Data PreProcessing and Synchronize with SolarPro. The SolarEdge stores and forwards data during Cloud Connection Interruption and Restore.
                </p>
                <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[280px]">
                  <img src="/imgs/solaredge.webp" alt="SolarEdge IoT Device" className="w-full h-full object-cover" />
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2} className="flex flex-col">
              <div className="group relative p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
                <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">Software</div>
                <h3 className="text-3xl font-black text-white mb-4">SolarPro</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  A Cloud Based Comprehensive, Highly Secure, Available, Reliable and Scalable Software Package for Data Monitoring, Analysis, Reporting, O&amp;M and Multi-Plant Configuration.
                </p>
                <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[280px]">
                  <SolarProDashboard />
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE — LIGHT */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20 w-fit">
                System Integration
              </div>
              <h2 className="text-4xl font-black text-slate-900 font-heading mb-4">Architecture</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                End-to-end data pipeline from physical field instruments to centralized monitoring applications and organizational personas.
              </p>
            </div>
          </SectionWrapper>

          {/* Large Diagram Display */}
          <SectionWrapper delay={0.1} className="mb-20">
            <div className="relative p-4 bg-white border border-slate-200/60 rounded-[32px] overflow-hidden shadow-2xl group max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/imgs/pm-kusum/iot-scada-architecture.png" 
                alt="SolarWiz SCADA Architecture" 
                className="w-full h-auto rounded-2xl border border-slate-100 shadow-sm group-hover:scale-[1.002] transition-transform duration-500" 
              />
            </div>
          </SectionWrapper>

        </div>
      </section>

      {/* KEY FEATURES — LIGHT */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 font-heading mb-4">Features &amp; Benefits</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Everything you need to monitor, analyse, and manage your renewable assets from one place.</p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Monitor renewable assets from anywhere", desc: "Access real-time plant performance data securely from any device, anywhere, without complex VPN setup." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Analyse asset performance", desc: "Run advanced data models, calculate plant KPIs, check CUF/PR values, and identify energy generation anomalies." },
              { icon: <Server className="w-6 h-6" />, title: "In-built reports library", desc: "Generate compliance-ready reports automatically in MNRE and DISCOM formats for easy subsidy processing." },
              { icon: <Settings className="w-6 h-6" />, title: "Third-party integration", desc: "Integrate seamlessly with SLDC, ERP, utility billing systems, and external asset management platforms via open APIs." },
              { icon: <Users className="w-6 h-6" />, title: "Multi-plant configuration and O&M", desc: "Manage and configure multiple solar assets across different geographical regions with role-based O&M workflows." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>


      {/* HOW IT WORKS — LIGHT */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 font-heading mb-4">How SolarWiz Works</h2>
              <p className="text-slate-500 max-w-xl mx-auto">From field device to cloud dashboard — a seamless, secure data pipeline.</p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <Zap className="w-8 h-8" />, title: "Data Acquisition", desc: "SolarEdge IoT gateway connects to inverters, meters, and sensors via Modbus/RS485 and acquires real-time data." },
              { step: "02", icon: <Cpu className="w-8 h-8" />, title: "Edge Pre-Processing", desc: "Intelligent on-device preprocessing filters, validates, and compresses data before transmission." },
              { step: "03", icon: <Cloud className="w-8 h-8" />, title: "Secure Cloud Sync", desc: "Data is transmitted securely to SolarPro cloud. SolarEdge stores and forwards during connectivity interruptions." },
              { step: "04", icon: <Monitor className="w-8 h-8" />, title: "Dashboard & Alerts", desc: "SolarPro renders real-time dashboards, KPIs, and automated alerts accessible from any device." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="relative p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg">{item.step}</div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOLARWIZ — DARK with bg image */}
      <section className="py-28 relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/imgs/solar_farm_aerial.png" alt="Solar Farm" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-slate-950/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-4">Why Choose <span className="text-primary">SolarWiz</span>?</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Built specifically for India's PM-KUSUM programme, SolarWiz addresses the unique monitoring and compliance requirements of distributed solar pump installations.</p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, title: "OEM Independent", desc: "Works with all major inverter brands — Growatt, Solis, Sofar, Goodwe, Delta and more. No vendor lock-in." },
              { icon: <Database className="w-8 h-8" />, title: "MNRE Compliant", desc: "Built-in MNRE and DISCOM reporting formats. Automated state portal data submission for subsidy processing." },
              { icon: <Lock className="w-8 h-8" />, title: "Store & Forward", desc: "SolarEdge caches data locally during network outages and syncs automatically when connectivity is restored — zero data loss." },
              { icon: <Activity className="w-8 h-8" />, title: "Edge Intelligence", desc: "On-device data preprocessing reduces bandwidth usage by up to 70% while maintaining millisecond-level data accuracy." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Predictive Alerts", desc: "ML-based anomaly detection identifies string failures, soiling, and inverter degradation before they impact generation." },
              { icon: <Smartphone className="w-8 h-8" />, title: "Mobile First", desc: "Full-featured mobile app for field engineers — work orders, alerts, asset photos, and real-time data from the field." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES — LIGHT */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Platform Capabilities</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Activity className="w-5 h-5" />, text: "Real-time plant performance monitoring" },
              { icon: <BarChart3 className="w-5 h-5" />, text: "PR, CUF, specific yield & KPI tracking" },
              { icon: <TrendingUp className="w-5 h-5" />, text: "Loss bucket & degradation analysis" },
              { icon: <Smartphone className="w-5 h-5" />, text: "Mobile app for field engineers" },
              { icon: <Database className="w-5 h-5" />, text: "MNRE & DISCOM compliant reporting" },
              { icon: <Lock className="w-5 h-5" />, text: "Role-based access control (RBAC)" },
              { icon: <Cloud className="w-5 h-5" />, text: "Store & forward during outages" },
              { icon: <Settings className="w-5 h-5" />, text: "OTA firmware update support" },
              { icon: <Globe className="w-5 h-5" />, text: "Multi-geography portfolio view" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-medium text-slate-700 text-sm">{item.text}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SOLUTIONS */}
      <section className="py-24 bg-white relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">PM-KUSUM Suite</div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete PM-KUSUM offering covers every layer — from hardware panels to cloud-based monitoring and compliance.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/pm-kusum/reportwiz", abbr: "ReportWiz", label: "ReportWiz", desc: "Automated reporting suite with custom builders, KPI tracking, and multi-format export." },
              { href: "/pm-kusum/cms", abbr: "CMS", label: "Central Monitoring System", desc: "Portfolio-level monitoring with ML anomaly detection and AI assistant." },
              { href: "/pm-kusum/ams", abbr: "AMS", label: "Asset Management System", desc: "End-to-end asset, maintenance, inventory, and work order management." },
              { href: "/pm-kusum/ht-panel", abbr: "HT Panel", label: "HT Panel Solutions", desc: "VCB panels up to 33kV with numerical protection and motorized racking." },
              { href: "/pm-kusum/acdb-panels", abbr: "ACDB", label: "ACDB Panel Solutions", desc: "IP65 rated AC Distribution Boards with surge protection for solar pump connections." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></div>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Deploy SolarWiz?</h2>
            <p className="text-gray-400 mb-8 text-lg">Get a customized SolarWiz solution for your PM-KUSUM solar installations.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
