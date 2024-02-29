import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakSortableSlotProps = {
  /**
   * The value to display for the slot
   */
  slotName: ReactNode;
  /**
   * Indicates whether the slot is active
   */
  isActive?: boolean;
  children: ReactNode;
};

const StyledBox = styled(OakBox)`
  outline: ${parseBorder("border-solid-l")} ${parseColor("border-primary")};
  outline-style: dashed;

  @media (hover: hover) {
    &:hover {
      background-color: ${parseColor("bg-primary")};
    }
  }
`;

/**
 *
 * @param param0
 * @returns
 */
export const OakSortableSlot = ({
  children,
  isActive,
  slotName,
}: OakSortableSlotProps) => {
  return (
    <OakFlex
      as="li"
      $gap="space-between-s"
      $background="bg-decorative2-subdued"
      $pa="inner-padding-m"
      $borderRadius="border-radius-m"
      $flexGrow={1}
    >
      <OakFlex
        $minWidth="all-spacing-14"
        $background="bg-decorative2-very-subdued"
        $borderRadius="border-radius-m"
        $alignItems="center"
        $justifyContent="center"
        $font="heading-3"
      >
        {slotName}
      </OakFlex>
      <StyledBox
        $background={isActive ? "bg-primary" : "bg-neutral"}
        $pa="inner-padding-xs"
        $borderRadius="border-radius-m"
        $width="100%"
        $minHeight="all-spacing-14"
      >
        {children}
      </StyledBox>
    </OakFlex>
  );
};
