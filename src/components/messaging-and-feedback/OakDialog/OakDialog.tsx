import React, { ReactNode } from "react";

import {
  InternalModalAccessibleName,
  InternalModalBase,
} from "@/components/internal-components/InternalModalBase";
import { OakAllSpacingToken } from "@/styles/theme/spacing";

export type OakDialogProps = {
  /**
   * Whether the dialog is open. It can't be dismissed, so close it from your own buttons.
   */
  isOpen: boolean;
  /**
   * The content of the dialog, including a title.
   */
  children: ReactNode;
  /**
   * Fixed footer for the choice buttons, e.g. `OakDialogFooter`.
   */
  footerSlot?: ReactNode;
  /**
   * Focus the top of the content on open. Set to `false` and add
   * `data-autofocus` to a button to focus that button instead.
   *
   * @default true
   */
  focusContentOnOpen?: boolean;
  /**
   * @default spacing-960
   */
  width?: OakAllSpacingToken;
  /**
   * @default spacing-640
   */
  maxHeight?: OakAllSpacingToken;
  /**
   * Id of an element that describes the dialog. Only use for short messages.
   */
  "aria-describedby"?: string;
  /**
   * @default document.body
   */
  domContainer?: Element;
  /**
   * Overrides the `modal-dialog` z-index token. Only for consumers not using Oak z-index tokens.
   */
  zIndex?: number;
  /**
   * Override for the `returnFocus` behaviour of `FocusOn`.
   *
   * By default focus returns to the element that was focused before the dialog opened.
   */
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
} & InternalModalAccessibleName;

/**
 * A centred dialog that requires an explicit choice, e.g. acknowledging a
 * content guidance warning.
 *
 * - **Can't be dismissed**: no close button, Escape or backdrop click. Close it
 *   by setting `isOpen` to `false`.
 * - **Focus**: goes to the content on open. To focus a button instead, use
 *   `focusContentOnOpen={false}` and `data-autofocus` on the least destructive
 *   (or most used) button.
 * - **Name**: `aria-label` or `aria-labelledby` is required.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=25437-6387>
 */
export const OakDialog = ({
  isOpen,
  children,
  footerSlot,
  focusContentOnOpen = true,
  width = "spacing-960",
  maxHeight = "spacing-640",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  domContainer,
  zIndex,
  returnFocus,
}: OakDialogProps) => {
  return (
    <InternalModalBase
      isOpen={isOpen}
      placement="centre"
      role="alertdialog"
      width={width}
      height={maxHeight}
      borderRadius="border-radius-xl"
      footerSlot={footerSlot}
      autoFocusContent={focusContentOnOpen}
      aria-describedby={ariaDescribedBy}
      domContainer={domContainer}
      zIndex={zIndex}
      returnFocus={returnFocus}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </InternalModalBase>
  );
};
