import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakUnitListOptionalityUnit } from "./OakUnitListOptionalityUnit";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakUnitListOptionalityUnit", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityUnit
        data-testid="test"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={0}
        isLegacy={false}
        href={""}
        optionalityUnits={[]}
        nullTitle={""}
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakUnitListOptionalityUnit
          title="Lesson 1"
          index={1}
          yearTitle={""}
          lessonCount={0}
          isLegacy={false}
          href={""}
          optionalityUnits={[]}
          nullTitle={""}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the number of optional units", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityUnit
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        title={""}
        yearTitle={""}
        isLegacy={false}
        href={""}
        nullTitle={""}
        optionalityUnits={[
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            index: 1,
            href: "#",
            yearTitle: "Year 10",
            lessonCount: 10,
            isLegacy: false,
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            index: 1,
            href: "#",
            yearTitle: "Year 10",
            lessonCount: 10,
            isLegacy: false,
          },
        ]}
      />,
    );

    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "2 unit options",
    );
  });
  it("renders the year title", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityUnit
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        title={""}
        yearTitle={"Year 4"}
        isLegacy={false}
        href={""}
        nullTitle={""}
        optionalityUnits={[]}
      />,
    );

    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "Year 4",
    );
  });
  it("renders the null title", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityUnit
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        title={""}
        yearTitle={"Year 4"}
        isLegacy={false}
        href={""}
        nullTitle={"null title"}
        optionalityUnits={[]}
      />,
    );

    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "null title",
    );
  });
  it("renders optional unit items", () => {
    const { getAllByText, getByText } = renderWithTheme(
      <OakUnitListOptionalityUnit
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        title={""}
        yearTitle={"Year 4"}
        isLegacy={false}
        href={""}
        nullTitle={"null title"}
        optionalityUnits={[
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            index: 1,
            href: "#",
            yearTitle: "Year 10",
            lessonCount: 10,
            isLegacy: false,
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            index: 1,
            href: "#",
            yearTitle: "Year 10",
            lessonCount: 4,
            isLegacy: false,
          },
        ]}
      />,
    );

    expect(
      getAllByText(
        "Migration: What do sources tell us about the British Empire in India and Africa?",
      ),
    ).toHaveLength(2);
    expect(getByText("4 lessons")).toBeInTheDocument();
    expect(getByText("10 lessons")).toBeInTheDocument();
  });
});
