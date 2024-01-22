import styled, { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakBox, OakBoxProps } from "@/components/base/OakBox";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakCombinedSpacingToken } from "@/styles";

const gridStyle = css<OakGridProps>`
  ${responsiveStyle("row-gap", (props) => props.$rg, parseSpacing)}
  ${responsiveStyle("column-gap", (props) => props.$cg, parseSpacing)}
  ${responsiveStyle("grid-auto-rows", (props) => props.$gridAutoRows)}
  ${responsiveStyle("grid-template-areas", (props) => props.$gridTemplateAreas)}
  ${responsiveStyle(
    "grid-template-columns",
    (props) => props.$gridTemplateColumns,
  )}
`;

export type OakGridProps = OakBoxProps & {
  $rg?: ResponsiveValues<OakCombinedSpacingToken>;
  $cg?: ResponsiveValues<OakCombinedSpacingToken>;
  // grid-auto-rows: 1fr; ensures all rows are the same height
  $gridAutoRows?: ResponsiveValues<"1fr">;
  $gridTemplateAreas?: ResponsiveValues<string>;
  $gridTemplateColumns?: ResponsiveValues<string>;
};

export const OakGrid = styled(OakBox)<OakGridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  ${gridStyle}
`;
