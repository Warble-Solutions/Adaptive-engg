"use client";

import { useEffect, useState } from "react";
import { Activity, Zap, Battery, ShieldAlert, Cpu, AlertCircle, BarChart3, TrendingUp, DollarSign } from "lucide-react";

// Fluctuating value helper
function useLiveValue(base: number, range: number, interval = 2000) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setVal(base + (Math.random() - 0.5) * range * 2);
    }, interval + Math.random() * 1000);
    return () => clearInterval(id);
  }, [base, range, interval]);
  return val;
}

// ────────────────────────────────────────────────────────
// 1. BessMonitoringDashboard
// ────────────────────────────────────────────────────────
export function BessMonitoringDashboard() {
  const power = useLiveValue(4.8, 0.4);
  const soc = useLiveValue(84.3, 0.2);
  const current = useLiveValue(210.4, 8);
  const voltage = useLiveValue(784.2, 2);
  const temp = useLiveValue(24.2, 0.3);

  return (
    <div className="w-full h-full bg-[#080c14] rounded-2xl border border-white/5 p-4 text-white select-none text-left">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Supervision console</span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono">PACK ID: BESS-04_RACK-A</span>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {[
          { label: "Active Power", val: `${power.toFixed(2)} MW`, sub: "Discharging", icon: <Zap className="w-3 h-3 text-teal-400" /> },
          { label: "State of Charge", val: `${soc.toFixed(1)} %`, sub: "Balanced", icon: <Battery className="w-3 h-3 text-teal-400" /> },
          { label: "Pack Current", val: `${current.toFixed(1)} A`, sub: "Nominal", icon: <Activity className="w-3 h-3 text-teal-400" /> },
          { label: "Coolant Temp", val: `${temp.toFixed(1)} °C`, sub: "Optimal", icon: <Cpu className="w-3 h-3 text-teal-400" /> },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-lg p-2 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 opacity-60">
              {kpi.icon}
              <span className="text-[8px] font-bold uppercase tracking-wider">{kpi.label}</span>
            </div>
            <div className="my-1">
              <span className="text-base font-mono font-black">{kpi.val}</span>
            </div>
            <span className="text-[8px] text-teal-400 font-bold uppercase">{kpi.sub}</span>
          </div>
        ))}
      </div>

      {/* Module and System Logs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Module Temperature Grid */}
        <div className="md:col-span-8 bg-white/[0.01] border border-white/5 rounded-lg p-3">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Module Temperature Array</span>
          <div className="grid grid-cols-6 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => {
              const baseTemp = 23.5 + (i * 0.4);
              const mTemp = useLiveValue(baseTemp, 0.2);
              return (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded p-1 text-center">
                  <span className="text-[7px] text-slate-500 block font-mono">MOD-{i+1}</span>
                  <span className="text-[9px] font-bold font-mono text-teal-400">{mTemp.toFixed(1)}°</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live System Logs */}
        <div className="md:col-span-4 bg-white/[0.01] border border-white/5 rounded-lg p-3 flex flex-col justify-between">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Status Logs</span>
          <div className="space-y-1.5 text-[8px] font-mono text-slate-400">
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <span>RACK INTERLOCK</span>
              <span className="text-teal-400 font-bold">SECURE</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <span>VOLTAGE DELTA</span>
              <span className="text-teal-400 font-bold">2.4 mV</span>
            </div>
            <div className="flex items-center justify-between">
              <span>CONTROLLER</span>
              <span className="text-teal-400 font-bold">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// 2. BessArbitrageDashboard
