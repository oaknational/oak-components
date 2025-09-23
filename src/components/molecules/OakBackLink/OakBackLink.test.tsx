import React from "react";
import "@testing-library/jest-dom";

import { OakBackLink } from "./OakBackLink";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakBackLink, () => {
  it("renders", () => {
    const { queryByRole } = renderWithTheme(<OakBackLink href="#" />);

    expect(queryByRole("link")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakBackLink />);

    expect(container).toMatchSnapshot();
  });

  it("is polymorphic", () => {
    const { queryByRole } = renderWithTheme(<OakBackLink as="button" />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
});
