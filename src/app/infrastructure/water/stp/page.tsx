import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Waves, Droplets, Settings, LayoutTemplate, ShieldCheck, Factory, Cpu, Activity, BarChart3, Handshake, Zap, Globe, Smartphone } from "lucide-react";
import { WATER_STATS, WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER } from "@/lib/constants";

export const metadata = {
  title: "Sewage Treatment Plant (STP) | Adaptive Engineering",
  description: "Turn-key Electrical, Automation and Instrumentation solutions for the Waste Water industry. 300+ MLD treated sewage water.",
};

export default function Page() {
  const currentPath = "/infrastructure/water/stp";
  const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* 1. HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/imgs/stp-hero.png" alt="Sewage Treatment Plant" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/30">
              <Droplets className="w-4 h-4" />
              <span>Waste Water Industry</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Sewage Treatment <span className="gradient-heading">STP</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              We at Adaptive Engineering Pvt Ltd. are experts in providing turn-key Electrical, Instrumentation and Automation Solutions for the Waste Water industry, managing large networks of geographically distributed assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
                Discuss Your STP Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/infrastructure/water" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                View All Water Solutions
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 bg-[#081020] relative z-20 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-900/50">
            <SectionWrapper delay={0.1}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.yearsExperience.value}<span className="text-teal-500">{WATER_STATS.yearsExperience.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">Years Experience</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.mldTreatedSewage.value}<span className="text-teal-500">{WATER_STATS.mldTreatedSewage.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">MLD of Treated Sewage Water</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <div className="py-4">
                <div className="text-5xl font-black text-white mb-2">{WATER_STATS.pumpingStationsConnected.value}<span className="text-teal-500">{WATER_STATS.pumpingStationsConnected.suffix}</span></div>
                <p className="text-teal-400 text-sm font-bold uppercase tracking-wider">Pumping Stations Remotely Connected</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE (Light) */}
      <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionWrapper>
              <div>
                <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">Our Expertise</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">E&I & SCADA Solutions for Waste Water</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We at Adaptive Engineering Pvt Ltd. are experts in providing comprehensive Electrical, Instrumentation and Automation Solutions for the Waste Water industry. With over {WATER_STATS.yearsExperience.value}{WATER_STATS.yearsExperience.suffix} years of experience, we specialize in delivering high-performance setups designed to handle complex sewage treatment operations.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our capability ranges from engineering individual pumping station control grids to deploying state-wide telemetry systems monitoring remote assets. We provide full project execution lifecycle support—from engineering design to commissioning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
                    <ShieldCheck className="w-4 h-4" /> ISO 9001 Certified
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
                    <Globe className="w-4 h-4" /> {WATER_STATS.statesCovered.value}{WATER_STATS.statesCovered.suffix} States Covered
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-bold border border-teal-100">
                    <Factory className="w-4 h-4" /> In-House Panel Fab
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-transparent rounded-[40px] blur-2xl"></div>
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
                  <Image src="/imgs/stp-scada-control-room.png" alt="SCADA Control Room for Sewage Treatment Operations" width={800} height={600} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p className="text-white font-bold text-lg">Centralized Waste Water SCADA</p>
                    <p className="text-gray-300 text-sm">Real-time aeration basin control and flow monitoring</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS PORTFOLIO (Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-teal-400 font-bold uppercase text-sm tracking-widest mb-3 block">Solutions</span>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Our Complete Solutions Portfolio</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                We offer end to end Electrical, Automation and Instrumentation solutions built to optimize, scale, and manage large-scale waste water systems.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Settings className="w-7 h-7" />,
                title: "Treatment Process Optimization",
                desc: "Advanced process automation that optimizes biological processes (aeration, sludge activation, clarification) to maintain effluent parameters within strict regulatory limits while reducing blower energy consumption.",
                highlight: "Process Optimization"
              },
              {
                icon: <Activity className="w-7 h-7" />,
                title: "Optimize Pump Operations",
                desc: "Smart pump control sequences utilizing variable frequency drives (VFDs) and level telemetry to avoid dry runs, balance pump runtime, and reduce energy consumption during peak and off-peak hours.",
                highlight: "Pump Automation"
              },
              {
                icon: <Droplets className="w-7 h-7" />,
                title: "Manage Geographically Large Network",
                desc: "Broad telemetry solutions connecting remote sewage pumping stations and treatment units to centralized command centers via cellular, radio, or satellite, guaranteeing stable data transfer.",
                highlight: "Telemetry & SCADA"
              },
              {
                icon: <Cpu className="w-7 h-7" />,
                title: "Mobile Asset Management System",
                desc: "Deploying interactive asset tracking and mobile CMMS integration to log pump service intervals, detect early motor failures, and direct field maintenance technicians effectively.",
                highlight: "Asset Intelligence"
              },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-110 transition-transform border border-teal-500/30">
                      {item.icon}
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-xs font-bold uppercase tracking-widest mb-3">{item.highlight}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS (Light) */}
      <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">Benefits</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Key Project Benefits</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                We at Adaptive Engineering Pvt Ltd. offer tailor-made turn-key solutions that manage large networks of geographically distributed assets, ensuring maximum operational performance.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliable Monitoring & Control", desc: "Reliable monitoring and control of pump stations, eliminating overflow events and reducing field visits through smart remote commands.", color: "from-teal-500 to-teal-600" },
              { icon: <Zap className="w-8 h-8" />, title: "Minimized Energy Usage", desc: "Minimize energy usage by utilizing the latest digital technologies, soft starters, VFDs, and intelligent SCADA load balancing algorithms.", color: "from-teal-600 to-teal-700" },
              { icon: <LayoutTemplate className="w-8 h-8" />, title: "Scalable Architecture", desc: "Ensure a scalable, reliable, and flexible software architecture ready to integrate new stations as municipalities expand.", color: "from-teal-500 to-emerald-600" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Batch Reporting & Analytics", desc: "Batch processing to generate user defined reports, custom dashboards, and advanced analytics with predictive maintenance diagnostics.", color: "from-emerald-500 to-teal-600" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="group h-full p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VALUE CREATION (Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <span className="text-teal-400 font-bold uppercase text-sm tracking-widest mb-3 block">Value Creation</span>
                <h2 className="text-4xl font-bold text-white mb-8 font-heading">The AEPL Value Advantage</h2>

                <div className="space-y-6">
                  {[
                    { icon: <Zap className="w-6 h-6" />, title: "Turn-key E&I Solutions", desc: "Seamless execution of scalable waste water projects from conceptual design and procurement to final deployment." },
                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure & Reliable Remote Connectivity", desc: "End-to-end encrypted networks allowing engineers and operators to monitor and control sewage infrastructure from anywhere, anytime." },
                    { icon: <BarChart3 className="w-6 h-6" />, title: "Data Analytics & Intelligence", desc: "Advanced dashboards consolidating historical process data, facilitating critical regulatory compliance and operational decision making." },
                    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Asset Management", desc: "Optimum utilization of distributed pump house and STP assets, minimizing down-time and extending motor lifespan." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/imgs/wtp-panel-manufacturing.png" alt="AEPL Control Panel Manufacturing Facility" width={800} height={500} className="w-full h-[320px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-white font-bold">125,000+ Sq. Ft. Manufacturing Facility</p>
                    <p className="text-gray-300 text-sm">State-of-the-art in-house electrical panel fabrication</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <Handshake className="text-teal-400 w-5 h-5" /> Government Approved Vendor
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {GOVERNMENT_APPROVALS_WATER.map((agency, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 text-teal-300 text-sm font-bold rounded-full hover:bg-teal-500/20 transition-colors">
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

      {/* 7. PROCESS FLOW (Light) */}
      <section className="py-28 bg-white relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-teal-500 font-bold uppercase text-sm tracking-widest mb-3 block">Workflow</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Seamless STP Project Execution</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                Our step-by-step workflow guarantees that all electrical and SCADA components are built, verified, and commissioned to the highest engineering standards.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Survey & Engineering", desc: "Conducting site feasibility studies, documenting instruments flowsheets, and drawing electrical schematics.", icon: <LayoutTemplate className="w-6 h-6" /> },
              { step: "02", title: "Panel Manufacturing", desc: "In-house assembly and integration of control panels (MCC, PCC, APFC) and PLC kiosks with quality testing certifications.", icon: <Factory className="w-6 h-6" /> },
              { step: "03", title: "Site Commissioning", desc: "Installing electrical panels, laying cabling grids, running loop-checks on field sensors, and executing field test procedures.", icon: <Settings className="w-6 h-6" /> },
              { step: "04", title: "SCADA & Telemetry", desc: "Deploying the SCADA platform, configuring RTUs, establishing remote wireless networks, and completing official project handover.", icon: <Cpu className="w-6 h-6" /> },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="relative h-full">
                  {i < 3 && <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent translate-x-1/2 z-0"></div>}
                  <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 h-full">
                    <div className="text-5xl font-black text-teal-100 mb-4">{item.step}</div>
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INFRASTRUCTURE SHOWCASE */}
      <section className="relative z-20 overflow-hidden">
        <div className="relative h-[400px]">
          <Image src="/imgs/stp-infrastructure-scale.png" alt="Waste Water Pumping Station Network" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <SectionWrapper>
                <div className="max-w-lg">
                  <span className="text-teal-400 font-bold uppercase text-sm tracking-widest mb-3 block">Infrastructure at Scale</span>
                  <h2 className="text-4xl font-bold text-white mb-4 font-heading">{WATER_STATS.pumpingStationsConnected.value}{WATER_STATS.pumpingStationsConnected.suffix} Remote Pumping Stations</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    AEPL establishes robust SCADA systems and remote telemetry links across municipal distribution lines, streamlining asset monitoring for large geographic zones.
                  </p>
                  <Link href="/infrastructure/water/centralized-scada" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors text-sm">
                    Explore Centralized SCADA <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OTHER SOLUTIONS (Light) */}
      <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20">
                Water Solutions Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">AEPL&apos;s complete water infrastructure offering covers every aspect — from treatment plants to centralized SCADA monitoring.</p>
            </div>
          </SectionWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {otherSolutions.map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.07} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                <Link href={sol.href} className="group flex flex-col h-full p-6 bg-white border border-slate-100 rounded-2xl hover:border-teal-500/50 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-lg text-xs font-black uppercase tracking-widest mb-4">{sol.abbr}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{sol.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-teal-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Modernize Your Waste Water Infrastructure?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with Adaptive Engineering for advanced, turn-key E&I and automation solutions.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Our Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
