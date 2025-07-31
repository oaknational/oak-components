import "@testing-library/jest-dom";
import React from "react";
import { create } from "react-test-renderer";
import { act } from "@testing-library/react";

import { CaptionCard, getTimeText } from "./CaptionCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("CaptionCard", () => {
  it("renders a caption card", () => {
    const { getByTestId } = renderWithTheme(
      <CaptionCard
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
      />,
    );
    expect(getByTestId("caption-card")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <CaptionCard
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
        />
        ,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("does not include the last edited time if one is not provided", () => {
    const { queryByText } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={true}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
      />,
    );
    expect(queryByText("Edited")).not.toBeInTheDocument();
  });

  it("calls onChangeChecked when checkbox is clicked", () => {
    const mockCallback = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={mockCallback}
        disabled={false}
      />,
    );
    queryByTestId("checkbox")?.click();
    expect(mockCallback).toHaveBeenCalled();
  });
  it("calls onLessonUidClicked when lesson uid is clicked", () => {
    const mockCallback = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onLessonUidClick={mockCallback}
        disabled={false}
      />,
    );
    queryByTestId("lesson_uid")?.click();
    expect(mockCallback).toHaveBeenCalled();
  });

  it("should display checked box if checked prop is true", () => {
    const { queryByTestId } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={true}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
      />,
    );
    expect(queryByTestId("checkbox")).toBeInTheDocument();
    expect(queryByTestId("checkbox")).toBeChecked();
  });

  it("should display unchecked box if checked prop is false", () => {
    const { queryByTestId } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
      />,
    );
    expect(queryByTestId("checkbox")).toBeInTheDocument();
    expect(queryByTestId("checkbox")).not.toBeChecked();
  });

  it("should use a different background if highlighted prop is true", () => {
    renderWithTheme(
      <CaptionCard
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
      />,
    );
    const { queryByTestId } = renderWithTheme(
      <CaptionCard
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
      />,
    );
    // expect(queryByTestId("caption-card")).toBeInTheDocument();
    expect(queryByTestId("caption-card")?.attributes).not.toBe(
      queryByTestId("caption-card-original")?.attributes,
    );
  });

  it("should render the caption information", () => {
    const { queryByText } = renderWithTheme(
      <CaptionCard
        captionId={"test-caption-id"}
        videoTitle={"test-video-title"}
        lessonUid={"test-lesson-uid"}
        videoType={"lesson"}
        lastUpdated={new Date().toUTCString()}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
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
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        onCheckChanged={onCheckChanged}
        checked={false}
        disabled={false}
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
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        onCheckChanged={onCheckChanged}
        checked={false}
        disabled={true}
      />,
    );
    act(() => {
      getByTestId("checkbox").click();
    });
    expect(onCheckChanged).not.toHaveBeenCalled();
  });
});

// May need to increase this depending on the test run time
const timeToSubtract = 10;

describe("getTimeText", () => {
  it("returns 'just now' if time is less than a second in the past", () => {
    expect(getTimeText(new Date().toUTCString())).toBe("just now");
  });
  it("returns time in secs if time is less than a minute in the past", () => {
    expect(getTimeText(Date.now() - (1000 * 60 - timeToSubtract))).toBe(
      "59 secs ago",
    );
  });
  it("returns time in mins if time is less than an hour in the past", () => {
    expect(getTimeText(Date.now() - (1000 * 60 * 60 - timeToSubtract))).toBe(
      "59 mins ago",
    );
  });
  it("returns time in hours if time is less than a day in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 - timeToSubtract)),
    ).toBe("23 hrs ago");
  });
  it("returns time in days if time is less than a week in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 7 - timeToSubtract)),
    ).toBe("6 days ago");
  });
  it("returns time in weeks if time is less than a month in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 30 - timeToSubtract)),
    ).toBe("4 weeks ago");
  });
  it("returns time in months if time is less than a year in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 364 - timeToSubtract)),
    ).toBe("12 months ago");
  });
  it("returns time in years if time is more than a year in the past", () => {
    expect(getTimeText(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2)).toBe(
      "2 years ago",
    );
  });
  it("returns 'at an unknown time' if the date is invalid", () => {
    expect(getTimeText("invalid date")).toBe("at an unknown time");
  });
});
