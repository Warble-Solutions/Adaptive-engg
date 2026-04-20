import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, ClipboardList, Package, Calendar, CheckCircle2, Bell, QrCode, FileCheck, Users, Settings, Shield } from "lucide-react";

export const metadata = {
  title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Mechanical / workflow gradient */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a0a] via-[#2d2d16] to-[#1a1a0a]">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(45deg, rgba(234,179,8,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(234,179,8,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 backdrop-blur-sm text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-amber-500/20">
              <Wrench className="w-4 h-4" />
              <span>Unified Renewable Solution</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
              Computerized Maintenance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Management System</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Automated workorder management, standardized SOPs across the enterprise, reduced mean time to repair, and effective cost control with inventory management.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">CMMS Capabilities</h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <ClipboardList className="w-7 h-7" />, title: "Automated Workorder Management", desc: "Create, assign, track, and close work orders automatically based on SCADA alarms, scheduled maintenance, or manual requests. Full lifecycle tracking.", color: "border-l-amber-500" },
              { icon: <FileCheck className="w-7 h-7" />, title: "Standardized SOPs Across Enterprise", desc: "Enforce consistent maintenance procedures across all sites. Built-in how-to manuals with rich text, images, and media files for each task type.", color: "border-l-emerald-500" },
              { icon: <Bell className="w-7 h-7" />, title: "Reduced Mean Time to Repair", desc: "Automated scheduling and notification system. AI-driven task prioritization ensures critical issues get immediate attention and faster resolution.", color: "border-l-red-500" },
              { icon: <Package className="w-7 h-7" />, title: "Effective Cost Control & Inventory Management", desc: "Track spare parts consumption with work orders. Min/max quantity alerts, vendor management, and bar-code based asset tracking.", color: "border-l-blue-500" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`group p-8 bg-white rounded-2xl border border-slate-100 ${item.color} border-l-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full`}>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE WORKFLOW */}
      <section className="py-24 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">Maintenance Workflow</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-amber-500/30 -z-0"></div>
            {[
              { step: "1", title: "Detect", desc: "Automated fault detection via SCADA integration or manual reporting" },
              { step: "2", title: "Assign", desc: "Auto-assign to nearest qualified technician with SLA tracking" },
              { step: "3", title: "Execute", desc: "Mobile app with checklists, photo evidence, and SOPs" },
              { step: "4", title: "Close", desc: "Verification, root cause logging, and knowledge base update" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-800 border-4 border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
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

      {/* ADDITIONAL FEATURES */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Additional Capabilities</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "QR code-based asset identification",
              "Multi-step, multi-task complex maintenance",
              "Preventive maintenance scheduling",
              "Comprehensive KPIs (MTBF, MTTR, OEE)",
              "Root cause analysis & incident logging",
              "Mobile asset management app",
              "Pass/Fail/Warn task feedbacks",
              "Mandatory photo uploads for verification",
              "Integration with plant SCADA & ERP",
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-500/30 hover:shadow-md transition-all duration-300">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 shrink-0" />
                  <span className="font-medium text-slate-700 text-sm">{item}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Streamline Your Maintenance Operations</h2>
            <p className="text-gray-400 mb-8 text-lg">See how CMMS can reduce downtime and optimize your O&M costs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-slate-900 rounded-full font-bold hover:bg-white transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
