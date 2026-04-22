import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Waves, Droplet, Settings, Gauge, Power, CheckCircle2, LayoutTemplate } from "lucide-react";
import { WATER_STATS } from "@/lib/constants";

export const metadata = {
  title: "Water Supply & WTP | Adaptive Engineering",
  description: "End to end E&I and SCADA solutions for Water Supply Schemes and Water Treatment Plants.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1621683363068-07e152f205ab?auto=format&fit=crop&w=1920&q=80" alt="Water Purification Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
              <Droplet className="w-4 h-4" />
              <span>Water Treatment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Water Supply & <span className="gradient-heading">WTP</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Our complete solutions portfolio of Electrical and Automation solutions and the best of the project management skills proven at Water Supply Schemes.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
              Discuss Your Scheme <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-[#081020] relative z-20 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-900/50">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.mldTreatedWater.value}<span className="text-teal-500">{WATER_STATS.mldTreatedWater.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.mldTreatedWater.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">{WATER_STATS.supplySchemes.value}<span className="text-teal-500">{WATER_STATS.supplySchemes.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.supplySchemes.label}</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-4xl font-black text-white mb-2">1,500<span className="text-teal-500">{WATER_STATS.overheadTanks.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">{WATER_STATS.overheadTanks.label}</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* SOLUTIONS & BENEFITS (Split Layout) */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Solutions */}
            <SectionWrapper>
              <div>
                <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-2 block">What We Deliver</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 font-heading">Comprehensive E&I Solutions</h2>
                
                <div className="space-y-6">
                  {[
                    { title: "Pump Monitoring", desc: "Advanced control and monitoring along with integrated Power Management." },
                    { title: "Filtration Control", desc: "Filtration process control and optimization for maximizing throughput." },
                    { title: "Remote SCADA Connectivity", desc: "Remote connectivity of OHTs integrated directly into centralized SCADA systems." },
                    { title: "Advanced Analytics", desc: "Programmable Dashboards and relevant report generation enabling better decision making." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#0da08a] border-teal-200 transition-colors">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Right: Benefits / Value Creation */}
            <SectionWrapper delay={0.2}>
              <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 sticky top-32">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading border-b border-teal-200 pb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Highly reliable architectures",
                    "Sustainability focused execution",
                    "Guaranteed quality of potable drinking water",
                    "Scalable architecture with reduced operating cost"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading mt-10 border-b border-teal-200 pb-4">Value Creation</h3>
                <ul className="space-y-3">
                  {[
                    "Highly Professional Project Management Team",
                    "Government Approved (GWSSB, MPJNM, MPUDC, MPUADD, UPJNM, RWS&S, JICA)",
                    "Turn-key E&I Solutions for scalable projects",
                    "In-House Electrical Panel Manufacturing"
                  ].map((value, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <LayoutTemplate className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      {value}
                    </li>
                  ))}
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
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Upgrade Your Plant?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Contact Our Engineers <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
