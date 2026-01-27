import React, { HTMLAttributes, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { InternalShadowRoundButton } from "@/components/internal-components/InternalShadowRoundButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakSecondaryLink } from "@/components/navigation/OakSecondaryLink";
import useIsScrolled from "@/hooks/useIsScrolled";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/internal-components/InternalModalTransition/InternalModalTransition";

type OakFilterDrawerProps = {
  /**
   * Called when the clear button is clicked
   */
  clearAllInputs: () => void;

  /**
   * The content of the modal.
   * Use with `<OakModalBody>` for best results.
   */
  children: ReactNode;
  /**
   * Slot for the footer of the modal.
   * Use with `<OakModalFooter>` for best results.
   */
  footerSlot?: ReactNode;
  /**
   * Indicates whether the modal is open or closed
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed
   */
  onClose: () => void;
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
  /**
   * Whether the modal should be anchored to the left side of the screen.
   */
  isLeftHandSide?: boolean;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

/**
 *
 * Based on the OakModal component, this component is a filter drawer that slides in from the right side of the screen.
 * Designed for mobile and tablet devices
 *
 * ### Callbacks
 * clearAllInputs: used to clear filter options
 *
 */

export const OakFilterDrawer = ({
  isOpen,
  domContainer,
  onClose,
  zIndex,
  children,
  clearAllInputs,
  footerSlot,
  ...rest
}: OakFilterDrawerProps) => {
  const { isScrolled, ObserveScroll } = useIsScrolled();

  const transitionRef = useRef<HTMLDivElement>(null);

  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
    <InternalModalTransition
      isOpen={isOpen}
      transitionRef={transitionRef}
      onClose={onClose}
      finalZIndex={finalZIndex}
      isLeftHandSide={false}
      {...rest}
    >
      <OakFlex
        $ma="spacing-24"
        $justifyContent="space-between"
        $alignItems="center"
      >
        <OakSecondaryLink
          onClick={clearAllInputs}
          aria-label="Clear"
          element="button"
        >
          Clear
        </OakSecondaryLink>
        <OakHeading $font={"heading-6"} tag="h3">
          Filters
        </OakHeading>
        <InternalShadowRoundButton
          onClick={onClose}
          aria-label="Close"
          defaultIconBackground="transparent"
          defaultIconColor="icon-primary"
          defaultTextColor="transparent"
          hoverTextColor="transparent"
          disabledTextColor="transparent"
          hoverIconBackground="icon-primary"
          hoverIconColor="icon-main"
          disabledIconBackground="transparent"
          iconBackgroundSize="spacing-24"
          iconSize="spacing-24"
          iconName="cross"
        />
      </OakFlex>
      <OakFlex
        $flexGrow={1}
        $flexDirection="column"
        $overflow="auto"
        $bt="border-solid-s"
        $borderColor={isScrolled ? "border-neutral-lighter" : "transparent"}
      >
        <ObserveScroll>
          <div data-autofocus-inside tabIndex={-2}>
            <OakBox $mh="spacing-24">{children}</OakBox>
          </div>
        </ObserveScroll>
      </OakFlex>
      <OakFlex
        $flexDirection={["column", "row"]}
        $bt="border-solid-s"
        $borderColor="border-neutral-lighter"
        $pa="spacing-12"
        $gap={["spacing-16", "spacing-24"]}
        $width="100%"
      >
        {footerSlot}
      </OakFlex>
    </InternalModalTransition>,
    domContainer ?? document.body,
  );
};
