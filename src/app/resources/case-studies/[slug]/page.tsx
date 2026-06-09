import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { staticCaseStudies } from "@/lib/staticCaseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticStudy = staticCaseStudies.find((s) => s.slug === slug);
  if (staticStudy) {
    return {
      title: `${staticStudy.title} | Adaptive Engineering`,
      description: staticStudy.description || "Read our project case study.",
    };
  }

  try {
    const dbStudy = await prisma.caseStudy.findUnique({
      where: { slug },
    });

    if (dbStudy) {
      return {
        title: `${dbStudy.title} | Adaptive Engineering`,
        description: dbStudy.description || "Read our project case study.",
      };
    }
  } catch (error) {
    console.error("Failed to fetch case study metadata from database:", error);
  }

  return {
    title: "Case Study | Adaptive Engineering",
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticStudy = staticCaseStudies.find((s) => s.slug === slug);

  if (staticStudy) {
    return <CaseStudyDetailClient caseStudy={staticStudy} />;
  }

  try {
    const dbStudy = await prisma.caseStudy.findUnique({
      where: { slug },
    });

    if (dbStudy) {
      const study = {
        id: dbStudy.id,
        title: dbStudy.title,
        slug: dbStudy.slug,
        thumbnailUrl: dbStudy.thumbnailUrl,
        pdfUrl: dbStudy.pdfUrl,
        description: dbStudy.description,
        category: dbStudy.category,
        sortOrder: dbStudy.sortOrder,
      };

      return <CaseStudyDetailClient caseStudy={study} />;
    }
  } catch (error) {
    console.error("Failed to fetch case study page from database:", error);
  }

  notFound();
}
