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

    // Tier 1 scroll-scrubbed spatial depth: the preview column drifts and the
    // highlights fade/slide in sequence while the visual holds the frame.
    // Skipped entirely under reduced motion (content stays fully readable).
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
      index="03"
      total="07"
      badge="Selected Work"
      title="Selected Projects"
      description="Real digital experiences delivered with a focus on business utility, clean architecture, and verifiable results."
    >
      <div className="space-y-12 sm:space-y-16">
        {/* FEATURED SHOWCASE — Sahara Tyre */}
        <div
          ref={featuredRef}
          className="relative rounded-3xl border border-[#E3DFD6] bg-white overflow-hidden shadow-soft"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left: narrative + highlights */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="tangerine">Local Vapi Business Showcase</Badge>
                <Badge variant="ivory">
                  <IconMapPin className="w-3 h-3 text-[#F26A3D]" />
                  <span>Vapi, Gujarat</span>
                </Badge>
              </div>

              <h3 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-[#172C46]">
                {featuredProject.title}
              </h3>
              <p className="text-sm font-semibold text-[#F26A3D] mt-1">
                {featuredProject.tagline}
              </p>

              <p className="mt-5 text-base text-[#626A73] leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Highlights as an editorial numbered list */}
              <ul className="mt-6 space-y-3">
                {featuredProject.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-xs font-bold tabular-nums text-[#F26A3D] w-5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#172C46] leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
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
                    "Hi Samir! I saw the Sahara Tyre website you built and would like a similar digital platform for my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="secondary" size="md" className="gap-2">
                    <IconWhatsApp className="w-4 h-4 text-[#F26A3D]" />
                    <span>Inquire About Similar Project</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: spatial preview panel (parallax-drifting) */}
            <div className="lg:col-span-6 relative bg-[#172C46] order-1 lg:order-2 min-h-[320px] flex items-center justify-center p-8 sm:p-10 overflow-hidden">
              {/* Structural hairline grid on the dark panel */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12] bg-grid-hairline"
              />
              <div className="pin-visual relative w-full">
                <div className="rounded-2xl border border-white/15 bg-[#0f2138]/70 backdrop-blur-sm p-6 space-y-4 shadow-floating">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-bold text-white">
                      Digital Catalogue Interface
                    </span>
                    <span className="text-xs text-white/60">Live Demo</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="text-[11px] text-white/60 block">
                        Category Exploration
                      </span>
                      <span className="text-sm font-bold text-white">
                        Passenger, SUV & Heavy Commercial Tyres
                      </span>
                      <div className="mt-2 flex gap-1.5 flex-wrap">
                        <span className="text-[10px] bg-[#F26A3D] text-[#172C46] px-2 py-0.5 rounded-full font-semibold">
                          175/65 R14
                        </span>
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">
                          185/65 R15
                        </span>
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">
                          215/60 R16
                        </span>
                        <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                          +54 more
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-white/60 block">
                          Customer Action
                        </span>
                        <span className="text-xs font-bold text-white">
                          Direct WhatsApp Quote Dispatch
                        </span>
                      </div>
                      <span className="h-8 w-8 rounded-full bg-[#F26A3D] text-[#172C46] flex items-center justify-center">
                        <IconCheck className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-white/60 pt-1">
                    Built to eliminate messy PDF sharing and manual price inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING PROJECTS — editorial two-column */}
        <div>
          <h3 className="text-lg font-bold text-[#172C46] mb-6">
            More Engineering & Business Platforms
          </h3>

          <RevealGroup
            selector=":scope > article"
            stagger={0.1}
            className="grid gap-6 md:grid-cols-2"
          >
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#E3DFD6] bg-white p-7 sm:p-8 shadow-card transition-all duration-300 hover:border-[#F26A3D]/50 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F26A3D]">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors mt-0.5">
                        {project.title}
                      </h4>
                    </div>
                    {project.liveUrl && (
                      <Badge variant="ivory" className="text-[11px]">
                        Live Demo
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-[#626A73] leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#172C46] pt-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[#F26A3D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#EEEAE1] px-2 py-0.5 text-[11px] font-medium text-[#172C46]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E3DFD6] flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors"
                    >
                      <span>Explore Live Application</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors"
                    >
                      <span>View Architecture on GitHub</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#858A91]">
                      Proprietary Business System
                    </span>
                  )}
                </div>
              </article>
            ))}
          </RevealGroup>
        </div>

        {/* Technical portfolio callout */}
        <Reveal variant="fade">
          <div className="rounded-2xl border border-[#E3DFD6] bg-[#EEEAE1]/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-[#172C46]">
                Looking for deep technical case studies & engineering architecture?
              </h4>
              <p className="text-xs sm:text-sm text-[#626A73]">
                Visit my comprehensive developer portfolio for microservice
                details, GraphQL DataLoader metrics, and open-source contributions.
              </p>
            </div>
            <a
              href={siteConfig.links.technicalPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="secondary" size="md" className="gap-2 font-medium">
                <span>View Technical Portfolio</span>
                <IconArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}