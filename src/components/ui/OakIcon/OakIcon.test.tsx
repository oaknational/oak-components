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

  it("defaults the alt text to the icon name", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toHaveAttribute("alt", "home");
  });
});
