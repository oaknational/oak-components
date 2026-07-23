import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakVideo } from "./OakVideo";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakVideo", () => {
  it("renders correctly with all controls", async () => {
    const user = userEvent.setup();
    const args = {
      videoSlot: <div>TEST_VIDEO</div>,
      transcript: ["TEST_1", "TEST_2", "TEST_3"],
      heading: "TEST_HEADING",
      body: "TEST_BODY",
      showTranscript: true,
      showSignLanguage: true,
      showCopyLink: true,
    };

    const onCopyLink = jest.fn();
    const onShowSignLanguage = jest.fn();

    const { baseElement, getByRole, getAllByRole, getByTestId } =
      renderWithTheme(
        <OakVideo
          {...args}
          onCopyLink={onCopyLink}
          onShowSignLanguage={onShowSignLanguage}
        />,
      );

    expect(baseElement).toMatchSnapshot();
    expect(getByRole("heading")).toHaveTextContent("TEST_HEADING");
    expect(getByRole("paragraph")).toHaveTextContent("TEST_BODY");
    expect(getAllByRole("button")).toHaveLength(3);

    const copyLinkButton = getByRole("button", { name: "Copy link" });
    await user.click(copyLinkButton);
    expect(onCopyLink).toHaveBeenCalled();

    const showSignLanguageButton = getByRole("button", {
      name: "Show sign language",
    });
    await user.click(showSignLanguageButton);
    expect(onShowSignLanguage).toHaveBeenCalled();

    expect(getByTestId("oak-video-transcript-container")).toHaveStyle(
      "display: none",
    );
    const showTranscriptButton = getByRole("button", {
      name: "Show transcript",
    });
    await user.click(showTranscriptButton);
    expect(getByTestId("oak-video-transcript-container")).not.toHaveStyle(
      "display: none",
    );
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
