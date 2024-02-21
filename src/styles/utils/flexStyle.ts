import { CSSProperties } from "react";
import { css } from "styled-components";

import type { DisplayStyleProps } from "./displayStyle";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import {
  OakAllSpacingToken,
  OakSpaceBetweenToken,
} from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type FlexStyleProps = DisplayStyleProps & {
  $flexDirection?: ResponsiveValues<CSSProperties["flexDirection"]>;
  $flexWrap?: ResponsiveValues<CSSProperties["flexWrap"]>;
  $alignItems?: ResponsiveValues<CSSProperties["alignItems"]>;
  $alignContent?: ResponsiveValues<CSSProperties["alignContent"]>;
  $justifyContent?: ResponsiveValues<CSSProperties["justifyContent"]>;
  $alignSelf?: ResponsiveValues<CSSProperties["alignSelf"]>;
  $flexGrow?: ResponsiveValues<CSSProperties["flexGrow"]>;
  $flexShrink?: ResponsiveValues<CSSProperties["flexShrink"]>;
  $order?: ResponsiveValues<CSSProperties["order"]>;
  $flexBasis?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  $gap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  $columnGap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  $rowGap?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
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
