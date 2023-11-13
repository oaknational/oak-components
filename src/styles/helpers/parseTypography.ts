import {
  OakFontToken,
  oakFontSizeTokens,
  oakFontTokens,
} from "@/styles/theme/typography";
import pxToRem from "@/styles/helpers/pxToRem";

export const parseFontWeight = (font?: OakFontToken | null) => {
  if (!font) return;
  return oakFontTokens[font]?.[2];
};

export const parseFontSize = (
  font?: OakFontToken | null,
): string | null | undefined => {
  if (!font) return;
  const fontSize = oakFontTokens[font]?.[0];
  if (!fontSize) return;
  const fontSizePx = oakFontSizeTokens[fontSize];
  return `${pxToRem(fontSizePx)}rem`;
};
export const parseLineHeight = (
  font?: OakFontToken | null,
): string | null | undefined => {
  if (!font) return;
  const lineHeight = oakFontTokens[font]?.[1];
  if (!lineHeight) return;
  return `${pxToRem(lineHeight)}rem`;
};
export const parseLetterSpacing = (font?: OakFontToken | null) => {
  if (!font) return;
  return oakFontTokens[font]?.[3];
};
