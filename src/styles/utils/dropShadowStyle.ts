import { css } from "styled-components";

import { OakAllDropShadows } from "../theme/dropShadow";
import { parseDropShadow } from "../helpers/parseDropShadow";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

export type DropShadowProps = {
  $dropShadow?: ResponsiveValues<OakAllDropShadows>;
};

export const dropShadowStyle = css<DropShadowProps>`
  ${responsiveStyle(
    "box-shadow",
    (props) => props.$dropShadow,
    parseDropShadow,
  )}
`;