// ────────────────────────────────────────────────────────
export function BessArbitrageDashboard() {
  const savings = useLiveValue(4824.50, 25);
  const efficiency = useLiveValue(92.4, 0.1);
  const spread = useLiveValue(142.20, 1.5);

  return (
    <div className="w-full h-full bg-[#080c14] rounded-2xl border border-white/5 p-4 text-white select-none text-left">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Arbitrage dispatch profile</span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono">MODE: TOU_ARBITRAGE</span>
      </div>

      {/* SVG Dispatch Curve */}
      <div className="bg-white/[0.01] border border-white/5 rounded-lg p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Charge / Discharge Profile</span>
          <div className="flex gap-3 text-[7px] font-mono">
            <span className="text-teal-400 font-bold">■ CHARGING (SOLAR)</span>
            <span className="text-amber-500 font-bold">■ DISCHARGING (PEAK)</span>
          </div>
        </div>
        {/* Draw a nice SVG grid and line chart */}
        <div className="relative w-full h-24">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />
            
            {/* Shaded Area for Solar Charge */}
            <path d="M 50 50 Q 100 20 150 50 L 150 50 L 50 50 Z" fill="rgba(20, 184, 166, 0.15)" />
            {/* Shaded Area for Evening Discharge */}
            <path d="M 220 50 Q 280 85 340 50 L 340 50 L 220 50 Z" fill="rgba(245, 158, 11, 0.15)" />

            {/* Price Line */}
            <path d="M 0 50 Q 100 20 150 50 T 220 50 Q 280 85 340 50 T 400 50" fill="none" stroke="#0da08a" strokeWidth="2" />
          </svg>
          {/* Overlay tags */}
          <div className="absolute top-2 left-[80px] text-[7px] font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">
            TOU CHARGE
          </div>
          <div className="absolute bottom-2 right-[90px] text-[7px] font-mono text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
            PEAK SHAVE
          </div>
        </div>
      </div>

      {/* Optimization Statistics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider block font-bold">Daily Savings</span>
          <div className="flex items-baseline gap-0.5 mt-1">
            <span className="text-xs text-slate-400"><DollarSign className="w-3 h-3 inline" /></span>
            <span className="text-sm font-bold font-mono text-white">{savings.toFixed(2)}</span>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider block font-bold">Arbitrage Spread</span>
          <div className="flex items-baseline gap-0.5 mt-1">
            <span className="text-xs text-slate-400"><DollarSign className="w-3 h-3 inline" /></span>
            <span className="text-sm font-bold font-mono text-white">{spread.toFixed(1)}</span>
            <span className="text-[7px] text-slate-500 font-mono">/MWh</span>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider block font-bold">RTE Efficiency</span>
          <span className="text-sm font-bold font-mono text-teal-400 block mt-1">{efficiency.toFixed(1)} %</span>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// 3. BessCellBalancingDashboard
// ────────────────────────────────────────────────────────
export function BessCellBalancingDashboard() {
  const delta = useLiveValue(2.1, 0.1);
  const soh = useLiveValue(98.6, 0.1);
  const cells = [
    3.224, 3.225, 3.224, 3.226, 3.224, 3.225,
    3.225, 3.224, 3.225, 3.226, 3.224, 3.225,
    3.224, 3.225, 3.226, 3.225, 3.224, 3.225,
    3.225, 3.226, 3.224, 3.225, 3.224, 3.226
  ];

  return (
    <div className="w-full h-full bg-[#080c14] rounded-2xl border border-white/5 p-4 text-white select-none text-left">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Cell Equalizer Matrix</span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono">Delta V: {delta.toFixed(1)} mV</span>
      </div>

      {/* Grid representation of 24 cells */}
      <div className="grid grid-cols-6 gap-1 mb-4">
        {cells.map((v, i) => {
          // Fluctuate the cell voltage slightly
          const vVal = useLiveValue(v, 0.001);
          // Highlight equalizing on certain cell indexes
          const isBalancing = [3, 9, 14, 19, 23].includes(i);
          return (
            <div key={i} className={`p-1.5 rounded border text-center transition-all duration-300 ${
              isBalancing 
                ? "bg-teal-500/10 border-teal-500/40" 
                : "bg-white/[0.01] border-white/5"
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-slate-500 font-mono">C{String(i+1).padStart(2, '0')}</span>
                {isBalancing && <span className="w-1 h-1 rounded-full bg-teal-400 animate-ping"></span>}
              </div>
              <span className="text-[8px] font-bold font-mono text-white block mt-0.5">{vVal.toFixed(3)} V</span>
            </div>
          );
        })}
      </div>

      {/* Health Metrics & Equalizer Status */}
      <div className="bg-white/[0.01] border border-white/5 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-wider block font-bold">Active Balancer</span>
            <span className="text-[10px] font-bold text-white">Passive shunt equalizing (150mA)</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[8px] text-slate-500 uppercase tracking-wider block font-bold">Health Index (SoH)</span>
          <span className="text-xs font-mono font-black text-teal-400">{soh.toFixed(1)} %</span>
        </div>
      </div>
    </div>
  );
}
