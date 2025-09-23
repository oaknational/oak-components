import React from "react";
import "@testing-library/jest-dom";

import { OakRoundIcon } from "./OakRoundIcon";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakRoundIcon", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(<OakRoundIcon iconName="home" />);

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakRoundIcon iconName="home" />);

    expect(container).toMatchSnapshot();
  });
});
