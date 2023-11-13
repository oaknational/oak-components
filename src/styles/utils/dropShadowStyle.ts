import { css } from "styled-components";

import { OakDropShadowToken } from "@/styles/theme/dropShadow";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type DropShadowStyleProps = {
  $dropShadow?: ResponsiveValues<OakDropShadowToken>;
};

export const dropShadowStyle = css<DropShadowStyleProps>`
  ${responsiveStyle(
    "box-shadow",
    (props) => props.$dropShadow,
    parseDropShadow,
  )}
`;
