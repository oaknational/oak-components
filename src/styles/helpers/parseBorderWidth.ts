import pxToRem from "./pxToRem";

import { OakBorderWidthToken, oakBorderWidthTokens } from "@/styles/theme";

export function parseBorderWidth(
  value: OakBorderWidthToken | null | undefined,
) {
  if (!value) {
    return undefined;
  }

  if (value in oakBorderWidthTokens) {
    return `${pxToRem(oakBorderWidthTokens[value])}rem`;
  }
}
