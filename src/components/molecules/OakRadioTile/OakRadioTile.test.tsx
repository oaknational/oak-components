import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakRadioTile } from "./OakRadioTile";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("CopyPasteThisComponent", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakRadioTile
        data-testid="test"
        isChecked={false}
        isFocussed={false}
        tileItem={{ id: "id", label: "ID" }}
        id="id"
        onChange={jest.fn}
        onFocus={jest.fn}
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakRadioTile
        data-testid="test"
        isChecked={false}
        isFocussed={false}
        tileItem={{ id: "id", label: "ID" }}
        id="id"
        onChange={jest.fn}
        onFocus={jest.fn}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
