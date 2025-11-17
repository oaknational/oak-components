import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon, OakKbd } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

/**
 * Adds additional leading between each line of text to make room for the
 * keyboard instructions wrapped in `<OakKbd>`
 *
 * This might be a useful atom to extract
 */
const StyledLeadingTrim = styled(OakBox)`
  margin-block: calc(-${parseSpacing("spacing-8")} / 2);
  line-height: calc(1.5rem + ${parseSpacing("spacing-8")});
`;

/**
 * Displays instructions for drag and drop functionality
 */
export const OakDragAndDropInstructions = (
  props: ComponentPropsWithoutRef<typeof OakFlex>,
) => {
  return (
    <OakFlex $gap="spacing-8" {...props}>
      <OakFlex $flexGrow={0}>
        <OakIcon iconName="move-arrows" />
      </OakFlex>
      <StyledLeadingTrim $font="body-2">
        Click and drag answers to change the order, or select using{" "}
        <OakKbd>
          <span aria-hidden="true">↹</span> Tab
        </OakKbd>{" "}
        then move by pressing <OakKbd>Space</OakKbd> and the <OakKbd>↑</OakKbd>{" "}
        <OakKbd>↓</OakKbd> arrows on your keyboard.
      </StyledLeadingTrim>
    </OakFlex>
  );
};
