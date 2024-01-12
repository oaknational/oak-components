import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakQuizHint, OakQuizHintProps } from "../OakQuizHint";
import {
  OakQuizFeedback,
  OakQuizFeedbackProps,
} from "../OakQuizFeedback/OakQuizFeedback";

import { OakFlex } from "@/components/base";

/**
 * `content-box` ensures that the border is not subtracted from the height of the element
 */
const StyledOakFlex = styled(OakFlex)`
  box-sizing: content-box;
`;

export type OakQuizBottomNavProps = {
  children?: ReactNode;
  feedback?: OakQuizFeedbackProps["feedback"] | null;
  answerFeedback?: OakQuizFeedbackProps["answerFeedback"];
  hint?: OakQuizHintProps["hint"];
};

/**
 * Renders feedback for an answer and onward navigation buttons to continue the lesson
 */
export const OakQuizBottomNav = ({
  hint,
  feedback,
  answerFeedback,
  children,
}: OakQuizBottomNavProps) => {
  let content: ReactNode;

  switch (true) {
    case !!feedback:
      content = (
        <OakQuizFeedback feedback={feedback} answerFeedback={answerFeedback} />
      );
      break;
    case !!hint:
      content = <OakQuizHint hint={hint} />;
      break;
    default:
      content = null;
  }

  return (
    <StyledOakFlex
      $flexDirection={["column", "row"]}
      $background={["bg-primary", "bg-decorative1-very-subdued"]}
      $pa="inner-padding-m"
      $borderColor="border-inverted"
      $bt="border-solid-xl"
      $minHeight="all-spacing-9"
      $gap="space-between-m"
    >
      {content}
      <OakFlex
        $flexGrow="1"
        $height="fit-content"
        $alignSelf="flex-end"
        $justifyContent={["initial", "flex-end"]}
      >
        {children}
      </OakFlex>
    </StyledOakFlex>
  );
};
