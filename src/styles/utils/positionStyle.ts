import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import {
  OakAllSpacingToken,
  OakSpaceBetweenToken,
} from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type PositionSpacing =
  | OakAllSpacingToken
  | OakSpaceBetweenToken
  | null
  | undefined;

export type PositionStyleProps = {
  /**
   * Sets the `position` CSS property of the element.
   *
   * Accepts a `position` value or a responsive array of `position` values. Can be nulled.
   */
  $position?: ResponsiveValues<CSSProperties["position"]>;
  /**
   * Sets the `top` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $top?: ResponsiveValues<PositionSpacing>;
  /**
   * Sets the `right` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $right?: ResponsiveValues<PositionSpacing>;
  /**
   * Sets the `bottom` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $bottom?: ResponsiveValues<PositionSpacing>;
  /**
   * Sets the `left` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $left?: ResponsiveValues<PositionSpacing>;
  /**
   * Sets the `inset` CSS property of the element.
   *
   * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
   */
  $inset?: ResponsiveValues<PositionSpacing>;
  /**
   * Sets the `overflow` CSS property of the element.
   *
   * Accepts an `overflow` value or a responsive array of `overflow` values.
   */
  $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
  /**
   * Sets the `overflow-x` CSS property of the element.
   *
   * Accepts an `overflow-x` value or a responsive array of `overflow-x` values.
   */
  $overflowX?: ResponsiveValues<CSSProperties["overflowX"]>;
  /**
   * Sets the `overflow-y` CSS property of the element.
   *
   * Accepts an `overflow-y` value or a responsive array of `overflow-y` values.
   */
  $overflowY?: ResponsiveValues<CSSProperties["overflowY"]>;
  /**
   * Sets the `object-fit` CSS property of the element.
   *
   * Accepts an `object-fit` value or a responsive array of `object-fit` values.
   */
  $objectFit?: ResponsiveValues<CSSProperties["objectFit"]>;
  /**
   * Sets the `pointer-events` CSS property of the element.
   *
   * Accepts a `pointer-events` value or a responsive array of `pointer-events` values.
   */
  $pointerEvents?: ResponsiveValues<CSSProperties["pointerEvents"]>;
  /**
   * Sets the `visibility` CSS property of the element.
   *
   * Accepts a `visibility` value or a responsive array of `visibility` values.
   */
  $visibility?: ResponsiveValues<CSSProperties["visibility"]>;
  $verticalAlign?: ResponsiveValues<CSSProperties["verticalAlign"]>;
};

export const positionStyle = css<PositionStyleProps>`
  ${responsiveStyle("position", (props) => props.$position)}
  ${responsiveStyle("top", (props) => props.$top, parseSpacing)} 
  ${responsiveStyle("right", (props) => props.$right, parseSpacing)} 
  ${responsiveStyle("bottom", (props) => props.$bottom, parseSpacing)} 
  ${responsiveStyle("left", (props) => props.$left, parseSpacing)} 
  ${responsiveStyle("inset", (props) => props.$inset, parseSpacing)} 
  ${responsiveStyle("overflow", (props) => props.$overflow)}
  ${responsiveStyle("overflow-x", (props) => props.$overflowX)}
  ${responsiveStyle("overflow-y", (props) => props.$overflowY)}
  ${responsiveStyle("object-fit", (props) => props.$objectFit)}
  ${responsiveStyle("pointer-events", (props) => props.$pointerEvents)}
  ${responsiveStyle("visibility", (props) => props.$visibility)}
  ${responsiveStyle("verticalAlign", (props) => props.$verticalAlign)}
`;
