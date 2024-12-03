import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnFocusUnderline } from "@/components/molecules/OakHandDrawnFocusUnderline";
import {
  OakBoxProps,
  OakFlex,
  OakIcon,
  OakBox,
  oakBoxCss,
} from "@/components/atoms";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
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
  position: relative;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    .shadow {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`;

const StyledContainer = styled(OakFlex)`
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
    <StyledContainer
      $position={"relative"}
      $pv={"inner-padding-s"}
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

        <OakBox $position={"relative"} $mr={"space-between-xs"}>
          <OakBox
            className="shadow"
            $position={"absolute"}
            $borderRadius={"border-radius-s"}
            $width={"100%"}
            $height={"100%"}
            $top="all-spacing-0"
          />
          <OakIcon
            iconName="chevron-down"
            $width="all-spacing-7"
            $height="all-spacing-7"
            alt="An arrow to indicate whether the item is open or closed"
            style={{
              transform: isOpen ? "rotate(180deg)" : "none",
              transition: "all 0.3s ease 0s",
            }}
          />
        </OakBox>
      </StyledAccordionButton>
      <InternalAccordionContent aria-labelledby={id} $overflow={"scroll"}>
        {children}
      </InternalAccordionContent>
      <StyledAccordionUnderline $fill={"border-decorative5-stronger"} />
    </StyledContainer>
  );
};

/**
 * InternalChevronAccordion has a chevron icon that rotates when the accordion is open
 */

export const InternalChevronAccordion = ({
  initialOpen = false,
  ...props
}: InternalChevronAccordionProps) => {
  return (
    <InternalAccordionProvider isInitialOpen={initialOpen}>
      <Accordion initialOpen {...props} />
    </InternalAccordionProvider>
  );
};
