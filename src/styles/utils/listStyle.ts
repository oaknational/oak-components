import { CSSProperties, css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type ListStyleProps = {
  /**
   * Sets the `list-style` CSS property of the element.
   *
   * Accepts a `list-style` value or a responsive array of `list-style` values.
   */
  $listStyle?: ResponsiveValues<CSSProperties["listStyle"]>;
};

export const listStyle = css<ListStyleProps>`
  ${responsiveStyle("list-style", (props) => props.$listStyle)}
`;
