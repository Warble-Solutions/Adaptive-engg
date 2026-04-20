import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// POST /api/contact — Public contact form submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const message = await prisma.contactMessage.create({ data });

    // TODO: Send email notification to admin
    // await sendEmail({ to: "info@adaptive-engg.com", subject: `New Contact: ${data.subject}`, ... })

    return NextResponse.json(
      { success: true, id: message.id },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit message" },
      { status: 500 }
    );
  }
}
