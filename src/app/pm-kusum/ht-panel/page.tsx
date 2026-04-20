import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Activity, CheckCircle2, Settings, Gauge, ThermometerSun, Wind, Award, Cpu, Lock } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

export const metadata = {
  title: "HT Panel Solutions — VCB Panel up to 33kV | PM-KUSUM | Adaptive Engineering",
  description: "IS/IEC type-tested High Tension VCB Panels up to 33kV/11kV for PM-KUSUM solar installations, substations, and industrial applications.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />

      {/* HERO — Industrial engineering spec aesthetic */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#0f0f0f]"></div>
          {/* Blueprint grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(234,179,8,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500/10 backdrop-blur-sm text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-yellow-500/20">
              <Zap className="w-4 h-4" />
              <span>PM-KUSUM</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
              HT Panel Solutions
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400/80 mb-6">VCB Panel up to 33kV / 11kV</p>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              IS/IEC type-tested High Tension Vacuum Circuit Breaker panels manufactured in our {COMPANY_STATS.manufacturingFacility.formatted} Sq. Ft. facility for PM-KUSUM solar, substations, and industrial applications.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* KEY SPECS OVERVIEW */}
      <section className="py-16 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "33kV", label: "Max Rated Voltage", icon: <Zap className="w-5 h-5" /> },
                { value: "2500A", label: "Max Rated Current", icon: <Gauge className="w-5 h-5" /> },
                { value: "31.5kA", label: "Short Circuit Rating", icon: <Shield className="w-5 h-5" /> },
                { value: "IS/IEC", label: "Type Tested", icon: <Award className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-500/30 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">{item.value}</div>
                  <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* DETAILED SPECIFICATION TABLE */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12 font-heading">Technical Specifications</h2>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-5 font-bold text-xs uppercase tracking-wider">Parameter</th>
                    <th className="text-center p-5 font-bold text-xs uppercase tracking-wider">3.3 kV</th>
                    <th className="text-center p-5 font-bold text-xs uppercase tracking-wider">6.6 kV</th>
                    <th className="text-center p-5 font-bold text-xs uppercase tracking-wider bg-yellow-600/20 border-x border-yellow-500/30">11 kV</th>
                    <th className="text-center p-5 font-bold text-xs uppercase tracking-wider bg-primary/20 border-x border-primary/30">33 kV</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "Rated Voltage", values: ["3.6 kV", "7.2 kV", "12 kV", "36 kV"] },
                    { param: "Rated Current", values: ["630–2500A", "630–2500A", "630–2500A", "630–2500A"] },
                    { param: "Short Circuit Current", values: ["25 kA", "25 kA", "25–31.5 kA", "25–31.5 kA"] },
                    { param: "Rated Insulation Level (BIL)", values: ["40 kV", "60 kV", "75 kV", "170 kV"] },
                    { param: "Arc Quenching Medium", values: ["Vacuum", "Vacuum", "Vacuum", "Vacuum / SF6"] },
                    { param: "Protection Relay", values: ["Numerical", "Numerical", "Numerical", "Numerical"] },
                    { param: "Enclosure", values: ["IP42/IP54", "IP42/IP54", "IP42/IP54", "IP42/IP54/IP65"] },
                    { param: "Ambient Temperature", values: ["-5° to 50°C", "-5° to 50°C", "-5° to 50°C", "-5° to 50°C"] },
                    { param: "Cooling", values: ["Natural Air", "Natural Air", "Natural Air", "Natural Air"] },
                    { param: "Design Standard", values: ["IS/IEC 62271", "IS/IEC 62271", "IS/IEC 62271", "IS/IEC 62271"] },
                    { param: "SCADA Integration", values: ["Optional", "Optional", "Standard", "Standard"] },
                    { param: "Compliance", values: ["ERDA Tested", "ERDA Tested", "ERDA Tested", "ERDA / CPRI Tested"] },
                  ].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-yellow-50/50 transition-colors`}>
                      <td className="p-4 font-bold text-slate-900 border-b border-slate-100">{row.param}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className={`p-4 text-center text-slate-600 border-b border-slate-100 ${j === 2 ? 'bg-yellow-50/30 border-x border-yellow-100' : ''} ${j === 3 ? 'bg-primary/5 border-x border-primary/10' : ''}`}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* PANEL FEATURES */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">Panel Features</h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "Vacuum Circuit Breaker", desc: "Long life VCB with 10,000+ mechanical operations and maintenance-free arc chamber." },
              { icon: <Cpu className="w-6 h-6" />, title: "Numerical Protection", desc: "Microprocessor-based protection relays with overcurrent, earth fault, and differential functions." },
              { icon: <Activity className="w-6 h-6" />, title: "CT/PT Metering", desc: "Built-in current and potential transformers with multifunction energy meters and RS485 output." },
              { icon: <Settings className="w-6 h-6" />, title: "Motorized Racking", desc: "Motor-operated breaker racking mechanism with padlockable safety interlocks." },
              { icon: <Lock className="w-6 h-6" />, title: "Safety Features", desc: "Door interlocks, earthing switch, arc flash venting, and IR window for live-line thermography." },
              { icon: <ThermometerSun className="w-6 h-6" />, title: "Environmental Protection", desc: "Anti-corrosion CRCA enclosure with epoxy powder coating. Tropicalized for Indian conditions." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Need Custom HT Panel Configuration?</h2>
            <p className="text-slate-500 mb-8 text-lg">Our panel engineers will design a solution matching your exact specifications.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-yellow-500 hover:text-slate-900 transition-colors">
              Request Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
