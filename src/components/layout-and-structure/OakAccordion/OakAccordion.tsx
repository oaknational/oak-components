import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/internal-components/InternalAccordion";
import useAccordionContext from "@/components/internal-components/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/internal-components/InternalAccordion/InternalAccordionProvider";
import { OakUiRoleToken } from "@/styles/theme/color";
import { BorderStyleProps } from "@/styles/utils/borderStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

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
  /**
   * Which side the chevron icon appears on
   * @default "left"
   */
  chevronPosition?: "left" | "right";
  /**
   * The background color when the accordion is open
   * @default "bg-neutral"
   */
  openBackground?: OakUiRoleToken;
  /**
   * The color of the header text and chevron icon. When set, the icon is
   * automatically tinted to match via CSS filter so a single prop keeps both in sync.
   */
  $color?: OakUiRoleToken;
} & BorderStyleProps &
  FlexStyleProps &
  SpacingStyleProps;

const StyledOakFlex = styled(InternalAccordionButton)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;

  outline: none;

  &:focus-visible {
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

const Accordion = ({
  header,
  headerTag,
  headerAfterSlot,
  children,
  id,
  chevronPosition = "left",
  openBackground = "bg-neutral",
  $color,
  ...styleProps
}: OakAccordionProps) => {
  const { isOpen } = useAccordionContext();
  const HeaderTag = headerTag || "h3";

  const chevron = (
    <OakIcon
      iconName="chevron-down"
      $width="spacing-24"
      $height="spacing-24"
      alt=""
      $colorFilter={$color}
      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
      {...(chevronPosition === "left"
        ? { $mr: "spacing-16" }
        : { $ml: "auto" })}
    />
  );

  return (
    <OakBox
      id={id}
      $borderColor="border-neutral-lighter"
      $ba="border-solid-s"
      $pa="spacing-16"
      $background={isOpen ? openBackground : "bg-primary"}
      {...styleProps}
    >
      <OakFlex
        as={HeaderTag}
        $font="heading-light-7"
        $color={$color}
        $textDecoration={isOpen ? "underline" : "none"}
      >
        <StyledOakFlex
          $alignItems="center"
          $pa="spacing-16"
          $width={chevronPosition === "right" ? "100%" : undefined}
          id={id}
        >
          {chevronPosition === "left" && chevron}
          {header}
          {chevronPosition === "right" && chevron}
        </StyledOakFlex>
        {headerAfterSlot && (
          <OakFlex $ml="spacing-24">{headerAfterSlot}</OakFlex>
        )}
      </OakFlex>
      <InternalAccordionContent
        aria-labelledby={id}
        $ml={chevronPosition === "right" ? "spacing-0" : "spacing-24"}
        $pl={chevronPosition === "right" ? "spacing-0" : "spacing-16"}
        $mt="spacing-4"
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
