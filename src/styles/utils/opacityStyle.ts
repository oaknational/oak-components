import { css } from "styled-components";

import { OakAllOpacity } from "@/styles/theme/opacity";
import { parseOpacity } from "@/styles/helpers/parseOpacity";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

type OpacityProps = {
  $opacity?: ResponsiveValues<OakAllOpacity>;
};

export const opacityStyle = css<OpacityProps>`
  ${responsiveStyle("opacity", (props) => props.$opacity, parseOpacity)}
`;
