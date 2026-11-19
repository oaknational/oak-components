import React from "react";
import "@testing-library/jest-dom";

import OakBio from "./OakBio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakBio", () => {
  test("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakBio
        name="Luke triton"
        title="Teacher"
        imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("displays at organisation name when the prop is provided", () => {
    const { getByText } = renderWithTheme(
      <OakBio
        name="Luke triton"
        title="Teacher at Oak National Academy"
        imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
      />,
    );
    expect(getByText("Teacher at Oak National Academy")).toBeInTheDocument();
  });
});
