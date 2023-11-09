import { css } from "styled-components";

import {
  responsiveStyle,
  ResponsiveValues,
} from "@/styles/utils/responsiveStyle";
import { OakParsableSpacing } from "@/styles/theme/spacing";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type SizeValues = ResponsiveValues<OakParsableSpacing | null | undefined>;

export type OakSizeProps = {
  $width?: SizeValues;
  $minWidth?: SizeValues;
  $maxWidth?: SizeValues;
  $height?: SizeValues;
  $minHeight?: SizeValues;
  $maxHeight?: SizeValues;
};

export const sizeStyle = css<OakSizeProps>`
  ${responsiveStyle("width", (props) => props.$width, parseSpacing)}
  ${responsiveStyle("min-width", (props) => props.$minWidth, parseSpacing)}
  ${responsiveStyle("max-width", (props) => props.$maxWidth, parseSpacing)}
  ${responsiveStyle("height", (props) => props.$height, parseSpacing)}
  ${responsiveStyle("min-height", (props) => props.$minHeight, parseSpacing)}
  ${responsiveStyle("max-height", (props) => props.$maxHeight, parseSpacing)}
`;
