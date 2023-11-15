import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakIcon } from "./OakIcon";

describe("OakIcon", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakIcon iconName="home" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to 32px width and height", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toHaveStyle({
      width: "2rem",
      height: "2rem",
    });
  });
  it("sets the width and height", () => {
    const { getByTestId } = render(
      <OakIcon
        data-testid="test"
        iconName="home"
        $width="all-spacing-5"
        $height="all-spacing-5"
      />,
    );
    expect(getByTestId("test")).toHaveStyle({
      width: "1.25rem",
      height: "1.25rem",
    });
  });

  it("defaults the alt text to the icon name", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toHaveAttribute("alt", "home");
  });

  it("sets the alt text", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" alt="Home" />,
    );
    expect(getByTestId("test")).toHaveAttribute("alt", "Home");
  });
});
