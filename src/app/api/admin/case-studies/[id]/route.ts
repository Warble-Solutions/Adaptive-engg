import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { deleteFromR2, getR2KeyFromUrl } from "@/lib/r2";

// PUT /api/admin/case-studies/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const body = await req.json();

  const item = await prisma.caseStudy.update({ where: { id }, data: body });
  return NextResponse.json(item);
}

// DELETE /api/admin/case-studies/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  try {
    const item = await prisma.caseStudy.findUnique({ where: { id } });
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Clean up R2 files
    if (item.pdfUrl) await deleteFromR2(getR2KeyFromUrl(item.pdfUrl)).catch(() => {});
    if (item.thumbnailUrl) await deleteFromR2(getR2KeyFromUrl(item.thumbnailUrl)).catch(() => {});

    await prisma.caseStudy.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
