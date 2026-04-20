import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const applySchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  resumeUrl: z.string().min(1, "Resume is required"),
  coverLetter: z.string().optional(),
});

// POST /api/careers/apply — Public job application submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = applySchema.parse(body);

    // Verify the job exists and is active
    const job = await prisma.job.findUnique({ where: { id: data.jobId } });
    if (!job || !job.isActive) {
      return NextResponse.json(
        { error: "Job posting not found or no longer active" },
        { status: 404 }
      );
    }

    const application = await prisma.jobApplication.create({ data });

    // TODO: Send email notification to HR
    // await sendEmail({ to: "hr@adaptive-engg.com", subject: `New Application: ${job.title}`, ... })

    return NextResponse.json(
      { success: true, id: application.id },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
