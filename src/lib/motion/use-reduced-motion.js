"use client";

import { useState, useEffect } from "react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Returns true when the user has requested reduced motion at the OS level.
 * Follows .agents/skills/accessible-animation/SKILL.md: motion is tiered, not nuked.
 * Initializes to false (motion) on the server to avoid hydration mismatches, then
 * re-syncs on the client and on live changes to the OS setting.
 *
 * @returns {boolean}
 */
export function useReducedMotion() {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(REDUCE_QUERY).matches
      : false;

  const [reduced, setReduced] = useState(get);

  useEffect(() => {
    const mq = window.matchMedia(REDUCE_QUERY);
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}