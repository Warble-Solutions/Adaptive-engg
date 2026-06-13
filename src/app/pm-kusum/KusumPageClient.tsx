"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Download, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish, faFileInvoice, faNetworkWired, faTasks, faBolt, faShieldAlt, faSolarPanel, faSun, faCheckCircle, faWifi } from "@fortawesome/free-solid-svg-icons";
import MicroCTA from "@/components/ui/MicroCTA";
import ActionBadge from "@/components/ui/ActionBadge";
import SectionWrapper from "@/components/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";

export default function KusumPageClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API submission
    console.log("Saving user details for PM-KUSUM brochure download:", formData);

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/brochures/Solarwiz-Brochure_19062025.pdf";
    link.download = "Solarwiz-Brochure_19062025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message briefly before closing
    setIsSubmitted(true);
    setTimeout(() => {
      setIsPopupOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: ""
      });
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full bg-slate-950">
      {/* 1. HERO SECTION (Dark) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[url('/imgs/pm-kusum/pm_kusum_banner.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 mix-blend-multiply z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-teal-500/20 backdrop-blur-sm text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/30 shadow-lg">
              MNRE Compliant
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              PM-KUSUM <span className="text-primary drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Solutions</span>
            </h1>

            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              End-to-end Remote Monitoring (RMS) & Automation solutions
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. SCHEME OVERVIEW (Light) */}
      <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col">
              <SectionWrapper className="h-full flex flex-col justify-between">
                <div className="flex flex-col h-full justify-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50/80 text-teal-600 rounded-lg text-xs font-black uppercase tracking-wider mb-4 border border-teal-100">
                      Scheme Overview
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">PM-KUSUM Scheme</h2>
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                      PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) Scheme, launched in 2019, is aimed at ensuring energy security for farmers in India, along with honouring India’s commitment to increase the share of installed capacity of electric power from non-fossil-fuel sources to 40% by 2030 as part of Intended Nationally Determined Contributions (INDCs).
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm md:text-base">
                      The scheme was extended until March 2026, with a total central financial allocation of Rs. 34,422 crore.
                    </p>

                    {/* Key Objectives to fill space */}
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <h4 className="text-xs font-black uppercase tracking-wider text-teal-600 mb-4 font-mono">
                        Key Pillars
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 group">
                          <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#0da08a] flex items-center justify-center shrink-0 border border-teal-100 group-hover:bg-[#0da08a] group-hover:text-white transition-all duration-300">
                            <span className="text-xs font-mono font-bold">01</span>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900">De-dieselization of Farm Sector</h5>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              Replacing expensive, polluting diesel pump sets with clean, reliable solar energy solutions.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                          <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#0da08a] flex items-center justify-center shrink-0 border border-teal-100 group-hover:bg-[#0da08a] group-hover:text-white transition-all duration-300">
                            <span className="text-xs font-mono font-bold">02</span>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900">Water & Energy Security</h5>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              Ensuring uninterrupted daytime power supply for irrigation, reducing reliance on the unstable grid.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                          <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#0da08a] flex items-center justify-center shrink-0 border border-teal-100 group-hover:bg-[#0da08a] group-hover:text-white transition-all duration-300">
                            <span className="text-xs font-mono font-bold">03</span>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900">Farmers' Income Generation</h5>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              Enabling farmers to generate additional income by selling surplus solar power back to state utilities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            <div className="flex flex-col h-full justify-between">
              <SectionWrapper delay={0.2} className="h-full flex flex-col justify-between">
                <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Subtle top glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Scheme Impact</span>
                    <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                      PM-KUSUM Footprint
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      
                      {/* Stat 1 */}
                      <div className="p-4 bg-white/[0.02] border border-slate-800/40 rounded-2xl">
                        <span className="text-2xl md:text-3xl font-black text-primary font-mono block mb-1">
                          20+
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          States Benefitting
                        </span>
                      </div>

                      {/* Stat 2 */}
                      <div className="p-4 bg-white/[0.02] border border-slate-800/40 rounded-2xl">
                        <span className="text-2xl md:text-3xl font-black text-primary font-mono block mb-1">
                          3.5L+
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Farmers Benefitting
                        </span>
                      </div>

                      {/* Stat 3 */}
                      <div className="p-4 bg-white/[0.02] border border-slate-800/40 rounded-2xl">
                        <span className="text-2xl md:text-3xl font-black text-teal-400 font-mono block mb-1">
                          5GW+
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Total PM-KUSUM Installed Base
                        </span>
                      </div>

                      {/* Stat 4 */}
                      <div className="p-4 bg-white/[0.02] border border-slate-800/40 rounded-2xl">
                        <span className="text-2xl md:text-3xl font-black text-teal-400 font-mono block mb-1">
                          1.8GW+
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          AEPL PM-KUSUM Capacity
                        </span>
                      </div>

                    </div>

                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-6 font-medium">
                      Adaptive Engineering Pvt. Ltd. is a key contributor to MNRE's agricultural solarization objectives, supplying compliant edge RTUs, remote monitoring software, and distribution panelboards across all components.
                    </p>
                  </div>

                  <a 
                    href="https://pmkusum.mnre.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white hover:gap-3 transition-all font-mono mt-8 border-t border-slate-850 pt-6 z-10"
                  >
                    MNRE Official PM-KUSUM Portal <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>
 
      {/* AEPL CAPABILITIES STATS (Dark) */}
      <section className="py-20 bg-slate-950 border-y border-white/5 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: "17+", label: "Years of Experience" },
              { value: "68GW+", label: <>Total Monitored<br />Capacity</> },
              { value: "10,000+", label: "Electric Panels Supplied" },
              { value: "125,000+", label: "Sq.ft. Manufacturing Facility" },
              { value: "100+", label: "Satisfied Customers" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-teal-500/30 hover:bg-white/[0.03] transition-all duration-300">
                <span className="text-3xl md:text-4xl font-black text-teal-400 mb-2 font-mono tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. END-TO-END PM-KUSUM STACK (Combined) */}
      <section className="section-dark py-32 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400 font-heading mb-4">End-to-End PM-KUSUM Stack</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Unified solution from IoT Sensors to State-Level Dashboards.</p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "IoT SCADA (RMS)",
                desc: "Edge computing device with Store & Forward capability.",
                icon: faSatelliteDish,
                href: "/pm-kusum/iot-scada"
              },
              {
                title: "ReportWiz",
                desc: "Automated JMR generation and subsidy compliance reports.",
                icon: faFileInvoice,
                href: "/pm-kusum/reportwiz"
              },
              {
                title: "Central Monitoring System (CMS)",
                desc: "Unified portfolio view for State Agencies & Developers.",
                icon: faNetworkWired,
                href: "/pm-kusum/cms"
              },
              {
                title: "Asset Management System (AMS)",
                desc: "Workorder ticketing and inventory tracking.",
                icon: faTasks,
                href: "/pm-kusum/ams"
              },
              {
                title: "HT Panel",
                desc: "11kV/33kV Vacuum Circuit Breakers (VCB) for substations.",
                icon: faBolt,
                href: "/pm-kusum/ht-panel"
              },
              {
                title: "ACDB Panels",
                desc: "IP65 protection for 800V & 415V pump connections.",
                icon: faShieldAlt,
                href: "/pm-kusum/acdb-panels"
              }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <Link href={item.href} className="block h-full">
                  <div className="dark-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 hover:shadow-xl shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col items-start hover:-translate-y-2">
                    <div className="mb-6 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-white group-hover:text-[#0da08a] transition-all duration-300">
                      <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white transition-colors leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-teal-50 transition-colors mb-6 flex-grow">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary mt-auto group-hover:text-white group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <SectionWrapper delay={0.4}>
              <div className="flex gap-6">
                <MicroCTA 
                  text="Download Brochure" 
                  variant="download" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPopupOpen(true);
                  }}
                />
                <MicroCTA text="Get Quote" variant="quote" href="/contact" />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>


      {/* FEATURES & BENEFITS (Light) */}
      <section className="py-24 bg-white text-slate-900 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50/80 text-teal-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-100 shadow-sm">
                <Sun className="w-4 h-4" />
                <span>Core Advantages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-heading mb-4">Features & Benefits</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm">
                Empowering farmers and solar developers with next-generation remote monitoring and compliance.
              </p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <FontAwesomeIcon icon={faWifi} className="w-6 h-6 text-teal-600" />,
                title: "Monitor from Anywhere",
                desc: "100% remote visibility of solar pump metrics, flow rates, and generation stats on mobile or desktop."
              },
              {
                icon: <FontAwesomeIcon icon={faTasks} className="w-6 h-6 text-teal-600" />,
                title: "Analyse Performance",
                desc: "Calculate accurate Performance Ratio (PR) and isolate performance anomalies in real time."
              },
              {
                icon: <FontAwesomeIcon icon={faFileInvoice} className="w-6 h-6 text-teal-600" />,
                title: "In-built Reports Library",
                desc: "Generate compliance reports and Joint Meter Readings (JMR) with a single click."
              },
              {
                icon: <FontAwesomeIcon icon={faNetworkWired} className="w-6 h-6 text-teal-600" />,
                title: "Third-party Integration",
                desc: "Connect seamlessly with localized SCADA systems, DISCOM portals, and SLDC RTUs."
              },
              {
                icon: <FontAwesomeIcon icon={faSolarPanel} className="w-6 h-6 text-teal-600" />,
                title: "Multi-plant O&M",
                desc: "Manage multiple pump installations and geographic clusters under a unified O&M schedule."
              }
            ].map((feat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-500/40 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col group shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-115 transition-transform duration-300 border border-teal-100/50">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{feat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">{feat.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL COMPLIANCE (Dark) */}
      <section className="section-dark py-24 bg-transparent text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/30">
                  <FontAwesomeIcon icon={faShieldAlt} className="w-4 h-4" />
                  <span>Certified Secure</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 font-heading">MNRE & Utility Compliant</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our solution is engineered to meet the strictest standards set by the Ministry of New and Renewable Energy (MNRE) and State Utilities, guaranteeing approved telemetry and data logging.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-gray-300">
                    IEC 60870-5-104 Ready
                  </div>
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-gray-300">
                    MeitY Hosting
                  </div>
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-gray-300">
                    DNP3 Secure
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
                <ul className="space-y-6">
                  {[
                    "Fully compliant with MNRE Guidelines for Component A, B, and C",
                    "Seamless data integration with State Nodal Agencies (SNA)",
                    "Secure Modbus TCP/IP & MQTT communication protocols",
                    "Role-Based Access Control (RBAC) for data security",
                    "Automated JMR and Subsidy Report Generation",
                    "Real-time alerts for communication failures or tampering"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 w-5 h-5 mt-1 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>



      {/* 6. CTA (Light) */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Partner for PM-KUSUM?</h2>
            <p className="text-gray-400 mb-8 text-lg">We support EPCs and Developers with end-to-end RMS & Hardware.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>

      {/* Glassmorphic Download Popup Form Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setIsPopupOpen(false)}
            ></motion.div>

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 max-w-md w-full shadow-2xl z-10 overflow-hidden text-slate-200"
            >
              {/* Decorative radial light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 shadow-lg shadow-teal-500/10">
                    <Download className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400 text-sm">Your download should start automatically.</p>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Brochure Download Portal</span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug pr-8">
                    PM-KUSUM Solutions Brochure
                  </h3>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                    Please provide your contact information to access the document.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Company *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Role / Title</label>
                        <input 
                          type="text" 
                          value={formData.designation}
                          onChange={(e) => setFormData({...formData, designation: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(13,160,138,0.15)] transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-primary hover:bg-teal-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Submit & Download</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
