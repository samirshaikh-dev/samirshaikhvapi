"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { industriesData } from "@/data/industries";
import {
  IconFactory,
  IconStethoscope,
  IconGraduationCap,
  IconWrench,
  IconShoppingBag,
  IconRocket,
  IconCheck,
  IconMapPin,
  IconWhatsApp,
  IconArrowRight,
} from "@/components/ui/icons";

const industryIconMap = {
  factory: IconFactory,
  stethoscope: IconStethoscope,
  "graduation-cap": IconGraduationCap,
  wrench: IconWrench,
  "shopping-bag": IconShoppingBag,
  rocket: IconRocket,
};

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

function IndustryCard({ item }) {
  const cardRef = useRef(null);
  const reduced = useReducedMotion();
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });

  const IconComp = industryIconMap[item.icon] || IconFactory;
  const prefilledWhatsappUrl = `https://wa.me/918320927182?text=${encodeURIComponent(
    item.whatsappMessage || `Hi Samir, I want to discuss a website for my business in Vapi`
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
        {/* Header row: Icon & Tag / Location */}
        <div className="flex items-center justify-between">
          <div className="rounded-2xl bg-[#E8EEF5] p-3 text-[#4F46E5] shadow-neu-inset-sm border border-[#CBD5E1]/40 flex items-center justify-center">
            <IconComp className="w-5 h-5 shrink-0" />
          </div>
          <Badge variant="indigo" className="text-xs font-semibold px-3 py-1">
            {item.tag || "Industry"}
          </Badge>
        </div>

        {/* Title & Location scope */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            {item.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] mt-1">
            <IconMapPin className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
            <span>{item.locationScope}</span>
          </div>
        </div>

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

        {/* Step 2: What we build */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={
            reduced || !isInView
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.35, duration: 0.45, ease: "easeOut" },
                }
          }
          className="space-y-1.5 pt-1"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5] block">
            What we build
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
                  transition: { delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
            {item.outcome || item.keyFeature}
          </p>
        </motion.div>
      </div>

      {/* Action Button: Solid Green WhatsApp CTA */}
      <motion.div
        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        animate={
          reduced || !isInView
            ? { opacity: 1, y: 0 }
            : {
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.45, ease: "easeOut" },
              }
        }
        className="pt-6 mt-6 border-t border-[#CBD5E1]/40"
      >
        <motion.a
          href={prefilledWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduced ? {} : { scale: 1.02 }}
          whileTap={reduced ? {} : { scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-neu-whatsapp hover:from-[#34D399] hover:to-[#10B981] transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          aria-label={`Discuss website for ${item.name} on WhatsApp`}
        >
          <IconWhatsApp className="w-5 h-5 text-white shrink-0" />
          <span>Discuss for {item.name.split(" ")[0]}</span>
          <IconArrowRight className="w-4 h-4 text-white/90 shrink-0 ml-auto group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </Card>
  );
}

export function IndustriesSection() {
  return (
    <Section
      id="industries"
      badge="Local Market Relevance"
      title="Digital Experiences for Different Industries"
      description="Different businesses require different digital approaches. Here is how modern web development solves specific challenges across local sectors in Vapi and South Gujarat."
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {industriesData.map((item) => (
          <IndustryCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
