import { CSSProperties, css } from "styled-components";

import {
  OakBorderRadiusToken,
  OakBorderWidthToken,
} from "@/styles/theme/borders";
import { OakColorToken, OakUiRoleToken } from "@/styles/theme/color";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

type BorderWidth = ResponsiveValues<OakBorderWidthToken>;
type _BorderStyleProps = ResponsiveValues<CSSProperties["borderStyle"]>;
type BorderColorProps = ResponsiveValues<OakUiRoleToken | OakColorToken>;
type BorderRadiusProps = ResponsiveValues<OakBorderRadiusToken>;

export type BorderStyleProps = {
  $ba?: BorderWidth;
  $bt?: BorderWidth;
  $br?: BorderWidth;
  $bb?: BorderWidth;
  $bl?: BorderWidth;
  $bh?: BorderWidth;
  $bv?: BorderWidth;
  $borderStyle?: _BorderStyleProps;
  $borderColor?: BorderColorProps;
  $borderRadius?: BorderRadiusProps;
};

const borderAll = css<{ $ba?: BorderWidth }>`
  ${responsiveStyle("border", (props) => props.$ba, parseBorder)}
`;
const borderTop = css<{ $bt?: BorderWidth }>`
  ${responsiveStyle("border-top", (props) => props.$bt, parseBorder)}
`;
const borderRight = css<{ $br?: BorderWidth }>`
  ${responsiveStyle("border-right", (props) => props.$br, parseBorder)}
`;
const borderBottom = css<{ $bb?: BorderWidth }>`
  ${responsiveStyle("border-bottom", (props) => props.$bb, parseBorder)}
`;
const borderLeft = css<{ $bl?: BorderWidth }>`
  ${responsiveStyle("border-left", (props) => props.$bl, parseBorder)}
`;
const borderHorizontal = css<{ $bh?: BorderWidth }>`
  ${responsiveStyle("border-left", (props) => props.$bh, parseBorder)}
  ${responsiveStyle("border-right", (props) => props.$bh, parseBorder)}
`;
const borderVertical = css<{ $bv?: BorderWidth }>`
  ${responsiveStyle("border-top", (props) => props.$bv, parseBorder)}
  ${responsiveStyle("border-bottom", (props) => props.$bv, parseBorder)}
`;
const borderColor = css<{ $borderColor?: BorderColorProps }>`
  ${responsiveStyle("border-color", (props) => props.$borderColor, parseColor)}
`;
const borderRadius = css<{ $borderRadius?: BorderRadiusProps }>`
  ${responsiveStyle(
    "border-radius",
    (props) => props.$borderRadius,
    parseBorderRadius,
  )}
`;

export const borderStyle = css<BorderStyleProps>`
  ${borderAll}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
  ${borderLeft}
  ${borderHorizontal}
  ${borderVertical}
  ${borderColor}
  ${borderRadius}
`;
