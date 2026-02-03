import {
  OakBorderWidthToken,
  oakBorderWidthTokens,
} from "@/styles/theme/borders";
import pxToRem from "@/styles/helpers/pxToRem";

export const parseBorder = (value?: OakBorderWidthToken | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (value in oakBorderWidthTokens) {
    return `${pxToRem(oakBorderWidthTokens[value])}rem solid`;
  }
};
