import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Journey | Adaptive Engineering",
  description: "India's Most Trusted Company — here is how we got here.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1920&q=80" alt="Our Journey Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/35 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/40 shadow-lg">
              History
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Our <span className="gradient-heading">Journey</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              India&apos;s Most Trusted Company
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Milestones That Define Us */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-[1700px] mx-auto px-6 text-center">
          <div className="mb-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Milestones That Define Us</h2>
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

      {/* Our Strategic Roadmap */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 font-heading">Our Strategic Roadmap</h2>
                <p className="text-lg text-gray-400 leading-relaxed font-medium mb-8">
                  As Adaptive Engineering accelerates its growth, our strategic roadmap focuses on three key pillars: expanding our footprint to international markets, engineering smart grid automation systems, and developing next-generation IoT software platforms. Supported by our exceptional track record in turnkey execution, we continue to engineer the digital and electrical infrastructure of tomorrow.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="premium-card p-10 bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-white mb-1">68GW+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Installed Base</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">500+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Plants Monitored</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">1000+</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Completed Projects</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to Write the Next Chapter?</h2>
            <p className="text-gray-400 mb-8 text-lg">Partner with us to build the future of energy and infrastructure.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0da08a] text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
