import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import {
  OakBox,
  OakFlex,
  OakIcon,
  OakIconName,
  OakSpan,
} from "@/components/base";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakRoundIcon } from "@/components/ui";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakCombinedColorToken } from "@/styles";

type LessonSectionName = "intro" | "starter-quiz" | "video" | "exit-quiz";

type BaseOakLessonNavItemProps<C extends ElementType> = {
  as?: C;
  /**
   * Present the section as disabled.
   *
   * If this is a button the `disabled` prop should also be set.
   * For a link the anchor should be replaced with a non interactive element
   */
  isDisabled?: boolean;
} & ComponentPropsWithoutRef<C>;

type QuizSectionProps = {
  lessonSectionName: "starter-quiz" | "exit-quiz";
  /**
   * The number of questions in the quiz
   */
  questionCount: number;
  /**
   * The number of questions answered correctly
   */
  answerCount: number;
};

type VideoSectionProps = {
  lessonSectionName: "video";
  /**
   * The length of the video in minutes
   */
  videoLength: number;
};

type IntroSectionProps = {
  lessonSectionName: "intro";
};

type SectionProps = {
  /**
   * Denotes the progress in the lesson section
   */
  progress: "not-started" | "in-progress" | "complete";
} & (IntroSectionProps | QuizSectionProps | VideoSectionProps);

export type OakLessonNavItemProps<C extends ElementType> =
  BaseOakLessonNavItemProps<C> & SectionProps;

const StyledLabel = styled(OakBox)``;

const StyledRoundIcon = styled(OakRoundIcon)<{
  $isDisabled?: boolean;
}>`
  width: ${parseSpacing("all-spacing-8")};
  height: ${parseSpacing("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${(props) =>
      parseColorFilter(props.$isDisabled ? "icon-disabled" : "icon-inverted")};
  }
`;

const StyledLessonNavItem = styled(OakFlex)<{ $isDisabled?: boolean }>`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) => props.$isDisabled && "cursor: default"}

  ${(props) =>
    !props.$isDisabled &&
    css`
      cursor: pointer;

      &:hover,
      &:active {
        ${StyledLabel} {
          text-decoration: underline;
        }

        ${StyledRoundIcon} {
          background: ${parseColor("bg-btn-primary")};

          img {
            filter: ${parseColorFilter("icon-main")};
          }
        }
      }

      &:active {
        box-shadow: ${parseDropShadow("drop-shadow-lemon")},
          ${parseDropShadow("drop-shadow-grey")};
      }
    `}
`;

const FlexedOakBox = styled(OakBox)`
  flex: 1;
`;

/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
export const OakLessonNavItem = <C extends ElementType = "a">(
  props: OakLessonNavItemProps<C>,
) => {
  const { as, lessonSectionName, progress, isDisabled, ...rest } = props;
  const [notStartedBackgroundColor, backgroundColor, borderColor] =
    pickColorsForSection(lessonSectionName);

  return (
    <StyledLessonNavItem
      as={as ?? "a"}
      $gap="space-between-m"
      $alignItems="center"
      $background={
        progress === "not-started" ? notStartedBackgroundColor : backgroundColor
      }
      $ph={["inner-padding-m", "inner-padding-xl"]}
      $pv="inner-padding-l"
      $borderRadius="border-radius-l"
      $borderColor={borderColor}
      $ba="border-solid-l"
      $isDisabled={isDisabled}
      {...rest}
    >
      <OakFlex $width="all-spacing-13" $justifyContent="center">
        <OakIcon
          iconName={pickIconForSection(lessonSectionName)}
          $width="all-spacing-10"
          $height="all-spacing-10"
        />
      </OakFlex>
      <FlexedOakBox>
        <StyledLabel
          as="strong"
          $font={["heading-6", "heading-5"]}
          $color={isDisabled ? "text-disabled" : "text-primary"}
        >
          {pickLabelForSection(lessonSectionName)}
        </StyledLabel>
        <OakBox $font={["body-2", "body-1"]}>
          {pickSummaryForProgress(props)}
        </OakBox>
      </FlexedOakBox>
      {renderQuestionCounter(props)}
      <StyledRoundIcon iconName="chevron-right" $isDisabled={isDisabled} />
    </StyledLessonNavItem>
  );
};

function renderQuestionCounter(props: SectionProps) {
  if (props.progress !== "complete") {
    return null;
  }

  /**
   * The large answer counter is only rendered when on a non-mobile screen
   */
  switch (props.lessonSectionName) {
    case "exit-quiz":
    case "starter-quiz":
      return (
        <OakBox $display={["none", "block"]} $mr="space-between-xxxl">
          <OakSpan $font="heading-4">{props.answerCount}</OakSpan>
          <OakSpan $font="heading-6">
            &nbsp;/&nbsp;{props.questionCount}
          </OakSpan>
        </OakBox>
      );
    default:
      return null;
  }
}

function pickIconForSection(sectionName: LessonSectionName): OakIconName {
  switch (sectionName) {
    case "intro":
      return "intro";
    case "starter-quiz":
    case "exit-quiz":
      return "quiz";
    case "video":
      return "video";
  }
}

function pickColorsForSection(
  sectionName: LessonSectionName,
): [
  notStartedBackgroundColor: OakCombinedColorToken,
  backgroundColor: OakCombinedColorToken,
  borderColor: OakCombinedColorToken,
] {
  switch (sectionName) {
    case "intro":
      return [
        "bg-decorative2-very-subdued",
        "bg-decorative2-main",
        "border-decorative2-stronger",
      ];
    case "starter-quiz":
      return [
        "bg-decorative1-very-subdued",
        "bg-decorative1-main",
        "border-decorative1-stronger",
      ];
    case "video":
      return [
        "bg-decorative4-very-subdued",
        "bg-decorative4-main",
        "border-decorative4-stronger",
      ];
    case "exit-quiz":
      return [
        "bg-decorative5-very-subdued",
        "bg-decorative5-main",
        "border-decorative5-stronger",
      ];
  }
}

function pickLabelForSection(sectionName: LessonSectionName): string {
  switch (sectionName) {
    case "intro":
      return "Intro";
    case "starter-quiz":
      return "Starter quiz";
    case "video":
      return "Watch video";
    case "exit-quiz":
      return "Exit quiz";
  }
}

function pickSummaryForProgress(props: SectionProps) {
  switch (props.progress) {
    case "not-started":
      return pickSummaryForNotStarted(props);
    case "in-progress":
      return "In progress...";
    case "complete":
      return (
        <OakFlex $gap="space-between-sssx" $alignItems="center">
          <OakIcon
            iconName="tick"
            $width="all-spacing-6"
            $height="all-spacing-6"
          />
          {pickSummaryForComplete(props)}
        </OakFlex>
      );
  }
}

function pickSummaryForNotStarted(props: SectionProps) {
  switch (props.lessonSectionName) {
    case "intro":
      return "Get ready";
    case "starter-quiz":
      return `${props.questionCount} Questions`;
    case "exit-quiz":
      return `Practice ${props.questionCount} questions`;
    case "video":
      return `${props.videoLength} min`;
  }
}

function pickSummaryForComplete(props: SectionProps) {
  switch (props.lessonSectionName) {
    case "intro":
    case "video":
      return "Completed";
    case "starter-quiz":
    case "exit-quiz":
      // The counter is rendered as the summary next
      // when on a mobile device, so it is hidden on larger screens
      return (
        <>
          <OakBox $display={["none", "block"]}>Completed</OakBox>
          <OakBox $display={["block", "none"]}>
            {props.answerCount}/{props.questionCount} correct
          </OakBox>
        </>
      );
  }
}
