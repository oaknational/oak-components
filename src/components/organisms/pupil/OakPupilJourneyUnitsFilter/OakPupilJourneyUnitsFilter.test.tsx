import React from "react";
import "@testing-library/jest-dom";
import { act, create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPupilJourneyUnitsFilter } from "./OakPupilJourneyUnitsFilter";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

const menuItems = [
  { displayText: "All", value: "all" },
  { displayText: "Biology", value: "biology" },
  { displayText: "Chemistry", value: "chemistry" },
  { displayText: "Physics", value: "physics" },
];

describe("PupilJourneyUnitsFilter", () => {
  it("renders", () => {
    const { getAllByLabelText } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={"all"}
        onSelected={() => null}
      />,
    );
    expect(getAllByLabelText("OakPupilJourneyUnitsFilter")).toHaveLength(2);
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyUnitsFilter
          menuItems={menuItems}
          selected={"all"}
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
        selected={"all"}
        onSelected={() => null}
        data-testid="test"
      />,
    );
    menuItems.forEach((item) => {
      expect(getAllByText(item.displayText)[0]).toBeInTheDocument();
    });
  });
  it("renders the correct button as selected", () => {
    const { getAllByText } = renderWithTheme(
      <OakPupilJourneyUnitsFilter
        menuItems={menuItems}
        selected={"biology"}
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
        selected={"all"}
        onSelected={onSelected}
        data-testid="test"
      />,
    );
    act(() => {
      getAllByText("Physics")[0]?.click();
    });
    expect(onSelected).toHaveBeenCalledWith({
      displayText: "Physics",
      value: "physics",
    });
  });
});
