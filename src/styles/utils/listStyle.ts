import { CSSProperties, css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type ListStyleProps = {
  $listStyle?: ResponsiveValues<CSSProperties["listStyle"]>;
};

export const listStyle = css<ListStyleProps>`
  ${responsiveStyle("list-style", (props) => props.$listStyle)}
`;
