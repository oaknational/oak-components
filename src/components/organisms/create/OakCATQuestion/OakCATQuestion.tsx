import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { OakGrid, OakGridArea, OakLabel, OakSpan } from "@/components/atoms";
import { InternalUnstyledChevronAccordion } from "@/components/molecules/InternalUnstyledChevronAccordion";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

type StyledOakFlexProps = {
  $statusColor: OakCombinedColorToken;
} & OakFlexProps;

const StyledOakFlex = styled(OakFlex)<StyledOakFlexProps>`
  border-left: 8px solid ${(props) => parseColor(props.$statusColor)};
  border-top-right-radius: ${parseBorderRadius("border-radius-m2")};
  border-bottom-right-radius: ${parseBorderRadius("border-radius-m2")};
`;

const UnstyledLI = styled.li`
  list-style: none;
`;

type Status = "error" | "selected" | "neutral";

export type OakCATQuestionProps = {
  questionNumber: number;
  status: Status;
  initialOpen?: boolean;
  questionTypeInput: ReactNode;
  questionTextInput: ReactNode;
  hintInput: ReactElement;
  feedbackInput: ReactElement;
  answersSection: ReactNode;
  hintInputId: string;
  feedbackInputId: string;
};

export const OakCATQuestion = (props: OakCATQuestionProps) => {
  const {
    questionNumber,
    questionTypeInput,
    questionStem,
    hintInput,
    feedbackInput,
    answersSection,
    initialOpen = false,
    status = "neutral",
    hintInputId,
    feedbackInputId,
  } = props;

  const statusColorMap: Record<Status, OakCombinedColorToken> = {
    error: "red",
    selected: "mint110",
    neutral: "grey40",
  };

  const header = (
    <OakFlex $gap={"spacing-12"} $alignItems={"center"} $width={"100%"}>
      {`${questionNumber}.`}
      {questionTypeInput}
    </OakFlex>
  );

  const body = (
    <OakFlex $flexDirection={"column"} $width={"100%"} $gap={"spacing-48"}>
      {/* this has the effect of stretching the container and the items within */}
      <OakFlex $alignSelf={"stretch"} $flexDirection={"column"}>
        {answersSection}
      </OakFlex>

      <OakGrid
        $ph="spacing-32"
        $pv="spacing-24"
        $background={"grey10"}
        $borderRadius={"border-radius-m2"}
        $borderColor={"bg-neutral"}
        $ba={"border-solid-s"}
        $cg={"spacing-20"}
      >
        <OakGridArea $colSpan={6}>
          <OakFlex $flexDirection={"column"} $flexGrow={1}>
            <OakLabel htmlFor={hintInputId}>
              <OakSpan $color={"text-subdued"} $font={"heading-light-7"}>
                Hint
              </OakSpan>
            </OakLabel>
            {hintInput}
          </OakFlex>
        </OakGridArea>

        <OakGridArea $colSpan={6}>
          <OakFlex $flexDirection={"column"} $flexGrow={1}>
            <OakLabel htmlFor={feedbackInputId}>
              <OakSpan $color={"text-subdued"} $font={"heading-light-7"}>
                Feedback
              </OakSpan>
            </OakLabel>
            {feedbackInput}
          </OakFlex>
        </OakGridArea>
      </OakGrid>
    </OakFlex>
  );

  return (
    <UnstyledLI>
      <StyledOakFlex
        $width={"100%"}
        $justifyContent={"flex-start"}
        $background={"bg-primary"}
        $pa={"spacing-32"}
        $statusColor={statusColorMap[status]}
        $flexDirection={"column"}
      >
        <InternalUnstyledChevronAccordion
          id={`question-${questionNumber}`}
          header={header}
          subheader={questionTextInput}
          content={body}
          $flexDirection={"column"}
          $justifyContent={"flex-start"}
          initialOpen={initialOpen}
          ariaLabelClose={`expand question ${questionNumber}`}
          ariaLabelOpen={`collapse question ${questionNumber}`}
        />
      </StyledOakFlex>
    </UnstyledLI>
  );
};
