import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";
import { deleteFromR2, getR2KeyFromUrl } from "@/lib/r2";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  imageUrl: z.string().min(1, "Image is required"),
  sortOrder: z.number().default(0),
});

// GET /api/admin/certifications
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const items = await prisma.certification.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(items);
}

// POST /api/admin/certifications
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = schema.parse(body);
    const item = await prisma.certification.create({ data });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create certification" }, { status: 500 });
  }
}

// DELETE /api/admin/certifications — Delete by id (passed as query param)
export async function DELETE(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  try {
    const item = await prisma.certification.findUnique({ where: { id } });
    if (item?.imageUrl) await deleteFromR2(getR2KeyFromUrl(item.imageUrl)).catch(() => {});
    await prisma.certification.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
