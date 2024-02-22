import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakBackLink } from "./OakBackLink";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakBackLink, () => {
  it("renders", () => {
    const { queryByRole } = renderWithTheme(<OakBackLink href="#" />);

    expect(queryByRole("link")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakBackLink />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("is polymorphic", () => {
    const { queryByRole } = renderWithTheme(<OakBackLink as="button" />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
});
