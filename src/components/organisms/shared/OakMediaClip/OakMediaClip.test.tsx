import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakMediaClip } from "./OakMediaClip";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("OakMediaClip", () => {
  const defaultProps = {
    thumbnailImage: "/test-image.jpg",
    timeCode: 657.24,
    clipName: "Test Clip",
    learningCycle: "Cycle 1",
    muxPlayingState: "standard" as const,
    onClick: jest.fn(),
    imageAltText: "Test Image",
  };

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakMediaClip {...defaultProps} data-testid="test" />,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const { getByRole } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakMediaClip {...defaultProps} data-testid="test" />,
      </OakThemeProvider>,
    );
    fireEvent.click(getByRole("button"));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("displays the correct clip name", () => {
    const { getByText } = renderWithTheme(<OakMediaClip {...defaultProps} />);
    expect(getByText("Test Clip")).toBeInTheDocument();
  });

  it("displays the correct learning cycle", () => {
    const { getByText } = renderWithTheme(<OakMediaClip {...defaultProps} />);
    expect(getByText("Cycle 1")).toBeInTheDocument();
  });

  it("displays the correct time code", () => {
    const { getByText } = renderWithTheme(<OakMediaClip {...defaultProps} />);
    expect(getByText("10:57")).toBeInTheDocument();
  });

  it("applies disabled styles when disabled", () => {
    const { getByRole } = renderWithTheme(
      <OakMediaClip {...defaultProps} disabled />,
    );
    expect(getByRole("button")).toHaveStyle("background: rgb(228, 228, 228)");
  });

  it("displays 'Played' tag when muxPlayingState is 'played'", () => {
    const { getByText } = renderWithTheme(
      <OakMediaClip {...defaultProps} muxPlayingState="played" />,
    );
    expect(getByText("Played")).toBeInTheDocument();
  });
});
