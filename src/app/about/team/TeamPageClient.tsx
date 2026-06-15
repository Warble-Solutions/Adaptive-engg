"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  photoUrl: string | null;
  department: string | null;
  bio: string | null;
  linkedinUrl: string | null;
  sortOrder: number;
}

interface TeamPageClientProps {
  team: TeamMember[];
}

export default function TeamPageClient({ team }: TeamPageClientProps) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMember(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {team.map((member) => (
          <SectionWrapper key={member.id}>
            <div 
              onClick={() => setActiveMember(member)}
              className="group bg-white border border-slate-100 rounded-3xl p-6 hover:border-primary/50 hover:shadow-2xl shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square w-full rounded-2xl bg-slate-100 overflow-hidden mb-6">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-50">
                    <User className="w-20 h-20" />
                  </div>
                )}

                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card click trigger
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-full text-primary hover:bg-[#0da08a] hover:text-white scale-110 transition-all shadow-lg z-10"
                  >
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors font-heading">
                  {member.name}
                </h3>
                <p className="text-primary font-bold text-sm tracking-wide uppercase mt-1 mb-3">
                  {member.designation}
                </p>
                {member.department && (
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold mb-4 border border-slate-200/50">
                    {member.department}
                  </span>
                )}
                {member.bio && (
                  <p className="text-slate-600 text-sm line-clamp-4 leading-relaxed font-medium mb-2">
                    {member.bio}
                  </p>
                )}
                <span className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1 mt-2">
                  Read Bio & Profile →
                </span>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      {/* Premium Detail Modal Overlay */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Click-away backdrop */}
            <div className="absolute inset-0" onClick={() => setActiveMember(null)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-3xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto relative z-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-8 mt-4">
                {/* Photo Column */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="relative aspect-square w-full rounded-2xl bg-slate-850 border border-slate-800 overflow-hidden shadow-inner">
                    {activeMember.photoUrl ? (
                      <Image
                        src={activeMember.photoUrl}
                        alt={activeMember.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-850">
                        <User className="w-24 h-24" />
                      </div>
                    )}
                  </div>

                  {activeMember.linkedinUrl && (
                    <a
                      href={activeMember.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-sm hover:bg-[#0da08a] hover:text-white transition-all text-gray-300"
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>

                {/* Content Column */}
                <div className="flex-1 flex flex-col justify-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white font-heading tracking-tight">
                      {activeMember.name}
                    </h2>
                    <p className="text-primary font-bold text-base md:text-lg tracking-wide uppercase mt-1 mb-3">
                      {activeMember.designation}
                    </p>
                    
                    {activeMember.department && (
                      <span className="inline-block px-3 py-1 bg-slate-800 text-teal-300 rounded-full text-xs font-bold mb-6 border border-slate-700/50">
                        {activeMember.department}
                      </span>
                    )}
                  </div>

                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium">
                      {activeMember.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
