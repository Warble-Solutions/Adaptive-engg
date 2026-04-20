import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "IoT SCADA (SolarWiz RMS) | Adaptive Engineering",
  description: "Edge-computing Remote Monitoring System with Store & Forward for 100% data capture in rural India.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="network" color="#049A89" speed={0.5} />
      
      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80" alt="IoT SCADA (SolarWiz RMS) Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              PM-KUSUM
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              IoT SCADA (SolarWiz RMS)
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Edge-computing Remote Monitoring System with Store &amp; Forward for 100% data capture in rural India.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Smart Monitoring for Solar Pumps */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Smart Monitoring for Solar Pumps</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  SolarWiz is AEPL&apos;s flagship IoT platform designed specifically for PM-KUSUM solar pump monitoring. Built for the harsh realities of rural India — intermittent connectivity, extreme temperatures, and remote locations — SolarWiz uses edge computing with Store &amp; Forward technology to ensure 100% data capture even when network is unavailable.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">68GW+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Assets Monitored</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">99.9%</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Data Capture Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 mb-1">500+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Plants Online</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 font-heading mb-4">Key Features</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionWrapper delay={0}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Edge Computing</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  On-device data processing with intelligent Store &amp; Forward. Data is captured locally and synced when connectivity resumes — zero data loss.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Real-Time Dashboard</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Live monitoring of pump flow rate, pressure, voltage, current, energy generation, and water discharge with configurable alerts.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">MNRE Compliant</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Fully compliant with MNRE guidelines for PM-KUSUM Remote Monitoring. Tested and approved by multiple State Nodal Agencies.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.30000000000000004}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start">
                <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">Multi-Protocol Support</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  Supports Modbus RTU/TCP, MQTT, HTTP, and IEC protocols. Compatible with all major VFD makes — INVT, Fuji, Delta, ABB.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Technical Specifications</h2>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">ARM Cortex processor with 4G/LTE + WiFi + RS485 connectivity</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Industrial grade operating temperature: -20°C to +70°C</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">IP65 rated enclosure with DIN rail mounting option</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Built-in GPS for geotagging and anti-theft tracking</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">OTA firmware updates for remote maintenance</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Supports up to 32 Modbus slave devices per gateway</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Local data storage: 90 days of 1-minute interval data</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <span className="leading-relaxed">Cloud: AWS/Azure hosted with MeitY compliance</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">How It Works</h2>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30 -z-0"></div>
            <SectionWrapper delay={0}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-800 border-4 border-slate-700 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sense</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">Sensors and meters capture pump performance — flow, pressure, energy, ambient conditions.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.1}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-800 border-4 border-slate-700 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Process</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">Edge device processes raw data locally, calculates derived parameters, and applies alerts.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-800 border-4 border-slate-700 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transmit</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">Data is transmitted to cloud via 4G. If offline, stored locally and synced later.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.30000000000000004}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-800 border-4 border-slate-700 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visualize</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">State agencies and developers view data on CMS dashboard with automated reports.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Interested in IoT SCADA (SolarWiz RMS)?</h2>
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
