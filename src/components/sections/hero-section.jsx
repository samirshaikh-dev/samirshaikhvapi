"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import {
  IconWhatsApp,
  IconArrowRight,
  IconSparkles,
  IconCheck,
  IconMapPin,
} from "@/components/ui/icons";

export function HeroSection() {
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Tier 2 normal: staggered entrance (rise + fade). Tier 3 reduced: fade only.
      const from = reduced
        ? { autoAlpha: 0 }
        : { autoAlpha: 0, y: 28 };
      const to = reduced
        ? { autoAlpha: 1, duration: 0.3, stagger: 0.05, ease: "power1.out" }
        : { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out" };

      gsap.from(".hero-reveal", { ...from, ...to });

      // Tier 1 parallax: only when motion is allowed. The showcase card drifts
      // and scales subtly as the hero scrolls out, implying spatial depth.
      if (!reduced) {
        gsap.to(".hero-showcase", {
          yPercent: -12,
          scale: 0.97,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-showcase",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      {/* Structural hairline grid backdrop (raw-structural, low-contrast) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-hairline opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,#000_40%,transparent_100%)]"
      />
      {/* Soft spatial lavender depth accent — not a gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#E9E5F5]/50 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
          {/* Left: editorial headline & conversion messaging */}
          <div className="lg:col-span-7">
            {/* Location & status */}
            <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#E3DFD6] bg-white px-3.5 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                {!reduced && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26A3D] opacity-60" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F26A3D]" />
              </span>
              <span className="text-xs font-medium text-[#172C46]">
                Based in Vapi, Gujarat · Open for Client Projects
              </span>
            </div>

            {/* Editorial H1 with per-line rise */}
            <h1 className="hero-reveal type-display text-[#172C46] mt-6">
              Modern Websites
              <br className="hidden sm:block" /> for Growing Businesses in{" "}
              <span className="text-[#F26A3D]">Vapi</span>.
            </h1>

            {/* Value proposition */}
            <p className="hero-reveal mt-6 max-w-xl type-lede text-[#626A73]">
              I help local manufacturers, clinics, retail shops, and growing
              companies build a stronger digital presence through high-performance
              websites, industrial product catalogues, and intelligent customer
              tools.
            </p>

            {/* CTAs */}
            <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss your project with Samir on WhatsApp"
              >
                <Button variant="primary" size="lg" className="gap-2.5 shadow-md">
                  <IconWhatsApp className="w-5 h-5 text-[#172C46]" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>

              <Link href="#projects">
                <Button variant="secondary" size="lg" className="gap-2">
                  <span>Explore Selected Work</span>
                  <IconArrowRight className="w-4 h-4 text-[#172C46]" />
                </Button>
              </Link>
            </div>

            {/* Trust points */}
            <div className="hero-reveal mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#626A73] font-medium">
              <span className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                Fast Mobile-First Loading
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                WhatsApp Inquiry Integration
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                Direct Developer Collaboration
              </span>
            </div>
          </div>

          {/* Right: spatial 3D / editorial showcase */}
          <div className="hero-showcase lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main showcase surface: Sahara Tyre local project card */}
              <div className="rounded-3xl border border-[#E3DFD6] bg-white p-6 sm:p-7 shadow-floating relative z-10">
                {/* Browser chrome */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3DFD6]">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#E3DFD6]" />
                    <span className="h-3 w-3 rounded-full bg-[#E3DFD6]" />
                    <span className="h-3 w-3 rounded-full bg-[#E3DFD6]" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#858A91] tracking-wider uppercase">
                    Local Vapi Business Showcase
                  </span>
                </div>

                {/* Card body */}
                <div className="pt-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F26A3D]">
                        Automotive Digital Platform
                      </span>
                      <h3 className="text-xl font-bold text-[#172C46]">
                        Sahara Tyre — Vapi
                      </h3>
                      <p className="text-xs text-[#626A73] mt-0.5">
                        sahara-tyre.vercel.app
                      </p>
                    </div>
                    <Badge variant="tangerine">Live Platform</Badge>
                  </div>

                  {/* Interactive mockup detail */}
                  <div className="rounded-xl bg-[#F6F2E9] p-4 border border-[#E3DFD6] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#172C46]">
                        Tyre Catalogue & Sizing
                      </span>
                      <span className="text-[#F26A3D] font-bold">57 Sizes</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="rounded-lg bg-white p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">PCR</span>
                        <span className="text-[10px] text-[#858A91]">Passenger Cars</span>
                      </div>
                      <div className="rounded-lg bg-white p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">SUV</span>
                        <span className="text-[10px] text-[#858A91]">All-Terrain</span>
                      </div>
                      <div className="rounded-lg bg-white p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">CV</span>
                        <span className="text-[10px] text-[#858A91]">Commercial</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#172C46] text-white p-2.5 flex items-center justify-between text-xs">
                      <span>Quick Quote WhatsApp Inquiry</span>
                      <IconWhatsApp className="w-4 h-4 text-[#F26A3D]" />
                    </div>
                  </div>

                  {/* Benefit highlights */}
                  <div className="flex items-center justify-between text-xs text-[#626A73] pt-1">
                    <span>⚡ Optimized Load: 0.8s</span>
                    <span>📍 Vapi GIDC Market</span>
                  </div>
                </div>
              </div>

              {/* Floating spatial accent: tech stack */}
              <div
                className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-3 rounded-2xl glass-lavender p-3.5 shadow-card"
                aria-hidden="true"
              >
                <div className="rounded-xl bg-white p-2 shadow-xs text-[#F26A3D]">
                  <IconSparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#172C46]">
                    Next.js 16 & React 19
                  </span>
                  <span className="text-[11px] text-[#626A73]">
                    Zero CLS · Clean Core Web Vitals
                  </span>
                </div>
              </div>

              {/* Floating spatial accent: local reach */}
              <div
                className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-3 rounded-2xl bg-white border border-[#E3DFD6] p-3.5 shadow-card"
                aria-hidden="true"
              >
                <div className="rounded-xl bg-[#E9E5F5] p-2 text-[#172C46]">
                  <IconMapPin className="w-5 h-5 text-[#F26A3D]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#172C46]">
                    Vapi & South Gujarat
                  </span>
                  <span className="text-[11px] text-[#626A73]">
                    Direct Local Inquiries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic coverage ribbon */}
        <div className="mt-16 sm:mt-20 border-t border-[#E3DFD6] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#858A91]">
              Serving Local Businesses In:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-[#172C46]">
              {siteConfig.coverageAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white border border-[#E3DFD6] px-3 py-1 shadow-2xs hover:border-[#F26A3D] transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}