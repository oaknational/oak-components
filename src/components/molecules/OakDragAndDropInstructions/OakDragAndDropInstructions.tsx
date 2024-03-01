import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon, OakKbd } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

const KeyboardInstructions = styled(OakBox)`
  @media (pointer: coarse) {
    display: none;
  }
`;

const TouchInstructions = styled(OakBox)`
  @media (hover: hover) and (pointer: fine) {
    display: none;
  }
`;

/**
 * Adds additional leading between each line of text to make room for the
 * keyboard instructions wrapped in `<OakKbd>`
 *
 * This might be a useful atom to extract
 */
const StyledLeadingTrim = styled(OakFlex)`
  margin-block: calc(-${parseSpacing("space-between-ssx")} / 2);
  line-height: calc(1.5rem + ${parseSpacing("space-between-ssx")});
`;

/**
 * Displays different instructions for drag and drop functionality
 * depending on the user's primary input device
 */
export const OakDragAndDropInstructions = (
  props: ComponentPropsWithoutRef<typeof OakFlex>,
) => {
  return (
    <OakFlex $gap="space-between-ssx" {...props}>
      <OakFlex $flexGrow={0}>
        <OakIcon iconName="move-arrows" />
      </OakFlex>
      <StyledLeadingTrim
        $font="body-2"
        $gap="space-between-ssx"
        $flexDirection="column"
      >
        <KeyboardInstructions>
          Where you see this, you can click and move things around by dragging
          them, or by pressing the{" "}
          <OakKbd>
            <span aria-hidden="true">↹</span> Tab
          </OakKbd>{" "}
          and <OakKbd>Space</OakKbd> keys and the <OakKbd>←</OakKbd>{" "}
          <OakKbd>↑</OakKbd> <OakKbd>↓</OakKbd> <OakKbd>→</OakKbd> arrows on
          your keyboard
        </KeyboardInstructions>
        <TouchInstructions>
          Where you see this, you can click and move things around by dragging
          them. If you're using a keyboard, press the{" "}
          <OakKbd>
            <span aria-hidden="true">↹</span> Tab
          </OakKbd>{" "}
          and <OakKbd>Space</OakKbd> keys and the <OakKbd>←</OakKbd>{" "}
          <OakKbd>↑</OakKbd> <OakKbd>↓</OakKbd> <OakKbd>→</OakKbd> arrows on
          your keyboard to select and move items.
        </TouchInstructions>
      </StyledLeadingTrim>
    </OakFlex>
  );
};
