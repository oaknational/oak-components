import { DefaultTheme, ThemeProps } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import { oakDefaultTheme } from "@/styles/theme/default.theme";

describe("parseColor", () => {
  it("should return undefined if value is undefined", () => {
    expect(parseColor()).toBeUndefined();
  });

  it("should return undefined if value is null", () => {
    expect(parseColor(null)).toBeUndefined();
  });

  it("should return the correct color if value is a valid OakColor", () => {
    expect(parseColor("mint")).toBe("#bef2bd");
  });

  it("should render the correct color if value is a valid OakUiRole", () => {
    const func = parseColor("text-primary");
    expect(func).toBeInstanceOf(Function);
    const cast = func as ({ theme }: ThemeProps<DefaultTheme>) => string;
    oakDefaultTheme.uiColors["text-primary"] = "mint";
    const res = cast({ theme: oakDefaultTheme });
    expect(res).toBe("#bef2bd");
  });

  describe("custom semantic tokens", () => {
    it("returns CSS var for custom-surface-primary", () => {
      expect(parseColor("custom-surface-primary")).toBe(
        "var(--custom-surface-primary)",
      );
    });

    it("returns CSS var for custom-text-muted", () => {
      expect(parseColor("custom-text-muted")).toBe("var(--custom-text-muted)");
    });

    it("returns CSS var for all custom token categories", () => {
      expect(parseColor("custom-border-subtle")).toBe(
        "var(--custom-border-subtle)",
      );
      expect(parseColor("custom-interactive-hover")).toBe(
        "var(--custom-interactive-hover)",
      );
      expect(parseColor("custom-shadow-strong")).toBe(
        "var(--custom-shadow-strong)",
      );
    });

    it("existing Oak color tokens still work", () => {
      expect(parseColor("mint")).toBe("#bef2bd");
    });

    it("existing UI role tokens still work", () => {
      const func = parseColor("bg-decorative1-main");
      expect(typeof func).toBe("function");
    });
  });
});
