import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakIcon, OakIconName } from "@/components/base";
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
   * Denotes the progress in the lesson section
   */
  progress: "not-started" | "in-progress" | "complete";
  /**
   * Optional accompanying text summarising the progress through the section
   * if not provided preset text will be displayed
   */
  summary?: ReactNode;
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

export type OakLessonNavItemProps<C extends ElementType> =
  BaseOakLessonNavItemProps<C> &
    (IntroSectionProps | QuizSectionProps | VideoSectionProps);

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

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) => props.$isDisabled && "cursor: default"}

  ${(props) =>
    !props.$isDisabled &&
    css`
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
        box-shadow: ${parseDropShadow("drop-shadow-yellow")},
          ${parseDropShadow("drop-shadow-grey")};
      }
    `}
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
      <OakBox>
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
      </OakBox>
      <OakFlex
        $flexBasis="space-between-none"
        $flexDirection="column"
        $flexGrow={1}
      >
        <OakFlex $alignSelf="flex-end">
          <StyledRoundIcon iconName="chevron-right" $isDisabled={isDisabled} />
        </OakFlex>
      </OakFlex>
    </StyledLessonNavItem>
  );
};

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

function pickSummaryForProgress<C extends ElementType>(
  props: OakLessonNavItemProps<C>,
) {
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

function pickSummaryForNotStarted<C extends ElementType>(
  props: OakLessonNavItemProps<C>,
) {
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

function pickSummaryForComplete<C extends ElementType>(
  props: OakLessonNavItemProps<C>,
) {
  switch (props.lessonSectionName) {
    case "intro":
    case "video":
      return "Completed";
    case "starter-quiz":
    case "exit-quiz":
      return `${props.answerCount}/${props.questionCount} correct`;
  }
}
