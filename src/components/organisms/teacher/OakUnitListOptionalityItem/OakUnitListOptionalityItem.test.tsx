import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakUnitListOptionalityItem", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItem
        data-testid="test"
        index={0}
        yearTitle={""}
        lessonCount={0}
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
        <OakUnitListOptionalityItem
          title="Lesson 1"
          index={1}
          yearTitle={""}
          lessonCount={0}
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
      <OakUnitListOptionalityItem
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        yearTitle={""}
        href={""}
        nullTitle={""}
        optionalityUnits={[
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: 0,
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: 0,
          },
        ]}
      />,
    );

    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "2 unit options",
    );
  });
  it("renders the year title and null title", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitListOptionalityItem
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        yearTitle={"Year 4"}
        href={""}
        nullTitle={"null title"}
        optionalityUnits={[]}
      />,
    );

    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "Year 4",
    );
    expect(getByTestId("unit-card-optionality").textContent).toContain(
      "null title",
    );
  });

  it("renders optional unit items", () => {
    const { getAllByText, getByText } = renderWithTheme(
      <OakUnitListOptionalityItem
        data-testid="unit-card-optionality"
        lessonCount={6}
        index={0}
        yearTitle={"Year 4"}
        href={""}
        nullTitle={"null title"}
        optionalityUnits={[
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: 10,
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: 4,
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
