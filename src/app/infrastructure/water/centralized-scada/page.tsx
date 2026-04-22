import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Monitor, Droplets, BatteryCharging, Shield, Activity, Search, RefreshCw, Layers, Database, Lock } from "lucide-react";
import { ScadaHeroDashboard } from "@/components/DashboardMockups"; 

export const metadata = {
  title: "Centralized SCADA System | Adaptive Engineering",
  description: "Highly reliable, scalable and flexible software architecture for centralized SCADA in water infrastructure.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} /> {/* Deep blue for centralized SCADA */}

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#0B1120] to-slate-950">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="z-10 max-w-7xl w-full relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionWrapper>
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
                <Monitor className="w-4 h-4" />
                <span>Water Solutions Software</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading">
                Centralized <span className="gradient-heading">SCADA</span>
            </h1>
              <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                Highly reliable, scalable, and flexible software architecture offering a bird's eye view of all decentralized water assets globally.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                Request SCADA Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionWrapper>
          
          <SectionWrapper delay={0.2}>
            <div className="h-[440px] hidden lg:block rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)] border border-teal-900/50">
              <ScadaHeroDashboard />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* CORE PARAMETERS GRID */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-2 block">System Capabilities</span>
              <h2 className="text-4xl font-bold text-slate-900 font-heading">Total Ecosystem Visibility</h2>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Droplets className="w-6 h-6" />, title: "Water Quantity" },
              { icon: <Activity className="w-6 h-6" />, title: "Water Quality" },
              { icon: <BatteryCharging className="w-6 h-6" />, title: "Energy Management" },
              { icon: <Lock className="w-6 h-6" />, title: "Data Integrity" },
              { icon: <Monitor className="w-6 h-6" />, title: "Asset Monitoring" },
              { icon: <Search className="w-6 h-6" />, title: "Source Optimization" },
              { icon: <RefreshCw className="w-6 h-6" />, title: "O&M Standardization" },
              { icon: <Layers className="w-6 h-6" />, title: "Consumable Estimation" },
            ].map((feature, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center h-full hover:bg-[#0da08a] bg-teal-50 hover:bg-[#0da08a] border-teal-200 transition-colors">
                  <div className="text-teal-500 mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-slate-800 text-sm">{feature.title}</h4>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 font-heading">The Platform Advantage</h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  We at Adaptive Engineering offer Centralized SCADA systems engineered specifically for large-scale water distribution, ensuring real-time integrity and actionable insights via cutting-edge analytics.
                </p>

                <div className="space-y-6">
                  {[
                    "Overall monitoring of Quantitative and Qualitative parameters",
                    "Advanced energy consumption tracking and optimization",
                    "Extremely efficient plant/scheme operations",
                    "Advanced data mining and extensive reporting tools",
                    "Uncompromised Data integrity and security frameworks",
                    "Supports the latest analytics with bird's eye view dashboards"
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="text-teal-400 mt-0.5"><Shield className="w-5 h-5"/></div>
                      <span className="font-medium text-slate-200 text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-teal-900/20 blur-3xl rounded-[40px]"></div>
                <div className="bg-slate-800 border border-slate-700 rounded-[32px] p-10 relative z-10 shadow-2xl">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center text-teal-400 mb-8 border border-slate-600">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Data is your greatest asset.</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Decentralized water schemes produce massive amounts of raw data. Our SCADA architecture transforms this raw data into intelligent, actionable reports, standardizing operations and cutting consumable overheads significantly.
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-teal-400 font-bold hover:bg-[#0da08a] text-teal-300 transition-colors">
                    Talk to our Software Engineers <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

    </div>
  );
}
