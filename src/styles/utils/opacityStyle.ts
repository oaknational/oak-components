import { css } from "styled-components";

import { OakAllOpacity } from "../theme/opacity";
import { parseOpacity } from "../helpers/parseOpacity";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

type OpacityProps = {
  $opacity?: ResponsiveValues<OakAllOpacity>;
};

export const opacityStyle = css<OpacityProps>`
  ${responsiveStyle("opacity", (props) => props.$opacity, parseOpacity)}
`;
