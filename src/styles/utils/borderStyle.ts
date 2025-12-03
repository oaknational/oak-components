import { CSSProperties, css } from "styled-components";

import {
  OakBorderRadiusToken,
  OakBorderWidthToken,
} from "@/styles/theme/borders";
import { OakUiRoleToken } from "@/styles/theme/color";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

type BorderWidth = ResponsiveValues<OakBorderWidthToken>;
type _BorderStyleProps = ResponsiveValues<CSSProperties["borderStyle"]>;
type BorderColorProps = ResponsiveValues<OakUiRoleToken>;
type BorderRadiusProps = ResponsiveValues<OakBorderRadiusToken>;

export type BorderStyleProps = {
  /**
   * Apply border on all sides
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $ba?: BorderWidth;
  /**
   * Apply border to the top
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $bt?: BorderWidth;
  /**
   * Apply border to the right
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $br?: BorderWidth;
  /**
   * Apply border to the bottom
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $bb?: BorderWidth;
  /**
   * Apply border to the left
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $bl?: BorderWidth;
  /**
   * Apply border to the left and right
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $bh?: BorderWidth;
  /**
   * Apply border to the top and bottom
   *
   * Accepts a border-width token or a responsive array of border-width tokens
   */
  $bv?: BorderWidth;
  /**
   * Apply `border-style` to the element
   *
   * Accepts a single value or a responsive array of values.
   */
  $borderStyle?: _BorderStyleProps;
  /**
   * Apply a border color to all sides of the element
   *
   * Accepts a color token or a responsive array of color tokens.
   */
  $borderColor?: BorderColorProps;
  $borderRadius?: BorderRadiusProps;
  /**
   * Apply border radius to the top left
   *
   * Accepts an `OakBorderRadiusToken` or a responsive array of `OakBorderRadiusToken`s.
   */
  $btlr?: BorderRadiusProps;
  /**
   * Apply border radius to the top right
   *
   * Accepts a border-radius token or a responsive array of border-radius tokens.
   */
  $btrr?: BorderRadiusProps;
  /**
   * Apply border radius to the bottom left
   *
   * Accepts a border-radius token or a responsive array of border-radius tokens.
   */
  $bblr?: BorderRadiusProps;
  /**
   * Apply border radius to the bottom right
   *
   * Accepts a border-radius token or a responsive array of border-radius tokens.
   */
  $bbrr?: BorderRadiusProps;
  /**
   * Apply border radius to the top right and top left
   *
   * Accepts a border-radius token or a responsive array of border-radius tokens.
   */
  $btr?: BorderRadiusProps;
  /**
   * Apply border radius to the bottom right and bottom left
   *
   * Accepts a border-radius token or a responsive array of border-radius tokens
   */
  $bbr?: BorderRadiusProps;
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
const borderRadiusTopLeft = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-top-left-radius",
    (props) => props.$btlr,
    parseBorderRadius,
  )}
`;
const borderRadiusTopRight = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-top-right-radius",
    (props) => props.$btrr,
    parseBorderRadius,
  )}
`;
const borderRadiusBottomLeft = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-bottom-left-radius",
    (props) => props.$bblr,
    parseBorderRadius,
  )}
`;
const borderRadiusBottomRight = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-bottom-right-radius",
    (props) => props.$bbrr,
    parseBorderRadius,
  )}
`;
const borderRadiusTop = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-top-left-radius",
    (props) => props.$btr,
    parseBorderRadius,
  )}
  ${responsiveStyle(
    "border-top-right-radius",
    (props) => props.$btr,
    parseBorderRadius,
  )}
`;
const borderRadiusBottom = css<BorderStyleProps>`
  ${responsiveStyle(
    "border-bottom-left-radius",
    (props) => props.$bbr,
    parseBorderRadius,
  )}
  ${responsiveStyle(
    "border-bottom-right-radius",
    (props) => props.$bbr,
    parseBorderRadius,
  )}
`;
const borderStrokeStyle = css<BorderStyleProps>`
  ${responsiveStyle("border-style", (props) => props.$borderStyle)};
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
  ${borderRadiusTopLeft}
  ${borderRadiusTopRight}
  ${borderRadiusBottomLeft}
  ${borderRadiusBottomRight}
  ${borderRadiusTop}
  ${borderRadiusBottom}
  ${borderStrokeStyle}
`;
