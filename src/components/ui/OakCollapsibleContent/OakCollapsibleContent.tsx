import React, { ComponentProps } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/base";
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
    background-color: ${parseColor("grey50")};
  }
  &::-webkit-scrollbar-track {
    border-radius: ${parseBorderRadius("border-radius-m")};
    background-color: ${parseColor("white")};
  }
  &::-webkit-scrollbar {
    width: ${parseSpacing("all-spacing-3")};
    height: ${parseSpacing("all-spacing-3")};
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
        $ph="inner-padding-m"
        $pv="inner-padding-xl"
        $borderRadius="border-radius-m"
        {...rest}
      >
        <StyledScrollBox
          $overflow="auto"
          $maxHeight="100%"
          $width="100%"
          $pr="inner-padding-m"
        >
          {children}
        </StyledScrollBox>
      </OakFlex>
    </OakBox>
  );
};
