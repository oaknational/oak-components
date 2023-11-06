import pxToRem from "./pxToRem";

import {
  OakAllBorderRadius,
  oakAllBorderRadiusPx,
} from "@/styles/theme/borders";

export const parseRadius = (value?: OakAllBorderRadius | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakAllBorderRadiusPx) {
    return `${pxToRem(oakAllBorderRadiusPx[value as OakAllBorderRadius])}rem`;
  }
};
