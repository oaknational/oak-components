import { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakParsableColor } from "@/styles/theme/color";

type OakColorName = ResponsiveValues<OakParsableColor | null>;

export type ColorProps = { $color?: OakColorName; $background?: OakColorName };
export const colorStyle = css<ColorProps>`
  ${responsiveStyle<ColorProps, OakParsableColor>(
    "color",
    (props) => props.$color,
    parseColor,
  )}
  ${responsiveStyle<ColorProps, OakParsableColor>(
    "background",
    (props) => props.$background,
    parseColor,
  )}
`;
