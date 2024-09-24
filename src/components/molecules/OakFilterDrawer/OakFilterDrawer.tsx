import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakBox, OakFlex, OakHeading } from "@/components/atoms";
import { OakModalProps, OakSecondaryLink } from "@/components/molecules";
import useCanaryObserver from "@/hooks/useCanaryObserver";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";

type OakFilterDrawerProps = OakModalProps & {
  /**
   * Called when the clear button is clicked
   */
  clearAllInputs: () => void;
};

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
  const [canaryElement, setCanaryElement] = useState<HTMLDivElement | null>(
    null,
  );
  const isScrolled = useCanaryObserver(canaryElement);

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
      isModal={false}
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
        <div ref={setCanaryElement} />
        <OakBox $mh="space-between-m">{children}</OakBox>
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
