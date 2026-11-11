import React from "react";

import {
  InternalModalFooter,
  InternalModalFooterLayout,
  InternalModalFooterProps,
} from "@/components/internal-components/InternalModalFooter";

export type OakDialogFooterLayout = InternalModalFooterLayout;

export type OakDialogFooterProps = InternalModalFooterProps;

/**
 * A footer for the `footerSlot` of `OakDialog`, in one of the four Figma
 * footer layouts. You can pass your own content to `footerSlot` instead.
 *
 * - `horizontal`: buttons side by side
 * - `vertical`: buttons stacked
 * - `left` / `right`: buttons aligned to that side
 *
 * For `horizontal` and `vertical`, give each button `width="100%"` so they
 * fill the footer (sharing it equally when horizontal), as in Figma.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6560>
 */
export const OakDialogFooter = ({ layout, children }: OakDialogFooterProps) => (
  <InternalModalFooter layout={layout}>{children}</InternalModalFooter>
);
