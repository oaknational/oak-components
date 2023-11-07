import { CSSProperties, css } from "styled-components";
import {
  FontWeight,
  LetterSpacing,
  OakAllFonts,
  OakAllTextDecoration,
  OakAllTextOverflow,
  OakAllWhiteSpaces,
  OakAllWordWrap,
  oakAllFontSizes,
  oakAllFonts,
} from "../theme/fonts";
import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";
import pxToRem from "../helpers/pxToRem";
import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "../helpers/parseFont";

export type FontProps = {
  $font?: ResponsiveValues<OakAllFonts>;
  $textDecoration?: ResponsiveValues<OakAllTextDecoration>;
  $textAlign?: ResponsiveValues<CSSProperties["textAlign"]>;
  $whiteSpace?: ResponsiveValues<OakAllWhiteSpaces>;
  $wordWrap?: ResponsiveValues<OakAllWordWrap>;
  $textOverflow?: ResponsiveValues<OakAllTextOverflow>;
};

export const typography = css<FontProps>`
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
