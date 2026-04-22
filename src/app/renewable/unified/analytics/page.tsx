import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, FileText, Brain, Clock, Download, TrendingUp, CheckCircle2, Layers, Activity, Target, LineChart } from "lucide-react";
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
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460]">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(139,92,246,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(139,92,246,0.3) 50px)' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px]"></div>
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
                <div className="group p-10 bg-white rounded-3xl border border-slate-100 hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
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
