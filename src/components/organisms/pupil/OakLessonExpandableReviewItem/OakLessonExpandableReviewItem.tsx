import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBoxProps, OakFlex, oakBoxCss } from "@/components/atoms";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";

export type OakLessonExpandableReviewItemProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
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

export const StyledAccordionButton = styled(InternalAccordionButton)<
  FlexStyleProps & { isOpen: boolean }
>`
  ${flexStyle}
  ${oakBoxCss}
  &:hover {
    text-decoration: underline;
  }
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
  header,
  children,
  id,
  ...styleProps
}: OakLessonExpandableReviewItemProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakFlex
      $position={"relative"}
      $pv={"inner-padding-s"}
      $flexDirection={"column"}
      $gap={"all-spacing-1"}
      $background={"transparent"}
      {...styleProps}
    >
      <OakFlex $flexDirection={"column"} $alignItems={"flex-end"}>
        <StyledAccordionButton id={id} isOpen={isOpen}>
          <InternalShadowRoundButton
            iconName={isOpen ? "chevron-up" : "chevron-down"}
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
            {header}
          </InternalShadowRoundButton>
        </StyledAccordionButton>
      </OakFlex>

      <InternalAccordionContent aria-labelledby={id}>
        <OakFlex
          $background={"white"}
          $borderRadius={"border-radius-l"}
          $pv={"inner-padding-xl3"}
          $ph={"inner-padding-xl"}
        >
          {children}
        </OakFlex>
      </InternalAccordionContent>
    </OakFlex>
  );
};

/**
 * OakLessonExpandableReviewItem has a white chevron icon that rotates when the accordion is open and uses InternalShadowRoundButton
 */

export const OakLessonExpandableReviewItem = (
  props: OakLessonExpandableReviewItemProps,
) => {
  return (
    <InternalAccordionProvider isInitialOpen={props.initialOpen}>
      <Accordion {...props} />
    </InternalAccordionProvider>
  );
};
