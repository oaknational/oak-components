import { CSSProperties } from "react";
import { css } from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type OakDisplayProps = {
  $display?: ResponsiveValues<CSSProperties["display"]>;
};

export const displayStyle = css<OakDisplayProps>`
  ${responsiveStyle("display", (props) => props.$display)}
`;
