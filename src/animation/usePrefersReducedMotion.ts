import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested that the system minimize the amount of non-essential motion it uses.
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return prefersReducedMotion;
}
