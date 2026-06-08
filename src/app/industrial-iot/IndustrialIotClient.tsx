"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Droplet, Cpu, Activity, CheckCircle, Database, Server, Settings } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";

export default function IndustrialIotClient() {
  const platforms = [
    {
      id: "solarwiz",
      tag: "Renewable Energy Telemetry",
      title: "SolarWiz",
      icon: <Zap className="w-6 h-6 text-[#0da08a]" />,
      desc: "More power to make the most of solar plants. Complete installation of Solar Plant Monitoring Solutions in-line with tailored specifications, delivering fast and reliable project execution.",
      bullets: [
        "17+ Years of extensive industry experience",
        "Edge data acquisition via SolarEdge IoT devices",
        "Advanced SolarPro cloud telemetry analytics"
      ],
      href: "/industrial-iot/solarwiz",
      img: "/imgs/industrial-iot/solar_telemetry_hero.png",
      bgClass: "hover:border-[#0da08a]/40 shadow-sm",
      btnClass: "bg-[#0da08a] hover:bg-[#0bc2a5] shadow-[#0da08a]/20"
    },
    {
      id: "waterwiz",
      tag: "Water Infrastructure SCADA",
      title: "WaterWiz",
      icon: <Droplet className="w-6 h-6 text-[#0da08a]" />,
      desc: "Electrical, Instrumentation, and Automation Solutions for the Water Industry including Drinking Water supply, Wastewater treatment, and Effluent Treatment Plants.",
      bullets: [
        "Intelligent WaterEdge acquisition buffers",
        "WaterPro cloud monitoring & quantity logs",
        "Direct integration with State & National water boards"
      ],
      href: "/industrial-iot/waterwiz",
      img: "/imgs/industrial-iot/water_telemetry_monitoring.png",
      bgClass: "hover:border-[#0da08a]/40 shadow-sm",
      btnClass: "bg-[#0da08a] hover:bg-[#0bc2a5] shadow-[#0da08a]/20"
    },
    {
      id: "machinewiz",
      tag: "Smart Factory Analytics",
      title: "MachineWiz",
      icon: <Cpu className="w-6 h-6 text-[#0da08a]" />,
      desc: "Achieve operational excellence on the shop floor using innovative telemetry backed by years of experience in Machine Learning, Production Monitoring, and Predictive Maintenance.",
      bullets: [
        "Out-of-the-box apps with plug-and-play installation",
        "Turn data into Actionable Shop-Floor OEE",
        "Deep vertical manufacturing driver integration"
      ],
      href: "/industrial-iot/machinewiz",
      img: "/imgs/industrial-iot/factory_floor_telemetry.png",
      bgClass: "hover:border-[#0da08a]/40 shadow-sm",
      btnClass: "bg-[#0da08a] hover:bg-[#0bc2a5] shadow-[#0da08a]/20"
    }
  ];

  const coreBenefits = [
    {
      icon: <Database className="w-6 h-6 text-[#0da08a]" />,
      title: "Centralized Data Aggregation",
      desc: "Process massive time-series datasets from geographically scattered assets in one highly secure cloud environment."
    },
    {
      icon: <Server className="w-6 h-6 text-[#0da08a]" />,
      title: "Edge Compute Resilience",
      desc: "Avoid data gaps during network outages with store-and-forward local databases running on rugged hardware."
    },
    {
      icon: <Settings className="w-6 h-6 text-[#0da08a]" />,
      title: "OEM Independent Drivers",
      desc: "Connect legacy and modern hardware from diverse manufacturers through unified industrial protocol translators."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950/40 text-white">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* 1. HERO (Dark with background image and transparent overlay) */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/imgs/renew.jpg" alt="Industrial Telemetry" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/95"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(13,160,138,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,160,138,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0da08a]/10 rounded-full blur-[140px] pointer-events-none"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full relative text-center">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0da08a]/10 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#0da08a]/20">
              <Activity className="w-4 h-4" />
              <span>Industrial IoT Suite</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading leading-none tracking-tight">
              Industrial <span className="text-[#0da08a]">IoT Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Customized telemetry, central SCADA systems, and machine learning software suites designed to maximize efficiency in solar power, water utilities, and smart manufacturing.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. Grid of platforms (Light) */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {platforms.map((platform, i) => (
              <SectionWrapper key={platform.id} delay={i * 0.1}>
                <div className={`group relative h-full flex flex-col justify-between p-6 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 ${platform.bgClass}`}>
                  <div>
                    {/* Preview Image */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 border border-slate-100 relative">
                      <div className="absolute inset-0 bg-slate-950/10 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <img 
                        src={platform.img} 
                        alt={platform.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                      {platform.tag}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-[#0da08a]/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {platform.icon}
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 font-heading tracking-tight">{platform.title}</h2>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {platform.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {platform.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 font-bold">
                          <CheckCircle className="w-4.5 h-4.5 text-[#0da08a] shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={platform.href} className={`w-full py-4 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${platform.btnClass}`}>
                    Explore {platform.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Depth: Why IoT Suite (Dark - Semi-transparent background for 3D visibility) */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/80 backdrop-blur-sm text-white border-b border-white/5">
        <div className="max-w-6xl mx-auto w-full">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">The AEPL Telemetry Advantage</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Our IoT software solutions are backed by robust electrical engineering history, ensuring seamless sensor integration and industrial compliance.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBenefits.map((benefit, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-[#0da08a]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0da08a]/10 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section (Light) */}
      <section className="py-24 bg-white text-slate-900 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Need a Customized IoT Solution?</h2>
            <p className="text-slate-600 mb-8 text-lg">Partner with Adaptive Engineering for robust, concurrently maintainable automation, telemetry and cloud infrastructure packages.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] hover:bg-[#0bc2a5] text-white rounded-full font-bold transition-all shadow-lg shadow-[#0da08a]/20">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
