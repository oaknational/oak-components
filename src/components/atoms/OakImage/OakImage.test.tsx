import React from "react";
import "@testing-library/jest-dom";

import { OakImage } from "./OakImage";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakImage", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakImage
        data-testid="test"
        src="/../../../../assets/oak-national-academy-logo-512.png"
        alt="a test image"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakImage
        src="/../../../../assets/oak-national-academy-logo-512.png"
        alt="a test image"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("defaults to 100% width and auto height when aspect ratio props are provide and sets minWidth on container", () => {
    const { getByTestId, getByRole } = renderWithTheme(
      <OakImage
        data-testid="test"
        src="/../../../../assets/oak-national-academy-logo-512.png"
        width={512}
        height={512}
        $minWidth={"all-spacing-16"}
        alt="a test image"
      />,
    );

    expect(getByTestId("test")).toHaveStyle({
      "min-width": "7.5rem",
    });
    expect(getByRole("img")).toHaveStyle({
      width: "100%",
      height: "auto",
    });
  });
});
