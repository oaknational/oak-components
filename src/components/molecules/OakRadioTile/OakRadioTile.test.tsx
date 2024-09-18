import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { screen } from "@testing-library/react";

import { OakRadioTile, isTileItem } from "./OakRadioTile";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import userEvent from "@testing-library/user-event";

describe("isTileItem", () => {
  it("guards type correctly", () => {
    const testTileItem = { id: "id", label: "test" };
    const result = isTileItem(testTileItem);
    expect(result).toBe(true);

    const testNonTileItem = "notATileItem";
    const result2 = isTileItem(testNonTileItem);
    expect(result2).toBe(false);
  });
});
describe("OakRadioTile", () => {
  it("renders", () => {
    renderWithTheme(
      <OakRadioTile
        isChecked={false}
        tileItem={{ id: "id", label: "test" }}
        id="id"
        onChange={jest.fn}
      />,
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("updates focus state on keyboard tab", async () => {
    renderWithTheme(
      <OakRadioTile
        isChecked={false}
        tileItem={{ id: "id", label: "test" }}
        id="id"
        onChange={jest.fn}
      />,
    );
    await userEvent.tab();
    const radioTileFocus = screen.getByTestId("radio-tile-focus");
    expect(radioTileFocus).toBeInTheDocument();
  });
  it("renders with checked state", () => {
    renderWithTheme(
      <OakRadioTile
        isChecked={true}
        tileItem={{ id: "id", label: "test" }}
        id="id"
        onChange={jest.fn}
      />,
    );
    expect(screen.getByTestId("radio-tile-checked")).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakRadioTile
          data-testid="test"
          isChecked={false}
          tileItem={{ id: "id", label: "ID" }}
          id="id"
          onChange={jest.fn}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
