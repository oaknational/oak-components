import { CSSProperties, css } from "styled-components";

import { OakAllBorderRadius, OakAllBorderWidths } from "@/styles/theme/borders";
import { OakColor, OakUiRole } from "@/styles/theme/color";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseRadius } from "@/styles/helpers/parseBorderRadius";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

type BorderWidth = ResponsiveValues<OakAllBorderWidths>;
type BorderStyleProps = ResponsiveValues<CSSProperties["borderStyle"]>;
type BorderColorProps = ResponsiveValues<OakUiRole | OakColor>;
type BorderRadiusProps = ResponsiveValues<OakAllBorderRadius>;

export type OakBorderProps = {
  $ba?: BorderWidth;
  $bt?: BorderWidth;
  $br?: BorderWidth;
  $bb?: BorderWidth;
  $bl?: BorderWidth;
  $bh?: BorderWidth;
  $bv?: BorderWidth;
  $borderStyle?: BorderStyleProps;
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
    parseRadius,
  )}
`;

export const borderStyle = css<OakBorderProps>`
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
