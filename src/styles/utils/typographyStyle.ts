import { CSSProperties, css } from "styled-components";

import {
  OakFontToken,
  OakTextDecoration,
  OakTextOverflow,
  OakWhiteSpace,
  OakWordWrap,
} from "@/styles/theme/typography";
import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "@/styles/helpers/parseTypography";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export type TypographyStyleProps = {
  $font?: ResponsiveValues<OakFontToken>;
  $textDecoration?: ResponsiveValues<OakTextDecoration>;
  $textAlign?: ResponsiveValues<CSSProperties["textAlign"]>;
  $whiteSpace?: ResponsiveValues<OakWhiteSpace>;
  $wordWrap?: ResponsiveValues<OakWordWrap>;
  $textOverflow?: ResponsiveValues<OakTextOverflow>;
};

export const typographyStyle = css<TypographyStyleProps>`
  font-family: Lexend, sans-serif;
  ${responsiveStyle("font-weight", (props) => props.$font, parseFontWeight)}
  ${responsiveStyle("font-size", (props) => props.$font, parseFontSize)}
  ${responsiveStyle("line-height", (props) => props.$font, parseLineHeight)}
  ${responsiveStyle(
    "letter-spacing",
    (props) => props.$font,
    parseLetterSpacing,
  )}
  ${responsiveStyle("text-align", (props) => props.$textAlign)}
  ${responsiveStyle("text-decoration", (props) => props.$textDecoration)}
  ${responsiveStyle("white-space", (props) => props.$whiteSpace)}
  ${responsiveStyle("word-wrap", (props) => props.$wordWrap)}
  ${responsiveStyle("text-overflow", (props) => props.$textOverflow)}
`;
