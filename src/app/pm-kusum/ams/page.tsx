import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, Users, Package, ClipboardList, BarChart3, Settings, CheckCircle2, Layers, FileText, QrCode, Bell, Workflow, Shield, Database } from "lucide-react";

export const metadata = {
  title: "Asset Management System (AMS) | PM-KUSUM | Adaptive Engineering",
  description: "Comprehensive Asset Performance Management for PM-KUSUM — asset info management, maintenance management, inventory, work orders, and analytics.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO — Kanban/workflow gradient */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_ams_1776742293340.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e]/80 via-[#1a0f2e]/60 to-[#1a0f2e]/90 mix-blend-multiply"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
              <Wrench className="w-4 h-4" />
              <span>PM-KUSUM</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
              Asset Management<br />
              <span className="gradient-heading">System (AMS)</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mt-6">
              Comprehensive Asset Performance Management for PM-KUSUM installations. Manage assets, teams, maintenance, inventory, and work orders from a single platform.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* APM MODULES — Light Premium style */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-sm text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                <Layers className="w-4 h-4" />
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 tracking-tight">APM <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-500">Modules</span></h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">Seven integrated modules engineered to provide complete visibility and control over your entire asset lifecycle.</p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Asset Info Management",
                desc: "Complete asset registry with hierarchy, specifications, warranty tracking, and documentation. QR code-based field identification.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["Asset hierarchy & classification", "Specification sheets", "Lifecycle tracking", "QR asset tagging"]
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Team Management",
                desc: "Organize O&M teams with skills matrix, shift scheduling, and performance tracking.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["Skills matrix & certification", "Shift scheduling", "Attendance tracking", "Performance analytics"]
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Maintenance Management",
                desc: "Preventive, predictive, and corrective maintenance workflows with SOP enforcement.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["Preventive schedules", "Predictive triggers", "Standard Operating Proc.", "Multi-step workflows"]
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Inventory Management",
                desc: "Track spare parts, consumables, and tools across all sites with min/max alerts.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["Part catalog with specs", "Min/Max quantity alerts", "Vendor management", "Purchase tracking"]
              },
              {
                icon: <ClipboardList className="w-6 h-6" />,
                title: "Work Order Management",
                desc: "Create, assign, execute, and close work orders with full audit trail and photo evidence.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["Auto-assignment rules", "Priority & SLA tracking", "Photo evidence uploads", "Pass/Fail feedbacks"]
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Third-Party Integrations",
                desc: "Connect with SCADA, ERP, billing, and other enterprise systems via open APIs.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["SCADA data integration", "ERP connectivity", "Billing system sync", "REST API & webhooks"]
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Analytics & Reports",
                desc: "Comprehensive KPIs — MTBF, MTTR, OEE, availability, and cost per asset analytics.",
                color: "from-teal-500 to-teal-500",
                shadow: "shadow-teal-500/20",
                items: ["MTBF & MTTR dashboards", "Cost per asset tracking", "Availability analytics", "Custom report builder"],
                span: "lg:col-start-2" // Center the 7th item exactly within the 3-column grid
              },
            ].map((module, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`group p-8 bg-slate-50/50 backdrop-blur-md rounded-3xl border border-slate-200 hover:bg-white hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full relative overflow-hidden flex flex-col ${module.span || ''}`}>
                  
                  {/* Glowing background orb effect */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${module.color} rounded-full opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700`}></div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-white shadow-lg ${module.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{module.title}</h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-slate-700 transition-colors">{module.desc}</p>
                  
                  <div className="space-y-3 relative z-10 bg-slate-100/80 group-hover:bg-[#0da08a] bg-slate-50 p-5 rounded-2xl border border-slate-200/60 transition-colors">
                    {module.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 group-hover:bg-white hover:text-slate-900 transition-colors">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 text-transparent bg-clip-text bg-gradient-to-br ${module.color}`} style={{ color: "unset" }} />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION SERVICES */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">Implementation Services</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-teal-500/30"></div>
            {[
              { step: "1", title: "Assess", desc: "Site survey, asset inventory, and maintenance process audit" },
              { step: "2", title: "Configure", desc: "System setup, asset hierarchy, SOP templates, and user roles" },
              { step: "3", title: "Train", desc: "Hands-on training for field teams with mobile app deployment" },
              { step: "4", title: "Support", desc: "24/7 helpdesk, quarterly reviews, and continuous improvement" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-800 border-4 border-teal-500/30 rounded-full flex items-center justify-center text-teal-400 mb-6 shadow-lg hover:bg-slate-700 scale-110 transition-transform">
                    <span className="text-2xl font-black">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10">
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
