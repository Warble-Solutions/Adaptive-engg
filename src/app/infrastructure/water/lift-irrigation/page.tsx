import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, TrendingUp, Handshake, ShieldCheck, Factory, PlaySquare, Settings, Anchor, Database } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

export const metadata = {
  title: "Lift Irrigation | Adaptive Engineering",
  description: "Electrical, Instrumentation and Automation solutions making us a Preferred Project Partner for EPC and Government agencies.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#8b5cf6" speed={0.5} /> {/* Violet theme for Irrigation/Scale */}

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1594916893635-46f9037a3424?auto=format&fit=crop&w=1920&q=80" alt="Large Scale Irrigation infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-black/70 to-[#0f172a] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-500/20 backdrop-blur-sm text-violet-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-violet-500/30">
              <Anchor className="w-4 h-4" />
              <span>Large Scale Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Lift Irrigation
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Our complete solutions portfolio and the best project management skills makes us the "Preferred Project Partner" for EPC and Government agencies.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-[#0a071b] relative z-20 border-b border-violet-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-violet-900/50">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-violet-500">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-violet-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.yearsExperience.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.irrigationPumpingStations.value}<span className="text-violet-500">{WATER_STATS.irrigationPumpingStations.suffix}</span></div>
                <p className="text-violet-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.irrigationPumpingStations.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.statesCovered.value}<span className="text-violet-500">{WATER_STATS.statesCovered.suffix}</span></div>
                <p className="text-violet-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.statesCovered.label}</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* SPLIT EXPERTISE SECTION */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Solutions & Govt Approvals */}
            <div>
              <SectionWrapper>
                <div className="mb-12">
                  <span className="text-violet-500 font-bold uppercase text-sm tracking-widest mb-2 block">Our Solutions</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">E&I Packages for Pump Houses</h2>
                  <p className="text-slate-600 mb-8">Through our expertise in engineering complete E&I packages combined with advanced SCADA systems, we ensure:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Settings className="w-5 h-5" />, title: "Monitoring & control of Drive Technology" },
                      { icon: <Factory className="w-5 h-5" />, title: "Energy Management Systems" },
                      { icon: <PlaySquare className="w-5 h-5" />, title: "Efficient Pump operations on run-hour" },
                      { icon: <Database className="w-5 h-5" />, title: "Embedded Data Mining" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 items-start">
                        <div className="text-violet-500 mt-0.5">{item.icon}</div>
                        <span className="text-sm font-bold text-slate-800">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-50 rounded-2xl p-8 border border-violet-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Handshake className="text-violet-600 w-5 h-5"/> Government Approved Partner
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["GWSSB (Gujarat)", "MPJNM (Madhya Pradesh)", "MPUDC (Madhya Pradesh)", "MPUADD (Madhya Pradesh)", "UPJNM (Uttar Pradesh)", "RWS&S (Odisha)", "JICA Assisted (Assam)"].map((agency, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-violet-200 text-violet-700 text-xs font-bold rounded-full">
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Benefits & Value */}
            <div>
              <SectionWrapper delay={0.2}>
                <div className="bg-slate-900 rounded-[32px] p-10 text-white relative h-full flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-3xl rounded-full"></div>
                  
                  <div className="relative z-10 mb-12">
                    <span className="text-violet-400 font-bold uppercase text-sm tracking-widest mb-2 block">Key Benefits</span>
                    <h2 className="text-3xl font-bold text-white mb-8 font-heading">Advanced Integrations</h2>
                    <ul className="space-y-6">
                      <li className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 border border-violet-500/30">
                          <TrendingUp className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Machine Learning Algorithms</h4>
                          <p className="text-slate-400 text-sm">Advanced analytics solutions predicting component failures.</p>
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 border border-violet-500/30">
                          <Settings className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">O&M Standardization</h4>
                          <p className="text-slate-400 text-sm">Standardizing operations to significantly increase Pump Life.</p>
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 border border-violet-500/30">
                          <ShieldCheck className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Optimum Utilization</h4>
                          <p className="text-slate-400 text-sm">Mobile Asset Management driving peak efficiency across sites.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      Value Creation 
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We execute scalable turn-key E&I projects featuring cutting-edge SCADA architecture, providing full visibility from the pump house strictly to the executive dashboard.
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
