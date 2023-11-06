import {
  OakAllBorderWidths,
  oakAllBorderWidthsPx,
} from "@/styles/theme/borders";
import pxToRem from "@/styles/helpers/pxToRem";

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
