"use client";

import Link from "next/link";
import { ArrowRight, Zap, Activity, ShieldCheck, Cpu, LayoutTemplate, Network, Factory, CheckCircle2, ChevronRight, Ruler, Lock, Monitor } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function TurnkeyPage() {
    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION (Dark Immersive) */}
            <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
                {/* Background Image & Scrims */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2964&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628] z-10" />
                </div>

                <div className="z-10 max-w-7xl relative mx-auto w-full">
                    <SectionWrapper>
                        <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                            <Link href="/" className="hover:bg-[#0da08a] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/renewable" className="hover:bg-[#0da08a] transition-colors">Renewable</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white">Turnkey E&I</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 font-heading drop-shadow-2xl tracking-tight">
                            Turnkey <br /> <span className="gradient-heading">Execution</span>
                        </h1>

                        <p className="text-gray-300 text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
                            Complete Electrical & Instrumentation mastery from precise engineering blueprints to final grid injection & commissioning.
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* 2. FROM BLUEPRINT TO MEGAWATTS (Light Sticky Split) */}
            <section className="section-light py-32 bg-white rounded-t-[40px] relative z-20 -mt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
                        {/* Sticky Sidebar */}
                        <div className="lg:sticky lg:top-36 self-start">
                            <SectionWrapper>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                                    <Activity className="w-4 h-4" />
                                    <span>Project Execution</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 font-heading mb-6 leading-tight">
                                    From <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Blueprint to Megawatts</span>
                                </h2>
                                <p className="text-slate-500 text-xl leading-relaxed mb-10">
                                    Turnkey E&I is our core strength. We take complete ownership of the electrical and instrumentation scope for solar power plants — from detailed engineering to final grid synchronization.
                                </p>
                                
                                {/* Hero Stat Bento */}
                                <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors duration-1000 group-hover:bg-[#0da08a] bg-cyan-500/20"></div>
                                    <div className="grid grid-cols-2 gap-8 relative z-10">
                                        <div>
                                            <div className="text-5xl font-black text-teal-400 mb-2">200<span className="text-2xl text-teal-600">MW+</span></div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Largest Single Project</div>
                                        </div>
                                        <div>
                                            <div className="text-5xl font-black text-teal-400 mb-2">15<span className="text-2xl text-teal-600">+</span></div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">States Covered</div>
                                        </div>
                                        <div className="col-span-2 pt-6 border-t border-white/10">
                                            <div className="text-5xl font-black text-white mb-2">99.5<span className="text-2xl text-gray-500">%</span></div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">On-Time Delivery Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </SectionWrapper>
                        </div>

                        {/* Scroll Content */}
                        <div className="space-y-8 lg:pt-16">
                            <SectionWrapper delay={0.2}>
                                <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-[#0da08a] border-teal-200 transition-colors duration-500 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 mb-6 shadow-sm group-hover:bg-[#0da08a] bg-teal-50 group-hover:bg-[#0da08a] text-teal-600 transition-colors">
                                        <Ruler className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailed Engineering</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        We conceptualize and draft rigorous technical blueprints covering optimal cable sizing, trench routing, and comprehensive earthing calculations to minimize material waste and maximize transmission efficiency.
                                    </p>
                                </div>
                            </SectionWrapper>

                            <SectionWrapper delay={0.3}>
                                <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-[#0da08a] border-teal-200 transition-colors duration-500 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 mb-6 shadow-sm group-hover:bg-[#0da08a] bg-teal-50 group-hover:bg-[#0da08a] text-teal-600 transition-colors">
                                        <Network className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Meticulous Execution</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Our field teams manage the rapid physical deployment of massive solar arrays, handling everything from HV/MV cable jointing and switchyard erection to CEIG liasioning logistics without workflow bottlenecks.
                                    </p>
                                </div>
                            </SectionWrapper>

                            <SectionWrapper delay={0.4}>
                                <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-[#0da08a] border-teal-200 transition-colors duration-500 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 mb-6 shadow-sm group-hover:bg-[#0da08a] bg-teal-50 group-hover:bg-[#0da08a] text-teal-600 transition-colors">
                                        <Monitor className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Testing & Commissioning</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        From pre-commissioning numerical relay testing to seamless grid synchronization and SCADA integration, we ensure the infrastructure operates safely within mandatory state protocols.
                                    </p>
                                </div>
                            </SectionWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SCOPE OF WORK (Dark Bento Grid) */}
            <section className="section-dark py-32 bg-transparent text-white relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20">
                                <LayoutTemplate className="w-4 h-4" />
                                <span>Core Capabilities</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6 tracking-tight">Scope of <span className="gradient-heading">Work</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">End-to-end electrical mastery across the power value chain.</p>
                        </div>
                    </SectionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Bento Box 1 - Wide Large */}
                        <SectionWrapper delay={0.1}>
                            <div className="md:col-span-2 p-10 bg-slate-900 rounded-3xl border border-white/10 hover:bg-[#0da08a] border-cyan-500/50 transition-all duration-500 h-[400px] flex flex-col justify-end group relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548345680-f5475ea90f5c?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:bg-[#0da08a] scale-105 opacity-80 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] to-transparent"></div>
                                
                                <div className="relative z-10 sm:w-2/3">
                                    <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 backdrop-blur-lg group-hover:bg-[#0da08a] scale-110 transition-transform border border-cyan-500/30">
                                        <Activity className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Switchyard Works</h3>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        Complete transformer erection, CT/PT installation, isolator mounting, and comprehensive switchyard bus assembly built to withstand harsh industrial conditions.
                                    </p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Bento Box 2 - Tall Square */}
                        <SectionWrapper delay={0.2}>
                            <div className="p-10 bg-slate-900 rounded-3xl border border-white/10 hover:bg-[#0da08a] border-teal-500/50 transition-all duration-500 h-[400px] flex flex-col justify-between group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:bg-[#0da08a] opacity-10 transition-opacity">
                                    <Zap className="w-48 h-48 text-teal-400" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-[#0da08a] scale-110 transition-transform">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Protection & Metering</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Numerical relay settings configuration, sub-station protection coordination, and ABT metering integration for strict grid interface compliance.
                                    </p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Bento Box 3 - Square */}
                        <SectionWrapper delay={0.3}>
                            <div className="p-10 bg-slate-900 rounded-3xl border border-white/10 hover:bg-[#0da08a] border-teal-500/50 transition-all duration-500 h-[350px] flex flex-col justify-between group relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-[#0da08a] scale-110 transition-transform">
                                        <Network className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Cable Engineering</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Complete DC & AC cable laying topologies including MV/HV cable jointing, deep trench routing, and secure cable tray installations.
                                    </p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Bento Box 4 - Wide Rectangle */}
                        <SectionWrapper delay={0.4}>
                            <div className="md:col-span-2 p-10 bg-slate-900 rounded-3xl border border-white/10 hover:bg-[#0da08a] border-green-500/50 transition-all duration-500 h-[350px] flex flex-col justify-end group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:bg-[#0da08a] opacity-10 transition-opacity">
                                    <ShieldCheck className="w-48 h-48 text-green-400" />
                                </div>
                                <div className="relative z-10 sm:w-2/3">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-[#0da08a] scale-110 transition-transform">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Earthing & Lightning</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Rigorous earthing grid design and installation encompassing chemical earthing, engineered earth pits, and strategic lightning arrestor deployment to protect multi-million dollar assets.
                                    </p>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE AEPL (Light Sleek List) */}
            <section className="py-32 bg-slate-50 relative z-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <SectionWrapper>
                            <div className="lg:pr-10">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 font-heading leading-tight">
                                    Why Choose AEPL for <br /><span className="text-primary">Turnkey E&I?</span>
                                </h2>
                                <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                                    Avoid the nightmare of multi-vendor coordination. We provide a holistic, single-source solution that radically de-risks critical infrastructure deployment.
                                </p>
                                
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#0da08a] bg-primary transition-colors shadow-xl hover:bg-[#0da08a] shadow-2xl">
                                    Schedule a Consultation <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </SectionWrapper>

                        <SectionWrapper delay={0.2}>
                            <div className="space-y-4">
                                {[
                                    "Single point of responsibility reducing project management overhead by 60%.",
                                    "In-house HT/LT panel manufacturing eliminates vendor dependency and delivery delays.",
                                    "Integrated SCADA commissioning identically matched with our SolarWiz platform.",
                                    "Experienced field team with 50+ simultaneous site execution capability.",
                                    "Dedicated project managers providing real-time progress tracking tools.",
                                    "Long-term post-commissioning O&M support and remote diagnostics."
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:bg-[#0da08a] shadow-md hover:bg-[#0da08a] border-primary/20 transition-all duration-300 hover:bg-[#0da08a] -translate-y-1">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-[#0da08a] scale-110 transition-transform">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <p className="text-slate-700 font-semibold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
}
