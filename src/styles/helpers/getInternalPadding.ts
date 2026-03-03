import { getFontSize } from "./getFontSize";

import { OakMultilineTextProps } from "@/components/form-elements/OakMultilineText/OakMultilineText";

export const MAX_PADDING = 12;

export function getInternalPadding(
  height: OakMultilineTextProps["$height"],
): string {
  const heightNumber =
    typeof height === "string" ? parseInt(height.replace("spacing-", "")) : 40;
  const textLineHeight = Math.ceil(getFontSize("body-1") * 1.4);
  const padding = Math.max(
    Math.floor((heightNumber - textLineHeight) / 2) - 1,
    0,
  );
  return `${padding > MAX_PADDING ? MAX_PADDING : padding}px`;
}
