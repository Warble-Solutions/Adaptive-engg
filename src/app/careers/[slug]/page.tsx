import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Building, Briefcase } from "lucide-react";
import SceneTrigger from "@/components/3d/SceneTrigger";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const job = await prisma.job.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} | Careers at Adaptive Engineering`,
    description: job.description.substring(0, 150),
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const job = await prisma.job.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!job || !job.isActive) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 relative selection:bg-primary/30">
      <SceneTrigger variant="solar" color="#049A89" speed={0.4} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Link 
          href="/careers"
          className="inline-flex items-center text-slate-400 hover:text-primary font-bold tracking-wide uppercase text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all openings
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Job Details Section */}
          <div className="flex-1">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight mb-8">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <MapPin className="w-4 h-4 text-primary" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <Building className="w-4 h-4 text-primary" />
                  {job.department}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  {job.type}
                </div>
              </div>
            </header>

            <div className="prose prose-lg prose-invert prose-slate max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white font-heading
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-white prose-p:leading-relaxed
              prose-li:text-white prose-li:my-2
              prose-strong:font-bold prose-strong:text-white font-heading"
            >
              <h3>About the Role</h3>
              <p className="whitespace-pre-wrap">{job.description}</p>
              
              <h3>Requirements & Qualifications</h3>
              <div className="whitespace-pre-wrap">{job.requirements}</div>
            </div>
          </div>

          {/* Application Form Section */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="sticky top-32">
              <ApplicationForm jobId={job.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
