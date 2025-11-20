import React from "react";
import "@testing-library/jest-dom";
import { within } from "@testing-library/react";

import { OakUnitListOptionalityItemCard } from "./OakUnitListOptionalityItemCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakUnitListOptionalityItemCard", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="test"
        title={""}
        lessonCount={"0 lessons"}
        href={""}
        slug="test"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        title="Lesson 1"
        lessonCount={"0 lessons"}
        href={""}
        slug="test"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders an anchor when the item is not disabled", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        title={""}
        lessonCount={"0 lessons"}
        href={"#"}
        slug="test"
        onSave={() => {}}
        isSaved={false}
      />,
    );

    const link = within(getByTestId("unit-card")).getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders the number of lessons when provided", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItemCard
        data-testid="unit-card"
        lessonCount={"6 lessons"}
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
        lessonCount={"0 lessons"}
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
