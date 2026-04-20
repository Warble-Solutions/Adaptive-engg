import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

// PUT /api/admin/messages/[id] — Mark message as read/unread
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const body = await req.json();

  const message = await prisma.contactMessage.update({
    where: { id },
    data: { isRead: body.isRead ?? true },
  });

  return NextResponse.json(message);
}

// DELETE /api/admin/messages/[id] — Delete a message
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  try {
    await prisma.contactMessage.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
