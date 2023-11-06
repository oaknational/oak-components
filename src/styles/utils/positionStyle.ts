import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakAllSpacing, OakSpaceBetween } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type PositionSpacing = OakAllSpacing | OakSpaceBetween | null | undefined;

export type PositionProps = {
  $position?: ResponsiveValues<CSSProperties["position"]>;
  $top?: ResponsiveValues<PositionSpacing>;
  $right?: ResponsiveValues<PositionSpacing>;
  $bottom?: ResponsiveValues<PositionSpacing>;
  $left?: ResponsiveValues<PositionSpacing>;
  $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
  $overflowX?: ResponsiveValues<CSSProperties["overflowX"]>;
  $overflowY?: ResponsiveValues<CSSProperties["overflowY"]>;
  $objectFit?: ResponsiveValues<CSSProperties["objectFit"]>;
  $objectPosition?: ResponsiveValues<CSSProperties["objectPosition"]>;
  $pointerEvents?: ResponsiveValues<CSSProperties["pointerEvents"]>;
  $visibility?: ResponsiveValues<CSSProperties["visibility"]>;
  $gap?: ResponsiveValues<PositionSpacing>;
};

export const positionStyle = css<PositionProps>`
  ${responsiveStyle("position", (props) => props.$position)}
  ${responsiveStyle("top", (props) => props.$top, parseSpacing)} 
  ${responsiveStyle("right", (props) => props.$right, parseSpacing)} 
  ${responsiveStyle("bottom", (props) => props.$bottom, parseSpacing)} 
  ${responsiveStyle("left", (props) => props.$left, parseSpacing)} 
  ${responsiveStyle("overflow", (props) => props.$overflow)}
  ${responsiveStyle("overflow-x", (props) => props.$overflowX)}
  ${responsiveStyle("overflow-y", (props) => props.$overflowY)}
  ${responsiveStyle("object-fit", (props) => props.$objectFit)}
  ${responsiveStyle("object-position", (props) => props.$objectPosition)}
  ${responsiveStyle("pointer-events", (props) => props.$pointerEvents)}
  ${responsiveStyle("visibility", (props) => props.$visibility)}
  ${responsiveStyle("gap", (props) => props.$gap, parseSpacing)}
`;
