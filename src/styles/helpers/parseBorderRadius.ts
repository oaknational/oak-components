import pxToRem from "./pxToRem";

import {
  OakBorderRadiusToken,
  oakBorderRadiusTokens,
} from "@/styles/theme/borders";

export const parseBorderRadius = (value?: OakBorderRadiusToken | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakBorderRadiusTokens) {
    return `${pxToRem(oakBorderRadiusTokens[value])}rem`;
  }
};
