import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Eye, Monitor, Globe, Shield, BarChart3, Cpu, CheckCircle2, Activity, Database, Layers, Users, Palette, Lock, Wifi } from "lucide-react";

export const metadata = {
  title: "Central Monitoring System (CMS) | PM-KUSUM | Adaptive Engineering",
  description: "Centralized monitoring platform for PM-KUSUM solar installations — flexible, lightweight, OEM independent with SCADA integration.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />

      {/* HERO — Dashboard-inspired with grid overlay */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_cms_1776742307616.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-500/20">
              <Eye className="w-4 h-4" />
              <span>PM-KUSUM</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
              Central Monitoring<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">System (CMS)</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mt-6">
              Centralized monitoring platform for PM-KUSUM solar installations. Insightful view of the entire portfolio, measure KPIs against targeted data, ML-based anomaly detection, and conversational AI assistance.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* KEY HIGHLIGHTS — Split Sticky Layout */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <SectionWrapper>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                    <Monitor className="w-4 h-4" />
                    <span>Operational Excellence</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 leading-tight">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Highlights</span></h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">Achieve total transparency and granular control over your PM-KUSUM decentralized portfolio with AEPL&apos;s intelligent insights.</p>
                </SectionWrapper>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Eye className="w-6 h-6" />, title: "Insightful View of Entire Portfolio", color: "text-blue-600 bg-blue-50 border-blue-100", shadow: "hover:shadow-blue-500/20 hover:border-blue-300" },
                { icon: <BarChart3 className="w-6 h-6" />, title: "Targeted KPI Metrics", color: "text-emerald-600 bg-emerald-50 border-emerald-100", shadow: "hover:shadow-emerald-500/20 hover:border-emerald-300" },
                { icon: <Activity className="w-6 h-6" />, title: "ML Anomaly Detection", color: "text-purple-600 bg-purple-50 border-purple-100", shadow: "hover:shadow-purple-500/20 hover:border-purple-300" },
                { icon: <Cpu className="w-6 h-6" />, title: "AI Assistant", color: "text-amber-600 bg-amber-50 border-amber-100", shadow: "hover:shadow-amber-500/20 hover:border-amber-300" },
              ].map((item, i) => (
                <SectionWrapper key={i} delay={i * 0.1}>
                  <div className={`p-8 rounded-3xl border ${item.color} bg-white shadow-sm transition-all duration-300 h-full flex flex-col group ${item.shadow} hover:-translate-y-1`}>
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-wide">Automated tracking mapping realtime metrics against operational baselines.</p>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES — Immersive Bento Grid */}
      <section className="py-24 bg-transparent relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                <Layers className="w-4 h-4" />
                <span>Architecture</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 tracking-tight">Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Features</span></h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bento Box 1 - Medium (Image bg) */}
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 h-[350px] flex flex-col justify-end group relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imgs/pm-kusum/kusum_telemetry_1776742420287.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white mb-3 backdrop-blur-lg group-hover:bg-white/10 transition-colors">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Light Weight Comm.</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">Optimized payloads for low-bandwidth rural PM-KUSUM connections.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Bento Box 2 - Large Wide (Image bg) */}
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 h-[350px] flex flex-col justify-end group relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imgs/pm-kusum/kusum_iot_scada_v2.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-transparent border border-white/20 rounded-2xl flex items-center justify-center text-white mb-4 backdrop-blur-lg group-hover:bg-white/10 transition-colors">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">OPC & MQTT Connectivity</h3>
                  <p className="text-gray-300 text-sm max-w-lg leading-relaxed">Built-in protocol support connects effortlessly to our Edge telemetry devices natively using secure end-to-end encrypted MQTT brokers.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Bento Box 3 - Large Tall (Image bg) */}
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 h-[350px] flex flex-col justify-end group relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imgs/pm-kusum/kusum_ams_1776742293340.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent"></div>
                <div className="relative z-10 w-full sm:w-2/3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-4 backdrop-blur-lg group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Real-Time Dashboards</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">Deeply immersive live performance metrics featuring configurable widgets, comparative charts, and actionable KPI summary cards customized for multi-site managers.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Bento Box 4 - Flow (Image bg) */}
            <SectionWrapper delay={0.4}>
              <div className="p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 h-[350px] flex flex-col justify-end group relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imgs/pm-kusum/kusum_ht_panel_1776742333863.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent"></div>
                <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-50 transition-opacity z-10 drop-shadow-2xl">
                  <Shield className="w-24 h-24 text-cyan-400" />
                </div>
                <div className="relative z-10 mt-auto">
                  <div className="w-12 h-12 bg-transparent border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-300 mb-4 backdrop-blur-lg group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Secure Infrastructure</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">End-to-end encryption. Featuring multi-factor authentication, granular RBAC, and full SOC compliance.</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* VALUE CREATION — Alternating Glass Blocks */}
      <section className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-20 font-heading">
              Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Creation</span>
            </h2>
          </SectionWrapper>

          <div className="flex flex-col gap-8">
            {[
              {
                title: "Unified Portfolio View",
                desc: "Monitor all assets on a Single Dashboard. Cross-compare plant efficiencies, calculate consolidated PR, and gain total enterprise transparency without jumping between OEM apps.",
                icon: <Globe className="w-8 h-8" />
              },
              {
                title: "ML Predictive Warnings",
                desc: "Decrease breakdowns with machine learning-based prediction. Algorithms analyze historical generation and weather data to raise early warnings against string failures.",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "Compliance & Reporting",
                desc: "Never miss a regulatory deadline. Instantly generate format-compliant MNRE and DISCOM reports directly from verified field data with a single click.",
                icon: <CheckCircle2 className="w-8 h-8" />
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-10 hover:bg-white/10 transition-all ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl border border-white/10 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                     {item.icon}
                   </div>
                   <div className={`${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                     <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                     <p className="text-lg text-gray-400 leading-relaxed">{item.desc}</p>
                   </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Centralize Your PM-KUSUM Monitoring</h2>
            <p className="text-slate-500 mb-8 text-lg">Get complete visibility of your PM-KUSUM portfolio with our CMS platform.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-cyan-700 transition-all">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
