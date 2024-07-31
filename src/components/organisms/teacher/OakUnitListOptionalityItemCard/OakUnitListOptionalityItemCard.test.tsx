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
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={0}
        isLegacy={false}
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
          index={1}
          yearTitle={""}
          lessonCount={0}
          isLegacy={false}
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
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={0}
        isLegacy={false}
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
        index={0}
        title={""}
        yearTitle={""}
        isLegacy={false}
        href={""}
      />,
    );

    expect(getByTestId("unit-card").textContent).toContain("6");
  });
});
