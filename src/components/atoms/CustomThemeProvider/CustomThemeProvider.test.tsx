import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {
  CustomThemeProvider,
  type CustomThemeConfig,
} from "./CustomThemeProvider";

describe("CustomThemeProvider", () => {
  const minimalConfig: CustomThemeConfig = {
    light: {
      surface: { primary: "#ffffff" },
      text: { primary: "#222222" },
    },
    dark: {
      surface: { primary: "#1a1a1a" },
      text: { primary: "#f0f0f0" },
    },
  };

  it("renders children", () => {
    render(
      <CustomThemeProvider config={minimalConfig}>
        <div data-testid="child">Hello</div>
      </CustomThemeProvider>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("injects style element with CSS variables", () => {
    const { container } = render(
      <CustomThemeProvider config={minimalConfig}>
        <div>Content</div>
      </CustomThemeProvider>,
    );
    const styleElement = container.querySelector(
      "style#custom-theme-vars",
    ) as HTMLStyleElement;
    expect(styleElement).toBeInTheDocument();
    expect(styleElement.textContent).toContain("--custom-surface-primary");
    expect(styleElement.textContent).toContain("light-dark(#ffffff, #1a1a1a)");
  });

  it("contains color-scheme declaration", () => {
    const { container } = render(
      <CustomThemeProvider config={minimalConfig}>
        <div>Content</div>
      </CustomThemeProvider>,
    );
    const styleElement = container.querySelector(
      "style#custom-theme-vars",
    ) as HTMLStyleElement;
    expect(styleElement.textContent).toContain("color-scheme: light dark");
  });

  it("updates CSS when config changes", () => {
    const { container, rerender } = render(
      <CustomThemeProvider config={minimalConfig}>
        <div>Content</div>
      </CustomThemeProvider>,
    );

    const updatedConfig: CustomThemeConfig = {
      light: {
        surface: { primary: "#fafafa" },
        text: { primary: "#111111" },
      },
      dark: {
        surface: { primary: "#0a0a0a" },
        text: { primary: "#eeeeee" },
      },
    };

    rerender(
      <CustomThemeProvider config={updatedConfig}>
        <div>Content</div>
      </CustomThemeProvider>,
    );

    const styleElement = container.querySelector(
      "style#custom-theme-vars",
    ) as HTMLStyleElement;
    expect(styleElement.textContent).toContain("light-dark(#fafafa, #0a0a0a)");
  });
});
