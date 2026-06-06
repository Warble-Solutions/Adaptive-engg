import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin — Adaptive Engineering",
  description: "Admin dashboard for Adaptive Engineering",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
