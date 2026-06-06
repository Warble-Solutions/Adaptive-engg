import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, FileText, Brain, Clock, Download, TrendingUp, CheckCircle2, Layers, Activity, Target, LineChart, Monitor, Eye, Zap, Wrench, Battery, Mail, Bell, Database } from "lucide-react";
import { AnalyticsDashboard, AnalyticsHeroDashboards, AnalyticsVisibilityDashboard, Scale500GWDashboard } from "@/components/DashboardMockups";

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

  {/* GAIN SUPERIOR VISIBILITY WITH AEPL ADVANCE ANALYTICS */}
  <section className="py-24 bg-slate-50 border-t border-slate-100 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
            <FileText className="w-4 h-4" />
            <span>Visibility & Reports</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-heading leading-tight">
            Gain Superior Visibility with AEPL Advanced Analytics
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Standardize, automate, and secure your plant reporting workflows. Eliminate manual data collection and compile portfolio performance insights into custom, beautiful templates.
          </p>
        </div>
      </SectionWrapper>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Enterprise Custom Report Builder (col-span-2) */}
        <SectionWrapper delay={0.1} className="md:col-span-2">
          <div className="p-8 md:p-10 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-slate-200 transition-all duration-500 h-full flex flex-col md:flex-row gap-8 justify-between relative overflow-hidden group">
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-3">Enterprise Custom Report Builder</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Build custom layouts with our drag-and-drop report designer. Set up rules for automated report generation on schedule, instantly converting live plant data into polished PDF and CSV files.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-600">
                <span>Real-Time & Scheduled KPI Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
            
            {/* Visual: Report Builder Canvas Preview */}
            <div className="flex-1 bg-slate-950/95 border border-slate-800 rounded-2xl p-4 text-white flex flex-col justify-between min-h-[240px] md:min-h-0 relative select-none">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Canvas: Monthly PR Template</span>
                <span className="text-[8px] bg-teal-500/10 border border-teal-500/20 text-teal-400 px-1.5 py-0.5 rounded font-mono">DRAFT</span>
              </div>
              
              <div className="space-y-2 flex-grow flex flex-col justify-center">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between text-[10px] cursor-move hover:bg-[#0da08a]/20 hover:border-[#0da08a]/40 transition-colors">
                  <span className="font-bold text-slate-300">Section 1: Portfolio CUF Tile</span>
                  <span className="text-[8px] text-slate-500 font-mono">2x1 Grid</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between text-[10px] cursor-move hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <span className="font-bold text-slate-300">Section 2: Generation Curve</span>
                  <span className="text-[8px] text-slate-500 font-mono">2x3 Grid</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between text-[10px] cursor-move hover:bg-pink-500/20 hover:border-pink-500/40 transition-colors">
                  <span className="font-bold text-slate-300">Section 3: Loss Breakdown Pie</span>
                  <span className="text-[8px] text-slate-500 font-mono">1x2 Grid</span>
                </div>
              </div>
              
              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500">
                <span>Formats: PDF • CSV • XLS</span>
                <span className="text-teal-400 font-mono font-bold">Preview Live</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Card 2: Conversational AI-Based Insights (col-span-1) */}
        <SectionWrapper delay={0.2}>
          <div className="p-8 bg-slate-950 border border-slate-900 rounded-3xl shadow-xl hover:shadow-2xl hover:border-teal-500/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Conversational AI Insights</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Query reports via natural language. AI scans telemetry patterns to detect anomalies, log degradation, and suggest maintenance tasks.
              </p>
            </div>
            
            {/* Visual: Chat Interface */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 space-y-3 font-sans select-none shrink-0 z-10">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[8px] text-slate-300 font-bold">U</div>
                <div className="bg-white/5 border border-white/5 text-[9px] rounded-lg p-2 text-slate-200 leading-snug">
                  What caused the generation dip at Rajasthan Site Block B yesterday?
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex-shrink-0 flex items-center justify-center text-[8px] font-bold border border-teal-500/30">AI</div>
                <div className="bg-teal-500/10 border border-teal-500/20 text-[9px] rounded-lg p-2 text-teal-300 leading-snug">
                  Block B was affected by severe dirt buildup on panels. Estimated loss: <span className="font-mono text-white font-bold">1.8 MWh</span>. 
                  <span className="block mt-1 font-bold text-white underline cursor-pointer">Schedule Cleaning Job?</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Card 3: Seamless Integration (col-span-1) */}
        <SectionWrapper delay={0.3}>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-slate-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Seamless Integration</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Ingest diverse Modbus, OPC UA, and WebAPI streams from heterogeneous solar and wind OEMs into a standardized, unified semantic structure.
              </p>
            </div>
            
            {/* Visual: Data pipeline visualization */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between text-[10px] font-mono select-none">
              <div className="space-y-1 text-slate-500">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Modbus</div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>OPC UA</div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>WebAPI</div>
              </div>
              <div className="text-slate-400 animate-pulse text-[8px] shrink-0 font-bold px-2">➔</div>
              <div className="bg-teal-500/10 border border-teal-500/20 text-teal-600 rounded-xl px-3 py-2 text-center flex flex-col items-center justify-center">
                <Database className="w-4 h-4 mb-1" />
                <span className="font-bold text-[8px]">Standardized</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Card 4: Secure Storage & RBAC (col-span-1) */}
        <SectionWrapper delay={0.4}>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-slate-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Secure Archival & Sharing</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Safely store historical records for decades. Grant secure access to internal and external partners using role-based permissions.
              </p>
            </div>
            
            {/* Visual: Role list */}
            <div className="space-y-1 bg-slate-50 border border-slate-100 rounded-2xl p-3 select-none">
              {[
                { role: "Administrator", rights: "Full Controls", badge: "bg-teal-500/10 text-teal-600" },
                { role: "O&M Contractor", rights: "Alarms & Logs", badge: "bg-amber-500/10 text-amber-600" },
                { role: "Investor Group", rights: "Read-Only reports", badge: "bg-blue-500/10 text-blue-600" },
              ].map((rbac, idx) => (
                <div key={idx} className="flex items-center justify-between text-[9px] py-1 border-b border-slate-100 last:border-0">
                  <span className="font-bold text-slate-700">{rbac.role}</span>
                  <span className={`px-1.5 py-0.2 rounded font-mono ${rbac.badge}`}>{rbac.rights}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Card 5: Event, Alarm & Downtime (col-span-1) */}
        <SectionWrapper delay={0.5}>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-slate-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Alarms & Downtime Reports</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Detailed audit logs capturing exact plant drop reasons, equipment shutdowns, and grid curtailment penalties quantified to the kWh.
              </p>
            </div>
            
            {/* Visual: Mini Alarm log */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 space-y-1.5 select-none font-mono text-[9px]">
              <div className="flex justify-between items-center text-red-500 bg-red-50 border border-red-100 px-2 py-1 rounded">
                <span>[INV-07] DC Ground Fault</span>
                <span className="font-bold">-4.5 MWh</span>
              </div>
              <div className="flex justify-between items-center text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded">
                <span>[SUB-03] Grid Curtailment</span>
                <span className="font-bold">-2.1 MWh</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Card 6: Automated Distribution at Scale (col-span-3) */}
        <SectionWrapper delay={0.6} className="md:col-span-3">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-slate-200 transition-all duration-500 h-full flex flex-col md:flex-row gap-8 justify-between relative overflow-hidden group">
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-3">Intelligent Scheduling & Queued Distribution</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Distribute reports to hundreds of stakeholders simultaneously and reliably. Built-in message queuing and SMTP retry policies ensure report packages are sent without email server failures or limits.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-600">
                <span>Automatic Scheduling Queue Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
            
            {/* Visual: Delivery status bar */}
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-white flex flex-col justify-between min-h-[220px] md:min-h-0 relative select-none">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Queue: Weekly Performance Mailer</span>
                <span className="text-[8px] bg-teal-500/10 border border-teal-500/20 text-teal-400 px-1.5 py-0.5 rounded font-mono">PROCESSING</span>
              </div>
              
              <div className="space-y-3 my-4">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Total Recipients:</span>
                  <span className="font-bold text-white font-mono">148 Stakeholders</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <div className="h-full bg-teal-400 rounded-full animate-pulse" style={{ width: '74%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[9px] text-slate-500">
                  <span>Sent: 110 (74%)</span>
                  <span>Failed: 0 (0%)</span>
                  <span className="text-teal-400 font-bold animate-pulse">Delivering...</span>
                </div>
              </div>
              
              <div className="text-[8px] font-mono text-slate-500 pt-2 border-t border-white/5 flex justify-between items-center">
                <span>Relay server: SMTP-01.AEPL</span>
                <span className="text-teal-400 font-bold uppercase">SMTP Secure Connected</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

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

  {/* THE ROAD TO 500GW+ */}
  <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-900 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
        <div className="lg:col-span-7">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
              <Layers className="w-4 h-4" />
              <span>Next-Gen Portfolios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight">
              The Road to 500GW+
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              As global energy goals expand to hundreds of gigawatts, operators must transition from static local reporting to unified, real-time, portfolio-scale telemetry pipelines.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Standardizing multi-OEM tech stacks, handling petabytes of data, and running consistent KPI logic across heterogeneous assets represents a major operational hurdle. Here are the 12 core challenges solved by Adaptive's data layers:
            </p>
          </SectionWrapper>
        </div>
        <div className="lg:col-span-5 h-[420px]">
          <SectionWrapper delay={0.2}>
            <Scale500GWDashboard />
          </SectionWrapper>
        </div>
      </div>

      {/* 12 Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Massive Data Volumes", desc: "Ingesting and processing millions of telemetry data points per second across expanding sites and fine time intervals." },
          { title: "Report Standardization", desc: "Enforcing unified report templates across diverse sites, generation technologies, and legacy OEM protocols." },
          { title: "Heterogeneous Data Sources", desc: "Integrating field devices using Modbus, OPC UA, WebAPIs, and legacy files into one clean schema." },
          { title: "Hybrid Plant Reporting", desc: "Correlating solar, wind, BESS, and grid data to calculate accurate system-level performance indices." },
          { title: "Real-Time Reporting", desc: "Delivering near-instantaneous reports for dispatch centers, switching gears from traditional batch processing." },
          { title: "KPI Logic Consistency", desc: "Ensuring complex KPI formulas (like equivalent PR, soil loss, and curtailment) evaluate identically across sites." },
          { title: "Data Accuracy & Availability", desc: "Filtering telemetry noise, handling sensor drops, and backfilling missing data to ensure high report integrity." },
          { title: "Multi-Stakeholder Customization", desc: "Distributing different levels of data granularity to operators, investment groups, partners, and regulators." },
          { title: "Historical Data Storage", desc: "Architecting high-frequency time-series databases to allow instant queries across decades of archive logs." },
          { title: "Cybersecurity & Access Safety", desc: "Implementing absolute data isolation, encrypted channels (AES-256), and secure role permission structures." },
          { title: "Scalable Distribution", desc: "Orchestrating automated mail pipelines to deliver thousands of customized documents on-schedule without lag." },
          { title: "Expanding Portfolio Consistency", desc: "Seamlessly onboarding new assets to the centralized monitoring hub without requiring rewrite of reporting layouts." }
        ].map((item, i) => (
          <SectionWrapper key={i} delay={i * 0.05}>
            <div className="p-6 bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 rounded-2xl transition-all duration-300 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-2 py-1 rounded">
                    Challenge {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors"></div>
                </div>
                <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
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
