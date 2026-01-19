import styled, { css } from "styled-components";

import { OakBorderWidthToken, OakCombinedColorToken } from "@/styles";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderWidth } from "@/styles/helpers/parseBorderWidth";

export type InternalStyledSvgProps = {
  $fill?: ResponsiveValues<OakCombinedColorToken>;
  $stroke?: ResponsiveValues<OakCombinedColorToken>;
  $strokeWidth?: ResponsiveValues<OakBorderWidthToken>;
};

export const colorFillStyle = css<InternalStyledSvgProps>`
  ${responsiveStyle<InternalStyledSvgProps, OakCombinedColorToken>(
    "fill",
    (props) => props.$fill,
    parseColor,
  )}
`;

/**
 * A styled SVG element with props to apply design tokens to the fill and stroke.
 */
export const InternalStyledSvg = styled.svg<InternalStyledSvgProps>`
  ${colorFillStyle}
  ${responsiveStyle<InternalStyledSvgProps, OakCombinedColorToken>(
    "stroke",
    (props) => props.$stroke,
    parseColor,
  )}
    ${responsiveStyle<InternalStyledSvgProps, OakBorderWidthToken>(
    "stroke-width",
    (props) => props.$strokeWidth,
    parseBorderWidth,
  )}
`;
