import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakRoundIcon } from "@/components/images-and-icons/OakRoundIcon";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakUiRoleToken } from "@/styles";
import { OakLoadingSpinner } from "@/components/messaging-and-feedback/OakLoadingSpinner";

type LessonSectionName = "intro" | "starter-quiz" | "video" | "exit-quiz";

type BaseOakLessonNavItemProps<C extends ElementType> = {
  as?: C;
  /**
   * Disable the section preventing navigation to it.
   */
  disabled?: boolean;
  /**
   * Display loading state while preserving disabled appearance and behavior.
   */
  isLoading?: boolean;
} & ComponentPropsWithoutRef<C>;

type QuizSectionProps = {
  lessonSectionName: "starter-quiz" | "exit-quiz";
  /**
   * The number of questions in the quiz
   */
  numQuestions: number;
  /**
   * The number of questions answered correctly
   */
  grade: number;
};

type VideoSectionProps = {
  lessonSectionName: "video";
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

const StyledIconWrapper = styled(OakFlex)<{ $disabled?: boolean }>`
  filter: ${(props) =>
    parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary")};
`;

const StyledRoundIcon = styled(OakRoundIcon)<{
  $disabled?: boolean;
}>`
  width: ${parseSpacing("spacing-40")};
  height: ${parseSpacing("spacing-40")};
  padding: 0;

  background: transparent;

  img {
    filter: ${(props) =>
      parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary")};
  }
`;

const activeIconStyles = css`
  ${StyledRoundIcon} {
    background: ${parseColor("bg-btn-primary")};

    img {
      filter: ${parseColorFilter("icon-inverted")};
    }
  }
`;

const StyledLessonNavItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) => props.$disabled && "cursor: default"}

  ${(props) =>
    !props.$disabled &&
    css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          ${StyledLabel} {
            text-decoration: underline;
          }

          ${activeIconStyles}
        }
      }

      &:active {
        box-shadow: ${parseDropShadow("drop-shadow-lemon")},
          ${parseDropShadow("drop-shadow-grey")};
        ${activeIconStyles}
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
  const {
    as,
    lessonSectionName,
    progress,
    disabled,
    isLoading,
    href,
    onClick,
    ...rest
  } = props;
  const isDisabled = Boolean(disabled || isLoading);
  const [
    notStartedBackgroundColor,
    backgroundColor,
    borderColor,
    disabledBackgroundColor,
  ] = pickColorsForSection(lessonSectionName);

  const resolvedBackgroundColor =
    isDisabled && disabledBackgroundColor
      ? disabledBackgroundColor
      : progress === "not-started"
        ? notStartedBackgroundColor
        : backgroundColor;

  return (
    <StyledLessonNavItem
      as={isDisabled ? "div" : as ?? "a"}
      $gap="spacing-24"
      $alignItems="center"
      $background={resolvedBackgroundColor}
      $ph={["spacing-16", "spacing-24"]}
      $pv="spacing-20"
      $borderRadius="border-radius-l"
      $borderColor={isDisabled ? "border-neutral-lighter" : borderColor}
      $ba="border-solid-l"
      $disabled={isDisabled}
      $color="text-primary"
      href={isDisabled ? undefined : href}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      <StyledIconWrapper
        $width="spacing-80"
        $justifyContent="center"
        $disabled={isDisabled}
      >
        <OakIcon
          iconName={pickIconForSection(lessonSectionName)}
          $width="spacing-56"
          $height="spacing-56"
        />
      </StyledIconWrapper>
      <FlexedOakBox>
        <StyledLabel
          as="strong"
          $font={["heading-6", "heading-5"]}
          $color={isDisabled ? "text-disabled" : "text-primary"}
        >
          {pickLabelForSection(lessonSectionName)}
        </StyledLabel>
        <OakBox
          $font={["body-2", "body-1"]}
          $color={isDisabled ? "text-subdued" : "text-primary"}
        >
          {pickSummaryForProgress(props, isDisabled)}
        </OakBox>
      </FlexedOakBox>
      {renderQuestionCounter(props, isDisabled)}
      {isLoading ? (
        <OakFlex
          $width="spacing-40"
          $height="spacing-40"
          $alignItems="center"
          $justifyContent="center"
        >
          <OakLoadingSpinner $width="spacing-24" />
        </OakFlex>
      ) : (
        <StyledRoundIcon iconName="chevron-right" $disabled={isDisabled} />
      )}
    </StyledLessonNavItem>
  );
};

function renderQuestionCounter(props: SectionProps, isDisabled: boolean) {
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
        <OakBox $display={["none", "block"]} $mr="spacing-24">
          <OakSpan
            $font="heading-4"
            $color={isDisabled ? "text-subdued" : "text-primary"}
          >
            {props.grade}
          </OakSpan>
          <OakSpan
            $font="heading-6"
            $color={isDisabled ? "text-subdued" : "text-primary"}
          >
            &nbsp;/&nbsp;{props.numQuestions}
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
  notStartedBackgroundColor: OakUiRoleToken,
  backgroundColor: OakUiRoleToken,
  borderColor: OakUiRoleToken,
  disabledBackgroundColor: OakUiRoleToken | null,
] {
  switch (sectionName) {
    case "intro":
      return [
        "bg-decorative2-very-subdued",
        "bg-decorative2-main",
        "border-decorative2-stronger",
        null,
      ];
    case "starter-quiz":
      return [
        "bg-decorative1-very-subdued",
        "bg-decorative1-main",
        "border-decorative1-stronger",
        "bg-decorative1-subdued",
      ];
    case "video":
      return [
        "bg-decorative4-very-subdued",
        "bg-decorative4-main",
        "border-decorative4-stronger",
        null,
      ];
    case "exit-quiz":
      return [
        "bg-decorative5-very-subdued",
        "bg-decorative5-main",
        "border-decorative5-stronger",
        "bg-decorative5-subdued",
      ];
  }
}

function pickLabelForSection(sectionName: LessonSectionName): string {
  switch (sectionName) {
    case "intro":
      return "Introduction";
    case "starter-quiz":
      return "Starter quiz";
    case "video":
      return "Lesson video";
    case "exit-quiz":
      return "Exit quiz";
  }
}

function pickSummaryForProgress(props: SectionProps, isDisabled: boolean) {
  switch (props.progress) {
    case "not-started":
      return pickSummaryForNotStarted(props);
    case "in-progress":
      return "In progress...";
    case "complete":
      return (
        <StyledIconWrapper
          $gap="spacing-4"
          $alignItems="center"
          $disabled={isDisabled}
        >
          <OakIcon iconName="tick" $width="spacing-24" $height="spacing-24" />
          {pickSummaryForComplete(props)}
        </StyledIconWrapper>
      );
  }
}

function pickSummaryForNotStarted(props: SectionProps) {
  switch (props.lessonSectionName) {
    case "intro":
      return "Prepare";
    case "starter-quiz":
      return `Activate - ${props.numQuestions} Questions`;
    case "exit-quiz":
      return `Check - ${props.numQuestions} questions`;
    case "video":
      return "Learn";
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
            {props.grade}/{props.numQuestions} correct
          </OakBox>
        </>
      );
  }
}
