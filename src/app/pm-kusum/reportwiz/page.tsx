import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, FileText, BarChart3, PieChart, Clock, Download, TrendingUp, CheckCircle2, Table2, LineChart, Calendar, Filter, Layers } from "lucide-react";

export const metadata = {
 title: "ReportWiz | PM-KUSUM | Adaptive Engineering",
 description: "Automated reporting platform with KPI insights, custom reports, AI/ML analytics, and multi-format export for renewable energy plants.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

 {/* HERO — Data visualization gradient with colored accent panels */}
 <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_reportwiz_1776742405186.png')] bg-cover bg-center">
 <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/60 to-[#0B1120]/90 mix-blend-multiply"></div>
 {/* Chart-like vertical bars */}
 <div className="absolute bottom-0 left-0 w-full h-1/3 flex items-end justify-around px-20 opacity-[0.06]">
 {[40, 65, 85, 50, 70, 90, 55, 75, 60, 80, 45, 70].map((h, i) => (
 <div key={i} className="w-8 bg-gradient-to-t from-primary to-teal-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
 ))}
 </div>
 </div>
 <div className="z-10 max-w-7xl relative">
 <SectionWrapper>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
 <FileText className="w-4 h-4" />
 <span>PM-KUSUM</span>
 </div>
 <h1 className="text-5xl md:text-8xl font-black text-white mb-4 font-heading">
 Report<span className="gradient-heading">Wiz</span>
 </h1>
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mt-6">
 Automated reporting platform with KPI insights, custom reports, AI/ML analytics, and scheduled multi-format exports for renewable energy portfolios.
 </p>
 </SectionWrapper>
 </div>
 </section>

  {/* CORE FEATURES — Colored accent panels */}
  <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0da08a]/10 text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0da08a]/20">
            ReportWiz Workspace
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading">
            Enterprise Reporting Capabilities
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Design, schedule, and automate compliance reports for your entire solar fleet.
          </p>
        </div>
      </SectionWrapper>

      {/* Grid: 3 Columns of Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { icon: <TrendingUp className="w-7 h-7" />, title: "KPI & Performance Insights", desc: "Track PR, CUF, specific yield, GHI, PLF, and more. Auto-benchmarking against contractual targets.", accent: "border-l-teal-500 bg-teal-50/30" },
          { icon: <Filter className="w-7 h-7" />, title: "Custom Reports", desc: "Design bespoke reports with drag-and-drop parameter selection. Custom date ranges, grouping, and filtering.", accent: "border-l-cyan-500 bg-teal-50/30" },
          { icon: <BarChart3 className="w-7 h-7" />, title: "Advance Analytical Charts", desc: "Interactive charts — line, bar, heatmap, scatter, box plots. Drill-down from portfolio to string level.", accent: "border-l-teal-500 bg-teal-50/30" },

          { icon: <Calendar className="w-7 h-7" />, title: "Scheduled Reporting", desc: "Auto-generate daily, weekly, monthly, and annual reports. Email to stakeholders on schedule.", accent: "border-l-amber-500 bg-teal-50/30" },
          { icon: <Download className="w-7 h-7" />, title: "Multi Format Export", desc: "Export in PDF, Excel, CSV. Branded templates with your company logo and custom headers.", accent: "border-l-rose-500 bg-rose-50/30" },
          { icon: <Layers className="w-7 h-7" />, title: "Standard Report", desc: "Access library of standard reporting templates for regulatory compliance, grid billing, and status tracking.", accent: "border-l-indigo-500 bg-teal-50/30" },
        ].map((item, i) => (
          <SectionWrapper key={i} delay={i * 0.08}>
            <div className={`group p-8 ${item.accent} rounded-2xl border border-slate-100 border-l-4 shadow-xl hover:border-primary/50 hover:shadow-2xl -translate-y-1 transition-all duration-300 h-full`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-700 mb-5 shadow-md group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </SectionWrapper>
        ))}
      </div>

    </div>
  </section>




  {/* REPORT TYPES */}
 <section className="py-28 bg-transparent text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 {/* Standard Reports */}
 <SectionWrapper delay={0.1}>
 <div className="p-10 bg-white/5 border border-white/10 rounded-3xl h-full">
 <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">Standard Reports</div>
 <h3 className="text-2xl font-bold text-white mb-6">Standard Report Benefits</h3>
 <div className="space-y-4">
 {[
 "Streamlined Operations",
 "Improved Accuracy",
 "Enhanced Efficiency",
 "Comprehensive Insights",
 "Better Collaboration",
 "Scalability",
 "Faster Problem Identification",
 "Centralized Management",
 "Increased Flexibility",
 "Better Decision – Making",
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3">
 <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
 <span className="text-gray-300 text-sm">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>

  {/* Analytic Reports */}
  <SectionWrapper delay={0.2}>
  <div className="p-10 bg-white/5 border border-white/10 rounded-3xl h-full">
  <div className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Analytic Reports</div>
  <h3 className="text-2xl font-bold text-white mb-6">Performance & Device Analytics</h3>
  <div className="space-y-4">
  {[
  "Comparison of Device Efficiency",
  "Cross-comparison",
  "Customized Report Generation",
  "Identification Best and Worst Performing Devices",
  "Equipment Performance Monitoring",
  "Performance Analytics",
  "Inverter Efficiency",
  "Monitoring and Alerts",
  ].map((item, i) => (
  <div key={i} className="flex items-center gap-3">
  <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0" />
  <span className="text-gray-300 text-sm">{item}</span>
  </div>
  ))}
  </div>
  </div>
  </SectionWrapper>
 </div>
 </div>
 </section>

  {/* BENEFITS — Sleek dark container */}
  <section className="py-24 bg-slate-950 relative z-20 border-t border-white/5">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20 w-fit">
            Value Creation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-heading">
            Why <span className="gradient-heading">ReportWiz</span>?
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Discover the business value and operational efficiency unlocked by automated, certified telemetry auditing.
          </p>
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {[
          { num: "01", title: "Streamlined Operations", desc: "Eliminate manual report preparation and spreadsheet errors." },
          { num: "02", title: "Improved Accuracy", desc: "Data feeds directly from SCADA telemetry for absolute reliability." },
          { num: "03", title: "Enhanced Efficiency", desc: "Generate multi-plant portfolio reports in seconds instead of hours." },
          { num: "04", title: "Comprehensive Insights", desc: "Correlate weather data, meter registries, and inverter telemetry." },
          { num: "05", title: "Better Collaboration", desc: "Auto-share styled reports directly with operators and team members." },
          { num: "06", title: "Scalability", desc: "Configure and expand telemetry reporting for hundreds of active solar arrays." },
          { num: "07", title: "Faster Problem Identification", desc: "Pinpoint string drop-offs and system anomalies in near real-time." },
          { num: "08", title: "Centralized Management", desc: "Monitor all plant KPIs and compliance outputs from a single screen." },
          { num: "09", title: "Increased Flexibility", desc: "Filter, group, and extract raw database values exactly how you need." },
          { num: "10", title: "Better Decision-Making", desc: "Utilize verified data model algorithms for commercial and operations planning." }
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
 <section className="py-20 bg-transparent text-center relative z-10">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-white mb-6 font-heading">Transform Your Reporting</h2>
 <p className="text-gray-400 mb-8 text-lg">See how ReportWiz can automate your entire reporting workflow.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
 Request Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
