import React, { ComponentProps } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

export type OakCollapsibleContentProps = ComponentProps<typeof OakFlex> & {
  /**
   * Whether the content is displayed or not
   */
  isOpen: boolean;
};

const StyledScrollBox = styled(OakBox)`
  &::-webkit-scrollbar-thumb {
    border-radius: ${parseBorderRadius("border-radius-m")};
    background-color: ${parseColor("bg-interactive-element1")};
  }
  &::-webkit-scrollbar-track {
    border-radius: ${parseBorderRadius("border-radius-m")};
    background-color: ${parseColor("bg-primary")};
  }
  &::-webkit-scrollbar {
    width: ${parseSpacing("spacing-12")};
    height: ${parseSpacing("spacing-12")};
    border-radius: ${parseBorderRadius("border-radius-m")};
  }
`;

/**
 * A filled scrollable box that can be hidden with the `isOpen` prop.
 * Useful for hiding content that is not immediately relevant
 */
export const OakCollapsibleContent = ({
  isOpen,
  children,
  id,
  ...rest
}: OakCollapsibleContentProps) => {
  return (
    <OakBox $display={isOpen ? "block" : "none"} id={id}>
      <OakFlex
        $background="bg-neutral-stronger"
        $ph="spacing-16"
        $pv="spacing-24"
        $borderRadius="border-radius-m"
        {...rest}
      >
        <StyledScrollBox
          $overflow="auto"
          $maxHeight="100%"
          $width="100%"
          $pr="spacing-16"
        >
          {children}
        </StyledScrollBox>
      </OakFlex>
    </OakBox>
  );
};
