import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import {
  OakInnerPaddingToken,
  OakSpaceBetweenToken,
} from "@/styles/theme/spacing";

type PaddingValues = ResponsiveValues<OakInnerPaddingToken | null | undefined>;

export type PaddingStyleProps = {
  /**
   * Applies `padding` to all sides of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pa?: PaddingValues;
  /**
   * Applies `padding`  to the left and right of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $ph?: PaddingValues;
  /**
   * Applies `padding` to the top and bottom of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pv?: PaddingValues;
  /**
   * Applies `padding` to the left of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pl?: PaddingValues;
  /**
   * Applies `padding` to the right of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pr?: PaddingValues;
  /**
   * Applies `padding` to the top of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pt?: PaddingValues;
  /**
   * Applies `padding` to the bottom of the element
   *
   * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
   */
  $pb?: PaddingValues;
};

type MarginValue = "auto" | OakSpaceBetweenToken | null | undefined;
type MarginValues = ResponsiveValues<MarginValue>;

export type MarginStyleProps = {
  /**
   * Applies `margin` to all sides of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $ma?: MarginValues;
  /**
   * Applies `margin` to the left and right of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $mh?: MarginValues;
  /**
   * Applies `margin` to the top and bottom of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $mv?: MarginValues;
  /**
   * Applies `margin` to the left of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $ml?: MarginValues;
  /**
   * Applies `margin` to the right of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $mr?: MarginValues;
  /**
   * Applies `margin` to the top of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $mt?: MarginValues;
  /**
   * Applies `margin` to the bottom of the element
   *
   * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
   */
  $mb?: MarginValues;
};

const paddingAll = css<{ $pa?: PaddingValues }>`
  ${responsiveStyle("padding", (props) => props.$pa, parseSpacing)}
`;
const paddingHorizontal = css<{ $ph?: PaddingValues }>`
  ${responsiveStyle("padding-left", (props) => props.$ph, parseSpacing)}
  ${responsiveStyle("padding-right", (props) => props.$ph, parseSpacing)}
`;
const paddingVertical = css<{ $pv?: PaddingValues }>`
  ${responsiveStyle("padding-top", (props) => props.$pv, parseSpacing)}
  ${responsiveStyle("padding-bottom", (props) => props.$pv, parseSpacing)}
`;
const paddingLeft = css<{ $pl?: PaddingValues }>`
  ${responsiveStyle("padding-left", (props) => props.$pl, parseSpacing)}
`;
const paddingRight = css<{ $pr?: PaddingValues }>`
  ${responsiveStyle("padding-right", (props) => props.$pr, parseSpacing)}
`;
const paddingTop = css<{ $pt?: PaddingValues }>`
  ${responsiveStyle("padding-top", (props) => props.$pt, parseSpacing)}
`;
const paddingBottom = css<{ $pb?: PaddingValues }>`
  ${responsiveStyle("padding-bottom", (props) => props.$pb, parseSpacing)}
`;
const marginAll = css<{ $ma?: MarginValues }>`
  ${responsiveStyle("margin", (props) => props.$ma, parseSpacing)}
`;
const marginHorizontal = css<{ $mh?: MarginValues }>`
  ${responsiveStyle("margin-left", (props) => props.$mh, parseSpacing)}
  ${responsiveStyle("margin-right", (props) => props.$mh, parseSpacing)}
`;
const marginVertical = css<{ $mv?: MarginValues }>`
  ${responsiveStyle("margin-top", (props) => props.$mv, parseSpacing)}
  ${responsiveStyle("margin-bottom", (props) => props.$mv, parseSpacing)}
`;
const marginLeft = css<{ $ml?: MarginValues }>`
  ${responsiveStyle("margin-left", (props) => props.$ml, parseSpacing)}
`;
const marginRight = css<{ $mr?: MarginValues }>`
  ${responsiveStyle("margin-right", (props) => props.$mr, parseSpacing)}
`;
const marginTop = css<{ $mt?: MarginValues }>`
  ${responsiveStyle("margin-top", (props) => props.$mt, parseSpacing)}
`;
const marginBottom = css<{ $mb?: MarginValues }>`
  ${responsiveStyle("margin-bottom", (props) => props.$mb, parseSpacing)}
`;

export const marginStyle = css<MarginStyleProps>`
  ${marginAll}
  ${marginHorizontal}
  ${marginVertical}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
  ${marginBottom}
`;

export const paddingStyle = css<PaddingStyleProps>`
  ${paddingAll}
  ${paddingHorizontal}
  ${paddingVertical}
  ${paddingLeft}
  ${paddingRight}
  ${paddingTop}
  ${paddingBottom}
`;

export type SpacingStyleProps = PaddingStyleProps & MarginStyleProps;
export const spacingStyle = css<SpacingStyleProps>`
  ${paddingStyle}
  ${marginStyle}
`;
