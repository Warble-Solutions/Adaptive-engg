import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Unified Renewable Solution | Adaptive Engineering",
  description: "A single-vendor, end-to-end approach covering Design, Panels, SCADA, and Commissioning for solar parks.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" alt="Unified Renewable Solution Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Renewable Energy
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Unified Renewable Solution
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              A single-vendor, end-to-end approach covering Design, Panels, SCADA, and Commissioning for solar parks.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* One Partner. Complete Execution. */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">One Partner. Complete Execution.</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  Most solar projects involve 5-7 vendors for different components — panels, wiring, SCADA, switchgear, testing. This fragmentation leads to delays, finger-pointing, and compatibility issues. AEPL&apos;s Unified Renewable Solution eliminates this by providing a single point of responsibility for the entire E&amp;I scope. From detailed engineering drawings to final grid synchronization, we handle everything in-house.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">40%</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Faster Execution</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">100%</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">In-House Capability</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">0</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Compatibility Issues</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">What's Included</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Detailed Engineering</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Complete SLD, cable schedule, earthing design, lightning protection, and GA drawings using E-TAP and AutoCAD Electrical.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Panel Manufacturing</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  In-house manufactured LT/HT panels, ACDB, DCDB, MCC, and PCC with IS/IEC type-tested designs.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">SCADA Integration</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  SolarWiz IoT gateway with real-time monitoring, automated reporting, and cloud-based analytics dashboard.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.30000000000000004}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Testing & Commissioning</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  End-to-end T&amp;C including relay testing, protection coordination, and grid synchronization support.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Our Execution Methodology */}
      <section className="py-24 bg-white text-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Our Execution Methodology</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30 -z-0"></div>
            <SectionWrapper delay={0}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Survey & Design</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">Site survey, soil testing, and complete electrical design with simulation-backed cable sizing.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Manufacturing</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">Panels and assemblies manufactured in our 60,000 sq ft facility with strict QA/QC protocols.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Installation</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">On-site cable laying, termination, earthing, and equipment erection by trained field teams.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.30000000000000004}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Go-Live</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">Testing, commissioning, grid synchronization, and handover with 24/7 monitoring activation.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in Unified Renewable Solution?</h2>
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
