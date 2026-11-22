"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";

/**
 * Reveal — scroll-triggered entrance animation primitive.
 *
 * Design intent (Tubik 2026 "purposeful motion" + AVOID.md §8): motion communicates
 * that content has arrived and establishes reading order; it never delays access.
 *
 * Implementation rules:
 * - The hidden start state is set in JS (gsap.set), never in CSS. If JS fails or
 *   reduced-motion is on, content is simply visible — no permanently blank sections.
 * - Animate transform/opacity only (GPU-friendly; no layout thrash).
 * - Tiering (.agents/skills/accessible-animation/SKILL.md):
 *     normal  -> Tier 2: short fade + small upward rise (24px)
 *     reduced -> Tier 3: opacity fade only (no displacement)
 *
 * @param {object} props
 * @param {"up"|"fade"} props.variant - "up" adds a small rise; "fade" is opacity only.
 * @param {number} props.delay - stagger delay in seconds.
 * @param {number} props.y - rise distance in px (ignored for "fade").
 * @param {string} props.as - element/component tag to render.
 * @param {boolean} props.once - animate once (default) vs. replay on re-enter.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  y = 24,
  as: Tag = "div",
  once = true,
  className,
  ...props
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    // Tier 3 (reduced) or variant "fade": opacity only, no displacement.
    const isFadeOnly = reduced || variant === "fade";
    const fromVars = isFadeOnly
      ? { autoAlpha: 0 }
      : { autoAlpha: 0, y };

    const toVars = isFadeOnly
      ? { autoAlpha: 1, duration: 0.3, delay, ease: "power1.out" }
      : { autoAlpha: 1, y: 0, duration: 0.7, delay, ease: "power3.out" };

    const ctx = gsap.context(() => {
      gsap.set(el, fromVars);
      gsap.to(el, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once,
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, variant, delay, y, once]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}

/**
 * RevealGroup — staggers a set of children entering the viewport together.
 * Uses ScrollTrigger.batch so a grid reveals as one gesture, not one trigger per cell.
 *
 * @param {object} props
 * @param {number} props.stagger - seconds between each child.
 * @param {number} props.y - rise distance in px.
 * @param {string} props.selector - child selector to animate (default ":scope > *").
 */
export function RevealGroup({
  children,
  stagger = 0.1,
  y = 20,
  selector = ":scope > *",
  className,
  ...props
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const items = root.querySelectorAll(selector);
    if (items.length === 0) return;

    const isFadeOnly = reduced;

    const ctx = gsap.context(() => {
      gsap.set(items, isFadeOnly ? { autoAlpha: 0 } : { autoAlpha: 0, y });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            ...(isFadeOnly ? {} : { y: 0 }),
            duration: isFadeOnly ? 0.3 : 0.6,
            stagger,
            ease: "power3.out",
            overwrite: true,
          }),
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, stagger, y, selector]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}