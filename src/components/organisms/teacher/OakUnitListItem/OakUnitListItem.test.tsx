import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { screen } from "@testing-library/react";

import { OakUnitListItem } from "./OakUnitListItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakUnitListItem", () => {
  it("renders", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="test"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"6 lessons"}
        isLegacy={false}
        href={""}
      />,
    );
    const listItem = screen.getAllByTestId("test");
    expect(listItem).toHaveLength(2);
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakUnitListItem
          title="Lesson 1"
          index={1}
          yearTitle={""}
          lessonCount={"0 lessons"}
          isLegacy={false}
          href={""}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders an anchor when the item is not disabled", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"0 lessons"}
        isLegacy={false}
        href={"www.test.com"}
      />,
    );
    const links = screen.getByRole("link");
    expect(links).toBeInTheDocument();
  });

  it("renders the number of lessons when provided", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        lessonCount={"6 lessons"}
        index={0}
        title={""}
        yearTitle={""}
        isLegacy={false}
        href={""}
      />,
    );
    const unitCard = screen.getAllByTestId("unit-card")[0];
    expect(unitCard).toBeInTheDocument();
    expect(unitCard).toHaveTextContent("6 lessons");
  });
  it("renders the year title when provided", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        lessonCount={"6 lessons"}
        index={0}
        title={""}
        yearTitle={"Year 4"}
        isLegacy={false}
        href={""}
      />,
    );
    const unitCard = screen.getAllByTestId("unit-card")[0];
    expect(unitCard).toBeInTheDocument();
    expect(unitCard).toHaveTextContent("Year 4");
  });
  it("applies disabled styles when unavailable", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"0 lessons"}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const unitCard = screen.getAllByTestId("unit-card")[0];
    expect(unitCard).toHaveStyleRule("cursor", "not-allowed");
    expect(unitCard).toHaveStyleRule("background", "#f2f2f2");
  });
  it("applies shows expired lesson counts correctly - 1 lesson", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"1 lesson"}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const lessonCount = screen.getAllByText("1 lesson");
    expect(lessonCount).toHaveLength(2);
  });
  it("applies shows expired lesson counts correctly - 0 lesson", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"0 lessons"}
        isLegacy={false}
        href={""}
        unavailable
      />,
    );

    const lessonCount = screen.getAllByText("0 lessons");
    expect(lessonCount).toHaveLength(2);
  });
  it("applies correct text for save buttons when content is unsaved", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"0 lessons"}
        isLegacy={false}
        href={""}
        unavailable
        onSave={() => {}}
        isSaved={false}
      />,
    );

    const saveButtons = screen.getAllByText("Save");
    expect(saveButtons).toHaveLength(2);
  });
  it("applies correct text for save buttons when content is saved", () => {
    renderWithTheme(
      <OakUnitListItem
        data-testid="unit-card"
        index={0}
        title={""}
        yearTitle={""}
        lessonCount={"0 lessons"}
        isLegacy={false}
        href={""}
        unavailable
        onSave={() => {}}
        isSaved={true}
      />,
    );

    const saveButtons = screen.getAllByText("Saved");
    expect(saveButtons).toHaveLength(2);
  });
});
