import React, { ReactNode } from "react";
import styled from "styled-components";

import {
  OakBoxProps,
  OakFlex,
  OakIcon,
  OakBox,
  oakBoxCss,
} from "@/components/atoms";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { flexStyle, FlexStyleProps } from "@/styles/utils/flexStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

export type InternalUnstyledChevronAccordionProps = {
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
  content: ReactNode;
  /**
   * Optional subheader to display above the fold
   */
  subheader?: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
  /**
   * Aria label for the button when the accordion is open
   */
  ariaLabelOpen?: string;
  /**
   * Aria label for the button when the accordion is closed
   */
  ariaLabelClose?: string;
} & FlexStyleProps &
  OakBoxProps &
  ColorStyleProps;

const StyledAccordionButton = styled(InternalAccordionButton)<FlexStyleProps>`
  ${flexStyle}
  ${oakBoxCss}
  &:hover {
    .chevron-icon {
      filter: ${parseColorFilter("grey60")};
    }
  }
  &:focus-visible {
    .focus-outline {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({
  header,
  content,
  id,
  subheader,
  ariaLabelOpen = "Close accordion",
  ariaLabelClose = "Open accordion",
  ...styleProps
}: InternalUnstyledChevronAccordionProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakFlex $pv={"inner-padding-s"} $flexDirection={"column"} {...styleProps}>
      <OakFlex $justifyContent={"space-between"} $alignItems={"center"}>
        {header}
        <OakBox>
          <StyledAccordionButton
            id={id}
            aria-label={isOpen ? ariaLabelOpen : ariaLabelClose}
          >
            <OakBox
              className="focus-outline"
              $borderRadius={"border-radius-s"}
              $mr={"space-between-xs"}
            >
              <OakIcon
                className="chevron-icon"
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
        </OakBox>
      </OakFlex>
      {subheader}
      <OakBox $position={"relative"} $overflow={"auto"}>
        <InternalAccordionContent aria-labelledby={id}>
          {content}
        </InternalAccordionContent>
      </OakBox>
    </OakFlex>
  );
};

/**
 * - InternalUnstyledChevronAccordion has a chevron icon that rotates when the accordion is open.
 * - Unlike InternalChevronAccordion, it has no border effects for hover or focus states.
 * - Only the chevron is interactive so as to allow interactive elements to be placed in the header.
 * - The intention is for these to be added by consuming components as needed.
 */

export const InternalUnstyledChevronAccordion = ({
  initialOpen = false,
  ...props
}: InternalUnstyledChevronAccordionProps) => {
  return (
    <InternalAccordionProvider isInitialOpen={initialOpen}>
      <Accordion initialOpen {...props} />
    </InternalAccordionProvider>
  );
};
