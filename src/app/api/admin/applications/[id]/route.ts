import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const updateSchema = z.object({
  status: z.enum(["new", "reviewed", "shortlisted", "rejected"]),
});

// PUT /api/admin/applications/[id] — Update application status
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = updateSchema.parse(body);

    const application = await prisma.jobApplication.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(application);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}
