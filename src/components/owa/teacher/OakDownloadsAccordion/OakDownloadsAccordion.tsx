import React, { ReactNode } from "react";
import styled from "styled-components";

import {
  OakBox,
  OakBoxProps,
  oakBoxCss,
} from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/internal-components/InternalAccordion";
import useAccordionContext from "@/components/internal-components/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/internal-components/InternalAccordion/InternalAccordionProvider";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { OakCheckBox } from "@/components/form-elements/OakCheckBox";

export type OakDownloadsAccordionProps = {
  /**
   * Text to render in the subheading
   */
  downloadsText: string;
  /**
   * Event handler for select all checkbox
   */
  handleToggleSelectAll: () => void;
  /**
   * State of select all checkbox
   */
  selectAllChecked: boolean;
  /**
   * The content of the accordion
   */
  children: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
  /**
   * Whether the accordion starts in the open state, defaults to false
   */
  initialOpen?: boolean;
} & FlexStyleProps &
  OakBoxProps &
  ColorStyleProps;

const StyledAccordionButton = styled(InternalAccordionButton)<FlexStyleProps>`
  ${flexStyle}
  ${oakBoxCss}
  min-width: 0;
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
 * Internal accordion component that handles the accordion logic
 */
const Accordion = ({
  children,
  id,
  selectAllChecked,
  downloadsText,
  handleToggleSelectAll,
  ...styleProps
}: OakDownloadsAccordionProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakFlex
      $bt={"border-solid-s"}
      $bb={isOpen ? "border-solid-none" : "border-solid-s"}
      $borderColor={"border-neutral-lighter"}
      $pv={"spacing-12"}
      $flexDirection={"column"}
      $width={"100%"}
      {...styleProps}
    >
      <OakFlex $alignItems={"center"} $width={"100%"}>
        <OakFlex $alignItems={"center"} $width={"100%"} $gap={"spacing-16"}>
          <OakBox
            id="select-all-wrapper"
            $pa={"spacing-8"}
            onClick={handleToggleSelectAll}
          >
            <OakCheckBox
              onChange={() => undefined}
              checked={selectAllChecked}
              id="select-all"
              name="select-all"
              value={""}
              aria-labelledby="downloads-accordion-heading"
            />
          </OakBox>
          <StyledAccordionButton
            $justifyContent={"space-between"}
            $flexGrow={1}
            id={id}
            $alignItems={"center"}
            $mr={"spacing-12"}
          >
            <OakFlex
              $justifyContent={"center"}
              $alignItems={"center"}
              $gap={"spacing-12"}
            >
              <OakFlex
                $flexDirection={"column"}
                $justifyContent={"center"}
                $alignItems={"start"}
              >
                <OakHeading
                  $textAlign={"left"}
                  id="downloads-accordion-heading"
                  $color={"text-primary"}
                  $font={"heading-6"}
                  $mr={"spacing-16"}
                  tag="h2"
                >
                  {selectAllChecked
                    ? "All resources selected"
                    : "Select all resources"}
                </OakHeading>
                <OakBox $pr={"spacing-12"}>
                  <OakP $textAlign={"left"}>{downloadsText}</OakP>
                </OakBox>
              </OakFlex>
            </OakFlex>
            <OakBox
              className="focus-outline"
              $borderRadius={"border-radius-s"}
              $pa={"spacing-8"}
            >
              <OakIcon
                className="chevron-icon"
                iconName="chevron-down"
                $width="spacing-32"
                $height="spacing-32"
                alt="An arrow to indicate whether the item is open or closed"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "none",
                  transition: "all 0.3s ease 0s",
                }}
              />
            </OakBox>
          </StyledAccordionButton>
        </OakFlex>
      </OakFlex>
      {/* Accordion content */}
      <OakBox $position={"relative"} $overflow={"auto"}>
        <InternalAccordionContent $pt={"spacing-20"} aria-labelledby={id}>
          {children}
        </InternalAccordionContent>
      </OakBox>
    </OakFlex>
  );
};

/**
 * OakDownloadsAccordion
 *
 */
export const OakDownloadsAccordion = ({
  initialOpen = false,
  ...props
}: OakDownloadsAccordionProps) => {
  return (
    <InternalAccordionProvider isInitialOpen={initialOpen}>
      <Accordion {...props} />
    </InternalAccordionProvider>
  );
};
