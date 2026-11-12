import React, { ReactNode } from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

export type InternalModalFooterLayout =
  | "horizontal"
  | "vertical"
  | "left"
  | "right";

export type InternalModalFooterProps = {
  /**
   * How the buttons are arranged.
   *
   * - `horizontal`: buttons side by side
   * - `vertical`: buttons stacked
   * - `left` / `right`: buttons aligned to that side
   *
   * For `horizontal` and `vertical`, give each button `width="100%"` so they
   * fill the footer (sharing it equally when horizontal), as in Figma.
   */
  layout: InternalModalFooterLayout;
  /**
   * The footer actions, usually `OakSecondaryButton` then `OakPrimaryButton`
   */
  children: ReactNode;
};

/**
 * The Figma footer layouts shared by `OakModalFooter` and `OakDialogFooter`.
 *
 * Renders a `div`, not a `<footer>`: inside a dialog a `<footer>` would
 * become an extra `contentinfo` landmark.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6560>
 */
export const InternalModalFooter = ({
  layout,
  children,
}: InternalModalFooterProps) => (
  <OakFlex
    $flexDirection={layout === "vertical" ? "column" : "row"}
    $justifyContent={layout === "right" ? "flex-end" : "flex-start"}
    $gap="spacing-24"
    $pa="spacing-16"
    $bt="border-solid-s"
    $borderColor="border-neutral-lighter"
  >
    {children}
  </OakFlex>
);
