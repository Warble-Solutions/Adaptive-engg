"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { 
  ArrowRight, Wrench, Users, Package, ClipboardList, Workflow, Database, 
  CheckCircle2, Cpu, Settings, Activity, ShieldCheck, Sparkles, TrendingUp
} from "lucide-react";

export default function AssetManagementPageClient() {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", icon: <Database className="w-5 h-5" />, label: "Asset Information" },
    { id: "team", icon: <Users className="w-5 h-5" />, label: "Asset Team" },
    { id: "maintenance", icon: <Wrench className="w-5 h-5" />, label: "Maintenance" },
    { id: "inventory", icon: <Package className="w-5 h-5" />, label: "Inventory" },
    { id: "workorder", icon: <ClipboardList className="w-5 h-5" />, label: "Work Orders" },
    { id: "integrations", icon: <Workflow className="w-5 h-5" />, label: "Integrations" }
  ];

  const stats = [
    { value: "17+", label: "Years of Experience" },
    { value: "1000+", label: "Projects Completed" },
    { value: "300+", label: "Engineers" },
    { value: "125K+", label: "Sq. Ft. Facility Size" },
    { value: "100+", label: "Satisfied Clients" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950/40 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/about-hero.png" alt="Industrial Asset Management" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(13,160,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,160,138,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0da08a]/10 rounded-full blur-[160px] pointer-events-none"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative text-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
              <Cpu className="w-4 h-4" />
              <span>Industrial IoT · AssetWiz APM</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading tracking-tight leading-none">
              Mobile Asset<br />
              <span className="text-[#0da08a]">Management</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mt-6 mb-8">
              Organizations can maximize asset performance through data-driven decision-making and strategic planning by leveraging technology. This ensures reduced risks and long-term reliability and resilience of their infrastructure systems.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS BAR */}
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

      {/* EXPERTISE SECTION */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0da08a]/10 border border-[#0da08a]/20 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Our Expertise
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Connected Field Operations
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  AssetWiz (Mobile Asset Management) offers a unified, secure platform for monitoring and maintaining distributed assets. It connects siloed field data to empower operations teams, drive efficient troubleshooting, and ensure full compliance.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Maximize your return on capital by minimizing asset downtime, automating task checklists, and maintaining full transparency across plant, control room, and corporate tiers.
                </p>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-7">
              <SectionWrapper delay={0.1}>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl h-[360px] md:h-[420px]">
                  <img 
                    src="/imgs/industrial-iot/ams_field_om.png" 
                    alt="Mobile Asset Management Dashboard" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MODULE EXPLORER */}
      <section className="py-24 bg-slate-950/80 backdrop-blur-sm relative z-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20 w-fit">
                APM Suite
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-4">APM Modules</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm">
                Leverage fully integrated performance modules designed to track, schedule, and optimize your field lifecycle operations.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Sidebar Tabs (Left 4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 lg:h-[720px] h-auto">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer lg:flex-1 ${
                    activeTab === tab.id
                      ? "bg-slate-900 border-teal-500/50 text-white shadow-xl translate-x-1"
                      : "bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-900/80 hover:text-white hover:border-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === tab.id
                      ? "bg-teal-500 text-white"
                      : "bg-slate-800 text-slate-400 group-hover:scale-110 group-hover:text-white"
                  }`}>
                    {tab.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{tab.label}</h4>
                    <span className="text-[10px] opacity-70 font-mono uppercase">Module {i + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Detail Pane (Right 8 cols) */}
            <div className="lg:col-span-8 lg:h-[720px] h-auto">
              <div className="bg-slate-900/60 text-white p-8 md:p-10 rounded-[32px] border border-white/5 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                
                {activeTab === "info" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Database className="text-teal-400 w-6 h-6" /> Asset Information Management
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        Connect the siloed information about the assets during the entire lifecycle to empower connected work teams, drive effective decision making and work collaboratively.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Rich set of features to create model templates for unique asset types",
                          "Assets are imagined as a Tree-Structure. Gather information into any format about each node",
                          "Reduces time to search and collect asset history",
                          "Gain asset performance insights with machine learning",
                          "Share the best practices and hard learned rules",
                          "Secured web-based access to interact from any location"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Asset Lifecycle */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-4">
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-400">Asset Data Lifecycle Flow</h4>
                      <div className="grid grid-cols-5 gap-3 text-center text-xs md:text-sm font-mono">
                        {[
                          { title: "Asset Data", items: "Tree, Meta, Specs", color: "bg-teal-950/40 border-teal-500/20 text-teal-400" },
                          { title: "Teams Data", items: "Hierarchy, Schedule", color: "bg-cyan-950/40 border-cyan-500/20 text-cyan-400" },
                          { title: "Maintenance", items: "SOPs, Schedules", color: "bg-emerald-950/40 border-emerald-500/20 text-emerald-400" },
                          { title: "Documents", items: "3D Models, PDFs", color: "bg-indigo-950/40 border-indigo-500/20 text-indigo-400" },
                          { title: "Contract", items: "Warranty, AMC", color: "bg-purple-950/40 border-purple-500/20 text-purple-400" }
                        ].map((node, i) => (
                          <div key={i} className={`p-3 border rounded-xl ${node.color} flex flex-col justify-between min-h-[95px] md:min-h-[110px] py-3.5`}>
                            <span className="font-bold text-xs md:text-sm truncate">{node.title}</span>
                            <span className="text-[11px] md:text-xs opacity-75 leading-tight">{node.items}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "team" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Users className="text-teal-400 w-6 h-6" /> Asset Team Management
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        A common software environment with Strategic, Managerial, and Operational dashboards and reports that enables real-time visibility of operations relevant to each role.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Plant, Control Room and Enterprise teams hierarchy",
                          "Single version of the truth drives collaborative resolution",
                          "Configure customizable threshold values for plant teams",
                          "Abnormalities brought to control room attention automatically",
                          "Complete end-to-end view of entire operations",
                          "Drive greater improvements in efficiency, reliability, and agility"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Team Hierarchy */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-400">Team Structure Hierarchy</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { role: "Plant Team", desc: "Supervisors & Technicians", detail: "Ensures work order execution." },
                          { role: "Control Team", desc: "Control Room Managers", detail: "Alarms & AI anomaly analysis." },
                          { role: "Enterprise Team", desc: "Board Room Executives", detail: "Strategic macro view & analytics." }
                        ].map((team, i) => (
                          <div key={i} className="p-4 bg-white/[0.01] border border-white/5 rounded-xl text-center">
                            <h5 className="text-sm md:text-base font-bold text-white mb-1.5">{team.role}</h5>
                            <p className="text-xs md:text-sm text-teal-400 font-mono">{team.desc}</p>
                            <p className="text-xs md:text-sm text-slate-400 mt-1.5 leading-snug">{team.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "maintenance" && (
                  <div className="space-y-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Wrench className="text-teal-400 w-6 h-6" /> Maintenance Management
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 font-medium">
                        Optimize schedules and build preventative procedures to eliminate under-maintenance and over-maintenance across your entire asset portfolio.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Usage, time, or condition-based preventative scheduling",
                          "Auto-generate work-orders from SCADA threshold violations",
                          "QR code-based tags to scan controller details on-site",
                          "Standard operating procedures (SOPs) with audit trails",
                          "Multi-step, multi-task templates with How-To manuals",
                          "Mandatory photo uploads before closing work-orders",
                          "Downtime %, MTBF, MTTR, OEE performance KPIs",
                          "Root cause analysis for secure failure prevention"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Maintenance Maturity */}
                    <div className="border border-white/5 bg-white/[0.02] p-4 rounded-2xl space-y-3">
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-400">Maintenance Maturity Timeline</h4>
                      <div className="grid grid-cols-5 gap-3 text-center text-xs md:text-sm font-mono">
                        {[
                          { step: "Reactive", desc: "Breakdowns" },
                          { step: "Planning", desc: "Scheduling" },
                          { step: "Preventive", desc: "Schedules" },
                          { step: "Predictive", desc: "Algorithms" },
                          { step: "Prescriptive", desc: "AI Actions" }
                        ].map((m, i) => (
                          <div key={i} className="p-3 bg-slate-900 border border-white/5 rounded-lg flex flex-col justify-between min-h-[80px] md:min-h-[95px] py-3.5">
                            <span className="font-bold text-white text-xs md:text-sm">{m.step}</span>
                            <span className="text-[11px] md:text-xs opacity-75">{m.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "inventory" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Package className="text-teal-400 w-6 h-6" /> Inventory Management
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        Seamlessly track part consumption on work-orders, set automated reorder values, and keep field technicians supplied with necessary spares.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Track spare part consumption directly on active work-orders",
                          "Min & max inventory quantity alarms to optimize capital cost",
                          "Easy purchasing system integrated with vendor catalog data",
                          "Scan barcode/serial numbers in field to allocate inventory",
                          "Access inventory counts and warranty durations from anywhere",
                          "Vendor service provider portal with automated PO creation"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Inventory Tracking */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-400">Inventory Lifecycle Path</h4>
                      <div className="grid grid-cols-5 gap-3 text-center text-xs md:text-sm font-mono">
                        {[
                          { step: "1. Identify", text: "Barcode Scan" },
                          { step: "2. Track", text: "Usage & Loc" },
                          { step: "3. Allocate", text: "Assign parts" },
                          { step: "4. Integrate", text: "ERP PO Sync" },
                          { step: "5. Database", text: "Central Catalog" }
                        ].map((inv, i) => (
                          <div key={i} className="p-3 bg-slate-900 border border-white/5 rounded-xl flex flex-col justify-between min-h-[95px] md:min-h-[110px] py-3.5">
                            <span className="font-bold text-white text-xs md:text-sm">{inv.step}</span>
                            <span className="text-[11px] md:text-xs opacity-75 leading-tight">{inv.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "workorder" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <ClipboardList className="text-teal-400 w-6 h-6" /> Work Order Management
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        Create, access, prioritize, monitor, and close all work-orders in one place. Streamline maintenance processes, improve task prioritization, and enhance efficiency.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Manual or automated work order creation via SCADA anomalies",
                          "Assign reactive or preventive requests to technicians",
                          "List, calendar, and geographic dispatch layouts",
                          "Filter by technician, asset, location, and priority level",
                          "Review historical cost trends to lower maintenance spend",
                          "Document active time spent and optimize worker productivity"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Work Order Scope */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-400">Work Order Scope Lifecycle</h4>
                      <div className="grid grid-cols-5 gap-3 text-center text-xs md:text-sm font-mono">
                        {[
                          { step: "Identify", text: "Create Order" },
                          { step: "Scope", text: "Assign Tech" },
                          { step: "Schedule", text: "Parts & Time" },
                          { step: "Execute", text: "Progress Track" },
                          { step: "Close", text: "Audit & Optimize" }
                        ].map((wo, i) => (
                          <div key={i} className="p-3 bg-slate-900 border border-white/5 rounded-xl flex flex-col justify-between min-h-[95px] md:min-h-[110px] py-3.5">
                            <span className="font-bold text-white text-xs md:text-sm">{wo.step}</span>
                            <span className="text-[11px] md:text-xs opacity-75 leading-tight">{wo.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "integrations" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Workflow className="text-teal-400 w-6 h-6" /> Third-Party Integrations
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        Ready-made IOT connectors installable on Windows/Linux to integrate localized SCADA, weather services, cleaning robots, and ERPs seamlessly.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl">
                          <h4 className="text-sm md:text-base font-bold text-white mb-3">Systems</h4>
                          <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc pl-5 font-medium">
                            <li>Weather Forecast</li>
                            <li>BI Tools (PowerBI)</li>
                            <li>Cleaning Robots</li>
                            <li>Solar Trackers</li>
                            <li>Plant SCADA</li>
                          </ul>
                        </div>
                        <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl">
                          <h4 className="text-sm md:text-base font-bold text-white mb-3">Protocols</h4>
                          <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc pl-5 font-medium">
                            <li>OPC-UA / OPC-DA</li>
                            <li>Modbus TCP/IP</li>
                            <li>RS485 Serial</li>
                            <li>SQL Server</li>
                            <li>FTP File Drops</li>
                            <li>REST HTTP API</li>
                          </ul>
                        </div>
                        <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm md:text-base font-bold text-white mb-3">Edge Agent</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                              Cross-platform runtime binary for secure on-site telemetry forwarding.
                            </p>
                          </div>
                          <span className="text-[10px] md:text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded w-fit mt-4 font-bold">ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs md:text-sm font-mono text-slate-300 bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center justify-between font-medium">
                      <span>ERP Connector Status: <strong className="text-teal-400">Synchronized</strong></span>
                      <span>Latency: <strong className="text-teal-400">14ms</strong></span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER IOT SOLUTIONS */}
      <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0da08a]/10 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0da08a]/20 w-fit mx-auto">
                Industrial IoT Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other IoT Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete Industrial IoT offerings cover telemetry, remote monitoring, and advanced performance analytics across industries.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/industrial-iot/solarwiz", abbr: "SolarWiz", label: "SolarWiz", desc: "Renewable telemetry and analytics portal combining edge IoT devices and cloud software for solar power plants." },
              { href: "/industrial-iot/waterwiz", abbr: "WaterWiz", label: "WaterWiz", desc: "Automation and remote monitoring for water supply schemes, STPs, ETPs, and smart irrigation networks." },
              { href: "/industrial-iot/machinewiz", abbr: "MachineWiz", label: "MachineWiz", desc: "Shop-floor production logging, OEE analytics, and condition-based predictive maintenance." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black uppercase tracking-widest mb-4 w-fit">{sol.abbr}</div>
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
      <section className="py-24 text-center relative z-10 bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Ready to Optimize Your Asset Lifecycle?</h2>
            <p className="text-gray-400 mb-8 text-lg">See how AssetWiz can streamline maintenance, track inventory, and maximize asset ROI.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] hover:bg-[#0bc2a5] text-white rounded-full font-bold transition-all shadow-lg shadow-[#0da08a]/20">
              Schedule Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
