import React from "react";
import styled, { css } from "styled-components";

import { getTimeText } from "@/components/organisms/create/utils";
import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { InternalCheckBoxLabelHoverDecor } from "@/components/atoms/InternalCheckBoxLabel";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  OakCheckBox,
  OakHoverLink,
  OakSecondaryLink,
} from "@/components/molecules";

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
  &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:has(input:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      background-color: ${parseColor("bg-neutral-stronger")};
      color: ${parseColor("text-disabled")};
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

export interface OakCaptionCardProps {
  captionId: string;
  videoTitle: string;
  lessonUid: string;
  videoType: "lesson";
  lastUpdated: string;
  lastEdited?: string;
  checked?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  editHref: string;
  lessonHref: string;
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
export const OakCaptionCard = (props: OakCaptionCardProps) => {
  const {
    checked,
    onCheckChanged,
    onClick,
    captionId,
    videoTitle,
    lessonUid,
    videoType,
    lastUpdated,
    lastEdited,
    highlighted = false,
    disabled = false,
    "data-testid": dataTestId = "caption-card",
    editHref,
    lessonHref,
  } = props;

  const filterColor = disabled ? "grey50" : null;

  return (
    <StyledFlexBox
      data-testid={dataTestId}
      $minHeight={"all-spacing-8"}
      $position={"relative"}
      $background={"bg-primary"}
      $borderRadius={"border-radius-s"}
      $pa={"inner-padding-m"}
      $gap={"space-between-xs"}
      $flexDirection={"column"}
      $width={"100%"}
      $highlighted={!!highlighted}
      $disabled={!!disabled}
      onClick={onClick}
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
          <OakHoverLink
            href={editHref}
            iconName="external"
            isTrailingIcon
            aria-label={`edit caption ${captionId} in a new tab in rev`}
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Edit
          </OakHoverLink>
        </OakFlex>
      </OakFlex>
      <OakFlex
        $justifyContent={"flex-start"}
        $alignItems={"center"}
        $width={"100%"}
        $gap={"all-spacing-7"}
        $font={"body-2"}
      >
        <OakSecondaryLink
          href={lessonHref}
          aria-label={`view lesson ${lessonUid} in a new tab`}
          data-testid="lesson_uid"
          iconName="external"
          isTrailingIcon
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {lessonUid}
        </OakSecondaryLink>

        <OakFlex $alignItems={"center"} $gap={"space-between-sssx"}>
          {" "}
          {/* the video icon has no natural padding so whilst inconsistent this looks better */}
          <OakIcon
            alt=""
            iconName="video"
            iconWidth="all-spacing-6"
            iconHeight="all-spacing-6"
            $colorFilter={filterColor}
          />
          {getVideoTypeText(videoType)}
        </OakFlex>
        {lastEdited ? (
          <OakFlex $alignItems={"center"}>
            <OakIcon
              alt=""
              iconName="equipment-required"
              iconWidth="all-spacing-6"
              iconHeight="all-spacing-6"
              $colorFilter={filterColor}
            />
            Edited {getTimeText(lastEdited)}
          </OakFlex>
        ) : null}
        <OakFlex $alignItems={"center"}>
          <OakIcon
            alt=""
            iconName="success"
            iconWidth="all-spacing-6"
            iconHeight="all-spacing-6"
            $colorFilter={filterColor}
          />
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
