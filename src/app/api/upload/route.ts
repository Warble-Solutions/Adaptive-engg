import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { uploadToR2, generateUniqueFilename } from "@/lib/r2";

const ALLOWED_TYPES: Record<string, string[]> = {
  image: ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"],
  document: ["application/pdf"],
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// POST /api/upload — Upload file to R2
export async function POST(req: NextRequest) {
  // Check if public upload (resumes) or admin-only
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder") || "uploads";
  const isPublicUpload = folder === "resumes";

  if (!isPublicUpload) {
    const { error } = await requireAdmin();
    if (error) return error;
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedMimes = [...ALLOWED_TYPES.image, ...ALLOWED_TYPES.document];
    if (!allowedMimes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPEG, PNG, WebP, AVIF, GIF, PDF" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = generateUniqueFilename(file.name);
    const key = `${folder}/${filename}`;

    const url = await uploadToR2(buffer, key, file.type);

    return NextResponse.json({ url, key, filename });
  } catch {
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
