import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";

import { OakModalCenter, OakModalCenterBody } from ".";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakModalCenter, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakModalCenterBody title="Modal Title" iconName="content-guidance">
          Modal content
        </OakModalCenterBody>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("shows the child content", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalCenterBody title="Modal Title" iconName="content-guidance">
        <div data-testid="child-content">Hello World</div>
      </OakModalCenterBody>,
    );

    expect(getByTestId("child-content")).toHaveTextContent("Hello World");
  });

  it("shows the icon element", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalCenterBody title="Modal Title" iconName="content-guidance">
        <div data-testid="child-content">Hello World</div>
      </OakModalCenterBody>,
    );

    expect(getByTestId("icon")).toBeInTheDocument();
  });
});
