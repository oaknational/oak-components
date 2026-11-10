import React, { ReactNode } from "react";

import { OakCloseButton } from "@/components/buttons/OakCloseButton";
import {
  InternalModalAccessibleName,
  InternalModalBase,
} from "@/components/internal-components/InternalModalBase";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakAllSpacingToken } from "@/styles/theme/spacing";

export type OakModalPosition =
  | "fullscreen"
  | "left"
  | "right"
  | "top"
  | "bottom";

export type OakModalProps = {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Called when the user closes the modal with the close button,
   * the Escape key or a backdrop click
   */
  onClose: () => void;
  /**
   * Where the modal is placed.
   *
   * - `fullscreen` covers the whole page
   * - `left` / `right` are full-height drawers on that edge
   * - `top` / `bottom` are full-width drawers on that edge
   *
   * Drawers fill the screen on small (mobile) screens.
   */
  position: OakModalPosition;
  /**
   * Width of `left` / `right` drawers, or height of `top` / `bottom` drawers.
   * Capped at the screen size. Ignored for `fullscreen` and on small screens.
   *
   * @default spacing-640
   */
  size?: OakAllSpacingToken;
  /**
   * The content of the modal. It scrolls when it overflows.
   * Titles should use `heading-5` or larger.
   */
  children: ReactNode;
  /**
   * Content on the left of the header, e.g. a title, logo or action link.
   * It stays in view when the content scrolls.
   */
  headerSlot?: ReactNode;
  /**
   * `inverted` gives a black header with white text and a white close button,
   * e.g. for a logo and title
   *
   * @default default
   */
  headerVariant?: "default" | "inverted";
  /**
   * Fixed area at the bottom of the modal. It stays in view when the content scrolls.
   *
   * Use `OakModalFooter` for the Figma footer layouts, or pass your own content.
   */
  footerSlot?: ReactNode;
  /**
   * Id of an element that describes the modal
   */
  "aria-describedby"?: string;
  /**
   * The DOM container to render the modal portal into.
   *
   * @default document.body
   */
  domContainer?: Element;
  /**
   * Optional z-index override.
   *
   * Defaults to token: `modal-dialog`
   *
   * 🚨 This prop is intended for use by consumers that do not use
   * the internal system of z-index tokens.
   *
   * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
   */
  zIndex?: number;
} & InternalModalAccessibleName;

/**
 * A modal for actions or notifications that give critical information related
 * to a task. Don't use it for marketing or advertising.
 *
 * It can be closed with the close button, the Escape key, or by clicking the
 * backdrop. The close button gets focus when the modal opens.
 *
 * An accessible name is required: pass either `aria-label` or `aria-labelledby`.
 *
 * Use `OakDialog` instead when the user must make an explicit choice before
 * returning to the page.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6465>
 */
export const OakModal = ({
  isOpen,
  onClose,
  position,
  size = "spacing-640",
  children,
  headerSlot,
  headerVariant = "default",
  footerSlot,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  domContainer,
  zIndex,
}: OakModalProps) => {
  const accessibleName: InternalModalAccessibleName = ariaLabelledBy
    ? { "aria-labelledby": ariaLabelledBy }
    : { "aria-label": ariaLabel ?? "" };

  const isVerticalDrawer = position === "top" || position === "bottom";
  const isHeaderInverted = headerVariant === "inverted";

  // DOM order matches visual order (headerSlot, then the close button) so Tab
  // order follows what the user sees. `data-autofocus` gives the close button
  // initial focus regardless of what is in headerSlot.
  const header = (
    <OakFlex
      $width="100%"
      $minHeight="spacing-64"
      $pt="spacing-16"
      $ph="spacing-24"
      $gap="spacing-16"
      $alignItems="flex-start"
      $background={isHeaderInverted ? "bg-inverted" : undefined}
      $color={isHeaderInverted ? "text-inverted" : undefined}
      data-testid="modal-header"
    >
      {/* Same height as the close button so short content (e.g. an action
          link) is vertically centred against it, as in Figma */}
      <OakFlex $flexGrow={1} $minHeight="spacing-32" $alignItems="center">
        {headerSlot}
      </OakFlex>
      <OakCloseButton
        onClose={onClose}
        size="spacing-32"
        variant={headerVariant}
        data-autofocus
      />
    </OakFlex>
  );

  return (
    <InternalModalBase
      isOpen={isOpen}
      placement={position}
      onDismiss={onClose}
      width={isVerticalDrawer ? undefined : size}
      height={isVerticalDrawer ? size : undefined}
      header={header}
      footerSlot={footerSlot}
      aria-describedby={ariaDescribedBy}
      domContainer={domContainer}
      zIndex={zIndex}
      {...accessibleName}
    >
      {children}
    </InternalModalBase>
  );
};
