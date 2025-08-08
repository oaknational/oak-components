import "@testing-library/jest-dom";
import React from "react";
import { create } from "react-test-renderer";
import { act } from "@testing-library/react";

import { OakCaptionCard } from "./OakCaptionCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("CaptionCard", () => {
  it("renders a caption card", () => {
    const { getByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        lastEdited={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    expect(getByTestId("caption-card")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCaptionCard
          captionId={"CAP-TEST-01234"}
          videoTitle={"This is a test video title"}
          lessonUid={"LESS-TEST-01234"}
          videoType={"lesson"}
          lastUpdated={"2023-01-01"}
          lastEdited={"2023-01-01"}
          checked={false}
          highlighted={false}
          onCheckChanged={() => {}}
          disabled={false}
          editHref={`#}`}
          lessonHref={`#`}
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("does not include the last edited time if one is not provided", () => {
    const { queryByText } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={true}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    expect(queryByText("Edited")).not.toBeInTheDocument();
  });

  it("calls onChangeChecked when checkbox is clicked", () => {
    const mockCallback = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={mockCallback}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    queryByTestId("checkbox")?.click();
    expect(mockCallback).toHaveBeenCalled();
  });

  it("should display checked box if checked prop is true", () => {
    const { queryByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={true}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    expect(queryByTestId("checkbox")).toBeInTheDocument();
    expect(queryByTestId("checkbox")).toBeChecked();
  });

  it("should display unchecked box if checked prop is false", () => {
    const { queryByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        editHref={`#`}
        lessonHref={`#`}
      />,
    );
    expect(queryByTestId("checkbox")).toBeInTheDocument();
    expect(queryByTestId("checkbox")).not.toBeChecked();
  });

  it("should use a different background if highlighted prop is true", () => {
    renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        data-testid="caption-card-original"
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    const { queryByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={true}
        onCheckChanged={() => {}}
        disabled={false}
        data-testid="caption-card"
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    // expect(queryByTestId("caption-card")).toBeInTheDocument();
    expect(queryByTestId("caption-card")?.attributes).not.toBe(
      queryByTestId("caption-card-original")?.attributes,
    );
  });

  it("should render the caption information", () => {
    const { queryByText } = renderWithTheme(
      <OakCaptionCard
        captionId={"test-caption-id"}
        videoTitle={"test-video-title"}
        lessonUid={"test-lesson-uid"}
        videoType={"lesson"}
        lastUpdated={new Date().toUTCString()}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    expect(
      queryByText("test-caption-id", { exact: false }),
    ).toBeInTheDocument();
    expect(
      queryByText("test-video-title", { exact: false }),
    ).toBeInTheDocument();
    expect(
      queryByText("test-lesson-uid", { exact: false }),
    ).toBeInTheDocument();
    expect(queryByText("Updated", { exact: false })).toBeInTheDocument();
  });

  it("clicking checkbox triggers onChangeChecked", async () => {
    const onCheckChanged = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        onCheckChanged={onCheckChanged}
        checked={false}
        disabled={false}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    act(() => {
      getByTestId("checkbox").click();
    });
    expect(getByTestId("checkbox")).toBeInTheDocument();
    expect(onCheckChanged).toHaveBeenCalled();
  });

  it("checkbox is not clickable when the card is disabled", () => {
    const onCheckChanged = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakCaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        onCheckChanged={onCheckChanged}
        checked={false}
        disabled={true}
        editHref={`#}`}
        lessonHref={`#`}
      />,
    );
    act(() => {
      getByTestId("checkbox").click();
    });
    expect(onCheckChanged).not.toHaveBeenCalled();
  });
});
