import { create } from "@storybook/theming/create";
import assert from "assert";

// @ts-expect-error:  this is an svg
import brandImage from "../assets/logo.svg";
import { oakDefaultTheme } from "../src/styles/theme/default.theme";
import { OakUiRoleToken, oakColorTokens } from "../src/styles/theme/color";
import { oakBorderRadiusTokens } from "../src/styles/theme/borders";

export const oakStorybookTheme = create({
  base: "light",
  brandTitle: "Oak National Academy",
  brandUrl: "https://www.thenational.academy",
  brandImage,
  fontBase: "Lexend, sans-serif",
  colorPrimary: oakColorTokens.mint,
  colorSecondary: oakColorTokens.oakGreen,

  appBg: getUIColor("bg-decorative1-very-subdued"),
  appBorderColor: getUIColor("border-neutral"),
  appBorderRadius: oakBorderRadiusTokens["border-radius-m"],

  textColor: getUIColor("text-primary"),
  textInverseColor: getUIColor("text-inverted"),
  textMutedColor: getUIColor("text-subdued"),

  inputBorder: getUIColor("border-primary"),
  inputTextColor: getUIColor("text-primary"),
  inputBorderRadius: oakBorderRadiusTokens["border-radius-m"],

  barTextColor: getUIColor("text-primary"),
  barSelectedColor: getUIColor("text-primary"),
  buttonBg: getUIColor("bg-btn-secondary"),
  buttonBorder: getUIColor("border-primary"),
  barHoverColor: getUIColor("text-primary"),
});

function getUIColor(uiColor: OakUiRoleToken) {
  const colorName = oakDefaultTheme.uiColors[uiColor];
  assert(colorName, `Color '${uiColor}' not found in theme`);

  return oakColorTokens[colorName];
}
