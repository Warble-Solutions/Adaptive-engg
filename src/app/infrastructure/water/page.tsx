import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Droplets, Activity, CheckCircle2, ShieldCheck, Settings, LineChart, Cpu, Anchor } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

export const metadata = {
  title: "Water Solutions | Adaptive Engineering",
  description: "End to end E&I and SCADA solutions for Water Supply, Sewage, Effluent Treatment, and Irrigation.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} /> {/* Sky blue for water */}

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544383835-bca2bc6f5ea3?auto=format&fit=crop&w=1920&q=80" alt="Water Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
              <Droplets className="w-4 h-4" />
              <span>Infrastructure Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Water <span className="gradient-heading">Solutions</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Drinking water supply in urban and rural areas is essential for a country as big and as diverse as India. With {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} of experience, we provide end-to-end E&I & SCADA solutions.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* OVERVIEW STATS */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Our Expertise</h2>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center h-full hover:bg-[#0da08a] shadow-xl transition-all duration-300 hover:bg-[#0da08a] -translate-y-2">
                <div className="text-5xl font-black text-slate-900 mb-2">{WATER_STATS.yearsExperience.value}<span className="text-teal-500">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{WATER_STATS.yearsExperience.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center h-full hover:bg-[#0da08a] shadow-xl transition-all duration-300 hover:bg-[#0da08a] -translate-y-2">
                <div className="text-5xl font-black text-slate-900 mb-2">{WATER_STATS.mldTreatedWater.value}<span className="text-teal-500">{WATER_STATS.mldTreatedWater.suffix}</span></div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{WATER_STATS.mldTreatedWater.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center h-full hover:bg-[#0da08a] shadow-xl transition-all duration-300 hover:bg-[#0da08a] -translate-y-2">
                <div className="text-5xl font-black text-slate-900 mb-2">{WATER_STATS.supplySchemes.value}<span className="text-teal-500">{WATER_STATS.supplySchemes.suffix}</span></div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{WATER_STATS.supplySchemes.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.4}>
              <div className="p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center h-full hover:bg-[#0da08a] shadow-xl transition-all duration-300 hover:bg-[#0da08a] -translate-y-2">
                <div className="text-5xl font-black text-slate-900 mb-2">1,500<span className="text-teal-500">{WATER_STATS.overheadTanks.suffix}</span></div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{WATER_STATS.overheadTanks.label}</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* DOMAINS BENTO GRID */}
      <section className="py-24 bg-light relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="mb-16">
              <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-2 block">Our Solutions</span>
              <h2 className="text-4xl font-bold text-slate-900 font-heading">Comprehensive End-to-End Delivery</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionWrapper delay={0.1}>
              <Link href="/infrastructure/water/wtp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:bg-[#0da08a] shadow-xl hover:bg-[#0da08a] border-teal-200 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                      <Droplets className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-teal-600 transition-colors">Water Supply & WTP</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">Complete turn-key E&I solutions from raw water intake to distribution networks.</p>
                  </div>
                  <div className="flex items-center text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <Link href="/infrastructure/water/stp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:bg-[#0da08a] shadow-xl hover:bg-[#0da08a] border-teal-200 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                      <Activity className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-teal-600 transition-colors">Sewage Treatment (STP)</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">Electrical, Instrumentation and Automation Solutions for Waste Water industry.</p>
                  </div>
                  <div className="flex items-center text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <Link href="/infrastructure/water/etp" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:bg-[#0da08a] shadow-xl hover:bg-[#0da08a] border-teal-200 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                      <Settings className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-teal-600 transition-colors">Effluent Treatment (ETP)</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">Optimized process control and SCADA architecture for MBR and RO technologies.</p>
                  </div>
                  <div className="flex items-center text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            <SectionWrapper delay={0.4}>
              <Link href="/infrastructure/water/lift-irrigation" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:bg-[#0da08a] shadow-xl hover:bg-[#0da08a] border-teal-200 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                      <LineChart className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-teal-600 transition-colors">Lift Irrigation</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">Complete E&I packages for pump houses, optimizing energy management and control.</p>
                  </div>
                  <div className="flex items-center text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            <SectionWrapper delay={0.5}>
              <Link href="/infrastructure/water/micro-irrigation" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:bg-[#0da08a] shadow-xl hover:bg-[#0da08a] border-teal-200 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                      <Anchor className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-teal-600 transition-colors">Micro Irrigation</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">Outlet Management Systems (OMS) for control and monitoring of hydraulic parameters.</p>
                  </div>
                  <div className="flex items-center text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>

            <SectionWrapper delay={0.6}>
              <Link href="/infrastructure/water/centralized-scada" className="block group h-full">
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 shadow-xl hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Cpu className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">Centralized SCADA</h3>
                    <p className="text-teal-100 leading-relaxed mb-6">Overall monitoring of quantitative and qualitative parameters with advanced data mining.</p>
                  </div>
                  <div className="relative z-10 flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore Platform <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Secure Your Water Infrastructure</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with recognized experts for scalable, reliable E&I integration.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
