// Seed script to create the initial admin account
// Run with: npx tsx prisma/seed.ts

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@adaptive-engg.com";
  const password = process.env.ADMIN_PASSWORD || "changeme123";
  const name = "Admin";

  // Check if admin already exists
  const existing = await prisma.admin.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin already exists: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.create({
    data: { email, passwordHash, name },
  });

  console.log(`✅ Admin created: ${email}`);
  console.log(`⚠️  Default password: ${password}`);
  console.log(`🔒 Change this immediately after first login!`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
