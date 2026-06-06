import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { deleteFromR2, getR2KeyFromUrl } from "@/lib/r2";
import { z } from "zod";

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  thumbnailUrl: z.string().optional(),
  content: z.string().min(1).optional(),
  excerpt: z.string().optional(),
  author: z.string().optional(),
  isPublished: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

// GET /api/admin/blogs/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });

  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

// PUT /api/admin/blogs/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  try {
    const body = await req.json();
    const data = updateSchema.parse(body);
    const post = await prisma.blogPost.update({ where: { id }, data });
    return NextResponse.json(post);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 });
  }
}

// DELETE /api/admin/blogs/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  try {
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Clean up R2 thumbnail if it exists and is an R2 URL
    if (post.thumbnailUrl && post.thumbnailUrl.includes(process.env.R2_PUBLIC_URL || "")) {
      try {
        await deleteFromR2(getR2KeyFromUrl(post.thumbnailUrl));
      } catch {
        // Non-fatal — proceed with DB deletion even if R2 cleanup fails
      }
    }

    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
