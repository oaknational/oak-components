import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";

import { OakHeading, OakHeadingTag } from "./OakHeading";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakFontToken, oakFontTokens } from "@/styles/theme/typography";
import {
  parseFontSize,
  parseFontWeight,
  parseLetterSpacing,
  parseLineHeight,
} from "@/styles/helpers/parseTypography";

describe("Heading", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakHeading tag={"h1"} data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = create(<OakHeading tag={"h1"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test.each([
    ["h1", 1],
    ["h2", 2],
    ["h3", 3],
  ])("should correctly render %s tag", (tag, level) => {
    const { getByRole } = renderWithTheme(
      <OakHeading tag={tag as OakHeadingTag} />,
    );

    expect(getByRole("heading", { level })).toBeTruthy();
  });
  test.each(Object.keys(oakFontTokens))(
    'should correctly handle prop $font="%s"',
    async (font) => {
      const { getByTestId } = renderWithTheme(
        <OakHeading
          tag={"h1"}
          data-testid="test"
          $font={font as OakFontToken}
        />,
      );

      expect(getByTestId("test")).toHaveStyle("font-family: Lexend,sans-serif");
      expect(getByTestId("test")).toHaveStyle(
        `font-size: ${parseFontSize(font as OakFontToken)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `line-height: ${parseLineHeight(font as OakFontToken)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `font-weight: ${parseFontWeight(font as OakFontToken)}`,
      );
      expect(getByTestId("test")).toHaveStyle(
        `letter-spacing: ${parseLetterSpacing(font as OakFontToken)}`,
      );
    },
  );
});
