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
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />

      {/* HERO — Kanban/workflow gradient */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#1e1a3a] to-[#0f0a1e]"></div>
          {/* Kanban-like vertical lanes */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 199px, rgba(168,85,247,0.4) 200px)', backgroundSize: '200px 100%' }}></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-500/10 backdrop-blur-sm text-violet-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-violet-500/20">
              <Wrench className="w-4 h-4" />
              <span>PM-KUSUM</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
              Asset Management<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">System (AMS)</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mt-6">
              Comprehensive Asset Performance Management for PM-KUSUM installations. Manage assets, teams, maintenance, inventory, and work orders from a single platform.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* APM MODULES — Card-based kanban style */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-4 font-heading">APM Modules</h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-16">Seven integrated modules for complete asset lifecycle management</p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-7 h-7" />,
                title: "Asset Info Management",
                desc: "Complete asset registry with hierarchy, specifications, warranty tracking, and documentation. QR code-based field identification.",
                color: "from-violet-500 to-purple-500",
                items: ["Asset hierarchy & classification", "Specification sheets", "Warranty & lifecycle tracking", "QR code asset tagging"]
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Team Management",
                desc: "Organize O&M teams with skills matrix, shift scheduling, and performance tracking.",
                color: "from-blue-500 to-cyan-500",
                items: ["Skills matrix & certification", "Shift scheduling", "Attendance tracking", "Performance analytics"]
              },
              {
                icon: <Wrench className="w-7 h-7" />,
                title: "Maintenance Management",
                desc: "Preventive, predictive, and corrective maintenance workflows with SOP enforcement.",
                color: "from-emerald-500 to-teal-500",
                items: ["Preventive maintenance schedules", "Predictive maintenance triggers", "Standard Operating Procedures", "Multi-step task workflows"]
              },
              {
                icon: <Package className="w-7 h-7" />,
                title: "Inventory Management",
                desc: "Track spare parts, consumables, and tools across all sites with min/max alerts.",
                color: "from-amber-500 to-orange-500",
                items: ["Part catalog with specifications", "Min/Max quantity alerts", "Vendor management", "Purchase order tracking"]
              },
              {
                icon: <ClipboardList className="w-7 h-7" />,
                title: "Work Order Management",
                desc: "Create, assign, execute, and close work orders with full audit trail and photo evidence.",
                color: "from-rose-500 to-pink-500",
                items: ["Auto-assignment rules", "Priority & SLA tracking", "Photo evidence uploads", "Pass/Fail/Warn feedbacks"]
              },
              {
                icon: <Workflow className="w-7 h-7" />,
                title: "Third-Party Integrations",
                desc: "Connect with SCADA, ERP, billing, and other enterprise systems via open APIs.",
                color: "from-indigo-500 to-blue-500",
                items: ["SCADA data integration", "ERP connectivity", "Billing system sync", "REST API & webhooks"]
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Analytics & Reports",
                desc: "Comprehensive KPIs — MTBF, MTTR, OEE, availability, and cost per asset analytics.",
                color: "from-fuchsia-500 to-violet-500",
                items: ["MTBF & MTTR dashboards", "Cost per asset tracking", "Availability analytics", "Custom report builder"]
              },
            ].map((module, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${module.color}`}></div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{module.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{module.desc}</p>
                  <div className="space-y-2">
                    {module.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full shrink-0"></div>
                        <span>{item}</span>
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
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-violet-500/30"></div>
            {[
              { step: "1", title: "Assess", desc: "Site survey, asset inventory, and maintenance process audit" },
              { step: "2", title: "Configure", desc: "System setup, asset hierarchy, SOP templates, and user roles" },
              { step: "3", title: "Train", desc: "Hands-on training for field teams with mobile app deployment" },
              { step: "4", title: "Support", desc: "24/7 helpdesk, quarterly reviews, and continuous improvement" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-800 border-4 border-violet-500/30 rounded-full flex items-center justify-center text-violet-400 mb-6 shadow-lg hover:scale-110 transition-transform">
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
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-bold hover:from-violet-700 hover:to-fuchsia-700 transition-all">
              Schedule Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
