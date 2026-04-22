import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Monitor, Shield, Database, Cpu, Settings, CheckCircle2, Layers, BarChart3, Workflow } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";
import { ScadaHeroDashboard, PlantOverviewDashboard, AlarmConsoleDashboard, ScadaMonitoringDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "SCADA Solutions | Adaptive Engineering",
  description: "Flexible & scalable SCADA architecture with rich renewable libraries and seamless handling of 10 Lacs+ tags.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Split layout: text left, dashboard right */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#0a2a2a] to-slate-950">
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/15 rounded-full blur-[100px]"></div>
        </div>
        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Monitor className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-heading">
                  <span className="gradient-heading">SCADA</span>
            </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Flexible & scalable SCADA architecture with rich renewable libraries, handling millions of tags with a refined interface built from decades of field experience.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                  Schedule Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* Right — Dashboard */}
            <SectionWrapper delay={0.3}>
              <div className="h-[440px] hidden lg:block">
                <ScadaHeroDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Core Capabilities</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">Enterprise-grade SCADA built specifically for renewable energy operations.</p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Layers className="w-7 h-7" />, title: "Flexible & Scalable Architecture", desc: "From 50MW single-site to multi-GW portfolios. Our modular SCADA scales horizontally without performance degradation.", color: "bg-teal-50 text-teal-600" },
              { icon: <Database className="w-7 h-7" />, title: "Rich Renewable Libraries", desc: "Pre-built driver libraries for all major inverter, turbine, and BESS manufacturers. Reduces commissioning time by 60%.", color: "bg-teal-50 text-teal-600" },
              { icon: <BarChart3 className="w-7 h-7" />, title: "Seamless Handling of 10 Lacs+ Tags", desc: "Optimized data engine capable of processing over 10,00,000+ real-time tags in a single project without latency.", color: "bg-teal-50 text-teal-600" },
              { icon: <Settings className="w-7 h-7" />, title: "Refined Interface from Decades of Experience", desc: "Intuitive HMI screens developed through decades of operator feedback. Contextual alarms, trend analysis, and one-click diagnostics.", color: "bg-amber-50 text-amber-600" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group p-8 bg-white rounded-2xl border border-slate-100 hover:bg-[#0da08a] border-primary/30 hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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

      {/* INTEGRATION PROTOCOLS */}
      <section className="py-24 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4">Supported Protocols & Devices</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Native protocol support for seamless integration across your entire plant ecosystem.</p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["IEC 61850", "Modbus TCP/RTU", "OPC UA", "DNP3", "IEC 104", "MQTT", "HTTP/REST API", "Profinet"].map((protocol, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-[#0da08a] bg-primary/10 hover:bg-[#0da08a] border-primary/30 transition-all duration-300 group">
                  <Cpu className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm text-white">{protocol}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SCADA IN ACTION — Interactive Dashboards */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center font-heading">SCADA in Action</h2>
            <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">Interactive preview of our SCADA interface screens</p>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="h-80">
                <ScadaMonitoringDashboard />
              </div>
              <p className="text-center text-sm font-bold text-slate-700 mt-4">Real-Time Monitoring</p>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="h-80">
                <PlantOverviewDashboard />
              </div>
              <p className="text-center text-sm font-bold text-slate-700 mt-4">Plant Overview</p>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="h-80">
                <AlarmConsoleDashboard />
              </div>
              <p className="text-center text-sm font-bold text-slate-700 mt-4">Alarm Management</p>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Modernize Your SCADA?</h2>
            <p className="text-gray-400 mb-8 text-lg">Talk to our SCADA engineers to design a system tailored to your plant requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
