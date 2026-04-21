import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, ClipboardList, CheckCircle2, Bell, FileCheck, Package, QrCode, Camera, Smartphone, Clock, BarChart3, Users, Shield, Calendar, Cog } from "lucide-react";
import { CMMSDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════════ */}
      {/* HERO — Dashboard background with blur        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a0a] via-[#2d2d16] to-[#1a1a0a]">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(45deg, rgba(234,179,8,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(234,179,8,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Dashboard in background */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
          <div className="w-[900px] h-[520px] scale-[1.3] opacity-30">
            <CMMSDashboard />
          </div>
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-[6px]"></div>
          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a0a]/60 via-transparent to-[#1a1a0a]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a0a]/50 via-transparent to-[#1a1a0a]/50"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 backdrop-blur-sm text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-amber-500/20">
              <Wrench className="w-4 h-4" />
              <span>Unified Renewable Solution</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-heading leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              Computerized Maintenance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Management System</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Automated workorder management, standardized SOPs across the enterprise, reduced mean time to repair, and effective cost control with inventory management.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FOUR PILLARS — Full-width stacked cards      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionWrapper>
            <div className="mb-16">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-4">What it does</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-heading">Four pillars of<br />intelligent maintenance.</h2>
            </div>
          </SectionWrapper>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Automated Work Orders",
                desc: "SCADA alarm fires → work order auto-creates → nearest qualified technician gets notified → SLA clock starts ticking. No manual intervention. No delays.",
                accent: "from-red-500/10 to-transparent",
                border: "hover:border-red-200",
                numColor: "text-red-500/20",
              },
              {
                num: "02",
                title: "Standardized SOPs",
                desc: "Every task follows a defined procedure with step-by-step checklists, embedded images, and mandatory photo evidence. Consistent quality across 100+ sites.",
                accent: "from-amber-500/10 to-transparent",
                border: "hover:border-amber-200",
                numColor: "text-amber-500/20",
              },
              {
                num: "03",
                title: "Reduced Mean Time to Repair",
                desc: "AI-driven task prioritization. Auto-assignment based on proximity and skill set. Push notifications with SLA deadlines. Average MTTR reduction: 60%.",
                accent: "from-emerald-500/10 to-transparent",
                border: "hover:border-emerald-200",
                numColor: "text-emerald-500/20",
              },
              {
                num: "04",
                title: "Inventory & Cost Control",
                desc: "Track every spare part, consumable, and tool across your fleet. Min/max quantity alerts. Vendor management. Cost-per-work-order analysis.",
                accent: "from-blue-500/10 to-transparent",
                border: "hover:border-blue-200",
                numColor: "text-blue-500/20",
              },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`group relative p-10 md:p-14 rounded-3xl border border-slate-100 ${item.border} bg-white hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <span className={`text-7xl md:text-8xl font-black ${item.numColor} select-none shrink-0 leading-none`}>{item.num}</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* WORKFLOW — Fault to Fix                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-amber-400/70 uppercase tracking-widest block mb-4">The flow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Fault to fix.<br />Fully automated.</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {[
              { step: "Detect", icon: <Bell className="w-6 h-6" />, desc: "SCADA alarm triggers or scheduled PM due date reached", color: "text-red-400" },
              { step: "Dispatch", icon: <Users className="w-6 h-6" />, desc: "Auto-assign to nearest qualified technician with SLA", color: "text-amber-400" },
              { step: "Execute", icon: <Camera className="w-6 h-6" />, desc: "Follow SOP checklists, capture photo evidence on mobile", color: "text-yellow-400" },
              { step: "Resolve", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Verify completion, log root cause, update knowledge base", color: "text-emerald-400" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-slate-900/80 backdrop-blur-sm p-8 md:p-10 h-full flex flex-col group hover:bg-white/[0.04] transition-colors">
                  <div className={`${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  <div className="mt-6 text-[10px] font-bold text-white/10 uppercase tracking-widest">Step {(i + 1).toString().padStart(2, '0')}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ADDITIONAL CAPABILITIES                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 font-heading">Additional Capabilities</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <QrCode className="w-5 h-5" />, text: "QR code-based asset identification" },
              { icon: <ClipboardList className="w-5 h-5" />, text: "Multi-step, multi-task complex maintenance" },
              { icon: <Calendar className="w-5 h-5" />, text: "Preventive maintenance scheduling" },
              { icon: <BarChart3 className="w-5 h-5" />, text: "Comprehensive KPIs (MTBF, MTTR, OEE)" },
              { icon: <FileCheck className="w-5 h-5" />, text: "Root cause analysis & incident logging" },
              { icon: <Smartphone className="w-5 h-5" />, text: "Mobile asset management app" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Pass / Fail / Warn task feedbacks" },
              { icon: <Camera className="w-5 h-5" />, text: "Mandatory photo uploads for verification" },
              { icon: <Cog className="w-5 h-5" />, text: "Integration with plant SCADA & ERP" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-500/30 hover:shadow-md transition-all duration-300">
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="font-medium text-slate-700 text-sm">{item.text}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA                                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 bg-transparent text-center relative z-10">
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
