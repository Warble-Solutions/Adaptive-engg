import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Battery, Zap, BarChart3, TrendingUp, Sun, Wind, CheckCircle2, Activity, Shield, Clock, DollarSign } from "lucide-react";
import { EMSHeroDashboards, HybridPlantDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "Energy Management System - BESS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Indigenous EMS solution for Battery Energy Storage Systems — ML-based energy arbitrage, SoC management, peak shaving, and grid support.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Split Layout */}
      <section className="section-hero relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1628] via-[#102040] to-[#0a1628]">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '1px 20px' }}></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-teal-500/20">
                  <Battery className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading leading-tight">
                  Energy Management<br />
                  <span className="gradient-heading">System — BESS</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Indigenous solution for Battery Energy Storage Systems with ML-based energy arbitrage, state of charge management, peak shaving, and grid support.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* Right — Dashboards */}
            <SectionWrapper delay={0.3}>
              <div className="hidden lg:block h-[500px]">
                <EMSHeroDashboards />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES CARDS */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">EMS Capabilities</h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "Indigenous Solution", desc: "Built entirely in-house by AEPL engineers. No dependency on foreign OEMs. Full control over algorithms, updates, and customizations.", gradient: "from-teal-500 to-cyan-500" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "ML Based Energy Arbitrage", desc: "Machine learning algorithms optimize charge/discharge cycles based on real-time electricity pricing, demand forecasting, and weather patterns.", gradient: "from-teal-500 to-teal-500" },
              { icon: <Battery className="w-8 h-8" />, title: "State of Charge (SoC) Management", desc: "Advanced battery management algorithms maintain optimal SoC to maximize battery life while meeting operational requirements. Cell-level balancing.", gradient: "from-amber-500 to-orange-500" },
              { icon: <Shield className="w-8 h-8" />, title: "Peak Shaving & Grid Support", desc: "Reduce peak demand charges, provide frequency regulation, and support grid stability during renewable intermittency events.", gradient: "from-teal-500 to-teal-500" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-100 hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:bg-[#0da08a] opacity-20 group-hover:bg-[#0da08a] scale-150 transition-all duration-500`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg relative`}>
                    <div className={`absolute inset-0 bg-white opacity-0 group-hover:bg-[#0da08a] opacity-20 rounded-2xl transition-opacity animate-pulse`}></div>
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

      {/* HYBRID INTEGRATION */}
      <section className="py-24 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold mb-6 font-heading">Hybrid Plant Intelligence</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our EMS seamlessly integrates with Solar, Wind, and Grid assets for intelligent energy dispatch. The AI engine optimizes across all sources in real-time.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: <Sun className="w-8 h-8" />, label: "Solar" },
                    { icon: <Wind className="w-8 h-8" />, label: "Wind" },
                    { icon: <Battery className="w-8 h-8" />, label: "BESS" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-[#0da08a] bg-primary/10 hover:bg-[#0da08a] border-primary/30 transition-all">
                      <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="h-full flex items-center">
                <HybridPlantDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Ready for Energy Storage?</h2>
            <p className="text-slate-500 mb-8 text-lg">Explore how our indigenous EMS solution can maximize your BESS ROI.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-600 text-white rounded-full font-bold hover:bg-[#0da08a] from-teal-700 hover:bg-[#0da08a] to-teal-700 transition-all">
              Get EMS Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
