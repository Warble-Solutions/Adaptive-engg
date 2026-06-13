import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ShieldCheck, Award, FileText, HelpCircle } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import { panelsSolutionsData } from "@/lib/panelsSolutionsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render all 10 panels solution pages at build time
export async function generateStaticParams() {
  return Object.keys(panelsSolutionsData).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = panelsSolutionsData[resolvedParams.slug];

  if (!product) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${product.title} | Engineered Panel Solutions | AEPL`,
    description: product.description.substring(0, 150),
  };
}

export default async function PanelDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = panelsSolutionsData[resolvedParams.slug];

  if (!product) {
    notFound();
  }

  // Check if FAT (Factory Acceptance Test) is featured in this product
  const hasFAT = product.title.includes("PLC") || product.title.includes("Automation");

  return (
    <main className="min-h-screen pt-32 pb-24 relative selection:bg-primary/30 text-white bg-slate-950">
      <SceneTrigger variant="solar" color="#0da08a" speed={0.4} />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Navigation Breadcrumb / Back Link */}
        <Link 
          href="/renewable/panels"
          className="inline-flex items-center text-slate-400 hover:text-primary font-bold tracking-wide uppercase text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all Panels
        </Link>

        {/* Hero Area */}
        <header className="mb-16">
          <SectionWrapper>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              <Award className="w-4 h-4" />
              <span>Engineered Panels &amp; Systems</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white font-heading tracking-tight leading-tight mb-4">
              {product.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#0da08a] font-bold font-mono tracking-wide">
              {product.subtitle}
            </p>
          </SectionWrapper>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Description, Features and Details */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Overview */}
            <SectionWrapper>
              <h3 className="text-2xl font-extrabold text-white mb-4 font-heading border-b border-slate-800 pb-3">
                Product Overview
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {product.description}
              </p>
            </SectionWrapper>

            {/* Key Features */}
            <SectionWrapper delay={0.1}>
              <h3 className="text-2xl font-extrabold text-white mb-6 font-heading border-b border-slate-800 pb-3">
                Key Features &amp; Protections
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-primary/20 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm font-semibold leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* Applications & Special Notes */}
            {product.details.length > 0 && (
              <SectionWrapper delay={0.2}>
                <h3 className="text-2xl font-extrabold text-white mb-4 font-heading border-b border-slate-800 pb-3">
                  Applications &amp; Details
                </h3>
                <ul className="space-y-4">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300 text-base leading-relaxed font-medium">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </SectionWrapper>
            )}

            {/* Factory Acceptance Test (FAT) Box */}
            {hasFAT && (
              <SectionWrapper delay={0.3}>
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xl shadow-primary/5">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading mb-1">
                      Factory Acceptance Test (FAT) Facility
                    </h4>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed">
                      We host complete testing and system simulation protocols at our manufacturing premises, allowing clients to test and verify logical run-throughs and safety redundancies prior to dispatch.
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            )}
          </div>

          {/* Right Column: Technical Specifications & CTA */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            {/* Product Image Card */}
            <SectionWrapper delay={0.1}>
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative group aspect-[4/3] flex items-center justify-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </SectionWrapper>

            {/* Specifications Card */}
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Technical Specifications
                </h3>
                
                <div className="divide-y divide-slate-800">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="py-4 flex justify-between gap-4 text-sm font-medium">
                      <span className="text-slate-400 font-semibold">{spec.label}</span>
                      <span className="text-white text-right font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>

        {/* Full-width Quick Contact CTA Card at the bottom */}
        <SectionWrapper delay={0.3}>
          <div className="bg-gradient-to-r from-[#0da08a]/15 via-[#0da08a]/5 to-transparent border border-[#0da08a]/25 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl mt-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 bg-[#0da08a]/20 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg border border-[#0da08a]/20">
                <HelpCircle className="w-7 h-7 text-[#0da08a]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl md:text-2xl font-bold text-white font-heading">
                  Need Custom Configurations?
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                  Our panel engineers can custom-tailor dimensions, compartment sizes, and protection devices matching your specific project requirements.
                </p>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center w-full md:w-auto bg-[#0da08a] hover:bg-[#0da08a]/80 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-teal-500/20 uppercase tracking-wider text-xs font-heading shrink-0 whitespace-nowrap cursor-pointer hover:scale-105 duration-200"
            >
              Consult Panel Engineers
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
}
