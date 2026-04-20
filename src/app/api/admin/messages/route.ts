import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

// GET /api/admin/messages — List all contact messages
export async function GET(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(req.url);
  const isRead = searchParams.get("isRead");

  const where: Record<string, unknown> = {};
  if (isRead !== null) where.isRead = isRead === "true";

  const messages = await prisma.contactMessage.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);
}
