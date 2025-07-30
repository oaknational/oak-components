import React from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { InternalCheckBoxLabelHoverDecor } from "@/components/atoms/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { InternalButton } from "@/components/atoms/InternalButton";
import { OakCheckBox } from "@/components/molecules";
import { OakCombinedColorToken } from "@/styles";
import { InternalLink } from "@/components/molecules/InternalLink";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

const StyledFlexBox = styled(OakFlex)`
  &:has(input:not(:disabled)) {
    cursor: default;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${parseColor("bg-decorative3-subdued")};
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

export interface CaptionCardProps {
  captionId: string;
  videoTitle: string;
  lessonUid: string;
  videoType: "lesson";
  lastUpdated: string;
  lastEdited?: string;
  checked: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLessonUidClick?: () => void;
  onEditClick?: () => void;
  "data-testid"?: string;
}

/**
 * A caption card with links to the associated lesson and rev edit page.
 *
 * ## Events
 * The following callbacks are available for tracking checkbox events:
 *
 * ### onCheckChanged
 *  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 */
export const CaptionCard = (props: CaptionCardProps) => {
  const {
    checked,
    onCheckChanged,
    onLessonUidClick,
    onEditClick,
    captionId,
    videoTitle,
    lessonUid,
    videoType,
    lastUpdated,
    lastEdited,
    highlighted,
    disabled,
    "data-testid": dataTestId = "caption-card",
  } = props;

  return (
    <StyledFlexBox
      data-testid={dataTestId}
      $minHeight={"all-spacing-8"}
      $position={"relative"}
      $borderRadius={"border-radius-s"}
      $borderColor={getBorderColor(!!disabled, !!highlighted)}
      $ba="border-solid-s"
      $background={getBackgroundColor(!!disabled, !!highlighted)}
      $ph={"inner-padding-s"}
      $pv={"inner-padding-s"}
      $gap={"space-between-sssx"}
      $flexDirection={"column"}
      $width={"100%"}
    >
      <OakFlex
        $justifyContent={"flex-start"}
        $alignItems={"center"}
        $width={"100%"}
        $gap={"space-between-xs"}
      >
        <OakCheckBox
          checked={checked}
          value={`Caption ID: ${captionId}`}
          disabled={disabled}
          onChange={onCheckChanged}
          aria-labelledby={captionId}
          aria-label={`check caption ${captionId}`}
          data-testid="checkbox"
          id={captionId}
        />
        {/* <OakBox>Caption ID: {captionId}</OakBox> */}
        <OakBox>Video Title: {videoTitle}</OakBox>
        <OakFlex $flexGrow={10} $justifyContent={"flex-end"}>
          <InternalButton
            onClick={onEditClick}
            aria-label={`edit caption ${captionId} in rev`}
          >
            <OakFlex $alignItems={"center"} $gap={"space-between-sssx"}>
              Edit
              <StyledOakIcon
                iconWidth="all-spacing-6"
                iconHeight="all-spacing-6"
                alt=""
                iconName="external"
              />
            </OakFlex>
          </InternalButton>
        </OakFlex>
      </OakFlex>
      <OakFlex
        $justifyContent={"flex-start"}
        $alignItems={"center"}
        $width={"100%"}
        $gap={"space-between-xs"}
      >
        <InternalLink
          onClick={onLessonUidClick}
          color={"black"}
          visitedColor={"border-brand"}
          hoverColor={"black"}
          activeColor={"black"}
          disabledColor={"text-disabled"}
          aria-label={`view lesson ${lessonUid}`}
          data-testid="lesson_uid"
        >
          <OakFlex
            $minHeight={"all-spacing-8"}
            $position={"relative"}
            $alignItems={"center"}
            $gap={"space-between-sssx"}
          >
            {lessonUid}
            <StyledOakIcon
              iconWidth="all-spacing-6"
              iconHeight="all-spacing-6"
              alt=""
              iconName="external"
            />
          </OakFlex>
        </InternalLink>
        <OakFlex $alignItems={"center"}>
          <StyledOakIcon alt="" iconName="video" />
          {getVideoTypeText(videoType)}
        </OakFlex>
        {lastEdited ? (
          <OakFlex $alignItems={"center"}>
            <StyledOakIcon alt="" iconName="equipment-required" />
            Edited {getTimeText(lastEdited)}
          </OakFlex>
        ) : null}
        <OakFlex $alignItems={"center"}>
          <StyledOakIcon alt="" iconName="success" />
          Updated {getTimeText(lastUpdated)}
        </OakFlex>
      </OakFlex>
    </StyledFlexBox>
  );
};

function getVideoTypeText(videoType: string): string {
  switch (videoType) {
    case "lesson":
      return "Lesson video";
    case "media clip":
      return "Media clip";
    default:
      return "Unknown";
  }
}

function getBorderColor(
  disabled: boolean,
  highlighted: boolean,
): OakCombinedColorToken {
  if (disabled) {
    return "border-neutral-lighter";
  }
  return highlighted ? "bg-decorative3-main" : "border-neutral-lighter";
}

function getBackgroundColor(
  disabled: boolean,
  highlighted: boolean,
): OakCombinedColorToken {
  if (disabled) {
    return "bg-neutral-stronger";
  }
  return highlighted ? "bg-decorative3-very-subdued" : "bg-neutral";
}

export function getTimeText(timestamp: string | number): string {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    return "at an unknown time";
  }
  const now = Date.now();
  const diff = now - date.getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 1) {
    return "just now";
  }
  if (seconds < 60) {
    return `${seconds} secs ago`;
  }
  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} mins ago`;
  }
  if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} hrs ago`;
  }
  if (seconds < 604800) {
    return `${Math.floor(seconds / 86400)} days ago`;
  }
  if (seconds < 2592000) {
    return `${Math.floor(seconds / 604800)} weeks ago`;
  }
  if (seconds < 31536000) {
    return `${Math.floor(seconds / 2592000)} months ago`;
  }
  return `${Math.floor(seconds / 31536000)} years ago`;
}
