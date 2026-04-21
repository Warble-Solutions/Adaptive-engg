import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Eye, TrendingDown, Zap, Shield, BarChart3, Globe, Activity, Database, Lock, CheckCircle2, Layers, Server, Wifi } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

export const metadata = {
  title: "Central Monitoring System (CMS) | Unified Renewable Solutions | Adaptive Engineering",
  description: "Enterprise-level monitoring and portfolio intelligence for Solar, Wind, and BESS assets with real-time visibility and intelligent analytics.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Data-flow gradient with particle effect */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1f2d] to-[#0a1628]">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(4,154,137,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-cyan-500/20">
              <Eye className="w-4 h-4" />
              <span>Unified Renewable Solution</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
              Central Monitoring<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">System (CMS)</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mt-6">
              AEPL&apos;s Centralized Monitoring System provides real-time visibility and intelligent analytics for Solar, Wind, and BESS assets, enabling centralized monitoring, performance optimization, and efficient management of renewable energy portfolios.
            </p>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mt-8">&quot;Enterprise-Level Monitoring and Portfolio Intelligence&quot;</p>
          </SectionWrapper>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-4 font-heading">Key Benefits</h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-16">Advanced monitoring and analytics for renewable energy portfolios</p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-6 h-6" />, title: "Complete Portfolio Visibility", color: "from-blue-500 to-cyan-500" },
              { icon: <TrendingDown className="w-6 h-6" />, title: "Reduced Downtime", color: "from-emerald-500 to-teal-500" },
              { icon: <Zap className="w-6 h-6" />, title: "Accurate Energy Insights", color: "from-amber-500 to-orange-500" },
              { icon: <Shield className="w-6 h-6" />, title: "Scalable & Secure Platform", color: "from-purple-500 to-indigo-500" },
              { icon: <Activity className="w-6 h-6" />, title: "Faster Fault Detection", color: "from-red-500 to-pink-500" },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Improved Plant Performance", color: "from-primary to-teal-400" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group relative p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 font-heading mb-4">Key Features</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Centralized Fleet Monitoring", desc: "Monitor all renewable assets across geographies on a unified dashboard with bird&apos;s-eye view." },
              { icon: <Activity className="w-6 h-6" />, title: "Real-Time Performance Dashboards", desc: "Live dashboards with bullet graphs, charts, and configurable views for instant performance visibility." },
              { icon: <Database className="w-6 h-6" />, title: "SCADA & Protocol Integration", desc: "OPC UA, MQTT, API, Modbus TCP connectors — OEM independent integration with any plant SCADA." },
              { icon: <TrendingDown className="w-6 h-6" />, title: "Loss Analysis & Downtime Tracking", desc: "Accurate loss bucket analysis to identify root causes and decrease breakdown losses." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Predictive Analytics", desc: "ML-based anomaly detection and predictive maintenance to prevent failures before they occur." },
              { icon: <Server className="w-6 h-6" />, title: "Automated Reporting", desc: "Comprehensive automated reports with custom parameter selection and multi-format export options." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNED FOR THE FUTURE */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4 font-heading">Designed for the Future Energy Ecosystem</h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-16">Built to handle the complexity of modern renewable portfolios</p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Handles renewable complexity",
              "Ensures operational transparency",
              "Advanced analytics",
              "Secure data architecture",
              "Flexible deployment",
              "Future-ready platform",
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* GAIN SUPERIOR CONTROL */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">
              Gain Superior Control with <span className="text-primary">AEPL CMS</span>
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Centralized Portfolio Monitoring", icon: <Globe className="w-5 h-5" /> },
              { title: "Real-Time Plant Performance Visibility", icon: <Activity className="w-5 h-5" /> },
              { title: "Predictive Maintenance & Anomaly Detection", icon: <BarChart3 className="w-5 h-5" /> },
              { title: "Cross-plant Benchmarking & Asset Comparison", icon: <Layers className="w-5 h-5" /> },
              { title: "Secure Data Infrastructure", icon: <Lock className="w-5 h-5" /> },
              { title: "Advanced Analytics & Loss Bucket Analysis", icon: <TrendingDown className="w-5 h-5" /> },
              { title: "Automated Reporting & Data Intelligence", icon: <Server className="w-5 h-5" /> },
              { title: "Enterprise Dashboards for Management", icon: <Eye className="w-5 h-5" /> },
              { title: "Cyber Security", icon: <Shield className="w-5 h-5" /> },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm text-white">{item.title}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Ready to Centralize Your Monitoring?</h2>
            <p className="text-slate-500 mb-8 text-lg">Get complete visibility of your renewable portfolio with AEPL CMS.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-slate-900 transition-colors">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
