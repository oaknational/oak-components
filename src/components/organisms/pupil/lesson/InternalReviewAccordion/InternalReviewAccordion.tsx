import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBoxProps, OakFlex, oakBoxCss } from "@/components/atoms";
import { InternalAccordionContent } from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";

export type InternalReviewAccordionProps = {
  /**
   * Whether the accordion should be open initially
   */
  initialOpen: boolean;
  /**
   * The content of the accordion
   */
  children: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
} & FlexStyleProps &
  OakBoxProps &
  ColorStyleProps;

export const StyledAccordionContent = styled(InternalAccordionContent)`
  width: 100%;
`;

export const StyledAccordionButton = styled(InternalShadowRoundButton)<
  FlexStyleProps & { $isOpen: boolean }
>`
  ${flexStyle}
  ${oakBoxCss}
  .icon-container img {
    ${(props) => css`
      transform: ${props.$isOpen ? "rotate(180deg)" : "none"};
      transition: all 0.3s ease 0s;
    `};
  }
`;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({ children, id }: InternalReviewAccordionProps) => {
  const { isOpen, setOpen } = useAccordionContext();

  return (
    <>
      <OakFlex
        $flexDirection={"column"}
        $alignItems={"flex-end"}
        $justifyContent={"center"}
        $pt={["spacing-20", "spacing-0"]}
      >
        <StyledAccordionButton
          $isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          aria-expanded={isOpen}
          id={id}
          iconName={"chevron-down"}
          defaultTextColor={"text-primary"}
          hoverTextColor={"text-primary"}
          disabledTextColor={"text-disabled"}
          defaultIconBackground={"icon-primary"}
          hoverIconBackground={"icon-primary"}
          disabledIconBackground={"transparent"}
          iconBackgroundSize={"spacing-32"}
          iconSize={"spacing-24"}
          defaultIconColor={"icon-inverted"}
          isTrailingIcon={true}
        >
          Results
        </StyledAccordionButton>
      </OakFlex>
      <StyledAccordionContent aria-labelledby={id}>
        <OakFlex
          $background={"bg-primary"}
          $borderRadius={"border-radius-l"}
          $pv={"spacing-40"}
          $ph={"spacing-24"}
          $minWidth={"100%"}
          $mt={"spacing-24"}
        >
          {children}
        </OakFlex>
      </StyledAccordionContent>
    </>
  );
};

/**
 *
 * use this component in the expandableReviewItemSlot on the OakPupilLessonReviewItem component
 *
 * The children of this component is the is the results from the quiz.
 */

export const InternalReviewAccordion = (
  props: InternalReviewAccordionProps,
) => {
  return (
    <InternalAccordionProvider isInitialOpen={props.initialOpen}>
      <Accordion {...props} />
    </InternalAccordionProvider>
  );
};
