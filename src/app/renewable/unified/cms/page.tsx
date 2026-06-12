import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Eye, TrendingDown, Zap, Shield, BarChart3, 
  Globe, Activity, Database, Lock, CheckCircle2, Layers, 
  Server, Monitor, Wrench, Battery, Sliders 
} from "lucide-react";
import { CMSHeroDashboards } from "@/components/DashboardMockups";
import UnifiedCMSFeatures from "@/components/UnifiedCMSFeatures";

export const metadata = {
  title: "Central Monitoring System (CMS) | Unified Renewable Solutions | Adaptive Engineering",
  description: "Enterprise-level monitoring and portfolio intelligence for Solar, Wind, and BESS assets with real-time visibility and intelligent analytics.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full text-slate-900 bg-slate-950">
      
      {/* 1. HERO — Dashboards left, text right (Dark) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/cms-hero-bg.png" alt="CMS Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Overlapping Dashboard Cards */}
            <SectionWrapper>
              <div className="hidden lg:block h-[480px] select-none pointer-events-none">
                <CMSHeroDashboards />
              </div>
            </SectionWrapper>

            {/* Right — Text */}
            <SectionWrapper delay={0.3}>
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
                  <Eye className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
                  Central Monitoring<br />
                  <span className="gradient-heading">System (CMS)</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg font-medium max-w-lg leading-relaxed mt-6 mb-4">
                  AEPL&apos;s Centralized Monitoring System provides real-time visibility and intelligent analytics for Solar, Wind, and BESS assets.
                </p>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-8">&quot;Enterprise-Level Monitoring and Portfolio Intelligence&quot;</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS (Light) */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20">
                <TrendingDown className="w-4 h-4" />
                <span>Portfolio Optimization</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 leading-tight">
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Benefits</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Deploying AEPL&apos;s Central Monitoring System unlocks an unparalleled suite of analytics and performance enhancements across your entire grid.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Complete Portfolio Visibility", 
                desc: "Centralized oversight across multiple states and assets from a single unified management dashboard.",
                icon: <Eye className="w-6 h-6 text-teal-600" />,
                bg: "bg-teal-50"
              },
              { 
                title: "Improved Plant Performance", 
                desc: "Optimize yield, PR, and generation metrics natively through deep cross-plant analytics.",
                icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
                bg: "bg-emerald-50"
              },
              { 
                title: "Reduced Downtime", 
                desc: "Identify underperforming strings or equipment faults seconds after they occur for immediate dispatch.",
                icon: <TrendingDown className="w-6 h-6 text-cyan-600" />,
                bg: "bg-cyan-50"
              },
              { 
                title: "Accurate Energy Insights", 
                desc: "Extract actionable meaning from raw SCADA telemetry with automated loss bucket analysis.",
                icon: <Zap className="w-6 h-6 text-sky-600" />,
                bg: "bg-sky-50"
              },
              { 
                title: "Scalable & Secure Platform", 
                desc: "Cloud-native elastic architecture built atop encrypted data systems to guarantee uptime and security.",
                icon: <Shield className="w-6 h-6 text-indigo-600" />,
                bg: "bg-indigo-50"
              },
              { 
                title: "Faster Fault Detection", 
                desc: "Instant anomaly detection warns operators of discrepancies before failures manifest.",
                icon: <Activity className="w-6 h-6 text-teal-600" />,
                bg: "bg-teal-50"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1} className="h-full">
                <div className="relative p-8 rounded-3xl border border-slate-200/60 bg-slate-50/50 hover:bg-white shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  {/* Subtle top-right index overlay */}
                  <span className="absolute top-6 right-8 text-slate-200/80 font-mono font-bold text-4xl group-hover:text-primary/10 transition-colors select-none">
                    0{i + 1}
                  </span>
                  
                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 ${item.bg} group-hover:scale-105 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGNED FOR THE FUTURE ENERGY ECOSYSTEM (Light-Gray transition) */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                Next-Gen Ecosystem
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">
                Designed for the Future Energy Ecosystem
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Centralized platform engineered to scale, secure, and streamline multi-GW energy operations.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Handles Renewable Complexity",
                desc: "Manages distributed generation, intermittency, and dynamic conditions across Solar, Wind, and BESS portfolios.",
                icon: <Sliders className="w-5 h-5 text-primary group-hover:text-white" />,
                tag: "Optimization"
              },
              {
                title: "Ensures Operational Transparency",
                desc: "Delivers audit-ready logs, clear event sequences, and enterprise-wide operational tracking.",
                icon: <CheckCircle2 className="w-5 h-5 text-teal-500 group-hover:text-white" />,
                tag: "Governance"
              },
              {
                title: "Advanced Analytics",
                desc: "Employs data pipelines, loss bucket calculations, and custom report builders for optimization.",
                icon: <BarChart3 className="w-5 h-5 text-cyan-500 group-hover:text-white" />,
                tag: "Intelligence"
              },
              {
                title: "Secure Data Architecture",
                desc: "Employs hardened perimeter firewalls, segmented VPN tunneling, TLS encryption, and RBAC to protect core assets.",
                icon: <Lock className="w-5 h-5 text-sky-500 group-hover:text-white" />,
                tag: "Security"
              },
              {
                title: "Flexible Deployment",
                desc: "Supports cloud-hosted, on-premises, or hybrid containerized configurations matching your architecture.",
                icon: <Server className="w-5 h-5 text-teal-500 group-hover:text-white" />,
                tag: "Infrastructure"
              },
              {
                title: "Future-Ready Platform",
                desc: "Seamlessly integrates battery storage (BESS) and scaling capacities as your renewable generation expands.",
                icon: <Zap className="w-5 h-5 text-primary group-hover:text-white" />,
                tag: "Scalability"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-[28px] border border-slate-200/80 hover:border-primary/40 shadow-md hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ease-out h-full flex flex-col justify-between overflow-hidden hover:-translate-y-2 hover:scale-[1.01] p-8">
                  
                  {/* Subtle top-right ambient hover highlight */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/[0.03] group-hover:bg-primary/[0.08] rounded-full blur-2xl transition-colors duration-500 pointer-events-none"></div>
                  
                  <div>
                    {/* Header Row: Icon and Index Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary text-[10px] font-mono font-bold rounded-full tracking-wider transition-all duration-300">
                        PILLAR 0{i + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Action Row */}
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100/80 relative z-10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>

                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES — Interactive Tabular UI (Dark background) */}
      <section className="bg-[#0b0f17] text-white border-t border-slate-900 relative z-20">
        <UnifiedCMSFeatures />
      </section>

      {/* 5. GAIN SUPERIOR CONTROL — 3x3 Grid (Dark Immersive) */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-[#081a1a] to-slate-900 text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                AEPL Enterprise Strength
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-tight">
                Gain Superior Control with <span className="gradient-heading">AEPL CMS</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Built to handle the immense scale and data complexity of modern renewable enterprise portfolios.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time plant performance visibility",
                desc: "Immediate insight into generation metrics, PR, and plant status across all active solar/wind blocks.",
                icon: <Eye className="w-5 h-5 text-teal-400" />
              },
              {
                title: "Centralized portfolio monitoring",
                desc: "Oversight of multi-GW portfolios from a unified central dashboard with regional maps.",
                icon: <Globe className="w-5 h-5 text-emerald-400" />
              },
              {
                title: "Advanced analytics & loss bucket analysis",
                desc: "Identify generation leaks at inverter levels and map losses to grid, environment, or equipment issues.",
                icon: <BarChart3 className="w-5 h-5 text-teal-400" />
              },
              {
                title: "Predictive maintenance & anomaly detection",
                desc: "AI/ML algorithms trace failure indicators in strings and components to prevent shutdowns.",
                icon: <Zap className="w-5 h-5 text-emerald-400" />
              },
              {
                title: "Automated reporting & data intelligence",
                desc: "Configurable templates with scheduler integrations to deliver audit-ready reports directly.",
                icon: <Database className="w-5 h-5 text-teal-400" />
              },
              {
                title: "Cross-plant benchmarking & asset comparison",
                desc: "Benchmark efficiency, compare performance matrices of diverse OEMs, and trace regional trends.",
                icon: <Layers className="w-5 h-5 text-emerald-400" />
              },
              {
                title: "Enterprise dashboards for management",
                desc: "Tailored C-suite dashboards summarizing key financial, compliance, and operation statistics.",
                icon: <Monitor className="w-5 h-5 text-teal-400" />
              },
              {
                title: "Secure data infrastructure",
                desc: "High-integrity telemetry paths using encrypted pipelines to preserve data availability.",
                icon: <Server className="w-5 h-5 text-emerald-400" />
              },
              {
                title: "Cyber security",
                desc: "Aligned with IEC 62443 standards with segmented firewalls, TLS tunneling, and strict RBAC.",
                icon: <Lock className="w-5 h-5 text-teal-400" />
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO VISUALIZATION IMAGE SECTION (Light) */}
      <section className="py-20 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Global Intelligence</span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Multi-GW portfolio monitoring from a unified dashboard</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  Unlock centralized oversight across multiple states and assets. The Central Monitoring System aggregates performance metrics across heterogeneous solar and wind sites, enabling asset managers to compare yield, identify systemic faults, and run diagnostics without traveling to the field.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Cross-site performance analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>SLA and maintenance dispatch tracking</span>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 select-none pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80" 
                  alt="Renewable Energy Infrastructure" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Global Assets</p>
                  <h4 className="text-lg font-bold">Utility-Scale Solar Field Monitoring</h4>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 7. EXPLORE OTHER SOLUTIONS (Light-Gray) */}
      <section className="py-24 bg-slate-50 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                Unified Renewable Suite
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">Explore Other Solutions</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Each module is designed to work seamlessly together as part of AEPL&apos;s end-to-end unified renewable platform.</p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { href: "/renewable/unified/scada", label: "SCADA", abbr: "SCADA", icon: <Monitor className="w-5 h-5" />, desc: "Scalable SCADA architecture with rich renewable libraries handling millions of real-time tags." },
              { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, custom report builder and historical analysis." },
              { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
              { href: "/renewable/unified/cmms", label: "Computerised Maintenance Management", abbr: "CMMS", icon: <Wrench className="w-5 h-5" />, desc: "Automated work orders, SOPs and inventory management for O&M teams." },
              { href: "/renewable/unified/ems-bess", label: "Energy Management System", abbr: "EMS-BESS", icon: <Battery className="w-5 h-5" />, desc: "ML-based energy arbitrage, SoC management, and peak shaving for battery storage." },
            ].map((sol, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <Link href={sol.href} className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary rounded-md text-[10px] font-mono tracking-wider font-bold group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      {sol.abbr}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {sol.icon}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-extrabold text-slate-950 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {sol.label}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed flex-grow font-medium">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-primary font-bold text-sm mt-6 group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA (Dark) */}
      <section className="py-20 bg-slate-950 text-center relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-900">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Centralize Your Monitoring?</h2>
            <p className="text-gray-400 mb-8 text-base">Get complete visibility of your renewable portfolio with AEPL CMS.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
