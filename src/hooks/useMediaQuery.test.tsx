import { renderHook } from "@testing-library/react";

import { useMediaQuery } from "./useMediaQuery";

import * as responsiveStyle from "@/styles/utils/responsiveStyle";
const setMatchMedia = (mediaQuery: string) => {
  globalThis.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === mediaQuery,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};
describe("useMediaQuery", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns false if media query does not match", () => {
    setMatchMedia("(min-width: 1280px)");
    jest
      .spyOn(responsiveStyle, "getMediaQuery")
      .mockReturnValue("(max-width: 750px)");
    const { result } = renderHook(() => useMediaQuery("mobile"));
    expect(result.current).toBeFalsy();
  });

  it("returns true if media query matches", () => {
    setMatchMedia("(max-width: 749px)");
    jest
      .spyOn(responsiveStyle, "getMediaQuery")
      .mockReturnValue("(max-width: 749px)");
    const { result } = renderHook(() => useMediaQuery("mobile"));
    expect(result.current).toBeTruthy();
  });
});
