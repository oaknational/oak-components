import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

export type OakDialogFooterLayout =
  | "horizontal"
  | "vertical"
  | "left"
  | "right";

export type OakDialogFooterProps = {
  /**
   * `horizontal` shares the width, `vertical` stacks full width,
   * `left` / `right` align buttons at natural width.
   */
  layout: OakDialogFooterLayout;
  /**
   * The footer actions, usually `OakSecondaryButton` then `OakPrimaryButton`
   */
  children: ReactNode;
};

// `&&` raises specificity to beat Oak buttons' `width: max-content`
const StyledFooter = styled(OakFlex)<{ $layout: OakDialogFooterLayout }>`
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
 * Footer for `OakDialog`'s `footerSlot`, in the Figma footer layouts.
 *
 * NB keep in sync with `OakModalFooter`.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6560>
 */
export const OakDialogFooter = ({ layout, children }: OakDialogFooterProps) => (
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
