"use client";

import { useState, useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import MicroCTA from "@/components/ui/MicroCTA";
import Counter from "@/components/ui/Counter";
import { ArrowRight, ShieldCheck, Activity, HardHat, Blocks, Link2, Youtube, Monitor, Database, Layers, Rocket, Lightbulb, Play, Cpu } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBolt, faWaveSquare, faHeartbeat, faBalanceScale, faBezierCurve, faNetworkWired, faFileContract, faShieldAlt, faCogs } from "@fortawesome/free-solid-svg-icons";
import SceneTrigger from "@/components/3d/SceneTrigger";
import { COMPANY_STATS, PPC_STATS, KUSUM_STATS, TUNNEL_STATS, WATER_STATS, AUTOMATION_STATS } from "@/lib/constants";
import { ScadaHeroDashboard } from "@/components/DashboardMockups";

const PARTNER_LOGOS = [
  ...Array.from({ length: 40 }, (_, i) => `/imgs/logos/${i + 1}.webp`),
  "/imgs/logos/meil.png",
];

interface YouTubeVideo {
  id: string;
  title: string;
}

const DEFAULT_VIDEOS: YouTubeVideo[] = [
  { id: "DbhvDJYsfEA", title: "Weather Monitoring Systems by AEPL under PM-KUSUM" },
  { id: "w2avEUffxYM", title: "Udaan 2026 – Adaptive Engineering Pvt. Ltd. Annual Meet" },
  { id: "_n0cYUCRMYc", title: "PM-KUSUM - ACDB Panel" }
];

