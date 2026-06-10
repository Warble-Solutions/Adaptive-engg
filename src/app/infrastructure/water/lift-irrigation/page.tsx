import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, Zap, ShieldCheck, TrendingUp, Settings, BarChart3, Handshake, Cpu, Anchor, Database, LayoutTemplate, Activity } from "lucide-react";
import { WATER_STATS, WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER } from "@/lib/constants";

export const metadata = {
  title: "Lift Irrigation | Adaptive Engineering",
  description: "Preferred Project Partner for EPC and Government agencies, providing Turn-key E&I and Automation solutions for Irrigation Pumping Stations.",
};

export default function Page() {
  const currentPath = "/infrastructure/water/lift-irrigation";
  const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

  return (
    <div className="flex flex-col w-full text-slate-100">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* 1. HERO SECTION (Brand Green Theme) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/imgs/lift-irrigation-hero-v2.png" alt="Large Scale Lift Irrigation Pumping Station" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/30">
              <Anchor className="w-4 h-4" />
              <span>Large-Scale Infrastructure Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Lift <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da08a] to-emerald-400">Irrigation</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Our 17+ years of experience, complete solutions portfolio, and proven project management skills make us the Preferred Project Partner for EPC and Government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/infrastructure/water" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                View Water Solutions
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 bg-[#070c14] relative z-20 border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-950/40">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-[#0da08a]">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Years Experience</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.irrigationPumpingStations.value}<span className="text-[#0da08a]">{WATER_STATS.irrigationPumpingStations.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Irrigation Pumping Stations</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.statesCovered.value}<span className="text-[#0da08a]">{WATER_STATS.statesCovered.suffix}</span></div>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">States Covered</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE (Light, Custom Column Layout) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Engineering Excellence</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">Trusted Partner for Large-Scale Canals & Pump Houses</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Our {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years of experience, a complete solutions portfolio of Electrical, Instrumentation and Automation solutions and the best of the project management skills makes us a “Preferred Project Partner” for EPC and Government agencies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-bold border border-emerald-100">
                    <Settings className="w-4 h-4 text-[#0da08a]" /> Drive Tech Control
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-bold border border-emerald-100">
                    <Cpu className="w-4 h-4 text-[#0da08a]" /> Telemetry & RTUs
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-bold border border-emerald-100">
                    <Handshake className="w-4 h-4 text-[#0da08a]" /> EPC Integration
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right side custom SCADA image */}
            <div className="lg:col-span-5 relative">
              <SectionWrapper delay={0.2}>
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[40px] blur-2xl"></div>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
                  <Image src="/imgs/lift-irrigation-control.png" alt="Industrial Lift Irrigation SCADA monitor" width={600} height={450} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-white text-xs font-bold uppercase tracking-wider">Drive Grid Online</span>
                    </div>
                    <p className="text-white font-bold text-lg">Central Telemetry Station</p>
                    <p className="text-gray-300 text-xs">Real-time drive voltage and discharge control</p>
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS PORTFOLIO (Dark Glassmorphic Grid) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Solutions Suite</span>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">E&I Packages for Pumping Stations</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We deliver complete Electrical, Automation and SCADA engineering for pump houses, securing high operational run-times.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Settings className="w-7 h-7" />,
                title: "Monitoring and control of Drive Technology",
                desc: "Complete drive packages including soft starters and VFDs to eliminate motor stress.",
                highlight: "Drive Technology"
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Energy Management System",
                desc: "Active power factor correction and load balancing to optimize power draw.",
                highlight: "Power Management"
              },
              {
                icon: <Activity className="w-7 h-7" />,
                title: "Efficient Pump operations on run-hour",
                desc: "Smart rotation controls based on actual running hours to extend motor lifespans.",
                highlight: "Duty Cycle balancing"
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: "Embedded data mining",
                desc: "High-speed data archiving at edge telemetry units with cloud database synchronization.",
                highlight: "Process Archiving"
              },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform border border-emerald-500/30">
                      {item.icon}
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold uppercase tracking-widest mb-3">{item.highlight}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS & MOCK ML DIAGRAM (Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block font-bold">Key Benefits</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Advanced Analytics & O&M Benefits</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our automation solutions integrate machine learning and O&M standardization to maximize pump lifecycle and plant uptime.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Benefits Bullet List */}
            <SectionWrapper>
              <div className="space-y-6">
                {[
                  { title: "Machine learning algorithm with advanced analytics solutions", desc: "Predicting mechanical faults and impeller wear based on real-time vibration and thermal trends." },
                  { title: "Reports and dashboards", desc: "Generating automated discharge logs and energy efficiency summaries for municipal audits." },
                  { title: "O&M Standardization", desc: "Standardizing plant operations within the SCADA interface to eliminate operator errors." },
                  { title: "Increased Pump Life", desc: "Reducing thermal overload and startup torque spikes to maximize pump lifetime." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-emerald-50 text-[#0da08a] rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* Right Column: Simulated Pumping Diagnostics Dashboard */}
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
                <h4 className="font-bold text-sm text-[#0da08a] uppercase tracking-widest mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Predictive Diagnostics
                </h4>

                <div className="space-y-6 relative z-10">
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Pump 01 Winding Temp</span>
                      <h5 className="font-bold text-slate-100 text-sm mt-0.5">58°C (Optimal)</h5>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Vibration Profile Amplitude</span>
                      <h5 className="font-bold text-slate-100 text-sm mt-0.5">1.2 mm/s (Normal)</h5>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider mb-2">Duty Rotation Tracker</span>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[65%]" title="Active Runtime Distribution"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[9px] text-slate-400">Total Run Time: 1,420 Hours</span>
                      <span className="text-[9px] text-emerald-400">Target Balance: Met</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* 6. VALUE CREATION (Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Advantage Points */}
            <SectionWrapper>
              <div>
                <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Value Creation</span>
                <h2 className="text-4xl font-bold text-white mb-8 font-heading">The AEPL Advantage</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Government Approved</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">GWSSB – Gujarat, MPJNM, MPUDC & MPUADD – Madhya Pradesh, UPJNM – Uttar Pradesh, RWS&S – Odisha, JICA Assisted – Assam</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Turn-key E&I Solutions – Execution of scalable projects</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Execution of scalable projects from initial engineering down to commissioning.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Scalable SCADA Architecture – Cutting edge</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Cutting edge SCADA frameworks providing reliable process tracking and easy scaling.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Mobile Asset Management – Optimum Utilization of Assets</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Mobile analytics sync enabling optimum utilization of assets and field technicians.</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Right Column: Manufacturing Visual & Government Approvals */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/imgs/lift-irrigation-advantage.png" alt="Control panel manufacturing facility" width={800} height={500} className="w-full h-[320px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-white font-bold">In-House Manufacturing (125,000+ Sq. Ft.)</p>
                    <p className="text-gray-300 text-xs">Quality panel fabrication and certified FAT checks before dispatch</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <Handshake className="text-[#0da08a] w-5 h-5" /> Government Approved Partner
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold rounded-full hover:bg-emerald-500/20 transition-colors">
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>



      {/* 9. OTHER SOLUTIONS (Light) */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
                Water Solutions Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete water infrastructure offering covers every aspect — from treatment plants to centralized SCADA monitoring.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {otherSolutions.map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#0da08a]/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Modernize Your Lift Pumping Stations?</h2>
            <p className="text-slate-400 mb-8 text-lg">Partner with Adaptive Engineering for advanced, turn-key E&I and automation solutions.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
              Contact Our Engineers <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
