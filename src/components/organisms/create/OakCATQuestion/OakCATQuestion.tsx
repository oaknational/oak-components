import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { OakSmallSecondaryButtonWithDropdown } from "@/components/molecules";

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
  availableQuestionTypes: string[];
  chosenQuestionType: string;
  onQuestionTypeChange: (type: string) => void;
  questionTextInput: ReactNode;
  hintInput: ReactNode;
  feedbackInput: ReactNode;
  answersSection: ReactNode;
};

export const OakCATQuestion = (props: OakCATQuestionProps) => {
  const { availableQuestionTypes, chosenQuestionType } = props;

  const availableQuestionTypesElements = availableQuestionTypes.map((type) => (
    <OakSmallSecondaryButtonWithDropdown.Item key={type} aria-label={type}>
      {type}
    </OakSmallSecondaryButtonWithDropdown.Item>
  ));

  return (
    <UnstyledLI>
      <StyledOakFlex
        $width={"100%"}
        $justifyContent={"flex-start"}
        $background={"grey10"}
        $pa={"inner-padding-xl2"}
        $statusColor="mint110"
        $flexDirection={"column"}
      >
        <OakFlex>
          {`${props.questionNumber}.`}
          <OakSmallSecondaryButtonWithDropdown
            ariaDescription="Select question type"
            ariaLabel="Question type selector"
            onPrimaryAction={() => {}}
            primaryActionText={chosenQuestionType}
          >
            {availableQuestionTypesElements}
          </OakSmallSecondaryButtonWithDropdown>
        </OakFlex>
      </StyledOakFlex>
    </UnstyledLI>
  );
};
