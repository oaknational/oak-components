import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon, OakKbd } from "@/components/atoms";

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
      <OakFlex $font="body-2" $gap="space-between-ssx" $flexDirection="column">
        <KeyboardInstructions>
          <OakBox $mb="space-between-sssx">
            Where you see this, you can click and move things around by dragging
            them or by pressing the
          </OakBox>
          <OakBox>
            <OakKbd>↹ Tab</OakKbd> , <OakKbd>Space</OakKbd> and the{" "}
            <OakKbd>←</OakKbd> <OakKbd>↑</OakKbd> <OakKbd>↓</OakKbd>{" "}
            <OakKbd>→</OakKbd> arrows on your keyboard
          </OakBox>
        </KeyboardInstructions>
        <TouchInstructions>
          Where you see this, you can click and move things around by dragging
          them!
        </TouchInstructions>
      </OakFlex>
    </OakFlex>
  );
};
