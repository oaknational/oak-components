import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { OakSaveCount } from "./OakSaveCount";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const defaultProps = {
  count: 0,
  href: "#",
};

describe("OakSaveCount", () => {
  it("should render a count", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );
    const count = screen.getByRole("link");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });
  it("should match snapshot", () => {
    const { container } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
