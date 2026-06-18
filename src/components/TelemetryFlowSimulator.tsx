"use client";

import { useEffect, useState, useRef } from "react";
import { Cpu, Server, Lock, Activity, ShieldCheck, RefreshCw, Radio } from "lucide-react";

interface LogEntry {
  time: string;
  direction: "Tx" | "Rx";
  details: string;
}

export default function TelemetryFlowSimulator() {
  const [packetCount, setPacketCount] = useState(148092);
  const [latency, setLatency] = useState(12.4);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [activeNode, setActiveNode] = useState(0);
  const [flowX, setFlowX] = useState(15);

  const labels = ["Active Power", "Reactive Power", "Interconnection Voltage", "Grid Frequency", "Breaker Status", "Solar Irradiance", "Energy Yield"];
  const values = ["7.45kW", "1.24MVAR", "415.6V", "49.98Hz", "CLOSED", "842W/m²", "148.4MWh"];
  const units = ["M_ME_TF_1 (ASDU 36)", "M_ME_TF_1 (ASDU 36)", "M_ME_TE_1 (ASDU 35)", "M_ME_TE_1 (ASDU 35)", "M_SP_NA_1 (ASDU 30)", "M_ME_TF_1 (ASDU 36)", "M_IT_NA_1 (ASDU 15)"];
  const labelIdx = useRef(0);

  // Fluctuating KPI metrics
  useEffect(() => {
    const packetInterval = setInterval(() => {
      setPacketCount(p => p + Math.floor(Math.random() * 3) + 1);
    }, 800);

    const latencyInterval = setInterval(() => {
      setLatency(12.4 + (Math.random() - 0.5) * 1.6);
    }, 1500);

    return () => {
      clearInterval(packetInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  // Frame simulation and logging
  useEffect(() => {
    const logInterval = setInterval(() => {
      labelIdx.current = (labelIdx.current + 1) % labels.length;
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      // Step 1: Send Tx Frame
      const newTxLog: LogEntry = {
        time: timeStr,
        direction: "Tx",
        details: `APDU I-Format | ASDU: ${units[labelIdx.current]} | Tag: ${labels[labelIdx.current]} = ${values[labelIdx.current]}`
      };

      // Step 2: Receive Rx ACK Frame shortly after
      setTimeout(() => {
        const rxTimeStr = new Date().toTimeString().split(" ")[0];
        const newRxLog: LogEntry = {
          time: rxTimeStr,
          direction: "Rx",
          details: `APDU S-Format | Supervisory ACK (Receive Sequence Number: ${Math.floor(Math.random() * 1000) + 100})`
        };
        setLogs(prev => [newRxLog, ...prev].slice(0, 8));
      }, 400);

      setLogs(prev => [newTxLog, ...prev].slice(0, 8));

      // Trigger node pulse animation sequence
      setActiveNode(1);
      setFlowX(15);
      setTimeout(() => {
        setFlowX(50);
        setActiveNode(2);
      }, 600);
      setTimeout(() => {
        setFlowX(85);
        setActiveNode(3);
      }, 1200);
      setTimeout(() => {
        setFlowX(100);
        setActiveNode(4);
      }, 1800);
      setTimeout(() => {
        setActiveNode(0);
      }, 2400);

    }, 3200);

    // Initial logs fill
    const initialLogs: LogEntry[] = [
      { time: "08:47:00", direction: "Rx", details: "APDU U-Format | STARTDT Act (Start Data Transmission Activation)" },
      { time: "08:47:00", direction: "Tx", details: "APDU U-Format | STARTDT Con (Start Data Transmission Confirm)" },
      { time: "08:47:01", direction: "Tx", details: "APDU I-Format | General Interrogation (GI) Command Initiated" },
      { time: "08:47:02", direction: "Rx", details: "APDU I-Format | GI Response: Complete Station interrogation ACK" }
    ];
    setLogs(initialLogs);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="w-full bg-slate-950 border border-white/10 rounded-3xl p-6 text-white font-sans text-left shadow-2xl relative overflow-hidden select-none">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-teal-400">
            AEPL-Telemetry Analyzer
          </h4>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
          <span>PROTOCOL: IEC 60870-5-104</span>
          <span>•</span>
          <span className="text-teal-400 font-bold">SECURE CHANNEL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Side: Animated HUD Network Map (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[9px] text-slate-400 font-mono uppercase">Topology Monitor</span>
            <span className="text-[9px] text-teal-400 font-mono bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">LIVE ROUTING</span>
          </div>

          {/* SVG Connection Tracks */}
          <div className="relative py-12">
            <div className="grid grid-cols-4 gap-4 items-center justify-between relative z-10">
              {[
                { name: "Inverter", sub: "Field Site", icon: <Cpu className="w-4 h-4" />, nodeIdx: 1 },
                { name: "RTU 104", sub: "Telemetry", icon: <Radio className="w-4 h-4" />, nodeIdx: 2 },
                { name: "VPN Tunnel", sub: "IPsec Encrypt", icon: <Lock className="w-4 h-4" />, nodeIdx: 3 },
                { name: "SLDC Host", sub: "State Grid", icon: <Server className="w-4 h-4" />, nodeIdx: 4 }
              ].map((node, nIdx) => {
                const isPulse = activeNode === node.nodeIdx;
                return (
                  <div key={nIdx} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative ${
                      isPulse 
                        ? "bg-teal-500 text-slate-950 scale-110 shadow-lg shadow-teal-500/20 border-transparent"
                        : "bg-slate-950 border border-white/10 text-slate-400"
                    }`}>
                      {/* Pulsing ring indicator */}
                      {isPulse && (
                        <span className="absolute inset-0 rounded-xl border border-teal-400 animate-ping opacity-75"></span>
                      )}
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-extrabold text-white mt-3 block">{node.name}</span>
                    <span className="text-[8px] text-slate-500 font-mono mt-0.5 block">{node.sub}</span>
                  </div>
                );
              })}
            </div>

            {/* SVG Link lines behind nodes */}
            <div className="absolute inset-0 z-0 flex items-center px-6 pointer-events-none">
              <svg className="w-full h-2" viewBox="0 0 500 8" preserveAspectRatio="none">
                <line x1="0" y1="4" x2="500" y2="4" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="0" y1="4" x2="500" y2="4" stroke="rgba(20, 184, 166, 0.1)" strokeWidth="2" />
                
                {/* SVG Flow Dot */}
                {activeNode > 0 && (
                  <circle cx={`${flowX}%`} cy="4" r="3" fill="#2dd4bf" className="transition-all duration-500 ease-out" />
                )}
              </svg>
            </div>
          </div>

          {/* HUD Status Bar */}
          <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> CERC Cybersecurity Filters Active</span>
            <span className="text-teal-400 font-extrabold">STATUS: SECURE</span>
          </div>
        </div>

        {/* Right Side: Diagnostics Console & Logs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Diagnostic Metrics Grid */}
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
              <span className="text-[8px] text-slate-500 uppercase tracking-widest block font-bold">Packets Tx</span>
              <span className="text-base font-bold font-mono text-white block mt-1">
                {packetCount.toLocaleString()}
              </span>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
              <span className="text-[8px] text-slate-500 uppercase tracking-widest block font-bold">Ping Latency</span>
              <span className="text-base font-bold font-mono text-teal-400 block mt-1">
                {latency.toFixed(1)}<span className="text-[9px] text-slate-500">ms</span>
              </span>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
              <span className="text-[8px] text-slate-500 uppercase tracking-widest block font-bold">Uptime Rate</span>
              <span className="text-base font-bold font-mono text-white block mt-1">99.98%</span>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
              <span className="text-[8px] text-slate-500 uppercase tracking-widest block font-bold">Jitter Variance</span>
              <span className="text-base font-bold font-mono text-teal-400 block mt-1">1.2ms</span>
            </div>
          </div>

          {/* Scrolling IEC-104 Protocol logs terminal */}
          <div className="bg-[#030508] border border-white/5 rounded-2xl p-4 flex-grow flex flex-col justify-between">
            <span className="text-[9px] text-slate-500 font-mono block mb-2.5 uppercase tracking-wider">
              Raw IEC-104 Frame Log
            </span>
            <div className="space-y-2 font-mono text-[9px] text-slate-400 max-h-[140px] overflow-hidden flex flex-col-reverse justify-end flex-grow">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 border-b border-white/[0.02] pb-1 hover:bg-white/[0.01] transition-colors">
                  <span className="text-slate-600 shrink-0">{log.time}</span>
                  <span className={`font-bold shrink-0 ${
                    log.direction === "Tx" ? "text-teal-400" : "text-amber-500"
                  }`}>
                    [{log.direction}]
                  </span>
                  <span className="text-slate-300 leading-normal truncate block max-w-[220px]" title={log.details}>
                    {log.details}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
