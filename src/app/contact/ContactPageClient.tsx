"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Send, Briefcase, LifeBuoy, Building2, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "Renewable Solutions",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get("subject");
      if (subjectParam) {
        setFormData(prev => ({ ...prev, subject: subjectParam }));
      }
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          subject: "Renewable Solutions",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-950">
      {/* 1. HERO SECTION (Dark) */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/contact.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Darker Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>

        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Get in <span className="text-primary drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Touch</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Get in touch with our engineering team for Consultations, Quotes, or Support
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* 2. CONTACT INTERFACE (Light - Split Layout) */}
      <section className="section-light py-24 bg-white rounded-t-[40px] relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* Left Column: The Form & Contact Info */}
            <div className="lg:w-3/5 flex flex-col gap-8">
              <SectionWrapper className="flex-1">
                <div className="premium-card p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
                  
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you shortly.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-medium">
                      Something went wrong. Please check your inputs and try again.
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company</label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Inquiry Type</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-700"
                      >
                        <option value="Renewable Solutions">Renewable Solutions</option>
                        <option value="PM-KUSUM">PM-KUSUM</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                      <textarea 
                        rows={4} 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all resize-none text-slate-900" 
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#0da08a] hover:bg-[#0bc0a4] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} 
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                </div>
              </SectionWrapper>

              {/* Contact Info Box (Moved beneath the form) */}
              <SectionWrapper delay={0.1}>
                <div className="bg-slate-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-0.5">Phone</h4>
                        <p className="text-slate-500 font-medium text-sm">+91 79 6926 9000</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-0.5">Email</h4>
                        <p className="text-slate-500 font-medium text-sm">info@adaptive-engg.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Right Column: Map Only */}
            <div className="lg:w-2/5 flex flex-col">
              <SectionWrapper delay={0.2} className="h-full">
                <div className="w-full h-full min-h-[400px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl group flex flex-col">
                  {/* Content Overlay */}
                  <div className="absolute top-0 left-0 w-full p-6 z-20 flex flex-col items-end text-right">
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-lg text-xs font-bold uppercase tracking-widest mb-2 border border-primary/20">
                      Installation Footprint
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">
                      68GW<span className="text-primary">+</span>
                    </h3>
                    <p className="text-gray-400 font-medium text-sm">Installed Base</p>
                  </div>

                  {/* Map Image */}
                  <div className="relative w-full h-full flex items-center justify-center pt-24 pb-6">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30"></div>
                    <img
                      src="/imgs/map.png"
                      alt="Installed Base Map"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEPARTMENT CHANNELS (Dark) */}
      <section className="section-dark py-24 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Direct Communication Channels</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Connect directly with the right department.</p>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sales & Business", desc: "For RFQs and Tenders.", email: "sales@adaptive-engg.com", icon: <Briefcase /> },
              { title: "Technical Support", desc: "For O&M and Troubleshooting.", email: "support@adaptive-engg.com", icon: <LifeBuoy /> },
              { title: "HR & Careers", desc: "Explore career opportunities.", email: "hr@adaptive-engg.com", icon: <Building2 /> }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="dark-card p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 shadow-2xl transition-all duration-300 group cursor-pointer text-center h-full">
                  <div className="mb-6 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="text-primary font-bold hover:border-primary/50 hover:shadow-xl transition-colors">
                    {item.email}
                  </a>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION (Dark) */}
      <section className="section-dark py-24 bg-transparent text-white relative z-10 -mt-10 pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 font-heading">Frequently Asked Questions</h2>
          </SectionWrapper>

          <div className="space-y-4">
            {[
              { q: "Do you handle government liaising?", a: "Yes, our Turnkey service includes end-to-end CEIG and DISCOM approvals." },
              { q: "What is the warranty on panels?", a: "Standard 25-year performance warranty on modules, 1-year on panels." },
              { q: "Is SolarWiz compatible with my existing pump?", a: "Yes, SolarWiz is retrofit-ready for most AC/DC pumps." }
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {item.a}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
