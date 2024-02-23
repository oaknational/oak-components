import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type DisplayStyleProps = {
  /**
   * Sets the `display` CSS property of the element.
   *
   * Accepts a `display` value or a responsive array of `display` values.
   */
  $display?: ResponsiveValues<CSSProperties["display"]>;
};

export const displayStyle = css<DisplayStyleProps>`
  ${responsiveStyle("display", (props) => props.$display)}
`;
