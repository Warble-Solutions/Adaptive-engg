import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, Zap, ShieldCheck, Settings, BarChart3, Handshake, Cpu, Sprout, Combine, CalendarClock, ShieldAlert, Cpu as CpuIcon, Droplets, Activity, LayoutTemplate } from "lucide-react";
import { WATER_STATS, WATER_SOLUTIONS, GOVERNMENT_APPROVALS_WATER, COMPANY_STATS } from "@/lib/constants";

export const metadata = {
  title: "Micro Irrigation | Adaptive Engineering",
  description: "Tailor-made solutions for Outlet Management Systems (OMS) in Micro Irrigation, ensuring precise water distribution at the chak level.",
};

export default function Page() {
  const currentPath = "/infrastructure/water/micro-irrigation";
  const otherSolutions = WATER_SOLUTIONS.filter(s => s.href !== currentPath);

  return (
    <div className="flex flex-col w-full text-slate-100">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* 1. HERO SECTION (Brand Green Theme) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/imgs/micro-irrigation-hero.png" alt="Micro Irrigation Smart Field" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B1120] z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative mx-auto flex flex-col items-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/30">
              <Sprout className="w-4 h-4" />
              <span>Smart Agriculture & Telemetry</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da08a] to-emerald-400">Irrigation</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Tailor-made Solutions for Outlet Management System (OMS) in Micro Irrigation, ensuring reliable water delivery and energy optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-[0_0_20px_rgba(13,160,138,0.3)]">
                Explore OMS Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/infrastructure/water" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                View Water Solutions
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. OUR EXPERTISE & VERTICAL STATS Row (Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left Column: Offset Vertical Stats Card (1/3 Width) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <SectionWrapper className="h-full flex">
                <div className="p-8 bg-slate-950 text-white rounded-3xl border border-slate-900 flex flex-col justify-between w-full shadow-xl">
                  <div className="mb-8">
                    <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest block mb-2">AEPL Core Numbers</span>
                    <h3 className="text-xl font-bold font-heading">Micro Irrigation Scale</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-white/10">
                      <div className="text-3xl font-black text-white">{WATER_STATS.yearsExperience.value}<span className="text-emerald-400">{WATER_STATS.yearsExperience.suffix}</span></div>
                      <span className="text-xs text-slate-400 block mt-1">Years of Smart Telemetry Experience</span>
                    </div>
                    <div className="pb-4 border-b border-white/10">
                      <div className="text-3xl font-black text-white">{WATER_STATS.statesCovered.value}<span className="text-emerald-400">{WATER_STATS.statesCovered.suffix}</span></div>
                      <span className="text-xs text-slate-400 block mt-1">States Benefiting Across India</span>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white">{COMPANY_STATS.satisfiedCustomers.value}<span className="text-emerald-400">{COMPANY_STATS.satisfiedCustomers.suffix}</span></div>
                      <span className="text-xs text-slate-400 block mt-1">Satisfied Municipal & Private Clients</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Expertise Text & Image (2/3 Width) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <SectionWrapper delay={0.2} className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">OMS Engineering Leadership</span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading leading-tight">Chak-Level Flow Controls & Connectivity</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    We at Adaptive Engineering Pvt Ltd. leverage our expertise in Remote Connectivity and custom SCADA architectures to offer comprehensive Outlet Management Systems (OMS) for Micro Irrigation networks. Smart agriculture requires distributing water equitably, and our instrumentation delivers exactly that.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    By monitoring hydraulic parameters directly at the field level, we eliminate volumetric water loss, optimize valve operation times, and report pipeline status to state irrigation departments.
                  </p>
                </div>
                
                <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl max-h-[300px]">
                  <Image src="/imgs/micro-irrigation-control.png" alt="OMS valve field automation SCADA console" width={800} height={400} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-bold text-base">Chak distribution SCADA overview</p>
                    <p className="text-gray-300 text-xs">Precise telemetry from remote solenoid valves and solar field units</p>
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS SECTION (Split Asymmetrical 3-Column Grid - Dark) */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Solutions</span>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Our Complete Solutions Portfolio</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                AEPL leverages advanced Remote Connectivity to deliver complete micro-irrigation solutions.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            
            {/* Left Column Featured Card (1/3 Width) */}
            <div className="lg:col-span-4 flex">
              <SectionWrapper className="h-full flex w-full">
                <div className="p-8 bg-gradient-to-b from-emerald-950/40 via-emerald-950/20 to-transparent border border-emerald-500/20 rounded-3xl flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0da08a]/10 blur-2xl"></div>
                  <div>
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
                      <Combine className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-heading">Chak-Level Distribution</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Equitable water delivery demands precise pressure control. Our custom valves and RTUs balance line pressure across defined farming zones automatically.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-[#0da08a] font-bold uppercase tracking-widest">Active Valve Sequencing</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column Solutions Grid (2/3 Width) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                {[
                  { icon: <Settings className="text-emerald-400 w-6 h-6" />, title: "Tailor-made Solutions for Pumping", desc: "Customized pumping configurations designed for variable field pressure demands." },
                  { icon: <Combine className="text-emerald-400 w-6 h-6" />, title: "Outlet Management System (OMS) in Micro Irrigation", desc: "End-to-end solar valve telemetry and field controller automation loops." },
                  { icon: <CpuIcon className="text-emerald-400 w-6 h-6" />, title: "Reliable and scalable SCADA architecture", desc: "Centralized host mapping and historical logging for thousands of field points." },
                  { icon: <Activity className="text-emerald-400 w-6 h-6" />, title: "Control and monitor hydraulic parameters", desc: "Continuous monitoring of water distribution to prevent losses and ensure equity." },
                  { icon: <Droplets className="text-emerald-400 w-6 h-6" />, title: "Energy, pressure and flow at defined chak level", desc: "Fine-grained monitoring and optimization of parameters directly at individual chaks." }
                ].map((item, i) => (
                  <SectionWrapper key={i} delay={i * 0.08}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/30">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionWrapper>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION (Staggered Layout + Mock Crop Calendar - Light) */}
      <section className="py-28 bg-white text-slate-900 relative z-20 rounded-t-[40px] -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#0da08a] font-bold uppercase text-sm tracking-widest mb-3 block">Benefits</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Optimizing Water & Farming Efficiency</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We combine field telemetry with crop scheduling systems to optimize energy draw and safeguard pipeline integrity.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Benefits Bullet List (7/12 Width) */}
            <div className="lg:col-span-7">
              <SectionWrapper>
                <div className="space-y-6">
                  {[
                    { title: "Energy and Flow Optimization", desc: "Volumetric scheduling and VFD tuning to eliminate pressure losses and excess energy draw." },
                    { title: "User programmable dashboards for system optimization", desc: "Allows operators to define schedules, adjust valve parameters, and configure triggers." },
                    { title: "Logging of report and alarms for sabotage / leakage", desc: "Real-time alerts and logs mapping pressure drops to identify line leakages or tampering." },
                    { title: "Advanced asset management system", desc: "CMMS-integrated diagnostics checking valve wear, solar battery health, and RTU status." },
                    { title: "Water availability scheduling for Crop Management System", desc: "Tailoring water delivery cycles to specific crop growth phases and local soil moisture trends." }
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
            </div>

            {/* Right Column: Custom CSS Simulated Crop Scheduling Calendar (5/12 Width) */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="p-6 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6 relative z-10">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-xs tracking-wider text-slate-300 uppercase">Crop Water Scheduler</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  {/* Crop Schedule Mock Table */}
                  <div className="space-y-3 relative z-10">
                    {[
                      { crop: "Cotton", schedule: ["Mon", "Wed", "Fri"], status: "Scheduled", active: true },
                      { crop: "Wheat", schedule: ["Tue", "Thu"], status: "Ready", active: false },
                      { crop: "Sugarcane", schedule: ["Mon", "Thu", "Sat"], status: "Irrigating", active: true },
                      { crop: "Mustard", schedule: ["Wed", "Sun"], status: "Complete", active: false }
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div>
                          <h5 className="font-bold text-slate-200 text-xs">{item.crop}</h5>
                          <div className="flex gap-1 mt-1">
                            {item.schedule.map((day, dIdx) => (
                              <span key={dIdx} className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-[8px] text-slate-400 font-semibold rounded">
                                {day}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                            item.status === "Irrigating" 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                              : "bg-slate-900 text-slate-400 border border-slate-800"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                    <span>Active chak flow: 120 L/min</span>
                    <span className="text-emerald-400">System Moisture: 84%</span>
                  </div>

                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VALUE CREATION (Dark) */}
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
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Remote Connectivity</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Pioneering edge telemetry connecting thousands of remote solenoid field valves securely.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Scalable SCADA</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Redundant host platforms capable of logging massive data tag counts without speed drops.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">Mobile Asset Tracking</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">Direct synchronization with CMMS databases to verify solar charge profiles and valve wear.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-[#0da08a] font-bold text-sm uppercase tracking-wider mb-2">EPC Project Delivery</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">End-to-end turnkey engineering capabilities backed by rigorous project management standards.</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Right Column: Manufacturing Visual & Government Approvals */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/imgs/micro-irrigation-advantage.png" alt="Control panel manufacturing facility" width={800} height={500} className="w-full h-[320px] object-cover" />
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



      {/* 8. OTHER SOLUTIONS (Light) */}
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

      {/* 9. CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Implement Chak-Level Telemetry?</h2>
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
