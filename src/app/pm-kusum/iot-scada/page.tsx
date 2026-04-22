import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Wifi, Monitor, Smartphone, BarChart3, Globe, Shield, Settings, CheckCircle2, Server, Radio, Cloud, Lock, Cpu, Activity, Users } from "lucide-react";
import { KUSUM_STATS } from "@/lib/constants";
import { IoTDevicePreview, SolarProDashboard, NocDashboard } from "@/components/DashboardMockups";

export const metadata = {
  title: "IoT SCADA — SolarWiz | PM-KUSUM | Adaptive Engineering",
  description: "SolarWiz IoT SCADA — SolarEdge hardware & SolarPro software for remote monitoring, performance analytics, and real-time control of PM-KUSUM solar installations.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO —  Terminal/console inspired */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/kusum_iot_scada_v2.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(4,154,137,1) 1px, transparent 1px), linear-gradient(90deg, rgba(4,154,137,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
              <Radio className="w-4 h-4" />
              <span>PM-KUSUM</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 font-heading">
              Solar<span className="text-primary">Wiz</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-400 mb-8">IoT SCADA Platform</p>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive IoT SCADA solution combining SolarEdge hardware and SolarPro software for remote monitoring, performance analytics, and real-time control of PM-KUSUM solar installations.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                { value: `${KUSUM_STATS.yearsExperience.value}+`, label: "Years of Experience" },
                { value: `${KUSUM_STATS.installedBase.value}${KUSUM_STATS.installedBase.suffix}`, label: "Installed Base" },
                { value: `${KUSUM_STATS.ppcSolar.value}${KUSUM_STATS.ppcSolar.suffix}`, label: "PPC Solar" },
                { value: `${KUSUM_STATS.statesOfIndia.value}+`, label: "States of India" },
                { value: `${KUSUM_STATS.satisfiedCustomers.value}+`, label: "Satisfied Customers" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* DUAL PRODUCT: SOLAREDGE + SOLARPRO */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SolarEdge — Hardware */}
            <SectionWrapper delay={0.1}>
              <div className="group relative p-10 bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl border border-teal-100 hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px]"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">Hardware</div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">SolarEdge</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Ruggedized IoT gateway designed for harsh field conditions. Connects to all major inverter brands via Modbus, collects real-time data, and transmits securely to the cloud.
                  </p>
                  <div className="h-48">
                    <IoTDevicePreview />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* SolarPro — Software */}
            <SectionWrapper delay={0.2}>
              <div className="group relative p-10 bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl border border-teal-100 hover:bg-[#0da08a] shadow-2xl hover:bg-[#0da08a] -translate-y-2 transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-[80px]"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Software</div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">SolarPro</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Cloud-based monitoring platform with real-time dashboards, performance analytics, automated reporting, and mobile access. MNRE & DISCOM compliant reporting built-in.
                  </p>
                  <div className="h-48">
                    <SolarProDashboard />
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-28 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">Features & Benefits</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Monitor from Anywhere", desc: "Access real-time plant data from any device — desktop, tablet, or mobile. No VPN required." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Analyse Performance", desc: "PR, CUF, specific yield, inverter efficiency — all KPIs at your fingertips with drill-down analytics." },
              { icon: <Server className="w-6 h-6" />, title: "In-built Reports", desc: "MNRE compliant, DISCOM format, and custom reports. Auto-generated daily, weekly, and monthly." },
              { icon: <Settings className="w-6 h-6" />, title: "Third-party Integration", desc: "Open API for integration with CMS, ERP, billing systems, and other enterprise platforms." },
              { icon: <Users className="w-6 h-6" />, title: "Multi-plant Configuration", desc: "Manage hundreds of distributed PM-KUSUM sites from a single dashboard with role-based access." },
              { icon: <Shield className="w-6 h-6" />, title: "Secure & Reliable", desc: "End-to-end encrypted data transmission. 99.9% uptime SLA with redundant cloud infrastructure." },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:bg-[#0da08a] border-primary/40 hover:bg-[#0da08a] -translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
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

      {/* NETWORK / SOC */}
      <section className="py-24 bg-white relative z-20 rounded-t-[40px] -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Network & Security Operations Center</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our dedicated NOC/SOC monitors all connected sites 24/7. Automated alerts for device offline, communication failures, and performance anomalies ensure zero-downtime monitoring.
                </p>
                <div className="space-y-4">
                  {[
                    "24/7 automated network health monitoring",
                    "Device offline detection & auto-recovery",
                    "Communication failure escalation",
                    "Firmware OTA update management",
                    "SIM & connectivity lifecycle management",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="h-80">
                <NocDashboard />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Deploy SolarWiz?</h2>
            <p className="text-gray-400 mb-8 text-lg">Get a customized SolarWiz solution for your PM-KUSUM solar installations.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
