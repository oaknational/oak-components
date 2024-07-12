import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { PupilJourneyUnitsFilter } from "./PupilJourneyUnitsFilter";

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
      <PupilJourneyUnitsFilter
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
        <PupilJourneyUnitsFilter
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
    const { getByText } = renderWithTheme(
      <PupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    menuItems.forEach((item) => {
      expect(getByText(item.text)).toBeInTheDocument();
    });
  });
  it("renders the correct button as selected", () => {
    const { getByText } = renderWithTheme(
      <PupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    expect(getByText("Biology").getAttribute("aria-checked") === "true");
  });
  it("calls the onSelected callback when a button is clicked", () => {
    const onSelected = jest.fn();
    const { getByText } = renderWithTheme(
      <PupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={1}
        onSelected={onSelected}
        data-testid="test"
      />,
    );
    getByText("Physics").click();
    expect(onSelected).toHaveBeenCalledWith({ text: "Physics", id: 3 });
  });
});
