import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type DisplayProps = {
  $display?: ResponsiveValues<CSSProperties["display"]>;
};

export const displayStyle = css<DisplayProps>`
  ${responsiveStyle("display", (props) => props.$display)}
`;
