import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";

// GET /api/admin/analytics — Proxy for Google Analytics 4 Data API
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const GA_PROPERTY_ID = process.env.GA4_PROPERTY_ID;
  const GA_SERVICE_ACCOUNT_KEY = process.env.GA4_SERVICE_ACCOUNT_KEY;

  if (!GA_PROPERTY_ID || !GA_SERVICE_ACCOUNT_KEY) {
    return NextResponse.json(
      {
        error: "Google Analytics not configured",
        message: "Set GA4_PROPERTY_ID and GA4_SERVICE_ACCOUNT_KEY env vars",
      },
      { status: 503 }
    );
  }

  // TODO: Implement GA4 Data API integration
  // This will be connected when GA4 credentials are available.
  // For now, return a placeholder response.
  return NextResponse.json({
    configured: false,
    message: "GA4 integration placeholder — will be connected when credentials are provided",
    placeholder: {
      pageViews: 0,
      sessions: 0,
      users: 0,
      topPages: [],
    },
  });
}
