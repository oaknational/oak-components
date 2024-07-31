import styled, { css, CSSProperties } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakBox, OakBoxProps } from "@/components/atoms/OakBox";
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
    ${responsiveStyle("grid-template-rows", (props) => props.$gridTemplateRows)}
`;

export type OakGridProps = OakBoxProps & {
  /**
   * Applies `row-gap` to the grid
   *
   * Accepts a spacing token or a responsive array of spacing tokens.
   */
  $rg?: ResponsiveValues<OakCombinedSpacingToken>;
  /**
   * Applies `column-gap` to the grid
   *
   * Accepts a spacing token or a responsive array of spacing tokens.
   */
  $cg?: ResponsiveValues<OakCombinedSpacingToken>;
  /**
   * Applies `grid-auto-rows` to the grid
   *
   * Accepts a `grid-auto-rows` value or a responsive array of `grid-auto-rows` values.
   */
  $gridAutoRows?: ResponsiveValues<CSSProperties["gridAutoRows"]>;
  /**
   * Applies `grid-template-areas` to the grid
   *
   * Accepts a `grid-template-areas` value or a responsive array of `grid-template-areas` values.
   */
  $gridTemplateAreas?: ResponsiveValues<CSSProperties["gridTemplateAreas"]>;
  /**
   * Applies `grid-template-columns` to the grid
   *
   * Accepts a `grid-template-columns` value or a responsive array of `grid-template-columns` values.
   */
  $gridTemplateColumns?: ResponsiveValues<CSSProperties["gridTemplateColumns"]>;
  /**
   * Applies `grid-template-rows` to the grid
   *
   * Accepts a `grid-template-rows` value or a responsive array of `grid-template-rows` values.
   */
  $gridTemplateRows?: ResponsiveValues<CSSProperties["gridTemplateRows"]>;
};

/**
 * Creates a grid layout
 *
 * Defaults to a 12 column grid
 */
export const OakGrid = styled(OakBox)<OakGridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;

  ${gridStyle};
`;
