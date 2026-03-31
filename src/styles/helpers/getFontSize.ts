import { oakFontSizeTokens, oakFontTokens } from "@/styles/theme/typography";

/** Returns the font size in pixels for a given font size token */
export function getFontSize(token: keyof typeof oakFontTokens): number {
  const fontSizeToken = oakFontTokens[token][0];
  return oakFontSizeTokens[fontSizeToken];
}
