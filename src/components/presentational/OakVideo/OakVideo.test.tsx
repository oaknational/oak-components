import React from "react";
import "@testing-library/jest-dom";

import { OakVideo } from "./OakVideo";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakVideo", () => {
  it("renders correctly with all controls", () => {
    const args = {
      videoSlot: <div>TEST_VIDEO</div>,
      transcript: ["TEST_1", "TEST_2", "TEST_3"],
      heading: "TEST_HEADING",
      body: "TEST_BODY",
      showTranscript: true,
      showSignLanguage: true,
      showCopyLink: true,
    };
    const { baseElement, getByRole, getAllByRole } = renderWithTheme(
      <OakVideo {...args} />,
    );

    expect(baseElement).toMatchSnapshot();
    expect(getByRole("heading")).toHaveTextContent("TEST_HEADING");
    expect(getByRole("paragraph")).toHaveTextContent("TEST_BODY");
    expect(getAllByRole("button")).toHaveLength(3);
  });

  it("renders correctly with just video", () => {
    const args = {
      videoSlot: <div>TEST_VIDEO</div>,
    };
    const { baseElement, queryByRole, queryAllByRole } = renderWithTheme(
      <OakVideo {...args} />,
    );

    expect(baseElement).toMatchSnapshot();
    expect(queryByRole("heading")).not.toBeInTheDocument();
    expect(queryByRole("paragraph")).not.toBeInTheDocument();
    expect(queryAllByRole("button")).toHaveLength(0);
  });
});
