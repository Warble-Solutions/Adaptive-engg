"use client";

import { useState } from "react";
import { Upload, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const resumeFile = formData.get("resume") as File;

    if (!resumeFile || resumeFile.size === 0) {
      setError("Please attach your resume.");
      setLoading(false);
      return;
    }

    try {
      // 1. Upload Resume
      const uploadData = new FormData();
      uploadData.append("file", resumeFile);
      
      const uploadRes = await fetch("/api/upload?folder=resumes", {
        method: "POST",
        body: uploadData,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload resume. Ensure it's a PDF under 10MB.");
      }

      const { url: resumeUrl } = await uploadRes.json();

      // 2. Submit Application
      const applicationData = {
        jobId,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        coverLetter: formData.get("coverLetter") || "",
        resumeUrl,
      };

      const applyRes = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      });

      if (!applyRes.ok) {
        throw new Error("Failed to submit application. Please try again.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-teal-50 border border-teal-500 rounded-2xl p-8 text-center flex flex-col items-center">
        <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
        <h3 className="text-2xl font-bold text-white font-heading mb-2">Application Submitted!</h3>
        <p className="text-slate-300">
          Thank you for applying. Our HR team will review your profile and reach out if your qualifications match our needs.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200">
      <h3 className="text-2xl font-black text-white font-heading mb-6">Apply for this role</h3>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 border border-red-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="font-medium text-sm">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold tracking-wide text-white">Full Name *</label>
            <input 
              required type="text" id="name" name="name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold tracking-wide text-white">Email Address *</label>
            <input 
              required type="email" id="email" name="email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold tracking-wide text-white">Phone Number *</label>
          <input 
            required type="tel" id="phone" name="phone"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
            placeholder="+91 98765 43210"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="resume" className="text-sm font-bold tracking-wide text-white">Resume (PDF) *</label>
          <div className="relative">
            <input 
              required type="file" id="resume" name="resume" accept="application/pdf"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 file:bg-primary/20"
            />
            <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Max size: 10MB. Accepted formats: PDF.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="coverLetter" className="text-sm font-bold tracking-wide text-white">Cover Letter (Optional)</label>
          <textarea 
            id="coverLetter" name="coverLetter" rows={4}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow resize-y"
            placeholder="Tell us why you are a great fit for this role..."
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-primary hover:bg-slate-900 hover:text-white text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
            </span>
          ) : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
