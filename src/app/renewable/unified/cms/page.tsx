import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Eye, TrendingDown, Zap, Shield, BarChart3, Globe, Activity, Database, Lock, CheckCircle2, Layers, Server, Wifi } from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";
import { CMSHeroDashboards } from "@/components/DashboardMockups";
import UnifiedCMSFeatures from "@/components/UnifiedCMSFeatures";

export const metadata = {
  title: "Central Monitoring System (CMS) | Unified Renewable Solutions | Adaptive Engineering",
  description: "Enterprise-level monitoring and portfolio intelligence for Solar, Wind, and BESS assets with real-time visibility and intelligent analytics.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO — Dashboards left, text right */}
      <section className="section-hero relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1f2d] to-[#0a1628]">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(4,154,137,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="z-10 max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Overlapping Dashboard Cards */}
            <SectionWrapper>
              <div className="hidden lg:block h-[480px]">
                <CMSHeroDashboards />
              </div>
            </SectionWrapper>

            {/* Right — Text */}
            <SectionWrapper delay={0.3}>
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-teal-500/20">
                  <Eye className="w-4 h-4" />
                  <span>Unified Renewable Solution</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-4 font-heading leading-tight">
                  Central Monitoring<br />
                  <span className="gradient-heading">System (CMS)</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed mt-6 mb-4">
                  AEPL&apos;s Centralized Monitoring System provides real-time visibility and intelligent analytics for Solar, Wind, and BESS assets.
                </p>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-8">&quot;Enterprise-Level Monitoring and Portfolio Intelligence&quot;</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS — Split Layout */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <SectionWrapper>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                    <TrendingDown className="w-4 h-4" />
                    <span>Portfolio Optimization</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-6 leading-tight">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Benefits</span></h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">Deploying AEPL's Central Monitoring System unlocks an unparalleled suite of analytics and performance enhancements across your entire grid.</p>
                </SectionWrapper>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Eye className="w-6 h-6" />, title: "Complete Visibility", desc: "Gain total, unimpeded oversight across disparate renewable portfolios instantly.", color: "text-teal-600 bg-teal-50 hover:bg-[#0da08a] border-teal-300 shadow-teal-500/20" },
                { icon: <TrendingDown className="w-6 h-6" />, title: "Reduced Downtime", desc: "Identify underperforming strings or equipment faults seconds after they occur in the field.", color: "text-teal-600 bg-teal-50 hover:bg-[#0da08a] border-teal-300 shadow-teal-500/20" },
                { icon: <Zap className="w-6 h-6" />, title: "Accurate Insights", desc: "Extract meaning from raw SCADA metrics with deeply processed automated energy insights.", color: "text-[#0da08a] bg-teal-50 hover:bg-[#0da08a] border-teal-300 shadow-teal-500/20" },
                { icon: <Shield className="w-6 h-6" />, title: "Scalable Security", desc: "Seamless deployment elasticity built atop SOC-2 compliant encrypted data architectures.", color: "text-teal-600 bg-teal-50 hover:bg-[#0da08a] border-teal-300 shadow-teal-500/20" },
              ].map((item, i) => (
                <SectionWrapper key={i} delay={i * 0.1}>
                  <div className={`p-8 rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 hover:shadow-lg ${item.color}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 ${item.color.split(' ')[0]} ${item.color.split(' ')[1]}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-wide leading-relaxed">{item.desc}</p>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES — Interactive Tabular UI Client Component */}
      <UnifiedCMSFeatures />

      {/* GAIN SUPERIOR CONTROL — Z-Pattern High-End Dark Blocks */}
      <section className="py-24 bg-gradient-to-br from-[#0a0f1a] to-[#0a1628] text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-tight">
                Gain Superior Control with <span className="gradient-heading">AEPL CMS</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Built to handle the immense scale and data complexity of modern renewable enterprise portfolios.</p>
            </div>
          </SectionWrapper>

          <div className="flex flex-col gap-8">
            {[
              {
                title: "Cross-plant Benchmarking",
                desc: "Compare PR, yield, and specific generation metrics natively. Overlay graphs combining wind and solar performance seamlessly. Uncovers localized trends across regions effortlessly.",
                icon: <Layers className="w-8 h-8" />
              },
              {
                title: "Cyber Security & Data Integrity",
                desc: "NIST & CERC mandated architectures featuring hardened perimeter firewalls, segmented VPN tunneling, TLS encryption, and RBAC to protect critical grid infrastructure from cyber threats.",
                icon: <Lock className="w-8 h-8" />
              },
              {
                title: "Future-Ready Elastic Deployment",
                desc: "Cloud-native, containerized architecture that inherently scales whether you are managing 500MW or 50GW. Designed from the ground up for massive, seamless data ingestion.",
                icon: <Server className="w-8 h-8" />
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className={`p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-10 hover:bg-white/10 transition-colors ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="w-24 h-24 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-3xl border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 shadow-[0_0_50px_rgba(6,182,212,0.1)] group-hover:bg-slate-900 hover:text-white hover:scale-105 transition-transform">
                     {item.icon}
                   </div>
                   <div className={`flex-grow ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                     <p className="text-lg text-gray-400 leading-relaxed max-w-3xl lg:max-w-none">{item.desc}</p>
                   </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center relative z-20">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Ready to Centralize Your Monitoring?</h2>
            <p className="text-slate-500 mb-8 text-lg">Get complete visibility of your renewable portfolio with AEPL CMS.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
