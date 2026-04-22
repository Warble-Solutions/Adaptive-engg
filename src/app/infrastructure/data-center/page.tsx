import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Data Center Infrastructure | Adaptive Engineering",
  description: "Mission-critical electrical distribution, precision cooling, and DCIM solutions for Tier III+ facilities.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80" alt="Data Center Infrastructure Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Data Center <span className="gradient-heading">Infrastructure</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Mission-critical electrical distribution, precision cooling, and DCIM solutions for Tier III+ facilities.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Zero Downtime Architecture */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Zero Downtime Architecture</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  In a connected world, data centers are the backbone of every digital business. A single minute of downtime can cost millions. AEPL designs and builds electrical infrastructure that meets Tier III and Tier IV availability standards — from redundant power distribution and precision cooling to comprehensive DCIM solutions that give operators complete visibility into their facility.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">99.999%</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Target Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">Tier III+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Compliance</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">{"<"}1.4</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">PUE Achieved</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Infrastructure Solutions */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Infrastructure Solutions</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Critical Power</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
                  UPS, DRUPS, STS, ATS design and installation with 2N and 2(N+1) redundancy architectures for zero transfer time.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Power Distribution</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
                  Medium voltage switchgear, transformer substations, busway systems, and intelligent PDUs with per-outlet monitoring.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Precision Cooling</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
                  CRAC/CRAH design, hot/cold aisle containment, in-row cooling, and free cooling economizer integration.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">DCIM Platform</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">
                  Real-time PUE monitoring, thermal mapping, capacity planning, and predictive analytics for proactive management.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Engineering Standards</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Electrical design compliant with TIA-942, EN 50600, and Uptime Institute guidelines</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Arc flash analysis and selective coordination studies using ETAP</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Integrated BMS/EMS for energy management and optimization</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Fire suppression: NOVEC 1230/FM200 clean agent systems</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Structured cabling: Cat6A/Fiber with comprehensive labeling and documentation</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Commissioning: Integrated Systems Testing (IST) methodology</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Environmental monitoring: temperature, humidity, water leak, particulate</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Physical security: biometric access, CCTV, and mantrap integration</span>
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Data Center Infrastructure?</h2>
            <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
