import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const schema = z.object({
  quote: z.string().min(1, "Quote is required"),
  author: z.string().min(1, "Author is required"),
  designation: z.string().min(1, "Designation is required"),
  company: z.string().min(1, "Company is required"),
  sortOrder: z.number().default(0),
});

// GET /api/admin/testimonials
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const items = await prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(items);
}

// POST /api/admin/testimonials
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = schema.parse(body);
    const item = await prisma.testimonial.create({ data });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}

// PUT /api/admin/testimonials — Update by id (passed in body)
export async function PUT(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await req.json();
  const { id, ...data } = body;
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  const item = await prisma.testimonial.update({ where: { id }, data });
  return NextResponse.json(item);
}

// DELETE /api/admin/testimonials
export async function DELETE(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  await prisma.testimonial.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
