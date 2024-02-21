import { css, CSSProperties } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakCombinedSpacingToken } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type SizeValues = ResponsiveValues<OakCombinedSpacingToken | null | undefined>;

export type SizeStyleProps = {
  $width?: SizeValues;
  $minWidth?: SizeValues;
  $maxWidth?: SizeValues;
  $height?: SizeValues;
  $minHeight?: SizeValues;
  $maxHeight?: SizeValues;
  $aspectRatio?: ResponsiveValues<CSSProperties["aspectRatio"]>;
  $boxSizing?: ResponsiveValues<CSSProperties["boxSizing"]>;
};

export const sizeStyle = css<SizeStyleProps>`
  ${responsiveStyle("width", (props) => props.$width, parseSpacing)}
  ${responsiveStyle("min-width", (props) => props.$minWidth, parseSpacing)}
  ${responsiveStyle("max-width", (props) => props.$maxWidth, parseSpacing)}
  ${responsiveStyle("height", (props) => props.$height, parseSpacing)}
  ${responsiveStyle("min-height", (props) => props.$minHeight, parseSpacing)}
  ${responsiveStyle("max-height", (props) => props.$maxHeight, parseSpacing)}
  ${responsiveStyle("aspect-ratio", (props) => props.$aspectRatio)}
  ${responsiveStyle("box-sizing", (props) => props.$boxSizing)}
`;
