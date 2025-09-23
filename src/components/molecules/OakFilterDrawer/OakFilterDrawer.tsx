import React, { HTMLAttributes, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakBox, OakFlex, OakHeading } from "@/components/atoms";
import { OakSecondaryLink } from "@/components/molecules/OakSecondaryLink";
import useIsScrolled from "@/hooks/useIsScrolled";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";

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

const StyledClearButton = styled(OakSecondaryLink)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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
        $ma="space-between-m"
        $justifyContent="space-between"
        $alignItems="center"
      >
        <StyledClearButton
          onClick={clearAllInputs}
          aria-label="Clear"
          element="button"
        >
          Clear
        </StyledClearButton>
        <OakHeading $font={"heading-6"} tag="h3">
          Filters
        </OakHeading>
        <InternalShadowRoundButton
          onClick={onClose}
          aria-label="Close"
          defaultIconBackground="transparent"
          defaultIconColor="black"
          defaultTextColor="transparent"
          hoverTextColor="transparent"
          disabledTextColor="transparent"
          hoverIconBackground="black"
          hoverIconColor="white"
          disabledIconBackground="transparent"
          iconBackgroundSize="all-spacing-6"
          iconSize="all-spacing-6"
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
            <OakBox $mh="space-between-m">{children}</OakBox>
          </div>
        </ObserveScroll>
      </OakFlex>
      <OakFlex
        $flexDirection={["column", "row"]}
        $bt="border-solid-s"
        $borderColor="border-neutral-lighter"
        $pa="inner-padding-s"
        $gap={["space-between-s", "space-between-m"]}
        $width="100%"
      >
        {footerSlot}
      </OakFlex>
    </InternalModalTransition>,
    domContainer ?? document.body,
  );
};
