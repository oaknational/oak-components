import React, { ReactNode } from "react";

import { OakBox, OakFlex, OakSpan } from "@/components/atoms";
import { OakRoundIcon } from "@/components/molecules";

export type OakQuizFeedbackProps = {
  /**
   * Feedback for an answer
   * `partially-correct` can be used to feedback on a multi-answer MCQ where some
   * correct options were not selected and/or some incorrect answers were selected
   */
  feedback: "correct" | "incorrect" | "partially-correct";
  /**
   * Some additional content to present with the feedback.
   * This is likely the correct answer(s) to the question or some praise.
   *
   * Only displayed when `feedback` has been applied.
   */
  answerFeedback?: ReactNode;
};

/**
 * Gives feedback after a question has been answered
 */
export const OakQuizFeedback = ({
  feedback,
  answerFeedback,
}: OakQuizFeedbackProps) => {
  let feedbackLabel: string;

  switch (feedback) {
    case "correct":
      feedbackLabel = "Correct";
      break;
    case "incorrect":
      feedbackLabel = "Incorrect";
      break;
    case "partially-correct":
      feedbackLabel = "Almost correct";
      break;
  }

  return (
    <OakBox aria-live="polite">
      <OakFlex $gap="space-between-xs" role="alert">
        <OakRoundIcon
          iconName={feedback === "correct" ? "tick" : "cross"}
          alt=""
          $pa="inner-padding-none"
          $background={feedback === "correct" ? "icon-success" : "icon-error"}
          $colorFilter="text-inverted"
          $width="all-spacing-6"
          $height="all-spacing-6"
        />
        <OakSpan
          $font="heading-6"
          $color={feedback === "correct" ? "text-success" : "text-error"}
          role="alert"
        >
          {feedbackLabel}
        </OakSpan>
      </OakFlex>
      {answerFeedback && (
        <OakSpan
          as="p"
          $mt="space-between-xs"
          $font={feedback === "correct" ? "body-2-bold" : "body-2"}
          role="alert"
        >
          {answerFeedback}
        </OakSpan>
      )}
    </OakBox>
  );
};
