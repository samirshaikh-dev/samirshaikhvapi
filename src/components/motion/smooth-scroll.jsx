"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

/**
 * SmoothScroll — Lenis smooth scrolling wired into the GSAP ticker.
 *
 * Guardrails (AI_RULE.md §5, .agents/skills/accessible-animation/SKILL.md):
 * - Tier 1 motion: Lenis smooth-scroll hijacking is NOT instantiated when the user
 *   prefers reduced motion. Native scrolling remains fully usable.
 * - Lenis and ScrollTrigger share a single ticker so scrubbed animations stay in
 *   sync with the eased scroll position (no competing RAF loops).
 * - Only transform/opacity are animated elsewhere; Lenis itself only eases scroll.
 */
export function SmoothScroll({ children }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -80 },
      smoothWheel: true,
    });

    // Keep ScrollTrigger aware of every eased scroll frame.
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reduced]);

  return children;
}