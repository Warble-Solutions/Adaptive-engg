"use client";

import React from "react";
import { Activity, Monitor, AlertTriangle, Clock, TrendingUp, Layers, Battery, BarChart3, Shield, Zap, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { BessMonitoringDashboard, BessArbitrageDashboard, BessCellBalancingDashboard } from "./BessDashboardMockups";

interface BulletPoint {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface PillarData {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  imageCaption: string;
  bullets: BulletPoint[];
}

export default function BessFeaturesAlternating() {
  const pillars: PillarData[] = [
    {
      id: "supervision",
      tag: "01 / Supervision & Control",
      title: "Real-Time Monitoring & SCADA Normalization",
      desc: "Gain instant control and visibility over your energy storage assets. Our EMS handles high-frequency data streams to monitor battery health, manage power dispatch, and unify multi-vendor hardware protocols.",
      image: "/images/renewable/bess_monitoring.png",
      imageCaption: "Live Supervision System & Port Telemetry Console",
      bullets: [
        {
          icon: <Activity className="w-5 h-5" />,
          title: "Modbus & OPC UA Protocol Normalization",
          desc: "Instant data ingestion of active/reactive power, SoC, module temperatures, and cell voltages."
        },
        {
          icon: <Monitor className="w-5 h-5" />,
          title: "SCADA & Third-Party Integration",
          desc: "Direct interface with centralized control rooms, local HMIs, or third-party scheduling platforms."
        },
        {
          icon: <AlertTriangle className="w-5 h-5" />,
          title: "Fault Management & Auto-Tripping",
          desc: "Instant alerts and remote safety cutoffs to catch anomalous behaviors before they scale."
        }
      ]
    },
    {
      id: "optimization",
      tag: "02 / Revenue & Dispatch",
      title: "Intelligent Energy Arbitrage & Peak Shaving",
      desc: "Maximize storage asset monetization with intelligent dispatch algorithms. Charge during low-tariff hours and discharge when grid demand peaks.",
      image: "/images/renewable/bess_arbitrage.png",
      imageCaption: "Arbitrage revenue optimization & dispatch profiles",
      bullets: [
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Time-of-Use (ToU) Optimization",
          desc: "Capture arbitrage spreads by automatically scheduling battery cycles based on utility tariff windows."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Active Peak Shaving",
          desc: "Avoid utility demand penalties by auto-discharging battery capacity during peak draw events."
        },
        {
          icon: <Layers className="w-5 h-5" />,
          title: "Flexible Dispatch Strategies",
          desc: "Run solar-following, load-following, or direct grid-command operating modes."
        }
      ]
    },
    {
      id: "safety",
      tag: "03 / Health & Compliance",
      title: "Cell-Level Balancing & Thermal Diagnostics",
      desc: "Ensure battery safety and prolong chemical lifespan. AEPL's state-of-charge tracking balancing system prevents single-cell wear from degrading the pack.",
      image: "/images/renewable/cell_balancing.png",
      imageCaption: "BMS cell matrix telemetry & thermal monitoring status",
      bullets: [
        {
          icon: <Battery className="w-5 h-5" />,
          title: "Module & Cell-Level Balancing",
          desc: "Monitor and equalize cell voltages and SOC distribution to prevent degradation."
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Advanced Battery Analytics",
          desc: "Track round-trip efficiency, state-of-health (SoH) index, and battery wear cycle counts."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Grid Code Compliance",
          desc: "Automated ramp-rate control and active/reactive regulation to comply with national grid requirements."
        }
      ]
    }
  ];

  return (
    <section className="py-32 bg-slate-950 border-t border-b border-slate-900 text-white relative z-20 overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionWrapper>
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">
              Comprehensive BESS Operations
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading">
              Features & Benefits
            </h2>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              Our Energy Management System provides a highly detailed feature set to supervise, automate, and protect utility-scale battery storage installations.
            </p>
          </div>
        </SectionWrapper>

        <div className="space-y-32">
          {pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={pillar.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
              >
                {/* Text Column (5 cols, order depends on index) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <SectionWrapper>
                    <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-full border border-teal-500/20">
                      {pillar.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mt-4 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="space-y-4 pt-4">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                            {bullet.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-white">
                              {bullet.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                              {bullet.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SectionWrapper>
                </div>

                {/* Image Column (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <SectionWrapper delay={0.1}>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 p-4 shadow-2xl shadow-slate-950/50 group">
                      {/* Top console bar mock */}
                      <div className="flex items-center justify-between px-3 pb-3 border-b border-white/5 text-[9px] font-mono text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                          <span>{pillar.imageCaption}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-white/5"></span>
                          <span className="w-2 h-2 rounded-full bg-white/5"></span>
                          <span className="w-2 h-2 rounded-full bg-white/5"></span>
                        </div>
                      </div>

                      {/* Interactive Dashboard Mockup */}
                      <div className="mt-3">
                        {idx === 0 && <BessMonitoringDashboard />}
                        {idx === 1 && <BessArbitrageDashboard />}
                        {idx === 2 && <BessCellBalancingDashboard />}
                      </div>
                    </div>
                  </SectionWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
