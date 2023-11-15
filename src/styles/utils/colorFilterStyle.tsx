import { css } from "styled-components";

import { parseColorFilter } from "../helpers/parseColorFilter";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakColorFilterToken } from "@/styles/theme/color";

type ColorToken = ResponsiveValues<OakColorFilterToken | null>;

export type ColorFilterStyleProps = {
  $filter?: ColorToken;
};
export const colorFilterStyle = css<ColorFilterStyleProps>`
  ${responsiveStyle<ColorFilterStyleProps, OakColorFilterToken>(
    "filter",
    (props) => props.$filter,
    parseColorFilter,
  )}
`;
