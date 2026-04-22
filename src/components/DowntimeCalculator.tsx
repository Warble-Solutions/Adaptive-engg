'use client';
import { useState } from 'react';

export default function DowntimeCalculator() {
    const [capacity, setCapacity] = useState(50); // MW
    const [tariff, setTariff] = useState(2.50); // INR

    // Math: Capacity(MW) * 1000(kW) * 4(Hrs/Day) * 365(Days) * Tariff * 1%(0.01)
    const annualLoss = (capacity * 1000 * 4 * 365 * tariff * 0.01).toLocaleString('en-IN', { maximumFractionDigits: 0 });

    return (
        <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-700"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left: Inputs */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">The Cost of <span className="text-red-500">Downtime</span></h3>
                    <p className="text-gray-400 mb-8 text-sm">Calculate how much revenue you lose annually with just 1% operational inefficiency.</p>

                    {/* Slider 1: Capacity */}
                    <div className="mb-8 md:mb-12">
                        <div className="flex justify-between text-sm mb-2 font-bold">
                            <span className="text-gray-300">Plant Capacity</span>
                            <span className="text-primary">{capacity} MW</span>
                        </div>
                        <input
                            type="range" min="1" max="500" step="1"
                            value={capacity} onChange={(e) => setCapacity(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    {/* Slider 2: Tariff */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm mb-2 font-bold">
                            <span className="text-gray-300">PPA Tariff</span>
                            <span className="text-primary">₹{tariff.toFixed(2)} /unit</span>
                        </div>
                        <input
                            type="range" min="1.50" max="8.00" step="0.10"
                            value={tariff} onChange={(e) => setTariff(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>

                {/* Right: Results */}
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center relative backdrop-blur-sm">
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-bold">Estimated Annual Loss</div>
                    <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">
                        ₹{annualLoss}
                    </div>
                    <div className="text-xs text-red-400 mb-8 font-bold animate-pulse">
                        (At just 1% Downtime)
                    </div>

                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <p className="text-gray-300 text-sm mb-3">Maximize your uptime with <span className="text-white font-bold">SolarWiz SCADA</span>.</p>
                        <button className="w-full bg-gray-200 text-slate-900 font-bold py-2 rounded hover:bg-slate-300 transition">
                            Get SCADA Quote
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
