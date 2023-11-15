import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakFieldError } from "./OakFieldError";

describe("OakFieldError", () => {
  it("renders", () => {
    const { getByText } = render(
      <OakFieldError> Oak Field Error</OakFieldError>,
    );
    expect(getByText("Oak Field Error")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakFieldError />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders nothing when there's no children", () => {
    const { container } = render(<OakFieldError />);
    expect(container).toBeEmptyDOMElement();
  });
});
