import React from "react";
import styled from "styled-components";

import {
  OakBox,
  OakFlex,
  OakIcon,
  OakIconName,
  OakSpan,
} from "@/components/base";
import { OakRoundIcon } from "@/components/ui";
import { OakCombinedColorToken } from "@/styles";

type LessonSectionName = "intro" | "starter-quiz" | "video" | "exit-quiz";
type BaseOakLessonReviewItenProps = {
  completed: boolean;
};
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

export type OakLessonReviewItemProps = BaseOakLessonReviewItenProps &
  (IntroSectionProps | QuizSectionProps | VideoSectionProps);

const StyledLessonReviewItem = styled(OakFlex)<{ completed: boolean }>`
  outline: none;
  text-align: initial;
`;

export const OakLessonReviewItem = (props: OakLessonReviewItemProps) => {
  const { completed, lessonSectionName, ...rest } = props;
  const [completedBackgroundColor, borderColor, iconBackgroundColor] =
    pickColorsForSection(lessonSectionName);

  return (
    <StyledLessonReviewItem
      completed={completed}
      $gap="space-between-m"
      $alignItems="center"
      $background={completed ? completedBackgroundColor : "white"}
      $ph={["inner-padding-m", "inner-padding-xl"]}
      $pv="inner-padding-l"
      $borderRadius="border-radius-l"
      $borderColor={completed ? completedBackgroundColor : borderColor}
      $ba="border-solid-l"
      {...rest}
    >
      <OakRoundIcon
        iconName={pickIconForSection(lessonSectionName)}
        $width="all-spacing-10"
        $height="all-spacing-10"
        $background={iconBackgroundColor}
      />
      <OakFlex $flexGrow={1} $flexShrink={1} $flexDirection={"column"}>
        <OakBox $font={["heading-6", "heading-5"]} $color={"text-primary"}>
          {pickLabelForSection(lessonSectionName)}
        </OakBox>
        <OakBox $font={["body-2", "body-1"]}>
          {pickSummaryForProgress(props)}
        </OakBox>
      </OakFlex>
      {renderQuestionCounter(props)}
    </StyledLessonReviewItem>
  );
};

function pickSummaryForProgress(props: OakLessonReviewItemProps) {
  switch (props.completed) {
    case false:
      return pickSummaryForIncomplete(props);
    case true:
      return (
        <OakFlex $gap="space-between-sssx" $alignItems="center">
          <OakIcon
            iconName="tick"
            $width="all-spacing-6"
            $height="all-spacing-6"
          />
          Completed
        </OakFlex>
      );
  }
}

function pickSummaryForIncomplete(props: OakLessonReviewItemProps) {
  switch (props.lessonSectionName) {
    case "intro":
      return "Prepare";
    case "starter-quiz":
      return `Activate - ${props.numQuestions} questions`;
    case "exit-quiz":
      return `Check ${props.numQuestions} questions`;
    case "video":
      return `Learn`;
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

function pickColorsForSection(
  sectionName: LessonSectionName,
): [
  completedBackgroundColor: OakCombinedColorToken,
  borderColor: OakCombinedColorToken,
  iconBackgroundColor: OakCombinedColorToken,
] {
  switch (sectionName) {
    case "intro":
      return ["bg-decorative2-very-subdued", "border-decorative2", "aqua"];
    case "starter-quiz":
      return ["bg-decorative1-very-subdued", "border-decorative1", "mint"];
    case "video":
      return ["bg-decorative4-very-subdued", "border-decorative4", "pink"];
    case "exit-quiz":
      return ["bg-decorative5-very-subdued", "border-decorative5", "lemon"];
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

function renderQuestionCounter(props: OakLessonReviewItemProps) {
  if (props.completed === false) {
    return null;
  }

  switch (props.lessonSectionName) {
    case "exit-quiz":
    case "starter-quiz":
      return (
        <OakBox>
          <OakSpan $font="heading-4">{props.grade}</OakSpan>
          <OakSpan $font="heading-6">&nbsp;/&nbsp;{props.numQuestions}</OakSpan>
        </OakBox>
      );
    default:
      return null;
  }
}
