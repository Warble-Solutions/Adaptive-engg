import { prisma } from "@/lib/prisma";
import { BookOpen, FileText, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

async function getStats() {
  const [totalBlogs, publishedBlogs, totalBrochures, totalCaseStudies] = await Promise.all([
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { isPublished: true } }),
    prisma.brochure.count(),
    prisma.caseStudy.count(),
  ]);
  return { totalBlogs, publishedBlogs, totalBrochures, totalCaseStudies };
}

export default async function AdminDashboard() {
  const { totalBlogs, publishedBlogs, totalBrochures, totalCaseStudies } = await getStats();

  const stats = [
    {
      label: "Blog Posts",
      value: totalBlogs,
      sub: `${publishedBlogs} published`,
      icon: BookOpen,
      color: "from-violet-500 to-purple-600",
      href: "/admin/blogs",
    },
    {
      label: "Brochures",
      value: totalBrochures,
      sub: "PDF documents",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      href: "/admin/brochures",
    },
    {
      label: "Case Studies",
      value: totalCaseStudies,
      sub: "PDF documents",
      icon: Briefcase,
      color: "from-cyan-500 to-blue-600",
      href: "/admin/case-studies",
    },
  ];

  const quickActions = [
    { label: "New Blog Post", href: "/admin/blogs/new", icon: BookOpen },
    { label: "Upload Brochure", href: "/admin/brochures/new", icon: FileText },
    { label: "Upload Case Study", href: "/admin/case-studies/new", icon: Briefcase },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white font-outfit">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here&apos;s an overview of your content.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group bg-gray-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-200 hover:bg-gray-900/80"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <p className="text-gray-600 text-xs mt-1">{stat.sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-base font-semibold text-gray-300 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3 bg-gray-900/40 border border-white/10 rounded-xl px-5 py-4 text-gray-300 hover:text-white hover:border-white/25 hover:bg-gray-900/70 transition-all duration-200 text-sm font-medium"
            >
              <action.icon className="w-4 h-4 text-emerald-400" />
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
