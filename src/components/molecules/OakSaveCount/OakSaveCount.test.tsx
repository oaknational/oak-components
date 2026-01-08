import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { OakSaveCount } from "./OakSaveCount";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const defaultProps = {
  count: 0,
  href: "#",
  loading: false,
};

describe("OakSaveCount", () => {
  it("should render a count", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );
    const count = screen.getByRole("link");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });
  it("should render a count with a value of 99+", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} count={100} />
      </OakThemeProvider>,
    );
    const count = screen.getByRole("link");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("99+");
  });
  it("should render the correct icon when count is 0", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );
    const icon = screen.getByTestId("bookmark-outlined");
    expect(icon).toBeInTheDocument();
  });
  it("should render the correct icon when count is greater than 0", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} count={1} />
      </OakThemeProvider>,
    );
    const icon = screen.getByTestId("bookmark-filled");
    expect(icon).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it("applies the correct aria label when count is set", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} />
      </OakThemeProvider>,
    );

    expect(
      screen.getByLabelText("My library: 0 saved units"),
    ).toBeInTheDocument();
  });

  it("pluralises the count correctly", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} count={1} />
      </OakThemeProvider>,
    );

    expect(
      screen.getByLabelText("My library: 1 saved unit"),
    ).toBeInTheDocument();
  });

  it("applies the correct aria label when no count  is provided", () => {
    render(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakSaveCount {...defaultProps} count={undefined} label="My library" />
      </OakThemeProvider>,
    );

    expect(screen.getByLabelText("My library")).toBeInTheDocument();
  });
});
