import { CSSProperties, css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type TransformStyleProps = {
  /**
   * Sets the `transform` CSS property of the element.
   *
   * Accepts a `transform` value or a responsive array of `transform` values. Can be nulled.
   */
  $transform?: ResponsiveValues<CSSProperties["transform"] | null>;
  /**
   * Sets the `transform-origin` CSS property of the element.
   *
   * Accepts a `transform-origin` value or a responsive array of `transform-origin` values. Can be nulled.
   */
  $transformOrigin?: ResponsiveValues<CSSProperties["transformOrigin"] | null>;
};

export const transformStyle = css<TransformStyleProps>`
  ${responsiveStyle("transform", (props) => props.$transform)}
  ${responsiveStyle("transform-origin", (props) => props.$transformOrigin)}
`;
