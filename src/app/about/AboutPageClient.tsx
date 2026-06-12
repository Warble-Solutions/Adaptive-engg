"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Activity, Wrench, Users, Award, Zap, Cpu, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { WATER_STATS, TUNNEL_STATS } from "@/lib/constants";
import Counter from "@/components/ui/Counter";
import { COMPANY_STATS } from "@/lib/constants";

export default function AboutPageClient() {
  const [leaderIndex, setLeaderIndex] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Dark) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/about-hero.png"
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/35 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/40 shadow-lg">
              About Us
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Engineering <span className="gradient-heading">Legacy</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              India&apos;s leading Renewable Energy company delivering end-to-end solutions since 2014.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. MISSION & STATS (Light) */}
      <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <SectionWrapper>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">We Are</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Adaptive Engineering Pvt. Ltd. a technology-driven engineering company headquartered in Ahmedabad, Gujarat. Since 2014, we have grown into India&apos;s most trusted partner for Renewable Energy, PM-KUSUM, Water Infrastructure, and Industrial Automation, delivering mission-critical Turnkey E&amp;I systems from our 125,000+ sq. ft. manufacturing facility with {COMPANY_STATS.manpower.value}+ skilled professionals across {COMPANY_STATS.scadaInstalled.value}+ sites nationwide.
                </p>
              </SectionWrapper>
            </div>
            <div className="md:w-1/2 w-full">
              <SectionWrapper delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Card 1: Years Experience */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.yearsExperience.value}
                        suffix={COMPANY_STATS.yearsExperience.suffix}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Manpower */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.manpower.value}
                        suffix={COMPANY_STATS.manpower.suffix}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        Skilled Engineers
                      </div>
                    </div>
                  </div>

                  {/* Card 3: SCADA Installed */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.scadaInstalled.value}
                        suffix={COMPANY_STATS.scadaInstalled.suffix}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        SCADA Systems
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Manufacturing Facility */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.manufacturingFacility.value}
                        suffix={COMPANY_STATS.manufacturingFacility.suffix}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        Sq. Ft. Facility
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Installed Base */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.installedBase.value}
                        suffix={` ${COMPANY_STATS.installedBase.suffix}`}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        Installed Base
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Satisfied Customers */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <Counter
                        value={COMPANY_STATS.satisfiedCustomers.value}
                        suffix={COMPANY_STATS.satisfiedCustomers.suffix}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 block"
                      />
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                        Satisfied Customers
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO — DETAILS (Dark) */}
      <section className="section-dark py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase text-sm tracking-widest mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading">Engineering Excellence,<br className="hidden md:block" /> End to End</h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <SectionWrapper delay={0.1}>
              <div className="flex flex-col gap-5 h-full">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 w-fit">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Complete Turnkey Solutions</h3>
                <p className="text-gray-400 leading-relaxed">
                  End-to-end solutions from conceptualizing, designing, supplying, installing, testing, commissioning and maintaining complete industrial automation and electrical (upto 66KV) systems — plus customized software for Central Plant Monitoring and Mobile Asset Management.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="flex flex-col gap-5 h-full">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 w-fit">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Passionate Team, Proven Results</h3>
                <p className="text-gray-400 leading-relaxed">
                  {COMPANY_STATS.manpower.value}+ engineers guided by founders with {COMPANY_STATS.yearsExperience.value}+ years of experience, delivering {COMPANY_STATS.scadaInstalled.value}+ projects across India — on time, with the best quality and latest technologies.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <div className="flex flex-col gap-5 h-full">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 w-fit">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Preferred Project Partner</h3>
                <p className="text-gray-400 leading-relaxed">
                  An installed base of {COMPANY_STATS.installedBase.value}GW+ across {COMPANY_STATS.satisfiedCustomers.value}+ plants, {WATER_STATS.supplySchemes.value}+ Water Supply Schemes, and India&apos;s widest {TUNNEL_STATS.twinTubeRoad.value}KM highway twin-tunnel — making us the &ldquo;Preferred Project Partner&rdquo; for India&apos;s largest corporations.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 4. CORE COMPETENCIES (Light) */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4 tracking-tight">Core Competencies</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Delivering mission-critical engineering solutions across multiple domains.</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Turnkey E&I", icon: <Zap className="w-6 h-6" />, desc: "Complete Electrical & Instrumentation execution from design to commissioning for Solar, Water, and Industrial projects." },
              { title: "IoT & SCADA", icon: <Activity className="w-6 h-6" />, desc: "In-house developed SolarWiz, WaterWiz, and MachineWiz IoT platforms with edge computing and cloud analytics." },
              { title: "Panel Manufacturing", icon: <ShieldCheck className="w-6 h-6" />, desc: "IS/IEC certified LT/HT panels, MCC, PCC, ACDB, DCDB panels manufactured in our state-of-the-art facility." },
              { title: "Software & Analytics", icon: <Cpu className="w-6 h-6" />, desc: "ReportWiz, CMS, AMS — proprietary software suite for automated reporting, asset tracking, and performance monitoring." },
            ].map((skill, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#0da08a]/30 hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default h-full flex flex-col items-start">
                  <div className="mb-6 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0da08a] group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-md transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#0da08a] transition-colors duration-300 leading-tight">{skill.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 flex-grow">
                    {skill.desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR VALUES — S.C.A.L.E (Dark) */}
      <section className="py-32 bg-transparent w-full relative z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm text-[#0da08a] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                Guiding Principles
              </div>
              <h2 className="text-5xl font-black text-white mb-6 font-heading">Our Values</h2>
            </SectionWrapper>
          </div>
          <div className="flex justify-center">
            <SectionWrapper>
              <img
                src="/imgs/Values-Design.webp"
                alt="Our Values Design: S.C.A.L.E"
                className="w-full object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 rounded-3xl"
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP TEAM (Light) */}
      <section className="section-light py-32 bg-white rounded-t-[40px] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Leadership</h2>
          </SectionWrapper>
          <div className="relative">
            <SectionWrapper delay={0.2}>
              <div className="overflow-hidden p-4">
                <AnimatePresence mode="popLayout">
                  <motion.div className="flex gap-8" initial={false}>
                    {[0, 1, 2, 3].map((offset) => {
                      const leader = [
                        {
                          name: "Chirag Soni",
                          role: "Managing Director",
                          img: "https://test.adaptive-engg.com/wp-content/uploads/2023/09/chirag-1.png.webp"
                        },
                        {
                          name: "Jay Patel",
                          role: "Director",
                          img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Jay-1.png.webp"
                        },
                        {
                          name: "Keyur Amin",
                          role: "C.E.O",
                          img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Keyur-1.png.webp"
                        },
                        {
                          name: "Ajit Patel",
                          role: "Technical Advisor",
                          img: "https://adaptive-engg.com/wp-content/uploads/2023/06/ajit.png.webp"
                        },
                        {
                          name: "Chintan Patel",
                          role: "Head Sales",
                          img: "https://adaptive-engg.com/wp-content/uploads/2023/09/Chintan-1.png.webp"
                        }
                      ][(leaderIndex + offset) % 5];

                      return (
                        <motion.div
                          key={leader.name}
                          layout="position"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4 }}
                          className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] premium-card p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-xl hover:border-primary/50 hover:shadow-xl -translate-y-2 group"
                        >
                          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-md mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-white">
                            <img
                              src={leader.img}
                              alt={leader.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 text-center mb-1">{leader.name}</h3>
                          <p className="text-primary font-bold text-xs uppercase tracking-widest text-center">{leader.role}</p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </SectionWrapper>

            <button
              onClick={() => setLeaderIndex((prev) => (prev - 1 + 5) % 5)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 hover:shadow-xl scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setLeaderIndex((prev) => (prev + 1) % 5)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 hover:shadow-xl scale-110 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. ACCREDITATIONS (Alt Light) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 font-heading">Certified Excellence</h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionWrapper delay={0.1}>
              <div className="premium-card p-10 bg-white rounded-2xl border border-slate-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center gap-8">
                <div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <CheckCircle2 className="w-48 h-48 text-primary" />
                </div>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
                  <p className="text-slate-500 font-medium">Quality Management System</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    Active
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-white rounded-2xl border border-slate-100 hover:border-teal-500 hover:shadow-xl shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center gap-8">
                <div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <CheckCircle2 className="w-48 h-48 text-teal-600" />
                </div>
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">TUV Nord Certified</h3>
                  <p className="text-slate-500 font-medium">Global Safety & Quality Standards</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
                    Verified
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 8. CTA (Dark) */}
      <section className="section-dark text-center py-32 bg-transparent text-white relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-8 font-heading">Want to join our team?</h2>
            <Link href="/careers" className="inline-block px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              View Careers
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
