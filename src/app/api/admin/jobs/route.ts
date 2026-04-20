import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const jobSchema = z.object({
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  department: z.string().min(1, "Department is required"),
  type: z.string().default("Full-time"),
  description: z.string().min(1, "Description is required"),
  requirements: z.string().min(1, "Requirements are required"),
  isActive: z.boolean().default(true),
});

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// GET /api/admin/jobs — List all jobs
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { applications: true } },
    },
  });

  return NextResponse.json(jobs);
}

// POST /api/admin/jobs — Create a new job
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = jobSchema.parse(body);

    let slug = generateSlug(data.title);
    // Ensure unique slug
    const existing = await prisma.job.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const job = await prisma.job.create({
      data: { ...data, slug },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
