import React from "react";
import styled, { css } from "styled-components";

import { getTimeText } from "@/components/organisms/create/utils";
import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { InternalCheckBoxLabelHoverDecor } from "@/components/atoms/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { InternalButton } from "@/components/atoms/InternalButton";
import { OakCheckBox } from "@/components/molecules";
import { InternalLink } from "@/components/molecules/InternalLink";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

interface StyledFlexBoxWrapperProps {
  $minHeight: string;
  $position: string;
  $borderRadius: string;
  $pa: string;
  $gap: string;
  $flexDirection: string;
  $width: string;
  $highlighted?: boolean;
  $disabled?: boolean;
}

const StyledFlexBox = styled(OakFlex)<StyledFlexBoxWrapperProps>`
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

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      background-color: ${parseColor("bg-neutral-stronger")};
    `}

  ${(props) =>
    !props.$disabled &&
    props.$highlighted &&
    css`
      background-color: ${parseColor("bg-decorative3-very-subdued")};
      border-color: ${parseColor("bg-decorative3-main")};
      &:hover {
        background-color: ${parseColor("bg-decorative3-subdued")};
      }
    `}
  ${(props) =>
    !props.$disabled &&
    !props.$highlighted &&
    css`
      &:hover {
        background-color: ${parseColor("bg-decorative3-subdued")};
      }
    `}
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
    highlighted = false,
    disabled = false,
    "data-testid": dataTestId = "caption-card",
  } = props;

  return (
    <StyledFlexBox
      data-testid={dataTestId}
      $minHeight={"all-spacing-8"}
      $position={"relative"}
      $borderRadius={"border-radius-s"}
      $ba="border-solid-s"
      $pa={"inner-padding-m"}
      $gap={"space-between-xs"}
      $flexDirection={"column"}
      $width={"100%"}
      $highlighted={!!highlighted}
      $disabled={!!disabled}
    >
      <OakFlex
        $justifyContent={"flex-start"}
        $alignItems={"center"}
        $width={"100%"}
        $gap={"space-between-xs"}
        $font={"heading-7"}
      >
        <OakCheckBox
          checked={checked}
          value={`Caption ID: ${captionId}`}
          displayValue=""
          disabled={disabled}
          onChange={onCheckChanged}
          aria-labelledby={captionId}
          aria-label={`check caption ${captionId}`}
          data-testid="checkbox"
          id={captionId}
        />
        <OakFlex
          $font={"heading-7"}
          $justifyContent={"flex-start"}
          $gap={"space-between-ssx"}
          $flexWrap={"wrap"}
        >
          <OakSpan $font={"heading-7"}>Caption ID: {captionId}</OakSpan>
          <OakSpan> • </OakSpan>
          <OakBox>Video Title: {videoTitle}</OakBox>
        </OakFlex>

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
        $gap={"all-spacing-7"}
        $font={"body-2"}
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
          <OakFlex $gap={"space-between-sssx"}>
            {lessonUid}
            <StyledOakIcon
              iconWidth="all-spacing-6"
              iconHeight="all-spacing-6"
              alt=""
              iconName="external"
            />
          </OakFlex>
        </InternalLink>
        <OakFlex $alignItems={"center"} $gap={"space-between-sssx"}>
          {" "}
          {/* the video icon has no natural padding so whilst inconsistent this looks better */}
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
