import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Droplets, Link2, Activity, BarChart, Settings, Smartphone } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

export const metadata = {
  title: "Sewage Treatment Plant (STP) | Adaptive Engineering",
  description: "End to end Electrical, Automation and Instrumentation solutions for Waste Water industry.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} /> {/* Emerald green for waste/sustainability */}

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1920&q=80" alt="Sewage Treatment Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-black/60 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
              <Droplets className="w-4 h-4" />
              <span>Waste Water Industry</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Sewage Treatment (STP)
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              We are experts in providing turn-key Electrical, Instrumentation and Automation Solutions for the Waste Water industry, managing large networks of geographically distributed assets.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
              Consult Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-[#0B1120] relative z-20 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-900/50">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-teal-500">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.yearsExperience.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.mldTreatedSewage.value}<span className="text-teal-500">{WATER_STATS.mldTreatedSewage.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.mldTreatedSewage.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.pumpingStationsConnected.value}<span className="text-teal-500">{WATER_STATS.pumpingStationsConnected.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.pumpingStationsConnected.label}</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* GRID OVERVIEW */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionWrapper>
                <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-2 block">Our Solutions</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">End-to-End Automation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Settings className="w-6 h-6 text-teal-500" />, title: "Treatment Process Optimization" },
                    { icon: <Activity className="w-6 h-6 text-teal-500" />, title: "Pump Operations Optimization" },
                    { icon: <Link2 className="w-6 h-6 text-teal-500" />, title: "Manage Large Networks" },
                    { icon: <Smartphone className="w-6 h-6 text-teal-500" />, title: "Mobile Asset Management" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#0da08a] border-teal-200 transition-colors">
                      <div className="mb-4">{item.icon}</div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>

            <div>
              <SectionWrapper delay={0.2}>
                <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-2 block">Key Benefits</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">System Reliability</h2>
                <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100">
                  <ul className="space-y-4">
                    {[
                      "Reliable monitoring and control of remote pump stations",
                      "Minimized energy usage via latest digital technologies & SCADA",
                      "Scalable, reliable, and highly flexible software architecture",
                      "Batch processing capabilities to generate user-defined reports",
                      "Dashboards and advanced analytics for performance monitoring",
                      "Predictive diagnostics and proactive maintenance tools"
                    ].map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <div className="mt-1.5"><div className="w-2 h-2 rounded-full bg-teal-500"></div></div>
                        <span className="leading-relaxed font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            </div>
          </div>
          
          {/* Third Row: Value Creation */}
          <div className="mt-16">
            <SectionWrapper delay={0.3}>
              <div className="bg-slate-900 rounded-[40px] p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <h2 className="text-3xl font-bold text-white mb-10 font-heading text-center relative z-10">Value Creation</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-4 border border-teal-500/30">
                      <Settings className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Turn-key Solutions</h4>
                    <p className="text-teal-100/70 text-sm">Execution of vast scalable projects</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-4 border border-teal-500/30">
                      <Link2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Secure Connectivity</h4>
                    <p className="text-teal-100/70 text-sm">Monitor remotely from anywhere, anytime</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-4 border border-teal-500/30">
                      <BarChart className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Data Analytics</h4>
                    <p className="text-teal-100/70 text-sm">Facilitating complex decision making</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-4 border border-teal-500/30">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Mobile Asset Mgmt</h4>
                    <p className="text-teal-100/70 text-sm">Optimum utilization of distributed assets</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>

        </div>
      </section>
    </div>
  );
}
