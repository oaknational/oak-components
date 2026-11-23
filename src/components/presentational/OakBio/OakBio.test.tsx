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
        imageAlt="Oak National Academy Logo"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("does not display image when imageSrc is not provided", () => {
    const { queryByAltText } = renderWithTheme(
      <OakBio name="Luke triton" title="Teacher" />,
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });
});

test("does not display title when title is not provided", () => {
  const { queryByText } = renderWithTheme(
    <OakBio
      name="Luke triton"
      imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
    />,
  );
  expect(queryByText("Teacher")).not.toBeInTheDocument();
});

test("displays image with empty alt text when no alt is provided", () => {
  const { container } = renderWithTheme(
    <OakBio
      name="Luke triton"
      title="Teacher"
      imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
    />,
  );

  expect(container.querySelector("img")).toHaveAttribute("alt", "");
});
