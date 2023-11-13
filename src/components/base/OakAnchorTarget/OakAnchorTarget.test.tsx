import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakAnchorTarget } from "./OakAnchorTarget";

describe("OakAnchorTarget", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakAnchorTarget data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakAnchorTarget />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has position absolute", () => {
    const { getByTestId } = render(<OakAnchorTarget data-testid="test" />);
    expect(getByTestId("test")).toHaveStyle("position: absolute");
  });
  it("has top 0", () => {
    const { getByTestId } = render(<OakAnchorTarget data-testid="test" />);
    expect(getByTestId("test")).toHaveStyle("top: 0");
  });
  it("has scroll-margin-top", () => {
    const { getByTestId } = render(
      <OakAnchorTarget data-testid="test" $pt={"inner-padding-l"} />,
    );
    expect(getByTestId("test")).toHaveStyle("scroll-margin-top: 1.25rem");
  });
});
