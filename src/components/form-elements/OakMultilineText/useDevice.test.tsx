import React from "react";
import "@testing-library/jest-dom";

import { useDevice } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { useMediaQuery } from "@/hooks/useMediaQuery";

jest.mock("@/hooks/useMediaQuery", () => ({
  __esModule: true,
  useMediaQuery: jest.fn(() => false),
}));

describe("useDevice", () => {
  it("returns the correct value for desktop", () => {
    jest.mocked(useMediaQuery).mockReturnValueOnce(true);

    const mockFn = jest.fn();
    const TestComponent = () => {
      const value = useDevice(["desktop", "tablet", "mobile"]);
      mockFn(value);
      return null;
    };

    renderWithTheme(<TestComponent />);
    expect(mockFn).toHaveBeenCalledWith("desktop");
  });

  it("returns the correct value for tablet", () => {
    jest
      .mocked(useMediaQuery)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const mockFn = jest.fn();
    const TestComponent = () => {
      const value = useDevice(["desktop", "tablet", "mobile"]);
      mockFn(value);
      return null;
    };

    renderWithTheme(<TestComponent />);
    expect(mockFn).toHaveBeenCalledWith("tablet");
  });

  it("returns the correct value for mobile", () => {
    const mockFn = jest.fn();
    const TestComponent = () => {
      const value = useDevice(["desktop", "tablet", "mobile"]);
      mockFn(value);
      return null;
    };

    renderWithTheme(<TestComponent />);
    expect(mockFn).toHaveBeenCalledWith("mobile");
  });

  it("returns the correct value when given non-array value", () => {
    const mockFn = jest.fn();
    const TestComponent = () => {
      const value = useDevice("foo");
      mockFn(value);
      return null;
    };

    renderWithTheme(<TestComponent />);
    expect(mockFn).toHaveBeenCalledWith("foo");
  });
});
