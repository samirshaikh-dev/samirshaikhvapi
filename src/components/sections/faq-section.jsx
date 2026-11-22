"use client";

import { useState } from "react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
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
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-[#F26A3D]/50 bg-white shadow-soft"
                  : "border-[#E3DFD6] bg-white hover:border-[#c9c4b7]"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={faqId}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D] rounded-2xl"
              >
                <span className="text-base sm:text-lg font-bold text-[#172C46]">
                  {faq.question}
                </span>
                <span
                  className={`rounded-full p-1.5 text-[#172C46] bg-[#F6F2E9] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 bg-[#F26A3D] text-[#172C46]" : ""
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
                  className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-[#626A73] leading-relaxed border-t border-[#E3DFD6]/60 mt-1"
                >
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
