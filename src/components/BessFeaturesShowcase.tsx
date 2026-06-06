"use client";

import { useState, useEffect } from "react";
import { Activity, Monitor, AlertTriangle, Clock, TrendingUp, Layers, Battery, BarChart3, Shield, Zap, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface TabData {
  id: string;
  label: string;
  summary: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
  caption: string;
  features: Feature[];
}

export default function BessFeaturesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFadeState("opacity-0 translate-y-4");
    setTimeout(() => {
      setActiveTab(index);
      setFadeState("opacity-100 translate-y-0");
    }, 250);
  };

  const tabs: TabData[] = [
    {
      id: "supervision",
      label: "Supervision & SCADA",
      summary: "Real-time telemetry, third-party system interface, and safety cutoffs.",
      icon: <Activity className="w-5 h-5" />,
      image: "/images/renewable/bess_monitoring.png",
      gradient: "from-teal-500/20 to-emerald-500/20 text-teal-400",
      caption: "Real-Time BESS Telemetry & SCADA Interface",
      features: [
        {
          icon: <Activity className="w-5 h-5 text-teal-400" />,
          title: "Data Acquisition & Monitoring",
          desc: "Supervise active power, state of charge, temperatures, and cell voltages instantly with direct Modbus and OPC UA connections."
        },
        {
          icon: <Monitor className="w-5 h-5 text-teal-400" />,
          title: "SCADA & Third-Party Integration",
          desc: "Interface seamlessly with centralized SCADA controls, local HMIs, or third-party power scheduling dashboards."
        },
        {
          icon: <AlertTriangle className="w-5 h-5 text-teal-400" />,
          title: "Fault Management & Diagnostics",
          desc: "Real-time alerts, remote emergency stops, and diagnostic logs to flag cell drift or thermal anomalies before they scale."
        }
      ]
    },
    {
      id: "optimization",
      label: "Optimization & Arbitrage",
      summary: "Arbitrage revenue stacking, peak shaving, and multiple operating dispatch modes.",
      icon: <Clock className="w-5 h-5" />,
      image: "/images/renewable/bess_arbitrage.png",
      gradient: "from-teal-500/20 to-blue-500/20 text-teal-400",
      caption: "Time-of-Use (ToU) Optimization & Arbitrage Metrics",
      features: [
        {
          icon: <Clock className="w-5 h-5 text-teal-400" />,
          title: "Time-of-Use (ToU) Optimization",
          desc: "Shift energy automatically. Charge during low-tariff hours and discharge during peak-rate periods to capture arbitrage revenue."
        },
        {
          icon: <TrendingUp className="w-5 h-5 text-teal-400" />,
          title: "Peak Shaving & Load Shifting",
          desc: "Avoid peak demand tariffs by shaving load spikes. Keep facility consumption under specified utility thresholds."
        },
        {
          icon: <Layers className="w-5 h-5 text-teal-400" />,
          title: "Multiple Operating Modes",
          desc: "Run your BESS under diverse strategies including peak shaving, solar-following, load-following, and frequency support."
        }
      ]
    },
    {
      id: "analytics",
      label: "Health, Safety & Balancing",
      summary: "Cell-level temperature balancers, predictive analytics, and grid safety compliance.",
      icon: <Battery className="w-5 h-5" />,
      image: "/images/renewable/cell_balancing.png",
      gradient: "from-emerald-500/20 to-teal-500/20 text-teal-400",
      caption: "Cell balancing status & module-level diagnostics",
      features: [
        {
          icon: <Battery className="w-5 h-5 text-teal-400" />,
          title: "Cell-Level Monitoring",
          desc: "Supervise internal cell balance, temperature thresholds, and charge ratios to prevent single-cell wear from affecting the pack."
        },
        {
          icon: <BarChart3 className="w-5 h-5 text-teal-400" />,
          title: "Advanced Analytics",
          desc: "Gain deep visibility into system performance with calculations of efficiency, battery health index, and cycle counts."
        },
        {
          icon: <Zap className="w-5 h-5 text-teal-400" />,
          title: "Intelligent Control",
          desc: "State-of-charge tracking algorithms that dynamically manage charge/discharge rates to prioritize cell temperature and health."
        },
        {
          icon: <Shield className="w-5 h-5 text-teal-400" />,
          title: "Grid Code Compliance",
          desc: "Strict adherence to national utility grid limits for active and reactive power limits, voltage ride-through, and ramp controls."
        }
      ]
    }
  ];

  if (!mounted) {
    return (
      <section className="py-24 bg-slate-900 border-t border-slate-800 text-white relative z-20 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">Loading Features & Benefits...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 text-white relative z-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionWrapper>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-4">
              Comprehensive control suite
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Features & Benefits
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our Energy Management System provides a highly detailed feature set to supervise, automate, and protect utility-scale battery storage installations.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Navigation Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <SectionWrapper key={tab.id} delay={idx * 0.05}>
                  <button
                    onClick={() => handleTabChange(idx)}
                    className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 relative group flex items-start gap-4 ${
                      isActive
                        ? "bg-white/5 border-teal-500/40 shadow-lg shadow-teal-500/5"
                        : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Active side indicator */}
                    {isActive && (
                      <div className="absolute top-6 left-0 w-1 h-8 bg-teal-500 rounded-r-md"></div>
                    )}

                    <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-115 ${
                      isActive 
                        ? "bg-teal-500/10 text-teal-400" 
                        : "bg-white/5 text-gray-400"
                    }`}>
                      {tab.icon}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className={`text-base font-extrabold transition-colors ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}>
                        {tab.label}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">
                        {tab.summary}
                      </p>
                      <div className={`flex items-center gap-1.5 text-[11px] font-bold text-teal-400 mt-2 transition-all duration-300 ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}>
                        <span>Viewing Section</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                </SectionWrapper>
              );
            })}
          </div>

          {/* Right Showcase Display (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className={`transition-all duration-300 transform ${fadeState}`}>
              {/* Display Image with Premium SCADA Console styling */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-950 p-3 shadow-2xl group">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 text-gray-500 text-[10px] font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    <span>{tabs[activeTab].caption}</span>
                  </div>
                  <span>STATUS: SECURE</span>
                </div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].label}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Sub-features list for active tab */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {tabs[activeTab].features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-teal-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 transition-transform">
                        {feat.icon}
                      </div>
                      <h4 className="text-sm font-extrabold text-white mb-2 group-hover:text-teal-400 transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
