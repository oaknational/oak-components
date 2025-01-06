import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { InternalCheckBoxLabel } from "./InternalCheckBoxLabel";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("InternalCheckBoxLabel", () => {
  it("renders a label", () => {
    const { getByTestId } = renderWithTheme(
      <InternalCheckBoxLabel htmlFor="checkbox-1" data-testid="test-1">
        Value
      </InternalCheckBoxLabel>,
    );
    expect(getByTestId("test-1")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalCheckBoxLabel htmlFor="checkbox-1" data-testid="test-1">
          Value
        </InternalCheckBoxLabel>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
