import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakAllSpacingToken } from "@/styles/theme/spacing";

type ScrollMarginValue = OakAllSpacingToken | null | undefined;
type ScrollMarginValues = ResponsiveValues<ScrollMarginValue>;

export type ScrollSnapStyleProps = {
  /**
   * Applies `scroll-margin-top` to the element
   *
   * Accepts any Oak spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $scrollMarginTop?: ScrollMarginValues;
  /**
   * Applies `scroll-margin-left` to the element
   *
   * Accepts any Oak spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $scrollMarginLeft?: ScrollMarginValues;
};

const scrollMarginTop = css<{ $scrollMarginTop?: ScrollMarginValues }>`
  ${responsiveStyle(
    "scroll-margin-top",
    (props) => props.$scrollMarginTop,
    parseSpacing,
  )}
`;
const scrollMarginLeft = css<{ $scrollMarginLeft?: ScrollMarginValues }>`
  ${responsiveStyle(
    "scroll-margin-left",
    (props) => props.$scrollMarginLeft,
    parseSpacing,
  )}
`;

export const scrollSnapStyle = css<ScrollSnapStyleProps>`
  ${scrollMarginTop}
  ${scrollMarginLeft}
`;
