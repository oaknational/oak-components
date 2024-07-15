import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPupilJourneyUnitsFilter } from "./OakPupilJourneyUnitsFilter";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const menuItems = [
  { text: "All", id: 0 },
  { text: "Biology", id: 1 },
  { text: "Chemistry", id: 2 },
  { text: "Physics", id: 3 },
];

describe("PupilJourneyUnitsFilter", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyUnitsFilter
          menuItems={menuItems}
          selected={1}
          onSelected={() => null}
          data-testid="test"
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders 4 buttons with the correct text", () => {
    const { getAllByText } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    menuItems.forEach((item) => {
      expect(getAllByText(item.text)[0]).toBeInTheDocument();
    });
  });
  it("renders the correct button as selected", () => {
    const { getAllByText } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    expect(getAllByText("Biology")[0]?.getAttribute("aria-checked") === "true");
  });
  it("calls the onSelected callback when a button is clicked", () => {
    const onSelected = jest.fn();
    const { getAllByText } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={onSelected}
        data-testid="test"
      />,
    );
    getAllByText("Physics")[0]?.click();
    expect(onSelected).toHaveBeenCalledWith({ text: "Physics", id: 3 });
  });
});
