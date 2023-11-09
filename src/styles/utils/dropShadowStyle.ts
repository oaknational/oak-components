import { css } from "styled-components";

import { OakAllDropShadows } from "@/styles/theme/dropShadow";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type OakDropShadowProps = {
  $dropShadow?: ResponsiveValues<OakAllDropShadows>;
};

export const dropShadowStyle = css<OakDropShadowProps>`
  ${responsiveStyle(
    "box-shadow",
    (props) => props.$dropShadow,
    parseDropShadow,
  )}
`;
