"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Sun, Wind, Battery, ThermometerSun, Gauge, Bell, CheckCircle2, AlertTriangle, XCircle, Wifi, TrendingUp, TrendingDown, Wrench, ClipboardList, Clock, Camera, Globe, PieChart, Brain, BarChart3 } from "lucide-react";

// ─────────────────────────────────────────────
// Utility: animated number that fluctuates
// ─────────────────────────────────────────────
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

function MiniBar({ heights, color = "bg-primary" }: { heights: number[]; color?: string }) {
  return (
    <div className="flex items-end gap-[2px] h-10">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`${color} rounded-t-sm w-[6px] transition-all duration-700`}
          style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
        />
      ))}
    </div>
  );
}

function StatusDot({ status }: { status: "online" | "warning" | "offline" }) {
  const colors = { online: "bg-emerald-400", warning: "bg-amber-400", offline: "bg-red-400" };
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === "online" && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[status]} opacity-75`}></span>}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors[status]}`}></span>
    </span>
  );
}

// ─────────────────────────────────────────────
// 1. SCADA Real-Time Monitoring Dashboard
// ─────────────────────────────────────────────
export function ScadaMonitoringDashboard() {
  const power = useLiveValue(47.2, 3);
  const irradiance = useLiveValue(862, 40);
  const frequency = useLiveValue(50.0, 0.1);
  const gridVoltage = useLiveValue(33.2, 0.5);
  const [bars, setBars] = useState([65, 78, 82, 70, 88, 75, 90, 68, 85, 72, 80, 76]);

  useEffect(() => {
    const id = setInterval(() => {
      setBars(prev => [...prev.slice(1), 50 + Math.random() * 50]);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Live</span>
          <span className="text-xs text-slate-500">• Plant SCADA Overview</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">{new Date().toLocaleDateString()}</span>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Active Power", value: power.toFixed(1), unit: "MW", icon: <Zap className="w-3 h-3" />, color: "text-emerald-400" },
          { label: "Irradiance", value: Math.round(irradiance).toString(), unit: "W/m²", icon: <Sun className="w-3 h-3" />, color: "text-amber-400" },
          { label: "Grid Freq", value: frequency.toFixed(2), unit: "Hz", icon: <Activity className="w-3 h-3" />, color: "text-cyan-400" },
          { label: "Grid Voltage", value: gridVoltage.toFixed(1), unit: "kV", icon: <Gauge className="w-3 h-3" />, color: "text-purple-400" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/5 hover:border-white/15 transition-colors group cursor-default">
            <div className="flex items-center gap-1 mb-1">
              <span className={kpi.color}>{kpi.icon}</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{kpi.label}</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className={`text-lg font-black font-mono ${kpi.color} transition-all`}>{kpi.value}</span>
              <span className="text-[9px] text-slate-500">{kpi.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Inverter Grid */}
      <div className="grid grid-cols-3 gap-2">
        {/* Mini Power Curve */}
        <div className="col-span-2 bg-white/5 rounded-lg p-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Power Output (MW)</span>
            <span className="text-[9px] text-emerald-400 font-mono">{power.toFixed(1)} MW</span>
          </div>
          <div className="flex items-end gap-[3px] h-16">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary/80 to-emerald-400/60 rounded-t-sm transition-all duration-700"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Inverter Status Grid */}
        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Inverters</span>
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-full aspect-square rounded-sm ${i === 7 ? 'bg-amber-500/60' : i === 12 ? 'bg-red-500/50' : 'bg-emerald-500/50'} hover:brightness-125 transition-all cursor-pointer`}
                title={`INV-${(i + 1).toString().padStart(2, '0')}: ${i === 7 ? 'Warning' : i === 12 ? 'Offline' : 'Running'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500/50 rounded-sm"></div><span className="text-[8px] text-slate-500">OK</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-amber-500/60 rounded-sm"></div><span className="text-[8px] text-slate-500">Warn</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500/50 rounded-sm"></div><span className="text-[8px] text-slate-500">Off</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 2. Plant Overview Dashboard
// ─────────────────────────────────────────────
export function PlantOverviewDashboard() {
  const pr = useLiveValue(78.4, 2);
  const cuf = useLiveValue(22.1, 1);
  const gen = useLiveValue(112.5, 8);

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-bold text-slate-300">Plant Overview — Rajasthan 50MW</span>
        <StatusDot status="online" />
      </div>

      {/* Gauge-like KPIs */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {[
          { label: "PR", value: pr.toFixed(1), unit: "%", bar: pr, color: "bg-emerald-500" },
          { label: "CUF", value: cuf.toFixed(1), unit: "%", bar: cuf * 4, color: "bg-cyan-500" },
          { label: "Today Gen", value: gen.toFixed(0), unit: "MWh", bar: gen / 1.5, color: "bg-amber-500" },
        ].map((g, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{g.label}</span>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-xl font-black font-mono text-white">{g.value}</span>
              <span className="text-[9px] text-slate-500">{g.unit}</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full ${g.color} rounded-full transition-all duration-1000`} style={{ width: `${Math.min(g.bar, 100)}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Block Status */}
      <div className="bg-white/5 rounded-lg p-3 border border-white/5">
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Block Status</span>
        <div className="space-y-1.5">
          {[
            { name: "Block A — 12.5MW", status: "online" as const, power: "12.3 MW" },
            { name: "Block B — 12.5MW", status: "online" as const, power: "11.8 MW" },
            { name: "Block C — 12.5MW", status: "warning" as const, power: "10.2 MW" },
            { name: "Block D — 12.5MW", status: "online" as const, power: "12.1 MW" },
          ].map((block, i) => (
            <div key={i} className="flex items-center justify-between px-2 py-1.5 bg-white/[0.02] rounded hover:bg-white/5 transition-colors cursor-default">
              <div className="flex items-center gap-2">
                <StatusDot status={block.status} />
                <span className="text-[10px] font-medium text-slate-300">{block.name}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{block.power}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. Alarm Console Dashboard
// ─────────────────────────────────────────────
export function AlarmConsoleDashboard() {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink(p => !p), 800);
    return () => clearInterval(id);
  }, []);

  const alarms = [
    { time: "14:32:08", device: "INV-07", msg: "DC String 3 — Low Current", severity: "warning" as const },
    { time: "14:28:41", device: "WMS-01", msg: "Anemometer Communication Loss", severity: "critical" as const },
    { time: "14:15:22", device: "INV-12", msg: "Grid Frequency Out of Range", severity: "critical" as const },
    { time: "13:58:09", device: "TRF-02", msg: "Oil Temperature High", severity: "warning" as const },
    { time: "13:45:33", device: "INV-03", msg: "MPPT Tracking Deviation >5%", severity: "info" as const },
    { time: "13:30:17", device: "MET-01", msg: "Irradiance Sensor Drift", severity: "info" as const },
  ];

  const severityColors = {
    critical: { bg: "bg-red-500/10", text: "text-red-400", icon: <XCircle className="w-3 h-3" /> },
    warning: { bg: "bg-amber-500/10", text: "text-amber-400", icon: <AlertTriangle className="w-3 h-3" /> },
    info: { bg: "bg-blue-500/10", text: "text-blue-400", icon: <Bell className="w-3 h-3" /> },
  };

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Bell className={`w-4 h-4 ${blink ? 'text-red-400' : 'text-red-400/30'} transition-colors`} />
          <span className="text-xs font-bold text-slate-300">Active Alarms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-[9px] font-bold">2 Critical</span>
          <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-[9px] font-bold">2 Warning</span>
        </div>
      </div>

      <div className="space-y-1">
        {alarms.map((alarm, i) => {
          const s = severityColors[alarm.severity];
          return (
            <div key={i} className={`flex items-center gap-3 px-3 py-2 ${s.bg} rounded-lg hover:brightness-125 transition-colors cursor-pointer group`}>
              <span className={s.text}>{s.icon}</span>
              <span className="text-[10px] font-mono text-slate-500 w-14 shrink-0">{alarm.time}</span>
              <span className="text-[10px] font-bold text-slate-400 w-12 shrink-0">{alarm.device}</span>
              <span className={`text-[10px] ${s.text} flex-grow truncate`}>{alarm.msg}</span>
              <span className="text-[9px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">ACK →</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 4. Analytics Dashboard (for Analytics page)
// ─────────────────────────────────────────────
export function AnalyticsDashboard() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const prData = [74, 76, 78, 80, 82, 77, 72, 68, 79, 81, 80, 76];
  const genData = [85, 88, 92, 95, 98, 90, 82, 75, 91, 94, 93, 88];

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none">
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-xs font-bold text-slate-300">Performance Analytics — YTD</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1"><div className="w-2 h-2 bg-primary rounded-sm"></div><span className="text-[9px] text-slate-500">PR %</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-sm"></div><span className="text-[9px] text-slate-500">Gen MWh</span></div>
        </div>
      </div>

      {/* Dual bar chart */}
      <div className="flex items-end gap-[4px] h-36 px-1 mb-2">
        {months.map((m, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-[2px] cursor-pointer group"
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            {/* Tooltip */}
            {hoveredBar === i && (
              <div className="absolute -mt-14 bg-slate-800 border border-slate-600 rounded-lg px-2 py-1 z-10 pointer-events-none">
                <div className="text-[9px] text-primary font-bold">PR: {prData[i]}%</div>
                <div className="text-[9px] text-purple-400 font-bold">Gen: {genData[i]}k</div>
              </div>
            )}
            <div className="w-full flex gap-[1px] items-end h-28">
              <div
                className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-sm transition-all duration-300 group-hover:brightness-125"
                style={{ height: `${prData[i]}%` }}
              />
              <div
                className="flex-1 bg-gradient-to-t from-purple-600/80 to-purple-400/40 rounded-t-sm transition-all duration-300 group-hover:brightness-125"
                style={{ height: `${genData[i]}%` }}
              />
            </div>
            <span className="text-[8px] text-slate-600 mt-1">{m}</span>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-4 gap-2 mt-2">
        {[
          { label: "Avg PR", value: "77.8%", trend: "+2.1%", up: true },
          { label: "Total Gen", value: "1,061 MWh", trend: "+5.3%", up: true },
          { label: "Soiling Loss", value: "2.4%", trend: "-0.8%", up: false },
          { label: "Availability", value: "99.2%", trend: "+0.1%", up: true },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-lg px-2 py-2 border border-white/5">
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</span>
            <div className="text-sm font-black font-mono text-white mt-0.5">{s.value}</div>
            <div className={`flex items-center gap-0.5 mt-0.5 ${s.up ? 'text-emerald-400' : 'text-red-400'}`}>
              {s.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
              <span className="text-[8px] font-bold">{s.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 5. SolarPro Software Dashboard
// ─────────────────────────────────────────────
export function SolarProDashboard() {
  const gen = useLiveValue(4.82, 0.3, 3000);
  const pr = useLiveValue(76.3, 1.5, 3500);

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl p-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <Sun className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-900 block leading-tight">SolarPro</span>
            <span className="text-[8px] text-slate-400">KUSUM Site — 7.5kW</span>
          </div>
        </div>
        <StatusDot status="online" />
      </div>

      {/* Mini KPIs */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-100">
          <span className="text-[8px] text-emerald-600 font-bold uppercase tracking-wider">Today Gen</span>
          <div className="text-lg font-black text-emerald-700 font-mono">{gen.toFixed(1)} <span className="text-xs font-normal">kWh</span></div>
        </div>
        <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-100">
          <span className="text-[8px] text-blue-600 font-bold uppercase tracking-wider">PR</span>
          <div className="text-lg font-black text-blue-700 font-mono">{pr.toFixed(1)}<span className="text-xs font-normal">%</span></div>
        </div>
      </div>

      {/* Hourly gen bars */}
      <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
        <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Hourly Generation</span>
        <div className="flex items-end gap-[3px] h-12">
          {[0, 0, 5, 18, 35, 52, 68, 78, 85, 82, 75, 60, 42, 25, 12, 3, 0, 0].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary to-emerald-300 rounded-t-sm transition-all hover:brightness-110"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[7px] text-slate-400">6AM</span>
          <span className="text-[7px] text-slate-400">12PM</span>
          <span className="text-[7px] text-slate-400">6PM</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 6. NOC / SOC Dashboard
// ─────────────────────────────────────────────
export function NocDashboard() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  const sites = [
    { name: "Rajasthan-01", kw: "7.5", status: "online" as const },
    { name: "Gujarat-14", kw: "10.0", status: "online" as const },
    { name: "MP-08", kw: "5.0", status: "warning" as const },
    { name: "Maharashtra-22", kw: "7.5", status: "online" as const },
    { name: "UP-03", kw: "3.0", status: "offline" as const },
    { name: "Karnataka-11", kw: "7.5", status: "online" as const },
    { name: "TN-07", kw: "10.0", status: "online" as const },
    { name: "AP-19", kw: "5.0", status: "online" as const },
  ];

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-slate-300">NOC — Network Operations Center</span>
        </div>
        <span className="text-[10px] text-cyan-400 font-mono">{time}</span>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-emerald-500/10 rounded-lg p-2 text-center border border-emerald-500/20">
          <div className="text-lg font-black text-emerald-400">6</div>
          <span className="text-[8px] text-emerald-400/70 font-bold uppercase">Online</span>
        </div>
        <div className="bg-amber-500/10 rounded-lg p-2 text-center border border-amber-500/20">
          <div className="text-lg font-black text-amber-400">1</div>
          <span className="text-[8px] text-amber-400/70 font-bold uppercase">Warning</span>
        </div>
        <div className="bg-red-500/10 rounded-lg p-2 text-center border border-red-500/20">
          <div className="text-lg font-black text-red-400">1</div>
          <span className="text-[8px] text-red-400/70 font-bold uppercase">Offline</span>
        </div>
      </div>

      {/* Site List */}
      <div className="space-y-1">
        {sites.map((site, i) => (
          <div key={i} className="flex items-center justify-between px-2.5 py-1.5 bg-white/[0.02] rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2">
              <StatusDot status={site.status} />
              <span className="text-[10px] font-medium text-slate-300 group-hover:text-white transition-colors">{site.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-slate-500 font-mono">{site.kw} kW</span>
              <span className="text-[9px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 7. IoT Hardware Device Preview
// ─────────────────────────────────────────────
export function IoTDevicePreview() {
  const [leds, setLeds] = useState([true, true, false, true]);
  useEffect(() => {
    const id = setInterval(() => {
      setLeds(prev => prev.map((_, i) => i === 2 ? Math.random() > 0.5 : true));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl flex items-center justify-center p-6">
      {/* Device mockup */}
      <div className="relative w-48 h-32 bg-slate-800 rounded-xl border-2 border-slate-600 shadow-2xl p-4">
        {/* Label */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-0.5 rounded-full">
          <span className="text-[8px] font-black text-white tracking-wider">SOLAREDGE</span>
        </div>
        {/* LED indicators */}
        <div className="flex items-center gap-2 mb-3">
          {["PWR", "NET", "ERR", "DATA"].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-2 h-2 rounded-full ${leds[i] ? (i === 2 ? 'bg-red-400 animate-pulse' : 'bg-emerald-400') : 'bg-slate-600'} transition-colors`} />
              <span className="text-[6px] text-slate-500 font-bold">{label}</span>
            </div>
          ))}
        </div>
        {/* Ports */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-6 h-3 bg-slate-700 rounded-sm border border-slate-500"></div>
            <span className="text-[6px] text-slate-500">RS485</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-3 bg-slate-700 rounded-sm border border-slate-500"></div>
            <span className="text-[6px] text-slate-500">ETH</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 bg-slate-700 rounded-sm border border-slate-500"></div>
            <span className="text-[6px] text-slate-500">SIM</span>
          </div>
        </div>
        {/* Antenna */}
        <div className="absolute -top-6 right-3 w-1 h-6 bg-slate-500 rounded-full"></div>
        <div className="absolute -top-8 right-2 w-3 h-3 border-2 border-slate-500 rounded-full"></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 8. ACDB Panel Product Visual
// ─────────────────────────────────────────────
export function ACDBPanelVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-emerald-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl flex items-center justify-center p-6">
      {/* Panel Box Mockup */}
      <div className="relative">
        <div className="w-52 h-64 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg border-2 border-slate-500 shadow-2xl relative overflow-hidden">
          {/* Door line */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-slate-500/50 rounded-md"></div>
          {/* Handle */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-10 bg-slate-600 rounded-full shadow-inner"></div>
          {/* IP65 badge */}
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded px-2 py-1">
            <span className="text-[8px] font-black text-white">IP65</span>
          </div>
          {/* Cable entries at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 pb-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-4 h-4 bg-slate-600 rounded-full border-2 border-slate-500"></div>
            ))}
          </div>
          {/* Label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded px-3 py-1 text-center">
            <span className="text-[7px] font-bold text-slate-700 block">AEPL ACDB</span>
            <span className="text-[6px] text-slate-500">800V / 100A</span>
          </div>
        </div>
        {/* Mounting bracket */}
        <div className="absolute -left-2 top-1/4 w-2 h-8 bg-slate-500 rounded-l"></div>
        <div className="absolute -right-2 top-1/4 w-2 h-8 bg-slate-500 rounded-r"></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 9. CMMS Work Order Dashboard
// ─────────────────────────────────────────────
export function CMMSDashboard() {
  const [activeTab, setActiveTab] = useState<"open" | "progress" | "done">("open");
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setElapsed(p => p + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const workOrders: Record<string, { id: string; title: string; site: string; priority: "critical" | "high" | "medium"; assignee: string; sla: string }[]> = {
    open: [
      { id: "WO-1847", title: "INV-07 DC String Fault", site: "Rajasthan-01", priority: "critical", assignee: "VK", sla: "2h 14m" },
      { id: "WO-1848", title: "Panel Cleaning — Block C", site: "Gujarat-14", priority: "medium", assignee: "SP", sla: "8h 00m" },
    ],
    progress: [
      { id: "WO-1845", title: "Tracker Motor Replacement", site: "MP-08", priority: "high", assignee: "RM", sla: "1h 32m" },
      { id: "WO-1846", title: "WMS Sensor Calibration", site: "Karnataka-11", priority: "medium", assignee: "AK", sla: "4h 15m" },
    ],
    done: [
      { id: "WO-1843", title: "Transformer Oil Test", site: "TN-07", priority: "medium", assignee: "SP", sla: "Completed" },
      { id: "WO-1844", title: "CB Trip Investigation", site: "AP-19", priority: "high", assignee: "VK", sla: "Completed" },
    ],
  };

  const priorityColors = { critical: "bg-red-500", high: "bg-amber-500", medium: "bg-blue-500" };
  const tabs = [
    { key: "open" as const, label: "Open", count: 2, color: "text-red-400" },
    { key: "progress" as const, label: "In Progress", count: 2, color: "text-amber-400" },
    { key: "done" as const, label: "Completed", count: 2, color: "text-emerald-400" },
  ];

  return (
    <div className="w-full h-full bg-[#0c1220] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl p-4 text-white select-none flex flex-col">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-3 px-1 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-amber-500/20 rounded-lg flex items-center justify-center">
            <Wrench className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block leading-tight">CMMS Dashboard</span>
            <span className="text-[8px] text-slate-500">Work Order Management</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1 border border-white/5">
          <Clock className="w-3 h-3 text-amber-400" />
          <span className="text-[9px] font-mono text-amber-400">{Math.floor(elapsed / 60).toString().padStart(2, '0')}:{(elapsed % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-4 gap-2 mb-3 shrink-0">
        {[
          { label: "Today's WO", value: "12", color: "text-white" },
          { label: "Open", value: "2", color: "text-red-400" },
          { label: "In Progress", value: "2", color: "text-amber-400" },
          { label: "Closed", value: "8", color: "text-emerald-400" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
            <div className={`text-base font-black font-mono ${s.color}`}>{s.value}</div>
            <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 mb-3 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
              activeTab === tab.key
                ? 'bg-white/10 text-white border border-white/10'
                : 'bg-transparent text-slate-500 hover:text-slate-300 border border-transparent'
            }`}
          >
            {tab.label} <span className={tab.color}>({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Work order list */}
      <div className="flex-grow space-y-1.5 overflow-hidden">
        {workOrders[activeTab].map((wo, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 bg-white/[0.03] rounded-xl border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all cursor-pointer group">
            <div className={`w-1.5 h-8 ${priorityColors[wo.priority]} rounded-full shrink-0`}></div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] font-mono text-slate-500">{wo.id}</span>
                <span className="text-[10px] font-bold text-white truncate">{wo.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[8px] text-slate-500">{wo.site}</span>
                <span className="text-[8px] text-slate-600">•</span>
                <span className="text-[8px] text-slate-500">@{wo.assignee}</span>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span className={`text-[9px] font-mono ${wo.sla === 'Completed' ? 'text-emerald-400' : 'text-amber-400'}`}>{wo.sla}</span>
              <span className="text-[8px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity block">View →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 10. SCADA Hero — HMI Plant Schematic Dashboard
// ─────────────────────────────────────────────
export function ScadaHeroDashboard() {
  const totalPower = useLiveValue(47.8, 2.5);
  const gridExport = useLiveValue(46.2, 2);
  const plantLoss = useLiveValue(1.6, 0.3);
  const pr = useLiveValue(78.4, 1.5);
  const [flowDots, setFlowDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFlowDots(p => (p + 1) % 4), 400);
    return () => clearInterval(id);
  }, []);

  const flowAnim = "•".repeat(flowDots) + " ".repeat(3 - flowDots);

  return (
    <div className="w-full h-full bg-[#080e1a] rounded-2xl border border-emerald-500/20 overflow-hidden shadow-[0_0_60px_rgba(4,154,137,0.1)] p-5 text-white select-none flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Plant HMI</span>
          <span className="text-[10px] text-slate-600">|</span>
          <span className="text-[10px] text-slate-500 font-mono">Rajasthan 50MW Solar</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[8px] font-bold border border-emerald-500/20">GRID: SYNC</span>
        </div>
      </div>

      {/* Schematic — Solar → Inverters → Transformer → Grid */}
      <div className="flex-grow flex flex-col">
        {/* Flow diagram */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* Solar Array */}
          <div className="flex-1 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 text-center">
            <Sun className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xs font-black text-amber-400 font-mono">{totalPower.toFixed(1)}</div>
            <div className="text-[7px] text-amber-400/60 font-bold uppercase">MW DC</div>
          </div>

          {/* Flow arrow */}
          <div className="text-emerald-500/40 text-xs font-mono tracking-widest shrink-0">{flowAnim}→</div>

          {/* Inverters */}
          <div className="flex-1 bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-3 text-center">
            <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs font-black text-cyan-400 font-mono">{(totalPower * 0.97).toFixed(1)}</div>
            <div className="text-[7px] text-cyan-400/60 font-bold uppercase">MW AC</div>
          </div>

          {/* Flow arrow */}
          <div className="text-emerald-500/40 text-xs font-mono tracking-widest shrink-0">{flowAnim}→</div>

          {/* Transformer */}
          <div className="flex-1 bg-purple-500/5 border border-purple-500/20 rounded-xl p-3 text-center">
            <Activity className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-xs font-black text-purple-400 font-mono">33kV</div>
            <div className="text-[7px] text-purple-400/60 font-bold uppercase">Step-up</div>
          </div>

          {/* Flow arrow */}
          <div className="text-emerald-500/40 text-xs font-mono tracking-widest shrink-0">{flowAnim}→</div>

          {/* Grid */}
          <div className="flex-1 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3 text-center">
            <Gauge className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <div className="text-xs font-black text-emerald-400 font-mono">{gridExport.toFixed(1)}</div>
            <div className="text-[7px] text-emerald-400/60 font-bold uppercase">MW Grid</div>
          </div>
        </div>

        {/* Bottom KPI strip */}
        <div className="grid grid-cols-5 gap-2 mb-3">
          {[
            { label: "PR", value: pr.toFixed(1) + "%", color: "text-emerald-400" },
            { label: "CUF", value: "22.1%", color: "text-cyan-400" },
            { label: "Today", value: "112 MWh", color: "text-amber-400" },
            { label: "Loss", value: plantLoss.toFixed(1) + " MW", color: "text-red-400" },
            { label: "Uptime", value: "99.4%", color: "text-purple-400" },
          ].map((kpi, i) => (
            <div key={i} className="bg-white/[0.02] rounded-lg p-2 text-center border border-white/[0.04]">
              <div className={`text-sm font-black font-mono ${kpi.color}`}>{kpi.value}</div>
              <div className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* String-level heatmap */}
        <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04] flex-grow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">String Performance Heatmap</span>
            <span className="text-[8px] text-emerald-400 font-mono">48 strings monitored</span>
          </div>
          <div className="grid grid-cols-12 gap-[3px]">
            {Array.from({ length: 48 }).map((_, i) => {
              const perf = i === 15 || i === 31 ? 30 : i === 22 ? 55 : 70 + Math.random() * 30;
              const color = perf > 85 ? 'bg-emerald-500' : perf > 65 ? 'bg-emerald-500/60' : perf > 50 ? 'bg-amber-500/70' : 'bg-red-500/70';
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-sm ${color} hover:brightness-150 transition-all cursor-pointer`}
                  title={`String ${i + 1}: ${perf.toFixed(0)}%`}
                  style={{ opacity: 0.5 + perf / 200 }}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm"></div><span className="text-[7px] text-slate-500">&gt;85%</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500/60 rounded-sm"></div><span className="text-[7px] text-slate-500">65-85%</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-amber-500/70 rounded-sm"></div><span className="text-[7px] text-slate-500">50-65%</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500/70 rounded-sm"></div><span className="text-[7px] text-slate-500">&lt;50%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 11. CMS Hero — Overlapping Dashboard Cards
// ─────────────────────────────────────────────
export function CMSHeroDashboards() {
  const gen = useLiveValue(342, 15);
  const pr = useLiveValue(78.4, 2);
  const sites = useLiveValue(127, 0);

  return (
    <div className="relative w-full h-[500px] select-none flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Card 1 (Back Left) — Fleet Map */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-4 left-0 w-[240px] z-[1] -rotate-6"
      >
        <div className="w-full bg-[#0a1628]/60 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Fleet Status</span>
            </div>
            {/* Dot map abstraction */}
            <div className="relative h-20 bg-white/5 rounded-lg border border-white/10 overflow-hidden mb-3">
              {[
                { x: 20, y: 30 }, { x: 45, y: 55 }, { x: 70, y: 20 },
                { x: 30, y: 70 }, { x: 80, y: 50 }, { x: 60, y: 65 },
              ].map((dot, i) => (
                <div key={i} className="absolute" style={{ left: `${dot.x}%`, top: `${dot.y}%` }}>
                  <div className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-cyan-400' : 'bg-emerald-400'}`}>
                    {i < 2 && <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-60 scale-150"></div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center"><span className="text-[9px] text-slate-400">Total Sites</span><span className="text-[10px] text-white font-mono">{Math.round(sites)}</span></div>
              <div className="flex justify-between items-center"><span className="text-[9px] text-slate-400">Online Rate</span><span className="text-[10px] text-emerald-400 font-mono">98.5%</span></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 (Bottom Right) — Active Alerts */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-0 w-[260px] z-[2] rotate-3"
      >
        <div className="w-full bg-[#0a1628]/70 backdrop-blur-xl rounded-2xl border border-rose-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-rose-400" />
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Critical Alerts</span>
              </div>
              <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-400 rounded text-[9px] font-bold border border-rose-500/30 animate-pulse">2 NEW</span>
            </div>
            <div className="space-y-2">
              {[
                { time: "2m ago", site: "RJ-Sol-1", issue: "Inverter Comm Loss", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                { time: "18m ago", site: "MH-Wind-4", issue: "Turbine Pitch Fault", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                { time: "1h ago", site: "TN-BESS-2", issue: "Temp High Warning", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
              ].map((alert, i) => (
                <div key={i} className={`flex flex-col gap-1 px-3 py-2 ${alert.bg} border ${alert.border} rounded-xl`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-white max-w-[60%] truncate">{alert.site}</span>
                    <span className="text-[8px] text-slate-400 font-mono">{alert.time}</span>
                  </div>
                  <span className={`text-[9.5px] ${alert.color}`}>{alert.issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 (Center Front) — Main KPI Dashboard */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-[3]"
      >
        <div className="w-full bg-[#0a1628]/80 backdrop-blur-2xl rounded-3xl border border-primary/40 shadow-[0_16px_60px_rgba(4,154,137,0.25)] p-5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-xs font-black text-white tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">Live Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[9px] font-mono text-primary font-bold">SYNCED</span>
              </div>
            </div>

            {/* Main KPI */}
            <div className="mb-6">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Generation Output</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white font-mono tabular-nums">{gen.toFixed(1)}</span>
                <span className="text-sm font-bold text-primary">MWh</span>
              </div>
            </div>

            {/* Performance Strip */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 p-2 opacity-10"><Zap className="w-8 h-8 text-white" /></div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Portfolio PR</div>
                <div className="text-xl font-bold text-white font-mono">{pr.toFixed(1)}<span className="text-xs text-slate-500 ml-1">%</span></div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-3 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 p-2 opacity-10"><TrendingUp className="w-8 h-8 text-primary" /></div>
                <div className="text-[10px] text-primary/80 font-bold uppercase tracking-wider mb-1">vs Yesterday</div>
                <div className="text-xl font-bold text-primary font-mono">+4.2<span className="text-xs text-primary/60 ml-1">%</span></div>
              </div>
            </div>

            {/* Capacity breakdown */}
            <div className="space-y-3">
              {[
                { label: "Solar Asset Yield", val: "88%", color: "bg-amber-400", hex: "text-amber-400" },
                { label: "Wind Asset Yield", val: "92%", color: "bg-cyan-400", hex: "text-cyan-400" },
              ].map((asset, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 text-[10px] font-bold font-mono ${asset.hex} text-right`}>{asset.val}</div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${asset.color} rounded-full`} style={{ width: asset.val }}></div>
                  </div>
                  <div className="w-24 text-[8px] text-slate-400 uppercase tracking-wider font-bold truncate">{asset.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 12. Analytics Hero — Overlapping Dashboard Cards
// ─────────────────────────────────────────────
export function AnalyticsHeroDashboards() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full h-[500px] select-none flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Card 1 (Back Left) — Loss Bucket Analysis */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-4 left-0 w-[240px] z-[1] -rotate-6"
      >
        <div className="w-full bg-[#120a1f]/60 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <PieChart className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Loss Buckets</span>
            </div>
            {/* Waterfall chart abstraction */}
            <div className="space-y-1.5 mb-3">
              {[
                { label: "Theoretical Yield", val: 100, color: "bg-purple-500" },
                { label: "Soiling Loss", val: -4, color: "bg-rose-400" },
                { label: "Grid Curtailment", val: -2, color: "bg-rose-400" },
                { label: "Eqp. Downtime", val: -1.5, color: "bg-rose-400" },
                { label: "Actual Yield", val: 92.5, color: "bg-emerald-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-[55px] text-[8px] text-slate-400 font-bold tracking-wider truncate">{item.label}</div>
                  <div className="flex-1 h-3 rounded-sm bg-white/5 overflow-hidden flex" style={{ justifyContent: item.val < 0 ? 'flex-end' : 'flex-start' }}>
                    <div 
                      className={`h-full ${item.color} rounded-sm`} 
                      style={{ 
                        width: `${Math.abs(item.val)}%`, 
                        opacity: i === 0 || i === 4 ? 0.8 : 0.6 
                      }}
                    ></div>
                  </div>
                  <div className="w-8 text-[8px] font-mono font-bold text-right text-slate-300">
                    {item.val > 0 && i !== 0 ? '+' : ''}{item.val}{i !== 0 ? '%' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 (Bottom Right) — AI Predictions */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-0 w-[260px] z-[2] rotate-3"
      >
        <div className="w-full bg-[#120a1f]/70 backdrop-blur-xl rounded-2xl border border-pink-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-pink-400" />
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">AI Forecasting</span>
              </div>
              <span className="px-1.5 py-0.5 bg-pink-500/20 text-pink-400 rounded text-[9px] font-bold border border-pink-500/30">98.2% ACC</span>
            </div>
            
            {/* Line chart abstraction */}
            <div className="relative h-20 w-full mb-2">
              <div className="absolute inset-x-0 bottom-0 top-0 border-b border-l border-white/10"></div>
              {/* Actual line */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M0,60 Q20,50 40,30 T80,40 T120,20 T160,30 T200,10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M0,55 Q20,40 40,45 T80,20 T120,35 T160,15 T200,5" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                {/* Area fill */}
                <path d="M0,80 L0,55 Q20,40 40,45 T80,20 T120,35 T160,15 T200,5 L200,80 Z" fill="url(#pink-gradient)" />
                <defs>
                  <linearGradient id="pink-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(236,72,153,0.3)" />
                    <stop offset="100%" stopColor="rgba(236,72,153,0)" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Highlight point */}
              <div className="absolute top-[5px] right-0 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]"></div>
            </div>
            <div className="flex justify-between items-center text-[8px] text-slate-400 font-mono">
              <span>Nov 12</span>
              <span>Nov 14</span>
              <span className="text-pink-400">Next 48h</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 (Center Front) — Advanced Analytics Dashboard */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-[3]"
      >
        <div className="w-full bg-[#120a1f]/80 backdrop-blur-2xl rounded-3xl border border-purple-500/40 shadow-[0_16px_60px_rgba(168,85,247,0.25)] p-5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-black text-white tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Intelligent Analytics</span>
              </div>
              <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                {['Day', 'Month', 'Year'].map((t, i) => (
                  <div key={t} className={`px-2 py-0.5 text-[8px] font-bold rounded cursor-pointer ${i === 1 ? 'bg-purple-500/40 text-white' : 'text-slate-400 hover:text-white'}`}>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-3 relative overflow-hidden">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Portfolio CUF</div>
                <div className="text-2xl font-bold text-white font-mono gap-1 flex items-baseline">
                  24.8<span className="text-xs text-slate-500">%</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-emerald-400">
                  <TrendingUp className="w-3 h-3" /> +1.2% YoY
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-3 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
                <div className="text-[10px] text-purple-300 font-bold uppercase tracking-wider mb-1">Detected Anomalies</div>
                <div className="text-2xl font-bold text-white font-mono">
                  3
                </div>
                <div className="mt-1 text-[8px] text-purple-400 font-bold uppercase tracking-wider underline cursor-pointer">
                  View Root Cause Analysis
                </div>
              </div>
            </div>

            {/* Degradation Trend Comparison */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-bold text-white uppercase tracking-wider">Degradation Analysis</span>
                <span className="text-[8px] text-slate-400">Asset: TN-40</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Expected Yield", val: 94, color: "bg-slate-400" },
                  { label: "Actual Yield", val: 89, color: "bg-purple-400" },
                  { label: "AI Forecast (Year 5)", val: 85, color: "bg-pink-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-24 text-[8px] text-slate-400 tracking-wider truncate">{item.label}</div>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.val}%` }}></div>
                    </div>
                    <div className="w-6 text-[8px] font-mono text-right text-slate-300">{item.val}%</div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
