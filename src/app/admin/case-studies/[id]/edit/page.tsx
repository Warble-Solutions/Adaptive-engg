"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import FileUploader from "@/components/admin/FileUploader";

interface CaseStudy {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  sortOrder: number;
  thumbnailUrl: string;
  pdfUrl: string;
}

export default function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    sortOrder: 0,
    thumbnailUrl: "",
    pdfUrl: "",
  });

  useEffect(() => {
    fetch(`/api/admin/case-studies`)
      .then((r) => r.json())
      .then((items: CaseStudy[]) => {
        const item = items.find((i) => i.id === id);
        if (item) {
          setForm({
            title: item.title,
            description: item.description || "",
            category: item.category || "",
            sortOrder: item.sortOrder,
            thumbnailUrl: item.thumbnailUrl,
            pdfUrl: item.pdfUrl,
          });
        } else {
          setError("Case study not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load case study");
        setLoading(false);
      });
  }, [id]);

  const set = (key: string, value: string | number) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    if (!form.thumbnailUrl) {
      setError("Cover image thumbnail is required");
      setSaving(false);
      return;
    }

    if (!form.pdfUrl) {
      setError("Case study PDF file is required");
      setSaving(false);
      return;
    }

    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sortOrder: Number(form.sortOrder),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update case study");
      }

      router.push("/admin/case-studies");
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
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/case-studies" className="text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white font-outfit">Edit Case Study</h1>
          <p className="text-gray-500 text-sm mt-0.5">Modify case study details</p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-400">Title *</label>
            <input
              required
              type="text"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-400">Description</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400">Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400">Sort Order</label>
              <input
                type="number"
                value={form.sortOrder}
                onChange={(e) => set("sortOrder", parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/60 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Cover Image (Thumbnail) *</h3>
            <FileUploader
              accept="image"
              folder="images"
              currentUrl={form.thumbnailUrl}
              onUpload={(url) => set("thumbnailUrl", url)}
            />
          </div>

          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Case Study PDF *</h3>
            <FileUploader
              accept="pdf"
              folder="case-studies"
              currentUrl={form.pdfUrl}
              onUpload={(url) => set("pdfUrl", url)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving || !form.title}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          Save Changes
        </button>
      </form>
    </div>
  );
}
