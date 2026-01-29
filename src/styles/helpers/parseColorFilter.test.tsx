import { DefaultTheme, ThemeProps } from "styled-components";

import { parseColorFilter } from "./parseColorFilter";

import { oakDefaultTheme } from "@/styles/theme/default.theme";

describe("parseColor", () => {
  it("should return undefined if value is undefined", () => {
    expect(parseColorFilter()).toBeUndefined();
  });

  it("should return undefined if value is null", () => {
    expect(parseColorFilter(null)).toBeUndefined();
  });

  it("should return the correct filter if value is a valid OakUiRoleToken", () => {
    const func = parseColorFilter("icon-error");
    expect(func).toBeInstanceOf(Function);
    const cast = func as ({ theme }: ThemeProps<DefaultTheme>) => string;
    oakDefaultTheme.uiColors["icon-error"] = "red";
    const res = cast({ theme: oakDefaultTheme });
    expect(res).toBe(
      "invert(13%) sepia(78%) saturate(5255%) hue-rotate(337deg) brightness(88%) contrast(111%)",
    );
  });
});
