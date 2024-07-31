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
        optionalityUnits={[]}
        nullTitle={""}
        firstItemRef={undefined}
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakUnitListOptionalityItem
          index={1}
          yearTitle={""}
          optionalityUnits={[]}
          nullTitle={""}
          firstItemRef={undefined}
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
        index={0}
        yearTitle={""}
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
        firstItemRef={undefined}
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
        index={0}
        yearTitle={"Year 4"}
        nullTitle={"null title"}
        optionalityUnits={[]}
        firstItemRef={undefined}
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
        index={0}
        yearTitle={"Year 4"}
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
        firstItemRef={undefined}
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
