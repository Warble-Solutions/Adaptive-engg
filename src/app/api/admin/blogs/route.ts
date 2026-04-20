import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  thumbnailUrl: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional(),
  author: z.string().default("Adaptive Engineering"),
  isPublished: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// GET /api/admin/blogs — List all blog posts (admin)
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

// POST /api/admin/blogs — Create a new blog post
export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await req.json();
    const data = schema.parse(body);
    let slug = generateSlug(data.title);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) slug = `${slug}-${Date.now()}`;

    const post = await prisma.blogPost.create({ data: { ...data, slug } });
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
