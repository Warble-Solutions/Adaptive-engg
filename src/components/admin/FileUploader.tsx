"use client";

import { useCallback, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Upload, X, FileText, Loader2, Image as ImageIcon } from "lucide-react";

interface FileUploaderProps {
  accept: "image" | "pdf";
  folder: string;
  currentUrl?: string;
  onUpload: (url: string) => void;
  label?: string;
}

export default function FileUploader({
  accept,
  folder,
  currentUrl,
  onUpload,
  label,
}: FileUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentUrl || "");
  const [error, setError] = useState("");

  const acceptConfig: Accept =
    accept === "image"
      ? { "image/jpeg": [], "image/png": [], "image/webp": [], "image/avif": [] }
      : { "application/pdf": [] };


  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setUploading(true);
      setError("");

      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`/api/upload?folder=${folder}`, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Upload failed");
        }

        const data = await res.json();
        setPreviewUrl(data.url);
        onUpload(data.url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [folder, onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptConfig,
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewUrl("");
    onUpload("");
  };

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium text-gray-400">{label}</p>}

      {/* Preview */}
      {previewUrl && (
        <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-gray-800/50">
          {accept === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="flex items-center gap-3 px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">PDF uploaded</p>
                <p className="text-gray-500 text-xs truncate">{previewUrl}</p>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={clear}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-900/80 backdrop-blur flex items-center justify-center text-gray-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Drop Zone */}
      {!previewUrl && (
        <div
          {...getRootProps()}
          className={`relative border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-200 ${
            isDragActive
              ? "border-emerald-400 bg-emerald-500/10"
              : "border-white/15 hover:border-white/30 hover:bg-white/5"
          } ${uploading ? "pointer-events-none" : ""}`}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
              <p className="text-gray-400 text-sm">Uploading…</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {accept === "image" ? (
                  <ImageIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-500" />
                )}
              </div>
              <div>
                <p className="text-gray-300 text-sm font-medium">
                  {isDragActive ? "Drop file here" : "Drag & drop or click to browse"}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {accept === "image"
                    ? "JPEG, PNG, WebP or AVIF · max 10MB"
                    : "PDF · max 10MB"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}
    </div>
  );
}
