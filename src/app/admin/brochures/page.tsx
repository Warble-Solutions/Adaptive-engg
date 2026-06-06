import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, FileText } from "lucide-react";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBrochuresPage() {
  const brochures = await prisma.brochure.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-outfit">Brochures</h1>
          <p className="text-gray-500 text-sm mt-1">{brochures.length} brochures</p>
        </div>
        <Link
          href="/admin/brochures/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Upload Brochure
        </Link>
      </div>

      {brochures.length === 0 ? (
        <div className="bg-gray-900/40 border border-white/10 rounded-2xl px-8 py-16 text-center">
          <p className="text-gray-400 text-sm">No brochures uploaded yet.</p>
          <Link href="/admin/brochures/new" className="text-emerald-400 text-sm hover:underline mt-2 inline-block">
            Upload your first brochure →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {brochures.map((b) => (
            <div
              key={b.id}
              className="group bg-gray-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-gray-800 overflow-hidden">
                {b.thumbnailUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.thumbnailUrl} alt={b.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-white font-medium text-sm line-clamp-1">{b.title}</p>
                {b.category && (
                  <span className="inline-block mt-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                    {b.category}
                  </span>
                )}
                <p className="text-gray-500 text-xs mt-2">Sort: {b.sortOrder}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/admin/brochures/${b.id}/edit`}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  Edit
                </Link>
                <DeleteButton id={b.id} endpoint="/api/admin/brochures" label="brochure" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
