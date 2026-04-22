import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2, Factory, Calculator, FileText, BarChart3, Settings, Shield, Gauge } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

export const metadata = {
  title: "Electrical Panels & Power System Analysis | Adaptive Engineering",
  description: "IS/IEC certified LT & HT panel manufacturing and comprehensive electrical power system analysis for solar, industrial, and infrastructure applications.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/hero-electrical-panels.png" alt="Electrical Panels Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Renewable Energy
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Electrical <span className="gradient-heading">Panels</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              IS/IEC certified LT &amp; HT panel manufacturing for solar, industrial, and infrastructure applications. Manufactured in our {COMPANY_STATS.manufacturingFacility.formatted} Sq. Ft. facility.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Engineered for Reliability */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Engineered for Reliability</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  Our {COMPANY_STATS.manufacturingFacility.formatted} sq ft manufacturing facility produces a comprehensive range of electrical panels designed for demanding environments. Every panel undergoes rigorous type testing and quality assurance before dispatch. We manufacture LT Panels (up to 6300A), HT Panels (up to 33kV), ACDB/DCDB for solar applications, MCC, PCC, APFC, and custom control panels — all complying with IS/IEC standards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/pm-kusum/ht-panel" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-full font-bold text-sm text-slate-700 hover:bg-[#0da08a] border-primary hover:text-primary transition-all">
                    HT Panels <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/pm-kusum/acdb-panels" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-full font-bold text-sm text-slate-700 hover:bg-[#0da08a] border-primary hover:text-primary transition-all">
                    ACDB Panels <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">{COMPANY_STATS.manufacturingFacility.formatted}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Sq Ft Facility</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">{COMPANY_STATS.electricalPanels.formatted}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Panels Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">IS/IEC</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Type Tested</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Panel Range */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Panel Range</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "LT Panels", desc: "PCC, MCC, APFC, Bus Duct, and custom control panels rated up to 6300A for industrial and utility applications." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "HT Panels", desc: "11kV and 33kV VCB panels, Ring Main Units (RMU), and metering panels for substation applications." },
              { icon: <Activity className="w-6 h-6" />, title: "Solar Panels", desc: "ACDB, DCDB, String Combiner Boxes, Inverter Duty Panels with IP65 protection for harsh outdoor environments." },
              { icon: <Cpu className="w-6 h-6" />, title: "Automation Panels", desc: "PLC panels, VFD panels, relay protection panels, and SCADA interface panels with pre-loaded configurations." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/50 hover:bg-[#0da08a] -translate-y-2 hover:bg-white/10 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                  <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors flex-grow">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Manufacturing Excellence</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <ul className="space-y-5">
                  {[
                    "Computerized sheet metal fabrication with CNC punching and powder coating",
                    "In-house busbar bending and silver-plated copper connections",
                    "NABL accredited testing laboratory for type testing",
                    "Full traceability with barcode-based component tracking",
                    "Dedicated R&D team for custom panel engineering",
                    "Copper busbar capacity from 200A to 6300A",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-700">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* ELECTRICAL POWER SYSTEM ANALYSIS SECTION */}
      {/* ========================================= */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                <Calculator className="w-4 h-4" />
                <span>Engineering Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Electrical Power System Analysis</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Comprehensive electrical engineering studies using E-TAP and simulation tools to ensure safety, compliance, and optimal performance of your power systems.
              </p>
            </div>
          </SectionWrapper>

          {/* EPSA Study Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Gauge className="w-6 h-6" />, title: "Short Circuit Study", desc: "Fault level analysis at every bus to determine equipment ratings, protective device coordination, and system adequacy.", color: "from-red-500 to-teal-500" },
              { icon: <Activity className="w-6 h-6" />, title: "Power Factor Analysis", desc: "Harmonic analysis, reactive power compensation design, and APFC panel sizing for optimal power quality.", color: "from-teal-500 to-teal-500" },
              { icon: <Shield className="w-6 h-6" />, title: "Earthing Study", desc: "Touch and step potential analysis, soil resistivity interpretation, and earthing grid design per IS/IEEE standards.", color: "from-teal-500 to-teal-500" },
              { icon: <Settings className="w-6 h-6" />, title: "Transformer & Cable Sizing", desc: "Optimal transformer selection, cable size calculation with derating factors, voltage drop analysis, and ampacity verification.", color: "from-teal-500 to-teal-500" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Relay Coordination Study", desc: "Time-current curve analysis, protection grading, and relay setting calculations for selective fault isolation.", color: "from-teal-500 to-teal-500" },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Load Flow Study", desc: "Steady-state voltage profile, branch loading, transformer loading, and system losses under various operating scenarios.", color: "from-teal-500 to-teal-500" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-teal-500/30 hover:bg-white/10 -translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* EPSA Benefits */}
          <SectionWrapper>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Power System Analysis Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Reduced downtime through proper protection coordination",
                  "Improved efficiency with optimized cable and transformer sizing",
                  "Regulatory compliance with IS/IEC/IEEE standards",
                  "Enhanced safety through proper earthing and fault analysis",
                  "Optimised capital expenditure on electrical equipment",
                  "Simplified maintenance with clear protection settings",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* EPSA Value */}
          <div className="mt-16">
            <SectionWrapper>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Standards-aligned (IS/IEC/IEEE)",
                  "End-to-end E-TAP simulation",
                  "Clear graphical reports",
                  "Field-validated results",
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-[#0da08a] bg-teal-500/10 hover:bg-white/10 border-teal-500/30 transition-all">
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Need Electrical Panels or System Analysis?</h2>
            <p className="text-slate-500 mb-8 text-lg">Let our experts design the right panel configuration or conduct comprehensive power system studies for your project.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white hover:bg-[#0da08a] bg-slate-900 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
