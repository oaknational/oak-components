import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakUiRoleToken } from "@/styles";
import { OakGrid, OakGridArea, OakLabel, OakSpan } from "@/components/atoms";
import { InternalUnstyledChevronAccordion } from "@/components/molecules/InternalUnstyledChevronAccordion";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

type StyledOakFlexProps = {
  $statusColor: OakUiRoleToken;
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
  questionStem: ReactNode;
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

  const statusColorMap: Record<Status, OakUiRoleToken> = {
    error: "border-error",
    selected: "border-decorative1-stronger",
    neutral: "border-neutral-lighter",
  };

  const header = (
    <OakFlex
      $gap={"spacing-12"}
      $alignItems={"center"}
      $width={"100%"}
      $font={"body-1-bold"}
      $mb={"spacing-12"}
    >
      {`${questionNumber}.`}
      {questionTypeInput}
    </OakFlex>
  );

  const body = (
    <OakFlex
      $flexDirection={"column"}
      $width={"100%"}
      $gap={"spacing-48"}
      $mt={"spacing-24"}
    >
      {/* this has the effect of stretching the container and the items within */}
      <OakFlex $alignSelf={"stretch"} $flexDirection={"column"}>
        {answersSection}
      </OakFlex>

      <OakGrid
        $ph="spacing-32"
        $pv="spacing-24"
        $background={"bg-neutral"}
        $borderRadius={"border-radius-m2"}
        $borderColor={"bg-neutral"}
        $ba={"border-solid-s"}
        $cg={"spacing-16"}
      >
        <OakGridArea $colSpan={[12, 6, 6]}>
          <OakFlex $flexDirection={"column"} $flexGrow={1}>
            <OakLabel htmlFor={hintInputId}>
              <OakSpan $color={"text-subdued"} $font={"heading-light-7"}>
                Hint
              </OakSpan>
            </OakLabel>
            {hintInput}
          </OakFlex>
        </OakGridArea>

        <OakGridArea $colSpan={[12, 6, 6]}>
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
        $pv={"spacing-48"}
        $ph={"spacing-40"}
        $statusColor={statusColorMap[status]}
        $flexDirection={"column"}
        $borderRadius={"border-radius-m2"}
        $dropShadow={"drop-shadow-centred-standard"}
        $maxWidth={"spacing-960"}
      >
        <InternalUnstyledChevronAccordion
          id={`question-${questionNumber}`}
          header={header}
          subheader={questionStem}
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
