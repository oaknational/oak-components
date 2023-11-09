import { css } from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakParsableColor } from "@/styles/theme/color";

type OakColorName = ResponsiveValues<OakParsableColor | null>;

export type OakColorProps = {
  $color?: OakColorName;
  $background?: OakColorName;
};
export const colorStyle = css<OakColorProps>`
  ${responsiveStyle<OakColorProps, OakParsableColor>(
    "color",
    (props) => props.$color,
    parseColor,
  )}
  ${responsiveStyle<OakColorProps, OakParsableColor>(
    "background",
    (props) => props.$background,
    parseColor,
  )}
`;
