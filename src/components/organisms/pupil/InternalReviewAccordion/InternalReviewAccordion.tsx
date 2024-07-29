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
   * The header of the accordion
   */
  expandableLabel: string;
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
  FlexStyleProps & { isOpen: boolean }
>`
  ${flexStyle}
  ${oakBoxCss}
  .icon-container img {
    ${(props) => css`
      transform: ${props.isOpen ? "rotate(180deg)" : "none"};
      transition: all 0.3s ease 0s;
    `};
  }
`;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({
  expandableLabel,
  children,
  id,
}: InternalReviewAccordionProps) => {
  const { isOpen, setOpen } = useAccordionContext();

  return (
    <>
      <OakFlex
        $flexDirection={"column"}
        $alignItems={"flex-end"}
        $justifyContent={"center"}
        $pt={["inner-padding-l", "inner-padding-none"]}
      >
        <StyledAccordionButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          aria-expanded={isOpen}
          id={id}
          iconName={"chevron-down"}
          defaultTextColor={"text-primary"}
          hoverTextColor={"text-primary"}
          disabledTextColor={"text-disabled"}
          defaultIconBackground={"black"}
          hoverIconBackground={"black"}
          disabledIconBackground={"transparent"}
          iconBackgroundSize={"all-spacing-7"}
          iconSize={"all-spacing-6"}
          defaultIconColor={"white"}
          isTrailingIcon={true}
        >
          {expandableLabel}
        </StyledAccordionButton>
      </OakFlex>

      <StyledAccordionContent aria-labelledby={id}>
        <OakFlex
          $background={"white"}
          $borderRadius={"border-radius-l"}
          $pv={"inner-padding-xl3"}
          $ph={"inner-padding-xl"}
          $minWidth={"100%"}
          $mt={"space-between-m"}
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
