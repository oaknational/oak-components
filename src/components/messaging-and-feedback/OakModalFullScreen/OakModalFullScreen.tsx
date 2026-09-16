import React, { HTMLAttributes, ReactNode, useId } from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";

import { OakCloseButton } from "@/components/buttons/OakCloseButton";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading, OakHeadingTag } from "@/components/typography/OakHeading";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { useMounted } from "@/hooks/useMounted";

export type OakModalFullScreenProps = {
  /**
   * The content of the modal
   */
  children: ReactNode;
  /**
   * Determines whether to show the modal or not
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed via the close button or the escape key
   */
  onClose: () => void;
  /**
   * Names the dialog and titles it. Rendered in the header.
   */
  title: string;
  /**
   * The heading level of the title.
   *
   * @default h2
   */
  headingTag?: OakHeadingTag;
  /**
   * Accessible label for the close button
   *
   * @default Close
   */
  closeButtonLabel?: string;
  /**
   * Fixed area at the bottom of the modal, which remains in view when the
   * content is scrolled
   */
  footerSlot?: ReactNode;
  /**
   * If true, pressing the escape key will not call onClose
   */
  disableEscapeKey?: boolean;
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
   * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
   */
  zIndex?: number;
  /**
   * Override for returnFocus behavior of FocusOn
   */
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

/**
 *
 * A dialog that covers the whole viewport in durable task situations.
 *
 * The dialog names itself from `title`, so it needs no `aria-label` unless you
 * want a name that differs from the visible one. Nothing of the page remains visible
 * behind this surface.
 *
 */
export const OakModalFullScreen = ({
  children,
  isOpen,
  onClose,
  title,
  headingTag = "h2",
  closeButtonLabel = "Close",
  footerSlot,
  disableEscapeKey = false,
  domContainer,
  zIndex,
  returnFocus,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...rest
}: OakModalFullScreenProps) => {
  const { isScrolled, ObserveScroll } = useIsScrolled();
  const isMounted = useMounted();
  const headingId = useId();

  if (!isMounted || !isOpen) {
    return null;
  }

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
    <FocusOn
      onEscapeKey={() => !disableEscapeKey && onClose()}
      returnFocus={returnFocus ?? true}
      autoFocus
      preventScrollOnFocus
    >
      <OakFlex
        role="dialog"
        aria-modal={true}
        $position="fixed"
        $inset="spacing-0"
        $zIndex={finalZIndex}
        $background="bg-primary"
        $color="text-primary"
        $flexDirection="column"
        data-testid="modal-full-screen"
        {...rest}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy || (ariaLabel ? undefined : headingId)}
      >
        <OakFlex
          $alignItems="center"
          $justifyContent="space-between"
          $gap="spacing-16"
          $pa={["spacing-12", "spacing-16"]}
        >
          <OakHeading
            id={headingId}
            tag={headingTag}
            $font={["heading-6", "heading-5"]}
          >
            {title}
          </OakHeading>
          <OakCloseButton onClose={onClose} aria-label={closeButtonLabel} />
        </OakFlex>
        <OakFlex
          $flexGrow={1}
          $flexDirection="column"
          $overflow="auto"
          $ph={["spacing-16", "spacing-24"]}
          $pb={["spacing-16", "spacing-24"]}
          $bt="border-solid-s"
          $borderColor={isScrolled ? "border-neutral-lighter" : "transparent"}
          tabIndex={0}
          style={{ scrollbarGutter: "stable" }}
          data-testid="modal-full-screen-content"
        >
          <ObserveScroll>
            <div data-autofocus-inside tabIndex={-2}>
              {children}
            </div>
          </ObserveScroll>
        </OakFlex>
        {footerSlot && (
          <OakFlex
            $flexDirection={["column", "row"]}
            $alignItems="center"
            $justifyContent="flex-end"
            $gap={["spacing-16", "spacing-24"]}
            $pa="spacing-12"
            $width="100%"
            $bt="border-solid-s"
            $borderColor="border-neutral-lighter"
          >
            {footerSlot}
          </OakFlex>
        )}
      </OakFlex>
    </FocusOn>,
    domContainer ?? document.body,
  );
};
