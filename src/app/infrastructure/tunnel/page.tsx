import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Share2, Lightbulb, Clock, CheckCircle2, Layers } from "lucide-react";
import { COMPANY_STATS, TUNNEL_STATS } from "@/lib/constants";

export const metadata = {
  title: "Tunnel Infrastructure | Electrical & Automation | Adaptive Engineering",
  description: "Expert Turn-Key Electrical, Instrumentation and Automation Solutions for Road, Railway and Metro Tunnels.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      {/* 1. CINEMATIC HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/tunnel/tunnel_hero.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628] mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(4,154,137,0.8) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="z-10 max-w-7xl relative mt-20">
          <SectionWrapper>
            <div className="inline-block px-5 py-2.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(4,154,137,0.3)]">
              Infrastructure Experts
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-heading leading-tight drop-shadow-2xl">
              Tunnel <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Infrastructure</span>
            </h1>
            
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6 block w-full text-center">
                With rising awareness on road and rail safety, governments are modernizing tunnel infrastructure. At Adaptive Engineering Pvt Ltd, we are experts in providing <span className="text-white font-bold">Electrical, Instrumentation and Automation Solutions for Road, Railway and Metro Tunnels</span>.
              </p>
              <p className="text-emerald-400 font-bold tracking-wider uppercase text-sm block w-full text-center">
                The "Preferred Project Partner" in Turn-Key Projects for EPCs.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. STAGGERED STATISTICS ROW (Bridging Dark to Light transition) */}
      <section className="py-16 bg-white rounded-t-[50px] relative z-20 -mt-20 border-t-4 border-emerald-500 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { val: COMPANY_STATS.yearsExperience.value, suf: COMPANY_STATS.yearsExperience.suffix, label: COMPANY_STATS.yearsExperience.label },
              { val: TUNNEL_STATS.twinTubeRoad.value, suf: TUNNEL_STATS.twinTubeRoad.suffix, label: TUNNEL_STATS.twinTubeRoad.label },
              { val: TUNNEL_STATS.transformer.formatted, suf: TUNNEL_STATS.transformer.suffix, label: TUNNEL_STATS.transformer.label },
              { val: TUNNEL_STATS.ledLights.formatted, suf: TUNNEL_STATS.ledLights.suffix, label: TUNNEL_STATS.ledLights.label },
              { val: TUNNEL_STATS.remoteIoPanels.value, suf: TUNNEL_STATS.remoteIoPanels.suffix, label: TUNNEL_STATS.remoteIoPanels.label },
            ].map((stat, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="text-center p-4">
                  <div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
                    {stat.val}<span className="text-emerald-500">{stat.suf}</span>
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS (Split-Sticky Layout) */}
      <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <SectionWrapper>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                    <Zap className="w-4 h-4" />
                    <span>System Advantages</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 leading-tight">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Benefits</span></h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">Intelligent automation that protects lives, preserves infrastructure, and slashes energy consumption.</p>
                </SectionWrapper>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Ensure Safety", desc: "Minimize hazardous events and actively manage emergency conditions with rapid deployment logic." },
                { icon: <Activity className="w-6 h-6" />, title: "Healthy Environment", desc: "Maintain perfect air quality metrics inside the tunnel using adaptive SCADA environmental control." },
                { icon: <Lightbulb className="w-6 h-6" />, title: "Adaptive Lighting", desc: "Dynamic adjustment of tunnel luminance based on external ambient parameters." },
                { icon: <Zap className="w-6 h-6" />, title: "Reduce Consumption", desc: "Drastically cut energy waste and carbon footprint through intelligent load shedding." },
                { icon: <Share2 className="w-6 h-6" />, title: "Traffic Management", desc: "Efficient flow control leveraging remote I/O panels and integrated digital VMS signage." },
                { icon: <Clock className="w-6 h-6" />, title: "Manage Emergencies", desc: "Immediate isolation and suppression protocols executed natively within the automation architecture." },
              ].map((item, i) => (
                <SectionWrapper key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-wide leading-relaxed">{item.desc}</p>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUE CREATION (Massive Bento Grid) */}
      <section className="py-24 bg-transparent relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Value Creation</span></h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Box 1 - Medium */}
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">Scalable Projects</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow relative z-10">We execute turn-key E&amp;I solutions efficiently, adapting perfectly to any scale.</p>
              </div>
            </SectionWrapper>

            {/* Bento Box 2 - Large Wide (Image bg) */}
            <SectionWrapper delay={0.2}>
              <div className="md:col-span-2 p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 h-[300px] flex flex-col justify-end group relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imgs/tunnel/tunnel_scada.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-transparent border border-white/20 rounded-2xl flex items-center justify-center text-white mb-4 backdrop-blur-lg group-hover:bg-white/10 transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Scalable SCADA Architecture</h3>
                  <p className="text-gray-300 text-sm max-w-lg leading-relaxed">Secure and reliable connectivity ensuring better control of air quality standards with optimized asset utilization across entire infrastructure networks.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Bento Box 3 - Large Tall (Image bg) */}
            <SectionWrapper delay={0.3}>
              <div className="md:col-span-2 p-8 bg-slate-900 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-end group relative overflow-hidden h-[400px] sm:h-[300px] lg:h-[400px] shadow-2xl">
                <div className="absolute inset-0 bg-[url('/imgs/tunnel/tunnel_power_db.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/40 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Reliable Electrical Distribution</h3>
                  
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                      <div>
                        <span className="font-bold text-lg text-white">Power Management</span>
                        <p className="text-gray-400 text-sm">Deep active monitoring and flawless distribution.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                      <div>
                        <span className="font-bold text-lg text-white">Reduced Downtime</span>
                        <p className="text-gray-400 text-sm">Increased passenger and transit safety mechanisms.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionWrapper>

            {/* Bento Box 4 - Small */}
            <SectionWrapper delay={0.4}>
              <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-500 h-full flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(4,154,137,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Professional Management</h3>
                <p className="text-emerald-300 font-bold text-sm leading-relaxed relative z-10">Highly Professional PMO Team.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Secure Your Infrastructure</h2>
            <p className="text-slate-500 mb-8 text-lg">Partner with AEPL for unmatched automation and safety implementation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
              Contact Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
