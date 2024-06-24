import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakUnitListItem } from "./OakUnitListItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakUnitListItem", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakUnitListItem title="Lesson 1" index={1} />,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders a div when the item is disabled", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem data-testid="intro" disabled />,
    );

    expect(getByTestId("intro").tagName).toBe("DIV");
  });

  it("renders an anchor when the item is not disabled", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem data-testid="intro" />,
    );

    expect(getByTestId("intro").tagName).toBe("A");
  });

  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem data-testid="intro" numberOfLessons={6} />,
    );

    expect(getByTestId("intro").textContent).toContain("6");
  });
});
