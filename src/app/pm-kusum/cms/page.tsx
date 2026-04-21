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

      {/* KEY HIGHLIGHTS */}
      <section className="py-12 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Eye className="w-6 h-6" />, title: "Insightful View of Entire Portfolio", color: "text-blue-600 bg-blue-50" },
                { icon: <BarChart3 className="w-6 h-6" />, title: "Measure KPIs Against Targeted Data", color: "text-emerald-600 bg-emerald-50" },
                { icon: <Activity className="w-6 h-6" />, title: "ML Based Anomaly Detection", color: "text-purple-600 bg-purple-50" },
                { icon: <Cpu className="w-6 h-6" />, title: "Conversational AI Assistant", color: "text-amber-600 bg-amber-50" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Platform Features</h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="w-6 h-6" />, title: "Flexibility", desc: "Modular architecture adapts to any PM-KUSUM deployment size and topology." },
              { icon: <Wifi className="w-6 h-6" />, title: "Light Weight", desc: "Optimized for low-bandwidth connections typical of rural pump installations." },
              { icon: <Shield className="w-6 h-6" />, title: "OEM Independent", desc: "Connect any inverter, pump controller, or WMS regardless of manufacturer." },
              { icon: <Database className="w-6 h-6" />, title: "OPC / MQTT / API Connectors", desc: "Built-in protocol support for seamless integration with existing infrastructure." },
              { icon: <Palette className="w-6 h-6" />, title: "Theme Selection", desc: "Customizable dashboard themes with dark/light mode and branded color schemes." },
              { icon: <Users className="w-6 h-6" />, title: "User Management", desc: "Role-based access control — Admin, Engineer, Operator, Viewer with audit trails." },
              { icon: <Globe className="w-6 h-6" />, title: "Bird Eye View", desc: "Geographic map view of all connected sites with real-time status indicators." },
              { icon: <Monitor className="w-6 h-6" />, title: "Real-Time Dashboards", desc: "Live performance metrics with configurable widgets, charts, and KPI cards." },
              { icon: <Lock className="w-6 h-6" />, title: "Secure Infrastructure", desc: "End-to-end encryption, multi-factor authentication, and SOC compliance." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.06}>
                <div className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE CREATION */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">
              Value <span className="text-primary">Creation</span>
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Monitor all assets on a Single Dashboard with unified view",
              "Decrease breakdowns with ML-based prediction and early warning",
              "Flexible architecture — deploy on cloud or on-premise",
              "Automated compliance reporting for MNRE & DISCOM",
              "Reduce operational cost with remote troubleshooting",
              "Complete lifecycle tracking of all PM-KUSUM installations",
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium">{item}</span>
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
