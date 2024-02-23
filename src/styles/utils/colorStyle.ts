import { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken } from "@/styles/theme/color";

/**
 * Color token!
 */
type ColorToken = ResponsiveValues<OakCombinedColorToken | null>;

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
  ${responsiveStyle<ColorStyleProps, OakCombinedColorToken>(
    "color",
    (props) => props.$color,
    parseColor,
  )}
  ${responsiveStyle<ColorStyleProps, OakCombinedColorToken>(
    "background",
    (props) => props.$background,
    parseColor,
  )}
`;
