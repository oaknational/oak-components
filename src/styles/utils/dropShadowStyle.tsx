import { css } from "styled-components";

import { OakAllDropShadows, oakAllDropShadows } from "../theme/dropShadow";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

export type DropShadowProps = {
  $dropShadow?: ResponsiveValues<OakAllDropShadows>;
};

export const parseDropShadow = (variant?: OakAllDropShadows | null) => {
  if (!variant) {
    return;
  }

  if (variant in oakAllDropShadows) {
    return oakAllDropShadows[variant as OakAllDropShadows];
  }
};

export const dropShadowStyle = css<DropShadowProps>`
  ${responsiveStyle(
    "box-shadow",
    (props) => props.$dropShadow,
    parseDropShadow,
  )}
`;
