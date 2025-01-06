import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { InternalCheckBoxWrapper } from "./InternalCheckBoxWrapper";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("InternalCheckBoxWrapper", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalCheckBoxWrapper
        size={"all-spacing-6"}
        internalCheckbox={
          <input
            data-testid="test-input"
            type="checkbox"
            id="checkbox-1"
            value="Option 1"
          />
        }
        checkedIcon={<div data-testid="test-icon">Checked</div>}
      />,
    );
    expect(getByTestId("test-input")).toBeInTheDocument();
    expect(getByTestId("test-icon")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalCheckBoxWrapper
          size={"all-spacing-6"}
          internalCheckbox={
            <input
              data-testid="test-input"
              type="checkbox"
              id="checkbox-1"
              value="Option 1"
            />
          }
          checkedIcon={<div data-testid="test-icon">Checked</div>}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
