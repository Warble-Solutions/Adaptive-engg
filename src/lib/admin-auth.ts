import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

/**
 * Verify that the current request is from an authenticated admin.
 * Use this at the top of every admin API route.
 * Returns NextResponse error if not authenticated, or the session if valid.
 */
export async function requireAdmin() {
  const session = await auth();

  if (!session?.user) {
    return {
      error: NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      ),
      session: null,
    };
  }

  return { error: null, session };
}
