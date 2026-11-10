import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

export type OakModalFooterLayout = "horizontal" | "vertical" | "left" | "right";

export type OakModalFooterProps = {
  /**
   * How the buttons are arranged.
   *
   * - `horizontal`: buttons side by side, sharing the width equally
   * - `vertical`: buttons stacked, each full width
   * - `left` / `right`: buttons at their natural width, aligned to that side
   */
  layout: OakModalFooterLayout;
  /**
   * The footer actions, usually `OakSecondaryButton` then `OakPrimaryButton`
   */
  children: ReactNode;
};

// `&&` doubles the class so these rules beat the `width: max-content` that
// Oak buttons set on their own wrapper
const StyledFooter = styled(OakFlex)<{ $layout: OakModalFooterLayout }>`
  ${({ $layout }) =>
    $layout === "horizontal" &&
    css`
      && > * {
        flex: 1 1 0;
      }
    `}
  ${({ $layout }) =>
    $layout === "vertical" &&
    css`
      && > * {
        width: 100%;
      }
    `}
`;

/**
 * A footer for the `footerSlot` of `OakModal`, in one of the four Figma
 * footer layouts. You can pass your own content to `footerSlot` instead.
 *
 * NB `OakDialogFooter` is a separate copy of this component. Keep the two in
 * step when the design changes.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6560>
 */
export const OakModalFooter = ({ layout, children }: OakModalFooterProps) => (
  <StyledFooter
    $layout={layout}
    $flexDirection={layout === "vertical" ? "column" : "row"}
    $justifyContent={layout === "right" ? "flex-end" : "flex-start"}
    $gap="spacing-24"
    $pa="spacing-16"
    $bt="border-solid-s"
    $borderColor="border-neutral-lighter"
  >
    {children}
  </StyledFooter>
);
