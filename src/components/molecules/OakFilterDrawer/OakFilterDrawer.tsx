import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakBox, OakFlex, OakHeading } from "@/components/atoms";
import { OakModalProps, OakSecondaryLink } from "@/components/molecules";
import { FadeOutBox } from "@/components/molecules/OakModal/OakModal";

type OakFilterDrawerProps = OakModalProps & {
  /**
   * Called when the clear button is clicked
   */
  clearAllInputs: () => void;
};

const SlideInFlex = styled(OakFlex)<{ $state: TransitionStatus }>`
  max-width: 100vw;
  transform: ${({ $state }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return "translateX(0)";
      default:
        return "translateX(100%)";
    }
  }};
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

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
  const [isScrolled, setIsScrolled] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!canaryElement) {
      return;
    }
    const observer = new IntersectionObserver(
      (mutations) => {
        setIsScrolled(!mutations.some((mutation) => mutation.isIntersecting));
      },
      {
        root: canaryElement.parentElement,
      },
    );
    observer.observe(canaryElement);

    return () => {
      observer.disconnect();
    };
  }, [canaryElement]);
  // `createPortal` is not supported in SSR so we can only render when mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
    <Transition
      in={isOpen}
      nodeRef={transitionRef}
      addEndListener={(done) => {
        transitionRef.current?.addEventListener("transitionend", done);
      }}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <FocusOn onEscapeKey={onClose} returnFocus autoFocus>
          <FadeOutBox
            $position="fixed"
            $inset="all-spacing-0"
            $zIndex={finalZIndex}
            $background="black"
            $opacity="semi-transparent"
            $state={state}
            $transition="standard-ease"
          />
          <SlideInFlex
            ref={transitionRef}
            $background="bg-primary"
            $position="fixed"
            $right="all-spacing-0"
            $top="all-spacing-0"
            $bottom="all-spacing-0"
            $width={["all-spacing-22"]}
            $zIndex={finalZIndex}
            $flexDirection="column"
            $transition="standard-ease"
            $color="text-primary"
            role="dialog"
            $state={state}
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
            <div style={{ display: "contents" }} data-autofocus-inside>
              <OakFlex
                $flexGrow={1}
                $flexDirection="column"
                $overflow="auto"
                $bt="border-solid-s"
                $borderColor={
                  isScrolled ? "border-neutral-lighter" : "transparent"
                }
              >
                <div ref={setCanaryElement} />
                <OakBox $mh="space-between-m">{children}</OakBox>
              </OakFlex>
              <OakFlex
                $flexDirection={["column", "row"]}
                $bt="border-solid-s"
                $borderColor="border-neutral-lighter"
                $pa="inner-padding-xl"
                $gap={["space-between-s", "space-between-m"]}
                $width="100%"
              >
                {footerSlot}
              </OakFlex>
            </div>
          </SlideInFlex>
        </FocusOn>
      )}
    </Transition>,
    domContainer ?? document.body,
  );
};
