import {
  FontWeight,
  LetterSpacing,
  OakAllFonts,
  oakAllFontSizes,
  oakAllFonts,
} from "../theme/fonts";
import pxToRem from "./pxToRem";

export const parseFontWeight = (
  font?: OakAllFonts | null,
): FontWeight | undefined => {
  if (!font) return;
  return oakAllFonts[font][2];
};

export const parseFontSize = (
  font?: OakAllFonts | null,
): string | null | undefined => {
  if (!font) return;
  const fontSizePx = oakAllFontSizes[oakAllFonts[font][0]];
  return `${pxToRem(fontSizePx)}rem`;
};
export const parseLineHeight = (
  font?: OakAllFonts | null,
): string | null | undefined => {
  if (!font) return;
  const lineHeight = oakAllFonts[font][1];
  return `${pxToRem(lineHeight)}rem`;
};
export const parseLetterSpacing = (
  font?: OakAllFonts | null,
): LetterSpacing | undefined => {
  if (!font) return;
  return oakAllFonts[font][3];
};
