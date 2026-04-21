"use client";

import { useState } from "react";
import { Globe, Activity, Database, TrendingDown, BarChart3, Server } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const FEATURES = [
  {
    id: "monitoring",
    icon: <Globe className="w-6 h-6" />,
    title: "Centralized Fleet Monitoring",
    desc: "Monitor all renewable assets across geographies on a single unified dashboard. Instant bird's-eye view with color-coded health indicators mapping across regions.",
    image: "/imgs/pm-kusum/kusum_cms_1776742307616.png"
  },
  {
    id: "realtime",
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Performance",
    desc: "Live dashboards featuring complex bullet graphs, dynamic scatter plots, and ultra-configurable views that render real-time KPIs instantly without lag.",
    image: "/imgs/pm-kusum/kusum_ams_1776742293340.png"
  },
  {
    id: "scada",
    icon: <Database className="w-6 h-6" />,
    title: "SCADA & Protocol Integration",
    desc: "Built-in OPC UA, MQTT, API, and Modbus TCP connectors. Completely OEM independent — flawlessly integrate with virtually any plant SCADA topology.",
    image: "/imgs/pm-kusum/kusum_iot_scada_v2.png"
  },
  {
    id: "loss",
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Loss Bucket Analysis",
    desc: "Granular loss mapping enabling operators to precisely identify root causes—whether grid unavailability, inverter clipping, or soiling—to decrease downtime.",
    image: "/imgs/ppc.jpg"
  },
  {
    id: "predictive",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Predictive Analytics",
    desc: "Sophisticated Machine Learning models establish operational baselines to perform real-time anomaly detection, predicting string failures before they escalate.",
    image: "/imgs/pm-kusum/kusum_main_1776742261100.png"
  },
  {
    id: "reporting",
    icon: <Server className="w-6 h-6" />,
    title: "Automated Enterprise Reporting",
    desc: "Comprehensive automated reporting suites allowing rapid custom parameter selection, scheduling, and multi-format export for C-Suite audits.",
    image: "/imgs/pm-kusum/kusum_reportwiz_1776742405186.png"
  }
];

export default function UnifiedCMSFeatures() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id);

  const activeFeature = FEATURES.find(f => f.id === activeTab) || FEATURES[0];

  return (
    <section className="py-28 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 font-heading mb-6">Deep Intelligence Stack</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore the interactive capabilities natively integrated into AEPL's CMS.</p>
          </div>
        </SectionWrapper>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Navigation Tabs (Left) */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {FEATURES.map((feature, i) => {
              const isActive = activeTab === feature.id;
              return (
                <SectionWrapper key={feature.id} delay={i * 0.05}>
                  <button
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                      isActive 
                        ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]" 
                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-cyan-500 text-slate-900" : "bg-white/10"
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${isActive ? "text-white text-lg" : "text-md"}`}>
                        {feature.title}
                      </h3>
                    </div>
                  </button>
                </SectionWrapper>
              );
            })}
          </div>

          {/* Interactive Display Area (Right) */}
          <div className="lg:w-2/3">
            <SectionWrapper>
              <div className="h-full min-h-[500px] w-full bg-slate-900 rounded-[40px] border border-white/10 p-2 relative overflow-hidden group">
                {/* Background Image transitioning */}
                <div 
                  key={activeFeature.id} /* force re-render for animation */
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 animate-in fade-in zoom-in-105"
                  style={{ backgroundImage: `url(${activeFeature.image})` }}
                ></div>
                
                {/* Deep Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-10 md:p-14 z-10 flex flex-col justify-end">
                  <div key={`${activeFeature.id}-content`} className="animate-in slide-in-from-bottom-8 fade-in duration-700">
                    <div className="w-16 h-16 bg-cyan-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/30">
                      {activeFeature.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">{activeFeature.title}</h3>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">{activeFeature.desc}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
