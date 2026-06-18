import { prisma } from "@/lib/prisma";
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Us | Adaptive Engineering",
  description: "Three decades of engineering excellence.",
};

export default async function Page() {
  const team = await prisma.teamMember.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return <AboutPageClient team={team} />;
}
