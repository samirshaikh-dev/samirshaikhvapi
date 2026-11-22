"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollProgress — a thin reading-progress line pinned to the top of the viewport.
 *
 * Communicates position within the page (purposeful motion, Tubik 2026). Uses a
 * transform scaleX tied to overall document scroll progress via ScrollTrigger scrub,
 * so it costs one transform per frame and never triggers layout. Safe under reduced
 * motion (it is a position indicator, not self-motion) — it simply tracks scroll.
 */
export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bar = barRef.current;
    if (!bar) return;

    const tween = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-[#F26A3D]"
      />
    </div>
  );
}