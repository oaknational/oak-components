import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakImage } from "./OakImage";

import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

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
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakImage
          src="/../../../../assets/oak-national-academy-logo-512.png"
          alt="a test image"
        />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to 100% width and auto height when aspect ratio props are provide and sets minWidth on container", () => {
    const { getByTestId, getByRole } = renderWithTheme(
      <OakImage
        data-testid="test"
        src="/../../../../assets/oak-national-academy-logo-512.png"
        width={512}
        height={512}
        $minWidth={"spacing-120"}
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
