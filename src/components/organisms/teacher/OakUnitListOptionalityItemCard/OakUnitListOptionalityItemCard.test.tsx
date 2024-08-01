import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakUnitListOptionalityItemCard } from "./OakUnitListOptionalityItemCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakUnitListOptionalityItemCard", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="test"
        title={""}
        lessonCount={0}
        href={""}
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakUnitListOptionalityItemCard
          title="Lesson 1"
          lessonCount={0}
          href={""}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders an anchor when the item is not disabled", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        title={""}
        lessonCount={0}
        href={""}
      />,
    );

    expect(getByTestId("unit-card").tagName).toBe("A");
  });

  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        lessonCount={6}
        title={""}
        href={""}
      />,
    );

    expect(getByTestId("unit-card").textContent).toContain("6");
  });
  it("applies disabled styles when unavailable", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        title={""}
        lessonCount={0}
        href={""}
        unavailable
      />,
    );

    const unitCard = getByTestId("unit-card");
    expect(unitCard).toHaveStyleRule("cursor", "not-allowed");
    expect(unitCard).toHaveStyleRule("background", "#f2f2f2");
  });
});
