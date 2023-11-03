import { css } from "styled-components";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

export const zIndexMap = {
  behind: -1,
  neutral: 0,
  inFront: 1,
  mobileFilters: 2,
  fixedHeader: 100,
  modalCloseButton: 150,
  modalDialog: 300,
} as const;

export type ZIndex = keyof typeof zIndexMap | null;
export type ZIndexProps = {
  $zIndex?: ResponsiveValues<ZIndex>;
};

const parseZIndex = (value?: ZIndex | null) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  return zIndexMap[value];
};

export const zIndexStyle = css<ZIndexProps>`
  ${responsiveStyle("z-index", (props) => props.$zIndex, parseZIndex)}
`;
