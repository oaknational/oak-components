import { CSSProperties, css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type ListItemProps = {
  $listStyle?: ResponsiveValues<CSSProperties["listStyle"]>;
};

export const listItemStyle = css<ListItemProps>`
  ${responsiveStyle("list-style", (props) => props.$listStyle)}
`;
