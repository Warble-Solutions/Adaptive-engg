import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, FileText, Brain, Clock, Download, TrendingUp, CheckCircle2, Layers, Activity, Target, LineChart, Monitor, Eye, Zap, Wrench, Battery } from "lucide-react";
import { AnalyticsDashboard, AnalyticsHeroDashboards } from "@/components/DashboardMockups";

export const metadata = {
 title: "Advanced Analytics | Unified Renewable Solutions | Adaptive Engineering",
 description: "Advanced data visualization, accurate loss buckets, custom report builder, and historical data analysis for renewable portfolios.",
};

export default function Page() {
 return (
 <div className="flex flex-col w-full">
 {/* HERO — Split Layout: Text left, Dashboards Right */}
 <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
  {/* Background Image with Tint */}
  <div className="absolute inset-0 z-0">
   <img src="/images/renewable/analytics-hero-bg.png" alt="Analytics Solutions" className="w-full h-full object-cover" />
   <div className="absolute inset-0 bg-slate-950/85"></div>
   <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
  </div>

  <div className="absolute inset-0 z-0">
   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
   <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
  </div>
 
 <div className="z-10 max-w-7xl mx-auto w-full relative">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Left — Text */}
 <SectionWrapper>
 <div>
 <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
 <PieChart className="w-4 h-4" />
 <span>Unified Renewable Solution</span>
 </div>
 <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading">
 Advanced <span className="gradient-heading">Analytics</span>
 </h1>
 <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
 Transform raw renewable energy data into actionable intelligence with advanced visualization, accurate loss bucket analysis, and AI-powered insights.
 </p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
 Request Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </SectionWrapper>

 {/* Right — Overlapping Dashboard Cards */}
 <SectionWrapper delay={0.3}>
 <div className="hidden lg:block h-[480px]">
 <AnalyticsHeroDashboards />
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

 {/* CORE CAPABILITIES */}
 <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Analytics Capabilities</h2>
 </SectionWrapper>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {[
 { icon: <BarChart3 className="w-7 h-7" />, title: "Advanced Data Visualization", desc: "Interactive dashboards with drill-down capabilities. Compare performance across plants, inverters, and time periods with dynamic charts.", color: "bg-gradient-to-br from-teal-500 to-teal-500" },
 { icon: <Target className="w-7 h-7" />, title: "Accurate Loss Buckets", desc: "Identify exactly where energy is being lost — soiling, clipping, grid curtailment, equipment degradation. Quantified to the kWh.", color: "bg-gradient-to-br from-teal-500 to-teal-500" },
 { icon: <FileText className="w-7 h-7" />, title: "Custom Report Builder", desc: "Drag-and-drop report designer. Build custom reports for management, O&M teams, and investors with your parameters and branding.", color: "bg-gradient-to-br from-teal-500 to-teal-500" },
 { icon: <LineChart className="w-7 h-7" />, title: "Analyse Historical Data", desc: "Years of historical data at your fingertips. Trend analysis, degradation curves, seasonal patterns, and YoY performance comparison.", color: "bg-gradient-to-br from-teal-500 to-teal-500" },
 ].map((item, i) => (
 <SectionWrapper key={i} delay={i * 0.1}>
 <div className="group p-10 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 shadow-xl hover:shadow-2xl -translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
 <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} rounded-bl-[80px] opacity-5 group-hover:opacity-10 transition-opacity`}></div>
 <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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

 {/* AI / ML Section */}
 <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative z-10">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <SectionWrapper>
 <div>
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
 <Brain className="w-4 h-4" />
 <span>AI/ML Powered</span>
 </div>
 <h2 className="text-4xl font-bold mb-6 font-heading">Intelligence That Learns</h2>
 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
 Our analytics engine uses machine learning to identify patterns in your plant data that human analysis would miss. From anomaly detection to predictive degradation models.
 </p>
 <div className="space-y-4">
 {[
 "AI/ML based performance anomaly detection",
 "Predictive maintenance scheduling",
 "Automated root cause analysis",
 "Weather-correlated performance modeling",
 "Equipment comparison and benchmarking",
 "Export Analysis to Third Party Software (e.g. Power BI)",
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3">
 <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0" />
 <span className="text-gray-300">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </SectionWrapper>
 <SectionWrapper delay={0.2}>
 <div className="h-80">
 <AnalyticsDashboard />
 </div>
 </SectionWrapper>
 </div>
 </div>
 </section>

  {/* ADVANCED LOSS ANALYSIS IMAGE SECTION */}
  <section className="py-20 bg-slate-50 relative z-20">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  <SectionWrapper>
  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
  <img 
  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
  alt="Data Analytics and Modeling" 
  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
  <div className="absolute bottom-6 left-6 text-white">
  <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">AI Modeling</p>
  <h4 className="text-lg font-bold">Predictive Loss Bucket Identification</h4>
  </div>
  </div>
  </SectionWrapper>
  <SectionWrapper delay={0.2}>
  <div>
  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Deep Data Insights</span>
  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Pinpoint inefficiencies with granular accuracy</h3>
  <p className="text-slate-600 leading-relaxed mb-6">
  Don't guess where your losses are. Our advanced analytics engine breaks down performance deficits into distinct loss buckets like inverter clipping, grid limits, dirt/soiling, and heat degradation. Real-time data visualization helps O&M crews act immediately, maximizing generation efficiency.
  </p>
  <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
  <CheckCircle2 className="text-primary w-5 h-5" />
  <span>Automated degradation alerts</span>
  </div>
  <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
  <CheckCircle2 className="text-primary w-5 h-5" />
  <span>Custom CSV and Excel report exports</span>
  </div>
  </div>
  </SectionWrapper>
  </div>
  </div>
  </section>

 {/* OTHER SOLUTIONS */}
 <section className="py-24 bg-white relative z-20">
 <div className="max-w-7xl mx-auto px-6">
 <SectionWrapper>
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
 Unified Renewable Suite
 </div>
 <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
 <p className="text-slate-500 mt-3 max-w-xl mx-auto">Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.</p>
 </div>
 </SectionWrapper>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {[
    { href: "/renewable/unified/scada", label: "SCADA", abbr: "SCADA", icon: <Monitor className="w-5 h-5" />, desc: "Scalable SCADA architecture with rich renewable libraries handling millions of real-time tags." },
    { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all your renewable assets." },
    { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
    { href: "/renewable/unified/cmms", label: "Computerised Maintenance Management", abbr: "CMMS", icon: <Wrench className="w-5 h-5" />, desc: "Automated work orders, SOPs and inventory management for O&M teams." },
    { href: "/renewable/unified/ems-bess", label: "Energy Management System", abbr: "EMS-BESS", icon: <Battery className="w-5 h-5" />, desc: "ML-based energy arbitrage, SoC management, and peak shaving for battery storage." },
  ].map((sol, i) => (
    <SectionWrapper key={i} delay={i * 0.1}>
      <Link href={sol.href} className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/80 rounded-3xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-left">
        {/* Subtle top-right ambient hover highlight */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Category Abbr Pill */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
            {sol.abbr}
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
            {sol.icon}
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
            {sol.label}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed flex-grow">
            {sol.desc}
          </p>
        </div>

        {/* Learn More Action Link */}
        <div className="flex items-center gap-1.5 text-primary font-bold text-sm mt-6 group-hover:gap-2.5 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </SectionWrapper>
  ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-white text-center relative z-20">
 <div className="max-w-2xl mx-auto px-6">
 <SectionWrapper>
 <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Unlock Your Data&apos;s Potential</h2>
 <p className="text-slate-500 mb-8 text-lg">See how advanced analytics can improve your plant performance and reduce losses.</p>
 <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
 Get Analytics Demo <ArrowRight className="w-4 h-4" />
 </Link>
 </SectionWrapper>
 </div>
 </section>
 </div>
 );
}
