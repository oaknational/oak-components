import React from "react";
import "@testing-library/jest-dom";

import { OakMediaClipList } from "./OakMediaClipList";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMediaClipList", () => {
  const defaultProps = {
    lessonTitle: "What is a democratic community?",
    currentClipCounter: 3,
    totalClipCounter: 3,
  };

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakMediaClipList {...defaultProps} data-testid="test">
        children
      </OakMediaClipList>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders lesson title correctly", () => {
    const { getByText } = renderWithTheme(
      <OakMediaClipList {...defaultProps}>children</OakMediaClipList>,
    );
    expect(getByText("What is a democratic community?")).toBeInTheDocument();
  });

  it("renders clip counter correctly (both currently playing clip counter and total clip counter)", () => {
    const { getByText } = renderWithTheme(
      <OakMediaClipList {...defaultProps}>children</OakMediaClipList>,
    );
    expect(getByText("3/3 clips")).toBeInTheDocument();
  });
});
