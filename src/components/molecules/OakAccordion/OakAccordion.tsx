import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";

export type OakAccordionProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
  /**
   * The heading tag the header of the accordion is to assume
   */
  headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Slot to place content after the header and outside the button
   */
  headerAfterSlot?: ReactNode;
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
};

const StyledOakFlex = styled(InternalAccordionButton)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;

  outline: none;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

const Accordion = ({
  header,
  headerTag,
  headerAfterSlot,
  children,
  id,
}: OakAccordionProps) => {
  const { isOpen } = useAccordionContext();
  const HeaderTag = headerTag || "h3";

  return (
    <OakBox
      id={id}
      $borderColor="border-neutral-lighter"
      $ba="border-solid-s"
      $pa="inner-padding-m"
      $background={isOpen ? "bg-neutral" : "bg-primary"}
    >
      <OakFlex
        as={HeaderTag}
        $font="heading-light-7"
        $textDecoration={isOpen ? "underline" : "none"}
      >
        <StyledOakFlex $alignItems="center" $pa="inner-padding-m" id={id}>
          <OakIcon
            iconName="chevron-down"
            $mr="space-between-s"
            $width="all-spacing-6"
            $height="all-spacing-6"
            alt=""
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          {header}
        </StyledOakFlex>
        {headerAfterSlot && (
          <OakFlex $ml="space-between-m">{headerAfterSlot}</OakFlex>
        )}
      </OakFlex>
      <InternalAccordionContent
        aria-labelledby={id}
        $ml="space-between-m"
        $pl="inner-padding-m"
        $mt="space-between-sssx"
        $font="body-3"
      >
        {children}
      </InternalAccordionContent>
    </OakBox>
  );
};

/**
 * An accordion component that can be used to show/hide content
 */

export const OakAccordion = (props: OakAccordionProps) => {
  const { initialOpen = false, ...rest } = props;
  return (
    <InternalAccordionProvider isInitialOpen={initialOpen}>
      <Accordion {...rest} />
    </InternalAccordionProvider>
  );
};
