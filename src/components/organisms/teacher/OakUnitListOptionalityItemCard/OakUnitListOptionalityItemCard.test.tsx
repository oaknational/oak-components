import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { within } from "@testing-library/react";

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
        slug="test"
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
          slug="test"
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
        slug="test"
      />,
    );

    const link = within(getByTestId("unit-card")).getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        lessonCount={6}
        title={""}
        href={""}
        slug="test"
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
        slug="test"
      />,
    );

    const unitCard = getByTestId("unit-card");
    expect(unitCard).toHaveStyleRule("cursor", "not-allowed");
    expect(unitCard).toHaveStyleRule("background", "#f2f2f2");
  });
});
