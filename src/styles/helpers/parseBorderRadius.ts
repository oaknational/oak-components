import {
  OakAllBorderRadius,
  oakAllBorderRadiusPx,
} from "@/styles/theme/borders";

import pxToRem from "./pxToRem";

export const parseRadius = (value?: OakAllBorderRadius | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakAllBorderRadiusPx) {
    return `${pxToRem(oakAllBorderRadiusPx[value as OakAllBorderRadius])}rem`;
  }
};
