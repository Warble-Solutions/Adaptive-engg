"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Shield, 
  CheckCircle2, 
  Monitor, 
  Cpu, 
  Activity,
  Layers,
  Database,
  Workflow,
  Network
} from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function InfrastructurePageClient() {
  return (
    <div className="flex flex-col w-full bg-slate-950 text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/solutions/tunnel_entrance_new.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 mix-blend-multiply z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6 bg-black/40 backdrop-blur-md py-2 px-6 rounded-full inline-flex border border-white/10 shadow-lg">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/80">Infrastructure Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Infrastructure <span className="gradient-heading">Solutions</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-md rounded-2xl py-6 px-8 border border-white/10 shadow-2xl mb-12">
              Powering critical public & private sector infrastructure: End-to-end Turnkey E&I and automation solutions built for resilience, compliance, and zero downtime.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* --- SOLUTION NAVIGATOR --- */}
      <section className="relative z-20 py-24 bg-slate-900 rounded-t-[40px] -mt-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1: Tunnel Solutions */}
            <SectionWrapper delay={0.1}>
              <a href="#tunnel" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Layers className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Tunnel Solutions</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">Safety ventilation, portal glare lighting control, air quality NOC, and redundant PLC substations.</p>
              </a>
            </SectionWrapper>

            {/* Card 2: Data Center */}
            <SectionWrapper delay={0.2}>
              <a href="#datacenter" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Database className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Data Center</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">HV/LV distribution and intelligent building systems designed for concurrently maintainable uptime.</p>
              </a>
            </SectionWrapper>

            {/* Card 3: Turnkey E&I */}
            <SectionWrapper delay={0.3}>
              <a href="#automation" className="block h-full group p-8 bg-slate-800/50 border border-teal-500/30 rounded-3xl hover:border-primary/80 hover:shadow-[0_0_30px_rgba(13,160,138,0.2)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-6 mb-4">
                  <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Workflow className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors">Turnkey E&amp;I</h3>
                </div>
                <p className="text-gray-400 text-base text-center leading-relaxed">Turnkey plant telemetry, custom control panels, SCADA systems, and industrial process automation.</p>
              </a>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION 1: TUNNEL SOLUTIONS */}
      <section id="tunnel" className="py-32 bg-slate-950 text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-teal-500/20">
                  Tunnel E&amp;I and SCADA
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
                  Road, Railway &amp; Metro <span className="gradient-heading">Tunnel Solutions</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  We at Adaptive Engineering Pvt. Ltd. are experts in providing Electrical, Instrumentation and Automation Solutions for Tunnels – Road, Railway and Metro. With the rising awareness on road and rail safety, government is modernizing road and railway tunnels. Additionally, numerous railway lines and highways, passes through tunnels in mountain ranges, which creates a high demand for tunnel electrical & automation systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Safety Ventilation (Jet Fans) &amp; Redundant VFDs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Portal Glare &amp; Intelligent Interior Lighting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Real-time Air Quality Monitors (CO, NO, Visibility)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Dynamic Emergency Control &amp; Redundant UPS</span>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    href="/infrastructure/tunnel" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#0da08a] text-white font-bold uppercase tracking-wider text-sm rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105"
                  >
                    Explore Tunnel Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img 
                    src="/imgs/solutions/tunnel_infrastructure_modern.png" 
                    alt="Tunnel Infrastructure Entrance" 
                    className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Infrastructure vertical</p>
                    <h4 className="text-lg font-bold">Smart Tunnel Automation Systems</h4>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION 2: DATA CENTER */}
      <section id="datacenter" className="py-32 bg-slate-900 text-white relative z-10 scroll-mt-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <SectionWrapper>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                    alt="Data Center Server Racks" 
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Critical Facilities</p>
                    <h4 className="text-lg font-bold">Tier III &amp; IV Power Infrastructure</h4>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-8">
              <SectionWrapper delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-teal-500/20">
                  Critical Infrastructure
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
                  World-Class <span className="gradient-heading">Data Center E&amp;I</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  AEPL has 17+ years history in providing solutions in building environments incorporating latest technology in the critical infrastructure of Data Center. Your piece of mind comes from our world class quality and state-of-art design customised to the needs of each critical infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Concurrently Maintainable Power Distribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Double-Feed Active Utility Lines &amp; Interlocks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Intelligent Building Management Systems (BMS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Environmental Monitoring &amp; High-Availability HVAC</span>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    href="/infrastructure/data-center" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#0da08a] text-white font-bold uppercase tracking-wider text-sm rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105"
                  >
                    Explore Data Center Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION 3: INDUSTRIAL AUTOMATION */}
      <section id="automation" className="py-32 bg-slate-950 text-white relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-teal-500/20">
                  Process Control
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
                  Turnkey <span className="gradient-heading">E&amp;I</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  Elevating operational intelligence with our state-of-the-art process loops, custom PLC/RTU panel engineering, and portfolio-wide SCADA telemetry networks. We deliver robust control architectures tailored to water treatment, SCADA NOC, and factory digitalization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Process Loop Optimization &amp; Tuning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Centralized SCADA Telemetry NOC Systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>PLC &amp; RTU Programming &amp; Commissioning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Custom E&amp;I Control Panel Engineering</span>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    href="/infrastructure/automation" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#0da08a] text-white font-bold uppercase tracking-wider text-sm rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105"
                  >
                    Explore Automation Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <SectionWrapper delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img 
                    src="/imgs/solutions/turnkey_ei.png" 
                    alt="Turnkey E&amp;I Control Panels" 
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Automation Engineering</p>
                    <h4 className="text-lg font-bold">State-of-the-Art Control Panels</h4>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-slate-900 border-t border-white/5 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl md:text-5xl font-black font-heading mb-6">
              Ready to Upgrade Your <span className="gradient-heading">Critical Infrastructure?</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Partner with Adaptive to design, manufacture, and deploy certified, concurrently maintainable electrical and automation frameworks for your road/rail tunnels, data center facilities, or water SCADA networks.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-[#0da08a] text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                Get in Touch with Experts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
