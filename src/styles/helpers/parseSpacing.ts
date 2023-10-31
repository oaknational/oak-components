import {
  OakAllSpacing,
  OakInnerPadding,
  OakSpaceBetween,
  OakParsableSpacing,
  oakAllSpacingPx,
  oakInnerPaddingAllSpacing,
  oakSpaceBetweenAllSpacing,
} from "@/styles/theme/spacing";

const BASE_FONT_SIZE_PX = 16;
export const REM_DP = 3;

function pxToRem(px: number): number {
  return Number((px / BASE_FONT_SIZE_PX).toFixed(REM_DP));
}

/**
 * - takes any of OakInnerPadding, OakSpaceBetween, OakAllSpacing, and other accepted values,
 * - derives and returns the corresponding css value
 * - converting to rem where necessary
 */
export function parseSpacing(value?: OakParsableSpacing | null) {
  // if value is null or undefined, return undefined
  if (value === undefined || value === null) {
    return undefined;
  }

  // mapped values
  if (value in oakAllSpacingPx) {
    return `${pxToRem(oakAllSpacingPx[value as OakAllSpacing])}rem`; // NB. type assertion is necessary because the OakAllSpacing type is dervied from oakAllSpacingPx
  }

  if (value in oakInnerPaddingAllSpacing) {
    const v = oakInnerPaddingAllSpacing[value as OakInnerPadding];
    return `${pxToRem(oakAllSpacingPx[v as OakAllSpacing])}rem`;
  }

  if (value in oakSpaceBetweenAllSpacing) {
    const v = oakSpaceBetweenAllSpacing[value as OakSpaceBetween];
    return `${pxToRem(oakAllSpacingPx[v as OakAllSpacing])}rem`;
  }

  // value is a number, percentage or css value
  return value;
}
