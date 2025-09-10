import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { OakLabel, OakSpan } from "@/components/atoms";
import { OakBasicAccordion } from "@/components/molecules";

type StyledOakFlexProps = {
  $statusColor: OakCombinedColorToken;
} & OakFlexProps;

const StyledOakFlex = styled(OakFlex)<StyledOakFlexProps>`
  border-left: 8px solid ${(props) => parseColor(props.$statusColor)};
`;

const UnstyledLI = styled.li`
  list-style: none;
`;

export type OakCATQuestionProps = {
  questionNumber: number;
  status: string;
  questionTypeInput: ReactNode;
  questionTextInput: ReactNode;
  hintInput: ReactNode;
  feedbackInput: ReactNode;
  answersSection: ReactNode;
};

export const OakCATQuestion = (props: OakCATQuestionProps) => {
  const {
    questionNumber,
    status,
    questionTypeInput,
    questionTextInput,
    hintInput,
    feedbackInput,
    answersSection,
  } = props;

  const header = (
    <OakFlex
      $flexDirection={"column"}
      $width={"100%"}
      $gap={"space-between-s"}
      $textAlign={"left"}
    >
      <OakFlex $gap={"space-between-xs"} $alignItems={"center"}>
        {`${questionNumber}.`}
        {questionTypeInput}
      </OakFlex>
      {questionTextInput}
    </OakFlex>
  );

  const body = (
    <OakFlex $flexDirection={"column"} $width={"100%"} $gap={"space-between-l"}>
      {/* this has the effect of stretching the container and the items within */}
      <OakFlex $alignSelf={"stretch"} $flexDirection={"column"}>
        {answersSection}
      </OakFlex>

      <OakFlex
        $ph="inner-padding-xl2"
        $pv="inner-padding-xl"
        $background={"grey10"}
        $borderRadius={"border-radius-m2"}
        $borderColor={"bg-neutral"}
        $ba={"border-solid-s"}
        $alignSelf={"flex-start"}
      >
        <OakFlex $gap="all-spacing-5">
          <OakLabel>
            <OakSpan $color={"text-subdued"} $font={"heading-light-7"}>
              Hint
            </OakSpan>
            {hintInput}
          </OakLabel>

          <OakLabel>
            <OakSpan $color={"text-subdued"} $font={"heading-light-7"}>
              Feedback
            </OakSpan>
            {feedbackInput}
          </OakLabel>
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );

  return (
    <UnstyledLI>
      <StyledOakFlex
        $width={"100%"}
        $justifyContent={"flex-start"}
        $background={"bg-primary"}
        $pa={"inner-padding-xl2"}
        $statusColor="mint110"
        $flexDirection={"column"}
      >
        <OakBasicAccordion
          id={`question-${questionNumber}`}
          header={header}
          children={body}
          $flexDirection={"column"}
          $justifyContent={"flex-start"}
        />
      </StyledOakFlex>
    </UnstyledLI>
  );
};
