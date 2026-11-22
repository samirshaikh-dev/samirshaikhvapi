"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect user prefers-reduced-motion setting.
 * Tiered accessibility support per WCAG 2.3.3.
 * @returns {boolean}
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}
