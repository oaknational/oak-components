import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";
import { OakZIndexToken } from "@/styles/theme/zIndex";
import { parseZIndex } from "@/styles/helpers/parseZIndex";

export type ZIndexStyleProps = {
  $zIndex?: ResponsiveValues<OakZIndexToken>;
};

export const zIndexStyle = css<ZIndexStyleProps>`
  ${responsiveStyle("z-index", (props) => props.$zIndex, parseZIndex)}
`;
