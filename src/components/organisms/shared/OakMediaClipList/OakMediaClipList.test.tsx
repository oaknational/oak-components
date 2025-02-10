import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakMediaClipList } from "./OakMediaClipList";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms/OakThemeProvider";
import { oakDefaultTheme } from "@/styles";

describe("OakMediaClipList", () => {
  const defaultProps = {
    lessonTitle: "What is a democratic community?",
    currentClipCounter: 3,
    totalClipCounter: 3,
  };

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakMediaClipList {...defaultProps} data-testid="test">
          children
        </OakMediaClipList>
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
