import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { InternalRadioWrapper } from "./InternalRadioWrapper";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("InternalRadioWrapper", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <InternalRadioWrapper
        size={"spacing-24"}
        internalRadio={
          <input
            data-testid="test-input"
            type="radio"
            id="checkbox-1"
            value="Option 1"
          />
        }
      />,
    );
    expect(getByTestId("test-input")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalRadioWrapper
          size={"spacing-24"}
          internalRadio={
            <input
              data-testid="test-input"
              type="radio"
              id="checkbox-1"
              value="Option 1"
            />
          }
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
