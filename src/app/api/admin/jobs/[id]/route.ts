import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const updateJobSchema = z.object({
  title: z.string().min(1).optional(),
  location: z.string().min(1).optional(),
  department: z.string().min(1).optional(),
  type: z.string().optional(),
  description: z.string().min(1).optional(),
  requirements: z.string().min(1).optional(),
  isActive: z.boolean().optional(),
});

// GET /api/admin/jobs/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const job = await prisma.job.findUnique({
    where: { id },
    include: {
      applications: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
}

// PUT /api/admin/jobs/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id } = await params;
    const body = await req.json();
    const data = updateJobSchema.parse(body);

    const job = await prisma.job.update({
      where: { id },
      data,
    });

    return NextResponse.json(job);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

// DELETE /api/admin/jobs/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  try {
    await prisma.job.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
