import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";
import { OakAllZIndex } from "@/styles/theme/zIndex";
import { parseZIndex } from "@/styles/helpers/parseZIndex";

export type OakZIndexProps = {
  $zIndex?: ResponsiveValues<OakAllZIndex>;
};

export const zIndexStyle = css<OakZIndexProps>`
  ${responsiveStyle("z-index", (props) => props.$zIndex, parseZIndex)}
`;
