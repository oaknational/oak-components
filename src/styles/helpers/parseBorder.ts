import { OakAllBorderWidths, oakAllBorderWidthsPx } from "../theme/borders";

import pxToRem from "./pxToRem";

export const parseBorder = (value?: OakAllBorderWidths | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakAllBorderWidthsPx) {
    return `${pxToRem(
      oakAllBorderWidthsPx[value as OakAllBorderWidths],
    )}rem solid`;
  }
};
