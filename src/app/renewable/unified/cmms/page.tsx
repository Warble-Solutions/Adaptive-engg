import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wrench, ClipboardList, Package, Calendar, CheckCircle2, Bell, QrCode, FileCheck, Users, Settings, Shield, Camera, Clock, BarChart3, Smartphone, TrendingDown, AlertTriangle, Cog } from "lucide-react";
import { CMMSDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Split layout: text left, live dashboard right */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1510] to-[#0f0f0f]"></div>
          {/* Gear/cog pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(234,179,8,0.6) 1.5px, transparent 0)', backgroundSize: '48px 48px' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
          {/* Floating gear icons */}
          <div className="absolute top-20 right-20 opacity-[0.03]">
            <Cog className="w-64 h-64 text-amber-400 animate-[spin_60s_linear_infinite]" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-[0.02]">
            <Cog className="w-48 h-48 text-amber-400 animate-[spin_45s_linear_infinite_reverse]" />
          </div>
        </div>
        <div className="z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 backdrop-blur-sm text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-amber-500/20">
                  <Wrench className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-heading leading-tight">
                  Maintenance,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300">Reimagined.</span>
                </h1>
                <p className="text-gray-400 text-lg font-medium max-w-lg leading-relaxed mb-8">
                  From fault detection to resolution — our CMMS automates the entire maintenance lifecycle. Reduce MTTR by 60%, enforce SOPs, and keep your fleet running at peak performance.
                </p>
                <div className="flex items-center gap-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-full font-bold hover:bg-white transition-colors">
                    Get Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-[#0f0f0f] flex items-center justify-center text-[8px] font-black text-white">
                          {["VK","SP","RM"][i-1]}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">50+ active teams</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="h-[420px]">
                <CMMSDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* BENTO GRID — Core Capabilities */}
      <section className="py-28 bg-[#fafaf8] rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-4 block">Core Capabilities</span>
              <h2 className="text-4xl font-bold text-slate-900 font-heading">Everything You Need to<br />Manage Maintenance</h2>
            </div>
          </SectionWrapper>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large card — Work Orders */}
            <SectionWrapper delay={0.1}>
              <div className="md:col-span-2 md:row-span-2 group bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-tr-[80px]"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <ClipboardList className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Automated Work Orders</h3>
                  <p className="text-white/80 leading-relaxed max-w-sm">
                    Work orders auto-generate from SCADA alarms, scheduled PM tasks, or manual requests. Each follows a configurable lifecycle with SLA tracking and escalation.
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-4 mt-4">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold">Auto-assign</div>
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold">SLA Track</div>
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold">Escalation</div>
                </div>
              </div>
            </SectionWrapper>

            {/* SOPs */}
            <SectionWrapper delay={0.15}>
              <div className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-50 rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Standardized SOPs</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Enforce consistent procedures with rich-text guides, images & checklists.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Reduced MTTR */}
            <SectionWrapper delay={0.2}>
              <div className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-50 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-red-500">-60%</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Reduced MTTR</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">AI-driven task prioritization with automated notifications.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Inventory */}
            <SectionWrapper delay={0.25}>
              <div className="group bg-slate-900 rounded-3xl p-6 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-[60px]"></div>
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">Inventory Control</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Spare parts tracking with min/max alerts & vendor management.</p>
                </div>
                <div className="flex gap-1.5 mt-2 relative z-10">
                  {[85, 62, 94, 45, 78].map((v, i) => (
                    <div key={i} className="flex-1 h-8 bg-white/5 rounded-sm overflow-hidden">
                      <div className={`w-full bg-amber-500/60 rounded-sm transition-all hover:bg-amber-400`} style={{ height: `${v}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Mobile App */}
            <SectionWrapper delay={0.3}>
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Mobile Field App</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Offline-capable app with GPS tracking, photo uploads, and digital signatures.</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Connected timeline */}
      <section className="py-28 bg-slate-900 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(234,179,8,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4 block">How It Works</span>
              <h2 className="text-4xl font-bold font-heading">From <span className="text-amber-400">Fault</span> to <span className="text-emerald-400">Fix</span> — Automated</h2>
            </div>
          </SectionWrapper>

          {/* Connected cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 -translate-y-1/2 z-0"></div>

            {[
              { step: "01", title: "Detect", desc: "SCADA alarm triggers or scheduled PM due date reaches. System auto-creates work order.", icon: <AlertTriangle className="w-5 h-5" />, color: "from-red-500 to-orange-500", dotColor: "bg-red-500" },
              { step: "02", title: "Dispatch", desc: "AI assigns nearest qualified technician. Push notification with priority level and SLA deadline.", icon: <Bell className="w-5 h-5" />, color: "from-orange-500 to-amber-500", dotColor: "bg-amber-500" },
              { step: "03", title: "Execute", desc: "Technician follows SOP checklists on mobile app. Captures photo evidence, logs time and materials.", icon: <Camera className="w-5 h-5" />, color: "from-amber-500 to-yellow-500", dotColor: "bg-yellow-500" },
              { step: "04", title: "Resolve", desc: "Supervisor verifies completion. Root cause logged. Knowledge base auto-updated for future reference.", icon: <CheckCircle2 className="w-5 h-5" />, color: "from-yellow-500 to-emerald-500", dotColor: "bg-emerald-500" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.15}>
                <div className="relative z-10 flex flex-col items-center px-4">
                  {/* Dot on line */}
                  <div className={`w-5 h-5 ${item.dotColor} rounded-full border-4 border-slate-900 shadow-lg mb-6 md:mb-8`}></div>
                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div className="text-[10px] font-black text-amber-400/50 uppercase tracking-widest mb-1">Step {item.step}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs & METRICS */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-4 block">Maintenance Intelligence</span>
              <h2 className="text-4xl font-bold text-slate-900 font-heading">KPIs That Drive Decisions</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { metric: "MTBF", value: "2,400", unit: "hrs", desc: "Mean Time Between Failures", color: "border-t-emerald-500" },
              { metric: "MTTR", value: "3.2", unit: "hrs", desc: "Mean Time to Repair", color: "border-t-amber-500" },
              { metric: "OEE", value: "94.6", unit: "%", desc: "Overall Equipment Effectiveness", color: "border-t-blue-500" },
              { metric: "Availability", value: "99.1", unit: "%", desc: "Plant Availability", color: "border-t-purple-500" },
            ].map((kpi, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl border border-slate-100 ${kpi.color} border-t-4 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{kpi.metric}</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-black text-slate-900">{kpi.value}</span>
                    <span className="text-sm text-slate-400 font-bold">{kpi.unit}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">{kpi.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* Additional capabilities — two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionWrapper delay={0.1}>
              <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-3xl p-8 border border-slate-100 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Settings className="w-5 h-5 text-amber-500" /> Advanced Features
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: <QrCode className="w-4 h-4" />, text: "QR code-based asset identification" },
                    { icon: <Calendar className="w-4 h-4" />, text: "Preventive maintenance scheduling" },
                    { icon: <Camera className="w-4 h-4" />, text: "Mandatory photo uploads for verification" },
                    { icon: <ClipboardList className="w-4 h-4" />, text: "Pass / Fail / Warn task feedbacks" },
                    { icon: <BarChart3 className="w-4 h-4" />, text: "Root cause analysis & incident logging" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all">
                      <span className="text-amber-500">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 border border-slate-100 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" /> Integrations
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: <Cog className="w-4 h-4" />, text: "Direct integration with plant SCADA" },
                    { icon: <Package className="w-4 h-4" />, text: "ERP & billing system connectivity" },
                    { icon: <Users className="w-4 h-4" />, text: "Multi-step, multi-task complex workflows" },
                    { icon: <Clock className="w-4 h-4" />, text: "Real-time SLA monitoring & escalation" },
                    { icon: <Smartphone className="w-4 h-4" />, text: "Cross-platform mobile & desktop access" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all">
                      <span className="text-blue-500">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA — Full-width gradient */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-center relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <Wrench className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-heading">Streamline Your Maintenance.<br />Maximize Uptime.</h2>
            <p className="text-white/80 mb-10 text-lg">See how our CMMS can reduce downtime by 60% and cut O&M costs across your fleet.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-xl">
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?subject=CMMS Brochure" className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-white rounded-full font-bold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Download Brochure
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
