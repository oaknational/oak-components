import styled, { css, CSSProperties } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";

type ColRowSpan = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type OakGridAreaProps = {
  /**
   * Determines the number of columns the element should span.
   *
   * Accepts a value from 0-12 or a responsive value of 0-12.
   */
  $colSpan: ResponsiveValues<ColRowSpan>;
  /**
   * Determines the number of rows the element should span.
   *
   * Accepts a value from 0-12 or a responsive value of 0-12.
   */
  $rowSpan?: ResponsiveValues<ColRowSpan>;
  /**
   * Sets the order of the element.
   *
   * Accepts a number or a responsive array of numbers.
   */
  $order?: ResponsiveValues<CSSProperties["order"]>;
  /**
   * The start column of the element.
   *
   * Accepts a value from 0-12 or a responsive value of 0-12.
   */
  $colStart?: ResponsiveValues<ColRowSpan>;
  /**
   * The end column of the element.
   *
   * Accepts a value from 0-12 or a responsive value of 0-12.
   */
  $colEnd?: ResponsiveValues<ColRowSpan>;
  /**
   * The start row of the element.
   *
   * Accepts a value from 0-12 or a responsive value of 0-12.
   */
  $rowStart?: ResponsiveValues<ColRowSpan>;
} & SpacingStyleProps;

const combineSpanStart = (
  start?: ColRowSpan | null,
  span?: ColRowSpan | null,
) => {
  return start ? `${start}/${span}` : `${span}`;
};

const parseSpanStart = (value?: string | null) => {
  if (value?.includes("/")) {
    const [start, span] = value.split("/");
    return `${start} / span ${span}`;
  }
  const span = value;
  return `span ${span}`;
};

const gridArea = css<OakGridAreaProps>`
  flex-direction: column;
  ${responsiveStyle(
    "grid-column",
    (props) => {
      return Array.isArray(props.$colSpan)
        ? props.$colSpan.map((span, index) =>
            combineSpanStart(
              Array.isArray(props.$colStart)
                ? props.$colStart[index]
                : props.$colStart,
              span,
            ),
          )
        : combineSpanStart(
            Array.isArray(props.$colStart)
              ? props.$colStart[0]
              : props.$colStart,
            props.$colSpan,
          );
    },
    (value) => parseSpanStart(value),
  )};
  ${responsiveStyle(
    "grid-row",
    (props) => {
      return Array.isArray(props.$rowSpan)
        ? props.$rowSpan.map((span, index) =>
            combineSpanStart(
              Array.isArray(props.$rowStart)
                ? props.$rowStart[index]
                : props.$rowStart,
              span,
            ),
          )
        : combineSpanStart(
            Array.isArray(props.$rowStart)
              ? props.$rowStart[0]
              : props.$rowStart,
            props.$rowSpan,
          );
    },
    (value) => parseSpanStart(value),
  )};
  ${responsiveStyle(
    "order",
    (props) => props.$order,
    (value) => value && `${value}`,
  )};
  ${responsiveStyle("grid-row", (props) =>
    props.$rowSpan ? `span ${props.$rowSpan}` : "span 1",
  )};
  ${responsiveStyle("grid-column-start", (props) => props.$colStart)}
  ${responsiveStyle("grid-column-end", (props) => props.$colEnd)}
  ${responsiveStyle("grid-row-start", (props) => props.$rowStart)}
`;

/**
 *
 * OakGridArea is a flex container that should be used inside OakGrid.
 *
 * - There is no nesting of OakGridAreas
 * - Column and row arrangements are achieved through $colSpan, $rowSpan, $colStart, $colEnd, $rowStart, $rowEnd
 *
 */

export const OakGridArea = styled(OakFlex)<OakGridAreaProps & OakFlexProps>`
  ${gridArea}
`;
