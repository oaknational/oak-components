import { css } from "styled-components";

import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakUiRoleToken, OakColorToken } from "@/styles/theme/color";

type ColorFilterToken = ResponsiveValues<OakColorToken | OakUiRoleToken | null>;

export type ColorFilterStyleProps = {
  /**
   * Applies a color-filter to the element.
   *
   * Accepts a color filter token or a responsive array of color tokens.
   */
  $colorFilter?: ColorFilterToken;
};
export const colorFilterStyle = css<ColorFilterStyleProps>`
  ${responsiveStyle<ColorFilterStyleProps, OakColorToken | OakUiRoleToken>(
    "filter",
    (props) => props.$colorFilter,
    parseColorFilter,
  )}
`;
