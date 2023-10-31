import { CSSProperties } from "react";
import { css } from "styled-components";

import responsive, { ResponsiveValues } from "./responsive";

import { OakAllSpacing, OakSpaceBetween } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

/**
 *  QUESTION: Does this file belong here, it's similar to the more generic style utils but could be co-located with the flex component ?
 */

export type FlexCssProps = {
  $flexDirection?: ResponsiveValues<CSSProperties["flexDirection"]>;
  $flexWrap?: ResponsiveValues<CSSProperties["flexWrap"]>;
  $alignItems?: ResponsiveValues<CSSProperties["alignItems"]>;
  $alignContent?: ResponsiveValues<CSSProperties["alignContent"]>;
  $justifyContent?: ResponsiveValues<CSSProperties["justifyContent"]>;
  $alignSelf?: ResponsiveValues<CSSProperties["alignSelf"]>;
  $flexGrow?: ResponsiveValues<CSSProperties["flexGrow"]>;
  $flexShrink?: ResponsiveValues<CSSProperties["flexShrink"]>;
  $flexBasis?: ResponsiveValues<
    OakAllSpacing | OakSpaceBetween | null | undefined
  >;
  $gap?: ResponsiveValues<OakAllSpacing | OakSpaceBetween | null | undefined>;
  $columnGap?: ResponsiveValues<
    OakAllSpacing | OakSpaceBetween | null | undefined
  >;
  $rowGap?: ResponsiveValues<
    OakAllSpacing | OakSpaceBetween | null | undefined
  >;
};

export const flex = css<FlexCssProps>`
  ${responsive("flex-direction", (props) => props.$flexDirection)}
  ${responsive("flex-wrap", (props) => props.$flexWrap)}
  ${responsive("align-items", (props) => props.$alignItems)}
  ${responsive("align-content", (props) => props.$alignContent)}
  ${responsive("justify-content", (props) => props.$justifyContent)}
  ${responsive("align-self", (props) => props.$alignSelf)}
  ${responsive("flex-grow", (props) => props.$flexGrow)}
  ${responsive("flex-shrink", (props) => props.$flexShrink)}
  ${responsive("flex-basis", (props) => props.$flexBasis, parseSpacing)}
  ${responsive("gap", (props) => props.$gap, parseSpacing)}
  ${responsive("column-gap", (props) => props.$columnGap, parseSpacing)}
  ${responsive("row-gap", (props) => props.$rowGap, parseSpacing)}
`;