export default function HomePageClient() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideos, setPlayingVideos] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    async function fetchLatestVideos() {
      try {
        const res = await fetch("/api/youtube/latest");
        const data = await res.json();
        if (data.success && data.videos && data.videos.length > 0) {
          const uniqueVideos = data.videos.filter(
            (v: YouTubeVideo, index: number, self: YouTubeVideo[]) =>
              self.findIndex((t) => t.id === v.id) === index
          );
          setVideos(uniqueVideos.slice(0, 6));
        } else {
          setVideos(DEFAULT_VIDEOS);
        }
      } catch (err) {
        console.error("Error fetching latest videos:", err);
        setVideos(DEFAULT_VIDEOS);
      } finally {
        setLoading(false);
      }
    }
    fetchLatestVideos();
  }, []);

  const displayVideos = videos.length > 0 ? videos : DEFAULT_VIDEOS;

  const formatStatVal = (stat: { formatted?: string; value: number | string; suffix?: string }) => {
    let valStr = stat.formatted || (typeof stat.value === "number" ? stat.value.toLocaleString("en-IN") : stat.value);
    if (stat.suffix && !valStr.toString().endsWith(stat.suffix)) {
      valStr += stat.suffix;
    }
    return valStr;
  };

  // ─── THE AEPL JOURNEY ────────────────────────────────────
  // Stats are ordered as a narrative: Foundation → Scale → Reach → Innovation
  const statsList = [
    // ▸ CH.1  FOUNDATION — Who we are
    COMPANY_STATS.yearsExperience,
    COMPANY_STATS.manpower,
    COMPANY_STATS.manufacturingFacility,
    COMPANY_STATS.satisfiedCustomers,

    // ▸ CH.2  SCALE — What we've built
    COMPANY_STATS.installedBase,
    COMPANY_STATS.electricalPanels,
    COMPANY_STATS.scadaInstalled,
    AUTOMATION_STATS.systemsPerYear,
    PPC_STATS.ppcProjects,
    PPC_STATS.hybridInstalled,

    // ▸ CH.3  REACH — Where we operate
    KUSUM_STATS.statesOfIndia,
    WATER_STATS.statesCovered,
    WATER_STATS.supplySchemes,
    WATER_STATS.overheadTanks,
    WATER_STATS.mldTreatedWater,
    WATER_STATS.mldTreatedSewage,

    // ▸ CH.4  INNOVATION — Cutting-edge capabilities
    AUTOMATION_STATS.scadaTags,
    TUNNEL_STATS.twinTubeRoad,
    TUNNEL_STATS.transformer,
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO CAROUSEL */}
      <section className="relative min-h-screen pt-32 md:pt-0 bg-transparent">
        <HeroCarousel />
        <SceneTrigger variant="logo" color="#0da08a" />
      </section>

      {/* 2. MARQUEE SECTION (Light) */}
      <section className="pt-20 pb-10 bg-light rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-gray-400 text-lg font-bold uppercase tracking-[0.2em]">Industry Leaders Trust Us</p>
        </div>
        <InfiniteMarquee speed={0.8} hoverSpeed={0.2} className="gap-32 items-center pr-32 py-4">
          {PARTNER_LOGOS.map((src, i) => {
            const isAdityaBirla = src.endsWith("/6.webp");
            const isCMR = src.endsWith("/20.webp");
            const isFornnax = src.endsWith("/12.webp");
            const isTarget = isAdityaBirla || isCMR || isFornnax;

            return (
              <div key={i} className="flex-shrink-0 flex items-center justify-center w-56 h-20">
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                    isAdityaBirla ? "scale-[1.35]" :
                    isCMR ? "scale-[1.35]" :
                    isFornnax ? "scale-[1.4]" : ""
                  }`}
                />
              </div>
            );
          })}
        </InfiniteMarquee>
      </section>

      {/* 3. SCROLLING STATS LOOP (Light Marquee) */}
      <section className="py-12 bg-white z-20 border-y border-slate-100 overflow-hidden">
        <InfiniteMarquee speed={1.2} hoverSpeed={0.3} className="gap-8 items-center pr-8 py-6 cursor-pointer">
          {statsList.map((stat, i) => (
            <div key={i} className="flex-shrink-0 w-96 h-44 bg-slate-50/70 border-2 border-slate-200 rounded-[2rem] px-6 py-8 flex flex-col justify-center items-center text-center hover:border-primary/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {(() => {
                const val = formatStatVal(stat);
                return (
                  <div className={`font-extrabold text-primary font-heading mb-2 ${
                    val.length > 12 ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
                  }`}>
                    {val}
                  </div>
                );
              })()}
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold leading-normal">{stat.label}</div>
            </div>
          ))}
        </InfiniteMarquee>
      </section>

      {/* 3.5 MISSION & VISION (Overhauled Premium Dark Design) */}
      <section className="py-24 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
                What Drives AEPL
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Vision & Mission</span>
              </h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Vision Card */}
            <SectionWrapper delay={0.1}>
              <div className="group relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Large Background Watermark Letter */}
                <div className="absolute right-6 bottom-6 text-white/5 font-black text-[12rem] leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/5 font-heading">
                  V
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading">Vision</h3>
                  </div>

                  <p className="text-xl text-slate-300 leading-relaxed font-semibold font-heading tracking-wide">
                    Embrace Technology To Maximize Value
                  </p>
                </div>

              </div>
            </SectionWrapper>

            {/* Mission Card */}
            <SectionWrapper delay={0.2}>
              <div className="group relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Large Background Watermark Letter */}
                <div className="absolute right-6 bottom-6 text-white/5 font-black text-[12rem] leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/5 font-heading">
                  M
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 shadow-md">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading">Mission</h3>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed font-medium">
                    Continuously evolve to maximize value of each installation towards providing the <span className="text-primary font-bold">Best Customer Experience</span>.
                  </p>
                </div>

              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 3.7 ABOUT US SECTION (Light, Premium, Three-Column Layout) */}
      <section className="py-24 bg-white relative z-20 border-t border-slate-100">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Copy */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <SectionWrapper>
                <span className="text-primary font-bold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight mb-8">
                  Preferred Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Partner</span>
                </h2>
                <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    Renewable energy solutions from AEPL include end-to-end services: conceptualizing, designing, supplying, installing, testing, commissioning, and maintaining complete industrial automation and electrical systems (up to 66KV). The company also offers customized software solutions for Central Plant Monitoring and Mobile Asset Management, ensuring optimal installation performance. With a focus on project management, AEPL takes full ownership of all automation and electrical project requirements.
                  </p>
                  <p>
                    Driven by passionate team of 300+ engineers under the guidance of the founders carrying rich experience of more than three decades, team AEPL has successfully completed 1000+ projects across India. Completing projects before time, with the demonstration of the best quality work and use of latest technologies, enables AEPL to deliver maximum value.
                  </p>
                  <p>
                    Further AEPL has achieved an exceptional track record of managing Renewable Plant Monitoring Software installed base of 68GW+ at 500+ plants across India. It also manages 50+ Water Supply Schemes and India’s widest highway Twin Tube Tunnel of 2.5Km where complete E&I packages are delivered.
                  </p>
                </div>
              </SectionWrapper>
            </div>

            {/* Center Column: Tall Image Card to fill space */}
            <div className="lg:col-span-3 flex">
              <SectionWrapper delay={0.1} className="w-full h-full">
                <div className="relative group overflow-hidden rounded-[2rem] w-full h-full min-h-[350px] border border-slate-100 shadow-lg">
                  <img
                    src="/imgs/factory.jpg"
                    alt="AEPL Manufacturing Facility"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-base font-bold text-white leading-tight">State-of-the-Art Manufacturing Facility</h3>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Key Metrics Bento Grid */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <SectionWrapper delay={0.2} className="h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-center">
                    <div className="text-3xl font-extrabold text-slate-900 font-heading mb-1">68GW+</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight">Installed Base</div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-center">
                    <div className="text-3xl font-extrabold text-slate-900 font-heading mb-1">300+</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight">Engineers</div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-center">
                    <div className="text-3xl font-extrabold text-slate-900 font-heading mb-1">1000+</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight">Completed Projects</div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-center">
                    <div className="text-3xl font-extrabold text-slate-900 font-heading mb-1">50+</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight">Water Supply Schemes</div>
                  </div>

                  {/* Highlight image card */}
                  <div className="col-span-2 relative h-44 overflow-hidden rounded-3xl group border border-slate-100 shadow-sm mt-auto">
                    <img
                      src="/imgs/tunnel/tunnel_hero.png"
                      alt="Twin Tube Tunnel"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6 text-left">
                      <div className="text-base font-bold text-white mb-0.5">Twin Tube Tunnel (2.5Km)</div>
                      <p className="text-[11px] text-gray-300 font-medium leading-relaxed">India&apos;s widest highway twin-tube tunnel managed under our complete E&I packages.</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8 OUR VALUES — S.C.A.L.E. */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative z-20 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-primary font-bold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
                Guiding Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Values</span>
              </h2>
            </SectionWrapper>
          </div>
          <div className="flex justify-center">
            <SectionWrapper>
              <img
                src="/imgs/Values-Design.webp"
                alt="Our Values Design: S.C.A.L.E — Speed, Courage & Commitment, Adapt, Liveliness, Evolve to Excel"
                className="w-full object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 rounded-3xl"
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS (Dark) */}
      <section className="py-32 bg-transparent rounded-b-[40px] z-10 relative shadow-2xl">
        <SceneTrigger variant="solar" color="#EAB308" speed={0.5} />
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-white font-heading">Our Solutions</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Renewable Solutions */}
            <SectionWrapper delay={0.1}>
              <Link href="/renewable" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/renewable_hybrid.png" className="w-full h-48 rounded-xl object-cover mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="Renewable Solutions" />
                    <h3 className="text-2xl font-bold text-white mb-4">Renewable</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">End-to-end services: Conceptualizing, designing, and commissioning electrical systems up to 66KV. Solar, Wind, and Hybrid plant integration.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>

            {/* 2. Electrical Panels */}
            <SectionWrapper delay={0.2}>
              <Link href="/renewable/panels" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/electrical_panels.png" className="w-full h-48 rounded-xl object-cover mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="Electrical Panels" />
                    <h3 className="text-2xl font-bold text-white mb-4">Electrical Panels</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">Intelligent design and custom manufacturing of high-reliability HT Switchgears, LT Distribution Panels, PCC, MCC, and ACDB panels.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>

            {/* 3. Turnkey E&I */}
            <SectionWrapper delay={0.3}>
              <Link href="/renewable/turnkey" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/turnkey_ei.png" className="w-full h-48 rounded-xl object-cover mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="Turnkey E&I" />
                    <h3 className="text-2xl font-bold text-white mb-4">Turnkey E&I</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">Single-point engineering, procurement, and construction (EPC) solutions for solar parks, wind assets, substations, and grid synchronization.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>

            {/* 4. Water Solutions */}
            <SectionWrapper delay={0.4}>
              <Link href="/infrastructure/water" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/water_solutions.png" className="w-full h-48 rounded-xl object-cover mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="Water Solutions" />
                    <h3 className="text-2xl font-bold text-white mb-4">Water</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">Complete E&I automation and telemetry for water supply schemes, water treatment plants (WTP), sewage treatment plants (STP), and lift irrigation schemes.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>

            {/* 5. PM-KUSUM Solutions */}
            <SectionWrapper delay={0.5}>
              <Link href="/pm-kusum" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/pm_kusum.png" className="w-full h-48 rounded-xl object-cover mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="PM-KUSUM" />
                    <h3 className="text-2xl font-bold text-white mb-4">PM-KUSUM</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">Industrial IoT powered by SolarWiz, WaterWiz, and MachineWiz. Real-time telemetry for agricultural pumps and water supply schemes.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>

            {/* 6. Infrastructure Solutions */}
            <SectionWrapper delay={0.6}>
              <Link href="/infrastructure/tunnel" className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-primary hover:bg-white/10 hover:border-primary/50 hover:shadow-xl -translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <img src="/imgs/solutions/infrastructure_tunnel_entrance.png" className="w-full h-48 rounded-xl object-cover object-[center_75%] mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500" alt="Infrastructure Solutions" />
                    <h3 className="text-2xl font-bold text-white mb-4">Infrastructure</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">Specialized safety, ventilation, lighting, and power automation packages for highway tunnels, data centers, and heavy manufacturing.</p>
                  </div>
                  <span className="text-white text-sm font-bold border-b border-primary pb-1 group-hover:text-primary transition-colors w-fit">Learn More</span>
                </div>
              </Link>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS (Light) */}
      <section className="py-32 bg-white relative z-20 border-y border-slate-100">
        <SceneTrigger variant="wind" color="#f97316" speed={0.6} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-6">
            <SectionWrapper>
              <h2 className="text-5xl font-bold text-slate-900 font-heading">Case Studies</h2>
            </SectionWrapper>
            <Link href="/resources/case-studies" className="text-primary font-bold hover:text-[#0da08a] transition hidden md:block">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Water Supply Schemes",
                slug: "water-supply-schemes",
                category: "Water & Process",
                img: "/imgs/case-studies/cs_water.png",
                desc: "Instrumentation, telemetry, and remote monitoring setup for widespread clean water distribution networks.",
                delay: 0.1
              },
              {
                title: "Chuhrat Bypass Tunnel",
                slug: "chuhrat-bypass-tunnel-rewa-sidhi",
                category: "Infrastructure",
                img: "/imgs/case-studies/cs_tunnel.png",
                desc: "Life safety automation systems including jet fan controls, toxic gas monitoring, and SCADA override for transport tunnels.",
                delay: 0.2
              },
              {
                title: "Khavda Hybrid Plant",
                slug: "khavda-hybrid-plant",
                category: "Renewable Energy",
                img: "/imgs/case-studies/khavda-hybrid-plant.png",
                desc: "High-capacity E&I substation layout, grid synchronization, and analytics for the Khavda hybrid solar-wind complex.",
                delay: 0.3
              }
            ].map((study, i) => (
              <SectionWrapper key={i} delay={study.delay}>
                <Link
                  href={`/resources/case-studies/${study.slug}`}
                  className="group relative bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_20px_50px_rgba(13,160,138,0.08)]"
                >
                  <div className="h-64 overflow-hidden relative">
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-primary/95 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-primary/20">
                      {study.category}
                    </div>
                    <img
                      src={study.img}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700 group-hover:scale-105"
                      alt={study.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-85"></div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        {study.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-primary font-bold">
                      <span className="uppercase tracking-wider">Explore Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Dark) */}
      <section className="section-dark py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-4xl font-bold text-white mb-2 font-heading">Trusted Voices</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Powering India&apos;s energy leaders</p>
            </SectionWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I appreciate the exceptional work of Adaptive Engineering Pvt. Ltd. Their commitment to excellence, attention to details and proactive mindset have significantly contributed to the success of our projects.", author: "Advisor - Solar O&M", company: "Tata Power", initial: "T" },
              { quote: "I have no hesitation in recommending AEPL to anyone seeking reliable and efficient solar monitoring solutions. The combination of cutting-edge technology, expert knowledge, and outstanding customer service makes AEPL the ideal partner.", author: "Director", company: "WAAREE Renewable Technologies Ltd.", initial: "W" },
              { quote: "Our Machine Automation Solutions are powered by AEPL and we highly recommend the same.", author: "Managing Director", company: "Clartech Engineers Pvt. Ltd.", initial: "C" },
              { quote: "AEPL is our reliable partner w.r.t. SCADA, PPC, and Tracker SCADA at 61 sites, comprising Solar, wind, and Hybrid. AEPL's quality, trust, commitment, delivery, and service make them stand out.", author: "Associate Vice President – Engineering", company: "Adani Green Energy Limited", initial: "A" },
              { quote: "AEPL is our trusted partner when it comes to automation of our Water Supply Scheme projects. Our projects at Rewa, Kirgi, Barhi and Dhamedi are powered by AEPL.", author: "Head E&A", company: "CMR Infrastructure Pvt. Ltd.", initial: "C" },
              { quote: "We trust AEPL for all our Industrial Automation Solutions as the team @AEPL ensures the best fit products and services. Their zeal to keep customer first makes them our most trusted Automation Solutions partner", author: "Managing Director", company: "Fornnax Technology Pvt. Ltd.", initial: "F" }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6 text-primary text-4xl">&ldquo;</div>
                    <p className="text-gray-300 leading-relaxed italic mb-8 text-sm">&quot;{item.quote}&quot;</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {item.initial}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.author}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.company}</div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>      {/* 9. PROTOCOL (Light) -> Replaced with The AEPL Advantage */}
      <section className="py-32 bg-slate-50 relative z-20 border-t border-slate-100">
        <SceneTrigger variant="wave" color="#0da08a" speed={0.5} />
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Advantage Points */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">AEPL</span> Advantage
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Complete E&I Solutions",
                    desc: "Expertise in complete Electrical and Automation Solutions.",
                    icon: <Cpu className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "Customized Engineering",
                    desc: "Customized solutions based on client's needs and challenges.",
                    icon: <Lightbulb className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "Proven Track Record",
                    desc: "Strong track record of delivering quality projects.",
                    icon: <ShieldCheck className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "OEM Partnerships",
                    desc: "OEM partnerships for best-in-class hardware.",
                    icon: <Layers className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "Turnkey Project Experts",
                    desc: "Single-point engineering, procurement, and execution capability.",
                    icon: <Rocket className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "Optimized Commissioning",
                    desc: "Time-saving and cost-effective commissioning process.",
                    icon: <Activity className="w-6 h-6 text-primary" />
                  }
                ].map((item, i) => (
                  <SectionWrapper key={i} delay={i * 0.1}>
                    <div className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex gap-4 h-full">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionWrapper>
                ))}
              </div>
            </div>

            {/* Right Column: Turnkey Spotlight */}
            <div className="lg:col-span-4 h-full">
              <SectionWrapper delay={0.3}>
                <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl flex flex-col justify-end p-8 md:p-10 border border-slate-200">
                  <div className="absolute inset-0">
                    <img
                      src="/images/renewable/hero-turnkey-execution.png"
                      alt="Project Execution"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:from-slate-950 group-hover:via-slate-900/50 transition-all duration-500"></div>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <span className="bg-primary/95 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit block">
                      Execution Excellence
                    </span>
                    <h3 className="text-3xl font-black text-white leading-tight">
                      Preferred Project Partner
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Delivering world-class E&I projects with cost leadership, faster execution, and a proven track record across India.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-white transition-colors"
                      >
                        Partner With Us <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* 3.9 OUR JOURNEY */}
      <section className="py-24 bg-white relative z-20 border-t border-slate-100">
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <span className="text-primary font-bold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
                Milestones
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Journey</span>
              </h2>
            </SectionWrapper>
          </div>
          <div className="flex justify-center">
            <SectionWrapper>
              <img
                src="/journey/our-journey-timeline.png"
                alt="Our Journey Timeline"
                className="w-full object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 rounded-3xl"
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 9. MEDIA GALLERY (YouTube Widget - Dark Premium Design) */}
      <section className="py-24 px-6 relative overflow-hidden bg-transparent z-10">
        <SceneTrigger variant="wave" color="#ef4444" speed={0.4} />
        <div className="max-w-7xl mx-auto">
          <SectionWrapper className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">
              <Youtube className="text-red-500 w-4 h-4" />
              <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Latest Uploads</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-4">Engineering in Motion</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayVideos.map((video, idx) => (
              <SectionWrapper key={`${video.id}-${idx}`} className="group" delay={idx * 0.1}>
                <div className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-md hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
                  <div className="aspect-video w-full bg-black/40 relative overflow-hidden cursor-pointer">
                    {playingVideos[video.id] ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    ) : (
                      <div
                        className="w-full h-full relative group/thumb"
                        onClick={() => setPlayingVideos(prev => ({ ...prev, [video.id]: true }))}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                          }}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/25 group-hover/thumb:bg-slate-950/15 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 group-hover/thumb:bg-white group-hover/thumb:text-red-600 group-hover/thumb:scale-110 group-hover/thumb:shadow-white/20 transition-all duration-300 text-white">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2" title={video.title}>
                        {video.title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                      Latest Upload
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <SectionWrapper className="mt-16 text-center">
            <a
              href="https://youtube.com/@adaptiveengineeringpvt.ltd.?si=C_3FYNQtQxYz9B_D"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:scale-105 transition-all group"
            >
              <span>View All Videos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </SectionWrapper>
        </div>
      </section>

      {/* 10. CTA & IMPACT (Combined Premium Dark Section) */}
      <section className="py-32 bg-transparent text-center relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <SectionWrapper>
            {/* Impact Grid inside CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] text-left shadow-2xl">
              <div>
                <span className="text-primary font-bold uppercase text-[10px] tracking-widest block mb-2">Sustainable Engineering</span>
                <h3 className="text-3xl font-black text-white font-heading mb-3">Impact & Scale</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">Reducing carbon footprints and empowering local communities across India with sustainable E&I and automation technologies.</p>
              </div>
              <div className="flex justify-around items-center text-center">
                <div>
                  <div className="flex items-baseline justify-center gap-0.5 mb-1">
                    <Counter value={COMPANY_STATS.installedBase.value} className="text-4xl font-extrabold text-white font-heading" />
                    <span className="text-4xl font-extrabold text-primary font-heading">{COMPANY_STATS.installedBase.suffix}</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{COMPANY_STATS.installedBase.label}</div>
                </div>
                <div className="h-16 w-[1px] bg-white/10"></div>
                <div>
                  <div className="flex items-baseline justify-center gap-0.5 mb-1">
                    <Counter value={COMPANY_STATS.scadaInstalled.value} className="text-4xl font-extrabold text-white font-heading" />
                    <span className="text-4xl font-extrabold text-primary font-heading">+</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{COMPANY_STATS.scadaInstalled.label}</div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl mb-8 font-black text-white font-heading">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">Scale?</span></h2>
            <p className="text-xl text-gray-400 mb-12">Partner with the &quot;Preferred Project Partner&quot; of India&apos;s largest corporate houses.</p>
            <Link href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-primary to-teal-700 text-white rounded-full font-bold uppercase tracking-wider text-lg shadow-xl shadow-teal-900/50 hover:bg-slate-900 hover:text-white hover:scale-105 transition-transform">
              Start Discussion
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  hoverSpeed?: number;
  className?: string;
}

function InfiniteMarquee({ children, speed = 1, hoverSpeed = 0.3, className = "" }: InfiniteMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const resetWidthRef = useRef(0);

  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current && containerRef.current.firstElementChild) {
        resetWidthRef.current = (containerRef.current.firstElementChild as HTMLElement).offsetWidth;
      }
    };

    measureWidth();
    const timer = setTimeout(measureWidth, 100);

    window.addEventListener("resize", measureWidth);

    let frameId: number;
    const animate = () => {
      const currentSpeed = isHovered ? hoverSpeed : speed;
      positionRef.current -= currentSpeed;

      if (resetWidthRef.current > 0 && Math.abs(positionRef.current) >= resetWidthRef.current) {
        positionRef.current = positionRef.current + resetWidthRef.current;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureWidth);
      cancelAnimationFrame(frameId);
    };
  }, [isHovered, speed, hoverSpeed]);

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex flex-nowrap"
        style={{ transform: "translate3d(0, 0, 0)", willChange: "transform" }}
      >
        <div className={`flex flex-nowrap shrink-0 min-w-full ${className}`}>
          {children}
        </div>
        <div className={`flex flex-nowrap shrink-0 min-w-full ${className}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
