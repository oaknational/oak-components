import React from "react";
import styled from "styled-components";

import { InternalReviewAccordion } from "../InternalReviewAccordion";

import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { OakRoundIcon } from "@/components/molecules";
import { OakCombinedColorToken } from "@/styles";

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
  $background?: OakCombinedColorToken;
  $borderColor?: OakCombinedColorToken;
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
      $flexDirection={["column", "row", "row"]}
      $justifyContent={"space-between"}
      $flexWrap={"wrap"}
      $ph={["inner-padding-m", "inner-padding-xl"]}
      $pv="inner-padding-l"
      $borderRadius="border-radius-l"
      $ba="border-solid-l"
      {...rest}
    >
      {children}
    </StyledLessonReviewItem>
  );
};

export const OakLessonReviewQuiz = (props: OakLessonReviewQuizProps) => {
  const { completed, lessonSectionName, resultsSlot, ...rest } = props;
  const [completedBackgroundColor, borderColor, iconBackgroundColor]: [
    completedBackgroundColor: OakCombinedColorToken,
    borderColor: OakCombinedColorToken,
    iconBackgroundColor: OakCombinedColorToken,
  ] =
    lessonSectionName === "starter-quiz"
      ? ["bg-decorative1-very-subdued", "border-decorative1", "mint"]
      : ["bg-decorative5-very-subdued", "border-decorative5", "lemon"];

  const summaryForIncomplete =
    lessonSectionName === "starter-quiz"
      ? `Activate - ${props.numQuestions} questions`
      : `Check - ${props.numQuestions} questions`;

  return (
    <ReviewItemContainer
      $background={completed ? completedBackgroundColor : "white"}
      $borderColor={completed ? completedBackgroundColor : borderColor}
      {...rest}
    >
      <OakFlex $gap="space-between-m" $alignItems="center">
        <OakRoundIcon
          iconName="quiz"
          $width="all-spacing-10"
          $height="all-spacing-10"
          $background={iconBackgroundColor}
        />
        <OakFlex $flexGrow={1} $flexShrink={1} $flexDirection={"column"}>
          <OakBox $font={["heading-6", "heading-5"]} $color={"text-primary"}>
            {lessonSectionName === "exit-quiz" ? "Exit quiz" : "Starter quiz"}
          </OakBox>
          <OakBox $font={["body-2", "body-1"]}>
            {completed === false ? (
              summaryForIncomplete
            ) : (
              <OakFlex $gap="space-between-sssx" $alignItems="center">
                <OakIcon
                  iconName="tick"
                  $width="all-spacing-6"
                  $height="all-spacing-6"
                />
                Completed
              </OakFlex>
            )}
          </OakBox>
        </OakFlex>
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
