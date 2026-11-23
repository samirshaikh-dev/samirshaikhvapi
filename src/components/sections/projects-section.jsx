"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
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

  const featuredProject =
    projectsData.find((p) => p.id === "sahara-tyre") || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = featuredRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pin-visual",
        { yPercent: 6 },
        {
          yPercent: -6,
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

  return (
    <Section
      id="projects"
      badge="Selected Case Studies"
      title="Real Solutions I've Built"
      description="Proven digital platforms delivered for real businesses — solving operational bottlenecks, generating customer inquiries, and automating daily workflows."
    >
      <div className="space-y-12 sm:space-y-16">
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
                    "Hi Samir! I saw the Sahara Tyre digital platform you built and would like a similar solution for my business."
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

        {/* SUPPORTING CASE STUDIES — 2-Column Grid */}
        <div>
          <h3 className="text-lg font-bold text-[#0F172A] mb-6">
            More Custom Business Solutions & Applications
          </h3>

          <RevealGroup
            selector=":scope > article"
            stagger={0.1}
            className="grid gap-6 md:grid-cols-2"
          >
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between neu-plate-interactive rounded-3xl p-7 sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5]">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors mt-0.5">
                        {project.title}
                      </h4>
                    </div>
                    {project.liveUrl && (
                      <Badge variant="inset" className="text-[11px]">
                        Live Demo
                      </Badge>
                    )}
                  </div>

                  {/* Challenge */}
                  <div className="rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                      The Challenge
                    </span>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {project.clientProblem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] block">
                      The Solution
                    </span>
                    <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                      {project.solutionImplemented}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="rounded-xl bg-[#EEF2F6] p-3 border border-white/80 shadow-neu-sm flex items-start gap-2 text-xs text-[#0F172A] font-semibold">
                    <IconCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#10B981]">Outcome:</strong>{" "}
                      {project.businessOutcome}
                    </span>
                  </div>

                  {/* Supporting Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl bg-[#E8EEF5] px-2.5 py-1 text-[11px] font-semibold text-[#64748B] shadow-neu-inset-sm border border-[#CBD5E1]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#CBD5E1]/40 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors"
                    >
                      <span>Explore Live Application</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors"
                    >
                      <span>View Architecture on GitHub</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#64748B]">
                      Custom Enterprise Solution
                    </span>
                  )}
                  <a
                    href={`https://wa.me/918320927182?text=${encodeURIComponent(
                      `Hi Samir! I'm interested in building a solution similar to "${project.title}" for my business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#10B981] hover:underline"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5" />
                    <span>Discuss Similar</span>
                  </a>
                </div>
              </article>
            ))}
          </RevealGroup>
        </div>

        {/* Technical portfolio callout (repositioned as engineering credibility) */}
        <Reveal variant="fade">
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 sm:p-9 shadow-neu flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="text-base font-bold text-[#0F172A]">
                Need deep technical architecture or enterprise microservices?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569]">
                For enterprise CTOs and tech leads seeking GraphQL DataLoader metrics, backend microservices, and database tuning benchmarks.
              </p>
            </div>
            <a
              href={siteConfig.links.technicalPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="secondary" size="md" className="gap-2 font-semibold">
                <span>View Engineering Case Studies</span>
                <IconArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
