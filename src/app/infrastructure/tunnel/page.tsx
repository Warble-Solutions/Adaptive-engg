import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Tunnel Infrastructure | Adaptive Engineering",
  description: "Comprehensive Turnkey E&I and SCADA solutions for India\'s most critical highway and railway tunnel projects.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1920&q=80" alt="Tunnel Infrastructure Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Tunnel Infrastructure
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Comprehensive Turnkey E&amp;I and SCADA solutions for India&apos;s most critical highway and railway tunnel projects.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Engineering India's Lifelines */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Engineering India's Lifelines</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  Modern tunnels are complex ecosystems requiring intelligent electrical, ventilation, and safety systems operating in perfect harmony. AEPL provides complete Turnkey E&amp;I execution for highway and railway tunnels — from power distribution and adaptive lighting to ventilation control, fire safety integration, and centralized SCADA. Our systems ensure the safety of millions of commuters daily.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">5+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Major Tunnels</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">24/7</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">SCADA Monitoring</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">0</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Safety Incidents</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Tunnel Systems */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Tunnel Systems</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Adaptive Lighting</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  L20 luminance-based dimming with transition zones. Dynamic control based on external ambient light for driver safety and energy savings.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Ventilation Control</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Jet fan sequencing with CO/NO₂ sensor integration. Automated smoke extraction during fire events with cross-passage pressurization.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Fire Safety</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Fire detection loops, deluge systems, hydrant network, and emergency PA/VA system integrated with tunnel SCADA.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.30000000000000004}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Centralized SCADA</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Unified control room bringing power, lighting, ventilation, CCTV, VMS, and emergency systems under single monitoring platform.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Additional Systems */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Additional Systems</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Power distribution with dual-feed redundancy and automatic changeover</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">CCTV and Video Analytics for incident detection and traffic monitoring</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Variable Message Signs (VMS) and lane control signals</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">SOS call stations with direct control room communication</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Height detection and over-dimension vehicle warning systems</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Environmental monitoring: visibility, temperature, air quality</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">UPS and emergency lighting with 3-hour battery backup</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Access control and intrusion detection for cross passages</span>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Tunnel Infrastructure?</h2>
            <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
