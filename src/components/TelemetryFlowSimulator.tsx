"use client";

import { useEffect, useState, useRef } from "react";
import { Cpu, Server, Lock, ShieldCheck, Activity } from "lucide-react";

interface LogEntry {
  time: string;
  tag: string;
  val: string;
  status: string;
}

export default function TelemetryFlowSimulator() {
  const [packet, setPacket] = useState({ x: 10, target: 0, label: "Active Power" });
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [rate, setRate] = useState(1.2);
  const [connected, setConnected] = useState(true);

  // Rotate sample packet labels
  const labels = ["Active Power", "Reactive Power", "Bus Voltage", "Grid Frequency", "Breaker Status", "GHI Irradiance", "Energy Accumulator"];
  const values = ["7.42 kW", "1.24 MVAR", "415.6 V", "49.98 Hz", "CLOSED", "842 W/m²", "148.4 MWh"];
  const labelIdx = useRef(0);

  useEffect(() => {
    // Generate simulated packets
    const interval = setInterval(() => {
      labelIdx.current = (labelIdx.current + 1) % labels.length;
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      // Add to logs
      setLogs(prev => [
        {
          time: timeStr,
          tag: labels[labelIdx.current],
          val: values[labelIdx.current],
          status: "ACK 200"
        },
        ...prev.slice(0, 4)
      ]);

      // Trigger animation trigger
      setPacket({ x: 0, target: 100, label: labels[labelIdx.current] });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#080c14] border border-white/10 rounded-3xl p-6 text-white font-sans text-left shadow-2xl relative select-none">
      {/* Console Title */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-teal-400" />
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Live Telemetry Link Simulator</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[9px] font-mono text-teal-400">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            RTU STATE: ONLINE
          </span>
          <span className="flex items-center gap-1 text-[9px] font-mono text-teal-400">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            SLDC LINK: ESTABLISHED
          </span>
        </div>
      </div>

      {/* Network Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-between py-6 relative z-10">
        {/* Node 1: Kusum Site (Inverter) */}
        <div className="flex flex-col items-center text-center p-3 bg-white/[0.02] border border-white/5 rounded-2xl relative">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-2">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Kusum Inverter</span>
          <span className="text-[8px] text-slate-500 font-mono mt-0.5">Modbus TCP</span>
        </div>

        {/* Node 2: AEPL RTU Gateway */}
        <div className="flex flex-col items-center text-center p-3 bg-white/[0.02] border border-teal-500/20 rounded-2xl relative">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-2 shadow-lg shadow-teal-500/5">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400">AEPL RTU Gateway</span>
          <span className="text-[8px] text-slate-500 font-mono mt-0.5">IEC 60870-5-104</span>
        </div>

        {/* Node 3: VPN Tunnel */}
        <div className="flex flex-col items-center text-center p-3 bg-white/[0.02] border border-white/5 rounded-2xl relative">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Secure VPN Tunnel</span>
          <span className="text-[8px] text-slate-500 font-mono mt-0.5">IPsec Encryption</span>
        </div>

        {/* Node 4: SLDC Server */}
        <div className="flex flex-col items-center text-center p-3 bg-white/[0.02] border border-white/5 rounded-2xl relative">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
            <Server className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider">SLDC Host Server</span>
          <span className="text-[8px] text-slate-500 font-mono mt-0.5">Rajasthan / State Grid</span>
        </div>

        {/* Animated Data Packets Flowing Line (hidden on mobile, rendered as background SVG) */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block px-12">
          <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
            {/* Connection Lines */}
            <path d="M 60 50 L 540 50" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="3" fill="none" />
            
            {/* Glowing Flow Particle */}
            <circle cx={`${packet.x}%`} cy="50" r="4" fill="#2dd4bf" className="transition-all duration-3000 ease-in-out" style={{
              transform: `translateX(${packet.x}%)`,
              left: `${packet.x}%`,
              transition: 'all 2.8s linear'
            }} />
          </svg>
          
          {/* Floating Data Tag over particle */}
          <div className="absolute top-[20px] left-[40%] -translate-x-1/2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[8px] font-mono px-2 py-0.5 rounded animate-pulse">
            TRANSMITTING: {packet.label}
          </div>
        </div>
      </div>

      {/* Packet Logs Console */}
      <div className="mt-6 bg-[#04060a] border border-white/5 rounded-xl p-4">
        <span className="text-[9px] text-slate-500 font-mono block mb-3 uppercase tracking-wider">SLDC Remote Log Feed</span>
        
        <div className="space-y-2 font-mono text-[10px]">
          {logs.length === 0 ? (
            <div className="text-slate-600 text-center py-4">Waiting for first telemetry frame packet...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/[0.03] pb-1.5 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600">{log.time}</span>
                  <span className="text-teal-400 font-bold">[{log.tag}]</span>
                  <span className="text-slate-300">{log.val}</span>
                </div>
                <span className="text-emerald-400 font-extrabold uppercase tracking-wide bg-emerald-500/10 px-1.5 py-0.5 rounded text-[8px] border border-emerald-500/20">
                  {log.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
