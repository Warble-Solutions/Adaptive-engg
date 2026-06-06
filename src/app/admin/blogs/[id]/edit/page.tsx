"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import FileUploader from "@/components/admin/FileUploader";
import dynamic from "next/dynamic";
import { use } from "react";

const TipTapEditor = dynamic(() => import("@/components/admin/TipTapEditor"), { ssr: false });

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  author: string;
  thumbnailUrl: string | null;
  content: string;
  tags: string[];
  isPublished: boolean;
}

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    author: "Adaptive Engineering",
    thumbnailUrl: "",
    content: "",
    tags: "",
    isPublished: false,
  });

  useEffect(() => {
    fetch(`/api/admin/blogs/${id}`)
      .then((r) => r.json())
      .then((post: BlogPost) => {
        setForm({
          title: post.title,
          excerpt: post.excerpt || "",
          author: post.author,
          thumbnailUrl: post.thumbnailUrl || "",
          content: post.content,
          tags: post.tags.join(", "),
          isPublished: post.isPublished,
        });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog post");
        setLoading(false);
      });
  }, [id]);

  const set = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const payload = {
      title: form.title,
      excerpt: form.excerpt,
      author: form.author,
      thumbnailUrl: form.thumbnailUrl,
      content: form.content,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      isPublished: form.isPublished,
    };

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update post");
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/blogs" className="text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white font-outfit">Edit Blog Post</h1>
          <p className="text-gray-500 text-sm mt-0.5">Update article content and settings</p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400">Excerpt</label>
              <textarea
                rows={2}
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all resize-none"
              />
            </div>
          </div>

          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 space-y-3">
            <label className="text-sm font-medium text-gray-400">Content *</label>
            {!loading && (
              <TipTapEditor
                content={form.content}
                onChange={(html) => set("content", html)}
              />
            )}
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-300">Publish</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={form.isPublished}
                  onChange={(e) => set("isPublished", e.target.checked)}
                />
                <div className={`w-10 h-5.5 rounded-full transition-colors ${form.isPublished ? "bg-emerald-500" : "bg-gray-700"}`} />
                <div className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full bg-white shadow transition-transform ${form.isPublished ? "translate-x-4.5" : ""}`} />
              </div>
              <span className="text-sm text-gray-300">
                {form.isPublished ? "Live — visible to public" : "Draft — not visible"}
              </span>
            </label>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !form.title || !form.content}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              Save Changes
            </button>
          </div>

          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-300">Details</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => set("author", e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-500">Tags (comma-separated)</label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => set("tags", e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
              />
            </div>
          </div>

          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Cover Image</h3>
            <FileUploader
              accept="image"
              folder="images"
              currentUrl={form.thumbnailUrl}
              onUpload={(url) => set("thumbnailUrl", url)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
