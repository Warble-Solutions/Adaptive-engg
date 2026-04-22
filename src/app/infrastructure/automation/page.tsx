import { AUTOMATION_STATS } from "@/lib/constants";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Target, ShieldCheck, Settings, CheckCircle2, Factory, MonitorSmartphone, Server, Droplet, Wind, CircleDollarSign, TrendingUp, Sun } from "lucide-react";
import Counter from "@/components/ui/Counter";

export const metadata = {
    title: "Industrial Automation | Adaptive Engineering",
    description: "Industry 4.0 PLC, SCADA, DCS, and IoT integration for intelligent manufacturing.",
};

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

            {/* HERO */}
            <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/imgs/banner/hero_industrial_automation.png" alt="Industrial Automation Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
                </div>
                <div className="z-10 max-w-7xl relative">
                    <SectionWrapper>
                        <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
                            Infrastructure
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Industrial <span className="gradient-heading">Automation</span>
                        </h1>
                        <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
                            Empowering intelligent manufacturing and process optimization with world-class system integration and SCADA solutions.
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* IMPACT STATS - FLOATING GLASS BAND */}
            <section className="relative z-30 -mt-24 mb-16 mx-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
                            {Object.values(AUTOMATION_STATS).map((stat, i) => (
                                <SectionWrapper key={i} delay={i * 0.1}>
                                    <div className="text-center px-4 flex flex-col justify-center h-full hover:scale-105 transition-transform duration-300">
                                        <div className="text-4xl lg:text-5xl font-black text-white mb-3 font-heading drop-shadow-md">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-xs font-bold text-primary/90 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                </SectionWrapper>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR SOLUTIONS */}
            <section className="py-24 bg-light relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionWrapper>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading mb-4">Our Solutions</h2>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                        </SectionWrapper>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "RTU / PLC System", icon: <Settings className="w-8 h-8" /> },
                            { title: "SCADA System", icon: <Server className="w-8 h-8" /> },
                            { title: "Soft Starters & VFD", icon: <Zap className="w-8 h-8" /> },
                            { title: "HMIs", icon: <MonitorSmartphone className="w-8 h-8" /> },
                            { title: "Automation Panels", icon: <Factory className="w-8 h-8" /> },
                            { title: "Central Monitoring System", icon: <Target className="w-8 h-8" /> }
                        ].map((sol, idx) => (
                            <SectionWrapper key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex items-start gap-4 h-full">
                                    <div className="p-3 bg-teal-50 text-primary rounded-xl group-hover:scale-110 transition-transform">
                                        {sol.icon}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">{sol.title}</h3>
                                    </div>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* AEPL EXPERTISE */}
            <section className="py-24 bg-[#0B1221] text-white relative z-10 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionWrapper>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/3">
                                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">AEPL Expertise</h2>
                                <p className="text-gray-400 leading-relaxed mb-6">We bring our proven automation systems across multiple heavy industry verticals.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:bg-primary/20 hover:border-primary transition-all duration-300">
                                    <Sun className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="font-bold">Renewable</div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:bg-primary/20 hover:border-primary transition-all duration-300">
                                    <Droplet className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="font-bold">Water</div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:bg-primary/20 hover:border-primary transition-all duration-300">
                                    <Factory className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="font-bold">Infra</div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:bg-primary/20 hover:border-primary transition-all duration-300">
                                    <Wind className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="font-bold">CGD</div>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* BENEFITS & VALUE CREATION */}
            <section className="py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Benefits */}
                        <SectionWrapper>
                            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 h-full">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">Benefits</h2>
                                <ul className="space-y-4">
                                    {[
                                        { text: "Enhanced Safety", icon: <ShieldCheck /> },
                                        { text: "Reduced Operating Cost", icon: <CircleDollarSign /> },
                                        { text: "Increased Productivity", icon: <TrendingUp /> },
                                        { text: "Better Energy Efficiency", icon: <Zap /> },
                                        { text: "Increased Accuracy and Reliability", icon: <CheckCircle2 /> },
                                        { text: "Lesser Maintenance", icon: <Settings /> }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                            <div className="text-primary">{item.icon}</div>
                                            <span className="font-semibold">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SectionWrapper>

                        {/* Value Creation */}
                        <SectionWrapper delay={0.2}>
                            <div className="bg-gradient-to-br from-teal-50 to-white p-10 rounded-3xl border border-teal-100 h-full shadow-lg">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">Value Creation</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">Globally Recognized System Integrators of Schneider Electric</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">ISO 9001:2015 Certification by TUV Nord for Quality Management System</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">Best in class quality products meeting stringent safety standards</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">Core competency in Project Management, System Designing, Software Development and Site Commissioning</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">Highest level of &lsquo;Customer Satisfaction&rsquo;</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary w-6 h-6 mt-1 shrink-0" />
                                        <span className="text-slate-700 leading-relaxed font-medium">Best in class &lsquo;Customer Service&rsquo;</span>
                                    </li>
                                </ul>
                            </div>
                        </SectionWrapper>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-transparent text-center relative z-10">
                <div className="max-w-2xl mx-auto px-6">
                    <SectionWrapper>
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Automate?</h2>
                        <p className="text-gray-400 mb-8 text-lg">Let our experts help you find the right solution for your plant&apos;s digital transformation.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </SectionWrapper>
                </div>
            </section>
        </div>
    );
}
