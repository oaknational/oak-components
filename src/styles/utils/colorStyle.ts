import { css } from "styled-components";

import { parseColor } from "../helpers/parseColor";

import { responsiveStyle, ResponsiveValues } from "./responsiveStyle";

import { OakParsableColor } from "@/styles/theme/color";

type OakColorName = ResponsiveValues<OakParsableColor | null>;

export type ColorProps = { $color?: OakColorName };
export const colorStyle = css<ColorProps>`
  ${responsiveStyle<ColorProps, OakParsableColor>(
    "color",
    (props) => props.$color,
    parseColor,
  )}
`;
