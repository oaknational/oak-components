import { css } from "styled-components";

import { OakOpacityToken } from "@/styles/theme/opacity";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type OpacityStyleProps = {
  $opacity?: ResponsiveValues<OakOpacityToken>;
};

export const opacityStyle = css<OpacityStyleProps>`
  ${responsiveStyle("opacity", (props) => props.$opacity, parseOpacity)}
`;
