import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { OakCaptionSearch } from "./OakCaptionSearch";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakCaptionSearch", () => {
  it("should render", () => {
    const { getByLabelText } = renderWithTheme(<OakCaptionSearch />);
    expect(getByLabelText("Caption ID")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCaptionSearch />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle search submission", () => {
    const mockOnSearch = jest.fn();
    const { getByLabelText, getByRole } = renderWithTheme(
      <OakCaptionSearch onSearch={mockOnSearch} />,
    );

    const input = getByLabelText("Caption ID");
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("12345");
  });

  it("should display error when hasError is true", () => {
    const { getByText } = renderWithTheme(
      <OakCaptionSearch hasError errorText="Invalid caption ID" />,
    );
    expect(getByText("Invalid caption ID")).toBeInTheDocument();
  });

  it("should disable input and button when isLoading is true", () => {
    const { getByLabelText, getByRole } = renderWithTheme(
      <OakCaptionSearch isLoading />,
    );
    const input = getByLabelText("Caption ID");
    const button = getByRole("button");

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
