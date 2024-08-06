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
      <OakUnitListItem
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
        <OakUnitListItem
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
      <OakUnitListItem
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
      <OakUnitListItem
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
  it("renders the year title when provided", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        lessonCount={6}
        index={0}
        title={""}
        yearTitle={"Year 4"}
        isLegacy={false}
        href={""}
      />,
    );

    expect(getByTestId("unit-card").textContent).toContain("Year 4");
  });
  it("applies disabled styles when unavailable", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={0}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const unitCard = getByTestId("unit-card");
    expect(unitCard).toHaveStyleRule("cursor", "not-allowed");
    expect(unitCard).toHaveStyleRule("background", "#f2f2f2");
  });
  it("applies shows expired lesson counts correctly - 1/4 lessons", () => {
    const { getByText } = renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={4}
        expiredLessonCount={3}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const lessonCount = getByText("1/4 lessons");
    expect(lessonCount).toBeInTheDocument();
  });
  it("applies shows expired lesson counts correctly - 0/1 lesson", () => {
    const { getByText } = renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={1}
        expiredLessonCount={1}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const lessonCount = getByText("0/1 lesson");
    expect(lessonCount).toBeInTheDocument();
  });
  it("applies shows expired lesson counts correctly - 1 lesson", () => {
    const { getByText } = renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={1}
        expiredLessonCount={null}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const lessonCount = getByText("1 lesson");
    expect(lessonCount).toBeInTheDocument();
  });
});
