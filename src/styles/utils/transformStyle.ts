import { CSSProperties, css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type TransformStyleProps = {
  $transform?: ResponsiveValues<CSSProperties["transform"] | null>;
  $transformOrigin?: ResponsiveValues<CSSProperties["transformOrigin"] | null>;
};

export const transformStyle = css<TransformStyleProps>`
  ${responsiveStyle("transform", (props) => props.$transform)}
  ${responsiveStyle("transform-origin", (props) => props.$transformOrigin)}
`;
