"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Shield, 
  Battery, 
  CheckCircle2, 
  Factory, 
  Monitor, 
  Cpu, 
  PieChart, 
  Wrench, 
  Sun, 
  Activity,
  Award,
  ShieldCheck,
  Settings,
  Layers,
  Sliders,
  LayoutTemplate,
  Network,
  Compass,
  Lock
} from "lucide-react";
import Image from "next/image";
import MicroCTA from "@/components/ui/MicroCTA";
import SectionWrapper from "@/components/SectionWrapper";
import { COMPANY_STATS, PPC_STATS } from "@/lib/constants";

export default function RenewablePageClient() {
  return (
    <div className="flex flex-col w-full bg-slate-950 text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/renewable.jpg"
            alt="Renewable Solutions Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6 bg-black/40 backdrop-blur-md py-2 px-6 rounded-full inline-flex border border-white/10 shadow-lg">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/80">Renewable Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Renewable <span className="gradient-heading">Solutions</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-md rounded-2xl py-6 px-8 border border-white/10 shadow-2xl mb-12">
              Complete utility-scale power value chain solutions: From digital intelligence and control panels to turnkey electrical infrastructure construction.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* --- SOLUTION NAVIGATOR --- */}
      <section className="relative z-20 py-24 bg-slate-900 rounded-t-[40px] -mt-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1: Software */}
            <SectionWrapper delay={0.1}>
              <a href="#unified" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Monitor className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Unified Renewable Solution</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">Integrated SCADA, PPC, and CMS software suite for grid compliance.</p>
              </a>
            </SectionWrapper>

            {/* Card 2: Hardware */}
            <SectionWrapper delay={0.2}>
              <a href="#panels" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Electrical Panels</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">In-house design and IS/IEC certified manufacturing of HT/LT panels.</p>
              </a>
            </SectionWrapper>

            {/* Card 3: Projects */}
            <SectionWrapper delay={0.3}>
              <a href="#turnkey" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Factory className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Turnkey E&I</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">End-to-end electrical infrastructure construction for solar & wind plants.</p>
              </a>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION 1: UNIFIED RENEWABLE SOLUTION */}
      <section id="unified" className="py-32 bg-slate-950 text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Core Software Suite</span>
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">
                1. Unified Renewable Solution
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-base">
                A single-vendor, end-to-end approach covering SCADA, PPC, CMS, Analytics, CMMS, and EMS-BESS. Eliminates vendor fragmentation to ensure seamless operational coordination and fast grid synchronization.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <SectionWrapper>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 font-heading">One Partner. Complete Execution.</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Most solar and wind projects involve 5-7 vendors for different components — panels, wiring, SCADA, switchgear, and testing. This fragmentation leads to delays, finger-pointing, and compatibility issues. AEPL&apos;s Unified Renewable Solution eliminates this by providing a single point of responsibility for the entire E&amp;I scope.
                </p>
                <div className="grid grid-cols-3 gap-6 p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
                  <div>
                    <div className="text-3xl font-black text-primary mb-1">40%</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Faster Execution</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary mb-1">100%</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">In-House Capability</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary mb-1">0</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Compatibility Issues</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" 
                  alt="Unified Renewable Solutions Solar and Wind" 
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Integrated Execution</p>
                  <h4 className="text-lg font-bold">Hybrid Wind & Solar Infrastructure</h4>
                </div>
              </div>
            </SectionWrapper>
          </div>

          {/* 6 Integrated Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "SCADA",
                icon: <Monitor className="w-6 h-6" />,
                desc: "Flexible, scalable architecture handling 10 Lakh+ tags with rich renewable libraries.",
              },
              {
                title: "Power Plant Controller (PPC)",
                icon: <Cpu className="w-6 h-6" />,
                desc: "Grid code compliant, HIL type-tested system ready for Automatic Generation Control (AGC).",
              },
              {
                title: "Central Monitoring System (CMS)",
                icon: <Shield className="w-6 h-6" />,
                desc: "Portfolio-wide KPI tracking with machine learning-based anomaly detection and AI assistant.",
              },
              {
                title: "Advanced Analytics",
                icon: <PieChart className="w-6 h-6" />,
                desc: "Accurate loss bucket profiling, historical trends, and custom reports for asset optimization.",
              },
              {
                title: "CMMS",
                icon: <Wrench className="w-6 h-6" />,
                desc: "Automated workorder scheduling and cost/inventory management to reduce MTTR.",
              },
              {
                title: "EMS - BESS",
                icon: <Battery className="w-6 h-6" />,
                desc: "Indigenous state of charge (SoC) management with ML algorithms for energy arbitrage.",
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-8 bg-slate-900/40 border border-white/10 rounded-2xl hover:bg-slate-900/70 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/renewable/unified" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-teal-500/20">
              <span>Explore Unified Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION 2: ELECTRICAL PANELS */}
      <section id="panels" className="py-32 bg-white text-slate-900 rounded-t-[40px] relative z-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <SectionWrapper>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Engineering & Manufacturing</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">2. Electrical Panels</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  We design and manufacture high-performance control panels ensuring safety and reliability for critical infrastructure. Operating out of a state-of-the-art facility, our panels are engineered to meet the most stringent specifications.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="text-3xl font-black text-primary font-mono">{COMPANY_STATS.manufacturingFacility.formatted}</div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mt-1">Facility</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="text-3xl font-black text-primary font-mono">{COMPANY_STATS.electricalPanels.formatted}</div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mt-1">Electrical Panel Supplied</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <PanelItem title="HT Panels" desc="Up to 33kV Indoor/Outdoor VCB" />
                  <PanelItem title="LT Panels" desc="PCC, MCC, APFC, and Bus Ducts" />
                  <PanelItem title="Specialty Panels" desc="C&R Panels for substations" />
                  <PanelItem title="Automation Panels" desc="Custom cabinets with SCADA & telemetry" />
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/renewable/panels" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary rounded-full font-bold text-slate-700 hover:border-primary/50 hover:shadow-xl hover:text-primary transition-all duration-300">
                    <span>Explore Panel Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>

            <div className="lg:w-1/2">
              <SectionWrapper delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[460px] rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="col-span-2 row-span-2 relative group overflow-hidden">
                    <Image 
                      src="/panels/PCC-Panel.webp" 
                      alt="Power Control Centre (PCC) Panel" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/panels/HT-Panel.webp" 
                      alt="HT Panel" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/panels/MCC-Panel.webp" 
                      alt="Motor Control Centre (MCC) Panel" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/panels/APFC-Panel.webp" 
                      alt="Automatic Power Factor Correction (APFC) Panel" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <Image 
                      src="/panels/Automation-Panels.webp" 
                      alt="Automation Panel" 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <div className="text-white text-base font-bold">State-of-the-Art Facility</div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION 3: TURNKEY E&I */}
      <section id="turnkey" className="py-32 bg-transparent text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Complete Execution Scope</span>
              <h2 className="text-4xl font-bold font-heading mb-4">3. Turnkey E&I</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-base">
                Preferred Project Partner for EPCs, delivering complete Electrical, Instrumentation & Automation turnkey construction. One consolidated contract covers drawing submittals, panel assembly, switchyard execution, and final grid sync.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <SectionWrapper>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1.5">Traditional Multi-Vendor Route</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-semibold">
                      Managing separate contracts for panel supply, site cable layout, and programming. Finger-pointing and delays often happen when parameters clash during hot testing.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-primary/10 border border-primary/30 rounded-2xl flex items-start gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 relative z-10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-bold text-sm mb-1.5">AEPL Consolidated Contract</h4>
                    <p className="text-gray-300 text-xs leading-relaxed font-semibold">
                      One partner handles detailed design, panel manufacturing, cable laying, switchyard erection, and telemetry commissioning. A single project manager is 100% accountable.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Project Pedigree</span>
                  <div className="text-4xl font-black text-primary font-mono mt-2">{COMPANY_STATS.installedBase.value}{COMPANY_STATS.installedBase.suffix}</div>
                  <span className="text-xs font-semibold text-gray-300 block mt-1">Utility-Scale Base</span>
                </div>
                <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Corporate Experience</span>
                  <div className="text-4xl font-black text-primary font-mono mt-2">17+</div>
                  <span className="text-xs font-semibold text-gray-300 block mt-1">Years in Industry</span>
                </div>
              </div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                phase: "Phase 01",
                title: "Detailed Engineering",
                icon: <Compass className="w-6 h-6" />,
                desc: "Drafting load schedules, cable sizing calculations, earthing grid layouts, and SLD submittals.",
                bullets: ["Cable sizing calculations", "Earthing grid spacing"]
              },
              {
                phase: "Phase 02",
                title: "In-House Manufacturing",
                icon: <Factory className="w-6 h-6" />,
                desc: "Assembling custom HT switchgears, LT panels, and combiner boxes in our specialized QA facility.",
                bullets: ["HT/LT switchgear panels", "NABL accredited FAT logs"]
              },
              {
                phase: "Phase 03",
                title: "Precision Site Erection",
                icon: <Activity className="w-6 h-6" />,
                desc: "Rapid field erection: installing cable trays, pulling MV/HV cables, and substation bay installation.",
                bullets: ["Cabling layout pulls", "Substation bay erection"]
              },
              {
                phase: "Phase 04",
                title: "Commissioning & Sync",
                icon: <Network className="w-6 h-6" />,
                desc: "Numerical relay calibration, Modbus loop test, SCADA telemetry checks, and grid synchronization.",
                bullets: ["Relay curve calibration", "SCADA telemetry test"]
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-8 bg-slate-900 border border-white/5 rounded-2xl hover:border-primary/50 hover:bg-slate-900/80 transition-all duration-300 group h-full flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{item.phase}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-[10px] font-bold text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/renewable/turnkey" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-teal-500/20">
              <span>Explore Turnkey E&I</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA (Dark) */}
      <section className="py-20 bg-slate-950 text-center border-t border-white/5 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Execute?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with Adaptive Engineering for safe, compliant, and accelerated electrical utility execution.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

// Helper for Panel List Item
function PanelItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-white shadow-sm transition-all duration-300">
      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  );
}
