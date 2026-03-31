import { renderHook } from "@testing-library/react";

import { useBreakpoint } from "./useBreakpoint";

const setMatchMedia = (mediaQuery: string) => {
  globalThis.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === mediaQuery,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};
describe("useBreakpoint", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns desktop", () => {
    setMatchMedia("(min-width: 1280px)");
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toEqual("desktop");
  });

  it("returns tablet", () => {
    setMatchMedia("(min-width: 750px) and (max-width: 1279px)");
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toEqual("tablet");
  });

  it("returns mobile", () => {
    setMatchMedia("(max-width: 749px)");
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toEqual("mobile");
  });
});
