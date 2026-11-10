import React from "react";

import {
  InternalModalFooter,
  InternalModalFooterLayout,
  InternalModalFooterProps,
} from "@/components/internal-components/InternalModalFooter";

export type OakModalFooterLayout = InternalModalFooterLayout;

export type OakModalFooterProps = InternalModalFooterProps;

/**
 * A footer for the `footerSlot` of `OakModal`, in one of the four Figma
 * footer layouts. You can pass your own content to `footerSlot` instead.
 *
 * - `horizontal`: buttons side by side, sharing the width equally
 * - `vertical`: buttons stacked, each full width
 * - `left` / `right`: buttons at their natural width, aligned to that side
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6560>
 */
export const OakModalFooter = ({ layout, children }: OakModalFooterProps) => (
  <InternalModalFooter layout={layout}>{children}</InternalModalFooter>
);
