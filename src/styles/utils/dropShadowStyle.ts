import { css } from "styled-components";

import { OakDropShadowToken } from "@/styles/theme/dropShadow";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type DropShadowStyleProps = {
  /**
   * Applies a drop-shadow to the element.
   *
   * Accepts a drop-shadow token or a responsive array of drop-shadow tokens.
   */
  $dropShadow?: ResponsiveValues<OakDropShadowToken>;
};

export const dropShadowStyle = css<DropShadowStyleProps>`
  ${responsiveStyle(
    "box-shadow",
    (props) => props.$dropShadow,
    parseDropShadow,
  )}
`;
