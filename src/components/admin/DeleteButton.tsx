"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
  endpoint: string;
  label: string;
}

export default function DeleteButton({ id, endpoint, label }: DeleteButtonProps) {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await fetch(`${endpoint}/${id}`, { method: "DELETE" });
      router.refresh();
    } catch {
      setDeleting(false);
      setConfirming(false);
    }
  };

  if (confirming) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-400">Delete {label}?</span>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-xs text-red-400 hover:text-red-300 font-medium px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors"
        >
          {deleting ? <Loader2 className="w-3 h-3 animate-spin" /> : "Yes"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-xs text-gray-500 hover:text-white px-2 py-1 rounded hover:bg-white/10 transition-colors"
        >
          No
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="p-1.5 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
      title={`Delete ${label}`}
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
