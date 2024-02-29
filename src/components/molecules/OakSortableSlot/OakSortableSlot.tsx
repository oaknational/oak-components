import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakSortableSlotProps = {
  /**
   * Indicates whether the slot is active
   */
  isActive?: boolean;
  children?: ReactNode;
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
 * A slot for a sortable list
 *
 * Can be filled with a sortable item
 */
export const OakSortableSlot = ({
  children,
  isActive,
}: OakSortableSlotProps) => {
  return (
    <OakFlex
      $gap="space-between-s"
      $background="bg-decorative2-subdued"
      $pa="inner-padding-m"
      $borderRadius="border-radius-m"
      $flexGrow={1}
    >
      <StyledBox
        $background={isActive ? "bg-primary" : "bg-neutral"}
        $pa="inner-padding-xs"
        $borderRadius="border-radius-m"
        $width="100%"
        $minHeight="all-spacing-12"
      >
        {children}
      </StyledBox>
    </OakFlex>
  );
};
