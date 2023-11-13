import { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken } from "@/styles/theme/color";

type ColorToken = ResponsiveValues<OakCombinedColorToken | null>;

export type ColorStyleProps = {
  $color?: ColorToken;
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
