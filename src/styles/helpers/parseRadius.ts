import { OakAllBorderRadius, oakAllBorderRadiusPX } from "../theme/borders";

import pxToRem from "./pxToRem";

export const parseRadius = (value?: OakAllBorderRadius | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakAllBorderRadiusPX) {
    return `${pxToRem(oakAllBorderRadiusPX[value as OakAllBorderRadius])}rem`;
  }
};
