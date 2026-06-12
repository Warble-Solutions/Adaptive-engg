import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { 
  ArrowRight, Wrench, ClipboardList, CheckCircle2, Bell, 
  FileCheck, Package, Camera, Clock, BarChart3, Users, 
  Calendar, Cog, Monitor, Eye, Zap, Battery, 
  Sliders, Layers, Database 
} from "lucide-react";
import { CMMSDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "CMMS | Unified Renewable Solutions | Adaptive Engineering",
  description: "Computerized Maintenance Management System — Automated workorder management, standardized SOPs, and effective cost control for renewable operations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full text-slate-900 bg-slate-955">

      {/* 1. HERO — Split layout (Dark) */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        {/* Background Image with Tint */}
        <div className="absolute inset-0 z-0">
          <img src="/images/renewable/cmms-hero-bg.png" alt="CMMS Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-transparent to-slate-950/90"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            {/* Left — Text */}
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
                  <Wrench className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-tight">
                  Computerized Maintenance<br />
                  <span className="gradient-heading">Management System</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg font-medium max-w-lg leading-relaxed mb-8">
                  Automated workorder management, standardized SOPs across the enterprise, reduced mean time to repair, and effective cost control with inventory management.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>

            {/* Right — Dashboard */}
            <SectionWrapper delay={0.3}>
              <div className="h-[440px] hidden lg:block select-none pointer-events-none">
                <CMMSDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* 2. VALUE CREATION (Light) */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-teal-500/20">
                <Sliders className="w-4 h-4" />
                <span>Value Driven O&M</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 leading-tight">
                Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Creation</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Driving operational excellence, improving plan compliance, and maximizing asset lifecycle value.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Optimize asset utilization", 
                desc: "Maximize availability and active run times of your Solar, Wind, and BESS installations.",
                icon: <Sliders className="w-5 h-5 text-teal-600" />,
                bg: "bg-teal-50"
              },
              { 
                title: "Improve maintenance planning", 
                desc: "Transition from reactive fire-fighting to proactive calendar scheduling and tracking.",
                icon: <Calendar className="w-5 h-5 text-emerald-600" />,
                bg: "bg-emerald-50"
              },
              { 
                title: "Enhance inventory management", 
                desc: "Keep precise tab on spare parts, tool allocations, and minimum threshold alerts.",
                icon: <Package className="w-5 h-5 text-cyan-600" />,
                bg: "bg-cyan-50"
              },
              { 
                title: "Ensure regulatory compliance", 
                desc: "Provide audit-ready records, detailed checklist logs, and safety sequence documentation.",
                icon: <FileCheck className="w-5 h-5 text-sky-600" />,
                bg: "bg-sky-50"
              },
              { 
                title: "Enable data-driven decisions", 
                desc: "Leverage MTTR, MTBF, and cost analysis dashboards to choose reliable vendors.",
                icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
                bg: "bg-indigo-50"
              },
              { 
                title: "Reduces search time", 
                desc: "Technicians find manuals, historical logs, and SOP details instantly in the field.",
                icon: <Eye className="w-5 h-5 text-teal-600" />,
                bg: "bg-teal-50"
              },
              { 
                title: "Real-time visibility", 
                desc: "Track dispatch actions, ticket progression, and field metrics dynamically from the office.",
                icon: <Monitor className="w-5 h-5 text-emerald-600" />,
                bg: "bg-emerald-50"
              },
              { 
                title: "Improved asset reliability", 
                desc: "Consistent O&M sequence execution guarantees high long-term asset health and yield.",
                icon: <Zap className="w-5 h-5 text-cyan-600" />,
                bg: "bg-cyan-50"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="relative p-6 rounded-3xl border border-slate-200/60 bg-slate-50/50 hover:bg-white shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <span className="absolute top-5 right-6 text-slate-200/60 font-mono font-bold text-3xl group-hover:text-primary/10 transition-colors select-none">
                    0{i + 1}
                  </span>
                  
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 ${item.bg} group-hover:scale-105 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-2">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES (Light-Gray transition) */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                CMMS Capabilities
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">
                Key Features
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Enterprise-grade computerized maintenance management tools matching modern energy portfolio scales.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Workorder Management",
                desc: "Creates workorders automatically from SCADA alarm triggers, assigning them immediately to the nearest qualified technician to guarantee SLA enforcement.",
                icon: <Wrench className="w-6 h-6 text-teal-600" />,
                tag: "Workflows"
              },
              {
                title: "Standardize SOPs Across Enterprise",
                desc: "Enforces standardized checklists, mandatory photo captures, and step-by-step verification flows across every single site to guarantee audit readiness.",
                icon: <ClipboardList className="w-6 h-6 text-emerald-600" />,
                tag: "SOP Compliance"
              },
              {
                title: "Reduced Mean Time to Repair",
                desc: "Minimizes downtime through proximity-based auto-routing, skill-level matching, and real-time operational notifications.",
                icon: <Clock className="w-6 h-6 text-cyan-600" />,
                tag: "MTTR Optimization"
              },
              {
                title: "Effective Cost Control & Inventory",
                desc: "Monitors consumable costs, keeps tabs on vendor invoices, and tracks cost metrics per block to optimize maintenance budgets.",
                icon: <Package className="w-6 h-6 text-sky-600" />,
                tag: "Financials"
              },
              {
                title: "Asset Information Management",
                desc: "Acts as a centralized library mapping asset details, vendor sheets, physical coordinates, and repair histories.",
                icon: <Database className="w-6 h-6 text-indigo-600" />,
                tag: "Repository"
              },
              {
                title: "Asset Team Management",
                desc: "Coordinates technician profiles, shift schedules, safety accreditations, and historical task completion rates.",
                icon: <Users className="w-6 h-6 text-teal-600" />,
                tag: "Workforce"
              },
              {
                title: "Maintenance Management",
                desc: "Manages preventive and corrective maintenance workflows, verifying checklist status before closure.",
                icon: <Cog className="w-6 h-6 text-emerald-600" />,
                tag: "Operations"
              },
              {
                title: "Inventory Management",
                desc: "Maintains real-time inventory records of spare parts, warehouses, transfer orders, and tool allocations.",
                icon: <Layers className="w-6 h-6 text-cyan-600" />,
                tag: "Warehouse"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.05} className="h-full">
                <div className="group bg-white rounded-3xl border border-slate-200/70 hover:border-teal-500/30 p-8 shadow-sm hover:shadow-xl hover:shadow-teal-500/[0.02] transition-all duration-300 flex items-start gap-6 h-full text-left">
                  {/* Left Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/80 group-hover:scale-105 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  
                  {/* Right Content */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-teal-600 uppercase tracking-wider block mb-1">
                      {item.tag} • PILLAR 0{i + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW — Fault to Fix (Dark background) */}
      <section className="py-28 bg-[#0b0f17] text-white border-t border-slate-900 relative z-20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-teal-400/70 uppercase tracking-widest block mb-4">The flow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Fault to fix.<br />Fully automated.</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {[
              { step: "Detect", icon: <Bell className="w-6 h-6" />, desc: "SCADA alarm triggers or scheduled PM due date reached", color: "text-red-400" },
              { step: "Dispatch", icon: <Users className="w-6 h-6" />, desc: "Auto-assign to nearest qualified technician with SLA", color: "text-teal-400" },
              { step: "Execute", icon: <Camera className="w-6 h-6" />, desc: "Follow SOP checklists, capture photo evidence on mobile", color: "text-teal-400" },
              { step: "Resolve", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Verify completion, log root cause, update knowledge base", color: "text-teal-400" },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-slate-900/80 backdrop-blur-sm p-8 md:p-10 h-full flex flex-col group hover:bg-white/[0.04] transition-colors">
                  <div className={`${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  <div className="mt-6 text-[10px] font-bold text-white/10 uppercase tracking-widest">Step {(i + 1).toString().padStart(2, '0')}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAINTENANCE FIELD OPERATIONS (Light) */}
      <section className="py-20 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 select-none pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                  alt="Technician maintaining solar installation" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Field Services</p>
                  <h4 className="text-lg font-bold">Technician Performing Preventive Maintenance</h4>
                </div>
              </div>
            </SectionWrapper>
            
            <SectionWrapper delay={0.2}>
              <div className="text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Operations & Maintenance</span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Empowering field technicians with standardized checklists</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  Close the loop on system alerts immediately. Technicians receive detailed work order sheets directly on their mobile devices, outlining standard procedures, target metrics, and mandatory photo verification requirements to ensure consistent compliance across your fleet.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Offline-first mobile capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-800 mt-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Standardized verification flow with photos</span>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 6. EXPLORE OTHER SOLUTIONS (Light-Gray) */}
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
              { href: "/renewable/unified/cms", label: "Central Monitoring System", abbr: "CMS", icon: <Eye className="w-5 h-5" />, desc: "Multi-site portfolio monitoring with real-time visibility across all your renewable assets." },
              { href: "/renewable/unified/analytics", label: "Advanced Analytics", abbr: "Analytics", icon: <BarChart3 className="w-5 h-5" />, desc: "Data visualization, loss buckets, custom report builder and historical analysis." },
              { href: "/ppc", label: "Power Plant Controller", abbr: "PPC", icon: <Zap className="w-5 h-5" />, desc: "Grid-compliant active/reactive power regulation, ramp-rate control, and voltage support." },
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

      {/* 7. CTA (Dark) */}
      <section className="py-20 bg-slate-950 text-center relative z-20 rounded-t-[40px] -mt-10 border-t border-slate-900">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Optimize Your Maintenance?</h2>
            <p className="text-gray-400 mb-8 text-base">Get complete control of your O&M activities with AEPL CMMS.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-teal-500/20">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
