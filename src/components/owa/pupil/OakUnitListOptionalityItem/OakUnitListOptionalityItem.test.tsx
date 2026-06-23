import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { OakUnitListOptionalityItem } from "./OakUnitListOptionalityItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";

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
    const { container } = renderWithTheme(
      <OakUnitListOptionalityItem
        index={1}
        yearTitle={""}
        optionalityUnits={[]}
        nullTitle={""}
        firstItemRef={undefined}
      />,
    );

    expect(container).toMatchSnapshot();
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

            lessonCount: "0 lessons",
            slug: "migration",
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: "0 lessons",
            slug: "migration-2",
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

            lessonCount: "10 lessons",
            slug: "migration",
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: "4 lessons",
            slug: "migration-2",
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
  it("renders correct text for unit save buttons", () => {
    renderWithTheme(
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

            lessonCount: "10 lessons",
            slug: "migration",
          },
          {
            title:
              "Migration: What do sources tell us about the British Empire in India and Africa?",
            href: "#",

            lessonCount: "4 lessons",
            slug: "migration-2",
          },
        ]}
        firstItemRef={undefined}
        getIsSaved={(slug: string) => slug === "migration-2"}
        onSave={(unitSlug: string) => {
          console.log(unitSlug);
        }}
      />,
    );
    const saveButtons = screen.getAllByRole("button");
    expect(saveButtons).toHaveLength(2);
    expect(saveButtons[0]).toHaveTextContent("Save");
    expect(saveButtons[1]).toHaveTextContent("Saved");
  });
});
