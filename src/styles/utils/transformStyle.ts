import { CSSProperties, css } from "styled-components";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

export type TransformProps = {
  $transform?: ResponsiveValues<CSSProperties["transform"] | null>;
  $transformOrigin?: ResponsiveValues<CSSProperties["transformOrigin"] | null>;
};

export const transformStyle = css<TransformProps>`
  ${responsiveStyle("transform", (props) => props.$transform)}
  ${responsiveStyle("transform-origin", (props) => props.$transformOrigin)}
`;
