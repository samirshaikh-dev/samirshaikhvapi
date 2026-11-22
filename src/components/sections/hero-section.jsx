"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
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

// Three.js cannot be server-rendered — load the hero scene client-side only.
const HeroScene = dynamic(() => import("@/components/motion/hero-scene"), {
  ssr: false,
  loading: () => null,
});

export function HeroSection() {
  const rootRef = useRef(null);
  const sceneWrapRef = useRef(null);
  const [sceneActive, setSceneActive] = useState(true);
  const reduced = useReducedMotion();

  // Pause the WebGL render loop when the 3D scene scrolls out of view
  // (.agents/skills/animate: nonessential loops must stop offscreen).
  useEffect(() => {
    const el = sceneWrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setSceneActive(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const from = reduced ? { autoAlpha: 0 } : { autoAlpha: 0, y: 28 };
      const to = reduced
        ? { autoAlpha: 1, duration: 0.3, stagger: 0.05, ease: "power1.out" }
        : { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out" };

      gsap.from(".hero-reveal", { ...from, ...to });

      // Tier 1 parallax: showcase card drifts as the hero scrolls out.
      if (!reduced) {
        gsap.to(".hero-showcase", {
          yPercent: -10,
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

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left: editorial headline & conversion messaging */}
          <div className="lg:col-span-6">
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

            <h1 className="hero-reveal type-display text-[#172C46] mt-6">
              Modern Websites
              <br className="hidden sm:block" /> for Growing Businesses in{" "}
              <span className="text-[#F26A3D]">Vapi</span>.
            </h1>

            <p className="hero-reveal mt-6 max-w-xl type-lede text-[#626A73]">
              I help local manufacturers, clinics, retail shops, and growing
              companies build a stronger digital presence through high-performance
              websites, industrial product catalogues, and intelligent customer
              tools.
            </p>

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

          {/* Right: authored 3D focal moment + spatial showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft lavender depth accent behind the scene */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#E9E5F5]/60 blur-3xl"
              />

              {/* Focal 3D canvas — mounted only when motion is allowed.
                  Under reduced motion a static spatial showcase renders instead. */}
              <div
                ref={sceneWrapRef}
                className="relative h-[300px] sm:h-[380px] lg:h-[440px] w-full"
                aria-hidden="true"
              >
                {reduced ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="rounded-3xl border border-[#E3DFD6] bg-white px-8 py-10 shadow-floating text-center">
                      <span className="text-4xl font-black tracking-tight text-[#172C46]">
                        Samir<span className="text-[#F26A3D]">.</span>
                      </span>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#858A91]">
                        Vapi · Web · AI
                      </p>
                    </div>
                  </div>
                ) : (
                  <HeroScene active={sceneActive} />
                )}
              </div>

              {/* Supporting spatial showcase card — Sahara Tyre local project */}
              <div className="hero-showcase relative z-10 mt-2 sm:-mt-6">
                <div className="rounded-2xl border border-[#E3DFD6] bg-white p-5 shadow-floating">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E3DFD6]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E3DFD6]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E3DFD6]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E3DFD6]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#858A91] tracking-wider uppercase">
                      Local Vapi Showcase
                    </span>
                  </div>

                  <div className="pt-3 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26A3D]">
                          Automotive Digital Platform
                        </span>
                        <h3 className="text-lg font-bold text-[#172C46]">
                          Sahara Tyre — Vapi
                        </h3>
                        <p className="text-[11px] text-[#626A73]">
                          sahara-tyre.vercel.app
                        </p>
                      </div>
                      <Badge variant="tangerine" className="text-[10px]">
                        Live
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                      <div className="rounded-lg bg-[#F6F2E9] p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">PCR</span>
                        <span className="text-[#858A91]">Passenger</span>
                      </div>
                      <div className="rounded-lg bg-[#F6F2E9] p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">SUV</span>
                        <span className="text-[#858A91]">All-Terrain</span>
                      </div>
                      <div className="rounded-lg bg-[#F6F2E9] p-2 border border-[#E3DFD6]">
                        <span className="block font-bold text-[#172C46]">CV</span>
                        <span className="text-[#858A91]">Commercial</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#626A73]">
                      <span className="flex items-center gap-1">
                        <IconCheck className="w-3 h-3 text-[#F26A3D]" /> 57+ tyre sizes
                      </span>
                      <span className="flex items-center gap-1">
                        <IconMapPin className="w-3 h-3 text-[#F26A3D]" /> Vapi GIDC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech accent */}
              <div
                className="hidden sm:flex absolute top-6 -left-4 z-20 items-center gap-2 rounded-xl glass-lavender p-2.5 shadow-card"
                aria-hidden="true"
              >
                <IconSparkles className="w-4 h-4 text-[#F26A3D]" />
                <span className="text-[11px] font-bold text-[#172C46]">
                  Next.js 16 · React 19
                </span>
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