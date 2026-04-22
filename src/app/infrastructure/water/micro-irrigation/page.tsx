import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Leaf, Sprout, Combine, CalendarClock, ShieldAlert, Cpu } from "lucide-react";

export const metadata = {
  title: "Micro Irrigation | Adaptive Engineering",
  description: "Tailor-made solutions for Outlet Management Systems (OMS) in Micro Irrigation.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} /> {/* Green theme for agriculture/micro-irrigation */}

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1920&q=80" alt="Micro Irrigation Field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-black/60 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/20 backdrop-blur-sm text-green-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-green-500/30">
              <Sprout className="w-4 h-4" />
              <span>Smart Agriculture</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Micro <span className="gradient-heading">Irrigation</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Tailor-made Solutions for Outlet Management System (OMS) ensuring precise water distribution at the chak level.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Explore OMS <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

      {/* SOLUTIONS & BENEFITS GRID */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Complete Control & Visibility</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our remote connectivity solutions offer energy and flow optimization, user-programmable dashboards, and advanced asset management systems.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionWrapper delay={0.1}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full hover:bg-[#0da08a] border-green-300 hover:bg-[#0da08a] shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Combine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hydraulic Parameter Control</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reliable and scalable SCADA architecture directly controlling and monitoring hydraulic parameters across the network.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full hover:bg-[#0da08a] border-green-300 hover:bg-[#0da08a] shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Chak Level Precision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Real-time monitoring and control of energy, pressure, and flow specifically engineered for defined chak levels.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full hover:bg-[#0da08a] border-green-300 hover:bg-[#0da08a] shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <CalendarClock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Crop Management Scheduling</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Intelligent water availability scheduling integrated directly into the Crop Management System for optimal yield.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.4}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full hover:bg-[#0da08a] border-green-300 hover:bg-[#0da08a] shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sabotage & Leakage Alarms</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automated logging of reports and instant alarming for any detected sabotage or pipeline leakage, preventing waste.
                </p>
              </div>
            </SectionWrapper>
            
            <SectionWrapper delay={0.5}>
              <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-600 to-teal-800 rounded-3xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-center shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm shadow-inner rounded-full flex items-center justify-center shrink-0 border border-white/30">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">Advanced Asset Management</h3>
                    <p className="text-green-100 leading-relaxed font-medium">
                      Our system provides user-programmable dashboards for total system optimization, bridging the gap between field hardware and centralized cloud analytics.
                    </p>
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
