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
  /**
   * Sets the `font-size`, `line-height`, `font-weight` and `letter-spacing` of the element.
   *
   * Accepts a font token or a responsive array of font tokens.
   */
  $font?: ResponsiveValues<OakFontToken>;
  /**
   * Sets the `text-decoration` CSS property of the element.
   *
   * Accepts a text-decoration token or a responsive array of text-decoration tokens.
   */
  $textDecoration?: ResponsiveValues<OakTextDecoration>;
  /**
   * Sets the `text-align` CSS property of the element.
   *
   * Accepts a `text-align` value or a responsive array of `text-align` values.
   */
  $textAlign?: ResponsiveValues<CSSProperties["textAlign"]>;
  /**
   * Sets the `white-space` CSS property of the element.
   *
   *  Accepts a white-space token or a responsive array of white-space tokens.
   */
  $whiteSpace?: ResponsiveValues<OakWhiteSpace>;
  /**
   * Sets the `word-wrap` CSS property of the element.
   *
   * Accepts a word-wrap token or a responsive array of word-wrap tokens.
   */
  $wordWrap?: ResponsiveValues<OakWordWrap>;
  /**
   * Sets the `text-overflow` CSS property of the element.
   *
   * Accepts a text-overflow token or a responsive array of text-overflow tokens.
   */
  $textOverflow?: ResponsiveValues<OakTextOverflow>;
  /**
   * Sets the `overflow` CSS property of the element.
   *
   * Accepts an overflow token or a responsive array of overflow tokens.
   */
  $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
};

export const typographyStyle = css<TypographyStyleProps>`
  font-family: --var(google-font), Lexend, sans-serif; //  FIXME: this should be a css variable ?
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
  ${responsiveStyle("overflow", (props) => props.$overflow)}
`;
