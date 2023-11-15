import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakColorFilterToken } from "@/styles/theme/color";
import { parseColorFilter } from "../helpers/parseColorFilter";

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
