import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakToast } from "./OakToast";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const defautProps = {
  message: <span>This is a toast message</span>,
  variant: "green" as const,
  showIcon: true,
  autoDismiss: false,
};

describe("OakToast", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(<OakToast {...defautProps} />);
    expect(getByTestId("oak-toast")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakToast {...defautProps} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
