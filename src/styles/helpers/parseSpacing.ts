import pxToRem from "@/styles/helpers/pxToRem";
import {
  OakAllSpacingToken,
  OakInnerPaddingToken,
  OakSpaceBetweenToken,
  OakCombinedSpacingToken,
  oakAllSpacingTokens,
  oakInnerPaddingTokens,
  oakSpaceBetweenTokens,
} from "@/styles/theme/spacing";

/**
 * - takes any of OakInnerPadding, OakSpaceBetween, OakAllSpacing, and other accepted values,
 * - derives and returns the corresponding css value
 * - converting to rem where necessary
 */
export function parseSpacing(value?: OakCombinedSpacingToken | null) {
  // if value is null or undefined, return undefined
  if (value === undefined || value === null) {
    return undefined;
  }

  // mapped values
  if (value in oakAllSpacingTokens) {
    return `${pxToRem(oakAllSpacingTokens[value as OakAllSpacingToken])}rem`; // NB. type assertion is necessary because the OakAllSpacing type is dervied from oakAllSpacingPx
  }

  if (value in oakInnerPaddingTokens) {
    const v = oakInnerPaddingTokens[value as OakInnerPaddingToken];
    return `${pxToRem(oakAllSpacingTokens[v as OakAllSpacingToken])}rem`;
  }

  if (value in oakSpaceBetweenTokens) {
    const v = oakSpaceBetweenTokens[value as OakSpaceBetweenToken];
    return `${pxToRem(oakAllSpacingTokens[v as OakAllSpacingToken])}rem`;
  }

  // value is a number, percentage or css value
  return value;
}
