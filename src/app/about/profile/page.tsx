import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Company Profile | Adaptive Engineering",
  description: "India\'s leading Turnkey Electrical, Instrumentation, and Automation company delivering end-to-end solutions since 2014.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" alt="Company Profile Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              About Us
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Company <span className="gradient-heading">Profile</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              India&apos;s leading Turnkey Electrical, Instrumentation, and Automation company delivering end-to-end solutions since 2014.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Who We Are</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  Adaptive Engineering Pvt. Ltd. (AEPL) is a technology-driven engineering company headquartered in Ahmedabad, Gujarat. Since its inception in 2014, AEPL has emerged as India&apos;s most trusted partner for Renewable Energy, PM-KUSUM, Water Infrastructure, and Industrial Automation solutions. With a 60,000+ sq. ft. manufacturing facility, 300+ skilled professionals, and 1000+ sites monitored across India, we deliver mission-critical Turnkey E&amp;I systems that power the nation&apos;s growth.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">68GW+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Installed Base</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">300+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Team Strength</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">10k+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Panels Supplied</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Core Competencies</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Turnkey E&I</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  Complete Electrical &amp; Instrumentation execution from design to commissioning for Solar, Water, and Industrial projects.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">IoT & SCADA</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  In-house developed SolarWiz, WaterWiz, and MachineWiz IoT platforms with edge computing and cloud analytics.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Panel Manufacturing</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  IS/IEC certified LT/HT panels, MCC, PCC, ACDB, DCDB panels manufactured in our state-of-the-art facility.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Software & Analytics</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:bg-[#0da08a] text-gray-300 transition-colors flex-grow">
                  ReportWiz, CMS, AMS — proprietary software suite for automated reporting, asset tracking, and performance monitoring.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Our Growth Story */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Our Growth Story</h2>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Foundation</h3>
                    <p className="text-slate-600 leading-relaxed">Team Strength of 15. Renewable Installed Base — 100MW. Authorized System Integrators — Schneider-Electric.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.07}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">16</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2016</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Panel Manufacturing</h3>
                    <p className="text-slate-600 leading-relaxed">First Panel Manufacturing Factory. ISO 9001:2015 — TUV NORD certified. Renewable Installed Base — 250MW.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.14}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">18</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2018</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">SCADA Leadership</h3>
                    <p className="text-slate-600 leading-relaxed">Renewable Installed Base — 4.8GW+. HT/LT Panels production. Highest Revenue Growth in SCADA — Schneider-Electric.</p>
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
                    <p className="text-slate-600 leading-relaxed">Single location 1GW. Single Largest Order — 3.6GW. Second Factory — 60,000 sq.ft. Preferred Project Partner of Industry Leaders.</p>
                  </div>
                </div>
              </SectionWrapper>
              <SectionWrapper delay={0.35}>
                <div className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">24</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-[#0da08a] shadow-lg transition-shadow">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2024</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">PM-KUSUM &amp; Innovation</h3>
                    <p className="text-slate-600 leading-relaxed">Renewable Installed Base — 40GW+. Participation in International Expos. Monitoring Solutions — PM KUSUM. Hardware In Loop (HIL) Testing — PPC. Introduced EMS — BESS.</p>
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

      {/* Our Values */}
      <section className="py-24 bg-transparent relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Our Values</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl h-full hover:bg-[#0da08a] shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Innovation First</h3>
                <p className="text-sm text-gray-400 leading-relaxed">We invest heavily in R&amp;D to develop proprietary solutions that set industry benchmarks.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl h-full hover:bg-[#0da08a] shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Client Success</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Every project is a partnership. We measure our success by the ROI we deliver to our clients.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl h-full hover:bg-[#0da08a] shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Quality Obsession</h3>
                <p className="text-sm text-gray-400 leading-relaxed">ISO 9001:2015 and ISO 45001:2018 certified. Zero-defect manufacturing is our standard.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl h-full hover:bg-[#0da08a] shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Sustainability</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Our solutions directly contribute to India&apos;s clean energy transition and carbon reduction goals.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Partner with Us?</h2>
            <p className="text-gray-400 mb-8 text-lg">Get in touch to discuss how we can support your next project.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-[#0da08a] bg-primary hover:bg-[#0da08a] transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
