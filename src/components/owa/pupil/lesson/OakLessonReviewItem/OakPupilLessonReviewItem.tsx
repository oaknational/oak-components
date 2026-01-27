import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakRoundIcon } from "@/components/images-and-icons/OakRoundIcon";
import { OakCombinedColorToken } from "@/styles";

type LessonSectionName = "intro" | "starter-quiz" | "video" | "exit-quiz";
type BaseOakLessonReviewItemProps = {
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

export type OakLessonReviewItemProps = BaseOakLessonReviewItemProps &
  (IntroSectionProps | QuizSectionProps | VideoSectionProps);

const StyledLessonReviewItem = styled(OakFlex)<{ completed: boolean }>`
  outline: none;
  text-align: initial;
`;

export const OakLessonReviewItem = (props: OakLessonReviewItemProps) => {
  const { completed, lessonSectionName, ...rest } = props;
  const [completedBackgroundColor, borderColor, iconBackgroundColor] =
    pickColorsForSection(lessonSectionName);
  const lessonSectionNameToIconMap = new Map();

  lessonSectionNameToIconMap.set("intro", "intro");
  lessonSectionNameToIconMap.set("starter-quiz", "quiz");
  lessonSectionNameToIconMap.set("exit-quiz", "quiz");
  lessonSectionNameToIconMap.set("video", "video");

  return (
    <StyledLessonReviewItem
      completed={completed}
      $gap="spacing-24"
      $alignItems="center"
      $background={completed ? completedBackgroundColor : "bg-primary"}
      $ph={["spacing-16", "spacing-24"]}
      $pv="spacing-20"
      $borderRadius="border-radius-l"
      $borderColor={completed ? completedBackgroundColor : borderColor}
      $ba="border-solid-l"
      {...rest}
    >
      <OakRoundIcon
        iconName={lessonSectionNameToIconMap.get(lessonSectionName)}
        $width="spacing-56"
        $height="spacing-56"
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

const pickSummaryForProgress = (props: OakLessonReviewItemProps) => {
  if (props.completed === false) {
    return pickSummaryForIncomplete(props);
  } else {
    return (
      <OakFlex $gap="spacing-4" $alignItems="center">
        <OakIcon iconName="tick" $width="spacing-24" $height="spacing-24" />
        Completed
      </OakFlex>
    );
  }
};

const pickSummaryForIncomplete = (props: OakLessonReviewItemProps) => {
  switch (props.lessonSectionName) {
    case "intro":
      return "Prepare";
    case "starter-quiz":
      return `Activate - ${props.numQuestions} questions`;
    case "exit-quiz":
      return `Check - ${props.numQuestions} questions`;
    case "video":
      return "Learn";
  }
};

const pickLabelForSection = (sectionName: LessonSectionName): string => {
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
};

const pickColorsForSection = (
  sectionName: LessonSectionName,
): [
  completedBackgroundColor: OakCombinedColorToken,
  borderColor: OakCombinedColorToken,
  iconBackgroundColor: OakCombinedColorToken,
] => {
  switch (sectionName) {
    case "intro":
      return [
        "bg-decorative2-very-subdued",
        "border-decorative2",
        "bg-decorative2-main",
      ];
    case "starter-quiz":
      return [
        "bg-decorative1-very-subdued",
        "border-decorative1",
        "bg-decorative1-main",
      ];
    case "video":
      return [
        "bg-decorative4-very-subdued",
        "border-decorative4",
        "bg-decorative4-main",
      ];
    case "exit-quiz":
      return [
        "bg-decorative5-very-subdued",
        "border-decorative5",
        "bg-decorative5-main",
      ];
  }
};

const renderQuestionCounter = (props: OakLessonReviewItemProps) => {
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
};
