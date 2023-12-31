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
  $position?: ResponsiveValues<CSSProperties["position"]>;
  $top?: ResponsiveValues<PositionSpacing>;
  $right?: ResponsiveValues<PositionSpacing>;
  $bottom?: ResponsiveValues<PositionSpacing>;
  $left?: ResponsiveValues<PositionSpacing>;
  $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
  $overflowX?: ResponsiveValues<CSSProperties["overflowX"]>;
  $overflowY?: ResponsiveValues<CSSProperties["overflowY"]>;
  $objectFit?: ResponsiveValues<CSSProperties["objectFit"]>;
  $pointerEvents?: ResponsiveValues<CSSProperties["pointerEvents"]>;
  $visibility?: ResponsiveValues<CSSProperties["visibility"]>;
};

export const positionStyle = css<PositionStyleProps>`
  ${responsiveStyle("position", (props) => props.$position)}
  ${responsiveStyle("top", (props) => props.$top, parseSpacing)} 
  ${responsiveStyle("right", (props) => props.$right, parseSpacing)} 
  ${responsiveStyle("bottom", (props) => props.$bottom, parseSpacing)} 
  ${responsiveStyle("left", (props) => props.$left, parseSpacing)} 
  ${responsiveStyle("overflow", (props) => props.$overflow)}
  ${responsiveStyle("overflow-x", (props) => props.$overflowX)}
  ${responsiveStyle("overflow-y", (props) => props.$overflowY)}
  ${responsiveStyle("object-fit", (props) => props.$objectFit)}
  ${responsiveStyle("pointer-events", (props) => props.$pointerEvents)}
  ${responsiveStyle("visibility", (props) => props.$visibility)}
`;
