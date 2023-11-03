import { css } from "styled-components";

import { responsiveStyle } from "./responsiveStyle";

export type Opacity =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;
type OpacityProps = {
  $opacity?: Opacity;
};

export const opacityStyle = css<OpacityProps>`
  ${responsiveStyle("opacity", (props) => props.$opacity)}
`;
