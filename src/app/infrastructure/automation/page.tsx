import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Industrial Automation | Adaptive Engineering",
  description: "PLC, SCADA, DCS, and IoT integration for intelligent manufacturing and process optimization.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80" alt="Industrial Automation Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Industrial <span className="gradient-heading">Automation</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              PLC, SCADA, DCS, and IoT integration for intelligent manufacturing and process optimization.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Industry 4.0, Delivered */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Industry 4.0, Delivered</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  The factory of the future is connected, intelligent, and self-optimizing. AEPL brings Industry 4.0 to the shop floor with end-to-end automation solutions — from PLC programming and HMI design to enterprise SCADA and MES integration. We work with all major platforms including Siemens, Rockwell, Schneider, and ABB, ensuring vendor-agnostic solutions that grow with your operations.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">30%</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">OEE Improvement</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">50+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Plants Automated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">24/7</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Remote Monitoring</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Automation Services */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Automation Services</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">PLC Programming</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  Ladder, ST, FBD, SFC programming for Siemens S7, Allen Bradley, Schneider M340/M580, and ABB AC500 platforms.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">SCADA & HMI</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  WinCC, FactoryTalk, Ignition, and Wonderware implementations with custom dashboards, trending, and alarming.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Drive Systems</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  VFD selection, programming, and commissioning for pumps, conveyors, mixers, and centrifuges with energy optimization.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">MachineWiz IoT</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  Our proprietary IoT platform for machine monitoring — OEE tracking, vibration analysis, and predictive maintenance.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Industry Applications</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Pharmaceutical: Batch process control with 21 CFR Part 11 compliance</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Cement: Kiln optimization, raw mill automation, and packing plant control</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Water Treatment: WTP/ETP/STP automation with chemical dosing and SCADA</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Food &amp; Beverage: Clean-in-place (CIP), pasteurization, and recipe management</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Textile: Dyeing machine automation, boiler control, and effluent treatment</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Oil &amp; Gas: Pipeline SCADA, tank farm automation, and safety instrumented systems</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Industrial Automation?</h2>
            <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-[#0da08a] bg-primary hover:bg-[#0da08a] transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
