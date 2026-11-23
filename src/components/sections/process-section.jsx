"use client";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconCheck,
  IconClock,
  IconChevronDown,
  IconWhatsApp,
} from "@/components/ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discover",
    time: "~1 day",
    deliverable: "Clear goal & local competitor notes",
    promise: "We learn your business first.",
    description:
      "We start with a direct conversation about your business, your customers, and the bottlenecks holding you back — then define the one digital solution that will actually move the needle for your business.",
    keyPoints: [
      "Clear business goal and primary conversion focus",
      "Local competitor presence in Vapi",
      "Zero jargon — pure business discussion",
    ],
  },
  {
    step: "02",
    title: "Plan",
    time: "2-3 days",
    deliverable: "Wireframes and a fixed quote",
    promise: "You see it before we build it.",
    description:
      "Before any code is written, we map the user journey and design how your site will look and work on a phone. You get wireframes, a fixed price, and a timeline — and you approve everything before we start building.",
    keyPoints: [
      "Mobile-first wireframes for your industry",
      "Fixed cost and timeline — no surprise fees",
      "Your review and approval before implementation",
    ],
  },
  {
    step: "03",
    title: "Build",
    time: "1-3 weeks",
    deliverable: "One-tap WhatsApp enquiries",
    promise: "Fast on any phone.",
    description:
      "Your site is engineered to open instantly on any phone, even on 4G networks. Product catalogues, quotation systems, and dashboards are tested rigorously before they go live.",
    keyPoints: [
      "Opens fast on 4G/5G mobile networks",
      "WhatsApp enquiry routing built in",
      "Local SEO so Vapi customers find you",
    ],
  },
  {
    step: "04",
    title: "Launch",
    time: "1-2 days",
    deliverable: "Your domain, HTTPS, Google listing",
    promise: "Live and findable on Google.",
    description:
      "We go live on your custom domain with HTTPS security, connect Google Search Console, submit your sitemap for indexing, and test every contact form and WhatsApp button end to end on real devices.",
    keyPoints: [
      "Custom domain connection and HTTPS security",
      "Google Search Console and sitemap submission",
      "End-to-end testing on real mobile devices",
    ],
  },
  {
    step: "05",
    title: "Support",
    time: "Ongoing",
    deliverable: "Direct WhatsApp support, no ticket queues",
    promise: "We stay a call away.",
    description:
      "Launch isn't the end of our work together. You get direct phone and WhatsApp access to the developer who built your site — for updates, fixes, and advice as your business grows.",
    keyPoints: [
      "Direct phone and WhatsApp support",
      "Fast content updates and fixes",
      "Continuous reliability and performance",
    ],
  },
];

export function ProcessSection() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!reduced && lineRef.current) {
        gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "0% 0%" });
        gsap.to(lineRef.current, {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
            once: true,
            toggleActions: "play none none none",
          },
        });
      }

      if (!reduced) {
        const triggers = stepRefs.current
          .filter(Boolean)
          .map((el, i) =>
            ScrollTrigger.create({
              trigger: el,
              start: "top 48%",
              end: "bottom 48%",
              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            })
          );
        return () => triggers.forEach((trigger) => trigger.kill());
      }
    }, [lineRef.current]);

    return () => ctx.revert();
  }, [reduced]);

  const toggleStep = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  const handleKeyDown = (index, event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleStep(index);
    }
  };

  return (
    <Section
      id="process"
      badge="Simple Working Process"
      title="How We Work Together"
      description="A structured, 5-stage collaboration built around your time — clear goals, fixed quotes, and direct support from start to finish."
    >
      <div
        ref={lineRef}
        className="relative flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-4"
      >
        {/* Mobile timeline connector line */}
        <div
          className="absolute inset-y-0 left-[32px] sm:left-[44px] lg:left-[60px] w-[1px] bg-[#CBD5E1]/40 z-0 block md:hidden"
        />

        {steps.map((item, i) => {
          const isActive = activeIndex === i;
          const isPassed = activeIndex > i;
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={item.step}
              ref={(el) => (stepRefs.current[i] = el)}
              layout
              whileTap={{ scale: 0.995 }}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={`Step ${item.step}: ${item.title}`}
              onTap={() => toggleStep(i)}
              onKeyDown={(event) => handleKeyDown(i, event)}
              className="relative group"
            >
              {/* Mobile timeline dot */}
              <div
                className={cn(
                  "flex shrink-0 items-center mt-0.5 z-10",
                  "block md:hidden"
                )}
              >
                {isPassed || isActive ? (
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shadow-neu-sm">
                    <IconCheck className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1]" />
                )}
              </div>

              <Card
                as="article"
                variant="raised"
                className={cn(
                  "flex flex-col gap-3 p-5 md:p-4",
                  isOpen && "border-[#4F46E5]/60"
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "hidden md:flex w-2.5 h-2.5 rounded-full shrink-0",
                      isPassed || isActive ? "bg-[#10B981]" : "bg-[#CBD5E1]"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "font-extrabold tabular-nums",
                      isActive ? "text-[#4F46E5]" : "text-[#0F172A]"
                    )}
                  >
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                  <IconClock className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.time}</span>
                </div>

                <p className="text-sm font-medium text-[#0F172A] leading-relaxed">
                  {item.deliverable}
                </p>

                <p className="text-base font-medium text-[#0F172A] leading-relaxed">
                  {item.promise}
                </p>

                <div className="mt-auto flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="shrink-0"
                  >
                    <IconChevronDown className="w-4 h-4 text-[#64748B]" />
                  </motion.div>
                  <span
                    className="text-xs font-semibold text-[#4F46E5]"
                  >
                    {isOpen ? "Show less" : "Show details"}
                  </span>
                </div>
              </Card>

              <AnimatePresence mode="popLayout">
                {isOpen && (
                  <motion.div
                    key={`details-${item.step}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduced ? 0.1 : 0.2 }}
                    className="mt-4 md:mt-3 overflow-hidden"
                  >
                    <div className="space-y-3">
                      <p className="text-sm text-[#334155] leading-relaxed">
                        {item.description}
                      </p>
                      <div className="space-y-2 text-[#0F172A]">
                        {item.keyPoints.map((point, k) => (
                          <div key={k} className="flex items-start gap-2">
                            <IconCheck
                              className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                            />
                            <span className="text-sm leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Conversion CTA after the final step */}
        <Card
          variant="raised"
          className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-4 p-6 md:p-8 text-center md:text-left md:col-span-5 border-[#CBD5E1]/40"
          )}
        >
          <div>
            <h3 className="text-lg font-bold text-[#0F172A]">
              Ready for your website?
            </h3>
            <p className="mt-2 text-[#475569] leading-relaxed">
              Start with a direct conversation about your business — no jargon,
              no ticket queues.
            </p>
          </div>
          <Button
            as="a"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            className="w-full md:w-auto gap-2 font-bold"
            aria-label="Discuss your project on WhatsApp"
          >
            <IconWhatsApp className="w-5 h-5 text-white" />
            <span>Message us on WhatsApp</span>
          </Button>
        </Card>
      </div>
    </Section>
  );
}
