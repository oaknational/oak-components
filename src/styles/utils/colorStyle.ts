import { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakUiRoleToken } from "@/styles/theme/color";

/**
 * Color token!
 */
type ColorToken = ResponsiveValues<OakUiRoleToken | null>;

export type ColorStyleProps = {
  /**
   * Sets the `color` of the element.
   *
   * Accepts a color token or a responsive array of color tokens.
   */
  $color?: ColorToken;
  /**
   * Sets the `background-color` of the element.
   *
   * Accepts a color token or a responsive array of color tokens.
   */
  $background?: ColorToken;
};
export const colorStyle = css<ColorStyleProps>`
  ${responsiveStyle<ColorStyleProps, OakUiRoleToken>(
    "color",
    (props) => props.$color,
    parseColor,
  )}
  ${responsiveStyle<ColorStyleProps, OakUiRoleToken>(
    "background",
    (props) => props.$background,
    parseColor,
  )}
`;
