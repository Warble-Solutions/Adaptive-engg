import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

// GET /api/admin/applications — List all applications
export async function GET(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const jobId = searchParams.get("jobId");

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (jobId) where.jobId = jobId;

  const applications = await prisma.jobApplication.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      job: { select: { title: true, slug: true } },
    },
  });

  return NextResponse.json(applications);
}
