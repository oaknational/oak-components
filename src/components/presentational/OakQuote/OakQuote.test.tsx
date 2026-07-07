import React from "react";
import "@testing-library/jest-dom";

import { OakQuote } from "./OakQuote";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakQuote component", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakQuote
        quote="This is a quote"
        authorName="Author Name"
        authorTitle="Author Title"
        authorImageSrc="https://via.placeholder.com/150"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot (hasLeftBorder=false)", () => {
    const { container } = renderWithTheme(
      <OakQuote
        quote="This is a quote"
        authorName="Author Name"
        authorTitle="Author Title"
        authorImageSrc="https://via.placeholder.com/150"
        hasLeftBorder={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
