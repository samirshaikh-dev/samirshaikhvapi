"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/config/site";
import {
  IconCheck,
  IconArrowUpRight,
  IconWhatsApp,
  IconMapPin,
} from "@/components/ui/icons";

export function ProjectsSection() {
  const featuredRef = useRef(null);
  const reduced = useReducedMotion();

  const featuredProject = projectsData[0];

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = featuredRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pin-visual",
        { yPercent: 5 },
        {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ".pin-visual",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  if (!featuredProject) return null;

  return (
    <Section
      id="projects"
      badge="Client Case Study"
      title="Real Solutions Delivered"
      description="See how we helped a local Vapi business replace manual price lists and paper chaos with a modern, high-converting digital platform."
    >
      <div className="space-y-10">
        {/* FEATURED CASE STUDY — Sahara Tyre */}
        <div
          ref={featuredRef}
          className="relative rounded-3xl border border-white/85 bg-[#EEF2F6] overflow-hidden shadow-neu-floating"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left: Client Challenge -> Solution -> Outcome */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center order-2 lg:order-1 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">Local Business Case Study</Badge>
                <Badge variant="slate">
                  <IconMapPin className="w-3 h-3 text-[#4F46E5]" />
                  <span>Vapi, Gujarat</span>
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#4F46E5] mt-1">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* The Business Challenge */}
              <div className="rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                  The Client's Challenge
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {featuredProject.clientProblem}
                </p>
              </div>

              {/* The Solution Built */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] block">
                  The Solution Implemented
                </span>
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                  {featuredProject.solutionImplemented}
                </p>
              </div>

              {/* Verified Business Outcome */}
              <div className="rounded-2xl bg-[#EEF2F6] p-3.5 border border-white/80 shadow-neu-sm flex items-start gap-2.5 text-xs text-[#0F172A] font-semibold">
                <IconCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#10B981]">Outcome:</strong>{" "}
                  {featuredProject.businessOutcome}
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="primary" size="md" className="gap-2">
                    <span>Visit Live Website</span>
                    <IconArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={`https://wa.me/918320927182?text=${encodeURIComponent(
                    "Hi Samir! I saw the Sahara Tyre digital platform and would like to build a similar solution for my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="secondary" size="md" className="gap-2 font-bold">
                    <IconWhatsApp className="w-4 h-4 text-[#10B981]" />
                    <span>Inquire About Similar Solution</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: spatial preview console */}
            <div className="lg:col-span-6 relative bg-[#0F172A] order-1 lg:order-2 min-h-[320px] flex items-center justify-center p-8 sm:p-10 overflow-hidden shadow-neu-inset">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12] bg-grid-hairline"
              />
              <div className="pin-visual relative w-full">
                <div className="rounded-3xl border border-white/15 bg-[#1E293B]/85 backdrop-blur-md p-6 space-y-4 shadow-floating">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-bold text-white">
                      Digital Storefront & RFQ Dispatch
                    </span>
                    <span className="text-xs text-white/60 font-medium">Live Demo</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <span className="text-[11px] text-white/60 block">
                        Interactive Catalogue Search
                      </span>
                      <span className="text-sm font-bold text-white">
                        Passenger, SUV & Heavy Commercial Tyres
                      </span>
                      <div className="mt-2.5 flex gap-1.5 flex-wrap">
                        <span className="text-[10px] bg-[#4F46E5] text-white px-2.5 py-0.5 rounded-xl font-semibold">
                          175/65 R14
                        </span>
                        <span className="text-[10px] bg-white/10 text-white px-2.5 py-0.5 rounded-xl font-medium">
                          185/65 R15
                        </span>
                        <span className="text-[10px] bg-white/10 text-white px-2.5 py-0.5 rounded-xl font-medium">
                          215/60 R16
                        </span>
                        <span className="text-[10px] bg-white/10 text-white/70 px-2.5 py-0.5 rounded-xl">
                          +54 more sizes
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-white/60 block">
                          Instant Conversion
                        </span>
                        <span className="text-xs font-bold text-white">
                          Direct WhatsApp Quote Dispatch
                        </span>
                      </div>
                      <span className="h-8 w-8 rounded-xl bg-[#10B981] text-white flex items-center justify-center shadow-md">
                        <IconCheck className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-white/60 pt-1">
                    Eliminated paper confusion and manual price lookups for the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Section Client Action Banner */}
        <Reveal variant="fade">
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 sm:p-9 shadow-neu flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="text-base font-bold text-[#0F172A]">
                Want a custom digital catalogue or storefront for your products?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569]">
                Let's discuss how to organize your offerings so customers can browse easily and reach out in one tap.
              </p>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="whatsapp" size="md" className="gap-2 font-bold">
                <IconWhatsApp className="w-4 h-4 text-white" />
                <span>Discuss Your Storefront</span>
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
