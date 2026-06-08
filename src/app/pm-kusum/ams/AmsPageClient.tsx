"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { 
  ArrowRight, Wrench, Users, Package, ClipboardList, BarChart3, Settings, CheckCircle2, 
  Layers, FileText, QrCode, Bell, Workflow, Shield, Database, Smartphone, 
  Info, Cpu, Clock, RefreshCw, Server, MessageSquare, Folder, GitBranch, ArrowUpRight
} from "lucide-react";

export default function AmsPageClient() {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", icon: <Database className="w-5 h-5" />, label: "Asset Information" },
    { id: "team", icon: <Users className="w-5 h-5" />, label: "Asset Team" },
    { id: "maintenance", icon: <Wrench className="w-5 h-5" />, label: "Maintenance" },
    { id: "inventory", icon: <Package className="w-5 h-5" />, label: "Inventory" },
    { id: "workorder", icon: <ClipboardList className="w-5 h-5" />, label: "Work Orders" },
    { id: "integrations", icon: <Workflow className="w-5 h-5" />, label: "Integrations" }
  ];

  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_ams_1776742293340.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e]/80 via-[#1a0f2e]/60 to-[#1a0f2e]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="z-10 max-w-5xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
              <Wrench className="w-4 h-4" />
              <span>PM-KUSUM · APM Platform</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 font-heading leading-tight">
              Asset Management<br />
              <span className="gradient-heading">System (AMS)</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mt-6">
              Organizations can maximize asset performance through data-driven decision-making and strategic planning by leveraging technology. This ensures reduced risks and long-term reliability and resilience of their infrastructure systems.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* INTERACTIVE MODULE EXPLORER */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20 w-fit">
                APM Suite
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4">APM Modules</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm">
                Leverage seven fully integrated performance modules designed to track, schedule, and optimize your field lifecycle operations.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Sidebar Tabs (Left 4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                    activeTab === tab.id
                      ? "bg-slate-950 border-teal-500/50 text-white shadow-xl translate-x-1"
                      : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === tab.id
                      ? "bg-teal-500 text-white"
                      : "bg-slate-200/50 text-slate-600 group-hover:scale-110"
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
            <div className="lg:col-span-8">
              <div className="bg-slate-950 text-white p-8 md:p-10 rounded-[32px] border border-white/5 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                
                {activeTab === "info" && (
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Database className="text-teal-400 w-6 h-6" /> Asset Information Management
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
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
                            <CheckCircle2 className="text-teal-400 w-4 h-4 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Asset Lifecycle (Image 1 content) */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-4">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Asset Data Lifecycle Flow</h4>
                      <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono">
                        {[
                          { title: "Asset Data", items: "Tree, Meta, Specs", color: "bg-teal-950/40 border-teal-500/20 text-teal-400" },
                          { title: "Teams Data", items: "Hierarchy, Schedule", color: "bg-cyan-950/40 border-cyan-500/20 text-cyan-400" },
                          { title: "Maintenance", items: "SOPs, Schedules", color: "bg-emerald-950/40 border-emerald-500/20 text-emerald-400" },
                          { title: "Documents", items: "3D Models, PDFs", color: "bg-indigo-950/40 border-indigo-500/20 text-indigo-400" },
                          { title: "Contract", items: "Warranty, AMC", color: "bg-purple-950/40 border-purple-500/20 text-purple-400" }
                        ].map((node, i) => (
                          <div key={i} className={`p-2.5 border rounded-xl ${node.color} flex flex-col justify-between h-[80px]`}>
                            <span className="font-bold text-[9px] truncate">{node.title}</span>
                            <span className="text-[8px] opacity-75 leading-tight">{node.items}</span>
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
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
                        A common software environment with Strategic, Managerial, and Operational dashboards and reports that enables real-time visibility of plant operations relevant to each role.
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
                            <CheckCircle2 className="text-teal-400 w-4 h-4 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Team Hierarchy (Image 2 content) */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Team Structure Hierarchy</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { role: "Plant Team", desc: "Supervisors & Technicians", detail: "Ensures work order execution." },
                          { role: "Control Team", desc: "Control Room Managers", detail: "Alarms & AI anomaly analysis." },
                          { role: "Enterprise Team", desc: "Board Room Executive", detail: "Strategic macro view & analytics." }
                        ].map((team, i) => (
                          <div key={i} className="p-3 bg-white/[0.01] border border-white/5 rounded-xl text-center">
                            <h5 className="text-xs font-bold text-white mb-1">{team.role}</h5>
                            <p className="text-[9px] text-teal-400 font-mono">{team.desc}</p>
                            <p className="text-[9px] text-slate-500 mt-1 leading-snug">{team.detail}</p>
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
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        Optimize schedules and build preventative procedures to eliminate under-maintenance and over-maintenance across your entire renewable asset portfolio.
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
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="text-teal-400 w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Maintenance Maturity (Image 3 content) */}
                    <div className="border border-white/5 bg-white/[0.02] p-4 rounded-2xl space-y-3">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Maintenance Maturity Timeline</h4>
                      <div className="grid grid-cols-5 gap-2 text-center text-[8px] font-mono">
                        {[
                          { step: "Reactive", desc: "Breakdowns" },
                          { step: "Planning", desc: "Scheduling" },
                          { step: "Preventive", desc: "Schedules" },
                          { step: "Predictive", desc: "Algorithms" },
                          { step: "Prescriptive", desc: "AI Actions" }
                        ].map((m, i) => (
                          <div key={i} className="p-2 bg-slate-900 border border-white/5 rounded-lg flex flex-col justify-between h-[55px]">
                            <span className="font-bold text-white">{m.step}</span>
                            <span className="opacity-60">{m.desc}</span>
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
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
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
                            <CheckCircle2 className="text-teal-400 w-4 h-4 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Inventory Tracking (Image 4 content) */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Inventory Lifecycle Path</h4>
                      <div className="grid grid-cols-5 gap-2 text-center text-[9px] font-mono">
                        {[
                          { step: "1. Identify", text: "Barcode Scan" },
                          { step: "2. Track", text: "Usage / Loc" },
                          { step: "3. Allocate", text: "Assign parts" },
                          { step: "4. Integrate", text: "ERP PO Sync" },
                          { step: "5. Database", text: "Central Catalog" }
                        ].map((inv, i) => (
                          <div key={i} className="p-2.5 bg-slate-900 border border-white/5 rounded-xl flex flex-col justify-between h-[70px]">
                            <span className="font-bold text-white">{inv.step}</span>
                            <span className="text-[8px] opacity-65 leading-tight">{inv.text}</span>
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
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
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
                            <CheckCircle2 className="text-teal-400 w-4 h-4 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Infographic: Work Order Scope (Image 5 content) */}
                    <div className="border border-white/5 bg-white/[0.02] p-5 rounded-2xl space-y-3">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Work Order Scope Lifecycle</h4>
                      <div className="grid grid-cols-5 gap-2 text-center text-[9px] font-mono">
                        {[
                          { step: "Identify", text: "Create Order" },
                          { step: "Scope", text: "Assign Tech" },
                          { step: "Schedule", text: "Parts & Time" },
                          { step: "Execute", text: "Progress Track" },
                          { step: "Close", text: "Audit & Optimize" }
                        ].map((wo, i) => (
                          <div key={i} className="p-2.5 bg-slate-900 border border-white/5 rounded-xl flex flex-col justify-between h-[70px]">
                            <span className="font-bold text-white">{wo.step}</span>
                            <span className="text-[8px] opacity-65 leading-tight">{wo.text}</span>
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
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">
                        Ready-made IOT connectors installable on Windows/Linux to integrate localized SCADA, weather services, cleaning robots, and ERPs seamlessly.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                          <h4 className="text-xs font-bold text-white mb-2">Systems</h4>
                          <ul className="text-[10px] text-slate-400 space-y-1.5 list-disc pl-3">
                            <li>Weather Forecast</li>
                            <li>BI Tools (PowerBI)</li>
                            <li>Cleaning Robots</li>
                            <li>Solar Trackers</li>
                            <li>Plant SCADA</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                          <h4 className="text-xs font-bold text-white mb-2">Protocols</h4>
                          <ul className="text-[10px] text-slate-400 space-y-1.5 list-disc pl-3">
                            <li>OPC-UA / OPC-DA</li>
                            <li>Modbus TCP/IP</li>
                            <li>RS485 Serial</li>
                            <li>SQL Server</li>
                            <li>FTP File Drops</li>
                            <li>REST HTTP API</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col justify-between">
                          <h4 className="text-xs font-bold text-white mb-2">Edge Agent</h4>
                          <p className="text-[9px] text-slate-500 leading-normal">
                            Cross-platform runtime binary for secure on-site telemetry forwarding.
                          </p>
                          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded w-fit mt-2">ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center justify-between">
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
              { href: "/pm-kusum/ht-panel", abbr: "HT Panel", label: "HT Panel Solutions", desc: "VCB panels up to 33kV with numerical protection and motorized racking." },
              { href: "/pm-kusum/acdb-panels", abbr: "ACDB", label: "ACDB Panel Solutions", desc: "IP65 rated AC Distribution Boards with surge protection for solar pump connections." },
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
      <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Optimize Your Asset Lifecycle</h2>
            <p className="text-slate-500 mb-8 text-lg">See how AMS can streamline maintenance and maximize asset ROI.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
              Schedule Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
