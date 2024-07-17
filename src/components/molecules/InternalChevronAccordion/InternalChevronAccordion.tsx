import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnFocusUnderline } from "../OakHandDrawnFocusUnderline";

import { OakBoxProps, OakIcon, oakBoxCss } from "@/components/atoms";
import {
  InternalAccordion,
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { ColorStyleProps } from "@/styles/utils/colorStyle";

export type InternalChevronAccordionProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
  /**
   * Whether the accordion should be open initially
   */
  initialOpen?: boolean;
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

const StyledAccordionUnderline = styled(
  OakHandDrawnFocusUnderline,
)<InternalStyledSvgProps>`
  position: absolute;
  width: 100%;
  bottom: -${parseSpacing("all-spacing-1")};
`;

export const StyledAccordionButton = styled(
  InternalAccordionButton,
)<FlexStyleProps>`
  ${flexStyle}
  ${oakBoxCss}
  &:hover {
    text-decoration: underline;
  }
`;

const StyledAccordion = styled(InternalAccordion)<FlexStyleProps>`
  ${StyledAccordionUnderline} {
    visibility: hidden;
  }
  ${StyledAccordionButton}:focus-visible ~ ${StyledAccordionUnderline} {
    visibility: visible;
  }

  ${oakBoxCss}
  ${flexStyle}
`;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({
  header,
  children,
  id,
  ...styleProps
}: InternalChevronAccordionProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <StyledAccordion
      $position={"relative"}
      $pv={"inner-padding-s"}
      $display={"flex"}
      $flexDirection={"column"}
      $gap={"all-spacing-1"}
      {...styleProps}
    >
      <StyledAccordionButton
        id={id}
        $width={"100%"}
        $justifyContent={"space-between"}
        $alignItems={"center"}
      >
        {header}
        <OakIcon
          iconName="chevron-down"
          $width="all-spacing-8"
          $height="all-spacing-8"
          alt=""
          style={{
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "all 0.3s ease 0s",
          }}
        />
      </StyledAccordionButton>
      <InternalAccordionContent id={id}>{children}</InternalAccordionContent>
      <StyledAccordionUnderline $fill={"border-decorative5-stronger"} />
    </StyledAccordion>
  );
};

/**
 * An Internal accordion component that can be used to show/hide content
 *
 * It has a shadow and a hand-drawn underline effect and a chevron icon that rotates when the accordion is open
 *
 * other flex, box and color style proops can be passed to the accordion as props
 */

export const InternalChevronAccordion = (
  props: InternalChevronAccordionProps,
) => {
  return (
    <InternalAccordionProvider isInitialOpen={false}>
      <Accordion {...props} />
    </InternalAccordionProvider>
  );
};
