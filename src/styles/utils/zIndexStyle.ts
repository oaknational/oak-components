import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";
import { OakZIndexToken } from "@/styles/theme/zIndex";
import { parseZIndex } from "@/styles/helpers/parseZIndex";

export type ZIndexStyleProps = {
  /**
   * Sets the `z-index` CSS property of the element.
   *
   * Accepts a z-index token or a responsive array of z-index tokens.
   */
  $zIndex?: ResponsiveValues<OakZIndexToken>;
};

export const zIndexStyle = css<ZIndexStyleProps>`
  ${responsiveStyle("z-index", (props) => props.$zIndex, parseZIndex)}
`;
