import React, { ReactNode } from "react";

import { OakBoxProps, OakFlex, OakIcon, OakBox } from "@/components/atoms";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";

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
  children: ReactNode;
  /**
   * Optional subheading to display above the fold
   */
  subheading?: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
} & FlexStyleProps &
  OakBoxProps &
  ColorStyleProps;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({
  header,
  children,
  id,
  subheading,
  ...styleProps
}: InternalUnstyledChevronAccordionProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakFlex $pv={"inner-padding-s"} $flexDirection={"column"} {...styleProps}>
      <OakFlex $justifyContent={"space-between"} $alignItems={"center"}>
        {header}

        <OakBox>
          <InternalAccordionButton id={id} $flexGrow={0} $background={"blue"}>
            <OakIcon
              $mr={"space-between-xs"}
              iconName="chevron-down"
              $width="all-spacing-7"
              $height="all-spacing-7"
              alt="An arrow to indicate whether the item is open or closed"
              style={{
                transform: isOpen ? "rotate(180deg)" : "none",
                transition: "all 0.3s ease 0s",
              }}
            />
          </InternalAccordionButton>
        </OakBox>
      </OakFlex>
      {!isOpen && subheading}
      <OakBox $position={"relative"} $overflow={"auto"}>
        <InternalAccordionContent aria-labelledby={id}>
          {children}
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
