"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { businessProblemsData } from "@/data/problems";
import { siteConfig } from "@/config/site";
import {
  IconPhone,
  IconMessageSquare,
  IconClock,
  IconRefreshCw,
  IconCpu,
  IconCheck,
  IconArrowRight,
  IconWhatsApp,
} from "@/components/ui/icons";

const iconMap = {
  phone: IconPhone,
  alert: IconPhone,
  chat: IconMessageSquare,
  clock: IconClock,
  refresh: IconRefreshCw,
  cpu: IconCpu,
};

/**
 * Formats solution text by bolding phrases enclosed in **double asterisks**.
 * Keeps regular body weight across the sentence, emphasizing only key action phrases.
 */
function FormattedSolution({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-[#0F172A]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function ProblemCard({ item }) {
  const cardRef = useRef(null);
  const reduced = useReducedMotion();
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });

  const IconComp = iconMap[item.icon] || IconPhone;
  const whatsappProblemUrl = `https://wa.me/918320927182?text=${encodeURIComponent(
    item.whatsappMessage || "Hi, my website isn't getting enquiries"
  )}`;

  return (
    <Card
      as="article"
      ref={cardRef}
      variant="raised"
      hover={false}
      className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-[#CBD5E1]/50 shadow-neu-card h-full"
    >
      <div className="space-y-5">
        {/* Header row: Phone/Action Icon with ring & notification badge + Tag Chip */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <motion.div
              animate={
                reduced || !isInView
                  ? {}
                  : {
                      rotate: [0, -14, 14, -10, 10, -5, 5, 0],
                      transition: { delay: 0.75, duration: 0.65, ease: "easeInOut" },
                    }
              }
              className="rounded-2xl bg-[#E8EEF5] p-3 shadow-neu-inset-sm border border-[#CBD5E1]/40 flex items-center justify-center relative"
            >
              <motion.div
                animate={
                  reduced || !isInView
                    ? { color: "#475569" }
                    : {
                        color: ["#94A3B8", "#94A3B8", "#10B981"],
                        transition: { delay: 0.7, duration: 0.4 },
                      }
                }
              >
                <IconComp className="w-5 h-5 shrink-0" />
              </motion.div>
            </motion.div>

            {/* Notification Badge Dot that pops in when outcome appears */}
            <motion.span
              initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              animate={
                reduced || !isInView
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.85, type: "spring", stiffness: 500, damping: 20 },
                    }
              }
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] ring-2 ring-[#EEF2F6] flex items-center justify-center shadow-sm"
              aria-hidden="true"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.span>
          </div>

          <Badge variant="indigo" className="text-xs font-semibold px-3 py-1">
            {item.tag}
          </Badge>
        </div>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          {item.title}
        </h3>

        {/* Step 1: Sound familiar? (Muted & Cool Inset Box) */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={
            reduced || !isInView
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.45, ease: "easeOut" },
                }
          }
          className="rounded-2xl bg-[#E8EEF5] p-4 sm:p-5 border border-[#CBD5E1]/50 shadow-neu-inset-sm space-y-2"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
            Sound familiar?
          </span>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            {item.painHeadline}
          </p>
          {item.painCauses && item.painCauses.length > 0 && (
            <ul className="mt-2 space-y-1.5 text-xs sm:text-[13px] text-[#334155]" role="list">
              {item.painCauses.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-1.5"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{cause}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Step 2: What we do (Guidance in Purple, regular text with selective bolding) */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={
            reduced || !isInView
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.45, ease: "easeOut" },
                }
          }
          className="space-y-1.5 pt-1"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5] block">
            What we do
          </span>
          <p className="text-sm sm:text-[14.5px] text-[#334155] leading-relaxed font-normal">
            <FormattedSolution text={item.solution} />
          </p>
        </motion.div>

        {/* Step 3: What changes (The Payoff: Warm and bright with green tint) */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
          animate={
            reduced || !isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }
          }
          className="rounded-2xl bg-[#ECFDF5] p-4 sm:p-5 border border-[#10B981]/30 shadow-[0_2px_12px_rgba(16,185,129,0.08)] flex flex-col gap-1.5"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0">
              <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669]">
              What changes
            </span>
          </div>
          <p className="text-sm sm:text-base font-bold text-[#065F46] leading-snug">
            {item.outcome}
          </p>
        </motion.div>
      </div>

      {/* Step 4: Solid green WhatsApp button with prefilled message */}
      <motion.div
        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        animate={
          reduced || !isInView
            ? { opacity: 1, y: 0 }
            : {
                opacity: 1,
                y: 0,
                transition: { delay: 0.95, duration: 0.45, ease: "easeOut" },
              }
        }
        className="pt-6 mt-6 border-t border-[#CBD5E1]/40"
      >
        <motion.a
          href={whatsappProblemUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduced ? {} : { scale: 1.02 }}
          whileTap={reduced ? {} : { scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-neu-whatsapp hover:from-[#34D399] hover:to-[#10B981] transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          aria-label={`Chat with us on WhatsApp about ${item.title}`}
        >
          <motion.span
            animate={
              reduced || !isInView
                ? {}
                : {
                    scale: [1, 1.25, 1],
                    transition: { delay: 2.8, duration: 0.5, ease: "easeInOut" },
                  }
            }
            className="inline-flex items-center justify-center"
          >
            <IconWhatsApp className="w-5 h-5 text-white shrink-0" />
          </motion.span>
          <span>Chat with us on WhatsApp</span>
          <IconArrowRight className="w-4 h-4 text-white/90 shrink-0 ml-auto group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </Card>
  );
}

export function ProblemsSection() {
  return (
    <Section
      id="problems"
      badge="Problem Recognition"
      title="Is Your Business Facing These Digital Roadblocks?"
      description="Most local businesses in Vapi struggle with websites that don't generate enquiries, repetitive customer questions, or slow manual spreadsheets. Here is how we turn everyday operational frustrations into working software."
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {businessProblemsData.map((item) => (
          <ProblemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Problem Section Summary Banner */}
      <div className="mt-12 rounded-3xl border border-white/85 bg-[#EEF2F6] p-6 sm:p-8 shadow-neu flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
            Have a different operational challenge or software requirement?
          </h4>
          <p className="text-xs sm:text-sm text-[#475569] max-w-xl">
            Tell me about your business workflow. We will analyze the challenge and outline a practical digital solution.
          </p>
        </div>
        <Button
          as="a"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="md"
          className="shrink-0 gap-2 font-bold"
        >
          <IconWhatsApp className="w-4 h-4 text-white" />
          <span>Discuss Your Challenge</span>
        </Button>
      </div>
    </Section>
  );
}
