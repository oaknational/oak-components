import React, { ReactNode } from "react";
import styled from "styled-components";

import { InternalReviewAccordion } from "@/components/organisms/pupil/lesson/InternalReviewAccordion";
import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakRoundIcon } from "@/components/molecules";
import { OakUiRoleToken } from "@/styles";

type LessonQuizName = "starter-quiz" | "exit-quiz";
type OakLessonReviewQuizProps = {
  completed: boolean;
  lessonSectionName: LessonQuizName;
  /**
   * The number of questions in the quiz
   */
  numQuestions: number;
  /**
   * The number of questions answered correctly
   */
  grade: number;
  /**
   * You MUST use the OakLessonExpandableReviewItem as the container component for this slot
   */
  resultsSlot?: React.ReactNode;
};

type OakLessonReviewItemContainerProps = {
  $background?: OakUiRoleToken;
  $borderColor?: OakUiRoleToken;
  children: React.ReactNode;
};

const StyledLessonReviewItem = styled(OakFlex)`
  outline: none;
  text-align: initial;
`;

export const ReviewItemContainer = (
  props: OakLessonReviewItemContainerProps,
) => {
  const { children, ...rest } = props;

  return (
    <StyledLessonReviewItem
      $flexDirection={["column", "column", "row"]}
      $justifyContent={"space-between"}
      $flexWrap={"wrap"}
      $ph={["spacing-16", "spacing-24"]}
      $pv="spacing-20"
      $borderRadius="border-radius-l"
      $ba="border-solid-l"
      {...rest}
    >
      {children}
    </StyledLessonReviewItem>
  );
};

type ReviewItemTitleSectionProps = {
  sectionHeader: string;
  completed: boolean;
  summaryForIncomplete: ReactNode;
};
export const ReviewItemTitleSection = (props: ReviewItemTitleSectionProps) => {
  const { sectionHeader, completed, summaryForIncomplete } = props;
  return (
    <OakFlex $flexGrow={1} $flexShrink={1} $flexDirection={"column"}>
      <OakBox $font={["heading-6", "heading-5"]} $color={"text-primary"}>
        {sectionHeader}
      </OakBox>
      <OakBox $font={["body-2", "body-1"]}>
        {completed === false ? (
          summaryForIncomplete
        ) : (
          <OakFlex $gap="spacing-4" $alignItems="center">
            <OakIcon iconName="tick" $width="spacing-24" $height="spacing-24" />
            Completed
          </OakFlex>
        )}
      </OakBox>
    </OakFlex>
  );
};

export const OakLessonReviewQuiz = (props: OakLessonReviewQuizProps) => {
  const { completed, lessonSectionName, resultsSlot, ...rest } = props;
  const [completedBackgroundColor, borderColor, iconBackgroundColor]: [
    completedBackgroundColor: OakUiRoleToken,
    borderColor: OakUiRoleToken,
    iconBackgroundColor: OakUiRoleToken,
  ] =
    lessonSectionName === "starter-quiz"
      ? [
          "bg-decorative1-very-subdued",
          "border-decorative1",
          "bg-decorative1-main",
        ]
      : [
          "bg-decorative5-very-subdued",
          "border-decorative5",
          "bg-decorative5-main",
        ];

  const summaryForIncomplete =
    lessonSectionName === "starter-quiz"
      ? `Activate - ${props.numQuestions} questions`
      : `Check - ${props.numQuestions} questions`;

  return (
    <ReviewItemContainer
      $background={completed ? completedBackgroundColor : "bg-primary"}
      $borderColor={completed ? completedBackgroundColor : borderColor}
      {...rest}
    >
      <OakFlex $gap="spacing-24" $alignItems="center">
        <OakRoundIcon
          iconName="quiz"
          $width="spacing-56"
          $height="spacing-56"
          $background={iconBackgroundColor}
        />
        <ReviewItemTitleSection
          sectionHeader={
            lessonSectionName === "exit-quiz" ? "Exit quiz" : "Starter quiz"
          }
          completed={completed}
          summaryForIncomplete={summaryForIncomplete}
        />
        {completed && (
          <OakBox>
            <OakSpan $font="heading-4">{props.grade}</OakSpan>
            <OakSpan $font="heading-6">
              &nbsp;/&nbsp;{props.numQuestions}
            </OakSpan>
          </OakBox>
        )}
      </OakFlex>
      {completed && (
        <InternalReviewAccordion initialOpen={false} id="quiz-review-accordion">
          {resultsSlot}
        </InternalReviewAccordion>
      )}
    </ReviewItemContainer>
  );
};
