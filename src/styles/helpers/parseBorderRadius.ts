import pxToRem from "./pxToRem";

import {
  OakBorderRadiusToken,
  oakBorderRadiusTokens,
} from "@/styles/theme/borders";

export const parseRadius = (value?: OakBorderRadiusToken | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakBorderRadiusTokens) {
    return `${pxToRem(
      oakBorderRadiusTokens[value as OakBorderRadiusToken],
    )}rem`;
  }
};
