import React from "react";
import "@testing-library/jest-dom";

import { OakVideo } from "./OakVideo";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakVideo", () => {
  it("renders correctly", () => {
    const args = {
      videoSlot: <div>TEST_VIDEO</div>,
      transcript: ["TEST_1", "TEST_2", "TEST_3"],
      heading: "TEST_HEADING",
      body: "TEST_BODY",
      showTranscript: true,
      showSignLanguage: true,
      showCopyLink: true,
    };
    const { baseElement, getByRole } = renderWithTheme(<OakVideo {...args} />);

    expect(baseElement).toMatchSnapshot();
    expect(getByRole("heading")).toHaveTextContent("TEST_HEADING");
  });
});
