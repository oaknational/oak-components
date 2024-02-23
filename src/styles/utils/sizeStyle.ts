import { css, CSSProperties } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakCombinedSpacingToken } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type SizeValues = ResponsiveValues<OakCombinedSpacingToken | null | undefined>;

export type SizeStyleProps = {
  /**
   * Sets the `width` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $width?: SizeValues;
  /**
   * Sets the `min-width` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $minWidth?: SizeValues;
  /**
   * Sets the `max-width` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $maxWidth?: SizeValues;
  /**
   * Sets the `height` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $height?: SizeValues;
  /**
   * Sets the `min-height` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $minHeight?: SizeValues;
  /**
   * Sets the `max-height` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $maxHeight?: SizeValues;
  /**
   * Sets the `aspect-ratio` CSS property of the element.
   *
   * Accepts an `aspect-ratio` value or a responsive array of `aspect-ratio` values.
   */
  $aspectRatio?: ResponsiveValues<CSSProperties["aspectRatio"]>;
  /**
   * Sets the `box-sizing` CSS property of the element.
   *
   * Accepts a `box-sizing` value or a responsive array of `box-sizing` values.
   */
  $boxSizing?: ResponsiveValues<CSSProperties["boxSizing"]>;
};

export const sizeStyle = css<SizeStyleProps>`
  ${responsiveStyle("width", (props) => props.$width, parseSpacing)}
  ${responsiveStyle("min-width", (props) => props.$minWidth, parseSpacing)}
  ${responsiveStyle("max-width", (props) => props.$maxWidth, parseSpacing)}
  ${responsiveStyle("height", (props) => props.$height, parseSpacing)}
  ${responsiveStyle("min-height", (props) => props.$minHeight, parseSpacing)}
  ${responsiveStyle("max-height", (props) => props.$maxHeight, parseSpacing)}
  ${responsiveStyle("aspect-ratio", (props) => props.$aspectRatio)}
  ${responsiveStyle("box-sizing", (props) => props.$boxSizing)}
`;
