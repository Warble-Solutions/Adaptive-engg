import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";
import { deleteFromR2, getR2KeyFromUrl } from "@/lib/r2";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  photoUrl: z.string().optional(),
  department: z.string().optional(),
  bio: z.string().optional(),
  linkedinUrl: z.string().optional(),
  sortOrder: z.number().default(0),
});

// GET /api/admin/team
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const items = await prisma.teamMember.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(items);
}

// POST /api/admin/team
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = schema.parse(body);
    const item = await prisma.teamMember.create({ data });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create team member" }, { status: 500 });
  }
}

// PUT /api/admin/team
export async function PUT(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await req.json();
  const { id, ...data } = body;
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  const item = await prisma.teamMember.update({ where: { id }, data });
  return NextResponse.json(item);
}

// DELETE /api/admin/team
export async function DELETE(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  try {
    const item = await prisma.teamMember.findUnique({ where: { id } });
    if (item?.photoUrl) await deleteFromR2(getR2KeyFromUrl(item.photoUrl)).catch(() => {});
    await prisma.teamMember.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
