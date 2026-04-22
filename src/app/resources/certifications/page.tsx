import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, FileCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Certifications | Adaptive Engineering",
  description:
    "ISO 9001:2015 certified. ERDA type-tested panels. Schneider-Electric authorized integrators. View our quality certifications and test reports.",
};

const isoCerts = [
  {
    title: "ISO 9001:2015",
    issuer: "TUV NORD",
    desc: "Quality Management System certification for design, manufacturing, and commissioning of electrical panels and SCADA systems.",
    image: "/imgs/certificates/Adaptive-Engineering-Pvt-Ltd-Iso9001-1-png.avif",
  },
];

const erdaReports = [
  {
    title: "ERDA 65kA Short Circuit Test",
    desc: "Type test report certifying our panels withstand 65kA short circuit current as per IS/IEC 61439 standards.",
    image: "/imgs/certificates/65KA-ERDA_page-0001-scaled.jpg.webp",
  },
  {
    title: "ERDA 50kA Short Circuit Test",
    desc: "Type test report for 50kA fault level rated panels tested at ERDA's NABL accredited laboratory.",
    image: "/imgs/certificates/ERDA-50KA_page-0001-scaled.jpg.webp",
  },
  {
    title: "ERDA Temperature Rise Test",
    desc: "Temperature rise test report verifying thermal performance of busbars and switchgear components under full load conditions.",
    image:
      "/imgs/certificates/ERDA-TEST-REPORT-TEMPERATURE-RISE-TEST_page-0001-scaled.jpg.webp",
  },
  {
    title: "ERDA IP55 Protection Test (Page 1)",
    desc: "Ingress Protection test report certifying IP55 rating — dust-protected and water jet resistant enclosures.",
    image: "/imgs/certificates/ERDA-Report-IP-55_page-0001-scaled.jpg.webp",
  },
  {
    title: "ERDA IP55 Protection Test (Page 2)",
    desc: "Continued test methodology and results for IP55 ingress protection verification.",
    image: "/imgs/certificates/ERDA-Report-IP-55_page-0002-scaled.jpg.webp",
  },
  {
    title: "ERDA IP55 Protection Test (Page 3)",
    desc: "Final observations and compliance declaration for IP55 protection rating.",
    image: "/imgs/certificates/ERDA-Report-IP-55_page-0003-scaled.jpg.webp",
  },
];

const awards = [
  {
    title: "Schneider-Electric Authorized System Integrator",
    desc: "Recognized partner for Schneider-Electric's industrial automation, SCADA, and power distribution solutions across India.",
    image: "/imgs/certificates/Schneider-SI-1-2048x1485.png.webp",
  },
  {
    title: "Solar Monitoring Company of the Year 2019",
    issuer: "ET Now",
    desc: "Awarded for excellence in solar plant remote monitoring and SCADA solutions by ET Now at the Solar Industry Awards.",
    image:
      "/imgs/certificates/Solar-Monitoring-Company-Of-The-Year-2019-1.jpg.webp",
  },
];

export default function CertificationsPage() {
  return (
    <div className="flex flex-col w-full">
      <SceneTrigger variant="logo" color="#0da08a" speed={0.5} />

      {/* HERO */}
      <section className="section-hero relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        </div>
        <div className="z-10 max-w-7xl relative">
          <SectionWrapper>
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30 shadow-lg">
              Quality Assurance
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Certifications &amp; Test Reports
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 shadow-2xl">
              Every panel we manufacture is type-tested and certified. Our
              commitment to quality is backed by ISO standards, ERDA test
              reports, and industry recognitions.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white rounded-t-[40px] relative z-20 -mt-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-3xl font-black text-slate-900">
                  ISO 9001
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  Quality Management
                </div>
              </div>
              <div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Zap className="w-7 h-7" />
                </div>
                <div className="text-3xl font-black text-slate-900">65kA</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  Max Fault Rating Tested
                </div>
              </div>
              <div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  <FileCheck className="w-7 h-7" />
                </div>
                <div className="text-3xl font-black text-slate-900">IP55</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  Protection Rating
                </div>
              </div>
              <div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <div className="text-3xl font-black text-slate-900">ERDA</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  Type Test Certified
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">
                ISO Certifications
              </h2>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {isoCerts.map((cert, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl border border-teal-100 shadow-lg overflow-hidden group hover:bg-[#0da08a] shadow-2xl transition-shadow">
                  <div className="relative w-full aspect-[3/4] bg-white">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 group-hover:bg-[#0da08a] scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      {cert.issuer}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ERDA Test Reports */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-white font-heading">
                ERDA Type Test Reports
              </h2>
            </div>
            <p className="text-gray-400 max-w-3xl mb-12 text-lg">
              All our electrical panels are type-tested at ERDA (Electrical
              Research and Development Association), a NABL accredited laboratory
              recognized by the Bureau of Indian Standards.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erdaReports.map((report, i) => (
              <SectionWrapper key={i} delay={i * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:bg-[#0da08a] border-primary/30 hover:bg-[#0da08a] -translate-y-2 hover:bg-[#0da08a] shadow-2xl transition-all duration-300">
                  <div className="relative w-full aspect-[3/4] bg-white/5">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      className="object-contain p-3 group-hover:bg-[#0da08a] scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {report.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-24 bg-white rounded-t-[40px] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-heading">
                Awards &amp; Recognitions
              </h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {awards.map((award, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-lg overflow-hidden group hover:bg-[#0da08a] shadow-2xl transition-shadow">
                  <div className="relative w-full aspect-[16/10] bg-white">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-contain p-6 group-hover:bg-[#0da08a] scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    {award.issuer && (
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                        {award.issuer}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {award.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent text-center relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Need Our Certification Documents?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Contact us to request detailed test reports and certification
              copies for your project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-[#0da08a] bg-primary hover:bg-[#0da08a] transition-colors"
            >
              Request Documents <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
