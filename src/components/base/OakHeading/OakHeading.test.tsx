import React from "react";
import "@testing-library/jest-dom";

import OakHeading, { OakHeadingTag } from "./OakHeading";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakAllFonts, oakAllFonts } from "@/styles/theme/typography";
import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "@/styles/helpers/parseTypography";

describe("Heading", () => {
  test.each([["h1"], ["h1"], ["h1"], ["h1"], ["h1"], ["h1"], ["h1"], ["h1"]])(
    "should correctly render %s tag",
    (tag) => {
      const { getByRole } = renderWithTheme(
        <OakHeading tag={tag as OakHeadingTag} />,
      );

      expect(getByRole("heading", { level: 1 })).toBeTruthy();
    },
  );
  test.each(Object.keys(oakAllFonts))(
    'should correctly handle prop $font="%s"',
    async (font) => {
      const { getByTestId } = renderWithTheme(
        <OakHeading
          tag={"h1"}
          data-testid="test"
          $font={font as OakAllFonts}
        />,
      );

      expect(getByTestId("test")).toHaveStyle("font-family: Lexend,sans-serif");
      expect(getByTestId("test")).toHaveStyle(
        `font-size: ${parseFontSize(font as OakAllFonts)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `line-height: ${parseLineHeight(font as OakAllFonts)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `font-weight: ${parseFontWeight(font as OakAllFonts)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `letter-spacing: ${parseLetterSpacing(font as OakAllFonts)}`,
      );
    },
  );
});
