import React, { ReactNode } from "react";
import "@testing-library/jest-dom";

import { OakModalCenterBody } from ".";

import renderWithTheme from "@/test-helpers/renderWithTheme";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakModalCenterBody, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakModalCenterBody title="Modal Title" iconName="content-guidance">
        Modal content
      </OakModalCenterBody>,
    );

    expect(container).toMatchSnapshot();
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
