"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our solutions, services, and integration capabilities.",
  theme = "light",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = theme === "dark";

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section
      className={`py-24 relative z-20 ${
        isDark ? "bg-slate-950 text-white border-t border-slate-900" : "bg-slate-50 text-slate-900 border-t border-slate-100"
      } ${className}`}
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
                isDark
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-primary/10 text-primary border-primary/20"
              }`}
            >
              FAQ
            </div>
            <h2
              className={`text-3xl md:text-5xl font-black font-heading tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h2>
            <p className={`mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}>
              {subtitle}
            </p>
          </div>
        </SectionWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SectionWrapper key={index} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? isDark
                        ? "bg-slate-900/60 border-primary/50 shadow-lg shadow-primary/5"
                        : "bg-white border-primary/40 shadow-lg shadow-slate-100/50"
                      : isDark
                      ? "bg-slate-900/20 border-slate-800 hover:border-slate-700"
                      : "bg-white border-slate-200/60 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold focus:outline-none transition-colors"
                  >
                    <span
                      className={`text-sm md:text-base leading-snug transition-colors ${
                        isOpen
                          ? "text-primary"
                          : isDark
                          ? "text-slate-200 hover:text-white"
                          : "text-slate-800 hover:text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-primary" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`px-6 pb-6 text-xs md:text-sm leading-relaxed border-t ${
                            isDark
                              ? "text-slate-400 border-slate-800/60"
                              : "text-slate-600 border-slate-100"
                          }`}
                        >
                          <p className="whitespace-pre-line">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
