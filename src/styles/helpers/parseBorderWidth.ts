import { OakBorderWidthToken, oakBorderWidthTokens } from "../theme";

import pxToRem from "./pxToRem";

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
