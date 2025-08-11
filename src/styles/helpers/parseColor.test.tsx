import { PropsWithTheme } from "@/styles/theme/theme";
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
    const cast = func as ({ theme }: PropsWithTheme) => string;
    oakDefaultTheme.uiColors["text-primary"] = "mint";
    const res = cast({ theme: oakDefaultTheme });
    expect(res).toBe("#bef2bd");
  });
});
