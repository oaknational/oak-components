import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { screen } from "@testing-library/react";

import { OakRadioTile } from "./OakRadioTile";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("CopyPasteThisComponent", () => {
  it("renders", () => {
    renderWithTheme(
      <OakRadioTile
        isChecked={false}
        isFocussed={false}
        tileItem={{ id: "id", label: "test" }}
        id="id"
        onChange={jest.fn}
        onFocus={jest.fn}
      />,
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakRadioTile
          data-testid="test"
          isChecked={false}
          isFocussed={false}
          tileItem={{ id: "id", label: "ID" }}
          id="id"
          onChange={jest.fn}
          onFocus={jest.fn}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
