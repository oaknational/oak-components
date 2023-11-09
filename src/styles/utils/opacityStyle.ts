import { css } from "styled-components";

import { OakAllOpacity } from "@/styles/theme/opacity";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type OakOpacityProps = {
  $opacity?: ResponsiveValues<OakAllOpacity>;
};

export const opacityStyle = css<OakOpacityProps>`
  ${responsiveStyle("opacity", (props) => props.$opacity, parseOpacity)}
`;
