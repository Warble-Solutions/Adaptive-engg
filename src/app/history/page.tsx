import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Journey | Adaptive Engineering",
  description: "From a small engineering firm to India\'s most trusted Turnkey E&I solutions provider — here is how we got here.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" alt="Our Journey Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              History
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Our <span className="gradient-heading">Journey</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              From a small engineering firm to India&apos;s most trusted Turnkey E&amp;I solutions provider — here is how we got here.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Milestones That Define Us */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Milestones That Define Us</h2>
            </SectionWrapper>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>
            <div className="space-y-12">
              <SectionWrapper delay={0}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">14</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2014</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Beginning</h3>
                    <p className="text-slate-600 leading-relaxed">Team Strength of 15. Renewable Installed Base — 100MW. Became Authorized System Integrators for Schneider-Electric.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.07}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">16</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2016</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Panel Manufacturing</h3>
                    <p className="text-slate-600 leading-relaxed">Established our First Panel Manufacturing Factory. Achieved ISO 9001:2015 certification from TUV NORD. Renewable Installed Base grew to 250MW.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.14}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">18</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2018</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">SCADA Leadership</h3>
                    <p className="text-slate-600 leading-relaxed">Renewable Installed Base reached 4.8GW+. Expanded into HT/LT Panel production. Recognized for Highest Revenue Growth in SCADA by Schneider-Electric.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.21}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">20</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2020</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Industry Recognition</h3>
                    <p className="text-slate-600 leading-relaxed">Renewable Installed Base — 14GW+. Introduced Renewable PPC. Outstanding Achievement in Solar Segment — EQ Magazine. Best End User &amp; EPC Solution Provider — Schneider-Electric. Best Solar Monitoring Company of the Year — ET Now.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.28}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">22</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2022</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scale &amp; Expansion</h3>
                    <p className="text-slate-600 leading-relaxed">Achieved Single location 1GW milestone. Single Largest Order — 3.6GW. Opened Second Factory — 60,000 sq.ft. Became Preferred Project Partner of Industry Leaders.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.35}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">24</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2024</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">PM-KUSUM &amp; Innovation</h3>
                    <p className="text-slate-600 leading-relaxed">Renewable Installed Base — 40GW+. Participation in International Expos. Launched Monitoring Solutions for PM KUSUM. Hardware In Loop (HIL) Testing for PPC. Introduced EMS — BESS.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.42}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">Now</div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-50 border border-teal-200 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Current</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Industry Leader</h3>
                    <p className="text-slate-600 leading-relaxed">Team Strength — 300+. Renewable Installed Base — 68 GW+. Sites Monitored — 1000+. Electrical Panels Supplied — 10,000+. Yearly Capacity — 25GW+.</p>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Ahead */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 font-heading">The Vision Ahead</h2>
                <p className="text-lg text-gray-400 leading-relaxed font-medium mb-8">
                  As India accelerates its clean energy transition and digital transformation, AEPL is positioned at the intersection of energy and technology. Our roadmap includes expanding into EV charging infrastructure, smart grid solutions, and AI-powered predictive maintenance. With a proven track record of innovation and execution, we are building the engineering backbone of India&apos;s future.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-white mb-1">1000+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Sites Monitored</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">68GW+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Installed Base</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">25GW+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Yearly Capacity</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Write the Next Chapter?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with us to build the future of energy and infrastructure.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
