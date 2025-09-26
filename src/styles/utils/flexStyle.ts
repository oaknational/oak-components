import { CSSProperties } from "react";
import { css } from "styled-components";

import type { DisplayStyleProps } from "./displayStyle";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import {
  OakAllSpacingToken,
  OakCombinedSpacingToken,
  OakSpaceBetweenToken,
} from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type FlexStyleProps = DisplayStyleProps & {
  /**
   * Sets the `flex-direction` CSS property of the element.
   *
   * Accepts a `flex-direction` value or a responsive array of flex-direction values.
   */
  $flexDirection?: ResponsiveValues<CSSProperties["flexDirection"]>;
  /**
   * Sets the `flex-wrap` CSS property of the element.
   *
   * Accepts a `flex-wrap` value or a responsive array of flex-wrap values.
   */
  $flexWrap?: ResponsiveValues<CSSProperties["flexWrap"]>;
  /**
   * Sets the `align-items` CSS property of the element.
   *
   * Accepts an `align-items` value or a responsive array of `align-items` values.
   */
  $alignItems?: ResponsiveValues<CSSProperties["alignItems"]>;
  /**
   * Sets the `align-content` CSS property of the element.
   *
   * Accepts an `align-content` value or a responsive array of `align-content` values.
   */
  $alignContent?: ResponsiveValues<CSSProperties["alignContent"]>;
  /**
   * Sets the `justify-content` CSS property of the element.
   *
   * Accepts a `justify-content` value or a responsive array of `justify-content` values.
   */
  $justifyContent?: ResponsiveValues<CSSProperties["justifyContent"]>;
  /**
   * Sets the `align-self` CSS property of the element.
   *
   * Accepts an `align-self` value or a responsive array of `align-self` values.
   */
  $alignSelf?: ResponsiveValues<CSSProperties["alignSelf"]>;
  /**
   * Sets the `flex-grow` CSS property of the element.
   *
   * Accepts a `flex-grow` value or a responsive array of `flex-grow` values.
   */
  $flexGrow?: ResponsiveValues<CSSProperties["flexGrow"]>;
  /**
   * Sets the `flex-shrink` CSS property of the element.
   *
   * Accepts a `flex-shrink` value or a responsive array of `flex-shrink` values.
   */
  $flexShrink?: ResponsiveValues<CSSProperties["flexShrink"]>;
  /**
   * Sets the `order` CSS property of the element.
   *
   * Accepts an `order` value or a responsive array of `order` values.
   */
  $order?: ResponsiveValues<CSSProperties["order"]>;
  /**
   * Sets the `flex-basis` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
  /**
   * Sets the `gap` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $gap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  /**
   * Sets the `column-gap` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $columnGap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  /**
   * Sets the `row-gap` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $rowGap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  focusable?: boolean;
};

export const flexStyle = css<FlexStyleProps>`
  ${responsiveStyle("display", (props) => props.$display ?? "flex")}
  ${responsiveStyle("flex-direction", (props) => props.$flexDirection)}
  ${responsiveStyle("flex-wrap", (props) => props.$flexWrap)}
  ${responsiveStyle("align-items", (props) => props.$alignItems)}
  ${responsiveStyle("align-content", (props) => props.$alignContent)}
  ${responsiveStyle("justify-content", (props) => props.$justifyContent)}
  ${responsiveStyle("align-self", (props) => props.$alignSelf)}
  ${responsiveStyle("order", (props) => props.$order)}
  ${responsiveStyle("flex-grow", (props) => props.$flexGrow)}
  ${responsiveStyle("flex-shrink", (props) => props.$flexShrink)}
  ${responsiveStyle("flex-basis", (props) => props.$flexBasis, parseSpacing)}
  ${responsiveStyle("gap", (props) => props.$gap, parseSpacing)}
  ${responsiveStyle("column-gap", (props) => props.$columnGap, parseSpacing)}
  ${responsiveStyle("row-gap", (props) => props.$rowGap, parseSpacing)}
`;
