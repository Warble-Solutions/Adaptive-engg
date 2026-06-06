import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import AdminSidebar from "@/components/admin/AdminSidebar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin — Adaptive Engineering",
  description: "Admin dashboard for Adaptive Engineering",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <div className="flex min-h-screen bg-gray-950">
          <AdminSidebar />
          <main className="flex-1 ml-64 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
