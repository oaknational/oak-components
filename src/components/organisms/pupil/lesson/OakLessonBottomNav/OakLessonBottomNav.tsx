import React, { ReactNode } from "react";
import styled from "styled-components";

import {
  OakQuizHint,
  OakQuizHintProps,
} from "@/components/organisms/pupil/quiz/OakQuizHint";
import {
  OakQuizFeedback,
  OakQuizFeedbackProps,
} from "@/components/organisms/pupil/quiz/OakQuizFeedback/OakQuizFeedback";
import { OakFlex } from "@/components/atoms";

/**
 * `content-box` ensures that the border is not subtracted from the height of the element
 */
const StyledOakFlex = styled(OakFlex)`
  box-sizing: content-box;
`;

export type OakLessonBottomNavProps = {
  children?: ReactNode;
  feedback?: OakQuizFeedbackProps["feedback"] | null;
  answerFeedback?: OakQuizFeedbackProps["answerFeedback"];
  hint?: OakQuizHintProps["hint"];
  hintToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Renders feedback for an answer and onward navigation buttons to continue the lesson
 */
export const OakLessonBottomNav = ({
  hint,
  hintToggled,
  feedback,
  answerFeedback,
  children,
}: OakLessonBottomNavProps) => {
  let content: ReactNode;

  switch (true) {
    case !!feedback:
      content = (
        <OakQuizFeedback feedback={feedback} answerFeedback={answerFeedback} />
      );
      break;
    case !!hint:
      content = (
        <OakQuizHint hint={hint} id="quiz-hint" hintToggled={hintToggled} />
      );
      break;
    default:
      content = null;
  }

  return (
    <StyledOakFlex
      $flexDirection={["column", "row"]}
      $pa="inner-padding-m"
      $minHeight="all-spacing-9"
      $gap="space-between-m"
    >
      <OakFlex $alignItems="center">{content}</OakFlex>
      <OakFlex
        $flexGrow="1"
        $height="fit-content"
        $alignSelf="flex-end"
        $justifyContent={["initial", "flex-end"]}
        $width={["100%", "auto"]}
      >
        {children}
      </OakFlex>
    </StyledOakFlex>
  );
};
