import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  thumbnailUrl: z.string().min(1, "Thumbnail is required"),
  pdfUrl: z.string().min(1, "PDF URL is required"),
  description: z.string().optional(),
  category: z.string().optional(),
  sortOrder: z.number().default(0),
});

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// GET /api/admin/case-studies
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const items = await prisma.caseStudy.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(items);
}

// POST /api/admin/case-studies
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = schema.parse(body);
    let slug = generateSlug(data.title);
    const existing = await prisma.caseStudy.findUnique({ where: { slug } });
    if (existing) slug = `${slug}-${Date.now()}`;

    const item = await prisma.caseStudy.create({ data: { ...data, slug } });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create case study" }, { status: 500 });
  }
}
