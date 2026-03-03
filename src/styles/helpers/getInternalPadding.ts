import { getFontSize } from "./getFontSize";

import { OakMultilineTextProps } from "@/components/form-elements/OakMultilineText/OakMultilineText";

export function getInternalPadding(
  height: OakMultilineTextProps["$height"],
): string {
  const heightNumber =
    typeof height === "string" ? parseInt(height.replace("spacing-", "")) : 56;
  const textLineHeight = Math.ceil(getFontSize("body-1") * 1.4);
  return `${Math.floor((heightNumber - textLineHeight) / 2) - 1}px`;
}
