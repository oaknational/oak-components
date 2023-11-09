import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakAllSpacing, OakSpaceBetween } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type OakFlexCssProps = {
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

export const flexStyle = css<OakFlexCssProps>`
  display: flex;
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
