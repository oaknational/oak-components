import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakImage } from "./OakImage";

describe("OakImage", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakImage
        data-testid="test"
        src="/../../../../assets/oak-national-academy-logo-512.png"
        alt="a test image"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakImage
        src="/../../../../assets/oak-national-academy-logo-512.png"
        alt="a test image"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to auto width and height", () => {
    const { getByTestId } = render(
      <OakImage
        data-testid="test"
        src="/../../../../assets/oak-national-academy-logo-512.png"
        alt="a test image"
      />,
    );
    expect(getByTestId("test")).toHaveStyle({
      width: "auto",
      height: "auto",
    });
  });
});
