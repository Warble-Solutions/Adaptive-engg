import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import DeleteButton from "@/components/admin/DeleteButton";
import { format } from "date-fns";

export default async function AdminBlogsPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-outfit">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} total posts</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {/* Table */}
      {posts.length === 0 ? (
        <div className="bg-gray-900/40 border border-white/10 rounded-2xl px-8 py-16 text-center">
          <p className="text-gray-400 text-sm">No blog posts yet.</p>
          <Link href="/admin/blogs/new" className="text-emerald-400 text-sm hover:underline mt-2 inline-block">
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="bg-gray-900/40 border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-3.5 font-medium">Title</th>
                <th className="text-left px-5 py-3.5 font-medium">Author</th>
                <th className="text-left px-5 py-3.5 font-medium">Status</th>
                <th className="text-left px-5 py-3.5 font-medium">Date</th>
                <th className="text-right px-5 py-3.5 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-white/3 transition-colors group">
                  <td className="px-5 py-4">
                    <p className="text-white font-medium line-clamp-1">{post.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">/resources/blogs/{post.slug}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-400">{post.author}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        post.isPublished
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                          : "bg-gray-700/50 text-gray-400 border border-white/10"
                      }`}
                    >
                      {post.isPublished ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      {post.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-xs">
                    {format(new Date(post.createdAt), "MMM d, yyyy")}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/admin/blogs/${post.id}/edit`}
                        className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <DeleteButton
                        id={post.id}
                        endpoint="/api/admin/blogs"
                        label="blog post"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
