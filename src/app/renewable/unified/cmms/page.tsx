import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, ClipboardList, CheckCircle2, Bell, FileCheck, Package, QrCode, Camera, Smartphone, Clock, BarChart3, Users, Shield, Calendar, TrendingDown, Cog, ArrowDown } from "lucide-react";

export const metadata = {
  title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full bg-[#09090b]">

      {/* ═══════════════════════════════════════════ */}
      {/* HERO — Massive type, dark, minimal          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/[0.04] rounded-full blur-[200px]"></div>

        <SectionWrapper>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] text-amber-400/80 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-10 border border-white/[0.06]">
              Unified Renewable Solution
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-white leading-[0.9] tracking-tight font-heading mb-8">
              Maintenance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">that runs itself.</span>
            </h1>

            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Automated work orders. Standardized SOPs. Inventory control. Your entire O&M workflow in one system — so your team can focus on what matters.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-amber-400 transition-colors">
                Request a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact?subject=CMMS" className="inline-flex items-center gap-2 px-8 py-4 text-white/50 rounded-full font-bold text-sm border border-white/10 hover:border-white/25 hover:text-white/80 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </SectionWrapper>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* THE PROBLEM — Large statement                */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <SectionWrapper>
            <p className="text-2xl md:text-4xl font-bold text-white/90 leading-snug tracking-tight">
              Solar plants lose <span className="text-red-400">₹12–18 lakhs per MW per year</span> to
              unplanned downtime. Most of it is preventable — with the right maintenance system.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* 4 PILLARS — Full-width stacked cards         */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="mb-20">
              <span className="text-xs font-bold text-amber-500/60 uppercase tracking-widest block mb-4">What it does</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">Four pillars of<br />intelligent maintenance.</h2>
            </div>
          </SectionWrapper>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Automated Work Orders",
                desc: "SCADA alarm fires → work order auto-creates → nearest qualified technician gets notified → SLA clock starts ticking. No manual intervention. No delays.",
                accent: "from-red-500/20 to-transparent",
                border: "hover:border-red-500/20",
                numColor: "text-red-500/30",
              },
              {
                num: "02",
                title: "Standardized SOPs",
                desc: "Every task follows a defined procedure with step-by-step checklists, embedded images, and mandatory photo evidence. Consistent quality across 100+ sites.",
                accent: "from-amber-500/20 to-transparent",
                border: "hover:border-amber-500/20",
                numColor: "text-amber-500/30",
              },
              {
                num: "03",
                title: "Reduced Mean Time to Repair",
                desc: "AI-driven task prioritization. Auto-assignment based on proximity and skill set. Push notifications with SLA deadlines. Average MTTR reduction: 60%.",
                accent: "from-emerald-500/20 to-transparent",
                border: "hover:border-emerald-500/20",
                numColor: "text-emerald-500/30",
              },
              {
                num: "04",
                title: "Inventory & Cost Control",
                desc: "Track every spare part, consumable, and tool across your fleet. Min/max quantity alerts. Vendor management. Cost-per-work-order analysis.",
                accent: "from-blue-500/20 to-transparent",
                border: "hover:border-blue-500/20",
                numColor: "text-blue-500/30",
              },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`group relative p-10 md:p-14 rounded-3xl border border-white/[0.06] ${item.border} bg-white/[0.02] backdrop-blur-sm transition-all duration-500 overflow-hidden`}>
                  {/* Background glow */}
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <span className={`text-7xl md:text-8xl font-black ${item.numColor} select-none shrink-0 leading-none`}>{item.num}</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* WORKFLOW — Horizontal steps                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-amber-500/60 uppercase tracking-widest block mb-4">The flow</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">Fault to fix.<br />Fully automated.</h2>
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
                <div className="bg-[#09090b] p-8 md:p-10 h-full flex flex-col group hover:bg-white/[0.02] transition-colors">
                  <div className={`${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-white/30 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  <div className="mt-6 text-[10px] font-bold text-white/10 uppercase tracking-widest">Step {(i + 1).toString().padStart(2, '0')}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CAPABILITIES — Clean two-column grid          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="mb-16">
              <span className="text-xs font-bold text-amber-500/60 uppercase tracking-widest block mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">Everything under<br />one roof.</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: <QrCode className="w-5 h-5" />, title: "QR Code Asset ID", desc: "Scan any asset in the field to pull up history, docs, and spare parts." },
              { icon: <Calendar className="w-5 h-5" />, title: "Preventive Scheduling", desc: "Calendar-based and runtime-based PM scheduling with auto-reminders." },
              { icon: <Camera className="w-5 h-5" />, title: "Photo Verification", desc: "Mandatory before/after photos. GPS-stamped. Timestamped. Tamper-proof." },
              { icon: <ClipboardList className="w-5 h-5" />, title: "Pass / Fail / Warn", desc: "Structured task feedbacks with conditional branching and escalation." },
              { icon: <Smartphone className="w-5 h-5" />, title: "Offline Mobile App", desc: "Works in zero-network zones. Syncs automatically when connectivity returns." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Root Cause Analysis", desc: "Incident logging with category tagging and knowledge base auto-update." },
              { icon: <Package className="w-5 h-5" />, title: "Spare Parts Tracking", desc: "Min/max alerts, PO tracking, and cost-per-asset breakdowns." },
              { icon: <Shield className="w-5 h-5" />, title: "SCADA Integration", desc: "Direct alarm-to-work-order pipeline. No manual ticket creation." },
              { icon: <Cog className="w-5 h-5" />, title: "Multi-Step Workflows", desc: "Complex maintenance with nested sub-tasks, dependencies, and approvals." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="group">
                  <div className="text-white/20 group-hover:text-amber-400 transition-colors duration-300 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* METRICS — Large stat blocks                   */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-amber-500/60 uppercase tracking-widest block mb-4">Impact</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">Numbers that matter.</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {[
              { value: "60%", label: "MTTR Reduction", sub: "Mean Time to Repair" },
              { value: "99.1%", label: "Plant Availability", sub: "Across managed fleet" },
              { value: "2,400", label: "Hrs MTBF", sub: "Mean Time Between Failures" },
              { value: "94.6%", label: "OEE Achieved", sub: "Overall Equipment Effectiveness" },
            ].map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-[#09090b] p-8 md:p-10 text-center group hover:bg-white/[0.02] transition-colors">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors">{stat.value}</div>
                  <div className="text-sm font-bold text-white/50 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/20">{stat.sub}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA — Clean and dark                         */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-heading mb-6">
              Ready to eliminate<br />unplanned downtime?
            </h2>
            <p className="text-white/30 text-lg mb-10 max-w-xl mx-auto">
              Talk to our team about deploying CMMS across your renewable portfolio.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-amber-400 transition-colors text-base">
              Schedule a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
