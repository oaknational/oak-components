import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type DisplayStyleProps = {
  $display?: ResponsiveValues<CSSProperties["display"]>;
};

export const displayStyle = css<DisplayStyleProps>`
  ${responsiveStyle("display", (props) => props.$display)}
`;
