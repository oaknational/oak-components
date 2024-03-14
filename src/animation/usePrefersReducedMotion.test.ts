import { renderHook } from "@testing-library/react";

import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

window.matchMedia = jest.fn().mockReturnValue({
  matches: false,
});

describe(usePrefersReducedMotion, () => {
  it("is true when the media query matches", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as MediaQueryList);

    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(window.matchMedia).toHaveBeenCalledWith(
      "(prefers-reduced-motion: reduce)",
    );
    expect(result.current).toBe(true);
  });
});
