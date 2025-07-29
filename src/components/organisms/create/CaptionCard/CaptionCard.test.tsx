import "@testing-library/jest-dom";
import React from "react";
import { create } from "react-test-renderer";
import { act } from "@testing-library/react";

import { CaptionCard } from "./CaptionCard";

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
        linkToRev={"https://example.com"}
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
          linkToRev={"https://example.com"}
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
        linkToRev={"https://example.com"}
        checked={false}
        highlighted={false}
        onCheckChanged={() => {}}
        disabled={false}
      />,
    );
    expect(queryByText("Edited")).not.toBeInTheDocument();
  });

  it("calls onChangeChecked when clicked", () => {});

  it("should update checked attribute in DOM", () => {});

  it("should render the caption information", () => {});

  it("should maintain single value in group", () => {});

  it("clicking checkbox triggers onChangeChecked", async () => {
    const onCheckChanged = jest.fn();
    const { getByTestId } = renderWithTheme(
      <CaptionCard
        captionId={"CAP-TEST-01234"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-01234"}
        videoType={"lesson"}
        lastUpdated={"2023-01-01"}
        linkToRev={"https://example.com"}
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
        linkToRev={"https://example.com"}
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
