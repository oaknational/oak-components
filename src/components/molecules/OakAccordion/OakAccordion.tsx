import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakAccordionProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
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

const StyledOakFlex = styled(OakFlex)`
  font: inherit;
  border: none;
  background: none;
  appearance: none;
  margin: -${parseSpacing("inner-padding-m")};

  outline: none;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

/**
 * An accordion component that can be used to show/hide content
 */
export const OakAccordion = ({
  header,
  headerAfterSlot,
  children,
  initialOpen = false,
  id,
}: OakAccordionProps) => {
  const [isOpen, setOpen] = useState(initialOpen);

  return (
    <OakBox
      $borderColor="border-neutral-lighter"
      $ba="border-solid-s"
      $pa="inner-padding-m"
      $background={isOpen ? "bg-neutral" : "bg-primary"}
    >
      <OakFlex
        as="h3"
        $font="heading-light-7"
        $textDecoration={isOpen ? "underline" : "none"}
      >
        <StyledOakFlex
          as="button"
          type="button"
          onClick={() => setOpen(!isOpen)}
          $alignItems="center"
          $pa="inner-padding-m"
          $flexGrow={1}
          aria-expanded={isOpen}
          id={id}
        >
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
      <OakBox
        $ml="space-between-m"
        $pl="inner-padding-m"
        $mt="space-between-sssx"
        $font="body-3"
        hidden={!isOpen}
        aria-labelledby={id}
        role="region"
      >
        {children}
      </OakBox>
    </OakBox>
  );
};
