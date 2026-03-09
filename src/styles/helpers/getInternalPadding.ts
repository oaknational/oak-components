import { getFontSize } from "./getFontSize";

import { OakMultilineTextProps } from "@/components/form-elements/OakMultilineText/OakMultilineText";

export const MAX_PADDING = 12;

/** Returns the internal padding for a textarea component based on the height and font size. */
export function getInternalPadding(
  height: OakMultilineTextProps["$height"],
): string {
  if (typeof height !== "string") {
    return `${MAX_PADDING}px`;
  }
  const heightNumber = parseInt(height.replace("spacing-", ""));
  const textLineHeight = Math.ceil(getFontSize("body-1") * 1.4);
  const padding = Math.max(
    Math.floor((heightNumber - textLineHeight) / 2) - 1,
    0,
  );
  return `${Math.min(padding, MAX_PADDING)}px`;
}
