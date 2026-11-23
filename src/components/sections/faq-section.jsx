"use client";

import { useState } from "react";
import { Section } from "@/components/layout/section";
import { faqsData } from "@/data/faqs";
import { IconChevronDown } from "@/components/ui/icons";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section
      id="faq"
      index="06"
      total="07"
      badge="Clarity & Answers"
      title="Frequently Asked Questions"
      description="Clear answers about costs, timelines, redesigns, and how we work together."
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;
          const faqId = `faq-answer-${index}`;
          const buttonId = `faq-question-${index}`;

          return (
            <div
              key={index}
              className={`rounded-3xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#4F46E5]/40 bg-[#EEF2F6] shadow-neu-card"
                  : "border-white/80 bg-[#EEF2F6] shadow-neu hover:shadow-neu-lg hover:-translate-y-0.5"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={faqId}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-3xl"
              >
                <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {faq.question}
                </span>
                <span
                  className={`rounded-2xl p-2 text-[#4F46E5] bg-[#E8EEF5] shadow-neu-inset-sm border border-[#CBD5E1]/40 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 bg-[#4F46E5] text-white shadow-neu-sm" : ""
                  }`}
                >
                  <IconChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#CBD5E1]/40 mt-1"
                >
                  <div className="pt-3.5 rounded-2xl bg-[#E8EEF5]/60 p-4 shadow-neu-inset-sm border border-[#CBD5E1]/30 mt-2">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
